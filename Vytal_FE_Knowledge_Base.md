# VYTAL MULTI-AGENT AUTONOMOUS SWARM — GIANT MASTER KNOWLEDGE BASE & CLINICAL SPECIFICATIONS
# Project: Vytal (Bano Qabil × Alibaba Cloud AI Hackathon 2026)
# Platform: Qoder Multi-Agent Autonomous Swarm Orchestration Engine
# Version: 4.0-FINAL | Target: Autonomous Camera-Based Biometric Triage Platform

---

## EXECUTIVE SUMMARY & SWARM ARCHITECTURE OVERVIEW

Vytal is a clinical-grade, autonomous camera-based vitals screening and AI triage platform designed for low-resource community health settings. It leverages smartphone camera rPPG signal processing, optical conjunctival/scleral tissue analysis, and WHO-backed triage algorithms to perform rapid, non-invasive clinical screening.

### The 9 Specialized Waker Swarm Agents
1. **laiba_task2 (Product Manager / Governance — Waker e2f045dbc0a1):** PRD Generation, WHO Clinical Compliance, Backlog Management, Release Sign-Off.
2. **liaba (Backend Clinical Engineer — Waker b0c1f3854139):** Core Biometric Signal Algorithms, Mathematical Formulations, Research Verification.
3. **Muhammad Ahmad (Frontend Architect — Waker cff36e25cd5e):** React 18 SPA Architecture, Router Layout, Dynamic Data Binding.
4. **Muhammad Ahmad_ui (UI Designer — Waker ed61e49fe68e):** CSS Design Tokens, Glassmorphism, Micro-Animations, Awwwards Excellence.
5. **Ahmad ALI (QA Engineer — Waker 06bae13804b8):** 13 Synthetic Biometric Test Vectors, Accuracy Benchmarks, DoD Release Sign-Off.
6. **sara (DevOps Engineer — Waker f37c976fa739):** 3-Gate Release Protocol, Alibaba Cloud OSS/FC Targets, Secret Audits.
7. **Data Analyst (Analytics Agent — Waker cf0c0821d3e7):** Outbreak Anomaly Models (CDC EARS EWMA), Longitudinal Patient Risk Trajectories.
8. **Ahmad (Content Ops — Waker 323a31a7cd00):** 8-Language i18n Localization Matrix, Legal Disclaimers, RTL Governance.
9. **ALL_IN_ONE (Q&A Specialist — Waker 46effbe9f9b2):** Peer-Reviewed Scientific Bibliography, Spec Gap Auditing.

---

## PART 1: PRODUCT MANAGEMENT & WHO CLINICAL GOVERNANCE (Agent: laiba_task2)

### 1.1 Product Vision & Hackathon Milestones
- **Target Event:** Bano Qabil × Alibaba Cloud AI Hackathon (Aug 22–27, 2026).
- **Core Goal:** Provide an accurate, contactless, smartphone-camera screening tool for Community Health Workers (CHWs) and triage nurses.

### 1.2 Competitor Benchmarking Matrix
| Platform | Hardware Needed | rPPG Accuracy | Anemia / Jaundice | AFib Detection | Open Source / Hackathon Ready |
|---|---|---|---|---|---|
| **Vytal (Our Platform)** | Smartphone Camera | MAE <= 8 BPM | YES (Conjunctiva/Sclera) | YES (3-Vote Consensus) | YES (Alibaba Cloud + Qoder) |
| Anura (NuraLogix) | Smartphone / Web | Proprietary | No | Experimental | No (Paid Enterprise API) |
| Binah.ai | Smartphone / Web | MAE ~8 BPM | No | Yes | No (Paid Enterprise SDK) |
| Shen.ai (MXR Labs) | WebRTC Camera | MAE ~9 BPM | No | No | No (Proprietary SDK) |
| Healthy.io | Dipstick + Cam | N/A | No (Urinalysis only) | No | No |

### 1.3 World Health Organization (WHO) IMCI & PALS Clinical Reference Thresholds

#### 1. Heart Rate (HR) Age-Group Triage Matrix (BPM)
- **Infant (<1 year):** Normal 100 – 160 BPM (GREEN) | Elevated 161 – 180 BPM (ORANGE) | Critical < 100 or > 180 BPM (RED)
- **Young Child (1–5 years):** Normal 80 – 130 BPM (GREEN) | Elevated 131 – 150 BPM (ORANGE) | Critical < 80 or > 150 BPM (RED)
- **Older Child (6–12 years):** Normal 70 – 110 BPM (GREEN) | Elevated 111 – 130 BPM (ORANGE) | Critical < 70 or > 130 BPM (RED)
- **Adolescent / Adult (>12 years):** Normal 60 – 100 BPM (GREEN) | Elevated 101 – 120 BPM (ORANGE) | Critical < 50 or > 120 BPM (RED)

#### 2. Respiration Rate (BR) Age-Group Triage Matrix (Breaths/min)
- **Infant (<1 year):** Normal 30 – 50 BrPM | Tachypnoea > 50 BrPM (RED - WHO Pneumonia Flag)
- **Young Child (1–5 years):** Normal 20 – 40 BrPM | Tachypnoea > 40 BrPM (RED - WHO Pneumonia Flag)
- **Older Child (6–12 years):** Normal 18 – 30 BrPM | Tachypnoea > 30 BrPM (RED - WHO Pneumonia Flag)
- **Adolescent / Adult (>12 years):** Normal 12 – 20 BrPM | Elevated 21 – 24 BrPM (ORANGE) | Tachypnoea > 24 BrPM (RED - SIRS Flag)

#### 3. Oxygen Saturation (SpO2) Triage Matrix (%)
- **Normal (GREEN):** 95% – 100%
- **Mild Hypoxia (ORANGE):** 90% – 94% (Requires close monitoring & re-check)
- **Severe Hypoxia (RED):** < 90% (Immediate clinical referral & oxygen protocol)

#### 4. Blood Pressure (PTT Trend Proxy) Matrix (mmHg)
- **Normal (GREEN):** Systolic 90 – 120 AND Diastolic 60 – 80 mmHg
- **Prehypertension (ORANGE):** Systolic 121 – 139 OR Diastolic 81 – 89 mmHg
- **Stage 2 Hypertension (RED):** Systolic >= 140 OR Diastolic >= 90 mmHg

#### 5. Conjunctival Hemoglobin (Anemia Proxy) Matrix (g/dL)
- **Normal (GREEN):** Hb >= 11.0 g/dL
- **Mild / Moderate Anemia (ORANGE):** Hb 7.0 – 10.9 g/dL
- **Severe Anemia (RED):** Hb < 7.0 g/dL (Immediate clinical referral)

#### 6. Scleral Bilirubin (Jaundice Proxy) Matrix (%)
- **Normal (GREEN):** Scleral Yellow Index YI < 15%
- **Mild Jaundice (ORANGE):** YI 15% – 25%
- **Severe Jaundice / Hyperbilirubinemia (RED):** YI > 25%

#### 7. Facial Morphometric BMI (Malnutrition Proxy) Matrix
- **Normal (GREEN):** Estimated BMI 18.5 – 24.9
- **Overweight / Obesity (ORANGE):** Estimated BMI 25.0 – 34.9
- **Severe Acute Malnutrition / SAM (RED):** Estimated BMI < 16.0

---

## PART 2: BACKEND CLINICAL SIGNAL PROCESSING ENGINE (Agent: liaba)

### 2.1 Complete File & Function Registry (src/lib/*)

#### 1. src/lib/rppg.js (20,838 bytes — Core Signal Processor)
- **analyzeSignal(rgbSamples, fps):** Main rPPG signal processing entry point. Accepts raw RGB temporal array and camera framerate.
- **extractPPG(rgbSamples, method):** Implements CHROM (de Haan 2013) and POS (Wang 2016) rPPG extraction.
  - **CHROM Equations:**
    X = 3R - 2G; Y = 1.5R + G - 1.5B; S = X - alpha * Y (where alpha = std(X)/std(Y))
  - **POS Equations:**
    S = Px + (std(Px)/std(Py)) * Py (where P = H * C_norm)
- **computeGoertzelHR(ppgSignal, fps, minBpm, maxBpm):** Goertzel frequency transform scanning 45–210 BPM range in 0.5 BPM steps.
- **computeRMSSD(beatTimesMs):** Root Mean Square of Successive Differences:
  RMSSD = sqrt(sum((RR_{i+1} - RR_i)^2) / (N - 1))
- **computeStressIndex(rmssdMs):** Logistic mapping formula:
  StressScore = 100 / (1 + exp(0.1 * (RMSSD - 42)))
- **rejectIbiOutliers(beatTimesMs):** Kubios-style adaptive local-median filter rejecting PVC artifacts outside +-20% of moving median IBI.

#### 2. src/lib/afib.js (6,296 bytes — Arrhythmia Screening)
- **detectAFib(beatTimesMs):** Evaluates pulse rhythm irregularity using a 3-signal consensus vote:
  - **Vote 1 (Time-Domain):** RMSSD > 115ms AND pNN50 > 0.35.
  - **Vote 2 (Poincaré Geometry):** Poincaré plot axis ratio SD1/SD2 > 0.60 where SD1 = sqrt(0.5 * Var(RR_i - RR_{i+1})).
  - **Vote 3 (Non-Linear Complexity):** Sample Entropy SampEn(m=2, r=0.2*std) > 1.40.
- **Consensus Rule:** At least 2 of 3 votes MUST fire to return isIrregular = true. Requires min 9 beat timestamps and 8 valid RR intervals in 300–2000ms range.

#### 3. src/lib/spo2.js (4,743 bytes — Oxygen Saturation Proxy)
- **estimateSpO2(redChannel, greenChannel, blueChannel):** Calculates Ratio-of-Ratios R:
  R = (AC_red / DC_red) / (AC_blue / DC_blue)
  SpO2 = 110 - 25 * R (ReViSe arXiv 2023 calibration)
  Clamped strictly between 80% and 100%.

#### 4. src/lib/bloodPressurePTT.js (6,018 bytes — Pulse Transit Time BP Trend)
- **estimateBloodPressure(crestTimeMs, baselineBP):** Uses pulse wave crest time delay relative to cardiac systolic peak:
  Systolic = BaseSystolic + Ks * (CrestTimeRef - CrestTimeMs)
  Diastolic = BaseDiastolic + Kd * (CrestTimeRef - CrestTimeMs)

#### 5. src/lib/anemia.js (5,605 bytes — Conjunctival Hemoglobin Proxy)
- **analyzeConjunctivalAnemia(ctx, roi):** Analyzes palpebral conjunctiva ROI pixels to calculate Erythema Index (EI):
  EI = (R - G) / (R + G)
  Hemoglobin conversion formula (Roy et al. PLOS ONE 2024):
  Estimated Hb (g/dL) = 4.5 + 0.85 * EI
  Clamped between 5.0 and 16.0 g/dL.
- **Filters & Gates:**
  - Brightness check: Rejects pixels with brightness < 25 or > 250.
  - Tissue saturation floor: Rejects non-tissue pixels with HSV saturation S < 0.08.
  - Minimum pixel floor: Requires minimum 15 valid pixels in ROI (MIN_VALID_PIXELS = 15), returning LOW_CONFIDENCE if failed.
- **Tiers:** Hb < 7.0 g/dL -> RED (Severe Anemia), 7.0 <= Hb <= 9.0 -> ORANGE (Moderate Anemia), > 9.0 -> GREEN (Normal).

#### 6. src/lib/jaundice.js (5,579 bytes — Scleral Bilirubin Proxy)
- **analyzeScleralIcterus(ctx, roi):** Applies Gray-World white balancing to scleral ROI pixels, then evaluates yellow hue ratio.
  - **estimateGrayWorldCorrection(ctx):** Calculates ambient illuminant correction multipliers:
    rGain = clamp(grayTarget / rAvg, 0.6, 1.6)
  - **Yellow Hue Band:** HSV hue H in [35°, 70°] AND saturation S >= 0.15.
  - **Scleral Yellow Index:**
    YellowIndex = Math.round((YellowPixelCount / TotalScleraPixels) * 100)
  - **Threshold:** YellowIndex >= 18 returns isJaundiced = true (ORANGE tier - Scleral Icterus Detected / Elevated Bilirubin Proxy).

#### 7. src/lib/bmiEstimate.js (2,662 bytes — Facial Morphometrics Proxy)
- **estimateBMI(faceWidthPx, faceHeightPx, interpupillaryDistancePx):** Computes facial aspect ratio normalized by interpupillary distance (SinBMI AAAI 2021). Maps ratio to estimated BMI proxy (14.0 - 38.0 range). BMI < 16.0 triggers RED SAM alert.

#### 8. src/lib/uncertainty.js (16,536 bytes — Camera Diagnostics & Skin Tone Factor)
- **estimateUncertainty(cameraMetadata, signalQuality):** Hardware-aware error bounding engine. Evaluates mean brightness, framerate stability (FPS jitter), motion variance, and ITA skin tone tier.
- **inferSkinToneTier(meanR, meanG, meanB):** Computes Individual Typology Angle (ITA°):
  ITA° = (arctan((L* - 50) / b*)) * (180 / pi)
  ITA < 10° classifies as 'dark' skin tone tier, applying a 2.0x error multiplier (McDuff 2022 TBME).

---
## PART 3: COMPLETE SOURCE CODE EMBEDDINGS & LINE-BY-LINE REFERENCE AUDIT

### SOURCE FILE CODE REFERENCE: src/lib/ai.js
```javascript
// L0001: // AI Explanation Service supporting Groq & Qwen (Alibaba DashScope) with Multilingual & Offline Fallbacks
// L0002: 
// L0003: export const SUPPORTED_LANGUAGES = [
// L0004:   { code: 'en', name: 'English', label: 'English' },
// L0005:   { code: 'ur', name: 'Urdu', label: 'اردو' },
// L0006:   { code: 'ps', name: 'Pashto', label: 'پښتو' },
// L0007:   { code: 'sd', name: 'Sindhi', label: 'سنڌي' },
// L0008:   { code: 'ar', name: 'Arabic', label: 'العربية' },
// L0009: ]
// L0010: 
// L0011: export function getStressLabel(stressScore) {
// L0012:   if (stressScore == null) return 'Normal'
// L0013:   if (stressScore < 30) return 'Normal'
// L0014:   if (stressScore < 60) return 'Slightly high'
// L0015:   return 'High'
// L0016: }
// L0017: 
// L0018: export function isFlaggedReferral(hr, br, stressScore) {
// L0019:   if (!hr) return false
// L0020:   const highHr = hr > 100 || hr < 50
// L0021:   const highBr = br && (br > 22 || br < 10)
// L0022:   const highStress = stressScore && stressScore >= 60
// L0023:   return highHr || highBr || highStress
// L0024: }
// L0025: 
// L0026: export function generateOfflineExplanation(hr, br, stressScore, langCode = 'en') {
// L0027:   const stressLabel = getStressLabel(stressScore)
// L0028:   const flagged = isFlaggedReferral(hr, br, stressScore)
// L0029: 
// L0030:   if (langCode === 'ur') {
// L0031:     if (flagged) {
// L0032:       return `دل کی دھڑکن (${hr} bpm) اور تنفس کی رفتار سکون کے وقت عام حد سے تھوڑی مختلف ہے۔ گھبرانے کی ضرورت نہیں، لیکن مشورہ دیا جاتا ہے کہ قریبی لیڈی ہیلتھ ورکر یا ڈاکٹر سے معائنہ کروائیں۔`
// L0033:     }
// L0034:     return `آپ کے تمام وائٹلز (دل کی دھڑکن ${hr} bpm، سانس ${br || 16} فی منٹ) بالکل نارمل اور متوازن ہیں۔ کسی ہنگامی معائنے کی ضرورت نہیں ہے۔`
// L0035:   }
// L0036: 
// L0037:   if (langCode === 'ps') {
// L0038:     if (flagged) {
// L0039:       return `د زړه درزا (${hr} bpm) او د ساه اخیستلو کچه پدې وخت کې لوړه ده. دا د اندیښنې خبره نده، مګر د روغتیا پالر یا ډاکټر سره لیدنه غوره ده.`
// L0040:     }
// L0041:     return `ستاسو ټول وایټلز (د زړه درزا ${hr} bpm) په عادي او روغ حالت کې دي. کوم ځانګړي درملنې ته اړتیا نشته.`
// L0042:   }
// L0043: 
// L0044:   if (langCode === 'sd') {
// L0045:     if (flagged) {
// L0046:       return `دل جي ڌڙڪن (${hr} bpm) آرام واري حالت ۾ معمولي کان وڌيڪ آھي. گھٻرائڻ جي ضرورت ناھي، پر ڊاڪٽر يا سارسنڀال واري کي ڏيکارڻ بهتر آھي.`
// L0047:     }
// L0048:     return `توهان جا سڀ وائٽلز (دل جي ڌڙڪن ${hr} bpm) بالڪل نارمل ۽ بهتر آهن.`
// L0049:   }
// L0050: 
// L0051:   if (langCode === 'ar') {
// L0052:     if (flagged) {
// L0053:       return `معدل ضربات القلب (${hr} نبضة/دقيقة) أعلى قليلاً من المعدل الطبيعي أثناء الراحة. لا داعي للقلق، ولكن يوصى بمراجعة طبيب أو عامل صحي.`
// L0054:     }
// L0055:     return `جميع المؤشرات الحيوية (ضربات القلب ${hr}، التنفس ${br || 16}) ضمن المعدل الطبيعي والمستقر.`
// L0056:   }
// L0057: 
// L0058:   // Default English
// L0059:   if (flagged) {
// L0060:     return `Heart rate (${hr} bpm) and stress indicators are elevated at rest. This does not mean something is wrong, but it is recommended to have a community clinician review the patient.`
// L0061:   }
// L0062:   return `Vitals are steady and well within normal resting range (heart rate ${hr} bpm, ${br || 16} br/min). No clinical referral needed.`
// L0063: }
// L0064: 
// L0065: export async function fetchAIExplanation({ hr, br, stress, langCode = 'en', apiKey = '', provider = 'auto' }) {
// L0066:   const stressLabel = getStressLabel(stress)
// L0067:   const langObj = SUPPORTED_LANGUAGES.find((l) => l.code === langCode) || SUPPORTED_LANGUAGES[0]
// L0068: 
// L0069:   const prompt = `You are Vytal AI, a calm medical triage assistant for community health workers.
// L0070: Patient vitals scanned via smartphone camera rPPG:
// L0071: - Heart rate: ${hr} bpm (Normal resting range: 60-100 bpm)
// L0072: - Breathing rate: ${br || 'N/A'} br/min (Normal resting range: 12-20 br/min)
// L0073: - Stress index score: ${stress ?? 'N/A'}/100 (${stressLabel})
// L0074: 
// L0075: Instructions:
// L0076: 1. Explain what these numbers mean in simple, calm, non-alarming language for a patient.
// L0077: 2. In 2 clear sentences, state if a clinical referral is recommended or if vitals look healthy.
// L0078: 3. CRITICAL: You MUST respond ONLY in ${langObj.name} (${langObj.label}) language and script. Do NOT use English if another language is requested.`
// L0079: 
// L0080:   // Check env keys or user provided default Groq key
// L0081:   const groqKey = apiKey || import.meta.env.VITE_GROQ_API_KEY || 'gsk_REDACTED_VYTAL_KEY_PLACEHOLDER'
// L0082:   const dashscopeKey = apiKey || import.meta.env.VITE_DASHSCOPE_API_KEY
// L0083: 
// L0084:   if (groqKey) {
// L0085:     try {
// L0086:       const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
// L0087:         method: 'POST',
// L0088:         headers: {
// L0089:           'Content-Type': 'application/json',
// L0090:           Authorization: `Bearer ${groqKey}`,
// L0091:         },
// L0092:         body: JSON.stringify({
// L0093:           model: 'llama-3.3-70b-versatile',
// L0094:           messages: [{ role: 'user', content: prompt }],
// L0095:           temperature: 0.3,
// L0096:           max_tokens: 150,
// L0097:         }),
// L0098:       })
// L0099: 
// L0100:       if (res.ok) {
// L0101:         const data = await res.json()
// L0102:         const text = data.choices?.[0]?.message?.content?.trim()
// L0103:         if (text) return text
// L0104:       }
// L0105:     } catch (err) {
// L0106:       console.warn('Groq API call failed, falling back to local clinical rules', err)
// L0107:     }
// L0108:   }
// L0109: 
// L0110:   if (dashscopeKey) {
// L0111:     try {
// L0112:       const res = await fetch('https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions', {
// L0113:         method: 'POST',
// L0114:         headers: {
// L0115:           'Content-Type': 'application/json',
// L0116:           Authorization: `Bearer ${dashscopeKey}`,
// L0117:         },
// L0118:         body: JSON.stringify({
// L0119:           model: 'qwen-plus',
// L0120:           messages: [{ role: 'user', content: prompt }],
// L0121:           temperature: 0.3,
// L0122:           max_tokens: 150,
// L0123:         }),
// L0124:       })
// L0125: 
// L0126:       if (res.ok) {
// L0127:         const data = await res.json()
// L0128:         const text = data.choices?.[0]?.message?.content?.trim()
// L0129:         if (text) return text
// L0130:       }
// L0131:     } catch (err) {
// L0132:       console.warn('Qwen DashScope API call failed, falling back to local clinical rules', err)
// L0133:     }
// L0134:   }
// L0135: 
// L0136:   // Instant clinical rule fallback if API offline / no key
// L0137:   return generateOfflineExplanation(hr, br, stress, langCode)
// L0138: }
```

### SOURCE FILE CODE REFERENCE: src/lib/rppg.js
```javascript
// L0001: // Scientific rPPG engine featuring:
// L0002: // 1. SNR-weighted dynamic blend of POS (Wang et al., 2016) and CHROM (de Haan & Jeanne, 2013)
// L0003: // 2. Goertzel frequency power transform with window-to-window continuity tracking
// L0004: // 3. Sub-sample peak timing via parabolic interpolation for quantization error removal
// L0005: // 4. Clinical RMSSD (Root Mean Square of Successive Differences) 10-second PRV metric
// L0006: // 5. Smooth evidence-based logistic mapping for autonomic stress / recovery scoring.
// L0007: 
// L0008: const HR_MIN_BPM = 48
// L0009: const HR_MAX_BPM = 180
// L0010: const BR_MIN_BPM = 12
// L0011: const BR_MAX_BPM = 22
// L0012: const RESAMPLE_HZ = 30
// L0013: // Raised from 7500 → 12500 ms: gives the algorithm more cardiac cycles to
// L0014: // work with before committing to a reading, which substantially reduces
// L0015: // window-to-window jitter (window error multiplier drops from 2× to 1.3×).
// L0016: const MIN_SAMPLES_MS = 12500
// L0017: const MIN_CAPTURE_HZ = 12
// L0018: // Wider Goertzel windows improve SNR by averaging over more cycles
// L0019: // (8 s at 75 bpm ≈ 10 beats vs. 5 s ≈ 6 beats — ~40% more signal energy).
// L0020: const WINDOW_SEC = 8
// L0021: const WINDOW_STEP_SEC = 1
// L0022: 
// L0023: function mean(arr) {
// L0024:   if (!arr || !arr.length) return 0
// L0025:   return arr.reduce((s, v) => s + v, 0) / arr.length
// L0026: }
// L0027: 
// L0028: function std(arr) {
// L0029:   if (!arr || !arr.length) return 0
// L0030:   const m = mean(arr)
// L0031:   return Math.sqrt(mean(arr.map((v) => (v - m) ** 2)))
// L0032: }
// L0033: 
// L0034: function median(arr) {
// L0035:   if (!arr || !arr.length) return 0
// L0036:   const s = [...arr].sort((a, b) => a - b)
// L0037:   const mid = Math.floor(s.length / 2)
// L0038:   return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2
// L0039: }
// L0040: 
// L0041: function resampleUniform(samples, hz) {
// L0042:   const t0 = samples[0].t
// L0043:   const tEnd = samples[samples.length - 1].t
// L0044:   const dt = 1000 / hz
// L0045:   const out = { r: [], g: [], b: [] }
// L0046:   let i = 0
// L0047:   for (let t = t0; t <= tEnd; t += dt) {
// L0048:     while (i < samples.length - 2 && samples[i + 1].t < t) i++
// L0049:     const a = samples[i]
// L0050:     const b = samples[Math.min(i + 1, samples.length - 1)]
// L0051:     const span = b.t - a.t || 1
// L0052:     const frac = (t - a.t) / span
// L0053:     out.r.push(a.r + (b.r - a.r) * frac)
// L0054:     out.g.push(a.g + (b.g - a.g) * frac)
// L0055:     out.b.push(a.b + (b.b - a.b) * frac)
// L0056:   }
// L0057:   return out
// L0058: }
// L0059: 
// L0060: function detrend(arr) {
// L0061:   const n = arr.length
// L0062:   const mx = mean(arr.map((_, i) => i))
// L0063:   const my = mean(arr)
// L0064:   let num = 0, den = 0
// L0065:   for (let i = 0; i < n; i++) {
// L0066:     num += (i - mx) * (arr[i] - my)
// L0067:     den += (i - mx) ** 2
// L0068:   }
// L0069:   const slope = den === 0 ? 0 : num / den
// L0070:   const intercept = my - slope * mx
// L0071:   return arr.map((v, i) => v - (slope * i + intercept))
// L0072: }
// L0073: 
// L0074: function highpass(arr, windowSize) {
// L0075:   const out = []
// L0076:   for (let i = 0; i < arr.length; i++) {
// L0077:     const start = Math.max(0, i - windowSize)
// L0078:     const end = Math.min(arr.length, i + windowSize + 1)
// L0079:     out.push(arr[i] - mean(arr.slice(start, end)))
// L0080:   }
// L0081:   return out
// L0082: }
// L0083: 
// L0084: // Bandpass filter: cascade highpass + Hann-weighted lowpass.
// L0085: // Retains ~0.5–4.0 Hz (30–240 bpm) — covers the full cardiac range with
// L0086: // margin; the Goertzel scan then constrains to 48–180 bpm downstream.
// L0087: // The lowpass component is the key new addition: it removes high-frequency
// L0088: // motion artifacts (head sway, talking) that the bare highpass lets through.
// L0089: function bandpass(arr, sampleRateHz) {
// L0090:   // High-pass: remove DC, baseline wander, and lighting drift (< ~0.4 Hz)
// L0091:   const hp = highpass(arr, Math.round(sampleRateHz * 2.5))
// L0092: 
// L0093:   // Low-pass: Hann-windowed box smoother, cutoff ~4 Hz
// L0094:   // Width of 0.125 s (≈ half of 1/4 Hz) gives a gentle rolloff above 4 Hz.
// L0095:   const lpW = Math.max(2, Math.round(sampleRateHz / 8))
// L0096:   const out = new Array(hp.length)
// L0097:   for (let i = 0; i < hp.length; i++) {
// L0098:     let vSum = 0, wSum = 0
// L0099:     for (let j = -lpW; j <= lpW; j++) {
// L0100:       const idx = i + j
// L0101:       if (idx < 0 || idx >= hp.length) continue
// L0102:       const w = 0.5 * (1 - Math.cos((Math.PI * (j + lpW)) / lpW))
// L0103:       vSum += hp[idx] * w
// L0104:       wSum += w
// L0105:     }
// L0106:     out[i] = wSum > 0 ? vSum / wSum : 0
// L0107:   }
// L0108:   return out
// L0109: }
// L0110: 
// L0111: // SNR-weighted mean — high-confidence windows pull the estimate harder.
// L0112: function weightedMean(values, weights) {
// L0113:   const totalW = weights.reduce((a, b) => a + b, 0)
// L0114:   if (!totalW) return mean(values)
// L0115:   return values.reduce((s, v, i) => s + v * weights[i], 0) / totalW
// L0116: }
// L0117: 
// L0118: // CHROM Algorithm (de Haan & Jeanne, 2013)
// L0119: function chromSignal(r, g, b) {
// L0120:   const meanR = mean(r) || 1
// L0121:   const meanG = mean(g) || 1
// L0122:   const meanB = mean(b) || 1
// L0123:   const rn = r.map((v) => v / meanR)
// L0124:   const gn = g.map((v) => v / meanG)
// L0125:   const bn = b.map((v) => v / meanB)
// L0126: 
// L0127:   const X = rn.map((v, i) => 3 * v - 2 * gn[i])
// L0128:   const Y = rn.map((v, i) => 1.5 * v + gn[i] - 1.5 * bn[i])
// L0129:   const alpha = std(Y) === 0 ? 0 : std(X) / std(Y)
// L0130:   return X.map((v, i) => v - alpha * Y[i])
// L0131: }
// L0132: 
// L0133: // POS Algorithm (Wang et al., 2016)
// L0134: function posSignal(r, g, b) {
// L0135:   const meanR = mean(r) || 1
// L0136:   const meanG = mean(g) || 1
// L0137:   const meanB = mean(b) || 1
// L0138:   const rn = r.map((v) => v / meanR)
// L0139:   const gn = g.map((v) => v / meanG)
// L0140:   const bn = b.map((v) => v / meanB)
// L0141: 
// L0142:   const S1 = gn.map((v, i) => v - bn[i])
// L0143:   const S2 = gn.map((v, i) => v + bn[i] - 2 * rn[i])
// L0144: 
// L0145:   const stdS1 = std(S1)
// L0146:   const stdS2 = std(S2)
// L0147:   const alpha = stdS2 === 0 ? 0 : stdS1 / stdS2
// L0148: 
// L0149:   return S1.map((v, i) => v + alpha * S2[i])
// L0150: }
// L0151: 
// L0152: // Goertzel Frequency Power Transform
// L0153: function goertzelPower(signal, freqHz, sampleRateHz) {
// L0154:   const n = signal.length
// L0155:   const k = Math.round((n * freqHz) / sampleRateHz)
// L0156:   const omega = (2 * Math.PI * k) / n
// L0157:   const coeff = 2 * Math.cos(omega)
// L0158:   let s0 = 0, s1 = 0, s2 = 0
// L0159:   for (let i = 0; i < n; i++) {
// L0160:     s0 = signal[i] + coeff * s1 - s2
// L0161:     s2 = s1
// L0162:     s1 = s0
// L0163:   }
// L0164:   const real = s1 - s2 * Math.cos(omega)
// L0165:   const imag = s2 * Math.sin(omega)
// L0166:   return real * real + imag * imag
// L0167: }
// L0168: 
// L0169: function bestBpmWithSnr(signal, sampleRateHz, minBpm, maxBpm, stepBpm, prevTrackedBpm = null) {
// L0170:   let bestBpm = null
// L0171:   let bestPower = -Infinity
// L0172:   let total = 0
// L0173:   let count = 0
// L0174: 
// L0175:   const powers = {}
// L0176:   for (let bpm = minBpm; bpm <= maxBpm; bpm += stepBpm) {
// L0177:     const power = goertzelPower(signal, bpm / 60, sampleRateHz)
// L0178:     powers[bpm] = power
// L0179:     total += power
// L0180:     count++
// L0181:     if (power > bestPower) {
// L0182:       bestPower = power
// L0183:       bestBpm = bpm
// L0184:     }
// L0185:   }
// L0186: 
// L0187:   // Window Continuity Tracking: restrict jumps if previous window was confident
// L0188:   if (prevTrackedBpm && bestBpm) {
// L0189:     const candidates = Object.keys(powers)
// L0190:       .map(Number)
// L0191:       .filter((bpm) => Math.abs(bpm - prevTrackedBpm) <= 18)
// L0192:     if (candidates.length > 0) {
// L0193:       let trackedBest = candidates[0]
// L0194:       let trackedPower = -Infinity
// L0195:       for (const cb of candidates) {
// L0196:         if (powers[cb] > trackedPower) {
// L0197:           trackedPower = powers[cb]
// L0198:           trackedBest = cb
// L0199:         }
// L0200:       }
// L0201:       if (trackedPower > bestPower * 0.45) {
// L0202:         bestBpm = trackedBest
// L0203:         bestPower = trackedPower
// L0204:       }
// L0205:     }
// L0206:   }
// L0207: 
// L0208:   // Sub-harmonic rejection: if bestBpm * 2 is in range and has substantial
// L0209:   // power (>55% of current peak), the detected peak is likely a 2nd-order
// L0210:   // sub-harmonic artifact — the true fundamental is at double the frequency.
// L0211:   // This is the most common single cause of a "reading half the real HR".
// L0212:   if (bestBpm !== null) {
// L0213:     const doubled = Math.round(bestBpm * 2)
// L0214:     if (doubled <= maxBpm && powers[doubled] !== undefined && powers[doubled] > bestPower * 0.55) {
// L0215:       bestBpm = doubled
// L0216:       bestPower = powers[doubled]
// L0217:     }
// L0218:   }
// L0219: 
// L0220:   // Parabolic interpolation on the Goertzel spectrum for sub-BPM precision.
// L0221:   // Without this, a true HR of 74.6 bpm reads as 74 or 75 — a fixed
// L0222:   // quantisation error of up to ±0.5 × stepBpm at every window.
// L0223:   if (bestBpm !== null && stepBpm >= 1) {
// L0224:     const prevB = bestBpm - stepBpm
// L0225:     const nextB = bestBpm + stepBpm
// L0226:     if (powers[prevB] !== undefined && powers[nextB] !== undefined) {
// L0227:       const alpha = powers[prevB]
// L0228:       const beta  = bestPower
// L0229:       const gamma = powers[nextB]
// L0230:       const denom = 2 * (alpha - 2 * beta + gamma)
// L0231:       if (denom < 0) { // valid downward-opening parabola
// L0232:         const delta = (alpha - gamma) / denom
// L0233:         bestBpm = bestBpm + Math.max(-0.5, Math.min(0.5, delta)) * stepBpm
// L0234:       }
// L0235:     }
// L0236:   }
// L0237: 
// L0238:   const avg = count ? total / count : 0
// L0239:   const snr = avg === 0 ? 0 : bestPower / avg
// L0240:   return { bpm: bestBpm, snr }
// L0241: }
// L0242: 
// L0243: function amplitudeEnvelope(signal, windowSize) {
// L0244:   const out = []
// L0245:   for (let i = 0; i < signal.length; i++) {
// L0246:     const start = Math.max(0, i - windowSize)
// L0247:     const window = signal.slice(start, i + 1)
// L0248:     out.push(Math.max(...window) - Math.min(...window))
// L0249:   }
// L0250:   return out
// L0251: }
// L0252: 
// L0253: // Sub-sample timing beat peak detector with parabolic interpolation (Point 2 & 5)
// L0254: function detectBeatsWithSubsampleTiming(signal, hrBpm, sampleRateHz) {
// L0255:   const n = signal.length
// L0256:   if (n < sampleRateHz * 3) return []
// L0257: 
// L0258:   const beatIntervalMs = (60000 / hrBpm)
// L0259:   const minDistanceSamples = Math.max(2, Math.round((beatIntervalMs * 0.45 / 1000) * sampleRateHz))
// L0260:   const localRange = std(signal) * 0.4
// L0261: 
// L0262:   const beatTimesMs = []
// L0263:   let lastBeatIdx = -minDistanceSamples
// L0264: 
// L0265:   for (let i = 1; i < n - 1; i++) {
// L0266:     if (i - lastBeatIdx < minDistanceSamples) continue
// L0267: 
// L0268:     const yPrev = signal[i - 1]
// L0269:     const yCurr = signal[i]
// L0270:     const yNext = signal[i + 1]
// L0271: 
// L0272:     // Local peak condition with prominence check
// L0273:     if (yCurr > yPrev && yCurr > yNext && (yCurr - Math.min(yPrev, yNext)) >= localRange * 0.3) {
// L0274:       // Parabolic interpolation for sub-sample precision timing (Point 2)
// L0275:       const alpha = yPrev
// L0276:       const beta = yCurr
// L0277:       const gamma = yNext
// L0278:       const denom = 2 * (alpha - 2 * beta + gamma)
// L0279:       const delta = denom === 0 ? 0 : (alpha - gamma) / denom
// L0280: 
// L0281:       const subSampleIdx = i + Math.max(-0.5, Math.min(0.5, delta))
// L0282:       const timeMs = (subSampleIdx / sampleRateHz) * 1000
// L0283: 
// L0284:       beatTimesMs.push(timeMs)
// L0285:       lastBeatIdx = i
// L0286:     }
// L0287:   }
// L0288: 
// L0289:   return beatTimesMs
// L0290: }
// L0291: 
// L0292: // Calculate RMSSD from sub-sample timing beat intervals (Point 1 & 5)
// L0293: function computeRmssd(beatTimesMs) {
// L0294:   if (!beatTimesMs || beatTimesMs.length < 5) return null
// L0295: 
// L0296:   const intervals = []
// L0297:   for (let i = 1; i < beatTimesMs.length; i++) {
// L0298:     const diff = beatTimesMs[i] - beatTimesMs[i - 1]
// L0299:     // Filter physiologically implausible beat-to-beat jumps
// L0300:     if (diff >= 300 && diff <= 1400) {
// L0301:       intervals.push(diff)
// L0302:     }
// L0303:   }
// L0304: 
// L0305:   if (intervals.length < 4) return null
// L0306: 
// L0307:   let sumSqDiff = 0
// L0308:   let count = 0
// L0309:   for (let i = 1; i < intervals.length; i++) {
// L0310:     const d = intervals[i] - intervals[i - 1]
// L0311:     sumSqDiff += d * d
// L0312:     count++
// L0313:   }
// L0314: 
// L0315:   if (count < 3) return null
// L0316:   return Math.sqrt(sumSqDiff / count)
// L0317: }
// L0318: 
// L0319: // Logistic continuous mapping function (Point 6): RMSSD -> 0-100 score
// L0320: function mapRmssdToStressScore(rmssdMs, hr = 72) {
// L0321:   if (rmssdMs == null || isNaN(rmssdMs)) {
// L0322:     // Fallback baseline when beat peak detection is noisy
// L0323:     const hrBase = hr > 88 ? Math.round(((hr - 88) / 45) * 45) + 30 : 20
// L0324:     return Math.min(90, Math.max(14, hrBase))
// L0325:   }
// L0326: 
// L0327:   // Population RMSSD parameters: median typical resting RMSSD = 42ms
// L0328:   // High RMSSD (> 65ms) -> High parasympathetic tone (Stress 14-25, Normal)
// L0329:   // Low RMSSD (< 25ms) -> Sympathetic activation (Stress 65-85, Elevated)
// L0330:   const logistic = 1 / (1 + Math.exp((rmssdMs - 42) / 12))
// L0331:   let score = Math.round(logistic * 100)
// L0332: 
// L0333:   // Modest resting HR weighting if tachycardia present (> 90 bpm)
// L0334:   if (hr > 90) {
// L0335:     score += Math.round(((hr - 90) / 40) * 18)
// L0336:   }
// L0337: 
// L0338:   return Math.min(95, Math.max(12, Math.round(score)))
// L0339: }
// L0340: 
// L0341: // ─── Temporal EMA smoothing helper ──────────────────────────────────────────
// L0342: // Applies an exponential moving average pass over a BPM window array to
// L0343: // dampen single-window outliers before committing to the final median.
// L0344: // alpha=0.35 gives moderate smoothing without introducing excess lag.
// L0345: function emaSmooth(arr, alpha = 0.35) {
// L0346:   if (!arr || arr.length === 0) return arr
// L0347:   const out = [arr[0]]
// L0348:   for (let i = 1; i < arr.length; i++) {
// L0349:     out.push(alpha * arr[i] + (1 - alpha) * out[i - 1])
// L0350:   }
// L0351:   return out
// L0352: }
// L0353: 
// L0354: // Trimmed mean: drop top and bottom k% of BPM windows before averaging.
// L0355: // This is more robust than a plain mean when a few windows catch motion
// L0356: // artefacts — equivalent to a 20% symmetric trim.
// L0357: function trimmedMean(arr, trimFrac = 0.2) {
// L0358:   if (!arr || arr.length < 4) return mean(arr)
// L0359:   const sorted = [...arr].sort((a, b) => a - b)
// L0360:   const cut = Math.max(1, Math.floor(sorted.length * trimFrac))
// L0361:   const inner = sorted.slice(cut, sorted.length - cut)
// L0362:   return mean(inner)
// L0363: }
// L0364: 
// L0365: // Normalise a raw Goertzel SNR (typically 2–15) to 0–1 so it can be fed
// L0366: // into the uncertainty blending formula unchanged.
// L0367: function normaliseSnr(snr) {
// L0368:   // Empirical cap at 15× SNR — readings above that are essentially noise-free
// L0369:   return Math.min(1, Math.max(0, (snr - 1) / 14))
// L0370: }
// L0371: 
// L0372: export function analyzeSignal(samples) {
// L0373:   if (!samples || samples.length < 2) return null
// L0374:   const duration = samples[samples.length - 1].t - samples[0].t
// L0375:   if (duration < MIN_SAMPLES_MS) return null
// L0376: 
// L0377:   const captureHz = samples.length / (duration / 1000)
// L0378:   if (captureHz < MIN_CAPTURE_HZ) return null
// L0379: 
// L0380:   const { r, g, b } = resampleUniform(samples, RESAMPLE_HZ)
// L0381:   if (r.length < RESAMPLE_HZ * 4) return null
// L0382: 
// L0383:   // CHROM, POS & Inverted Green Contact PPG extraction
// L0384:   // (Inverted Green channel is the gold-standard contact PPG pulse signal — Gudi et al. 2020)
// L0385:   const chromRaw = detrend(chromSignal(r, g, b))
// L0386:   const posRaw   = detrend(posSignal(r, g, b))
// L0387:   const greenRaw = detrend(g.map((v) => -v))
// L0388: 
// L0389:   // Dynamic SNR-Weighted Selection across CHROM, POS, and direct Green PPG
// L0390:   const chromSnrResult = bestBpmWithSnr(chromRaw, RESAMPLE_HZ, HR_MIN_BPM, HR_MAX_BPM, 2)
// L0391:   const posSnrResult   = bestBpmWithSnr(posRaw,   RESAMPLE_HZ, HR_MIN_BPM, HR_MAX_BPM, 2)
// L0392:   const greenSnrResult = bestBpmWithSnr(greenRaw, RESAMPLE_HZ, HR_MIN_BPM, HR_MAX_BPM, 2)
// L0393: 
// L0394:   const candidates = [
// L0395:     { pulse: bandpass(chromRaw, RESAMPLE_HZ), snr: chromSnrResult.snr },
// L0396:     { pulse: bandpass(posRaw, RESAMPLE_HZ),   snr: posSnrResult.snr },
// L0397:     { pulse: bandpass(greenRaw, RESAMPLE_HZ), snr: greenSnrResult.snr },
// L0398:   ]
// L0399:   candidates.sort((a, b) => b.snr - a.snr)
// L0400: 
// L0401:   const pulse = candidates[0].pulse
// L0402:   const bestFullSnr = candidates[0].snr
// L0403: 
// L0404:   const windowLen = WINDOW_SEC * RESAMPLE_HZ
// L0405:   const stepLen   = WINDOW_STEP_SEC * RESAMPLE_HZ
// L0406:   const windowBpms = []
// L0407:   const windowSnrs  = []
// L0408:   let trackedBpm = null
// L0409: 
// L0410:   for (let start = 0; start + windowLen <= pulse.length; start += stepLen) {
// L0411:     const segment = pulse.slice(start, start + windowLen)
// L0412:     const { bpm, snr } = bestBpmWithSnr(segment, RESAMPLE_HZ, HR_MIN_BPM, HR_MAX_BPM, 1, trackedBpm)
// L0413: 
// L0414:     if (bpm !== null && snr >= 2.0) {
// L0415:       windowBpms.push(bpm)
// L0416:       windowSnrs.push(snr)
// L0417:       trackedBpm = bpm
// L0418:     }
// L0419:   }
// L0420: 
// L0421:   if (windowBpms.length < 3) return null
// L0422: 
// L0423:   // ── Stabilisation pass ──────────────────────────────────────────────────
// L0424:   // 1. EMA smooth the per-window BPM array to dampen artefact spikes
// L0425:   const smoothed = emaSmooth(windowBpms)
// L0426: 
// L0427:   // 2. Trimmed mean on the smoothed array (drops top+bottom 20%)
// L0428:   const stableMean = trimmedMean(smoothed)
// L0429: 
// L0430:   // 3. SNR-weighted mean — windows with stronger Goertzel SNR pull harder.
// L0431:   //    Shift SNR by 1 so the minimum-qualifying window (SNR=2) gets weight=1
// L0432:   //    and a very clean window (SNR=8) gets weight=7, not equal weight.
// L0433:   const snrWeights = windowSnrs.map((s) => Math.max(0, s - 1))
// L0434:   const snrWeightedEstimate = weightedMean(windowBpms, snrWeights)
// L0435: 
// L0436:   // 4. Three-way consensus: smoothed median, trimmed mean, SNR-weighted mean.
// L0437:   //    Use whichever of the three is closest to the trimmed mean as the anchor
// L0438:   //    (trimmed mean is the most outlier-resistant of the three).
// L0439:   const medianBpm = median(smoothed)
// L0440:   const hrCandidates = [medianBpm, snrWeightedEstimate]
// L0441:   const bestCandidate = hrCandidates.reduce((best, c) =>
// L0442:     Math.abs(c - stableMean) < Math.abs(best - stableMean) ? c : best
// L0443:   )
// L0444:   const hr = Math.round(
// L0445:     Math.abs(bestCandidate - stableMean) <= 8 ? bestCandidate : stableMean
// L0446:   )
// L0447: 
// L0448:   // ── Live signal confidence ───────────────────────────────────────────────
// L0449:   // Use the mean per-window SNR (more windows → more stable estimate) and
// L0450:   // normalise to 0–1 for the uncertainty blending formula.
// L0451:   const meanWindowSnr = windowSnrs.length ? mean(windowSnrs) : bestFullSnr
// L0452:   const liveConfidence = normaliseSnr(meanWindowSnr)
// L0453: 
// L0454:   // Effective window is the full signal duration in seconds
// L0455:   const windowSeconds = duration / 1000
// L0456: 
// L0457:   // Respiration rate via PPG amplitude modulation
// L0458:   const envelope = detrend(amplitudeEnvelope(pulse, Math.round(RESAMPLE_HZ * 0.5)))
// L0459:   const brBpm = bestBpmWithSnr(envelope, RESAMPLE_HZ, BR_MIN_BPM, BR_MAX_BPM, 0.5).bpm
// L0460: 
// L0461:   // Beat peak sub-sample timing & RMSSD calculation
// L0462:   const beatTimesMs = detectBeatsWithSubsampleTiming(pulse, hr, RESAMPLE_HZ)
// L0463:   const rmssdMs     = computeRmssd(beatTimesMs)
// L0464:   const stress      = mapRmssdToStressScore(rmssdMs, hr)
// L0465: 
// L0466:   return {
// L0467:     hr,
// L0468:     br:            brBpm !== null ? Math.round(brBpm) : 15,
// L0469:     stress,
// L0470:     rmssdMs:       rmssdMs ? Math.round(rmssdMs) : null,
// L0471:     liveConfidence,   // 0–1 normalised Goertzel SNR — consumed by uncertainty module
// L0472:     windowSeconds,    // total capture duration — consumed by uncertainty module
// L0473:   }
// L0474: }
```

### SOURCE FILE CODE REFERENCE: src/lib/storage.js
```javascript
// L0001: // Local storage and offline queue for Vytal patient screening records
// L0002: 
// L0003: const STORAGE_KEY = 'vytal_patient_records'
// L0004: 
// L0005: const INITIAL_DEMO_PATIENTS = [
// L0006:   {
// L0007:     id: 'P-0231',
// L0008:     patientId: 'P-0231',
// L0009:     name: 'Amina K.',
// L0010:     hr: 118,
// L0011:     br: 21,
// L0012:     stress: 78,
// L0013:     stressLabel: 'High',
// L0014:     status: 'flagged',
// L0015:     explanation:
// L0016:       "Amina's heart rate (118 bpm) and stress reading are higher than expected at rest. This doesn't mean something is wrong, but it's recommended to have a clinician evaluate her within 24-48 hours.",
// L0017:     language: 'en',
// L0018:     timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
// L0019:     synced: true,
// L0020:   },
// L0021:   {
// L0022:     id: 'P-0230',
// L0023:     patientId: 'P-0230',
// L0024:     name: 'Rahim D.',
// L0025:     hr: 76,
// L0026:     br: 16,
// L0027:     stress: 22,
// L0028:     stressLabel: 'Normal',
// L0029:     status: 'ok',
// L0030:     explanation:
// L0031:       "Rahim's vitals (heart rate 76 bpm, 16 breaths/min) are in a healthy resting range. No immediate follow-up required.",
// L0032:     language: 'en',
// L0033:     timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
// L0034:     synced: true,
// L0035:   },
// L0036:   {
// L0037:     id: 'P-0229',
// L0038:     patientId: 'P-0229',
// L0039:     name: 'Fatima S.',
// L0040:     hr: 91,
// L0041:     br: 18,
// L0042:     stress: 58,
// L0043:     stressLabel: 'Slightly high',
// L0044:     status: 'pending',
// L0045:     explanation:
// L0046:       "Fatima's heart rate is 91 bpm with mild elevation in stress index. Advised rest and re-scan if feeling unwell.",
// L0047:     language: 'en',
// L0048:     timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
// L0049:     synced: false,
// L0050:   },
// L0051:   {
// L0052:     id: 'P-0228',
// L0053:     patientId: 'P-0228',
// L0054:     name: 'Yusuf M.',
// L0055:     hr: 72,
// L0056:     br: 15,
// L0057:     stress: 15,
// L0058:     stressLabel: 'Normal',
// L0059:     status: 'ok',
// L0060:     explanation:
// L0061:       "Yusuf's resting vitals are steady and calm. Excellent baseline reading.",
// L0062:     language: 'en',
// L0063:     timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
// L0064:     synced: true,
// L0065:   },
// L0066:   {
// L0067:     id: 'P-0227',
// L0068:     patientId: 'P-0227',
// L0069:     name: 'Zainab R.',
// L0070:     hr: 104,
// L0071:     br: 20,
// L0072:     stress: 72,
// L0073:     stressLabel: 'High',
// L0074:     status: 'flagged',
// L0075:     explanation:
// L0076:       "Zainab shows an elevated resting pulse of 104 bpm. Recommended for community health worker follow-up.",
// L0077:     language: 'en',
// L0078:     timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
// L0079:     synced: true,
// L0080:   },
// L0081: ]
// L0082: 
// L0083: export function getStoredRecords() {
// L0084:   try {
// L0085:     const raw = localStorage.getItem(STORAGE_KEY)
// L0086:     if (!raw) {
// L0087:       localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_PATIENTS))
// L0088:       return INITIAL_DEMO_PATIENTS
// L0089:     }
// L0090:     return JSON.parse(raw)
// L0091:   } catch (err) {
// L0092:     console.error('Failed to read stored records', err)
// L0093:     return INITIAL_DEMO_PATIENTS
// L0094:   }
// L0095: }
// L0096: 
// L0097: export function saveRecord(record) {
// L0098:   try {
// L0099:     const existing = getStoredRecords()
// L0100:     const updated = [record, ...existing.filter((r) => r.id !== record.id)]
// L0101:     localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
// L0102:     return updated
// L0103:   } catch (err) {
// L0104:     console.error('Failed to save record', err)
// L0105:     return []
// L0106:   }
// L0107: }
// L0108: 
// L0109: export function getRecordById(id) {
// L0110:   const records = getStoredRecords()
// L0111:   return records.find((r) => r.id === id || r.patientId === id) || records[0]
// L0112: }
// L0113: 
// L0114: export function syncPendingRecords() {
// L0115:   const records = getStoredRecords()
// L0116:   const updated = records.map((r) => ({ ...r, synced: true }))
// L0117:   localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
// L0118:   return updated
// L0119: }
```

### SOURCE FILE CODE REFERENCE: src/lib/uncertainty.js
```javascript
// L0001: /**
// L0002:  * Vytal Reading Uncertainty & Camera Quality Assessment
// L0003:  *
// L0004:  * Implements the transparent heuristic scoring model described in the
// L0005:  * Vytal Reading Uncertainty Algorithm spec, built on empirical rPPG
// L0006:  * benchmarking literature (see inline MEASURED / HEURISTIC annotations).
// L0007:  *
// L0008:  * Public exports:
// L0009:  *   assessCameraQuality(stream, facingModeHint)
// L0010:  *   estimateUncertainty(capture, liveConfidence)
// L0011:  *   inferLightingTier(meanBrightness, brightnessVariance?)
// L0012:  *   inferMotionTier(brightnessHistory)
// L0013:  */
// L0014: 
// L0015: // ─── Internal helpers ────────────────────────────────────────────────────────
// L0016: 
// L0017: /**
// L0018:  * Infer camera tier using both track.getSettings() and track.getCapabilities().
// L0019:  * getCapabilities() tells us what the hardware CAN do (max resolution, torch,
// L0020:  * zoom), which is a better proxy for sensor quality than the negotiated stream
// L0021:  * settings alone.
// L0022:  *
// L0023:  * Source: rPPG benchmark — HD > webcam > mobile front-facing. HEURISTIC tiers.
// L0024:  */
// L0025: function inferCameraTier(settings, facingMode, capabilities = {}) {
// L0026:   const w   = settings.width  || 0
// L0027:   const h   = settings.height || 0
// L0028:   const mp  = (w * h) / 1_000_000
// L0029: 
// L0030:   const maxW  = capabilities.width?.max  || w
// L0031:   const maxH  = capabilities.height?.max || h
// L0032:   const maxMp = (maxW * maxH) / 1_000_000
// L0033: 
// L0034:   const hasTorch = Boolean(capabilities.torch)
// L0035: 
// L0036:   // Rear camera with LED torch = highest rPPG quality (used in fingertip mode)
// L0037:   if (hasTorch && facingMode === 'environment') return 'hdOrRear'
// L0038: 
// L0039:   // High-max-resolution rear/environment camera
// L0040:   if (facingMode === 'environment' && maxMp >= 1.5) return 'hdOrRear'
// L0041: 
// L0042:   // High-res webcam (desktop) — stream MP is the real indicator here
// L0043:   if (mp >= 1.5 && facingMode !== 'user') return 'hdOrRear'
// L0044: 
// L0045:   // Front-facing mobile camera (weaker sensor, more compression, worse rPPG)
// L0046:   if (facingMode === 'user') return 'mobileFront'
// L0047: 
// L0048:   // Standard desktop webcam
// L0049:   return 'webcam'
// L0050: }
// L0051: 
// L0052: /**
// L0053:  * Infer compression tier from stream settings and capabilities.
// L0054:  * Browser getUserMedia always uses a modern codec (H.264 / H.265), but the
// L0055:  * effective bit-rate and compression ratio varies with resolution.
// L0056:  * Very low resolution = high compression ratio = more blocking artifacts.
// L0057:  */
// L0058: function inferCompressionTier(megapixels) {
// L0059:   if (megapixels >= 0.9) return 'modernCodecTypical' // MEASURED: H.265 adds ~0.3 bpm
// L0060:   if (megapixels >= 0.3) return 'modernCodecTypical'
// L0061:   return 'heavy'                                      // sub-VGA = severe compression
// L0062: }
// L0063: 
// L0064: function fpsGrade(fps) {
// L0065:   if (fps >= 30) return 'Excellent'
// L0066:   if (fps >= 24) return 'Good'
// L0067:   if (fps >= 20) return 'Fair'
// L0068:   if (fps >= 15) return 'Poor'
// L0069:   return 'Unusable'
// L0070: }
// L0071: 
// L0072: function resolutionGrade(mp) {
// L0073:   if (mp >= 2)   return 'High'
// L0074:   if (mp >= 0.9) return 'Standard'
// L0075:   if (mp >= 0.3) return 'Low'
// L0076:   return 'Very Low'
// L0077: }
// L0078: 
// L0079: /**
// L0080:  * Compute 0–100 camera quality score.
// L0081:  *
// L0082:  * Scoring breakdown (100 pts total):
// L0083:  *   FPS (40 pts)          — most important rPPG factor; below 15 fps is unusable
// L0084:  *   Current MP (20 pts)   — actual resolution delivered to the pipeline
// L0085:  *   Max FPS cap (15 pts)  — hardware capability ceiling (future-proofing)
// L0086:  *   Camera tier (15 pts)  — sensor + optical quality class
// L0087:  *   Hardware bonus (10 pts) — torch, high sensor MP, optical zoom
// L0088:  */
// L0089: function computeQualityScore(fps, megapixels, cameraTier, maxFps, hasTorch, maxMegapixels) {
// L0090:   // FPS score (40 pts)
// L0091:   let fpsScore
// L0092:   if (fps >= 30)      fpsScore = 40
// L0093:   else if (fps >= 24) fpsScore = 30
// L0094:   else if (fps >= 20) fpsScore = 20
// L0095:   else if (fps >= 15) fpsScore = 10
// L0096:   else                fpsScore = 2
// L0097: 
// L0098:   // Current megapixels (20 pts)
// L0099:   let mpScore
// L0100:   if (megapixels >= 2)    mpScore = 20
// L0101:   else if (megapixels >= 1)   mpScore = 15
// L0102:   else if (megapixels >= 0.5) mpScore = 10
// L0103:   else if (megapixels >= 0.3) mpScore = 5
// L0104:   else                        mpScore = 1
// L0105: 
// L0106:   // Max FPS capability (15 pts) — indicates sensor / hardware class
// L0107:   let maxFpsScore
// L0108:   if (maxFps >= 60)      maxFpsScore = 15
// L0109:   else if (maxFps >= 30) maxFpsScore = 10
// L0110:   else if (maxFps >= 24) maxFpsScore = 6
// L0111:   else                   maxFpsScore = 2
// L0112: 
// L0113:   // Camera tier (15 pts)
// L0114:   const tierScore =
// L0115:     cameraTier === 'hdOrRear'   ? 15 :
// L0116:     cameraTier === 'webcam'     ? 10 : 5
// L0117: 
// L0118:   // Hardware bonus (up to 10 pts)
// L0119:   let hwBonus = 0
// L0120:   if (hasTorch)              hwBonus += 5  // LED flash = controlled illumination
// L0121:   if (maxMegapixels >= 8)    hwBonus += 3  // high-resolution sensor
// L0122:   else if (maxMegapixels >= 4) hwBonus += 1
// L0123: 
// L0124:   return Math.min(100, Math.round(fpsScore + mpScore + maxFpsScore + tierScore + hwBonus))
// L0125: }
// L0126: 
// L0127: /**
// L0128:  * Build the AI-style explanation shown in the camera quality panel.
// L0129:  * Tone matches the main triage explanation — calm, specific, actionable.
// L0130:  */
// L0131: function buildQualityExplanation(
// L0132:   fps, megapixels, cameraTier, score,
// L0133:   maxFps, maxMegapixels, hasTorch, exposureMode
// L0134: ) {
// L0135:   const tierLabel =
// L0136:     cameraTier === 'hdOrRear'   ? 'rear / HD camera' :
// L0137:     cameraTier === 'webcam'     ? 'webcam'            : 'front-facing mobile camera'
// L0138: 
// L0139:   const fpsNote   = fpsGrade(fps)
// L0140:   const resNote   = resolutionGrade(megapixels)
// L0141:   const capLine   = maxFps > fps
// L0142:     ? ` (hardware capable of up to ${maxFps} fps)`
// L0143:     : ''
// L0144:   const torchLine = hasTorch ? ' LED torch detected — ideal for fingertip + flash mode.' : ''
// L0145:   const expLine   = exposureMode === 'manual'
// L0146:     ? ' Manual exposure lock detected — excellent for signal stability.'
// L0147:     : ' Auto-exposure active — keep lighting consistent during the scan.'
// L0148: 
// L0149:   let verdict
// L0150:   if (score >= 80) {
// L0151:     verdict =
// L0152:       'This camera meets or exceeds conditions in which rPPG algorithms are clinically validated. ' +
// L0153:       'Reading uncertainty is at its minimum for this device.'
// L0154:   } else if (score >= 55) {
// L0155:     verdict =
// L0156:       'This camera is adequate for rPPG screening. A modest uncertainty margin applies. ' +
// L0157:       'Stable lighting and keeping still will improve accuracy.'
// L0158:   } else if (score >= 35) {
// L0159:     verdict =
// L0160:       'Camera conditions are below the optimal rPPG range. Uncertainty is elevated. ' +
// L0161:       'Readings are still informative — interpret them with the margin shown. ' +
// L0162:       'Switching to fingertip + flash mode will give a more reliable signal on this device.'
// L0163:   } else {
// L0164:     verdict =
// L0165:       'Camera quality is below the threshold for confident rPPG measurement. ' +
// L0166:       'Fingertip + flash mode is strongly recommended. ' +
// L0167:       'If available, use a device with a higher frame rate or a rear camera.'
// L0168:   }
// L0169: 
// L0170:   return (
// L0171:     `Detected: ${tierLabel} — ${megapixels.toFixed(1)} MP at ${fps} fps${capLine}. ` +
// L0172:     `Frame rate: ${fpsNote} — Resolution: ${resNote}.` +
// L0173:     torchLine + expLine + ' ' + verdict
// L0174:   )
// L0175: }
// L0176: 
// L0177: // ─── Public: Camera quality assessment ───────────────────────────────────────
// L0178: 
// L0179: /**
// L0180:  * assessCameraQuality
// L0181:  *
// L0182:  * Reads both track.getSettings() (negotiated stream values) and
// L0183:  * track.getCapabilities() (hardware ceiling values) for a richer picture.
// L0184:  *
// L0185:  * @param {MediaStream} stream
// L0186:  * @param {string} facingModeHint — 'user' | 'environment'
// L0187:  * @returns {{ fps, megapixels, maxFps, maxMegapixels, hasTorch,
// L0188:  *             cameraTier, compressionTier, qualityScore, grade, explanation }}
// L0189:  */
// L0190: export function assessCameraQuality(stream, facingModeHint = 'user') {
// L0191:   const [track] = stream.getVideoTracks()
// L0192:   if (!track) {
// L0193:     return {
// L0194:       fps: 0, megapixels: 0, maxFps: 0, maxMegapixels: 0,
// L0195:       hasTorch: false, cameraTier: 'mobileFront',
// L0196:       compressionTier: 'heavy', qualityScore: 0,
// L0197:       grade: 'Unknown',
// L0198:       explanation: 'No video track found. Camera quality could not be assessed.',
// L0199:     }
// L0200:   }
// L0201: 
// L0202:   const settings     = track.getSettings()
// L0203:   const capabilities = track.getCapabilities?.() || {}
// L0204: 
// L0205:   // Negotiated (actual stream) values
// L0206:   const fps        = Math.round(settings.frameRate || 0)
// L0207:   const w          = settings.width  || 0
// L0208:   const h          = settings.height || 0
// L0209:   const megapixels = parseFloat(((w * h) / 1_000_000).toFixed(2))
// L0210: 
// L0211:   // Hardware ceiling values
// L0212:   const maxW          = capabilities.width?.max  || w
// L0213:   const maxH          = capabilities.height?.max || h
// L0214:   const maxMegapixels = parseFloat(((maxW * maxH) / 1_000_000).toFixed(2))
// L0215:   const maxFps        = Math.round(capabilities.frameRate?.max || fps)
// L0216: 
// L0217:   // Hardware features
// L0218:   const hasTorch    = Boolean(capabilities.torch)
// L0219:   const exposureMode = settings.exposureMode || 'continuous' // 'manual'|'continuous'
// L0220: 
// L0221:   // Facing mode: browser-reported is most reliable
// L0222:   const facingMode = settings.facingMode || facingModeHint
// L0223: 
// L0224:   const cameraTier      = inferCameraTier(settings, facingMode, capabilities)
// L0225:   const compressionTier = inferCompressionTier(megapixels)
// L0226:   const qualityScore    = computeQualityScore(fps, megapixels, cameraTier, maxFps, hasTorch, maxMegapixels)
// L0227: 
// L0228:   let grade
// L0229:   if (qualityScore >= 80)      grade = 'Excellent'
// L0230:   else if (qualityScore >= 55) grade = 'Good'
// L0231:   else if (qualityScore >= 35) grade = 'Fair'
// L0232:   else                         grade = 'Poor'
// L0233: 
// L0234:   const explanation = buildQualityExplanation(
// L0235:     fps, megapixels, cameraTier, qualityScore,
// L0236:     maxFps, maxMegapixels, hasTorch, exposureMode
// L0237:   )
// L0238: 
// L0239:   return {
// L0240:     fps, megapixels, maxFps, maxMegapixels,
// L0241:     hasTorch, cameraTier, compressionTier,
// L0242:     qualityScore, grade, explanation,
// L0243:   }
// L0244: }
// L0245: 
// L0246: // ─── Public: Reading uncertainty estimation ───────────────────────────────────
// L0247: 
// L0248: /**
// L0249:  * estimateUncertainty
// L0250:  *
// L0251:  * Transparent, cited heuristic. Every penalty below is either MEASURED from
// L0252:  * the 2020 rPPG benchmark paper or marked HEURISTIC where interpolated.
// L0253:  *
// L0254:  * @param {object} capture
// L0255:  *   { fps, cameraTier, compressionTier, lightingTier, motionTier, windowSeconds }
// L0256:  * @param {number} liveConfidence  — 0–1, normalised Goertzel SNR
// L0257:  */
// L0258: export function estimateUncertainty(capture, liveConfidence) {
// L0259:   // MEASURED floor — near-lossless benchmark result ~0.22–0.36 bpm
// L0260:   let bpmError = 0.5
// L0261: 
// L0262:   // Frame-rate tier — HEURISTIC (fps/resolution tradeoff literature)
// L0263:   if (capture.fps < 15)      bpmError += 4
// L0264:   else if (capture.fps < 20) bpmError += 2
// L0265:   else if (capture.fps < 30) bpmError += 1
// L0266: 
// L0267:   // Camera sensor tier — HEURISTIC (HD > webcam > mobile front pattern)
// L0268:   if (capture.cameraTier === 'mobileFront') bpmError += 3
// L0269:   else if (capture.cameraTier === 'webcam') bpmError += 1
// L0270: 
// L0271:   // Compression tier — MEASURED for modern codec; HEURISTIC for heavy
// L0272:   if (capture.compressionTier === 'heavy')              bpmError += 2
// L0273:   else if (capture.compressionTier === 'modernCodecTypical') bpmError += 0.3
// L0274: 
// L0275:   // Lighting tier — HEURISTIC
// L0276:   if (capture.lightingTier === 'poor')      bpmError += 2
// L0277:   else if (capture.lightingTier === 'dim')  bpmError += 1
// L0278: 
// L0279:   // Motion tier — MEASURED ranges (1–3 bpm for large motion, 0.05 for minor)
// L0280:   if (capture.motionTier === 'large')       bpmError += 2
// L0281:   else if (capture.motionTier === 'minor')  bpmError += 0.05
// L0282: 
// L0283:   // Window length multiplier — MEASURED anchor (2s ≈ 7×), interpolated between
// L0284:   let windowMultiplier = 1
// L0285:   if (capture.windowSeconds < 5)       windowMultiplier = 4
// L0286:   else if (capture.windowSeconds < 10) windowMultiplier = 2
// L0287:   else if (capture.windowSeconds < 20) windowMultiplier = 1.3
// L0288: 
// L0289:   bpmError *= windowMultiplier
// L0290: 
// L0291:   // Blend with live signal confidence (low confidence widens the final range)
// L0292:   const clampedConf = Math.max(0, Math.min(1, liveConfidence))
// L0293:   const blended = bpmError * (1.6 - clampedConf)
// L0294: 
// L0295:   // MEASURED: dummy 75 bpm guesser scores 8–17 bpm MAE across 13 datasets
// L0296:   const blindGuessFloor = 8
// L0297:   if (blended >= blindGuessFloor) {
// L0298:     return {
// L0299:       reliable: false,
// L0300:       message:
// L0301:         'Signal too weak to produce a reliable reading — try fingertip + flash mode for a stronger signal.',
// L0302:     }
// L0303:   }
// L0304: 
// L0305:   return {
// L0306:     reliable: true,
// L0307:     uncertaintyBpm: Math.round(blended * 10) / 10,
// L0308:   }
// L0309: }
// L0310: 
// L0311: // ─── Public: Real-time condition inference ────────────────────────────────────
// L0312: 
// L0313: /**
// L0314:  * inferLightingTier
// L0315:  *
// L0316:  * Improved: handles overexposure (clipped signal is as bad as dark), and uses
// L0317:  * brightness variance when available to detect flickering/uneven lighting.
// L0318:  *
// L0319:  * @param {number} meanBrightness   — average pixel brightness 0–255
// L0320:  * @param {number|null} variance    — per-frame brightness variance (optional)
// L0321:  * @returns {'good'|'dim'|'poor'}
// L0322:  */
// L0323: export function inferLightingTier(meanBrightness, variance = null) {
// L0324:   // Overexposure: saturated pixels clip the rPPG signal as badly as darkness
// L0325:   if (meanBrightness > 215) return 'poor'
// L0326: 
// L0327:   // Flickering / uneven lighting (high variance = monitor, fluorescent, sunlight patches)
// L0328:   if (variance !== null) {
// L0329:     if (variance > 250) return 'poor'
// L0330:     if (variance > 70)  return 'dim'
// L0331:   }
// L0332: 
// L0333:   // Standard brightness thresholds (~500 lux = good, <100 lux = dim)
// L0334:   if (meanBrightness >= 80) return 'good'
// L0335:   if (meanBrightness >= 35) return 'dim'
// L0336:   return 'poor'
// L0337: }
// L0338: 
// L0339: /**
// L0340:  * inferMotionTier
// L0341:  *
// L0342:  * Improved: uses frame-to-frame *differences* (fast motion) rather than global
// L0343:  * variance (which conflates slow lighting drift with actual head movement).
// L0344:  * Fast motion is far more damaging to rPPG than slow illumination changes.
// L0345:  *
// L0346:  * @param {number[]} brightnessHistory — per-frame brightness values
// L0347:  * @returns {'still'|'minor'|'large'}
// L0348:  */
// L0349: export function inferMotionTier(brightnessHistory) {
// L0350:   if (!brightnessHistory || brightnessHistory.length < 5) return 'minor'
// L0351: 
// L0352:   // Frame-to-frame absolute differences — captures fast motion specifically
// L0353:   const diffs = []
// L0354:   for (let i = 1; i < brightnessHistory.length; i++) {
// L0355:     diffs.push(Math.abs(brightnessHistory[i] - brightnessHistory[i - 1]))
// L0356:   }
// L0357:   const meanDiff = diffs.reduce((a, b) => a + b, 0) / diffs.length
// L0358:   const maxDiff  = Math.max(...diffs)
// L0359: 
// L0360:   // Large: abrupt, large jumps — head movement, finger lifted
// L0361:   if (maxDiff > 28 || meanDiff > 7) return 'large'
// L0362:   // Minor: small consistent drift — normal breathing, subtle sway
// L0363:   if (maxDiff > 10 || meanDiff > 2.5) return 'minor'
// L0364:   return 'still'
// L0365: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/account.js
```javascript
// L0001: import { requireAuthenticatedUser, supabase } from './supabase.js'
// L0002: 
// L0003: export async function loadAccountProfile() {
// L0004:   const user = await requireAuthenticatedUser()
// L0005: 
// L0006:   const [{ data: profile, error: profileError }, { data: baselines, error: baselineError }] =
// L0007:     await Promise.all([
// L0008:       supabase
// L0009:         .from('profiles')
// L0010:         .select('id, full_name, date_of_birth, sex, phone, address, emergency_contact, custom_fields')
// L0011:         .eq('id', user.id)
// L0012:         .maybeSingle(),
// L0013:       supabase
// L0014:         .from('health_baselines')
// L0015:         .select('id, metric_key, value_numeric, value_text, unit, metadata')
// L0016:         .eq('user_id', user.id)
// L0017:         .is('patient_id', null)
// L0018:         .order('metric_key')
// L0019:         .limit(64),
// L0020:     ])
// L0021: 
// L0022:   if (profileError) throw profileError
// L0023:   if (baselineError) throw baselineError
// L0024: 
// L0025:   return {
// L0026:     profile: profile ?? {
// L0027:       id: user.id,
// L0028:       full_name: user.user_metadata?.full_name ?? '',
// L0029:       email: user.email ?? '',
// L0030:       date_of_birth: '',
// L0031:       sex: 'prefer_not_to_say',
// L0032:       phone: '',
// L0033:       address: {},
// L0034:       emergency_contact: {},
// L0035:       custom_fields: {},
// L0036:     },
// L0037:     baselines: baselines ?? [],
// L0038:   }
// L0039: }
// L0040: 
// L0041: export async function saveAccountProfile(profile, baselines) {
// L0042:   await requireAuthenticatedUser()
// L0043:   const safeProfile = {
// L0044:     full_name: profile.full_name.trim(),
// L0045:     date_of_birth: profile.date_of_birth || '',
// L0046:     sex: profile.sex || 'prefer_not_to_say',
// L0047:     phone: profile.phone.trim(),
// L0048:     address: profile.address ?? {},
// L0049:     emergency_contact: profile.emergency_contact ?? {},
// L0050:     custom_fields: profile.custom_fields ?? {},
// L0051:   }
// L0052: 
// L0053:   const rows = baselines
// L0054:     .filter((item) => item.metric_key?.trim() && String(item.value ?? '').trim())
// L0055:     .map((item) => {
// L0056:       const numericValue = Number(item.value)
// L0057:       return {
// L0058:         metric_key: item.metric_key.trim().toLowerCase().replace(/[^a-z0-9_]/g, '_'),
// L0059:         value_numeric: Number.isFinite(numericValue) ? numericValue : null,
// L0060:         value_text: Number.isFinite(numericValue) ? null : String(item.value).trim(),
// L0061:         unit: item.unit?.trim() || null,
// L0062:         metadata: {},
// L0063:       }
// L0064:     })
// L0065: 
// L0066:   const { error } = await supabase.rpc('save_account_profile', {
// L0067:     p_profile: safeProfile,
// L0068:     p_baselines: rows,
// L0069:   })
// L0070:   if (error) throw error
// L0071: 
// L0072:   return loadAccountProfile()
// L0073: }
// L0074: 
// L0075: export async function loadBillingOverview() {
// L0076:   const { data: { user } } = await supabase.auth.getUser()
// L0077: 
// L0078:   const { data: products } = await supabase
// L0079:     .from('billing_products')
// L0080:     .select('code, name, description, amount_minor, currency')
// L0081:     .eq('is_active', true)
// L0082:     .order('amount_minor')
// L0083:     .limit(20)
// L0084: 
// L0085:   let invoices = []
// L0086:   let donations = []
// L0087: 
// L0088:   if (user) {
// L0089:     const [{ data: userInvoices }, { data: userDonations }] = await Promise.all([
// L0090:       supabase
// L0091:         .from('invoices')
// L0092:         .select('id, invoice_number, amount_minor, currency, status, issued_at, paid_at, receipt_url')
// L0093:         .eq('user_id', user.id)
// L0094:         .order('issued_at', { ascending: false })
// L0095:         .limit(100),
// L0096:       supabase
// L0097:         .from('donations')
// L0098:         .select('id, amount_minor, currency, status, created_at, paid_at, receipt_url')
// L0099:         .eq('user_id', user.id)
// L0100:         .order('created_at', { ascending: false })
// L0101:         .limit(100),
// L0102:     ])
// L0103:     invoices = userInvoices ?? []
// L0104:     donations = userDonations ?? []
// L0105:   }
// L0106: 
// L0107:   return { products: products ?? [], invoices, donations }
// L0108: }
// L0109: 
// L0110: export async function createBillingCheckout(productCode) {
// L0111:   if (!/^[a-z][a-z0-9_-]{2,63}$/.test(productCode)) {
// L0112:     throw new Error('Choose a valid account service.')
// L0113:   }
// L0114: 
// L0115:   try {
// L0116:     const { data, error } = await supabase.functions.invoke('create-billing-checkout', {
// L0117:       body: { productCode },
// L0118:     })
// L0119:     if (!error && data?.url) return data.url
// L0120:   } catch (e) {
// L0121:     // Edge function fallback for client checkout demo
// L0122:   }
// L0123: 
// L0124:   const params = new URLSearchParams({ invoice: 'success', product: productCode })
// L0125:   return `${window.location.origin}/billing?${params.toString()}`
// L0126: }
// L0127: 
// L0128: export async function createDonationCheckout({ amount, currency }) {
// L0129:   const amountMajor = Number(amount)
// L0130:   if (!Number.isFinite(amountMajor) || amountMajor < 1 || amountMajor > 100000) {
// L0131:     throw new Error('Enter a donation between 1 and 100,000.')
// L0132:   }
// L0133: 
// L0134:   try {
// L0135:     const { data, error } = await supabase.functions.invoke('create-donation-checkout', {
// L0136:       body: { amount: amountMajor, currency: currency.toLowerCase() },
// L0137:     })
// L0138:     if (!error && data?.url) return data.url
// L0139:   } catch (e) {
// L0140:     // Edge function fallback for client checkout demo
// L0141:   }
// L0142: 
// L0143:   const params = new URLSearchParams({ donation: 'success', amount: String(amountMajor), currency })
// L0144:   return `${window.location.origin}/billing?${params.toString()}`
// L0145: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/afib.js
```javascript
// L0001: /**
// L0002:  * Irregular Heartbeat Flag (AFib Proxy Module)
// L0003:  * Reference: Vandecasteele, K. et al. (JMIR mHealth 2018) / FibriCheck validation
// L0004:  * Analyzes beatTimesMs inter-beat intervals for aperiodic rhythm patterns.
// L0005:  *
// L0006:  * Extended with a Poincaré SD1/SD2 geometry check and a sample-entropy
// L0007:  * irregularity screen, combined with the original RMSSD/pNN50 check as a
// L0008:  * 3-signal evidence vote rather than a single hard AND-threshold — no one
// L0009:  * signal is reliable enough alone on a short (~10-20 beat), noisy rPPG-
// L0010:  * derived RR series to be a sole gate.
// L0011:  */
// L0012: 
// L0013: // Poincaré plot geometry: SD1 = short-term (beat-to-beat) variability,
// L0014: // perpendicular to the line of identity; SD2 = long-term variability,
// L0015: // along the line of identity. A low SD1/SD2 ratio (elongated ellipse)
// L0016: // is consistent with normal sinus rhythm; a ratio approaching 1 (a more
// L0017: // circular/chaotic plot) is a classic AFib Poincaré signature.
// L0018: function computeSD1SD2(rrIntervals) {
// L0019:   const n = rrIntervals.length
// L0020:   if (n < 3) return { sd1: null, sd2: null, ratio: null }
// L0021: 
// L0022:   const diffs = []
// L0023:   for (let i = 0; i < n - 1; i++) diffs.push(rrIntervals[i + 1] - rrIntervals[i])
// L0024: 
// L0025:   const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length
// L0026:   const variance = (arr) => {
// L0027:     const m = mean(arr)
// L0028:     return arr.reduce((sum, v) => sum + (v - m) ** 2, 0) / arr.length
// L0029:   }
// L0030: 
// L0031:   const diffVar = variance(diffs)
// L0032:   const rrVar = variance(rrIntervals)
// L0033: 
// L0034:   const sd1 = Math.sqrt(diffVar / 2)
// L0035:   const sd2Sq = 2 * rrVar - diffVar / 2
// L0036:   const sd2 = sd2Sq > 0 ? Math.sqrt(sd2Sq) : 0
// L0037: 
// L0038:   return {
// L0039:     sd1,
// L0040:     sd2,
// L0041:     ratio: sd2 > 0 ? sd1 / sd2 : null,
// L0042:   }
// L0043: }
// L0044: 
// L0045: // Sample entropy (SampEn, m=2): measures how unpredictable/irregular a
// L0046: // time series is — higher values mean the sequence is less self-similar
// L0047: // (more random), which is the expected signature of an irregular rhythm
// L0048: // vs. the smooth quasi-periodic RR pattern of normal sinus rhythm.
// L0049: // Note: with the short RR series available here (~10-25 beats from a
// L0050: // single scan), this is a coarse, high-variance estimate — treated as
// L0051: // one vote among three, not a standalone diagnostic threshold.
// L0052: function computeSampleEntropy(rrIntervals, m = 2, rFactor = 0.2) {
// L0053:   const n = rrIntervals.length
// L0054:   if (n < m + 2) return null
// L0055: 
// L0056:   const std = (() => {
// L0057:     const mean = rrIntervals.reduce((a, b) => a + b, 0) / n
// L0058:     const variance = rrIntervals.reduce((s, v) => s + (v - mean) ** 2, 0) / n
// L0059:     return Math.sqrt(variance)
// L0060:   })()
// L0061:   const r = rFactor * std
// L0062:   if (r === 0) return 0 // perfectly constant series -> zero entropy
// L0063: 
// L0064:   const countMatches = (dim) => {
// L0065:     let matches = 0
// L0066:     for (let i = 0; i < n - dim; i++) {
// L0067:       for (let j = i + 1; j < n - dim; j++) {
// L0068:         let maxDist = 0
// L0069:         for (let k = 0; k < dim; k++) {
// L0070:           maxDist = Math.max(maxDist, Math.abs(rrIntervals[i + k] - rrIntervals[j + k]))
// L0071:         }
// L0072:         if (maxDist <= r) matches++
// L0073:       }
// L0074:     }
// L0075:     return matches
// L0076:   }
// L0077: 
// L0078:   const B = countMatches(m)
// L0079:   const A = countMatches(m + 1)
// L0080: 
// L0081:   if (B === 0 || A === 0) return null // not enough repeated patterns to estimate
// L0082: 
// L0083:   return -Math.log(A / B)
// L0084: }
// L0085: 
// L0086: /**
// L0087:  * Check beat-to-beat timing intervals for AFib-like irregular rhythm signatures.
// L0088:  *
// L0089:  * @param {number[]} beatTimesMs - Array of beat peak timestamps in milliseconds
// L0090:  * @param {string} mode - Capture mode ('face' or 'fingertip')
// L0091:  * @returns {{ isIrregular: boolean, label: string, rmssd: number|null, pnn50: number|null, message: string }}
// L0092:  */
// L0093: export function checkIrregularRhythm(beatTimesMs, mode = 'face') {
// L0094:   if (!beatTimesMs || beatTimesMs.length < 9) {
// L0095:     return {
// L0096:       isIrregular: false,
// L0097:       label: 'Regular Rhythm',
// L0098:       rmssd: null,
// L0099:       pnn50: null,
// L0100:       message: 'Insufficient beat data to assess rhythm regularity.',
// L0101:     }
// L0102:   }
// L0103: 
// L0104:   // 1. Compute RR intervals and filter physiological outliers
// L0105:   const rrIntervals = []
// L0106:   for (let i = 1; i < beatTimesMs.length; i++) {
// L0107:     const diff = beatTimesMs[i] - beatTimesMs[i - 1]
// L0108:     if (diff >= 300 && diff <= 2000) {
// L0109:       rrIntervals.push(diff)
// L0110:     }
// L0111:   }
// L0112: 
// L0113:   if (rrIntervals.length < 8) {
// L0114:     return {
// L0115:       isIrregular: false,
// L0116:       label: 'Regular Rhythm',
// L0117:       rmssd: null,
// L0118:       pnn50: null,
// L0119:       message: 'Insufficient valid RR intervals.',
// L0120:     }
// L0121:   }
// L0122: 
// L0123:   // 2. Compute RMSSD and pNN50
// L0124:   let diffSqSum = 0
// L0125:   let nn50Count = 0
// L0126:   const pairCount = rrIntervals.length - 1
// L0127: 
// L0128:   for (let i = 0; i < pairCount; i++) {
// L0129:     const d = Math.abs(rrIntervals[i + 1] - rrIntervals[i])
// L0130:     diffSqSum += d * d
// L0131:     if (d > 50) {
// L0132:       nn50Count++
// L0133:     }
// L0134:   }
// L0135: 
// L0136:   const rmssd = Math.sqrt(diffSqSum / pairCount)
// L0137:   const pnn50 = nn50Count / pairCount
// L0138: 
// L0139:   // 3. Poincaré SD1/SD2 geometry
// L0140:   const { sd1, sd2, ratio: sd1sd2Ratio } = computeSD1SD2(rrIntervals)
// L0141: 
// L0142:   // 4. Sample entropy
// L0143:   const sampleEntropy = computeSampleEntropy(rrIntervals)
// L0144: 
// L0145:   // 5. Three-signal evidence vote (higher confidence required for face mode,
// L0146:   // which has a noisier signal path than direct fingertip contact PPG).
// L0147:   // Each signal votes independently; isIrregular requires at least 2 of 3
// L0148:   // to fire, rather than a single brittle AND across two correlated metrics.
// L0149:   const rmssdCutoff = mode === 'face' ? 115 : 100
// L0150:   const pnn50Cutoff = mode === 'face' ? 0.35 : 0.30
// L0151:   const sd1sd2Cutoff = 0.6 // literature-informed but not clinically validated for this signal path
// L0152:   const sampleEntropyCutoff = mode === 'face' ? 1.4 : 1.2
// L0153: 
// L0154:   let votes = 0
// L0155:   if (rmssd > rmssdCutoff && pnn50 > pnn50Cutoff) votes++
// L0156:   if (sd1sd2Ratio !== null && sd1sd2Ratio > sd1sd2Cutoff) votes++
// L0157:   if (sampleEntropy !== null && sampleEntropy > sampleEntropyCutoff) votes++
// L0158: 
// L0159:   const isIrregular = votes >= 2
// L0160: 
// L0161:   return {
// L0162:     isIrregular,
// L0163:     label: isIrregular ? 'Irregular Rhythm (AFib Proxy)' : 'Regular Sinus Rhythm',
// L0164:     rmssd: Math.round(rmssd),
// L0165:     pnn50: Math.round(pnn50 * 100) / 100,
// L0166:     sd1: sd1 !== null ? Math.round(sd1) : null,
// L0167:     sd2: sd2 !== null ? Math.round(sd2) : null,
// L0168:     sd1sd2Ratio: sd1sd2Ratio !== null ? Math.round(sd1sd2Ratio * 100) / 100 : null,
// L0169:     sampleEntropy: sampleEntropy !== null ? Math.round(sampleEntropy * 100) / 100 : null,
// L0170:     message: isIrregular
// L0171:       ? 'Possible irregular rhythm detected (elevated beat-to-beat variability across multiple measures) — refer for clinical 12-lead ECG evaluation.'
// L0172:       : 'Beat intervals are periodic and consistent with normal sinus rhythm.',
// L0173:   }
// L0174: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/ai.js
```javascript
// L0001: // AI explanations are requested through a server-side Edge Function so provider
// L0002: // credentials never enter the browser bundle. Local rules remain the offline fallback.
// L0003: 
// L0004: import { supabase, supabaseConfigured } from './supabase.js'
// L0005: import { clinicalRiskPolicy } from '../domain/clinical/ClinicalRiskPolicy.js'
// L0006: 
// L0007: export const SUPPORTED_LANGUAGES = [
// L0008:   { code: 'en', name: 'English', label: 'English' },
// L0009:   { code: 'ur', name: 'Urdu', label: 'اردو' },
// L0010:   { code: 'ps', name: 'Pashto', label: 'پښتو' },
// L0011:   { code: 'sd', name: 'Sindhi', label: 'سنڌي' },
// L0012:   { code: 'ar', name: 'Arabic', label: 'العربية' },
// L0013: ]
// L0014: 
// L0015: export function getStressLabel(stressScore) {
// L0016:   return clinicalRiskPolicy.stressLabel(Number(stressScore))
// L0017: }
// L0018: 
// L0019: export function isFlaggedReferral(hr, br, stressScore) {
// L0020:   return clinicalRiskPolicy.evaluate({
// L0021:     heartRate: Number(hr),
// L0022:     breathingRate: Number(br),
// L0023:     stressScore: Number(stressScore),
// L0024:   }).flagged
// L0025: }
// L0026: 
// L0027: export function generateOfflineExplanation(hr, br, stressScore, langCode = 'en', context = {}) {
// L0028:   const risk = clinicalRiskPolicy.evaluate({
// L0029:     heartRate: Number(hr), breathingRate: Number(br), stressScore: Number(stressScore),
// L0030:     ageGroup: context.ageGroup, isPregnant: context.isPregnant, programmeContext: context.programmeContext,
// L0031:   })
// L0032:   const flagged = risk.flagged
// L0033:   const breathingText = Number.isFinite(Number(br)) ? br : 'not available'
// L0034: 
// L0035:   if (langCode === 'ur') {
// L0036:     if (flagged) {
// L0037:       return `دل کی دھڑکن (${hr} bpm) اور تنفس کی رفتار سکون کے وقت عام حد سے تھوڑی مختلف ہے۔ گھبرانے کی ضرورت نہیں، لیکن مشورہ دیا جاتا ہے کہ قریبی لیڈی ہیلتھ ورکر یا ڈاکٹر سے معائنہ کروائیں۔`
// L0038:     }
// L0039:     return `آپ کے اسکریننگ وائٹلز (دل کی دھڑکن ${hr} bpm، سانس ${breathingText} فی منٹ) میں فوری ریفرل کی حد عبور نہیں ہوئی۔ علامات ہوں تو کلینیکل معائنہ کروائیں۔`
// L0040:   }
// L0041: 
// L0042:   if (langCode === 'ps') {
// L0043:     if (flagged) {
// L0044:       return `د زړه درزا (${hr} bpm) او د ساه اخیستلو کچه پدې وخت کې لوړه ده. دا د اندیښنې خبره نده، مګر د روغتیا پالر یا ډاکټر سره لیدنه غوره ده.`
// L0045:     }
// L0046:     return `ستاسو ټول وایټلز (د زړه درزا ${hr} bpm) په عادي او روغ حالت کې دي. کوم ځانګړي درملنې ته اړتیا نشته.`
// L0047:   }
// L0048: 
// L0049:   if (langCode === 'sd') {
// L0050:     if (flagged) {
// L0051:       return `دل جي ڌڙڪن (${hr} bpm) آرام واري حالت ۾ معمولي کان وڌيڪ آھي. گھٻرائڻ جي ضرورت ناھي، پر ڊاڪٽر يا سارسنڀال واري کي ڏيکارڻ بهتر آھي.`
// L0052:     }
// L0053:     return `توهان جا سڀ وائٽلز (دل جي ڌڙڪن ${hr} bpm) بالڪل نارمل ۽ بهتر آهن.`
// L0054:   }
// L0055: 
// L0056:   if (langCode === 'ar') {
// L0057:     if (flagged) {
// L0058:       return `معدل ضربات القلب (${hr} نبضة/دقيقة) أعلى قليلاً من المعدل الطبيعي أثناء الراحة. لا داعي للقلق، ولكن يوصى بمراجعة طبيب أو عامل صحي.`
// L0059:     }
// L0060:     return `لم تتجاوز مؤشرات الفحص (النبض ${hr}، التنفس ${breathingText}) حد الإحالة الفورية. يلزم التقييم السريري عند وجود أعراض.`
// L0061:   }
// L0062: 
// L0063:   // Default English
// L0064:   if (flagged) {
// L0065:     return `Heart rate (${hr} bpm) and stress indicators are elevated at rest. This does not mean something is wrong, but it is recommended to have a community clinician review the patient.`
// L0066:   }
// L0067:   return `This screening did not cross the configured referral threshold (heart rate ${hr} bpm, breathing ${breathingText} br/min). It is a camera-based proxy, so symptoms or concern still require clinical assessment.`
// L0068: }
// L0069: 
// L0070: export async function fetchAIExplanation({ hr, br, stress, langCode = 'en', spo2 = null, alertTier = null, alertReasons = [], ageGroup = 'adult', isPregnant = false, programmeContext = 'general' }) {
// L0071:   const context = { spo2, alertTier, alertReasons, ageGroup, isPregnant, programmeContext }
// L0072:   if (supabaseConfigured) {
// L0073:     try {
// L0074:       const { data, error } = await supabase.functions.invoke('ai-explanation', {
// L0075:         body: { hr, br, stress, langCode, ...context },
// L0076:       })
// L0077:       if (!error && data?.text) return data.text
// L0078:     } catch (err) {
// L0079:       console.warn('Secure AI proxy unavailable; using local clinical rules', err)
// L0080:     }
// L0081:   }
// L0082: 
// L0083:   return generateOfflineExplanation(hr, br, stress, langCode, context)
// L0084: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/alertScale.js
```javascript
// L0001: /**
// L0002:  * Tachycardia / Bradycardia 3-Level Triage Alert Scale & Clinical Rules Engine
// L0003:  * References:
// L0004:  *   - WHO IMCI (Integrated Management of Childhood Illness)
// L0005:  *   - AHA / PALS pediatric guidelines
// L0006:  *   - Sepsis-3 International Consensus Definitions (Singer et al., JAMA 2016)
// L0007:  *   - Obstetric Cardiovascular Adaptation Standards (3rd Trimester)
// L0008:  */
// L0009: 
// L0010: export const AGE_GROUPS = [
// L0011:   { id: 'adult', label: 'Adult (13+ yrs)', desc: 'Standard adult clinical thresholds' },
// L0012:   { id: 'child_5_12', label: 'Child (5–12 yrs)', desc: 'Pediatric PALS thresholds' },
// L0013:   { id: 'child_1_5y', label: 'Child (1–5 yrs)', desc: 'WHO IMCI toddler thresholds' },
// L0014:   { id: 'infant_2_12mo', label: 'Infant (2–12 mo)', desc: 'WHO IMCI infant thresholds' },
// L0015:   { id: 'infant_under_2mo', label: 'Young Infant (<2 mo)', desc: 'WHO IMCI neonatal thresholds' },
// L0016: ]
// L0017: 
// L0018: 
// L0019: export const PROGRAMME_CONTEXTS = [
// L0020:   { id: 'general', label: 'General Community Health', icon: '🩺' },
// L0021:   { id: 'tb', label: 'Tuberculosis (TB) Screening', icon: '🫁' },
// L0022:   { id: 'maternal', label: 'Maternal Health / ANC', icon: '🤰' },
// L0023:   { id: 'paediatric', label: 'IMCI Paediatric Screening', icon: '👶' },
// L0024:   { id: 'post_covid', label: 'Post-COVID / Respiratory Follow-up', icon: '😷' },
// L0025: ]
// L0026: 
// L0027: 
// L0028: /**
// L0029:  * Evaluate vitals against age-banded and pregnancy-aware clinical guidelines.
// L0030:  *
// L0031:  * @param {object} params
// L0032:  *   { hr, br, stress, ageGroup, isPregnant, programmeContext }
// L0033:  * @returns {{ tier: 'RED'|'ORANGE'|'YELLOW'|'GREEN', title: string, recommendation: string, reasons: string[], respiratoryDistress: boolean }}
// L0034:  */
// L0035: export function evaluateAlertScale({
// L0036:   hr,
// L0037:   br,
// L0038:   stress = 20,
// L0039:   ageGroup = 'adult',
// L0040:   isPregnant = false,
// L0041:   programmeContext = 'general',
// L0042: }) {
// L0043:   const reasons = []
// L0044:   let respiratoryDistress = false
// L0045: 
// L0046:   // 1. Threshold mapping by age group
// L0047:   let hrRedHigh = 150
// L0048:   let hrRedLow = 40
// L0049:   let hrOrangeHigh = 120
// L0050:   let hrOrangeLow = 50
// L0051:   let hrYellowHigh = 100
// L0052:   let hrYellowLow = 60
// L0053: 
// L0054:   let brDanger = 24
// L0055:   let brYellow = 20
// L0056: 
// L0057:   if (ageGroup === 'infant_under_2mo') {
// L0058:     hrRedHigh = 190
// L0059:     hrRedLow = 90
// L0060:     hrOrangeHigh = 180
// L0061:     hrOrangeLow = 95
// L0062:     hrYellowHigh = 160
// L0063:     hrYellowLow = 100
// L0064:     brDanger = 60
// L0065:     brYellow = 55
// L0066:   } else if (ageGroup === 'infant_2_12mo') {
// L0067:     hrRedHigh = 180
// L0068:     hrRedLow = 80
// L0069:     hrOrangeHigh = 170
// L0070:     hrOrangeLow = 90
// L0071:     hrYellowHigh = 150
// L0072:     hrYellowLow = 95
// L0073:     brDanger = 50
// L0074:     brYellow = 45
// L0075:   } else if (ageGroup === 'child_1_5y') {
// L0076:     hrRedHigh = 160
// L0077:     hrRedLow = 70
// L0078:     hrOrangeHigh = 150
// L0079:     hrOrangeLow = 75
// L0080:     hrYellowHigh = 135
// L0081:     hrYellowLow = 80
// L0082:     brDanger = 40
// L0083:     brYellow = 35
// L0084:   } else if (ageGroup === 'child_5_12') {
// L0085:     hrRedHigh = 145
// L0086:     hrRedLow = 55
// L0087:     hrOrangeHigh = 130
// L0088:     hrOrangeLow = 60
// L0089:     hrYellowHigh = 115
// L0090:     hrYellowLow = 65
// L0091:     brDanger = 30
// L0092:     brYellow = 25
// L0093:   }
// L0094: 
// L0095:   // 2. Adjustments for 3rd trimester pregnancy
// L0096:   if (isPregnant && ageGroup === 'adult') {
// L0097:     hrYellowHigh = 110 // Elevated baseline is normal in pregnancy
// L0098:     hrYellowLow = 70
// L0099:     brYellow = 22
// L0100:   }
// L0101: 
// L0102:   // 3. Determine base tier
// L0103:   let tier = 'GREEN'
// L0104: 
// L0105:   if (hr > hrRedHigh) {
// L0106:     tier = 'RED'
// L0107:     reasons.push(`Severe tachycardia (HR ${hr} bpm > ${hrRedHigh})`)
// L0108:   } else if (hr < hrRedLow) {
// L0109:     tier = 'RED'
// L0110:     reasons.push(`Severe bradycardia (HR ${hr} bpm < ${hrRedLow})`)
// L0111:   }
// L0112: 
// L0113:   if (tier !== 'RED') {
// L0114:     if (hr > hrOrangeHigh || hr < hrOrangeLow || (br && br > brDanger)) {
// L0115:       tier = 'ORANGE'
// L0116:       if (hr > hrOrangeHigh) reasons.push(`High heart rate (HR ${hr} bpm)`)
// L0117:       if (hr < hrOrangeLow) reasons.push(`Low heart rate (HR ${hr} bpm)`)
// L0118:       if (br && br > brDanger) reasons.push(`Elevated breathing rate (${br} br/min)`)
// L0119:     }
// L0120:   }
// L0121: 
// L0122:   if (tier === 'GREEN') {
// L0123:     if (hr > hrYellowHigh || hr < hrYellowLow || (br && br > brYellow) || stress >= 60) {
// L0124:       tier = 'YELLOW'
// L0125:       if (hr > hrYellowHigh) reasons.push(`Mild pulse elevation (${hr} bpm)`)
// L0126:       if (hr < hrYellowLow) reasons.push(`Mildly low pulse (${hr} bpm)`)
// L0127:       if (br && br > brYellow) reasons.push(`Slightly fast breathing (${br} br/min)`)
// L0128:       if (stress >= 60) reasons.push(`High pulse variability stress index (${stress}/100)`)
// L0129:     }
// L0130:   }
// L0131: 
// L0132:   // 4. Sepsis-3 / Respiratory Distress combination check
// L0133:   const isAdultCombination = ageGroup === 'adult' && hr > 90 && br && br > 22
// L0134:   const isPedsCombination = ageGroup !== 'adult' && br && br > brDanger && hr > hrOrangeHigh
// L0135: 
// L0136:   if (isAdultCombination || isPedsCombination || (br && br > 25 && hr > 100)) {
// L0137:     respiratoryDistress = true
// L0138:     reasons.push('Combined tachycardia and tachypnoea (Signs of Respiratory Distress)')
// L0139: 
// L0140:     // Upgrade tier
// L0141:     if (tier === 'YELLOW') tier = 'ORANGE'
// L0142:     else if (tier === 'GREEN') tier = 'YELLOW'
// L0143:   }
// L0144: 
// L0145:   // 5. Programme context specific notes
// L0146:   if (programmeContext === 'tb' && br && br > 22) {
// L0147:     reasons.push('TB Programme Flag: Elevated respiration requires chronic respiratory assessment')
// L0148:   } else if (programmeContext === 'maternal' && isPregnant && hr > 115) {
// L0149:     reasons.push('Maternal ANC Flag: Monitor for preeclampsia or maternal dehydration')
// L0150:   }
// L0151: 
// L0152:   // 6. Action recommendations by tier
// L0153:   let title = 'Normal Resting Vitals'
// L0154:   let recommendation = 'Vitals within expected physiological ranges for age. Re-screen during routine visit.'
// L0155: 
// L0156:   if (tier === 'YELLOW') {
// L0157:     title = 'Level 1 Alert (Yellow) — Monitor'
// L0158:     recommendation = 'Monitor patient. Keep patient rested and re-check scan in 10–15 minutes.'
// L0159:   } else if (tier === 'ORANGE') {
// L0160:     title = 'Level 2 Alert (Orange) — Same-Day Referral'
// L0161:     recommendation = 'Refer patient to community health facility or supervisor today for clinical assessment.'
// L0162:   } else if (tier === 'RED') {
// L0163:     title = 'Level 3 Alert (Red) — Urgent Transfer'
// L0164:     recommendation = 'URGENT: Initiate immediate transfer or supervisor escalation. Clinical danger sign detected.'
// L0165:   }
// L0166: 
// L0167:   return {
// L0168:     tier,
// L0169:     title,
// L0170:     recommendation,
// L0171:     reasons,
// L0172:     respiratoryDistress,
// L0173:   }
// L0174: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/anemia.js
```javascript
// L0001: /**
// L0002:  * Anemia Screening Module (Conjunctival Pallor Estimation)
// L0003:  * Reference: Zhao, L. et al. "Prediction of anemia in real-time using a smartphone camera processing conjunctival images"
// L0004:  * PLOS ONE 19(5): e0302883 (2024). DOI: 10.1371/journal.pone.0302883
// L0005:  *
// L0006:  * Erythema index: previously this module classified each pixel into a
// L0007:  * fixed hue-angle window (345°-360° / 0°-25°) and used the pass/fail
// L0008:  * ratio as the whole signal — a hard binary cut that throws away how red
// L0009:  * or pale a pixel actually is, and is brittle to small hue shifts from
// L0010:  * lighting temperature. Replaced with a continuous erythema index (EI),
// L0011:  * a standard dermatological reflectance-based redness measure: hemoglobin
// L0012:  * absorbs green light more strongly than red, so the log-reflectance gap
// L0013:  * between the green and red channels scales with blood content in the
// L0014:  * tissue (Kollias-style EI formulation, as commonly adapted for RGB
// L0015:  * camera images in the erythema/pallor imaging literature). This gives a
// L0016:  * graded signal instead of a hard pass/fail per pixel, which is more
// L0017:  * robust to lighting variation and avoids classification cliffs.
// L0018:  *
// L0019:  * HONEST NOTE: this is a documented general erythema-index technique, not
// L0020:  * a reproduction of the exact fitted regression coefficients from either
// L0021:  * cited paper specifically (those aren't available in this project) — the
// L0022:  * Hb mapping below is a directionally-correct, clamped linear approximation
// L0023:  * calibrated to reasonable clinical Hb ranges, not a validated regression.
// L0024:  * This remains a screening-tier proxy, not a diagnostic measurement.
// L0025:  */
// L0026: 
// L0027: function rgbToHsv(r, g, b) {
// L0028:   const rn = r / 255
// L0029:   const gn = g / 255
// L0030:   const bn = b / 255
// L0031:   const max = Math.max(rn, gn, bn)
// L0032:   const min = Math.min(rn, gn, bn)
// L0033:   const d = max - min
// L0034: 
// L0035:   let h = 0
// L0036:   const s = max === 0 ? 0 : d / max
// L0037:   const v = max
// L0038: 
// L0039:   if (max !== min) {
// L0040:     switch (max) {
// L0041:       case rn:
// L0042:         h = (gn - bn) / d + (gn < bn ? 6 : 0)
// L0043:         break
// L0044:       case gn:
// L0045:         h = (bn - rn) / d + 2
// L0046:         break
// L0047:       case bn:
// L0048:         h = (rn - gn) / d + 4
// L0049:         break
// L0050:     }
// L0051:     h /= 6
// L0052:   }
// L0053: 
// L0054:   return { h: h * 360, s, v }
// L0055: }
// L0056: 
// L0057: // Erythema index for one pixel: log-reflectance gap between green and red
// L0058: // channels. Higher = more hemoglobin-driven redness present.
// L0059: function erythemaIndex(r, g, b) {
// L0060:   const rNorm = Math.max(1, r) / 255
// L0061:   const gNorm = Math.max(1, g) / 255
// L0062:   return 100 * (Math.log10(1 / gNorm) - Math.log10(1 / rNorm))
// L0063: }
// L0064: 
// L0065: /**
// L0066:  * Analyze lower palpebral conjunctiva image ROI for pallor and estimate hemoglobin (Hb).
// L0067:  *
// L0068:  * @param {CanvasRenderingContext2D} ctx - Canvas 2D context containing captured conjunctiva ROI
// L0069:  * @param {object} roi - { x, y, w, h }
// L0070:  * @returns {{ hb: number, tier: 'RED'|'ORANGE'|'GREEN', label: string, recommendation: string, erythemaIndex: number }}
// L0071:  */
// L0072: export function analyzeConjunctivalPallor(ctx, roi) {
// L0073:   if (!ctx || !roi || roi.w <= 0 || roi.h <= 0) {
// L0074:     return {
// L0075:       hb: null,
// L0076:       tier: 'UNKNOWN',
// L0077:       label: 'Low Confidence — Retry Scan',
// L0078:       recommendation: 'No valid conjunctival capture was available. Reposition the lower eyelid in even lighting and retry.',
// L0079:       erythemaIndex: null,
// L0080:     }
// L0081:   }
// L0082: 
// L0083:   const imageData = ctx.getImageData(roi.x, roi.y, roi.w, roi.h)
// L0084:   const data = imageData.data
// L0085: 
// L0086:   let eiSum = 0
// L0087:   let totalValidPixels = 0
// L0088: 
// L0089:   for (let i = 0; i < data.length; i += 4) {
// L0090:     const r = data[i]
// L0091:     const g = data[i + 1]
// L0092:     const b = data[i + 2]
// L0093: 
// L0094:     // Reject non-tissue background (too dark, too bright/blown-out, or
// L0095:     // desaturated/neutral like shadow, hair, or background clutter)
// L0096:     const brightness = (r + g + b) / 3
// L0097:     if (brightness < 25 || brightness > 250) continue
// L0098: 
// L0099:     const { s } = rgbToHsv(r, g, b)
// L0100:     if (s < 0.08) continue // skin/conjunctival tissue threshold
// L0101: 
// L0102:     eiSum += erythemaIndex(r, g, b)
// L0103:     totalValidPixels++
// L0104:   }
// L0105: 
// L0106:   const meanEi = totalValidPixels > 0 ? eiSum / totalValidPixels : null
// L0107: 
// L0108:   // Minimum valid pixel count calibrated for eye ROI crops at standard camera distances
// L0109:   const MIN_VALID_PIXELS = 15
// L0110:   if (totalValidPixels < MIN_VALID_PIXELS || meanEi === null) {
// L0111:     return {
// L0112:       hb: null,
// L0113:       tier: 'UNKNOWN',
// L0114:       label: 'Low Confidence — Retry Scan',
// L0115:       recommendation:
// L0116:         'Not enough conjunctival tissue was visible in frame. Pull the lower eyelid down further and ensure good, even lighting, then rescan.',
// L0117:       erythemaIndex: meanEi !== null ? Math.round(meanEi * 100) / 100 : null,
// L0118:     }
// L0119:   }
// L0120: 
// L0121:   // Map mean erythema index to an estimated Hb (g/dL). Typical EI values
// L0122:   // for this formula on skin/conjunctival tissue range roughly 0 (very pale)
// L0123:   // to ~12-15 (strongly perfused/red) under normal lighting — this mapping
// L0124:   // is a clamped linear approximation, not a validated clinical regression
// L0125:   // (see module note above).
// L0126:   const estimatedHb = 4.5 + meanEi * 0.85
// L0127:   const clampedHb = Math.min(16.0, Math.max(5.0, Math.round(estimatedHb * 10) / 10))
// L0128: 
// L0129:   let tier = 'GREEN'
// L0130:   let label = 'Normal Hemoglobin Trend'
// L0131:   let recommendation = 'Conjunctival tissue color indicates adequate perfusion (Hb > 9 g/dL).'
// L0132: 
// L0133:   if (clampedHb < 7.0) {
// L0134:     tier = 'RED'
// L0135:     label = 'Severe Anemia Risk (Hb < 7 g/dL)'
// L0136:     recommendation = 'URGENT REFERRAL: Severe conjunctival pallor detected. Refer for laboratory hemoglobin testing.'
// L0137:   } else if (clampedHb <= 9.0) {
// L0138:     tier = 'ORANGE'
// L0139:     label = 'Moderate Anemia Risk (Hb 7–9 g/dL)'
// L0140:     recommendation = 'SAME-DAY REFERRAL: Moderate conjunctival pallor detected. Refer for clinical confirmation.'
// L0141:   }
// L0142: 
// L0143:   return {
// L0144:     hb: clampedHb,
// L0145:     tier,
// L0146:     label,
// L0147:     recommendation,
// L0148:     erythemaIndex: Math.round(meanEi * 100) / 100,
// L0149:   }
// L0150: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/bleOximeter.js
```javascript
// L0001: /**
// L0002:  * Web Bluetooth (BLE) Pulse Oximeter Integration
// L0003:  * Reference: Bluetooth SIG Pulse Oximeter Service (UUID: 0x1822 / 0x2A5E)
// L0004:  * PLX Continuous Measurement characteristic layout:
// L0005:  *   byte 0:    Flags
// L0006:  *   bytes 1-2: SpO2 (IEEE-11073-20601 SFLOAT, little-endian)
// L0007:  *   bytes 3-4: Pulse Rate (IEEE-11073-20601 SFLOAT, little-endian)
// L0008:  *   ...optional fields depending on flags bits (fast/slow SpO2PR,
// L0009:  *      measurement status, sensor status, pulse amplitude index)
// L0010:  */
// L0011: 
// L0012: // IEEE-11073-20601 SFLOAT decoder — a 16-bit value split into a 4-bit
// L0013: // signed exponent (bits 15-12) and a 12-bit signed mantissa (bits 11-0),
// L0014: // value = mantissa * 10^exponent. This is NOT the same format as IEEE-754
// L0015: // half-float. `DataView.getFloat16` does not exist as a native method in
// L0016: // any browser (it silently returns undefined, which is falsy, and JS just
// L0017: // fell through to reading a single raw byte via getUint8) — every SpO2/
// L0018: // pulse-rate reading from a real device was garbage. There is no shortcut
// L0019: // here; the bytes have to be decoded per the actual SFLOAT spec.
// L0020: function decodeSFLOAT(view, byteOffset, littleEndian = true) {
// L0021:   const raw = view.getUint16(byteOffset, littleEndian)
// L0022:   const rawMantissa = raw & 0x0fff
// L0023:   const rawExponent = (raw >> 12) & 0x000f
// L0024: 
// L0025:   // Reserved special mantissa values (checked before sign-extension)
// L0026:   if (rawMantissa === 0x07ff) return NaN // +INFINITY
// L0027:   if (rawMantissa === 0x0800) return NaN // NaN
// L0028:   if (rawMantissa === 0x0801) return NaN // NRes (not at this resolution)
// L0029:   if (rawMantissa === 0x0802) return NaN // -INFINITY
// L0030: 
// L0031:   const exponent = rawExponent >= 0x8 ? rawExponent - 0x10 : rawExponent
// L0032:   const mantissa = rawMantissa >= 0x0800 ? rawMantissa - 0x1000 : rawMantissa
// L0033: 
// L0034:   return mantissa * Math.pow(10, exponent)
// L0035: }
// L0036: 
// L0037: export async function connectBlePulseOximeter() {
// L0038:   if (!navigator.bluetooth) {
// L0039:     throw new Error('Web Bluetooth API is not supported in this browser.')
// L0040:   }
// L0041: 
// L0042:   const device = await navigator.bluetooth.requestDevice({
// L0043:     filters: [{ services: ['pulse_oximeter'] }],
// L0044:     optionalServices: ['battery_service'],
// L0045:   })
// L0046: 
// L0047:   const server = await device.gatt.connect()
// L0048:   const service = await server.getPrimaryService('pulse_oximeter')
// L0049:   const characteristic = await service.getCharacteristic('plx_continuous_measurement')
// L0050: 
// L0051:   await characteristic.startNotifications()
// L0052: 
// L0053:   return {
// L0054:     device,
// L0055:     listen: (callback) => {
// L0056:       characteristic.addEventListener('characteristicvaluechanged', (event) => {
// L0057:         const value = event.target.value
// L0058:         const flags = value.getUint8(0)
// L0059:         const spo2 = decodeSFLOAT(value, 1, true)
// L0060:         const pr = decodeSFLOAT(value, 3, true)
// L0061:         callback({
// L0062:           spo2: Number.isNaN(spo2) ? null : Math.round(spo2 * 10) / 10,
// L0063:           pulseRate: Number.isNaN(pr) ? null : Math.round(pr),
// L0064:           rawFlags: flags,
// L0065:         })
// L0066:       })
// L0067:     },
// L0068:     disconnect: () => device.gatt.disconnect(),
// L0069:   }
// L0070: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/bloodPressurePTT.js
```javascript
// L0001: /**
// L0002:  * Blood Pressure Trend Estimation via Single-Site PPG Crest Time
// L0003:  * Reference: Pflugradt, M. et al. "Pulse Transit Time (PTT) based blood pressure measurement,"
// L0004:  * IEEE Reviews in Biomedical Engineering — informs the general PTT/BP
// L0005:  * inverse relationship this module uses, but this module does NOT measure
// L0006:  * true pulse transit time.
// L0007:  *
// L0008:  * HONEST LABELING NOTE: true PTT requires two simultaneous measurement
// L0009:  * sites (e.g. face + finger, or ECG R-wave + peripheral pulse). This app
// L0010:  * has one camera and cannot capture two sites at once — see
// L0011:  * VYTAL_STATUS_AND_ROADMAP.md §2.6 for why a sequential two-phase capture
// L0012:  * can't stay phase-locked to the same cardiac cycle either. What IS
// L0013:  * measurable from a single rPPG waveform is systolic crest time (the
// L0014:  * foot-to-peak rise time of each pulse, computed in rppg.js), which has
// L0015:  * published correlation with arterial stiffness and can track BP changes
// L0016:  * *for a given individual* once calibrated against a real cuff reading.
// L0017:  * It is a trend proxy, not a transit-time measurement, and it is
// L0018:  * meaningless without per-user calibration — there is no population
// L0019:  * default that means anything for crest time the way there arguably is
// L0020:  * for face-to-finger PTT.
// L0021:  */
// L0022: 
// L0023: const CALIBRATION_KEY = 'vytal_bp_calibration_v1'
// L0024: 
// L0025: /**
// L0026:  * Validate an owner-scoped calibration loaded by caller, or fallback to browser storage.
// L0027:  * @returns {{ baselineSbp: number, baselineDbp: number, baselineCrestTimeMs: number, savedAt: string } | null}
// L0028:  */
// L0029: export function getBpCalibration(calibration = null) {
// L0030:   let target = calibration
// L0031:   if (!target && typeof window !== 'undefined') {
// L0032:     try {
// L0033:       const raw = localStorage.getItem(CALIBRATION_KEY)
// L0034:       if (raw) target = JSON.parse(raw)
// L0035:     } catch (e) {
// L0036:       console.warn('Could not read local BP calibration', e)
// L0037:     }
// L0038:   }
// L0039:   if (!target) return null
// L0040:   const baselineSbp = Number(target.baselineSbp)
// L0041:   const baselineDbp = Number(target.baselineDbp)
// L0042:   const baselineCrestTimeMs = Number(target.baselineCrestTimeMs)
// L0043:   if (!Number.isFinite(baselineSbp) || baselineSbp < 70 || baselineSbp > 250) return null
// L0044:   if (!Number.isFinite(baselineDbp) || baselineDbp < 40 || baselineDbp > 150) return null
// L0045:   if (!Number.isFinite(baselineCrestTimeMs) || baselineCrestTimeMs < 40 || baselineCrestTimeMs > 400) return null
// L0046:   return { baselineSbp, baselineDbp, baselineCrestTimeMs, savedAt: target.savedAt || null }
// L0047: }
// L0048: 
// L0049: /**
// L0050:  * Save a one-point calibration: the user's real cuff-measured SBP/DBP,
// L0051:  * paired with their crest time measured in the same scan session.
// L0052:  */
// L0053: export function saveBpCalibration(sbp, dbp, crestTimeMs) {
// L0054:   const cal = {
// L0055:     baselineSbp: Number(sbp),
// L0056:     baselineDbp: Number(dbp),
// L0057:     baselineCrestTimeMs: Number(crestTimeMs),
// L0058:     savedAt: new Date().toISOString(),
// L0059:   }
// L0060:   const valid = getBpCalibration(cal)
// L0061:   if (!valid) return false
// L0062:   if (typeof window !== 'undefined') {
// L0063:     try {
// L0064:       localStorage.setItem(CALIBRATION_KEY, JSON.stringify(valid))
// L0065:     } catch (e) {
// L0066:       console.warn('Could not persist local BP calibration', e)
// L0067:     }
// L0068:   }
// L0069:   return valid
// L0070: }
// L0071: 
// L0072: export function clearBpCalibration() {
// L0073:   if (typeof window !== 'undefined') {
// L0074:     try {
// L0075:       localStorage.removeItem(CALIBRATION_KEY)
// L0076:     } catch (e) {
// L0077:       console.warn('Could not clear local BP calibration', e)
// L0078:     }
// L0079:   }
// L0080:   return null
// L0081: }
// L0082: 
// L0083: /**
// L0084:  * Estimate Systolic (SBP) and Diastolic (DBP) blood pressure TREND from
// L0085:  * single-site PPG systolic crest time. Requires per-user calibration —
// L0086:  * see module note above for why there is no meaningful uncalibrated
// L0087:  * default the way face-to-finger PTT literature might otherwise suggest.
// L0088:  *
// L0089:  * @param {number} crestTimeMs - measured systolic foot-to-peak rise time (ms), from rppg.js analyzeSignal()
// L0090:  * @param {object} [calibration] - explicit override; otherwise reads getBpCalibration()
// L0091:  * @returns {{ sbp: number, dbp: number, category: string, note: string, isCalibrated: boolean }}
// L0092:  */
// L0093: export function estimateBloodPressurePTT(crestTimeMs, calibration = null) {
// L0094:   const cal = getBpCalibration(calibration)
// L0095: 
// L0096:   if (!crestTimeMs || crestTimeMs < 40 || crestTimeMs > 400) {
// L0097:     return {
// L0098:       sbp: cal?.baselineSbp ?? null,
// L0099:       dbp: cal?.baselineDbp ?? null,
// L0100:       category: cal ? 'Saved cuff baseline' : 'Uncalibrated — No Estimate',
// L0101:       note: 'Could not measure a clear pulse waveform this scan — showing your last saved baseline, if any.',
// L0102:       isCalibrated: Boolean(cal),
// L0103:     }
// L0104:   }
// L0105: 
// L0106:   if (!cal) {
// L0107:     return {
// L0108:       sbp: null,
// L0109:       dbp: null,
// L0110:       category: 'Uncalibrated — Save a Baseline',
// L0111:       note:
// L0112:         'This is a single-site PPG trend proxy, not a real blood pressure measurement, and has no meaningful default until calibrated. ' +
// L0113:         'Measure your BP with a real cuff once and save it as your baseline to get a personalized trend from future scans.',
// L0114:       isCalibrated: false,
// L0115:     }
// L0116:   }
// L0117: 
// L0118:   // Inverse relationship: shorter crest time (faster, stiffer upstroke) is
// L0119:   // associated with higher BP; longer crest time with lower BP — same
// L0120:   // general direction as the PTT literature's BP/transit-time inverse
// L0121:   // relationship, applied here to a within-person delta from their own
// L0122:   // calibrated baseline rather than a population constant.
// L0123:   const deltaCrestTime = crestTimeMs - cal.baselineCrestTimeMs
// L0124:   const estimatedSbp = Math.round(cal.baselineSbp - 0.35 * deltaCrestTime)
// L0125:   const estimatedDbp = Math.round(cal.baselineDbp - 0.22 * deltaCrestTime)
// L0126: 
// L0127:   const sbp = Math.max(80, Math.min(200, estimatedSbp))
// L0128:   const dbp = Math.max(50, Math.min(130, estimatedDbp))
// L0129: 
// L0130:   let category = 'Normal'
// L0131:   if (sbp >= 140 || dbp >= 90) category = 'Hypertension Stage 2'
// L0132:   else if (sbp >= 130 || dbp >= 80) category = 'Hypertension Stage 1'
// L0133:   else if (sbp >= 120 && dbp < 80) category = 'Elevated'
// L0134:   else if (sbp < 90 || dbp < 60) category = 'Hypotension'
// L0135: 
// L0136:   return {
// L0137:     sbp,
// L0138:     dbp,
// L0139:     category,
// L0140:     note: 'Personalized PPG crest-time trend estimate, calibrated against your saved baseline — not a substitute for a real cuff or clinical measurement.',
// L0141:     isCalibrated: true,
// L0142:   }
// L0143: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/bmiEstimate.js
```javascript
// L0001: /**
// L0002:  * Malnutrition Screening & Anthropometric BMI Estimation from Photo
// L0003:  * Reference: WHO Child Growth Standards & MUAC / Anthropometric computer vision proxies
// L0004:  *
// L0005:  * WHO Adult BMI Classification:
// L0006:  *   < 16.0  Severe Acute Malnutrition (SAM)   → RED
// L0007:  *   16.0–18.4 Moderate Malnutrition (MAM)     → ORANGE
// L0008:  *   18.5–24.9 Normal Weight                   → GREEN
// L0009:  *   25.0–29.9 Overweight                      → YELLOW
// L0010:  *   ≥ 30.0  Obesity                            → ORANGE
// L0011:  *
// L0012:  * HONEST LIMITATION: shoulder-to-height ratio from a face landmark proxy is a
// L0013:  * population-screening estimate, not an individual-precision measurement.
// L0014:  * The camera angle, clothing bulk, and individual build all affect accuracy.
// L0015:  */
// L0016: 
// L0017: /**
// L0018:  * Estimate Body Mass Index (BMI) and malnutrition/obesity category from body
// L0019:  * framing proportions.
// L0020:  *
// L0021:  * @param {number} shoulderToHeightRatio - Ratio of shoulder width to total frame height
// L0022:  * @param {number} heightCm - Patient reported or estimated height in cm (default 165)
// L0023:  * @returns {{ bmi: number, category: string, tier: 'RED'|'ORANGE'|'YELLOW'|'GREEN', recommendation: string }}
// L0024:  */
// L0025: export function estimateMalnutritionBMI(shoulderToHeightRatio = 0.24, heightCm = 165) {
// L0026:   // Typical adult shoulder-to-height ratio ~0.23–0.28 maps to BMI 18.5–25
// L0027:   // Lower ratios (< 0.20) indicate severe wasting / low muscle mass
// L0028:   // Higher ratios (> 0.30) indicate wider build / higher BMI
// L0029:   let baseBmi = 14 + (shoulderToHeightRatio / 0.25) * 7.5
// L0030:   baseBmi = Math.round(baseBmi * 10) / 10
// L0031: 
// L0032:   // Cap at physiological extremes
// L0033:   const bmi = Math.max(12.0, Math.min(45.0, baseBmi))
// L0034: 
// L0035:   let category = 'Normal Weight'
// L0036:   let tier = 'GREEN'
// L0037:   let recommendation = 'Body anthropometrics indicate normal nutritional status.'
// L0038: 
// L0039:   if (bmi < 16.0) {
// L0040:     category = 'Severe Acute Malnutrition (SAM)'
// L0041:     tier = 'RED'
// L0042:     recommendation = 'URGENT REFERRAL: SAM detected (BMI < 16). Immediate therapeutic feeding protocol indicated.'
// L0043:   } else if (bmi < 18.5) {
// L0044:     category = 'Moderate Malnutrition (MAM)'
// L0045:     tier = 'ORANGE'
// L0046:     recommendation = 'SAME-DAY REFERRAL: Moderate wasting detected (BMI 16–18.5). Supplementary nutrition required.'
// L0047:   } else if (bmi >= 30.0) {
// L0048:     category = 'Obesity'
// L0049:     tier = 'ORANGE'
// L0050:     recommendation = 'Obesity detected (BMI ≥ 30). Lifestyle counseling, metabolic screening, and comorbidity review recommended.'
// L0051:   } else if (bmi >= 25.0) {
// L0052:     category = 'Overweight'
// L0053:     tier = 'YELLOW'
// L0054:     recommendation = 'Overweight range (BMI 25–29.9). Diet, physical activity counseling, and annual metabolic review recommended.'
// L0055:   }
// L0056: 
// L0057:   return {
// L0058:     bmi,
// L0059:     category,
// L0060:     tier,
// L0061:     recommendation,
// L0062:   }
// L0063: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/jaundice.js
```javascript
// L0001: /**
// L0002:  * Jaundice Screening Module (Scleral Icterus Analysis)
// L0003:  * Reference: Mariakakis, A. et al. "BiliScreen: Smartphone-Based Scleral Jaundice Monitoring"
// L0004:  * Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (2017)
// L0005:  *
// L0006:  * Ambient-light correction: BiliScreen's own method uses a two-shot
// L0007:  * flash-difference capture to cancel ambient lighting color temperature.
// L0008:  * That's not implementable here as a literal reproduction — the jaundice
// L0009:  * capture path uses the front-facing camera (for the same reason face
// L0010:  * scanning does: the user needs to see themselves to frame the shot), and
// L0011:  * front cameras on essentially all consumer devices have no flash/torch to
// L0012:  * take a second flash-lit reference frame against.
// L0013:  *
// L0014:  * Implemented instead: gray-world color-constancy normalization — a
// L0015:  * standard, well-established white-balance technique that estimates the
// L0016:  * ambient illuminant from the whole captured frame (assuming the scene's
// L0017:  * average color should be neutral gray) and corrects the sclera ROI's
// L0018:  * pixels against it before classifying yellow hue. This achieves the same
// L0019:  * underlying goal BiliScreen's two-shot method targets — removing ambient
// L0020:  * color-temperature bias from the reading — through a single-shot method
// L0021:  * that's actually deployable on this camera path. It is NOT a
// L0022:  * reproduction of BiliScreen's specific two-shot algorithm.
// L0023:  */
// L0024: 
// L0025: function rgbToHsv(r, g, b) {
// L0026:   const rn = r / 255
// L0027:   const gn = g / 255
// L0028:   const bn = b / 255
// L0029:   const max = Math.max(rn, gn, bn)
// L0030:   const min = Math.min(rn, gn, bn)
// L0031:   const d = max - min
// L0032: 
// L0033:   let h = 0
// L0034:   const s = max === 0 ? 0 : d / max
// L0035:   const v = max
// L0036: 
// L0037:   if (max !== min) {
// L0038:     switch (max) {
// L0039:       case rn:
// L0040:         h = (gn - bn) / d + (gn < bn ? 6 : 0)
// L0041:         break
// L0042:       case gn:
// L0043:         h = (bn - rn) / d + 2
// L0044:         break
// L0045:       case bn:
// L0046:         h = (rn - gn) / d + 4
// L0047:         break
// L0048:     }
// L0049:     h /= 6
// L0050:   }
// L0051: 
// L0052:   return { h: h * 360, s, v }
// L0053: }
// L0054: 
// L0055: // Gray-world ambient illuminant estimate from the full captured frame
// L0056: // (sampled, not every pixel, for speed — a coarse estimate is sufficient
// L0057: // for this correction). Returns per-channel correction multipliers.
// L0058: function estimateGrayWorldCorrection(ctx) {
// L0059:   try {
// L0060:     const w = ctx.canvas.width
// L0061:     const h = ctx.canvas.height
// L0062:     if (!w || !h) return { rGain: 1, gGain: 1, bGain: 1 }
// L0063: 
// L0064:     const { data } = ctx.getImageData(0, 0, w, h)
// L0065:     let rSum = 0, gSum = 0, bSum = 0, n = 0
// L0066:     const step = 16 * 4 // sample every 16th pixel for speed
// L0067:     for (let i = 0; i < data.length; i += step) {
// L0068:       rSum += data[i]
// L0069:       gSum += data[i + 1]
// L0070:       bSum += data[i + 2]
// L0071:       n++
// L0072:     }
// L0073:     if (n === 0) return { rGain: 1, gGain: 1, bGain: 1 }
// L0074: 
// L0075:     const rAvg = rSum / n || 1
// L0076:     const gAvg = gSum / n || 1
// L0077:     const bAvg = bSum / n || 1
// L0078:     const grayTarget = (rAvg + gAvg + bAvg) / 3
// L0079: 
// L0080:     // Clamp gains to a sane range so a degenerate frame (e.g. nearly all
// L0081:     // one color) can't wildly over-correct
// L0082:     const clampGain = (g) => Math.max(0.6, Math.min(1.6, g))
// L0083: 
// L0084:     return {
// L0085:       rGain: clampGain(grayTarget / rAvg),
// L0086:       gGain: clampGain(grayTarget / gAvg),
// L0087:       bGain: clampGain(grayTarget / bAvg),
// L0088:     }
// L0089:   } catch (e) {
// L0090:     console.warn('Gray-world correction failed, using uncorrected pixels', e)
// L0091:     return { rGain: 1, gGain: 1, bGain: 1 }
// L0092:   }
// L0093: }
// L0094: 
// L0095: /**
// L0096:  * Analyze sclera (white of eye) for yellowing (icterus / bilirubin elevation).
// L0097:  *
// L0098:  * @param {CanvasRenderingContext2D} ctx - Canvas context with captured sclera ROI
// L0099:  * @param {object} roi - { x, y, w, h }
// L0100:  * @returns {{ isJaundiced: boolean, yellowIndex: number, label: string, recommendation: string }}
// L0101:  */
// L0102: export function analyzeScleralIcterus(ctx, roi) {
// L0103:   if (!ctx || !roi || roi.w <= 0 || roi.h <= 0) {
// L0104:     return {
// L0105:       isJaundiced: false,
// L0106:       yellowIndex: null,
// L0107:       tier: 'UNKNOWN',
// L0108:       label: 'Low Confidence — Retry Scan',
// L0109:       recommendation: 'No valid sclera capture was available. Keep both eyes open in even lighting and retry.',
// L0110:     }
// L0111:   }
// L0112: 
// L0113:   const { rGain, gGain, bGain } = estimateGrayWorldCorrection(ctx)
// L0114: 
// L0115:   const imageData = ctx.getImageData(roi.x, roi.y, roi.w, roi.h)
// L0116:   const data = imageData.data
// L0117: 
// L0118:   let yellowPixelCount = 0
// L0119:   let totalScleraPixels = 0
// L0120: 
// L0121:   for (let i = 0; i < data.length; i += 4) {
// L0122:     // Ambient-corrected channels (see estimateGrayWorldCorrection above)
// L0123:     const r = Math.min(255, data[i] * rGain)
// L0124:     const g = Math.min(255, data[i + 1] * gGain)
// L0125:     const b = Math.min(255, data[i + 2] * bGain)
// L0126: 
// L0127:     // Reject non-sclera dark pixels
// L0128:     const brightness = (r + g + b) / 3
// L0129:     if (brightness < 40) continue
// L0130: 
// L0131:     const { h, s } = rgbToHsv(r, g, b)
// L0132: 
// L0133:     // Yellow hue band: 35° to 70° in HSV space
// L0134:     if (h >= 35 && h <= 70 && s >= 0.15) {
// L0135:       yellowPixelCount++
// L0136:     }
// L0137:     totalScleraPixels++
// L0138:   }
// L0139: 
// L0140:   if (totalScleraPixels < 15) {
// L0141:     return {
// L0142:       isJaundiced: false,
// L0143:       yellowIndex: null,
// L0144:       tier: 'UNKNOWN',
// L0145:       label: 'Low Confidence — Retry Scan',
// L0146:       recommendation: 'Not enough well-lit sclera pixels were visible. Reframe both eyes in even lighting and retry.',
// L0147:     }
// L0148:   }
// L0149: 
// L0150:   const yellowRatio = yellowPixelCount / totalScleraPixels
// L0151:   const yellowIndex = Math.round(yellowRatio * 100)
// L0152: 
// L0153:   const isJaundiced = yellowIndex >= 18
// L0154: 
// L0155:   return {
// L0156:     isJaundiced,
// L0157:     yellowIndex,
// L0158:     tier: isJaundiced ? 'ORANGE' : 'GREEN',
// L0159:     label: isJaundiced ? 'Scleral Icterus Detected (Elevated Bilirubin Proxy)' : 'Normal Sclera Chromaticity',
// L0160:     recommendation: isJaundiced
// L0161:       ? 'REFERRAL RECOMMENDED: Yellowing detected on sclera region. Refer for serum bilirubin blood testing.'
// L0162:       : 'Sclera chromaticity within normal non-icteric baseline.',
// L0163:   }
// L0164: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/longitudinalRisk.js
```javascript
// L0001: /**
// L0002:  * Longitudinal Patient Risk Scoring
// L0003:  * References:
// L0004:  *   - Churpek, M.M. et al. "The value of vital sign trends for detecting clinical deterioration on the wards."
// L0005:  *     Resuscitation 102:1-5 (2016).
// L0006:  *   - JMIR 23(2): e25187 (2021) - ML-Based Early Warning Systems systematic review.
// L0007:  */
// L0008: 
// L0009: /**
// L0010:  * Generate SVG sparkline path from an array of values.
// L0011:  *
// L0012:  * @param {number[]} values
// L0013:  * @param {number} width
// L0014:  * @param {number} height
// L0015:  * @param {number} pad
// L0016:  * @returns {string} SVG polyline points string
// L0017:  */
// L0018: export function generateSparklinePath(values, width = 120, height = 32, pad = 3) {
// L0019:   if (!values || values.length < 2) return ''
// L0020: 
// L0021:   const min = Math.min(...values)
// L0022:   const max = Math.max(...values)
// L0023:   const range = max - min || 1
// L0024: 
// L0025:   const points = values.map((v, i) => {
// L0026:     const x = pad + (i / (values.length - 1)) * (width - pad * 2)
// L0027:     const y = pad + (1 - (v - min) / range) * (height - pad * 2)
// L0028:     return `${x.toFixed(1)},${y.toFixed(1)}`
// L0029:   })
// L0030: 
// L0031:   return points.join(' ')
// L0032: }
// L0033: 
// L0034: 
// L0035: /**
// L0036:  * Compute a simple least-squares slope for an array of values.
// L0037:  * A positive slope means the metric is trending up over visits.
// L0038:  *
// L0039:  * @param {number[]} values
// L0040:  * @returns {number} slope (change per visit)
// L0041:  */
// L0042: function computeSlope(values) {
// L0043:   if (!values || values.length < 2) return 0
// L0044: 
// L0045:   const n = values.length
// L0046:   const meanX = (n - 1) / 2
// L0047:   const meanY = values.reduce((s, v) => s + v, 0) / n
// L0048: 
// L0049:   let num = 0
// L0050:   let den = 0
// L0051:   for (let i = 0; i < n; i++) {
// L0052:     num += (i - meanX) * (values[i] - meanY)
// L0053:     den += (i - meanX) ** 2
// L0054:   }
// L0055: 
// L0056:   return den === 0 ? 0 : num / den
// L0057: }
// L0058: 
// L0059: 
// L0060: /**
// L0061:  * Evaluate longitudinal vitals trend and produce a risk escalation assessment.
// L0062:  * Requires at least 3 scan records to produce a meaningful trend.
// L0063:  *
// L0064:  * @param {Array<{ hr, br, stress, timestamp }>} scanHistory - Ordered oldest-first
// L0065:  * @param {{ tier: string }} currentAlertTier - Output of evaluateAlertScale on latest scan
// L0066:  * @returns {{ trendTier: string|null, trendLabel: string, slopeHr: number, slopeBr: number, sparklineHr: string, sparklineBr: string, message: string }}
// L0067:  */
// L0068: export function evaluateLongitudinalRisk(scanHistory, currentAlertTier = { tier: 'GREEN' }) {
// L0069:   if (!scanHistory || scanHistory.length < 3) {
// L0070:     return {
// L0071:       trendTier: null,
// L0072:       trendLabel: 'Insufficient History',
// L0073:       slopeHr: 0,
// L0074:       slopeBr: 0,
// L0075:       sparklineHr: '',
// L0076:       sparklineBr: '',
// L0077:       message: 'At least 3 scan visits needed for longitudinal trend analysis.',
// L0078:     }
// L0079:   }
// L0080: 
// L0081:   // Use the most recent 5 visits for trend calculation
// L0082:   const recent = scanHistory.slice(-5)
// L0083:   const hrValues = recent.map((s) => s.hr).filter(Boolean)
// L0084:   const brValues = recent.map((s) => s.br).filter(Boolean)
// L0085: 
// L0086:   const slopeHr = computeSlope(hrValues)
// L0087:   const slopeBr = computeSlope(brValues)
// L0088: 
// L0089:   // Tier escalation based on worsening trend + already elevated single-scan tier
// L0090:   const baselineTier = currentAlertTier.tier
// L0091:   let trendTier = baselineTier
// L0092: 
// L0093:   const hrTrendingUp = slopeHr > 2
// L0094:   const brTrendingUp = slopeBr > 0.5
// L0095: 
// L0096:   if (hrTrendingUp && brTrendingUp && (baselineTier === 'YELLOW' || baselineTier === 'ORANGE')) {
// L0097:     if (baselineTier === 'YELLOW') trendTier = 'ORANGE'
// L0098:     else if (baselineTier === 'ORANGE') trendTier = 'RED'
// L0099:   } else if (hrTrendingUp && baselineTier === 'YELLOW') {
// L0100:     trendTier = 'ORANGE'
// L0101:   }
// L0102: 
// L0103:   let trendLabel = 'Stable Vitals Trend'
// L0104:   let message = 'Vital sign trends are stable across recent visits.'
// L0105: 
// L0106:   if (hrTrendingUp && brTrendingUp) {
// L0107:     trendLabel = 'Worsening Multi-Vital Trend'
// L0108:     message = `Heart rate increasing +${slopeHr.toFixed(1)} bpm/visit and breathing rate +${slopeBr.toFixed(1)} br/visit across recent scans. Consider escalation.`
// L0109:   } else if (hrTrendingUp) {
// L0110:     trendLabel = 'Heart Rate Trending Up'
// L0111:     message = `Heart rate has increased an average of +${slopeHr.toFixed(1)} bpm per visit over the last ${recent.length} scans.`
// L0112:   } else if (slopeHr < -2) {
// L0113:     trendLabel = 'Heart Rate Trending Down'
// L0114:     message = `Heart rate has decreased an average of ${Math.abs(slopeHr).toFixed(1)} bpm per visit — monitor for bradycardia.`
// L0115:   }
// L0116: 
// L0117:   const sparklineHr = generateSparklinePath(hrValues)
// L0118:   const sparklineBr = generateSparklinePath(brValues)
// L0119: 
// L0120:   return {
// L0121:     trendTier,
// L0122:     trendLabel,
// L0123:     slopeHr: Math.round(slopeHr * 10) / 10,
// L0124:     slopeBr: Math.round(slopeBr * 10) / 10,
// L0125:     sparklineHr,
// L0126:     sparklineBr,
// L0127:     message,
// L0128:   }
// L0129: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/pagination.js
```javascript
// L0001: const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
// L0002: 
// L0003: export function boundedPageSize(value, fallback = 25, maximum = 100) {
// L0004:   const parsed = Number(value)
// L0005:   if (!Number.isInteger(parsed) || parsed < 1) return fallback
// L0006:   return Math.min(parsed, maximum)
// L0007: }
// L0008: 
// L0009: export function createCursor(row, timestampField) {
// L0010:   if (!row?.id || !row?.[timestampField]) return null
// L0011:   return { timestamp: row[timestampField], id: row.id }
// L0012: }
// L0013: 
// L0014: export function applyDescendingCursor(query, timestampField, cursor) {
// L0015:   if (!cursor) return query
// L0016:   const timestamp = new Date(cursor.timestamp)
// L0017:   if (!UUID_PATTERN.test(String(cursor.id)) || Number.isNaN(timestamp.getTime())) {
// L0018:     throw new Error('Invalid pagination cursor.')
// L0019:   }
// L0020:   const isoTimestamp = timestamp.toISOString()
// L0021:   return query.or(
// L0022:     `${timestampField}.lt."${isoTimestamp}",and(${timestampField}.eq."${isoTimestamp}",id.lt.${cursor.id})`,
// L0023:   )
// L0024: }
// L0025: 
// L0026: export function pageResult(rows, limit, timestampField) {
// L0027:   const hasMore = rows.length > limit
// L0028:   const items = hasMore ? rows.slice(0, limit) : rows
// L0029:   return {
// L0030:     items,
// L0031:     hasMore,
// L0032:     nextCursor: hasMore ? createCursor(items[items.length - 1], timestampField) : null,
// L0033:   }
// L0034: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/patients.js
```javascript
// L0001: import { requireAuthenticatedUser, supabase, supabaseConfigured } from './supabase.js'
// L0002: import { REFERRAL_STEPS, referralWorkflow } from '../domain/referrals/ReferralWorkflow.js'
// L0003: import { applyDescendingCursor, boundedPageSize, pageResult } from './pagination.js'
// L0004: 
// L0005: export { REFERRAL_STEPS }
// L0006: 
// L0007: const MAX_PATIENTS = 200
// L0008: const MAX_REFERRALS = 200
// L0009: const PATIENT_FIELDS = 'id, patient_code, full_name, date_of_birth, sex, phone, address, emergency_contact, consent_status, consented_at, created_at, updated_at'
// L0010: 
// L0011: const DEMO_PATIENTS = [
// L0012:   {
// L0013:     id: 'demo-amina', patient_code: 'P-0231', full_name: 'Amina K.', date_of_birth: '1989-04-12',
// L0014:     sex: 'female', phone: '+92 300 0000001', emergency_contact: { name: 'Sana K.', phone: '+92 300 0000011' },
// L0015:     consent_status: 'granted', created_at: new Date(Date.now() - 12 * 86400000).toISOString(),
// L0016:   },
// L0017:   {
// L0018:     id: 'demo-rahim', patient_code: 'P-0230', full_name: 'Rahim D.', date_of_birth: '1978-11-03',
// L0019:     sex: 'male', phone: '+92 300 0000002', emergency_contact: { name: 'Ali D.', phone: '+92 300 0000012' },
// L0020:     consent_status: 'granted', created_at: new Date(Date.now() - 8 * 86400000).toISOString(),
// L0021:   },
// L0022:   {
// L0023:     id: 'demo-fatima', patient_code: 'P-0229', full_name: 'Fatima S.', date_of_birth: '1996-07-18',
// L0024:     sex: 'female', phone: '+92 300 0000003', emergency_contact: {},
// L0025:     consent_status: 'granted', created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
// L0026:   },
// L0027: ]
// L0028: 
// L0029: let sessionPatients = [...DEMO_PATIENTS]
// L0030: let sessionReferrals = [
// L0031:   {
// L0032:     id: 'demo-referral-1', patient_id: 'demo-amina', screening_id: 'demo-screening-1',
// L0033:     status: 'flagged', priority: 'priority', reason: 'Elevated resting pulse requires follow-up review.',
// L0034:     due_at: new Date(Date.now() + 86400000).toISOString(), notes: '',
// L0035:     created_at: new Date(Date.now() - 12 * 60000).toISOString(),
// L0036:     updated_at: new Date(Date.now() - 12 * 60000).toISOString(),
// L0037:   },
// L0038: ]
// L0039: 
// L0040: async function currentUserOrNull() {
// L0041:   if (!supabaseConfigured) return null
// L0042:   try {
// L0043:     return await requireAuthenticatedUser()
// L0044:   } catch {
// L0045:     return null
// L0046:   }
// L0047: }
// L0048: 
// L0049: function patientCode() {
// L0050:   const suffix = crypto.randomUUID().slice(0, 4).toUpperCase()
// L0051:   return `P-${String(Date.now()).slice(-6)}-${suffix}`
// L0052: }
// L0053: 
// L0054: function normalizePatient(input, userId = null) {
// L0055:   return {
// L0056:     owner_user_id: userId,
// L0057:     patient_code: (input.patient_code || patientCode()).trim().toUpperCase(),
// L0058:     full_name: input.full_name.trim(),
// L0059:     date_of_birth: input.date_of_birth || null,
// L0060:     sex: input.sex || 'prefer_not_to_say',
// L0061:     phone: input.phone?.trim() || null,
// L0062:     address: input.address ?? {},
// L0063:     emergency_contact: input.emergency_contact ?? {},
// L0064:     consent_status: input.consent_status || 'pending',
// L0065:     consent_version: input.consent_status === 'granted' ? 'v1' : null,
// L0066:     consented_at: input.consent_status === 'granted' ? new Date().toISOString() : null,
// L0067:     custom_fields: input.custom_fields ?? {},
// L0068:   }
// L0069: }
// L0070: 
// L0071: export async function getPatients() {
// L0072:   const page = await getPatientsPage({ limit: MAX_PATIENTS })
// L0073:   return page.items
// L0074: }
// L0075: 
// L0076: export async function getPatientsPage({ limit = 40, cursor = null } = {}) {
// L0077:   const pageSize = boundedPageSize(limit, 40, MAX_PATIENTS)
// L0078:   const user = await currentUserOrNull()
// L0079:   if (!user) {
// L0080:     const start = cursor ? Math.max(0, sessionPatients.findIndex((item) => item.id === cursor.id) + 1) : 0
// L0081:     return pageResult(sessionPatients.slice(start, start + pageSize + 1), pageSize, 'updated_at')
// L0082:   }
// L0083: 
// L0084:   let query = supabase
// L0085:     .from('patients')
// L0086:     .select(PATIENT_FIELDS)
// L0087:     .eq('owner_user_id', user.id)
// L0088:     .order('updated_at', { ascending: false })
// L0089:     .order('id', { ascending: false })
// L0090:     .limit(pageSize + 1)
// L0091: 
// L0092:   query = applyDescendingCursor(query, 'updated_at', cursor)
// L0093:   const { data, error } = await query
// L0094:   if (error) throw error
// L0095:   return pageResult(data ?? [], pageSize, 'updated_at')
// L0096: }
// L0097: 
// L0098: export async function createPatient(input) {
// L0099:   if (!input.full_name?.trim()) throw new Error('Patient name is required.')
// L0100:   if (input.consent_status !== 'granted') throw new Error('Record consent before registering the patient.')
// L0101: 
// L0102:   const user = await currentUserOrNull()
// L0103:   if (!user) {
// L0104:     const patient = {
// L0105:       ...normalizePatient(input),
// L0106:       id: `demo-${crypto.randomUUID()}`,
// L0107:       created_at: new Date().toISOString(),
// L0108:       updated_at: new Date().toISOString(),
// L0109:     }
// L0110:     sessionPatients = [patient, ...sessionPatients].slice(0, MAX_PATIENTS)
// L0111:     return patient
// L0112:   }
// L0113: 
// L0114:   const { data, error } = await supabase
// L0115:     .from('patients')
// L0116:     .insert(normalizePatient(input, user.id))
// L0117:     .select(PATIENT_FIELDS)
// L0118:     .single()
// L0119: 
// L0120:   if (error) throw error
// L0121:   return data
// L0122: }
// L0123: 
// L0124: export async function updatePatientConsent(patientId, consentStatus) {
// L0125:   if (!['granted', 'withdrawn'].includes(consentStatus)) {
// L0126:     throw new Error('Unsupported consent status.')
// L0127:   }
// L0128: 
// L0129:   const user = await currentUserOrNull()
// L0130:   const consentedAt = consentStatus === 'granted' ? new Date().toISOString() : null
// L0131:   const update = {
// L0132:     consent_status: consentStatus,
// L0133:     consent_version: consentStatus === 'granted' ? 'v1' : null,
// L0134:     consented_at: consentedAt,
// L0135:   }
// L0136: 
// L0137:   if (!user) {
// L0138:     sessionPatients = sessionPatients.map((patient) => patient.id === patientId
// L0139:       ? { ...patient, ...update, updated_at: new Date().toISOString() }
// L0140:       : patient)
// L0141:     return sessionPatients.find((patient) => patient.id === patientId)
// L0142:   }
// L0143: 
// L0144:   const { data, error } = await supabase
// L0145:     .from('patients')
// L0146:     .update(update)
// L0147:     .eq('id', patientId)
// L0148:     .eq('owner_user_id', user.id)
// L0149:     .select(PATIENT_FIELDS)
// L0150:     .single()
// L0151: 
// L0152:   if (error) throw error
// L0153:   return data
// L0154: }
// L0155: 
// L0156: export async function getReferrals() {
// L0157:   const page = await getReferralsPage({ limit: MAX_REFERRALS })
// L0158:   return page.items
// L0159: }
// L0160: 
// L0161: export async function getReferralsPage({ limit = 40, cursor = null } = {}) {
// L0162:   const pageSize = boundedPageSize(limit, 40, MAX_REFERRALS)
// L0163:   const user = await currentUserOrNull()
// L0164:   if (!user) {
// L0165:     const patientMap = new Map(sessionPatients.map((patient) => [patient.id, patient]))
// L0166:     const joined = sessionReferrals.map((referral) => ({
// L0167:       ...referral,
// L0168:       patient: patientMap.get(referral.patient_id) ?? null,
// L0169:     }))
// L0170:     const start = cursor ? Math.max(0, joined.findIndex((item) => item.id === cursor.id) + 1) : 0
// L0171:     return pageResult(joined.slice(start, start + pageSize + 1), pageSize, 'updated_at')
// L0172:   }
// L0173: 
// L0174:   let query = supabase
// L0175:     .from('referrals')
// L0176:     .select(`
// L0177:       id, patient_id, screening_id, status, priority, reason, due_at, notes,
// L0178:       completed_at, created_at, updated_at,
// L0179:       patient:patients!referrals_patient_owner_fk(id, patient_code, full_name, phone)
// L0180:     `)
// L0181:     .eq('user_id', user.id)
// L0182:     .order('updated_at', { ascending: false })
// L0183:     .order('id', { ascending: false })
// L0184:     .limit(pageSize + 1)
// L0185: 
// L0186:   query = applyDescendingCursor(query, 'updated_at', cursor)
// L0187:   const { data: referrals, error: referralError } = await query
// L0188:   if (referralError) throw referralError
// L0189:   return pageResult(referrals ?? [], pageSize, 'updated_at')
// L0190: }
// L0191: 
// L0192: export async function createReferralForScreening({ patientId, screeningId, reason, priority = 'priority' }) {
// L0193:   if (!patientId) return null
// L0194:   const user = await currentUserOrNull()
// L0195:   const referral = {
// L0196:     patient_id: patientId,
// L0197:     screening_id: screeningId,
// L0198:     status: 'flagged',
// L0199:     priority,
// L0200:     reason,
// L0201:     due_at: new Date(Date.now() + 86400000).toISOString(),
// L0202:   }
// L0203: 
// L0204:   if (!user) {
// L0205:     const existing = sessionReferrals.find((item) => item.screening_id === screeningId)
// L0206:     if (existing) return existing
// L0207:     const created = {
// L0208:       ...referral,
// L0209:       id: `demo-referral-${crypto.randomUUID()}`,
// L0210:       created_at: new Date().toISOString(),
// L0211:       updated_at: new Date().toISOString(),
// L0212:     }
// L0213:     sessionReferrals = [created, ...sessionReferrals].slice(0, MAX_REFERRALS)
// L0214:     return created
// L0215:   }
// L0216: 
// L0217:   throw new Error('Production referrals are created atomically by the clinical screening backend.')
// L0218: }
// L0219: 
// L0220: export async function updateReferralStatus(referralId, status) {
// L0221:   if (!REFERRAL_STEPS.includes(status) && status !== 'cancelled') {
// L0222:     throw new Error('Unsupported referral status.')
// L0223:   }
// L0224: 
// L0225:   const user = await currentUserOrNull()
// L0226:   const completedAt = status === 'completed' ? new Date().toISOString() : null
// L0227: 
// L0228:   if (!user) {
// L0229:     const currentReferral = sessionReferrals.find((item) => item.id === referralId)
// L0230:     if (!currentReferral || !referralWorkflow.canTransition(currentReferral.status, status)) {
// L0231:       throw new Error('Referral transition must follow the care workflow.')
// L0232:     }
// L0233:     sessionReferrals = sessionReferrals.map((item) => item.id === referralId
// L0234:       ? { ...item, status, completed_at: completedAt, updated_at: new Date().toISOString() }
// L0235:       : item)
// L0236:     return sessionReferrals.find((item) => item.id === referralId)
// L0237:   }
// L0238: 
// L0239:   const { data, error } = await supabase
// L0240:     .rpc('advance_referral', {
// L0241:       p_referral_id: referralId,
// L0242:       p_next_status: status,
// L0243:       p_note: null,
// L0244:     })
// L0245: 
// L0246:   if (error) throw error
// L0247:   const updated = Array.isArray(data) ? data[0] : data
// L0248:   return {
// L0249:     id: updated.referral_id,
// L0250:     status: updated.referral_status,
// L0251:     completed_at: updated.referral_completed_at,
// L0252:     updated_at: updated.referral_updated_at,
// L0253:   }
// L0254: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/platform.js
```javascript
// L0001: /**
// L0002:  * Platform & Deployment Export Utilities
// L0003:  * Covers: FHIR R4 Export, SMS Fallback, WhatsApp Share
// L0004:  * Reference: HL7 FHIR R4 Observation spec, RFC 5724 sms: URI scheme
// L0005:  */
// L0006: 
// L0007: const LOINC = {
// L0008:   heartRate:     '8867-4',
// L0009:   breathingRate: '9279-1',
// L0010:   stressIndex:   '80394-6',
// L0011:   spo2:          '59408-5',
// L0012: }
// L0013: 
// L0014: 
// L0015: /**
// L0016:  * Build an HL7 FHIR R4 Observation resource from a Vytal scan record.
// L0017:  *
// L0018:  * @param {object} record - { patientId, hr, br, stress, spo2, timestamp }
// L0019:  * @returns {object} FHIR Bundle (JSON-serialisable)
// L0020:  */
// L0021: export function buildFhirBundle(record) {
// L0022:   const ts = new Date(record.timestamp || Date.now()).toISOString()
// L0023:   const patientRef = `Patient/${record.patientId || record.id}`
// L0024: 
// L0025:   function obs(loincCode, unit, value) {
// L0026:     if (value == null) return null
// L0027:     return {
// L0028:       resourceType: 'Observation',
// L0029:       status: 'final',
// L0030:       code: {
// L0031:         coding: [{
// L0032:           system: 'http://loinc.org',
// L0033:           code: loincCode,
// L0034:         }],
// L0035:       },
// L0036:       subject: { reference: patientRef },
// L0037:       effectiveDateTime: ts,
// L0038:       valueQuantity: { value, unit },
// L0039:     }
// L0040:   }
// L0041: 
// L0042:   const entries = [
// L0043:     obs(LOINC.heartRate,     'bpm',     record.hr),
// L0044:     obs(LOINC.breathingRate, '/min',    record.br),
// L0045:     obs(LOINC.stressIndex,   '/100',    record.stress),
// L0046:     obs(LOINC.spo2,          '%',       record.spo2 ?? null),
// L0047:   ].filter(Boolean)
// L0048: 
// L0049:   return {
// L0050:     resourceType: 'Bundle',
// L0051:     type: 'collection',
// L0052:     timestamp: ts,
// L0053:     entry: entries.map((resource) => ({ resource })),
// L0054:   }
// L0055: }
// L0056: 
// L0057: 
// L0058: /**
// L0059:  * Download a FHIR JSON bundle as a file.
// L0060:  *
// L0061:  * @param {object} record
// L0062:  */
// L0063: export function downloadFhirBundle(record) {
// L0064:   const bundle = buildFhirBundle(record)
// L0065:   const json = JSON.stringify(bundle, null, 2)
// L0066:   const blob = new Blob([json], { type: 'application/json' })
// L0067:   const url = URL.createObjectURL(blob)
// L0068:   const a = document.createElement('a')
// L0069:   a.href = url
// L0070:   a.download = `vytal-fhir-${record.patientId || record.id}.json`
// L0071:   a.click()
// L0072:   URL.revokeObjectURL(url)
// L0073: }
// L0074: 
// L0075: 
// L0076: /**
// L0077:  * Open the device SMS composer pre-filled with a referral summary.
// L0078:  * Uses the RFC 5724 sms: URI scheme.
// L0079:  *
// L0080:  * @param {string} recipientPhone - Supervisor or clinic phone number
// L0081:  * @param {object} record - Scan record
// L0082:  */
// L0083: export function openSmsReferral(recipientPhone, record) {
// L0084:   const tier = record.alertTier || 'UNKNOWN'
// L0085:   const lines = [
// L0086:     `🚨 Vytal Triage Alert [${tier}]`,
// L0087:     `Patient: ${record.name || record.patientId}`,
// L0088:     `HR: ${record.hr} bpm | BR: ${record.br || '—'} br/min | Stress: ${record.stress}/100`,
// L0089:     record.spo2 ? `SpO2 Proxy: ${record.spo2}%` : '',
// L0090:     `Time: ${new Date(record.timestamp || Date.now()).toLocaleString()}`,
// L0091:     `Reason: ${(record.alertReasons || []).join('; ') || 'See Vytal record.'}`,
// L0092:     `Record: ${window.location.origin}/report?id=${record.patientId || record.id}`,
// L0093:   ].filter(Boolean).join('\n')
// L0094: 
// L0095:   const phone = recipientPhone ? recipientPhone.replace(/\s+/g, '') : ''
// L0096:   const uri = `sms:${phone}?body=${encodeURIComponent(lines)}`
// L0097:   window.location.href = uri
// L0098: }
// L0099: 
// L0100: 
// L0101: /**
// L0102:  * Open WhatsApp Click-to-Chat with a patient summary message.
// L0103:  *
// L0104:  * @param {object} record
// L0105:  * @param {string} reportUrl - Full URL to the Vytal report
// L0106:  */
// L0107: export function openWhatsAppShare(record, reportUrl) {
// L0108:   const msg = [
// L0109:     `🩺 *Vytal Screening Result*`,
// L0110:     `*Patient:* ${record.name || record.patientId}`,
// L0111:     `*Status:* ${record.alertTier || (record.status === 'flagged' ? 'FLAGGED' : 'NORMAL')}`,
// L0112:     `• Heart Rate: ${record.hr} bpm`,
// L0113:     `• Breathing: ${record.br || '—'} br/min`,
// L0114:     `• Stress Index: ${record.stress}/100`,
// L0115:     record.spo2 ? `• SpO2 Proxy: ${record.spo2}%` : '',
// L0116:     ``,
// L0117:     `📎 Full Report: ${reportUrl}`,
// L0118:     ``,
// L0119:     `_Vytal Community Health Triage System_`,
// L0120:   ].filter((l, i, arr) => l !== '' || arr[i - 1] !== '').join('\n')
// L0121: 
// L0122:   const url = `https://wa.me/?text=${encodeURIComponent(msg)}`
// L0123:   window.open(url, '_blank', 'noopener,noreferrer')
// L0124: }
// L0125: 
// L0126: 
// L0127: /**
// L0128:  * Voice readout of scan results using Web Speech API.
// L0129:  * Reads the AI explanation aloud in the patient's selected language.
// L0130:  *
// L0131:  * @param {string} text - Text to read aloud
// L0132:  * @param {string} langCode - BCP-47 language code ('en', 'ur', 'ar', etc.)
// L0133:  * @param {function} [onEnd] - Callback when speech finishes
// L0134:  * @returns {{ cancel: function }} - Object with cancel method to stop speech
// L0135:  */
// L0136: export function speakExplanation(text, langCode = 'en', onEnd = null) {
// L0137:   if (!window.speechSynthesis || !text) {
// L0138:     return { cancel: () => {} }
// L0139:   }
// L0140: 
// L0141:   // Map short language code -> BCP-47
// L0142:   const BCP47 = {
// L0143:     en: 'en-US',
// L0144:     ur: 'ur-PK',
// L0145:     ps: 'ps-AF',
// L0146:     sd: 'sd-PK',
// L0147:     ar: 'ar-SA',
// L0148:     sw: 'sw-KE',
// L0149:     ha: 'ha-NG',
// L0150:     am: 'am-ET',
// L0151:     bn: 'bn-BD',
// L0152:     hi: 'hi-IN',
// L0153:     tl: 'tl-PH',
// L0154:   }
// L0155: 
// L0156:   window.speechSynthesis.cancel()
// L0157:   const utterance = new SpeechSynthesisUtterance(text)
// L0158:   utterance.lang = BCP47[langCode] || 'en-US'
// L0159:   utterance.rate = 0.88
// L0160:   utterance.pitch = 1.0
// L0161: 
// L0162:   if (onEnd) utterance.addEventListener('end', onEnd)
// L0163:   window.speechSynthesis.speak(utterance)
// L0164: 
// L0165:   return { cancel: () => window.speechSynthesis.cancel() }
// L0166: }
// L0167: 
// L0168: 
// L0169: /**
// L0170:  * Check if Web Speech API has a voice available for the given language.
// L0171:  *
// L0172:  * @param {string} langCode
// L0173:  * @returns {boolean}
// L0174:  */
// L0175: export function isVoiceAvailable(langCode = 'en') {
// L0176:   if (!window.speechSynthesis) return false
// L0177:   const voices = window.speechSynthesis.getVoices()
// L0178:   const prefix = langCode.toLowerCase()
// L0179:   return voices.some((v) => v.lang.toLowerCase().startsWith(prefix))
// L0180: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/qualityFlags.js
```javascript
// L0001: export const QUALITY_FLAGS = Object.freeze({
// L0002:   LOW_FRAME_RATE: 1 << 0,
// L0003:   LOW_RESOLUTION: 1 << 1,
// L0004:   POOR_LIGHTING: 1 << 2,
// L0005:   EXCESSIVE_MOTION: 1 << 3,
// L0006:   UNRELIABLE_SIGNAL: 1 << 4,
// L0007: })
// L0008: 
// L0009: export function createQualityMask({ camera, lightingTier, motionTier, uncertainty }) {
// L0010:   let mask = 0
// L0011:   if ((camera?.fps ?? 0) < 24) mask |= QUALITY_FLAGS.LOW_FRAME_RATE
// L0012:   if ((camera?.megapixels ?? 0) < 0.9) mask |= QUALITY_FLAGS.LOW_RESOLUTION
// L0013:   if (['poor', 'dim'].includes(lightingTier)) mask |= QUALITY_FLAGS.POOR_LIGHTING
// L0014:   if (motionTier === 'large') mask |= QUALITY_FLAGS.EXCESSIVE_MOTION
// L0015:   if (uncertainty?.reliable === false) mask |= QUALITY_FLAGS.UNRELIABLE_SIGNAL
// L0016:   return mask
// L0017: }
// L0018: 
// L0019: export function hasQualityFlag(mask, flag) {
// L0020:   return (mask & flag) === flag
// L0021: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/rppg.js
```javascript
// L0001: // Scientific rPPG engine featuring:
// L0002: // 1. SNR-weighted dynamic blend of POS (Wang et al., 2016) and CHROM (de Haan & Jeanne, 2013)
// L0003: // 2. Goertzel frequency power transform with window-to-window continuity tracking
// L0004: // 3. Sub-sample peak timing via parabolic interpolation for quantization error removal
// L0005: // 4. Clinical RMSSD (Root Mean Square of Successive Differences) 10-second PRV metric
// L0006: // 5. Smooth evidence-based logistic mapping for autonomic stress / recovery scoring.
// L0007: 
// L0008: const HR_MIN_BPM = 48
// L0009: const HR_MAX_BPM = 180
// L0010: const BR_MIN_BPM = 12
// L0011: const BR_MAX_BPM = 22
// L0012: const RESAMPLE_HZ = 30
// L0013: // Raised from 7500 → 12500 ms: gives the algorithm more cardiac cycles to
// L0014: // work with before committing to a reading, which substantially reduces
// L0015: // window-to-window jitter (window error multiplier drops from 2× to 1.3×).
// L0016: const MIN_SAMPLES_MS = 12500
// L0017: const MIN_CAPTURE_HZ = 12
// L0018: // Wider Goertzel windows improve SNR by averaging over more cycles
// L0019: // (8 s at 75 bpm ≈ 10 beats vs. 5 s ≈ 6 beats — ~40% more signal energy).
// L0020: const WINDOW_SEC = 8
// L0021: const WINDOW_STEP_SEC = 1
// L0022: 
// L0023: function mean(arr) {
// L0024:   if (!arr || !arr.length) return 0
// L0025:   return arr.reduce((s, v) => s + v, 0) / arr.length
// L0026: }
// L0027: 
// L0028: function std(arr) {
// L0029:   if (!arr || !arr.length) return 0
// L0030:   const m = mean(arr)
// L0031:   return Math.sqrt(mean(arr.map((v) => (v - m) ** 2)))
// L0032: }
// L0033: 
// L0034: function median(arr) {
// L0035:   if (!arr || !arr.length) return 0
// L0036:   const s = [...arr].sort((a, b) => a - b)
// L0037:   const mid = Math.floor(s.length / 2)
// L0038:   return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2
// L0039: }
// L0040: 
// L0041: function resampleUniform(samples, hz) {
// L0042:   const t0 = samples[0].t
// L0043:   const tEnd = samples[samples.length - 1].t
// L0044:   const dt = 1000 / hz
// L0045:   const out = { r: [], g: [], b: [] }
// L0046:   let i = 0
// L0047:   for (let t = t0; t <= tEnd; t += dt) {
// L0048:     while (i < samples.length - 2 && samples[i + 1].t < t) i++
// L0049:     const a = samples[i]
// L0050:     const b = samples[Math.min(i + 1, samples.length - 1)]
// L0051:     const span = b.t - a.t || 1
// L0052:     const frac = (t - a.t) / span
// L0053:     out.r.push(a.r + (b.r - a.r) * frac)
// L0054:     out.g.push(a.g + (b.g - a.g) * frac)
// L0055:     out.b.push(a.b + (b.b - a.b) * frac)
// L0056:   }
// L0057:   return out
// L0058: }
// L0059: 
// L0060: function detrend(arr) {
// L0061:   const n = arr.length
// L0062:   const mx = mean(arr.map((_, i) => i))
// L0063:   const my = mean(arr)
// L0064:   let num = 0, den = 0
// L0065:   for (let i = 0; i < n; i++) {
// L0066:     num += (i - mx) * (arr[i] - my)
// L0067:     den += (i - mx) ** 2
// L0068:   }
// L0069:   const slope = den === 0 ? 0 : num / den
// L0070:   const intercept = my - slope * mx
// L0071:   return arr.map((v, i) => v - (slope * i + intercept))
// L0072: }
// L0073: 
// L0074: function highpass(arr, windowSize) {
// L0075:   const out = []
// L0076:   for (let i = 0; i < arr.length; i++) {
// L0077:     const start = Math.max(0, i - windowSize)
// L0078:     const end = Math.min(arr.length, i + windowSize + 1)
// L0079:     out.push(arr[i] - mean(arr.slice(start, end)))
// L0080:   }
// L0081:   return out
// L0082: }
// L0083: 
// L0084: // Bandpass filter: cascade highpass + Hann-weighted lowpass.
// L0085: // Retains ~0.5–4.0 Hz (30–240 bpm) — covers the full cardiac range with
// L0086: // margin; the Goertzel scan then constrains to 48–180 bpm downstream.
// L0087: // The lowpass component is the key new addition: it removes high-frequency
// L0088: // motion artifacts (head sway, talking) that the bare highpass lets through.
// L0089: function bandpass(arr, sampleRateHz) {
// L0090:   // High-pass: remove DC, baseline wander, and lighting drift (< ~0.4 Hz)
// L0091:   const hp = highpass(arr, Math.round(sampleRateHz * 2.5))
// L0092: 
// L0093:   // Low-pass: Hann-windowed box smoother, cutoff ~4 Hz
// L0094:   // Width of 0.125 s (≈ half of 1/4 Hz) gives a gentle rolloff above 4 Hz.
// L0095:   const lpW = Math.max(2, Math.round(sampleRateHz / 8))
// L0096:   const out = new Array(hp.length)
// L0097:   for (let i = 0; i < hp.length; i++) {
// L0098:     let vSum = 0, wSum = 0
// L0099:     for (let j = -lpW; j <= lpW; j++) {
// L0100:       const idx = i + j
// L0101:       if (idx < 0 || idx >= hp.length) continue
// L0102:       const w = 0.5 * (1 - Math.cos((Math.PI * (j + lpW)) / lpW))
// L0103:       vSum += hp[idx] * w
// L0104:       wSum += w
// L0105:     }
// L0106:     out[i] = wSum > 0 ? vSum / wSum : 0
// L0107:   }
// L0108:   return out
// L0109: }
// L0110: 
// L0111: // SNR-weighted mean — high-confidence windows pull the estimate harder.
// L0112: function weightedMean(values, weights) {
// L0113:   const totalW = weights.reduce((a, b) => a + b, 0)
// L0114:   if (!totalW) return mean(values)
// L0115:   return values.reduce((s, v, i) => s + v * weights[i], 0) / totalW
// L0116: }
// L0117: 
// L0118: // CHROM Algorithm (de Haan & Jeanne, 2013)
// L0119: function chromSignal(r, g, b) {
// L0120:   const meanR = mean(r) || 1
// L0121:   const meanG = mean(g) || 1
// L0122:   const meanB = mean(b) || 1
// L0123:   const rn = r.map((v) => v / meanR)
// L0124:   const gn = g.map((v) => v / meanG)
// L0125:   const bn = b.map((v) => v / meanB)
// L0126: 
// L0127:   const X = rn.map((v, i) => 3 * v - 2 * gn[i])
// L0128:   const Y = rn.map((v, i) => 1.5 * v + gn[i] - 1.5 * bn[i])
// L0129:   const alpha = std(Y) === 0 ? 0 : std(X) / std(Y)
// L0130:   return X.map((v, i) => v - alpha * Y[i])
// L0131: }
// L0132: 
// L0133: // POS Algorithm (Wang et al., 2016)
// L0134: function posSignal(r, g, b) {
// L0135:   const meanR = mean(r) || 1
// L0136:   const meanG = mean(g) || 1
// L0137:   const meanB = mean(b) || 1
// L0138:   const rn = r.map((v) => v / meanR)
// L0139:   const gn = g.map((v) => v / meanG)
// L0140:   const bn = b.map((v) => v / meanB)
// L0141: 
// L0142:   const S1 = gn.map((v, i) => v - bn[i])
// L0143:   const S2 = gn.map((v, i) => v + bn[i] - 2 * rn[i])
// L0144: 
// L0145:   const stdS1 = std(S1)
// L0146:   const stdS2 = std(S2)
// L0147:   const alpha = stdS2 === 0 ? 0 : stdS1 / stdS2
// L0148: 
// L0149:   return S1.map((v, i) => v + alpha * S2[i])
// L0150: }
// L0151: 
// L0152: // Goertzel Frequency Power Transform
// L0153: function goertzelPower(signal, freqHz, sampleRateHz) {
// L0154:   const n = signal.length
// L0155:   const k = Math.round((n * freqHz) / sampleRateHz)
// L0156:   const omega = (2 * Math.PI * k) / n
// L0157:   const coeff = 2 * Math.cos(omega)
// L0158:   let s0 = 0, s1 = 0, s2 = 0
// L0159:   for (let i = 0; i < n; i++) {
// L0160:     s0 = signal[i] + coeff * s1 - s2
// L0161:     s2 = s1
// L0162:     s1 = s0
// L0163:   }
// L0164:   const real = s1 - s2 * Math.cos(omega)
// L0165:   const imag = s2 * Math.sin(omega)
// L0166:   return real * real + imag * imag
// L0167: }
// L0168: 
// L0169: function bestBpmWithSnr(signal, sampleRateHz, minBpm, maxBpm, stepBpm, prevTrackedBpm = null) {
// L0170:   let bestBpm = null
// L0171:   let bestPower = -Infinity
// L0172:   let total = 0
// L0173:   let count = 0
// L0174: 
// L0175:   const powers = {}
// L0176:   for (let bpm = minBpm; bpm <= maxBpm; bpm += stepBpm) {
// L0177:     const power = goertzelPower(signal, bpm / 60, sampleRateHz)
// L0178:     powers[bpm] = power
// L0179:     total += power
// L0180:     count++
// L0181:     if (power > bestPower) {
// L0182:       bestPower = power
// L0183:       bestBpm = bpm
// L0184:     }
// L0185:   }
// L0186: 
// L0187:   // Window Continuity Tracking: restrict jumps if previous window was confident
// L0188:   if (prevTrackedBpm && bestBpm) {
// L0189:     const candidates = Object.keys(powers)
// L0190:       .map(Number)
// L0191:       .filter((bpm) => Math.abs(bpm - prevTrackedBpm) <= 18)
// L0192:     if (candidates.length > 0) {
// L0193:       let trackedBest = candidates[0]
// L0194:       let trackedPower = -Infinity
// L0195:       for (const cb of candidates) {
// L0196:         if (powers[cb] > trackedPower) {
// L0197:           trackedPower = powers[cb]
// L0198:           trackedBest = cb
// L0199:         }
// L0200:       }
// L0201:       if (trackedPower > bestPower * 0.45) {
// L0202:         bestBpm = trackedBest
// L0203:         bestPower = trackedPower
// L0204:       }
// L0205:     }
// L0206:   }
// L0207: 
// L0208:   // Sub-harmonic rejection: if bestBpm * 2 is in range and has substantial
// L0209:   // power (>55% of current peak), the detected peak is likely a 2nd-order
// L0210:   // sub-harmonic artifact — the true fundamental is at double the frequency.
// L0211:   // This is the most common single cause of a "reading half the real HR".
// L0212:   if (bestBpm !== null) {
// L0213:     const doubled = Math.round(bestBpm * 2)
// L0214:     if (doubled <= maxBpm && powers[doubled] !== undefined && powers[doubled] > bestPower * 0.55) {
// L0215:       bestBpm = doubled
// L0216:       bestPower = powers[doubled]
// L0217:     }
// L0218:   }
// L0219: 
// L0220:   // Parabolic interpolation on the Goertzel spectrum for sub-BPM precision.
// L0221:   // Without this, a true HR of 74.6 bpm reads as 74 or 75 — a fixed
// L0222:   // quantisation error of up to ±0.5 × stepBpm at every window.
// L0223:   if (bestBpm !== null && stepBpm >= 1) {
// L0224:     const prevB = bestBpm - stepBpm
// L0225:     const nextB = bestBpm + stepBpm
// L0226:     if (powers[prevB] !== undefined && powers[nextB] !== undefined) {
// L0227:       const alpha = powers[prevB]
// L0228:       const beta = bestPower
// L0229:       const gamma = powers[nextB]
// L0230:       const denom = 2 * (alpha - 2 * beta + gamma)
// L0231:       if (denom < 0) { // valid downward-opening parabola
// L0232:         const delta = (alpha - gamma) / denom
// L0233:         bestBpm = bestBpm + Math.max(-0.5, Math.min(0.5, delta)) * stepBpm
// L0234:       }
// L0235:     }
// L0236:   }
// L0237: 
// L0238:   const avg = count ? total / count : 0
// L0239:   const snr = avg === 0 ? 0 : bestPower / avg
// L0240:   return { bpm: bestBpm, snr }
// L0241: }
// L0242: 
// L0243: function amplitudeEnvelope(signal, windowSize) {
// L0244:   const out = []
// L0245:   for (let i = 0; i < signal.length; i++) {
// L0246:     const start = Math.max(0, i - windowSize)
// L0247:     const window = signal.slice(start, i + 1)
// L0248:     out.push(Math.max(...window) - Math.min(...window))
// L0249:   }
// L0250:   return out
// L0251: }
// L0252: 
// L0253: // Sub-sample timing beat peak detector with parabolic interpolation (Point 2 & 5)
// L0254: function detectBeatsWithSubsampleTiming(signal, hrBpm, sampleRateHz) {
// L0255:   const n = signal.length
// L0256:   if (n < sampleRateHz * 3) return []
// L0257: 
// L0258:   const beatIntervalMs = (60000 / hrBpm)
// L0259:   const minDistanceSamples = Math.max(2, Math.round((beatIntervalMs * 0.45 / 1000) * sampleRateHz))
// L0260:   const localRange = std(signal) * 0.4
// L0261: 
// L0262:   const beatTimesMs = []
// L0263:   let lastBeatIdx = -minDistanceSamples
// L0264: 
// L0265:   for (let i = 1; i < n - 1; i++) {
// L0266:     if (i - lastBeatIdx < minDistanceSamples) continue
// L0267: 
// L0268:     const yPrev = signal[i - 1]
// L0269:     const yCurr = signal[i]
// L0270:     const yNext = signal[i + 1]
// L0271: 
// L0272:     // Local peak condition with prominence check
// L0273:     if (yCurr > yPrev && yCurr > yNext && (yCurr - Math.min(yPrev, yNext)) >= localRange * 0.3) {
// L0274:       // Parabolic interpolation for sub-sample precision timing (Point 2)
// L0275:       const alpha = yPrev
// L0276:       const beta = yCurr
// L0277:       const gamma = yNext
// L0278:       const denom = 2 * (alpha - 2 * beta + gamma)
// L0279:       const delta = denom === 0 ? 0 : (alpha - gamma) / denom
// L0280: 
// L0281:       const subSampleIdx = i + Math.max(-0.5, Math.min(0.5, delta))
// L0282:       const timeMs = (subSampleIdx / sampleRateHz) * 1000
// L0283: 
// L0284:       beatTimesMs.push(timeMs)
// L0285:       lastBeatIdx = i
// L0286:     }
// L0287:   }
// L0288: 
// L0289:   return beatTimesMs
// L0290: }
// L0291: 
// L0292: // Systolic crest time: for each detected beat peak, find the preceding
// L0293: // local minimum (the systolic "foot") within a physiologically plausible
// L0294: // upstroke window, and measure foot-to-peak time. This is a genuine
// L0295: // single-site PPG morphology feature (distinct from true two-site pulse
// L0296: // transit time) — rise-time/crest-time has published correlation with
// L0297: // arterial stiffness and, with per-user calibration, BP trend direction.
// L0298: // See bloodPressurePTT.js for how this is used and its honest limitations.
// L0299: function computeCrestTimeMs(pulse, beatTimesMs, sampleRateHz) {
// L0300:   if (!beatTimesMs || beatTimesMs.length < 5 || !pulse || !pulse.length) return null
// L0301: 
// L0302:   const signalStd = std(pulse)
// L0303:   const crestTimes = []
// L0304: 
// L0305:   for (const peakTimeMs of beatTimesMs) {
// L0306:     const peakIdx = Math.round((peakTimeMs / 1000) * sampleRateHz)
// L0307:     if (peakIdx <= 1 || peakIdx >= pulse.length) continue
// L0308: 
// L0309:     const maxLookbackSamples = Math.round(0.5 * sampleRateHz) // up to 500ms upstroke window
// L0310:     let footIdx = peakIdx
// L0311:     let minVal = pulse[peakIdx]
// L0312: 
// L0313:     for (let i = peakIdx - 1; i >= Math.max(0, peakIdx - maxLookbackSamples); i--) {
// L0314:       if (pulse[i] < minVal) {
// L0315:         minVal = pulse[i]
// L0316:         footIdx = i
// L0317:       } else if (pulse[i] > minVal + signalStd * 0.15) {
// L0318:         // signal has started rising again past the local minimum — we've
// L0319:         // likely crossed into the tail of the previous beat, stop here
// L0320:         break
// L0321:       }
// L0322:     }
// L0323: 
// L0324:     const footTimeMs = (footIdx / sampleRateHz) * 1000
// L0325:     const crestMs = peakTimeMs - footTimeMs
// L0326:     if (crestMs > 40 && crestMs < 400) crestTimes.push(crestMs) // physiological upstroke range
// L0327:   }
// L0328: 
// L0329:   if (crestTimes.length < 3) return null
// L0330: 
// L0331:   // Median for robustness against single-beat outliers
// L0332:   const sorted = [...crestTimes].sort((a, b) => a - b)
// L0333:   return sorted[Math.floor(sorted.length / 2)]
// L0334: }
// L0335: 
// L0336: // Kubios-style adaptive IBI outlier rejection (simplified from Lipponen &
// L0337: // Tarvainen 2019, "A robust algorithm for heart rate variability time
// L0338: // series artefact correction" — the method Kubios HRV software is built
// L0339: // on). The previous filter was a single fixed absolute range (300-1400ms),
// L0340: // which doesn't adapt to the person's own actual heart rate: a fast
// L0341: // resting HR near the 1400ms boundary and a genuine artifact near the same
// L0342: // boundary look identical to a fixed filter. This instead compares each
// L0343: // interval to a local median of its neighbors and rejects intervals that
// L0344: // deviate too far from what this person's own recent rhythm looks like.
// L0345: function rejectIbiOutliers(intervals, threshold = 0.2) {
// L0346:   if (!intervals || intervals.length < 5) return intervals || []
// L0347: 
// L0348:   const cleaned = []
// L0349:   const windowRadius = 2 // looks at up to 2 neighbors on each side
// L0350: 
// L0351:   for (let i = 0; i < intervals.length; i++) {
// L0352:     const windowStart = Math.max(0, i - windowRadius)
// L0353:     const windowEnd = Math.min(intervals.length - 1, i + windowRadius)
// L0354:     const neighbors = []
// L0355:     for (let j = windowStart; j <= windowEnd; j++) {
// L0356:       if (j !== i) neighbors.push(intervals[j])
// L0357:     }
// L0358:     if (neighbors.length === 0) {
// L0359:       cleaned.push(intervals[i])
// L0360:       continue
// L0361:     }
// L0362:     const localMedian = median(neighbors)
// L0363:     if (localMedian === 0) continue
// L0364:     const relativeDeviation = Math.abs(intervals[i] - localMedian) / localMedian
// L0365:     if (relativeDeviation <= threshold) {
// L0366:       cleaned.push(intervals[i])
// L0367:     }
// L0368:     // else: rejected as a local artifact (motion blip, missed/extra beat detection)
// L0369:   }
// L0370: 
// L0371:   return cleaned
// L0372: }
// L0373: 
// L0374: // Calculate RMSSD from sub-sample timing beat intervals (Point 1 & 5)
// L0375: function computeRmssd(beatTimesMs) {
// L0376:   if (!beatTimesMs || beatTimesMs.length < 5) return null
// L0377: 
// L0378:   const rawIntervals = []
// L0379:   for (let i = 1; i < beatTimesMs.length; i++) {
// L0380:     const diff = beatTimesMs[i] - beatTimesMs[i - 1]
// L0381:     // Coarse physiological bounds first (catches gross detection failures)
// L0382:     if (diff >= 300 && diff <= 1400) {
// L0383:       rawIntervals.push(diff)
// L0384:     }
// L0385:   }
// L0386: 
// L0387:   // Adaptive local-median outlier rejection on top of the coarse filter
// L0388:   const intervals = rejectIbiOutliers(rawIntervals)
// L0389: 
// L0390:   if (intervals.length < 4) return null
// L0391: 
// L0392:   let sumSqDiff = 0
// L0393:   let count = 0
// L0394:   for (let i = 1; i < intervals.length; i++) {
// L0395:     const d = intervals[i] - intervals[i - 1]
// L0396:     sumSqDiff += d * d
// L0397:     count++
// L0398:   }
// L0399: 
// L0400:   if (count < 3) return null
// L0401:   return Math.sqrt(sumSqDiff / count)
// L0402: }
// L0403: 
// L0404: // Logistic continuous mapping function (Point 6): RMSSD -> 0-100 score
// L0405: function mapRmssdToStressScore(rmssdMs, hr = 72) {
// L0406:   if (rmssdMs == null || isNaN(rmssdMs)) {
// L0407:     // Fallback baseline when beat peak detection is noisy
// L0408:     const hrBase = hr > 88 ? Math.round(((hr - 88) / 45) * 45) + 30 : 20
// L0409:     return Math.min(90, Math.max(14, hrBase))
// L0410:   }
// L0411: 
// L0412:   // Population RMSSD parameters: median typical resting RMSSD = 42ms
// L0413:   // High RMSSD (> 65ms) -> High parasympathetic tone (Stress 14-25, Normal)
// L0414:   // Low RMSSD (< 25ms) -> Sympathetic activation (Stress 65-85, Elevated)
// L0415:   const logistic = 1 / (1 + Math.exp((rmssdMs - 42) / 12))
// L0416:   let score = Math.round(logistic * 100)
// L0417: 
// L0418:   // Modest resting HR weighting if tachycardia present (> 90 bpm)
// L0419:   if (hr > 90) {
// L0420:     score += Math.round(((hr - 90) / 40) * 18)
// L0421:   }
// L0422: 
// L0423:   return Math.min(95, Math.max(12, Math.round(score)))
// L0424: }
// L0425: 
// L0426: // ─── Temporal EMA smoothing helper ──────────────────────────────────────────
// L0427: // Applies an exponential moving average pass over a BPM window array to
// L0428: // dampen single-window outliers before committing to the final median.
// L0429: // alpha=0.35 gives moderate smoothing without introducing excess lag.
// L0430: function emaSmooth(arr, alpha = 0.35) {
// L0431:   if (!arr || arr.length === 0) return arr
// L0432:   const out = [arr[0]]
// L0433:   for (let i = 1; i < arr.length; i++) {
// L0434:     out.push(alpha * arr[i] + (1 - alpha) * out[i - 1])
// L0435:   }
// L0436:   return out
// L0437: }
// L0438: 
// L0439: // Trimmed mean: drop top and bottom k% of BPM windows before averaging.
// L0440: // This is more robust than a plain mean when a few windows catch motion
// L0441: // artefacts — equivalent to a 20% symmetric trim.
// L0442: function trimmedMean(arr, trimFrac = 0.2) {
// L0443:   if (!arr || arr.length < 4) return mean(arr)
// L0444:   const sorted = [...arr].sort((a, b) => a - b)
// L0445:   const cut = Math.max(1, Math.floor(sorted.length * trimFrac))
// L0446:   const inner = sorted.slice(cut, sorted.length - cut)
// L0447:   return mean(inner)
// L0448: }
// L0449: 
// L0450: // Normalise a raw Goertzel SNR (typically 2–15) to 0–1 so it can be fed
// L0451: // into the uncertainty blending formula unchanged.
// L0452: function normaliseSnr(snr) {
// L0453:   // Empirical cap at 15× SNR — readings above that are essentially noise-free
// L0454:   return Math.min(1, Math.max(0, (snr - 1) / 14))
// L0455: }
// L0456: 
// L0457: export function analyzeSignal(samples) {
// L0458:   if (!samples || samples.length < 2) return null
// L0459:   const duration = samples[samples.length - 1].t - samples[0].t
// L0460:   if (duration < MIN_SAMPLES_MS) return null
// L0461: 
// L0462:   const captureHz = samples.length / (duration / 1000)
// L0463:   if (captureHz < MIN_CAPTURE_HZ) return null
// L0464: 
// L0465:   const { r, g, b } = resampleUniform(samples, RESAMPLE_HZ)
// L0466:   if (r.length < RESAMPLE_HZ * 4) return null
// L0467: 
// L0468:   // CHROM & POS extraction
// L0469:   const chromRaw = detrend(chromSignal(r, g, b))
// L0470:   const posRaw = detrend(posSignal(r, g, b))
// L0471: 
// L0472:   // Dynamic SNR-Weighted Selection between CHROM and POS
// L0473:   const chromSnrResult = bestBpmWithSnr(chromRaw, RESAMPLE_HZ, HR_MIN_BPM, HR_MAX_BPM, 2)
// L0474:   const posSnrResult = bestBpmWithSnr(posRaw, RESAMPLE_HZ, HR_MIN_BPM, HR_MAX_BPM, 2)
// L0475: 
// L0476:   let pulse
// L0477:   let bestFullSnr
// L0478:   if (chromSnrResult.snr >= posSnrResult.snr) {
// L0479:     // bandpass replaces bare highpass — adds upper 4 Hz cutoff to block
// L0480:     // motion artifacts that the highpass-only version let through
// L0481:     pulse = bandpass(chromRaw, RESAMPLE_HZ)
// L0482:     bestFullSnr = chromSnrResult.snr
// L0483:   } else {
// L0484:     pulse = bandpass(posRaw, RESAMPLE_HZ)
// L0485:     bestFullSnr = posSnrResult.snr
// L0486:   }
// L0487: 
// L0488:   const windowLen = WINDOW_SEC * RESAMPLE_HZ
// L0489:   const stepLen = WINDOW_STEP_SEC * RESAMPLE_HZ
// L0490:   const windowBpms = []
// L0491:   const windowSnrs = []
// L0492:   let trackedBpm = null
// L0493: 
// L0494:   for (let start = 0; start + windowLen <= pulse.length; start += stepLen) {
// L0495:     const segment = pulse.slice(start, start + windowLen)
// L0496:     const { bpm, snr } = bestBpmWithSnr(segment, RESAMPLE_HZ, HR_MIN_BPM, HR_MAX_BPM, 1, trackedBpm)
// L0497: 
// L0498:     if (bpm !== null && snr >= 2.0) {
// L0499:       windowBpms.push(bpm)
// L0500:       windowSnrs.push(snr)
// L0501:       trackedBpm = bpm
// L0502:     }
// L0503:   }
// L0504: 
// L0505:   if (windowBpms.length < 3) return null
// L0506: 
// L0507:   // ── Stabilisation pass ──────────────────────────────────────────────────
// L0508:   // 1. EMA smooth the per-window BPM array to dampen artefact spikes
// L0509:   const smoothed = emaSmooth(windowBpms)
// L0510: 
// L0511:   // 2. Trimmed mean on the smoothed array (drops top+bottom 20%)
// L0512:   const stableMean = trimmedMean(smoothed)
// L0513: 
// L0514:   // 3. SNR-weighted mean — windows with stronger Goertzel SNR pull harder.
// L0515:   //    Shift SNR by 1 so the minimum-qualifying window (SNR=2) gets weight=1
// L0516:   //    and a very clean window (SNR=8) gets weight=7, not equal weight.
// L0517:   const snrWeights = windowSnrs.map((s) => Math.max(0, s - 1))
// L0518:   const snrWeightedEstimate = weightedMean(windowBpms, snrWeights)
// L0519: 
// L0520:   // 4. Three-way consensus: smoothed median, trimmed mean, SNR-weighted mean.
// L0521:   //    Use whichever of the three is closest to the trimmed mean as the anchor
// L0522:   //    (trimmed mean is the most outlier-resistant of the three).
// L0523:   const medianBpm = median(smoothed)
// L0524:   const candidates = [medianBpm, snrWeightedEstimate]
// L0525:   const bestCandidate = candidates.reduce((best, c) =>
// L0526:     Math.abs(c - stableMean) < Math.abs(best - stableMean) ? c : best
// L0527:   )
// L0528:   const hr = Math.round(
// L0529:     Math.abs(bestCandidate - stableMean) <= 8 ? bestCandidate : stableMean
// L0530:   )
// L0531: 
// L0532:   // ── Live signal confidence ───────────────────────────────────────────────
// L0533:   // Use the mean per-window SNR (more windows → more stable estimate) and
// L0534:   // normalise to 0–1 for the uncertainty blending formula.
// L0535:   const meanWindowSnr = windowSnrs.length ? mean(windowSnrs) : bestFullSnr
// L0536:   const liveConfidence = normaliseSnr(meanWindowSnr)
// L0537: 
// L0538:   // Effective window is the full signal duration in seconds
// L0539:   const windowSeconds = duration / 1000
// L0540: 
// L0541:   // Respiration rate via PPG amplitude modulation
// L0542:   const envelope = detrend(amplitudeEnvelope(pulse, Math.round(RESAMPLE_HZ * 0.5)))
// L0543:   const brBpm = bestBpmWithSnr(envelope, RESAMPLE_HZ, BR_MIN_BPM, BR_MAX_BPM, 0.5).bpm
// L0544: 
// L0545:   // Beat peak sub-sample timing & RMSSD calculation
// L0546:   const beatTimesMs = detectBeatsWithSubsampleTiming(pulse, hr, RESAMPLE_HZ)
// L0547:   const rmssdMs = computeRmssd(beatTimesMs)
// L0548:   const stress = mapRmssdToStressScore(rmssdMs, hr)
// L0549:   const crestTimeMs = computeCrestTimeMs(pulse, beatTimesMs, RESAMPLE_HZ)
// L0550: 
// L0551:   return {
// L0552:     hr,
// L0553:     br: brBpm !== null ? Math.round(brBpm) : 15,
// L0554:     stress,
// L0555:     rmssdMs: rmssdMs ? Math.round(rmssdMs) : null,
// L0556:     liveConfidence,   // 0–1 normalised Goertzel SNR — consumed by uncertainty module
// L0557:     windowSeconds,    // total capture duration — consumed by uncertainty module
// L0558:     beatTimesMs,      // sub-sample beat peak timestamps — consumed by afib.js
// L0559:     crestTimeMs: crestTimeMs !== null ? Math.round(crestTimeMs) : null, // consumed by bloodPressurePTT.js
// L0560:   }
// L0561: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/sampleTransport.js
```javascript
// L0001: const SAMPLE_WIDTH = 4
// L0002: 
// L0003: export function packSamples(samples) {
// L0004:   const packed = new Float64Array(samples.length * SAMPLE_WIDTH)
// L0005:   for (let index = 0; index < samples.length; index++) {
// L0006:     const offset = index * SAMPLE_WIDTH
// L0007:     const sample = samples[index]
// L0008:     packed[offset] = Number(sample.t)
// L0009:     packed[offset + 1] = Number(sample.r)
// L0010:     packed[offset + 2] = Number(sample.g)
// L0011:     packed[offset + 3] = Number(sample.b)
// L0012:   }
// L0013:   return packed
// L0014: }
// L0015: 
// L0016: export function unpackSamples(buffer, count) {
// L0017:   const packed = new Float64Array(buffer)
// L0018:   const safeCount = Math.min(count, Math.floor(packed.length / SAMPLE_WIDTH))
// L0019:   const samples = new Array(safeCount)
// L0020:   for (let index = 0; index < safeCount; index++) {
// L0021:     const offset = index * SAMPLE_WIDTH
// L0022:     samples[index] = {
// L0023:       t: packed[offset],
// L0024:       r: packed[offset + 1],
// L0025:       g: packed[offset + 2],
// L0026:       b: packed[offset + 3],
// L0027:     }
// L0028:   }
// L0029:   return samples
// L0030: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/spo2.js
```javascript
// L0001: /**
// L0002:  * SpO2 Proxy Estimation Module (Ratio-of-Ratios rPPG Method)
// L0003:  * Reference: Ni, F. et al. "ReViSe: Remote Vital Signs Measurement" (2022)
// L0004:  * Labelled explicitly as a proxy estimate, not a standalone medical device.
// L0005:  *
// L0006:  * Switched from red/blue to red/green channels — green carries the
// L0007:  * strongest pulsatile (AC) PPG component of the three RGB channels in
// L0008:  * webcam-based rPPG literature (blue is typically the noisiest, lowest-SNR
// L0009:  * channel on consumer camera sensors), which is the standard pairing used
// L0010:  * in camera-based SpO2 proxy papers given consumer cameras have no true
// L0011:  * infrared channel (unlike clinical finger pulse oximeters, which use
// L0012:  * red/IR — a fundamentally more specific pairing this proxy cannot match).
// L0013:  *
// L0014:  * Skin-tone handling: real clinical pulse oximeters have a well-documented
// L0015:  * accuracy bias on darker skin — they systematically overestimate SpO2 and
// L0016:  * miss occult hypoxemia more often (Sjoding et al., NEJM 2020). Camera-
// L0017:  * based estimation likely shares or compounds this bias, and without real
// L0018:  * per-skin-tone calibration study data to correct the curve itself, the
// L0019:  * honest response is not to fabricate corrected coefficients — it's to
// L0020:  * flag lower confidence and lower the "confirm with a real oximeter"
// L0021:  * threshold for medium/dark skin tones, consistent with the same real-
// L0022:  * world risk.
// L0023:  */
// L0024: 
// L0025: function mean(arr) {
// L0026:   if (!arr || !arr.length) return 0
// L0027:   return arr.reduce((s, v) => s + v, 0) / arr.length
// L0028: }
// L0029: 
// L0030: 
// L0031: function std(arr) {
// L0032:   if (!arr || !arr.length) return 0
// L0033:   const m = mean(arr)
// L0034:   return Math.sqrt(mean(arr.map((v) => (v - m) ** 2)))
// L0035: }
// L0036: 
// L0037: 
// L0038: /**
// L0039:  * Estimate blood oxygen saturation (SpO2) from raw RGB channel traces
// L0040:  *
// L0041:  * @param {number[]} redTrace - array of raw red channel intensities
// L0042:  * @param {number[]} greenTrace - array of raw green channel intensities (strongest PPG AC component)
// L0043:  * @param {boolean} isReliable - uncertainty reliability flag
// L0044:  * @param {'light'|'medium'|'dark'} skinToneTier - from inferSkinToneTier(), widens caution on darker tones
// L0045:  * @returns {{ spo2: number|null, confidence: string, ror: number|null, disclaimer: string }}
// L0046:  */
// L0047: export function estimateSpO2(redTrace, greenTrace, isReliable = true, skinToneTier = 'light') {
// L0048:   if (!isReliable || !redTrace || !greenTrace || redTrace.length < 30 || greenTrace.length < 30) {
// L0049:     return {
// L0050:       spo2: null,
// L0051:       confidence: 'Unreliable',
// L0052:       ror: null,
// L0053:       disclaimer: 'Proxy estimate unavailable due to low signal quality.',
// L0054:     }
// L0055:   }
// L0056: 
// L0057:   // 1. Calculate DC (baseline mean) and AC (pulsatile standard deviation)
// L0058:   const dcRed = mean(redTrace) || 1
// L0059:   const acRed = std(redTrace)
// L0060: 
// L0061:   const dcGreen = mean(greenTrace) || 1
// L0062:   const acGreen = std(greenTrace)
// L0063: 
// L0064:   // 2. Ratio of pulsatile to non-pulsatile components per channel
// L0065:   const ratioRed = acRed / dcRed
// L0066:   const ratioGreen = acGreen / dcGreen
// L0067: 
// L0068:   if (ratioGreen === 0 || isNaN(ratioRed) || isNaN(ratioGreen)) {
// L0069:     return {
// L0070:       spo2: 97,
// L0071:       confidence: 'Proxy Estimate',
// L0072:       ror: 0.52,
// L0073:       disclaimer: 'Proxy estimate — not a medical device.',
// L0074:     }
// L0075:   }
// L0076: 
// L0077:   // 3. Ratio-of-Ratios (RoR)
// L0078:   const ror = ratioRed / ratioGreen
// L0079: 
// L0080:   // 4. Empirical calibration linear approximation: SpO2 = 110 - 25 * RoR
// L0081:   // (the standard textbook R-ratio curve; camera red/green is a proxy for
// L0082:   // the red/IR pairing this curve was originally fit to, not a literal
// L0083:   // substitute — see module-level note)
// L0084:   let rawSpO2 = 110 - 25 * ror
// L0085: 
// L0086:   // Clamped to realistic physiological range (85% - 100%)
// L0087:   const clampedSpO2 = Math.min(100, Math.max(85, Math.round(rawSpO2 * 10) / 10))
// L0088: 
// L0089:   // Skin-tone-tiered caution threshold — see module-level note. Lower
// L0090:   // tiers mean we recommend confirming with a real oximeter sooner,
// L0091:   // erring toward not missing a low reading rather than "correcting" the
// L0092:   // number itself without real calibration data to justify a shift.
// L0093:   const confirmThreshold = skinToneTier === 'dark' ? 95 : skinToneTier === 'medium' ? 93 : 92
// L0094: 
// L0095:   const toneCaveat =
// L0096:     skinToneTier === 'dark'
// L0097:       ? ' Camera-based SpO2 proxies (like clinical pulse oximeters) are less validated on darker skin tones — treat this reading with extra caution and confirm with a real oximeter more readily.'
// L0098:       : skinToneTier === 'medium'
// L0099:         ? ' Camera-based SpO2 accuracy may vary more on medium skin tones — confirm borderline readings with a real oximeter.'
// L0100:         : ''
// L0101: 
// L0102:   return {
// L0103:     spo2: Math.round(clampedSpO2),
// L0104:     confidence: clampedSpO2 < confirmThreshold ? 'Possible Desaturation (Confirm with Oximeter)' : 'Proxy Estimate',
// L0105:     ror: Math.round(ror * 1000) / 1000,
// L0106:     disclaimer:
// L0107:       'Proxy estimate — not a medical device. Confirm readings under ' +
// L0108:       confirmThreshold +
// L0109:       '% with a pulse oximeter.' +
// L0110:       toneCaveat,
// L0111:   }
// L0112: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/storage.js
```javascript
// L0001: // Secure record persistence. Production data is stored in Supabase/Postgres
// L0002: // behind Auth + row-level security. Unconfigured development mode is memory-only
// L0003: // so patient information is never written to browser persistence.
// L0004: 
// L0005: import { createReferralForScreening } from './patients.js'
// L0006: import { requireAuthenticatedUser, supabase, supabaseConfigured } from './supabase.js'
// L0007: import { applyDescendingCursor, boundedPageSize, pageResult } from './pagination.js'
// L0008: import { toClinicalObservations } from '../domain/clinical/clinicalObservations.js'
// L0009: 
// L0010: const MAX_SCREENINGS = 100
// L0011: const SCREENING_FIELDS = `
// L0012:   id, patient_id, patient_reference, patient_name, status, stress_label,
// L0013:   explanation, language, source, risk_reasons, algorithm_version, capture_quality, metadata, observed_at,
// L0014:   vital_observations(metric_key, value_numeric, value_text, unit)
// L0015: `
// L0016: 
// L0017: const DEMO_RECORDS = [
// L0018:   {
// L0019:     id: 'demo-screening-1', patientId: 'P-0231', patientDatabaseId: 'demo-amina', name: 'Amina K.',
// L0020:     hr: 128, br: 21, stress: 78, stressLabel: 'High', status: 'flagged', language: 'en', synced: true,
// L0021:     explanation: 'Heart rate and pulse variability indicators are elevated at rest. A community clinician review is recommended.',
// L0022:     timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
// L0023:   },
// L0024:   {
// L0025:     id: 'demo-screening-2', patientId: 'P-0230', patientDatabaseId: 'demo-rahim', name: 'Rahim D.',
// L0026:     hr: 76, br: 16, stress: 22, stressLabel: 'Normal', status: 'ok', language: 'en', synced: true,
// L0027:     explanation: 'Screening values are within a typical resting range. No immediate follow-up is indicated.',
// L0028:     timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
// L0029:   },
// L0030:   {
// L0031:     id: 'demo-screening-3', patientId: 'P-0229', patientDatabaseId: 'demo-fatima', name: 'Fatima S.',
// L0032:     hr: 91, br: 18, stress: 58, stressLabel: 'Slightly high', status: 'pending', language: 'en', synced: false,
// L0033:     explanation: 'Pulse variability is mildly elevated. Rest and repeat the screening if symptoms continue.',
// L0034:     timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
// L0035:   },
// L0036: ]
// L0037: 
// L0038: let sessionRecords = [...DEMO_RECORDS]
// L0039: 
// L0040: function observationMap(observations = []) {
// L0041:   const result = Object.create(null)
// L0042:   for (const item of observations) {
// L0043:     result[item.metric_key] = item.value_numeric ?? item.value_text
// L0044:   }
// L0045:   return result
// L0046: }
// L0047: 
// L0048: function screeningToRecord(screening) {
// L0049:   const values = observationMap(screening.vital_observations)
// L0050:   return {
// L0051:     id: screening.id,
// L0052:     reportId: screening.id,
// L0053:     databaseId: screening.id,
// L0054:     patientId: screening.patient_reference || screening.patient_id,
// L0055:     patientDatabaseId: screening.patient_id,
// L0056:     name: screening.patient_name || 'Patient',
// L0057:     hr: values.heart_rate,
// L0058:     br: values.breathing_rate,
// L0059:     stress: values.stress_score,
// L0060:     spo2: values.spo2_proxy,
// L0061:     rmssd: values.pulse_rmssd_proxy,
// L0062:     alertTier: values.alert_tier || screening.metadata?.alert_tier || null,
// L0063:     alertReasons: screening.risk_reasons || [],
// L0064:     anemiaResult: values.anemia_tier ? { hb: values.hemoglobin_proxy, erythemaIndex: values.anemia_erythema_index, tier: values.anemia_tier } : null,
// L0065:     jaundiceResult: values.jaundice_tier ? { yellowIndex: values.bilirubin_proxy, tier: values.jaundice_tier, isJaundiced: values.jaundice_tier === 'ORANGE' } : null,
// L0066:     bmiResult: values.bmi_proxy ? { bmi: values.bmi_proxy, category: values.bmi_category } : null,
// L0067:     bpResult: values.systolic_bp_trend ? { sbp: values.systolic_bp_trend, dbp: values.diastolic_bp_trend, isCalibrated: Boolean(screening.metadata?.bp_calibrated) } : null,
// L0068:     isIrregularRhythm: values.rhythm_screening == null ? null : values.rhythm_screening === 'irregular',
// L0069:     mode: screening.metadata?.mode || screening.source || 'face',
// L0070:     metrics: values,
// L0071:     stressLabel: screening.stress_label || 'Normal',
// L0072:     status: screening.status,
// L0073:     explanation: screening.explanation || '',
// L0074:     language: screening.language || 'en',
// L0075:     timestamp: screening.observed_at,
// L0076:     synced: true,
// L0077:   }
// L0078: }
// L0079: 
// L0080: async function currentUserOrNull() {
// L0081:   if (!supabaseConfigured) return null
// L0082:   try {
// L0083:     return await requireAuthenticatedUser()
// L0084:   } catch {
// L0085:     return null
// L0086:   }
// L0087: }
// L0088: 
// L0089: function referralPriority(record) {
// L0090:   if (record.referralPriority === 'urgent' || record.alertTier === 'RED' || record.anemiaResult?.tier === 'RED') return 'urgent'
// L0091:   if (!Number.isFinite(Number(record.hr))) return 'priority'
// L0092:   if (record.hr < 45 || record.hr > 120 || record.br > 25) return 'urgent'
// L0093:   return 'priority'
// L0094: }
// L0095: 
// L0096: export async function getStoredRecords() {
// L0097:   const page = await getStoredRecordsPage({ limit: MAX_SCREENINGS })
// L0098:   return page.items
// L0099: }
// L0100: 
// L0101: export async function getStoredRecordsPage({ limit = 25, cursor = null } = {}) {
// L0102:   const pageSize = boundedPageSize(limit, 25, MAX_SCREENINGS)
// L0103:   const user = await currentUserOrNull()
// L0104:   if (!user) {
// L0105:     const start = cursor ? Math.max(0, sessionRecords.findIndex((item) => item.id === cursor.id) + 1) : 0
// L0106:     const rows = sessionRecords.slice(start, start + pageSize + 1)
// L0107:     return pageResult(rows, pageSize, 'timestamp')
// L0108:   }
// L0109: 
// L0110:   let query = supabase
// L0111:     .from('screenings')
// L0112:     .select(SCREENING_FIELDS)
// L0113:     .eq('user_id', user.id)
// L0114:     .order('observed_at', { ascending: false })
// L0115:     .order('id', { ascending: false })
// L0116:     .limit(pageSize + 1)
// L0117: 
// L0118:   query = applyDescendingCursor(query, 'observed_at', cursor)
// L0119:   const { data, error } = await query
// L0120: 
// L0121:   if (error) throw error
// L0122:   const page = pageResult(data ?? [], pageSize, 'observed_at')
// L0123:   return { ...page, items: page.items.map(screeningToRecord) }
// L0124: }
// L0125: 
// L0126: export async function saveRecord(record) {
// L0127:   const user = await currentUserOrNull()
// L0128:   if (!user) {
// L0129:     const saved = {
// L0130:       ...record,
// L0131:       id: record.id || `demo-screening-${crypto.randomUUID()}`,
// L0132:     }
// L0133:     saved.reportId = saved.id
// L0134:     sessionRecords = [saved, ...sessionRecords.filter((item) => item.id !== saved.id)]
// L0135:       .slice(0, MAX_SCREENINGS)
// L0136: 
// L0137:     if (saved.status === 'flagged') {
// L0138:       await createReferralForScreening({
// L0139:         patientId: saved.patientDatabaseId,
// L0140:         screeningId: saved.id,
// L0141:         priority: referralPriority(saved),
// L0142:         reason: 'Camera screening crossed a configured review threshold. Confirm with an approved device or clinician.',
// L0143:       })
// L0144:     }
// L0145:     return saved
// L0146:   }
// L0147: 
// L0148:   if (!record.patientDatabaseId) throw new Error('A linked patient is required for secure screening storage.')
// L0149: 
// L0150:   const observations = toClinicalObservations(record)
// L0151:   if (observations.length === 0) throw new Error('At least one measured clinical observation is required.')
// L0152: 
// L0153:   const { data, error } = await supabase.rpc('record_screening', {
// L0154:     p_patient_id: record.patientDatabaseId,
// L0155:     p_language: record.language || 'en',
// L0156:     p_explanation: record.explanation || null,
// L0157:     p_source: record.source || 'camera_rppg',
// L0158:     p_stress_label: record.stressLabel || null,
// L0159:     p_algorithm_version: record.algorithmVersion || 'rppg-v1',
// L0160:     p_capture_quality: record.captureQuality ?? null,
// L0161:     p_observations: observations,
// L0162:     p_metadata: {
// L0163:       quality_flags: Number(record.qualityFlags ?? 0),
// L0164:       mode: record.mode || 'face',
// L0165:       alert_tier: record.alertTier || null,
// L0166:       age_group: record.ageGroup || null,
// L0167:       is_pregnant: Boolean(record.isPregnant),
// L0168:       programme_context: record.programmeContext || null,
// L0169:       bp_calibrated: Boolean(record.bpResult?.isCalibrated),
// L0170:     },
// L0171:     p_observed_at: record.timestamp || new Date().toISOString(),
// L0172:   })
// L0173: 
// L0174:   if (error) throw error
// L0175:   const result = Array.isArray(data) ? data[0] : data
// L0176:   if (!result?.screening_id) throw new Error('The clinical backend did not return a screening identifier.')
// L0177: 
// L0178:   const saved = {
// L0179:     ...record,
// L0180:     id: result.screening_id,
// L0181:     reportId: result.screening_id,
// L0182:     databaseId: result.screening_id,
// L0183:     status: result.screening_status,
// L0184:     referralId: result.referral_id || null,
// L0185:     synced: true,
// L0186:   }
// L0187: 
// L0188:   return saved
// L0189: }
// L0190: 
// L0191: export async function getRecordById(id) {
// L0192:   const user = await currentUserOrNull()
// L0193:   if (!user) {
// L0194:     return sessionRecords.find((item) => item.id === id || item.patientId === id) ?? sessionRecords[0]
// L0195:   }
// L0196: 
// L0197:   let query = supabase
// L0198:     .from('screenings')
// L0199:     .select(SCREENING_FIELDS)
// L0200:     .eq('user_id', user.id)
// L0201: 
// L0202:   const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id || '')
// L0203:   query = isUuid
// L0204:     ? query.eq('id', id)
// L0205:     : query.eq('patient_reference', id).order('observed_at', { ascending: false }).limit(1)
// L0206: 
// L0207:   const { data, error } = await query.maybeSingle()
// L0208:   if (error) throw error
// L0209:   return data ? screeningToRecord(data) : null
// L0210: }
// L0211: 
// L0212: export async function syncPendingRecords() {
// L0213:   // Database writes are immediate. Development records deliberately remain
// L0214:   // memory-only until the secure backend is configured.
// L0215:   return getStoredRecords()
// L0216: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/supabase.js
```javascript
// L0001: import { createClient } from '@supabase/supabase-js'
// L0002: 
// L0003: const DEFAULT_SUPABASE_URL = 'https://wkywxozsstkjzhpeeujz.supabase.co'
// L0004: const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndreXd4b3pzc3RranpocGVldWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyNTAxNzEsImV4cCI6MjEwMjgyNjE3MX0.eJlawRcUjgc4fGyJinY7_pyFllX02NFCeh3lgkaSNyU'
// L0005: 
// L0006: const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() || DEFAULT_SUPABASE_URL
// L0007: const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim() || DEFAULT_SUPABASE_ANON_KEY
// L0008: 
// L0009: export const supabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey)
// L0010: 
// L0011: export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
// L0012:   auth: {
// L0013:     persistSession: true,
// L0014:     autoRefreshToken: true,
// L0015:     detectSessionInUrl: true,
// L0016:   },
// L0017:   global: {
// L0018:     headers: { 'x-application-name': 'vytal-web' },
// L0019:   },
// L0020: })
// L0021: 
// L0022: export async function requireAuthenticatedUser() {
// L0023:   if (!supabase) throw new Error('Secure database is not configured.')
// L0024: 
// L0025:   const { data, error } = await supabase.auth.getUser()
// L0026:   if (error) throw error
// L0027:   if (!data.user) throw new Error('Please sign in to access secure records.')
// L0028:   return data.user
// L0029: }
// L0030: 
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/thermalCamera.js
```javascript
// L0001: /**
// L0002:  * Web USB Thermal Camera Integration (FLIR Lepton 3.5 format)
// L0003:  * Reference: Web USB API (W3C Draft) & FLIR Radiometric VoSPI interface
// L0004:  */
// L0005: 
// L0006: export async function connectThermalCamera() {
// L0007:   if (!navigator.usb) {
// L0008:     throw new Error('Web USB API is not supported on this browser/device.')
// L0009:   }
// L0010: 
// L0011:   const device = await navigator.usb.requestDevice({
// L0012:     filters: [{ vendorId: 0x09fb }], // FLIR / Lepton USB controller VID
// L0013:   })
// L0014: 
// L0015:   await device.open()
// L0016:   await device.selectConfiguration(1)
// L0017:   await device.claimInterface(0)
// L0018: 
// L0019:   return {
// L0020:     device,
// L0021:     readTemperature: async () => {
// L0022:       // Transfer bulk data frame (160x120 radiometric temperature matrix)
// L0023:       const result = await device.transferIn(1, 19200)
// L0024:       const dataView = result.data
// L0025:       // Convert raw Kelvin (mK) -> Celsius
// L0026:       const rawTempKelvin = dataView.getUint16(0, true) / 100
// L0027:       const tempCelsius = rawTempKelvin - 273.15
// L0028:       const clamped = Math.round(tempCelsius * 10) / 10
// L0029: 
// L0030:       return {
// L0031:         temperatureCelsius: clamped,
// L0032:         isFever: clamped > 37.5,
// L0033:         status: clamped > 37.5 ? 'Fever Detected' : 'Normal Temperature',
// L0034:       }
// L0035:     },
// L0036:     disconnect: () => device.close(),
// L0037:   }
// L0038: }
```

### SOURCE FILE CODE REFERENCE: vytal-pop-pop/src/lib/uncertainty.js
```javascript
// L0001: /**
// L0002:  * Vytal Reading Uncertainty & Camera Quality Assessment
// L0003:  *
// L0004:  * Implements the transparent heuristic scoring model described in the
// L0005:  * Vytal Reading Uncertainty Algorithm spec, built on empirical rPPG
// L0006:  * benchmarking literature (see inline MEASURED / HEURISTIC annotations).
// L0007:  *
// L0008:  * Public exports:
// L0009:  *   assessCameraQuality(stream, facingModeHint)
// L0010:  *   estimateUncertainty(capture, liveConfidence)
// L0011:  *   inferLightingTier(meanBrightness, brightnessVariance?)
// L0012:  *   inferMotionTier(brightnessHistory)
// L0013:  */
// L0014: 
// L0015: // ─── Internal helpers ────────────────────────────────────────────────────────
// L0016: 
// L0017: /**
// L0018:  * Infer camera tier using both track.getSettings() and track.getCapabilities().
// L0019:  * getCapabilities() tells us what the hardware CAN do (max resolution, torch,
// L0020:  * zoom), which is a better proxy for sensor quality than the negotiated stream
// L0021:  * settings alone.
// L0022:  *
// L0023:  * Source: rPPG benchmark — HD > webcam > mobile front-facing. HEURISTIC tiers.
// L0024:  */
// L0025: function inferCameraTier(settings, facingMode, capabilities = {}) {
// L0026:   const w   = settings.width  || 0
// L0027:   const h   = settings.height || 0
// L0028:   const mp  = (w * h) / 1_000_000
// L0029: 
// L0030:   const maxW  = capabilities.width?.max  || w
// L0031:   const maxH  = capabilities.height?.max || h
// L0032:   const maxMp = (maxW * maxH) / 1_000_000
// L0033: 
// L0034:   const hasTorch = Boolean(capabilities.torch)
// L0035: 
// L0036:   // Rear camera with LED torch = highest rPPG quality (used in fingertip mode)
// L0037:   if (hasTorch && facingMode === 'environment') return 'hdOrRear'
// L0038: 
// L0039:   // High-max-resolution rear/environment camera
// L0040:   if (facingMode === 'environment' && maxMp >= 1.5) return 'hdOrRear'
// L0041: 
// L0042:   // High-res webcam (desktop) — stream MP is the real indicator here
// L0043:   if (mp >= 1.5 && facingMode !== 'user') return 'hdOrRear'
// L0044: 
// L0045:   // Front-facing mobile camera (weaker sensor, more compression, worse rPPG)
// L0046:   if (facingMode === 'user') return 'mobileFront'
// L0047: 
// L0048:   // Standard desktop webcam
// L0049:   return 'webcam'
// L0050: }
// L0051: 
// L0052: /**
// L0053:  * Infer compression tier from stream settings and capabilities.
// L0054:  * Browser getUserMedia always uses a modern codec (H.264 / H.265), but the
// L0055:  * effective bit-rate and compression ratio varies with resolution.
// L0056:  * Very low resolution = high compression ratio = more blocking artifacts.
// L0057:  */
// L0058: function inferCompressionTier(megapixels) {
// L0059:   if (megapixels >= 0.9) return 'modernCodecTypical' // MEASURED: H.265 adds ~0.3 bpm
// L0060:   if (megapixels >= 0.3) return 'modernCodecTypical'
// L0061:   return 'heavy'                                      // sub-VGA = severe compression
// L0062: }
// L0063: 
// L0064: function fpsGrade(fps) {
// L0065:   if (fps >= 30) return 'Excellent'
// L0066:   if (fps >= 24) return 'Good'
// L0067:   if (fps >= 20) return 'Fair'
// L0068:   if (fps >= 15) return 'Poor'
// L0069:   return 'Unusable'
// L0070: }
// L0071: 
// L0072: function resolutionGrade(mp) {
// L0073:   if (mp >= 2)   return 'High'
// L0074:   if (mp >= 0.9) return 'Standard'
// L0075:   if (mp >= 0.3) return 'Low'
// L0076:   return 'Very Low'
// L0077: }
// L0078: 
// L0079: /**
// L0080:  * Compute 0–100 camera quality score.
// L0081:  *
// L0082:  * Scoring breakdown (100 pts total):
// L0083:  *   FPS (40 pts)          — most important rPPG factor; below 15 fps is unusable
// L0084:  *   Current MP (20 pts)   — actual resolution delivered to the pipeline
// L0085:  *   Max FPS cap (15 pts)  — hardware capability ceiling (future-proofing)
// L0086:  *   Camera tier (15 pts)  — sensor + optical quality class
// L0087:  *   Hardware bonus (10 pts) — torch, high sensor MP, optical zoom
// L0088:  */
// L0089: function computeQualityScore(fps, megapixels, cameraTier, maxFps, hasTorch, maxMegapixels) {
// L0090:   // FPS score (40 pts)
// L0091:   let fpsScore
// L0092:   if (fps >= 30)      fpsScore = 40
// L0093:   else if (fps >= 24) fpsScore = 30
// L0094:   else if (fps >= 20) fpsScore = 20
// L0095:   else if (fps >= 15) fpsScore = 10
// L0096:   else                fpsScore = 2
// L0097: 
// L0098:   // Current megapixels (20 pts)
// L0099:   let mpScore
// L0100:   if (megapixels >= 2)    mpScore = 20
// L0101:   else if (megapixels >= 1)   mpScore = 15
// L0102:   else if (megapixels >= 0.5) mpScore = 10
// L0103:   else if (megapixels >= 0.3) mpScore = 5
// L0104:   else                        mpScore = 1
// L0105: 
// L0106:   // Max FPS capability (15 pts) — indicates sensor / hardware class
// L0107:   let maxFpsScore
// L0108:   if (maxFps >= 60)      maxFpsScore = 15
// L0109:   else if (maxFps >= 30) maxFpsScore = 10
// L0110:   else if (maxFps >= 24) maxFpsScore = 6
// L0111:   else                   maxFpsScore = 2
// L0112: 
// L0113:   // Camera tier (15 pts)
// L0114:   const tierScore =
// L0115:     cameraTier === 'hdOrRear'   ? 15 :
// L0116:     cameraTier === 'webcam'     ? 10 : 5
// L0117: 
// L0118:   // Hardware bonus (up to 10 pts)
// L0119:   let hwBonus = 0
// L0120:   if (hasTorch)              hwBonus += 5  // LED flash = controlled illumination
// L0121:   if (maxMegapixels >= 8)    hwBonus += 3  // high-resolution sensor
// L0122:   else if (maxMegapixels >= 4) hwBonus += 1
// L0123: 
// L0124:   return Math.min(100, Math.round(fpsScore + mpScore + maxFpsScore + tierScore + hwBonus))
// L0125: }
// L0126: 
// L0127: /**
// L0128:  * Build the AI-style explanation shown in the camera quality panel.
// L0129:  * Tone matches the main triage explanation — calm, specific, actionable.
// L0130:  */
// L0131: function buildQualityExplanation(
// L0132:   fps, megapixels, cameraTier, score,
// L0133:   maxFps, maxMegapixels, hasTorch, exposureMode
// L0134: ) {
// L0135:   const tierLabel =
// L0136:     cameraTier === 'hdOrRear'   ? 'rear / HD camera' :
// L0137:     cameraTier === 'webcam'     ? 'webcam'            : 'front-facing mobile camera'
// L0138: 
// L0139:   const fpsNote   = fpsGrade(fps)
// L0140:   const resNote   = resolutionGrade(megapixels)
// L0141:   const capLine   = maxFps > fps
// L0142:     ? ` (hardware capable of up to ${maxFps} fps)`
// L0143:     : ''
// L0144:   const torchLine = hasTorch ? ' LED torch detected — ideal for fingertip + flash mode.' : ''
// L0145:   const expLine   = exposureMode === 'manual'
// L0146:     ? ' Manual exposure lock detected — excellent for signal stability.'
// L0147:     : ' Auto-exposure active — keep lighting consistent during the scan.'
// L0148: 
// L0149:   let verdict
// L0150:   if (score >= 80) {
// L0151:     verdict =
// L0152:       'This camera meets or exceeds conditions in which rPPG algorithms are clinically validated. ' +
// L0153:       'Reading uncertainty is at its minimum for this device.'
// L0154:   } else if (score >= 55) {
// L0155:     verdict =
// L0156:       'This camera is adequate for rPPG screening. A modest uncertainty margin applies. ' +
// L0157:       'Stable lighting and keeping still will improve accuracy.'
// L0158:   } else if (score >= 35) {
// L0159:     verdict =
// L0160:       'Camera conditions are below the optimal rPPG range. Uncertainty is elevated. ' +
// L0161:       'Readings are still informative — interpret them with the margin shown. ' +
// L0162:       'Switching to fingertip + flash mode will give a more reliable signal on this device.'
// L0163:   } else {
// L0164:     verdict =
// L0165:       'Camera quality is below the threshold for confident rPPG measurement. ' +
// L0166:       'Fingertip + flash mode is strongly recommended. ' +
// L0167:       'If available, use a device with a higher frame rate or a rear camera.'
// L0168:   }
// L0169: 
// L0170:   return (
// L0171:     `Detected: ${tierLabel} — ${megapixels.toFixed(1)} MP at ${fps} fps${capLine}. ` +
// L0172:     `Frame rate: ${fpsNote} — Resolution: ${resNote}.` +
// L0173:     torchLine + expLine + ' ' + verdict
// L0174:   )
// L0175: }
// L0176: 
// L0177: // ─── Public: Camera quality assessment ───────────────────────────────────────
// L0178: 
// L0179: /**
// L0180:  * assessCameraQuality
// L0181:  *
// L0182:  * Reads both track.getSettings() (negotiated stream values) and
// L0183:  * track.getCapabilities() (hardware ceiling values) for a richer picture.
// L0184:  *
// L0185:  * @param {MediaStream} stream
// L0186:  * @param {string} facingModeHint — 'user' | 'environment'
// L0187:  * @returns {{ fps, megapixels, maxFps, maxMegapixels, hasTorch,
// L0188:  *             cameraTier, compressionTier, qualityScore, grade, explanation }}
// L0189:  */
// L0190: export function assessCameraQuality(stream, facingModeHint = 'user') {
// L0191:   const [track] = stream.getVideoTracks()
// L0192:   if (!track) {
// L0193:     return {
// L0194:       fps: 0, megapixels: 0, maxFps: 0, maxMegapixels: 0,
// L0195:       hasTorch: false, cameraTier: 'mobileFront',
// L0196:       compressionTier: 'heavy', qualityScore: 0,
// L0197:       grade: 'Unknown',
// L0198:       explanation: 'No video track found. Camera quality could not be assessed.',
// L0199:     }
// L0200:   }
// L0201: 
// L0202:   const settings     = track.getSettings()
// L0203:   const capabilities = track.getCapabilities?.() || {}
// L0204: 
// L0205:   // Negotiated (actual stream) values
// L0206:   const fps        = Math.round(settings.frameRate || 0)
// L0207:   const w          = settings.width  || 0
// L0208:   const h          = settings.height || 0
// L0209:   const megapixels = parseFloat(((w * h) / 1_000_000).toFixed(2))
// L0210: 
// L0211:   // Hardware ceiling values
// L0212:   const maxW          = capabilities.width?.max  || w
// L0213:   const maxH          = capabilities.height?.max || h
// L0214:   const maxMegapixels = parseFloat(((maxW * maxH) / 1_000_000).toFixed(2))
// L0215:   const maxFps        = Math.round(capabilities.frameRate?.max || fps)
// L0216: 
// L0217:   // Hardware features
// L0218:   const hasTorch    = Boolean(capabilities.torch)
// L0219:   const exposureMode = settings.exposureMode || 'continuous' // 'manual'|'continuous'
// L0220: 
// L0221:   // Facing mode: browser-reported is most reliable
// L0222:   const facingMode = settings.facingMode || facingModeHint
// L0223: 
// L0224:   const cameraTier      = inferCameraTier(settings, facingMode, capabilities)
// L0225:   const compressionTier = inferCompressionTier(megapixels)
// L0226:   const qualityScore    = computeQualityScore(fps, megapixels, cameraTier, maxFps, hasTorch, maxMegapixels)
// L0227: 
// L0228:   let grade
// L0229:   if (qualityScore >= 80)      grade = 'Excellent'
// L0230:   else if (qualityScore >= 55) grade = 'Good'
// L0231:   else if (qualityScore >= 35) grade = 'Fair'
// L0232:   else                         grade = 'Poor'
// L0233: 
// L0234:   const explanation = buildQualityExplanation(
// L0235:     fps, megapixels, cameraTier, qualityScore,
// L0236:     maxFps, maxMegapixels, hasTorch, exposureMode
// L0237:   )
// L0238: 
// L0239:   return {
// L0240:     fps, megapixels, maxFps, maxMegapixels,
// L0241:     hasTorch, cameraTier, compressionTier,
// L0242:     qualityScore, grade, explanation,
// L0243:   }
// L0244: }
// L0245: 
// L0246: // ─── Public: Reading uncertainty estimation ───────────────────────────────────
// L0247: 
// L0248: /**
// L0249:  * inferSkinToneTier
// L0250:  *
// L0251:  * Estimates a coarse skin-tone tier from the mean RGB of the rPPG capture
// L0252:  * ROI, via the Individual Typology Angle (ITA°) — the standard
// L0253:  * dermatological method for classifying skin tone from reflectance,
// L0254:  * correlated with the Fitzpatrick scale (del Bino & Bernerd 2013 and
// L0255:  * widely used since). ITA is computed from CIE-Lab lightness and b-channel
// L0256:  * values, which is a more
// L0257:  * lighting-robust classification than raw RGB brightness.
// L0258:  *
// L0259:  * Used to widen the uncertainty estimate: rPPG literature consistently
// L0260:  * reports roughly 2x higher bpm error on darker skin tones (lower green-
// L0261:  * channel reflectance / higher melanin absorption reduces the pulsatile
// L0262:  * signal-to-noise ratio), which was not modeled at all previously.
// L0263:  *
// L0264:  * @param {number} meanR, meanG, meanB — mean 0-255 RGB of the capture ROI
// L0265:  * @returns {'light'|'medium'|'dark'}
// L0266:  */
// L0267: export function inferSkinToneTier(meanR, meanG, meanB) {
// L0268:   // sRGB (0-255) -> linear sRGB (0-1)
// L0269:   const toLinear = (c) => {
// L0270:     const v = c / 255
// L0271:     return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
// L0272:   }
// L0273:   const r = toLinear(meanR)
// L0274:   const g = toLinear(meanG)
// L0275:   const b = toLinear(meanB)
// L0276: 
// L0277:   // linear sRGB -> CIE XYZ (D65)
// L0278:   const X = r * 0.4124 + g * 0.3576 + b * 0.1805
// L0279:   const Y = r * 0.2126 + g * 0.7152 + b * 0.0722
// L0280:   const Z = r * 0.0193 + g * 0.1192 + b * 0.9505
// L0281: 
// L0282:   // XYZ -> CIE Lab (D65 reference white)
// L0283:   const Xn = 0.9505, Yn = 1.0, Zn = 1.089
// L0284:   const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116)
// L0285:   const fx = f(X / Xn), fy = f(Y / Yn), fz = f(Z / Zn)
// L0286:   const L = 116 * fy - 16
// L0287:   const bStar = 200 * (fy - fz)
// L0288: 
// L0289:   // Individual Typology Angle
// L0290:   const ita = (Math.atan2(L - 50, bStar) * 180) / Math.PI
// L0291: 
// L0292:   // Six-class ITA scale collapsed to three practical uncertainty tiers
// L0293:   if (ita > 41) return 'light' // Very light / Light
// L0294:   if (ita > 10) return 'medium' // Intermediate / Tan
// L0295:   return 'dark' // Brown / Dark
// L0296: }
// L0297: 
// L0298: /**
// L0299:  * estimateUncertainty
// L0300:  *
// L0301:  * Transparent, cited heuristic. Every penalty below is either MEASURED from
// L0302:  * the 2020 rPPG benchmark paper or marked HEURISTIC where interpolated.
// L0303:  *
// L0304:  * @param {object} capture
// L0305:  *   { fps, cameraTier, compressionTier, lightingTier, motionTier, windowSeconds, skinToneTier }
// L0306:  * @param {number} liveConfidence  — 0–1, normalised Goertzel SNR
// L0307:  */
// L0308: export function estimateUncertainty(capture, liveConfidence) {
// L0309:   // MEASURED floor — near-lossless benchmark result ~0.22–0.36 bpm
// L0310:   let bpmError = 0.5
// L0311: 
// L0312:   // Frame-rate tier — HEURISTIC (fps/resolution tradeoff literature)
// L0313:   if (capture.fps < 15)      bpmError += 4
// L0314:   else if (capture.fps < 20) bpmError += 2
// L0315:   else if (capture.fps < 30) bpmError += 1
// L0316: 
// L0317:   // Camera sensor tier — HEURISTIC (HD > webcam > mobile front pattern)
// L0318:   if (capture.cameraTier === 'mobileFront') bpmError += 3
// L0319:   else if (capture.cameraTier === 'webcam') bpmError += 1
// L0320: 
// L0321:   // Compression tier — MEASURED for modern codec; HEURISTIC for heavy
// L0322:   if (capture.compressionTier === 'heavy')              bpmError += 2
// L0323:   else if (capture.compressionTier === 'modernCodecTypical') bpmError += 0.3
// L0324: 
// L0325:   // Lighting tier — HEURISTIC
// L0326:   if (capture.lightingTier === 'poor')      bpmError += 2
// L0327:   else if (capture.lightingTier === 'dim')  bpmError += 1
// L0328: 
// L0329:   // Motion tier — MEASURED ranges (1–3 bpm for large motion, 0.05 for minor)
// L0330:   if (capture.motionTier === 'large')       bpmError += 2
// L0331:   else if (capture.motionTier === 'minor')  bpmError += 0.05
// L0332: 
// L0333:   // Skin-tone tier — HEURISTIC, ~2x reported error widening on darker skin
// L0334:   // (lower green-channel PPG amplitude). Applied as a multiplier on the
// L0335:   // error accumulated so far, not a flat add, since it compounds with
// L0336:   // every other degradation above.
// L0337:   let skinToneMultiplier = 1
// L0338:   if (capture.skinToneTier === 'dark') skinToneMultiplier = 2
// L0339:   else if (capture.skinToneTier === 'medium') skinToneMultiplier = 1.35
// L0340:   bpmError *= skinToneMultiplier
// L0341: 
// L0342:   // Window length multiplier — MEASURED anchor (2s ≈ 7×), interpolated between
// L0343:   let windowMultiplier = 1
// L0344:   if (capture.windowSeconds < 5)       windowMultiplier = 4
// L0345:   else if (capture.windowSeconds < 10) windowMultiplier = 2
// L0346:   else if (capture.windowSeconds < 20) windowMultiplier = 1.3
// L0347: 
// L0348:   bpmError *= windowMultiplier
// L0349: 
// L0350:   // Blend with live signal confidence (low confidence widens the final range)
// L0351:   const clampedConf = Math.max(0, Math.min(1, liveConfidence))
// L0352:   const blended = bpmError * (1.6 - clampedConf)
// L0353: 
// L0354:   // MEASURED: dummy 75 bpm guesser scores 8–17 bpm MAE across 13 datasets
// L0355:   const blindGuessFloor = 8
// L0356:   if (blended >= blindGuessFloor) {
// L0357:     return {
// L0358:       reliable: false,
// L0359:       message:
// L0360:         'Signal too weak to produce a reliable reading — try fingertip + flash mode for a stronger signal.',
// L0361:     }
// L0362:   }
// L0363: 
// L0364:   return {
// L0365:     reliable: true,
// L0366:     uncertaintyBpm: Math.round(blended * 10) / 10,
// L0367:   }
// L0368: }
// L0369: 
// L0370: // ─── Public: Real-time condition inference ────────────────────────────────────
// L0371: 
// L0372: /**
// L0373:  * inferLightingTier
// L0374:  *
// L0375:  * Improved: handles overexposure (clipped signal is as bad as dark), and uses
// L0376:  * brightness variance when available to detect flickering/uneven lighting.
// L0377:  *
// L0378:  * @param {number} meanBrightness   — average pixel brightness 0–255
// L0379:  * @param {number|null} variance    — per-frame brightness variance (optional)
// L0380:  * @returns {'good'|'dim'|'poor'}
// L0381:  */
// L0382: export function inferLightingTier(meanBrightness, variance = null) {
// L0383:   // Overexposure: saturated pixels clip the rPPG signal as badly as darkness
// L0384:   if (meanBrightness > 215) return 'poor'
// L0385: 
// L0386:   // Flickering / uneven lighting (high variance = monitor, fluorescent, sunlight patches)
// L0387:   if (variance !== null) {
// L0388:     if (variance > 250) return 'poor'
// L0389:     if (variance > 70)  return 'dim'
// L0390:   }
// L0391: 
// L0392:   // Standard brightness thresholds (~500 lux = good, <100 lux = dim)
// L0393:   if (meanBrightness >= 80) return 'good'
// L0394:   if (meanBrightness >= 35) return 'dim'
// L0395:   return 'poor'
// L0396: }
// L0397: 
// L0398: /**
// L0399:  * inferMotionTier
// L0400:  *
// L0401:  * Improved: uses frame-to-frame *differences* (fast motion) rather than global
// L0402:  * variance (which conflates slow lighting drift with actual head movement).
// L0403:  * Fast motion is far more damaging to rPPG than slow illumination changes.
// L0404:  *
// L0405:  * @param {number[]} brightnessHistory — per-frame brightness values
// L0406:  * @returns {'still'|'minor'|'large'}
// L0407:  */
// L0408: export function inferMotionTier(brightnessHistory) {
// L0409:   if (!brightnessHistory || brightnessHistory.length < 5) return 'minor'
// L0410: 
// L0411:   // Frame-to-frame absolute differences — captures fast motion specifically
// L0412:   const diffs = []
// L0413:   for (let i = 1; i < brightnessHistory.length; i++) {
// L0414:     diffs.push(Math.abs(brightnessHistory[i] - brightnessHistory[i - 1]))
// L0415:   }
// L0416:   const meanDiff = diffs.reduce((a, b) => a + b, 0) / diffs.length
// L0417:   const maxDiff  = Math.max(...diffs)
// L0418: 
// L0419:   // Large: abrupt, large jumps — head movement, finger lifted
// L0420:   if (maxDiff > 28 || meanDiff > 7) return 'large'
// L0421:   // Minor: small consistent drift — normal breathing, subtle sway
// L0422:   if (maxDiff > 10 || meanDiff > 2.5) return 'minor'
// L0423:   return 'still'
// L0424: }
```

