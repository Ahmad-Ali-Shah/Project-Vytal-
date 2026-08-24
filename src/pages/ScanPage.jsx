import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision'
import { analyzeSignal } from '../lib/rppg'
import { fetchAIExplanation, SUPPORTED_LANGUAGES, isFlaggedReferral, getStressLabel } from '../lib/ai'
import { saveRecord } from '../lib/storage'

const MODES = [
  { id: 'face', label: 'Face scan', hint: 'Hold the phone at arm’s length with your face centered in the guide oval.' },
  { id: 'fingertip', label: 'Fingertip + flash', hint: 'Cover the rear camera lens and flash completely with your fingertip.' },
]

const READOUT_FIELDS = [
  { key: 'hr', label: 'Heart rate', unit: 'bpm' },
  { key: 'br', label: 'Breathing rate', unit: 'br/min' },
  { key: 'stress', label: 'Stress proxy', unit: '/100' },
]

const SCAN_DURATION_MS = 10000
const MODEL_ASSET_URL = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task'
const WASM_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm'

function getForeheadRoi(landmarkResult, width, height) {
  const face = landmarkResult?.faceLandmarks?.[0]
  if (!face) return null

  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity

  for (const point of face) {
    minX = Math.min(minX, point.x)
    maxX = Math.max(maxX, point.x)
    minY = Math.min(minY, point.y)
    maxY = Math.max(maxY, point.y)
  }

  const faceW = maxX - minX
  const faceH = maxY - minY
  return {
    x: Math.round((minX + faceW * 0.3) * width),
    y: Math.round(minY * height),
    w: Math.round(faceW * 0.4 * width),
    h: Math.round(faceH * 0.18 * height),
  }
}

function meanRgb(context, roi) {
  if (!roi || roi.w <= 0 || roi.h <= 0) return null
  const { data } = context.getImageData(roi.x, roi.y, roi.w, roi.h)
  const count = data.length / 4
  if (!count) return null

  let r = 0
  let g = 0
  let b = 0
  for (let index = 0; index < data.length; index += 4) {
    r += data[index]
    g += data[index + 1]
    b += data[index + 2]
  }
  return { r: r / count, g: g / count, b: b / count }
}

async function loadFaceLandmarker() {
  const vision = await FilesetResolver.forVisionTasks(WASM_URL)
  const base = { modelAssetPath: MODEL_ASSET_URL }
  try {
    return await FaceLandmarker.createFromOptions(vision, {
      baseOptions: { ...base, delegate: 'GPU' },
      runningMode: 'VIDEO',
      numFaces: 1,
    })
  } catch {
    return FaceLandmarker.createFromOptions(vision, {
      baseOptions: { ...base, delegate: 'CPU' },
      runningMode: 'VIDEO',
      numFaces: 1,
    })
  }
}

function displayReadout(value, field) {
  if (value == null) return '—'
  if (field.key === 'stress') return `${value}/100`
  return value
}

export default function ScanPage() {
  const [mode, setMode] = useState('face')
  const [scanState, setScanState] = useState('idle')
  const [result, setResult] = useState(null)
  const [explanation, setExplanation] = useState('')
  const [isExplanationLoading, setIsExplanationLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [signalQuality, setSignalQuality] = useState('none')
  const [secondsLeft, setSecondsLeft] = useState(Math.ceil(SCAN_DURATION_MS / 1000))
  const [selectedLang, setSelectedLang] = useState('en')
  const [patientName, setPatientName] = useState('')
  const [savedRecordId, setSavedRecordId] = useState(null)

  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const waveCanvasRef = useRef(null)
  const streamRef = useRef(null)
  const landmarkerRef = useRef(null)
  const rafRef = useRef(null)
  const samplesRef = useRef([])
  const scanStartRef = useRef(0)
  const signalQualityRef = useRef('none')
  const secondsLeftRef = useRef(Math.ceil(SCAN_DURATION_MS / 1000))

  useEffect(() => {
    let cancelled = false
    loadFaceLandmarker()
      .then((landmarker) => {
        if (!cancelled) landmarkerRef.current = landmarker
      })
      .catch((error) => console.error('Face landmarker failed to load', error))

    return () => {
      cancelled = true
      landmarkerRef.current?.close()
    }
  }, [])

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
  }, [])

  useEffect(() => stopStream, [stopStream])

  const drawWaveform = useCallback(() => {
    const waveCanvas = waveCanvasRef.current
    if (!waveCanvas) return
    const context = waveCanvas.getContext('2d')
    if (!context) return

    const samples = samplesRef.current
    const width = waveCanvas.width
    const height = waveCanvas.height
    context.clearRect(0, 0, width, height)
    if (samples.length < 2) return

    context.strokeStyle = 'rgba(255, 255, 255, 0.1)'
    context.lineWidth = 1
    context.beginPath()
    context.moveTo(0, height / 2)
    context.lineTo(width, height / 2)
    context.stroke()

    const recent = samples.slice(-60)
    const greenValues = recent.map((sample) => sample.g)
    const minGreen = Math.min(...greenValues)
    const maxGreen = Math.max(...greenValues)
    const greenRange = maxGreen - minGreen || 1

    context.strokeStyle = mode === 'fingertip' ? '#ff4d5e' : '#6fbf97'
    context.lineWidth = 2
    context.beginPath()
    recent.forEach((sample, index) => {
      const x = recent.length === 1 ? 0 : (index / (recent.length - 1)) * width
      const normalized = (sample.g - minGreen) / greenRange
      const y = height - 6 - normalized * (height - 12)
      if (index === 0) context.moveTo(x, y)
      else context.lineTo(x, y)
    })
    context.stroke()
  }, [mode])

  async function finishScan() {
    stopStream()
    setScanState('analyzing')

    const analysis = analyzeSignal(samplesRef.current)
    if (!analysis?.hr) {
      setScanState('error')
      setErrorMsg(
        mode === 'fingertip'
          ? 'Signal was inconsistent — ensure your fingertip firmly covers the camera and flash, then try again.'
          : 'Could not capture a clear pulse signal — keep your face still in steady lighting and try again.',
      )
      return
    }

    setResult(analysis)
    setIsExplanationLoading(true)

    const patientId = `P-${Math.floor(1000 + Math.random() * 9000)}`
    const finalPatientName = patientName.trim() || `Patient ${patientId}`
    const flagged = isFlaggedReferral(analysis.hr, analysis.br, analysis.stress)
    const stressLabel = getStressLabel(analysis.stress)
    const explanationText = await fetchAIExplanation({
      hr: analysis.hr,
      br: analysis.br,
      stress: analysis.stress,
      langCode: selectedLang,
    })

    setExplanation(explanationText)
    setIsExplanationLoading(false)
    setScanState('done')

    saveRecord({
      id: patientId,
      patientId,
      name: finalPatientName,
      hr: analysis.hr,
      br: analysis.br ?? null,
      stress: analysis.stress ?? null,
      stressLabel,
      status: flagged ? 'flagged' : 'ok',
      explanation: explanationText,
      language: selectedLang,
      timestamp: new Date().toISOString(),
      storageMode: 'session-memory-preview',
    })
    setSavedRecordId(patientId)
  }

  function sampleLoop(currentMode) {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    const context = canvas.getContext('2d', { willReadFrequently: true })
    const landmarker = landmarkerRef.current
    let cachedRoi = null
    let frameCount = 0

    const tick = () => {
      const elapsed = performance.now() - scanStartRef.current
      if (elapsed >= SCAN_DURATION_MS) {
        finishScan()
        return
      }

      const remaining = Math.max(0, Math.ceil((SCAN_DURATION_MS - elapsed) / 1000))
      if (remaining !== secondsLeftRef.current) {
        secondsLeftRef.current = remaining
        setSecondsLeft(remaining)
      }

      let currentQuality = 'none'
      if (currentMode === 'fingertip') {
        if (video.readyState >= 2) {
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          context.drawImage(video, 0, 0)
          const roi = {
            x: Math.floor(video.videoWidth * 0.2),
            y: Math.floor(video.videoHeight * 0.2),
            w: Math.floor(video.videoWidth * 0.6),
            h: Math.floor(video.videoHeight * 0.6),
          }
          const rgb = meanRgb(context, roi)
          if (rgb) {
            const isRedDominant = rgb.r > 70 && rgb.r > rgb.g * 1.3 && rgb.r > rgb.b * 1.3
            const isStrongContact = rgb.r > 100 && rgb.r > rgb.g * 1.5
            if (isStrongContact) {
              currentQuality = 'perfect'
              samplesRef.current.push({ t: elapsed, ...rgb })
            } else if (isRedDominant) {
              currentQuality = 'adjusting'
              samplesRef.current.push({ t: elapsed, ...rgb })
            }
          }
        }
      } else {
        frameCount += 1
        if (landmarker && video.readyState >= 2 && frameCount % 3 === 0) {
          try {
            const detection = landmarker.detectForVideo(video, performance.now())
            cachedRoi = getForeheadRoi(detection, video.videoWidth, video.videoHeight)
          } catch (error) {
            console.warn('Face detection error', error)
          }
        }

        if (cachedRoi && video.readyState >= 2) {
          currentQuality = 'perfect'
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          context.drawImage(video, 0, 0)
          const rgb = meanRgb(context, cachedRoi)
          if (rgb) samplesRef.current.push({ t: elapsed, ...rgb })
        }
      }

      if (currentQuality !== signalQualityRef.current) {
        signalQualityRef.current = currentQuality
        setSignalQuality(currentQuality)
      }

      drawWaveform()
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
  }

  async function startScan() {
    setErrorMsg('')
    setScanState('initializing')
    setResult(null)
    setExplanation('')
    setSavedRecordId(null)
    samplesRef.current = []
    signalQualityRef.current = 'none'
    setSignalQuality('none')
    secondsLeftRef.current = Math.ceil(SCAN_DURATION_MS / 1000)
    setSecondsLeft(secondsLeftRef.current)

    try {
      const constraints = mode === 'face'
        ? { video: { facingMode: 'user', width: 640, height: 480 } }
        : { video: { facingMode: { ideal: 'environment' }, width: 640, height: 480 } }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      streamRef.current = stream

      if (mode === 'fingertip') {
        const [track] = stream.getVideoTracks()
        const capabilities = track.getCapabilities?.()
        if (capabilities?.torch) {
          try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
          } catch (error) {
            console.warn('Could not enable torch automatically', error)
          }
        }
      }

      const video = videoRef.current
      if (video) {
        video.srcObject = stream
        await video.play()
        await new Promise((resolve) => {
          if (video.readyState >= 2) resolve()
          else video.onloadeddata = resolve
        })
      }

      setScanState('scanning')
      scanStartRef.current = performance.now()
      sampleLoop(mode)
    } catch (error) {
      console.error('Camera access failed', error)
      stopStream()
      setScanState('error')
      setErrorMsg(
        error.name === 'NotAllowedError'
          ? 'Camera permission was denied — grant camera access in browser settings and try again.'
          : 'Could not access the camera on this device.',
      )
    }
  }

  function resetScan() {
    stopStream()
    setScanState('idle')
    setResult(null)
    setExplanation('')
    setErrorMsg('')
    setSignalQuality('none')
    setSavedRecordId(null)
  }

  const activeMode = MODES.find((item) => item.id === mode)
  const busy = ['initializing', 'scanning', 'analyzing'].includes(scanState)

  let liveStatusMsg = ''
  let statusBadgeClass = 'pill--pending'
  if (scanState === 'initializing') {
    liveStatusMsg = 'Starting camera preview…'
  } else if (scanState === 'scanning') {
    if (mode === 'fingertip') {
      if (signalQuality === 'perfect') {
        liveStatusMsg = `Good contact — hold still (${secondsLeft}s)`
        statusBadgeClass = 'pill--ok'
      } else if (signalQuality === 'adjusting') {
        liveStatusMsg = `Adjust fingertip pressure (${secondsLeft}s)`
      } else {
        liveStatusMsg = 'Cover the rear camera and flash with your fingertip'
        statusBadgeClass = 'pill--flag'
      }
    } else if (signalQuality === 'perfect') {
      liveStatusMsg = `Face located — hold still (${secondsLeft}s)`
      statusBadgeClass = 'pill--ok'
    } else {
      liveStatusMsg = 'Position your face inside the guide oval'
      statusBadgeClass = 'pill--flag'
    }
  } else if (scanState === 'analyzing') {
    liveStatusMsg = 'Analyzing the captured pulse signal and preparing an offline explanation…'
  }

  return (
    <main className="page scan-page">
      <div className="scan-page__intro">
        <div className="scan-header-top">
          <div>
            <p className="eyebrow">Research screening prototype</p>
            <h1 className="page-title">10-Second Vitals Screening</h1>
          </div>
          <div className="lang-selector-group">
            <label htmlFor="lang-select" className="lang-label">Patient language:</label>
            <select
              id="lang-select"
              value={selectedLang}
              onChange={(event) => setSelectedLang(event.target.value)}
              className="lang-select"
              disabled={busy}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.code} value={language.code}>{language.name} ({language.label})</option>
              ))}
            </select>
          </div>
        </div>
        <p className="page-subtitle">
          This baseline uses camera-derived rPPG research proxies for heart rate, breathing rate, and short-window variability. It is screening support, not a diagnostic or certified-device reading.
        </p>
      </div>

      <div className="scan-layout">
        <section className="card scan-viewfinder-card">
          <div className="mode-toggle" role="tablist" aria-label="Scan mode">
            {MODES.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={mode === item.id}
                disabled={busy}
                className={`mode-toggle__btn${mode === item.id ? ' active' : ''}`}
                onClick={() => {
                  setMode(item.id)
                  resetScan()
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            className={`viewfinder${scanState === 'scanning' ? ' is-scanning' : ''}`}
            style={{
              borderColor: scanState === 'scanning'
                ? signalQuality === 'perfect' ? 'var(--ok)' : 'var(--accent2)'
                : 'var(--card-border)',
            }}
          >
            <video
              ref={videoRef}
              playsInline
              muted
              autoPlay
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: busy || scanState === 'done' ? 'block' : 'none',
                transform: mode === 'face' ? 'scaleX(-1)' : 'none',
              }}
            />
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            {scanState === 'scanning' && mode === 'face' && (
              <div className="viewfinder__face-guide"><div className={`face-oval${signalQuality === 'perfect' ? ' is-aligned' : ''}`} /></div>
            )}
            {scanState === 'scanning' && mode === 'fingertip' && (
              <div className="viewfinder__finger-guide"><div className={`finger-icon-wrap${signalQuality === 'perfect' ? ' is-aligned' : ''}`}>◎</div></div>
            )}
            {scanState === 'idle' && (
              <div className="viewfinder__placeholder">
                <PulsePlaceholder mode={mode} />
                <p>{mode === 'face' ? 'Align face inside frame and press Start Scan' : 'Cover rear camera and flash with fingertip'}</p>
              </div>
            )}
            {scanState === 'error' && <div className="viewfinder__placeholder error"><p>{errorMsg}</p></div>}
            {scanState === 'scanning' && (
              <div className={`viewfinder__scan-status pill ${statusBadgeClass}`}><span className="pill-dot" />{liveStatusMsg}</div>
            )}
            {scanState === 'scanning' && <div className="viewfinder__scanline" />}
          </div>

          {scanState === 'scanning' && (
            <div className="ppg-waveform-card">
              <div className="ppg-waveform-header"><span>Pulse waveform preview</span><span className="mono">{secondsLeft}s left</span></div>
              <canvas ref={waveCanvasRef} width={300} height={40} className="ppg-waveform-canvas" />
            </div>
          )}

          <p className="scan-hint">{errorMsg || activeMode.hint}</p>
          <div className="patient-name-input-group">
            <input
              type="text"
              placeholder="Patient name or ID (optional)"
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
              className="patient-input"
              disabled={busy}
            />
          </div>

          {scanState === 'idle' && <button className="btn btn--primary scan-cta" onClick={startScan}>Start 10s scan</button>}
          {busy && (
            <button className="btn btn--ghost scan-cta" disabled>
              {scanState === 'initializing' ? 'Starting camera…' : scanState === 'analyzing' ? 'Processing screening…' : `Scanning (${secondsLeft}s)`}
            </button>
          )}
          {(scanState === 'done' || scanState === 'error') && <button className="btn btn--ghost scan-cta" onClick={resetScan}>Scan another patient</button>}
        </section>

        <section className="scan-side">
          <div className="card readout-card">
            <p className="readout-card__title">Latest screening readout</p>
            <div className="readout-grid">
              {READOUT_FIELDS.map((field) => (
                <div key={field.key} className="readout-stat">
                  <p className="readout-stat__label">{field.label}</p>
                  <p className="readout-stat__value mono">
                    {result ? displayReadout(result[field.key], field) : '—'}
                    {result && result[field.key] != null && field.unit && field.key !== 'stress' && <span className="readout-stat__unit">{field.unit}</span>}
                  </p>
                </div>
              ))}
            </div>

            {isExplanationLoading && <div className="readout-explanation loading"><span className="pill-dot" />Preparing offline explanation…</div>}
            {explanation && !isExplanationLoading && (
              <div className="readout-explanation">
                <p className="explanation-title">Offline Screening Explanation</p>
                <p className="explanation-body">{explanation}</p>
                {savedRecordId && (
                  <div className="report-link-box"><Link to={`/report?id=${savedRecordId}`} className="btn btn--primary report-link-btn">View Session Report & QR →</Link></div>
                )}
              </div>
            )}
          </div>

          <div className="card offline-card">
            <span className="pill pill--pending"><span className="pill-dot" /> Session-only preview</span>
            <p className="offline-card__copy">
              TASK-001 keeps screening records in memory for this browser session only. No durable clinical database or remote synchronization is active yet.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

function PulsePlaceholder({ mode }) {
  return mode === 'face' ? (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 8a2 2 0 0 1 2-2h1.5l1-1.5h7l1 1.5H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C9 2 7 5 7 9v6a5 5 0 0 0 10 0V9c0-4-2-7-5-7Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 10h6M9 13h6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
