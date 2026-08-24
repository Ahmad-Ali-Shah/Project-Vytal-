import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import QRCode from 'qrcode'
import { getRecordById } from '../lib/storage'
import { SUPPORTED_LANGUAGES } from '../lib/ai'

function displayValue(value, unit = '') {
  return value == null ? '—' : `${value}${unit}`
}

export default function ReportPage() {
  const [searchParams] = useSearchParams()
  const recordId = searchParams.get('id')
  const [record, setRecord] = useState(null)
  const [qrDataUrl, setQrDataUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const loaded = getRecordById(recordId)
    setRecord(loaded)

    if (!loaded) return
    const previewIdentifier = `Vytal screening preview: ${loaded.patientId || loaded.id}`
    QRCode.toDataURL(previewIdentifier, { width: 120, margin: 1 })
      .then((dataUrl) => setQrDataUrl(dataUrl))
      .catch((error) => console.error('Failed to generate QR code', error))
  }, [recordId])

  if (!record) {
    return (
      <main className="page report-page">
        <p className="page-subtitle">No screening preview is available in this session.</p>
        <Link to="/dashboard" className="btn btn--ghost">← Back to Dashboard</Link>
      </main>
    )
  }

  const isFlagged = record.status === 'flagged'
  const langName = SUPPORTED_LANGUAGES.find((language) => language.code === record.language)?.name || 'English'
  const previewId = record.patientId || record.id

  async function handleCopyId() {
    try {
      await navigator.clipboard.writeText(previewId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className="page report-page">
      <div className="report-header">
        <div>
          <p className="eyebrow">One-page printable preview</p>
          <h1 className="page-title">A clear screening summary for this session.</h1>
          <p className="page-subtitle">
            TASK-001 keeps records in session memory only. Print this screening if needed; durable clinical retrieval is introduced by the secure backend later.
          </p>
        </div>
        <Link to="/dashboard" className="btn btn--ghost">← Back to Dashboard</Link>
      </div>

      <div className="report-sheet-wrap">
        <div className="report-sheet" id="report-print-area">
          <div className="report-sheet__header">
            <div>
              <p className="report-sheet__brand">VYTAL</p>
              <p className="report-sheet__brand-sub">Community Health Screening Preview</p>
            </div>
            <div className="report-qr-container">
              {qrDataUrl ? (
                <img src={qrDataUrl} alt="QR code containing the preview identifier" className="report-qr-img" />
              ) : (
                <div className="report-qr">QR</div>
              )}
            </div>
          </div>

          <div className="report-sheet__patient">
            <div>
              <p className="report-sheet__label">Patient Name & Preview ID</p>
              <p className="report-sheet__patient-name">{record.name}</p>
              <p className="report-sheet__label mono">{previewId}</p>
            </div>
            <div className="report-patient-date">
              <p className="report-sheet__label">Screened Date</p>
              <p className="report-sheet__patient-name">
                {new Date(record.timestamp || Date.now()).toLocaleString('en-GB', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </p>
              <p className="report-sheet__label mono">Lang: {langName}</p>
            </div>
          </div>

          <div className="report-sheet__vitals">
            <div>
              <p className="report-sheet__label">Heart rate</p>
              <p className="report-sheet__vital-value mono">{displayValue(record.hr, ' bpm')}</p>
            </div>
            <div>
              <p className="report-sheet__label">Breathing rate</p>
              <p className="report-sheet__vital-value mono">{displayValue(record.br, ' br/min')}</p>
            </div>
            <div>
              <p className="report-sheet__label">Stress proxy</p>
              <p className="report-sheet__vital-value">{record.stressLabel || 'Unavailable'}</p>
            </div>
          </div>

          {isFlagged ? (
            <div className="report-sheet__flag">
              <strong>FOLLOW-UP SUGGESTED</strong> — This baseline screening rule found an available indicator outside its simple resting range. Repeat at rest and use clinical judgment.
            </div>
          ) : (
            <div className="report-sheet__normal">
              <strong>NO BASELINE FOLLOW-UP FLAG</strong> — The available indicators did not trigger this prototype's simple follow-up rule.
            </div>
          )}

          <div className="report-sheet__explanation">
            <p className="report-sheet__label">Offline screening explanation</p>
            <p>{record.explanation}</p>
          </div>

          <p className="report-sheet__disclaimer">
            Research screening prototype only. This report is not a diagnosis or a certified-device reading. TASK-001 data exists only in this browser session; the QR code contains a preview identifier and does not provide durable record retrieval.
          </p>
        </div>
      </div>

      <div className="report-actions">
        <button className="btn btn--primary" onClick={() => window.print()}>Print this preview</button>
        <button className="btn btn--ghost" onClick={handleCopyId}>{copied ? 'Preview ID copied' : 'Copy preview ID'}</button>
      </div>
    </main>
  )
}
