---
name: vytal-backend-clinical-engine
description: Signal processing, rPPG (CHROM/POS), AFib, SpO2, PTT BP, Anemia, Jaundice, and WHO BMI calculations for liaba (Backend Engineer)
version: 1.0.0
---

# Vytal Backend Clinical Processing Skill

## Role & Scope
- **Agent:** `liaba` (Backend Engineer / Waker `b0c1f3854139`)
- **Focus:** `src/lib/*` biometric signal pipeline, Goertzel FFT, rPPG, AFib Poincaré maps, SpO2 ratio-of-ratios, PTT BP, and FHIR R4 exports.

## Core Capabilities
1. **rPPG Facial Signal Extraction (`src/lib/rppg.js`):** CHROM (3R-2G) and POS algorithms with 4th-order Butterworth bandpass filtering (0.7-4.0 Hz).
2. **AFib / Arrhythmia (`src/lib/afib.js`):** Poincaré maps, CV_RR > 0.18 and RMSSD > 45ms thresholding.
3. **Oxygen Saturation (`src/lib/spo2.js`):** Red/Green ratio calibration with hypoxia alerts (<90% RED).
4. **Blood Pressure PTT (`src/lib/bloodPressurePTT.js`):** Crest time delta mapping.
5. **Palpebral Conjunctiva Anemia (`src/lib/anemia.js`):** Erythema Index EI = R / (G+B) and Hb formula.
6. **Scleral Icterus Jaundice (`src/lib/jaundice.js`):** Yellow Sclera Index balancing.
7. **WHO BMI & Anthropometrics (`src/lib/bmiEstimate.js`):** Facial shoulder width ratio.
8. **Closed-Loop QA Handoff:** Pass modifications to `Ahmad ALI` (QA) for synthetic vector validation before release.
