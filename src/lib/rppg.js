// Real rPPG signal analysis: CHROM (de Haan & Jeanne, 2013) for pulse extraction,
// Goertzel (1958) for frequency detection, scored across overlapping windows and
// combined by median so one noisy window can't swing the whole reading.

const HR_MIN_BPM = 42
const HR_MAX_BPM = 200
const BR_MIN_BPM = 12
const BR_MAX_BPM = 20
const RESAMPLE_HZ = 30
const MIN_SAMPLES_MS = 8000
const MIN_CAPTURE_HZ = 12
const WINDOW_SEC = 5
const WINDOW_STEP_SEC = 1
const MIN_WINDOW_SNR = 2.5

function mean(arr) {
  return arr.reduce((s, v) => s + v, 0) / arr.length
}

function std(arr) {
  const m = mean(arr)
  return Math.sqrt(mean(arr.map((v) => (v - m) ** 2)))
}

function median(arr) {
  const s = [...arr].sort((a, b) => a - b)
  const mid = Math.floor(s.length / 2)
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2
}

function resampleUniform(samples, hz) {
  const t0 = samples[0].t
  const tEnd = samples[samples.length - 1].t
  const dt = 1000 / hz
  const out = { r: [], g: [], b: [] }
  let i = 0
  for (let t = t0; t <= tEnd; t += dt) {
    while (i < samples.length - 2 && samples[i + 1].t < t) i++
    const a = samples[i]
    const b = samples[Math.min(i + 1, samples.length - 1)]
    const span = b.t - a.t || 1
    const frac = (t - a.t) / span
    out.r.push(a.r + (b.r - a.r) * frac)
    out.g.push(a.g + (b.g - a.g) * frac)
    out.b.push(a.b + (b.b - a.b) * frac)
  }
  return out
}

function detrend(arr) {
  const n = arr.length
  const mx = mean(arr.map((_, i) => i))
  const my = mean(arr)
  let num = 0, den = 0
  for (let i = 0; i < n; i++) {
    num += (i - mx) * (arr[i] - my)
    den += (i - mx) ** 2
  }
  const slope = den === 0 ? 0 : num / den
  const intercept = my - slope * mx
  return arr.map((v, i) => v - (slope * i + intercept))
}

function highpass(arr, windowSize) {
  const out = []
  for (let i = 0; i < arr.length; i++) {
    const start = Math.max(0, i - windowSize)
    const end = Math.min(arr.length, i + windowSize + 1)
    out.push(arr[i] - mean(arr.slice(start, end)))
  }
  return out
}

function chromSignal(r, g, b) {
  const rn = r.map((v) => v / mean(r))
  const gn = g.map((v) => v / mean(g))
  const bn = b.map((v) => v / mean(b))
  const X = rn.map((v, i) => 3 * v - 2 * gn[i])
  const Y = rn.map((v, i) => 1.5 * v + gn[i] - 1.5 * bn[i])
  const alpha = std(Y) === 0 ? 0 : std(X) / std(Y)
  return X.map((v, i) => v - alpha * Y[i])
}

function goertzelPower(signal, freqHz, sampleRateHz) {
  const n = signal.length
  const k = Math.round((n * freqHz) / sampleRateHz)
  const omega = (2 * Math.PI * k) / n
  const coeff = 2 * Math.cos(omega)
  let s0 = 0, s1 = 0, s2 = 0
  for (let i = 0; i < n; i++) {
    s0 = signal[i] + coeff * s1 - s2
    s2 = s1
    s1 = s0
  }
  const real = s1 - s2 * Math.cos(omega)
  const imag = s2 * Math.sin(omega)
  return real * real + imag * imag
}

function bestBpmWithSnr(signal, sampleRateHz, minBpm, maxBpm, stepBpm) {
  let bestBpm = null
  let bestPower = -Infinity
  let total = 0
  let count = 0
  for (let bpm = minBpm; bpm <= maxBpm; bpm += stepBpm) {
    const power = goertzelPower(signal, bpm / 60, sampleRateHz)
    total += power
    count++
    if (power > bestPower) {
      bestPower = power
      bestBpm = bpm
    }
  }
  const avg = count ? total / count : 0
  const snr = avg === 0 ? 0 : bestPower / avg
  return { bpm: bestBpm, snr }
}

function amplitudeEnvelope(signal, windowSize) {
  const out = []
  for (let i = 0; i < signal.length; i++) {
    const start = Math.max(0, i - windowSize)
    const window = signal.slice(start, i + 1)
    out.push(Math.max(...window) - Math.min(...window))
  }
  return out
}

function estimateStress(windowBpms) {
  if (!windowBpms || windowBpms.length < 3) return null
  const med = median(windowBpms)
  const deviations = windowBpms.map((v) => Math.abs(v - med))
  const mad = median(deviations)
  const robustStd = mad * 1.4826
  const cv = med === 0 ? 0 : robustStd / med
  return Math.round(Math.max(0, Math.min(100, cv * 400)))
}

export function analyzeSignal(samples) {
  if (!samples || samples.length < 2) return null
  const duration = samples[samples.length - 1].t - samples[0].t
  if (duration < MIN_SAMPLES_MS) return null

  const captureHz = samples.length / (duration / 1000)
  if (captureHz < MIN_CAPTURE_HZ) return null

  const { r, g, b } = resampleUniform(samples, RESAMPLE_HZ)
  if (r.length < RESAMPLE_HZ * 4) return null

  let pulse = detrend(chromSignal(r, g, b))
  pulse = highpass(pulse, RESAMPLE_HZ * 2)

  const windowLen = WINDOW_SEC * RESAMPLE_HZ
  const stepLen = WINDOW_STEP_SEC * RESAMPLE_HZ
  const windowBpms = []
  for (let start = 0; start + windowLen <= pulse.length; start += stepLen) {
    const segment = pulse.slice(start, start + windowLen)
    const { bpm, snr } = bestBpmWithSnr(segment, RESAMPLE_HZ, HR_MIN_BPM, HR_MAX_BPM, 1)
    const nearFloor = bpm !== null && bpm <= HR_MIN_BPM + 3
    const confidentEnough = nearFloor ? snr >= MIN_WINDOW_SNR * 1.8 : snr >= MIN_WINDOW_SNR
    if (bpm !== null && confidentEnough) windowBpms.push(bpm)
  }

  if (windowBpms.length < 3) return null
  const hr = Math.round(median(windowBpms))

  const envelope = detrend(amplitudeEnvelope(pulse, Math.round(RESAMPLE_HZ * 0.5)))
  const brBpm = bestBpmWithSnr(envelope, RESAMPLE_HZ, BR_MIN_BPM, BR_MAX_BPM, 0.5).bpm

  return {
    hr,
    br: brBpm !== null ? Math.round(brBpm) : null,
    stress: estimateStress(windowBpms),
  }
}
