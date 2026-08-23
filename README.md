# 🩺 Vytal (Vital)
### Camera-Based Vitals Screening & AI Triage Platform

> **P@SHA ICT Awards & Hackathon Submission**
>
> **Theme:** Healthcare, Community Health Triage & AI Technology

---

## 🔗 Repository

**GitHub:** https://github.com/Ahmad-Ali-Shah/Vital

---

# Executive Summary

Millions of people living in rural and underserved communities lack access to basic medical equipment such as pulse oximeters, ECG devices, and blood pressure monitors. Community Health Workers (CHWs) are often the first—and sometimes only—healthcare providers available, yet they must make critical decisions with limited diagnostic tools.

Research shows that **40–60% of rural patients requiring follow-up care never complete referrals**, leading to delayed treatment and preventable complications.

**Vytal** addresses these challenges by transforming an ordinary smartphone into a research-backed AI health screening device.

Using **remote Photoplethysmography (rPPG)** and **contact PPG**, Vytal estimates vital signs directly from a smartphone or webcam camera, estimates honest reading uncertainty (±bpm margin), provides multilingual AI explanations, operates completely offline, and maintains a persistent referral queue.

The platform is designed specifically for:

- Rural health clinics & Community Health Workers (CHWs)
- NGO medical camps & Mobile healthcare units
- Disaster relief operations & Low-resource triage
- Areas with limited internet connectivity

---

# Key Features

## 🔬 Dual-Mode Camera-Based Vital Screening

Vytal supports two independent, research-grounded scanning methods to maximize compatibility across devices and environments.

### 👤 Face Scan Mode (rPPG)

Uses **remote Photoplethysmography (rPPG)** to estimate vital signs by tracking subtle, pulse-induced skin color variations captured by the front camera.

- **MediaPipe Face Mesh**: Precise facial ROI tracking excluding eyes/mouth.
- **Dynamic Face Oval Guide**: Real-time position guidance and alignment detection.
- **CHROM (de Haan & Jeanne, 2013) & POS (Wang et al., 2016)**: Dual-plane skin tone projection algorithms.
- **Goertzel Frequency Transform**: Efficient spectral estimation with parabolic sub-BPM peak interpolation.
- **Live Pulse Waveform**: Real-time canvas rendering of the smoothed BVP pulse wave.

---

### 👆 Fingertip + Flash Mode (Contact PPG)

For environments with poor lighting or unsupported front cameras, users place their fingertip directly over the camera lens and LED flash.

- **Continuous 30 FPS Sampling**: Tissue absorption detection ($R > B$ blue light absorption check) ensures zero dropped frames, preserving temporal interval accuracy.
- **Inverted Green Channel PPG (Gudi et al., 2020)**: Evaluates direct inverted green absorbance ($detrend(-g)$) alongside POS/CHROM for gold-standard contact PPG pulse signal extraction.
- **Camera Stabilization Locks**: Automatically locks camera track constraints (`torch`, `exposureMode`, `whiteBalanceMode`, `focusMode`) to prevent gain/exposure oscillation during finger contact.

---

## 🎯 Honest Uncertainty & Camera Quality Engine

Rather than displaying a "black-box" number, Vytal computes a transparent error margin ($\pm N\text{ bpm}$) and camera quality grade grounded in empirical rPPG literature:

- **Camera Hardware Diagnostics**: Reads `track.getCapabilities()` and `track.getSettings()` for FPS, resolution, sensor tier, and LED torch availability.
- **Real-Time Environment Sensing**: Detects overexposure (>215 average pixel brightness), lighting flicker, and fast head/finger motion via inter-frame variance analysis.
- **Uncertainty Margin Badge**: Displays an honest $\pm\text{bpm}$ margin on every reading; flags unusable signals when uncertainty exceeds the 8 bpm blind-guess floor.

---

## 🧠 AI Clinical Assistant

Converts technical metrics into clear, empathetic health guidance.

- **Supported AI Providers**: Alibaba Cloud DashScope (Qwen), Groq (LLaMA 3.3 70B).
- **Capabilities**: Plain-language explanations, clinical risk flagging, follow-up advice.
- **Offline Rule Engine**: Automatic fallback to local clinical decision rules when offline.

---

## 🌍 Multilingual Support

Supported languages:
- 🇬🇧 English | 🇵🇰 Urdu (اردو) | 🇦🇫 Pashto (پښتو) | 🇵🇰 Sindhi (سنڌي) | 🇸🇦 Arabic (العربية)

---

## 💾 Offline-First Architecture

- **IndexedDB & LocalStorage**: Instant local storage for patient records and referral queues.
- **QR Code Referral Reports**: Generates printable single-page PDF/paper reports with embedded record QR codes.

---

# 📐 Signal Processing Pipeline

```
            User Camera Input
                   │
      ┌────────────┴────────────┐
      ▼                         ▼
   Face Mode              Fingertip Mode
 (MediaPipe ROI)        (Tissue Abs. R > B)
      │                         │
      └────────────┬────────────┘
                   ▼
      Uniform 30 Hz Resampling
                   ▼
  Multi-Channel Extraction & Selection
   ├─ CHROM (de Haan & Jeanne, 2013)
   ├─ POS (Wang et al., 2016)
   └─ Inverted Green PPG (Gudi et al., 2020)
                   ▼
   Hann-Weighted Bandpass Filter (0.5–4.0 Hz)
                   ▼
  Goertzel Spectrum + Parabolic Interpolation
   └─ Sub-Harmonic Rejection (HR / 2 Check)
                   ▼
    Stabilisation: EMA + Trimmed Mean + SNR Weighting
                   ▼
   Sub-Sample Peak Timing ──► RMSSD & Stress Index
                   ▼
   Camera Assessment & Honest Uncertainty (±N bpm)
                   ▼
   Multilingual AI Triage & Printable Referral
```

---

# 🔬 Scientific Foundations & References

1. **De Haan, G., & Jeanne, V. (2013)**. *Robust pulse rate from chrominance-based rPPG*. IEEE TBME.
2. **Wang, W. et al. (2016)**. *Algorithmic principles of remote PPG*. IEEE TBME.
3. **Gudi, A., Bittner, M., & van Gemert, J. (2020)**. *Real-time Webcam Heart-Rate and Variability Estimation with Clean Ground Truth*. MDPI Applied Sciences.
4. **Malik, M. et al. (1996)**. *Heart rate variability: Standards of measurement, physiological interpretation, and clinical use*. European Heart Journal.
5. **McDuff, D. et al. (2020)**. *rPPG benchmarking under compression and ambient lighting*. IEEE EMBC.

---

# 🛠️ Technology Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React 18, Vite |
| Styling | CSS3, Custom Dark Clinical Design System |
| Computer Vision | HTML5 Canvas API, MediaPipe Tasks Vision |
| Signal Processing | CHROM, POS, Inverted Green PPG, Goertzel Transform, Bandpass Filter |
| Uncertainty Engine | Heuristic Error Estimation, Hardware Capabilities API |
| AI Models | Qwen (Alibaba DashScope), Groq LLaMA 3.3 70B |
| Storage | IndexedDB, LocalStorage |
| Reports | QR Code (`qrcode`), `@media print` CSS |

---

# 🚀 Getting Started

## Installation

```bash
git clone https://github.com/Ahmad-Ali-Shah/Vital.git
cd Vital
npm install --ignore-scripts
npm run dev
```

Open: `http://localhost:5173`

## Production Build

```bash
npm run build
npm run preview
```

---

# 👥 Team

- **Ahmad Ali Shah**: AI, Signal Processing & Backend Architect
- **Muhammad Ahmad**: Frontend Engineer & UI/UX Integration
- **Laiba**: Cloud Architecture & Database Systems

---

# ⚠️ Disclaimer

Vytal is a clinical decision-support and screening prototype. It is **not** a certified medical device. Final clinical evaluations must always be performed by qualified healthcare professionals.
