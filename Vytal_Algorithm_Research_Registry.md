# Algorithm & Research Registry — Vytal Swarm Master Reference

**Project:** Vytal — Camera-Based Vitals Screening & AI Triage Platform (Bano Qabil × Alibaba Cloud AI Hackathon 2026)  
**Scope:** Citation-backed registry of every algorithm, signal-processing technique, clinical metric, and hardware/API integration across the Vytal system. Serves as the central ground-truth reference for all 10 agent roles in the Qoder Autonomous Swarm.

---

## Provenance & Operational Rules

1. **Source Material:** `README.md`, 10 `Vytal_Brief_*.md` role specifications, `src/lib/*.js` clinical engines, and `idea/Vytal_Research_Dossier/`.
2. **Verification Workflow:** Every `[VERIFY]` item is a mandatory pre-flight checklist task for the assigned agent before code in `src/lib/` or public release claims are marked trustworthy.
3. **Tags:**
   - `[SELF-CHECKABLE]`: Verifiable from repository structure or text without external execution.
   - `[VERIFY]`: Cited finding from peer-reviewed literature requiring code validation.
   - `[SCOPE]`: Labeling, framing, or regulatory boundary decision requiring Product Manager sign-off.

---

## Section 0. Repository Access & Infrastructure `[SELF-CHECKABLE]`

- **Item 0: Public Repository Access (`github.com/Ahmad-Ali-Shah/Vital`)**
  - *Status:* `[VERIFY]`
  - *Check:* Ensure repository visibility is set to Public prior to hackathon evaluation deadline. Verify clone URI and build pipelines against Alibaba Cloud release gates.
  - *Owner:* Project Administrator & DevOps Engineer (`f37c976fa739`).

---

## Group A — Core rPPG Capture (`rppg.js`, `ScanPage.jsx`)

- **Item 1: CHROM Chrominance-Based rPPG Extraction** `[VERIFY]`
  - *Research:* de Haan, G. & Jeanne, V. (2013). "Robust Pulse Rate From Chrominance-Based rPPG." *IEEE Transactions on Biomedical Engineering*, 60(10), 2878–2886. DOI: 10.1109/TBME.2013.2266196. PubMed: [23744659](https://pubmed.ncbi.nlm.nih.gov/23744659/).
  - *Check:* Validated 92% agreement with contact PPG on 117 subjects. Literature notes elevated error under darker skin tones (Fitzpatrick IV–VI) or low light (<150 lux).
  - *Task:* Enforce explicit skin-tone and ambient illuminance confidence disclaimers in `uncertainty.js`.
  - *Owner:* Backend Engineer (`b0c1f3854139`) & Data Analyst (`cf0c0821d3e7`).

- **Item 2: Goertzel Single-Bin Frequency Detection** `[VERIFY]`
  - *Research:* Goertzel, G. (1958). "An Algorithm for the Evaluation of Finite Trigonometric Series." *The American Mathematical Monthly*, 65(1), 34–35. DOI: 10.2307/2310304.
  - *Check:* Goertzel evaluates specific DFT bins efficiently ($O(N)$ vs $O(N \log N)$).
  - *Task:* Ensure `rppg.js` constrains search window strictly to human physiological limits (0.7 Hz – 3.0 Hz, corresponding to 42–180 BPM) to prevent locking onto ambient 50/60 Hz light flicker or head micro-tremors.
  - *Owner:* Backend Engineer (`b0c1f3854139`).

- **Item 3: MediaPipe Task Choice for Face ROI Tracking** `[VERIFY]`
  - *Research:* Google AI Edge — MediaPipe Face Landmarker Solution (478 3D landmarks). [Documentation](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker/web_js).
  - *Check:* Plain Face Detector supplies only a 2D bounding box. Face Landmarker provides 478 3D points enabling precise cheek/forehead oval ROI segmentation.
  - *Task:* Verify `ScanPage.jsx` uses `FaceLandmarker` rather than 2D `FaceDetector` to avoid ROI drift during micro-movements.
  - *Owner:* Frontend Engineer (`cff36e25cd5e`) & Backend Engineer (`b0c1f3854139`).

- **Item 4: Green-Channel Dominance in rPPG** `[VERIFY]`
  - *Research:* Verkruysse, W., Svaasand, L.O., & Nelson, J.S. (2008). "Remote plethysmographic imaging using ambient light." *Optics Express*, 16(26), 21434–21445. DOI: 10.1364/OE.16.021434. PubMed: [19104573](https://pubmed.ncbi.nlm.nih.gov/19104573/).
  - *Check:* Established green light (520–570 nm) carries strongest pulsatile signal due to peak absorption of oxygenated hemoglobin ($HbO_2$).
  - *Task:* Cross-reference green-channel AC/DC extraction with red/blue channels for dual-ratio estimation.
  - *Owner:* Backend Engineer (`b0c1f3854139`).

---

## Group B — Non-Invasive Hemodynamic Proxies (`spo2.js`, `anemia.js`, `jaundice.js`)

- **Item 5: Ratio-of-Ratios (RoR) Channel Selection for SpO2** `[SELF-CHECKABLE + VERIFY]`
  - *Research:* Ding, X. et al. (2023). *Sensors*, 23(2), 737. PMC: [PMC9863359](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9863359/). Tian, X. et al. (2021). [arXiv:2107.08528](https://arxiv.org/pdf/2107.08528).
  - *Check:* Literature pairs Red (660 nm) with Green (520 nm) for smartphone ambient SpO2 due to camera Bayer pattern noise on Blue.
  - *Task:* Check `spo2.js`: confirm whether Red/Green or Red/Blue ratio is implemented. Align code comments and research dossier.
  - *Owner:* Backend Engineer (`b0c1f3854139`) & Data Analyst (`cf0c0821d3e7`).

- **Item 6: RoR → SpO2% Empirical Calibration Curve** `[VERIFY]`
  - *Check:* $SpO_2\% = A - B \cdot R$ requires empirical calibration against CO-oximeter references ($A \approx 110, B \approx 25$).
  - *Task:* Trace calibration coefficients in `spo2.js` to empirical clinical trial data in the research dossier.
  - *Owner:* Backend Engineer (`b0c1f3854139`) & Data Analyst (`cf0c0821d3e7`).

- **Item 13: Conjunctival Pallor → Hemoglobin Estimation** `[VERIFY]`
  - *Research:* Suner et al. (2007). *J Emerg Med*, 33(2), 105-11. PLoS ONE (2021). PMC: [PMC8279386](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8279386/).
  - *Check:* Palpebral conjunctiva ROI is optimal for non-invasive Hb estimation. Literature prefers CIELAB ($a^*$ chrominance) over HSV for pallor quantification.
  - *Task:* Evaluate CIELAB vs HSV color space transformation in `anemia.js` for Hb (g/dL) regression accuracy.
  - *Owner:* Backend Engineer (`b0c1f3854139`) & Content Ops (`323a31a7cd00`).

- **Item 14: Scleral Icterus → Bilirubin Estimation** `[VERIFY]`
  - *Research:* Outlaw, F. et al. (2020). *PLoS ONE*, 15:e0216970. PMC: [PMC7051077](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7051077/).
  - *Check:* Scleral chromaticity tracks serum bilirubin ($mg/dL$). Requires ambient lighting subtraction to eliminate yellow room illumination bias.
  - *Task:* Confirm ambient light calibration in `jaundice.js` prior to chromaticity calculation.
  - *Owner:* Backend Engineer (`b0c1f3854139`).

---

## Group C — Arrhythmia & HRV Analytics (`afib.js`)

- **Item 7: RMSSD & pNN50 Threshold Sourcing** `[VERIFY]`
  - *Research:* ESC/NASPE Task Force (1996). *Circulation*, 93(5), 1043–1065. DOI: 10.1161/01.CIR.93.5.1043. PMC: [PMC12870696](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12870696/).
  - *Check:* Standard sinus rhythm RMSSD is 19–48 ms; pNN50 is 3–15%. Atrial Fibrillation produces marked irregularity (RMSSD > 48 ms, pNN50 > 20%).
  - *Task:* Verify `afib.js` thresholds (RMSSD > 100 ms vs 48 ms; pNN50 > 30% vs 20%) match clinical screening guidelines.
  - *Owner:* Data Analyst (`cf0c0821d3e7`) & Product Manager (`e2f045dbc0a1`).

- **Item 8: Signal Quality Gating for HRV** `[VERIFY]`
  - *Check:* Motion artifacts induce false high RMSSD/pNN50 spikes resembling AFib.
  - *Task:* Ensure `afib.js` enforces SNR $\ge 6.0\text{ dB}$ signal quality gating before outputting arrhythmia flags.
  - *Owner:* QA Engineer (`06bae13804b8`) & Backend Engineer (`b0c1f3854139`).

---

## Group D — Clinical Governance & Triage Rules (`alertScale.js`)

- **Item 9: 3-Level Header vs 4-Tier Palette Reconciliation** `[SELF-CHECKABLE]`
  - *Check:* Header mentions "3-Level Scale" while system uses 4 tiers (GREEN, YELLOW, ORANGE, RED).
  - *Task:* Align README, UI components, and clinical dossier to explicit 4-tier WHO palette.
  - *Owner:* Product Manager (`e2f045dbc0a1`), UI Designer (`ed61e49fe68e`), Content Ops (`323a31a7cd00`).

- **Item 10: WHO IMCI Color-Scale Mapping** `[VERIFY]`
  - *Research:* WHO/UNICEF Integrated Management of Childhood Illness (IMCI) Guidelines. Journal of Global Health (2023). [JOGH 13:03024](https://jogh.org/2023/jogh-13-03024).
  - *Check:* WHO IMCI classifies Pink (Severe/Referral), Yellow (Treatment), Green (Home care). Vytal maps Red/Orange $\rightarrow$ Pink; Yellow $\rightarrow$ Yellow; Green $\rightarrow$ Green.
  - *Task:* Document exact IMCI mapping table in `Vytal_PM_Knowledge_Base.md`.
  - *Owner:* Product Manager (`e2f045dbc0a1`) & UI Designer (`ed61e49fe68e`).

- **Item 11: PALS Pediatric Reference Ranges** `[VERIFY]`
  - *Research:* Pediatric Advanced Life Support (PALS) Standards. StatPearls: [NBK553213](https://www.ncbi.nlm.nih.gov/books/NBK553213/). PMC: [PMC7465456](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7465456/).
  - *Check:* Age-banded vitals (Infants: 100–160 BPM; Toddlers: 90–150 BPM; Children: 70–120 BPM; Adults: 60–100 BPM).
  - *Task:* Validate age-specific threshold switches in `alertScale.js`.
  - *Owner:* Data Analyst (`cf0c0821d3e7`).

- **Item 12: Maternal Baseline Adjustments** `[VERIFY]`
  - *Check:* 3rd trimester pregnancy elevates baseline HR (+10–15 BPM) and lowers SBP (-5–10 mmHg).
  - *Task:* Confirm obstetric baseline adjustment factors in `alertScale.js`.
  - *Owner:* Data Analyst (`cf0c0821d3e7`) & Product Manager (`e2f045dbc0a1`).

---

## Group E — Vascular & Morphological Metrics (`bloodPressurePTT.js`, `bmiEstimate.js`)

- **Item 15: Pulse Transit Time (PTT) vs Pulse Wave Analysis (PWA)** `[SCOPE + VERIFY]`
  - *Research:* *Scientific Reports* (2017). PMC: [PMC5599606](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5599606/).
  - *Check:* PTT requires dual-site timing (e.g., ECG R-wave to finger PPG). Single-site camera processing measures Pulse Wave Analysis (PWA) morphological features (stiffness index, reflection index).
  - *Task:* Update documentation and function naming to PWA if single-site camera acquisition is used.
  - *Owner:* Product Manager (`e2f045dbc0a1`) & Backend Engineer (`b0c1f3854139`).

- **Item 16: Mid-Upper Arm Circumference (MUAC) vs Camera BMI for SAM Screening** `[VERIFY]`
  - *Research:* WHO Malnutrition Prevention & Management Guidelines (2023). [NBK601660](https://www.ncbi.nlm.nih.gov/books/NBK601660/).
  - *Check:* WHO gold standard for Severe Acute Malnutrition (SAM) in under-5s is MUAC (<115 mm). Camera shoulder-to-height ratio provides frame-proportional proxy.
  - *Task:* Combine camera shoulder ratio with reference card scaling to estimate MUAC equivalent.
  - *Owner:* Product Manager (`e2f045dbc0a1`) & Data Analyst (`cf0c0821d3e7`).

---

## Group F — Longitudinal Risk & Epidemiological SPC (`longitudinalRisk.js`, `populationAnomaly.js`)

- **Item 17: Least-Squares Trend Minimum-N Threshold** `[VERIFY]`
  - *Check:* Linear regression over $<3$ visits yields unreliable slope estimates.
  - *Task:* Enforce $N \ge 3$ visits requirement in `longitudinalRisk.js` before emitting risk slope vectors.
  - *Owner:* Backend Engineer (`b0c1f3854139`) & Data Analyst (`cf0c0821d3e7`).

- **Item 18: Shewhart SPC & EWMA Small-Sample Control Limits** `[VERIFY]`
  - *Research:* Springer Quality & Reliability Engineering (2021). [DOI: 10.1007/978-3-030-67856-2_2](https://link.springer.com/chapter/10.1007/978-3-030-67856-2_2).
  - *Check:* Small sample sizes inflate false alarm rates in Shewhart control charts ($UCL = \bar{X} + 3\sigma$).
  - *Task:* Implement CDC EARS EWMA ($\lambda = 0.2, Z_t > 2.5$) for robust regional outbreak anomaly detection.
  - *Owner:* Data Analyst (`cf0c0821d3e7`) & Backend Engineer (`b0c1f3854139`).

---

## Group G — Interoperability Standards (`platform.js`)

- **Item 19: FHIR R4 Observation Required Fields** `[VERIFY]`
  - *Research:* HL7 FHIR R4 Vital Signs Profile. [Specification](https://hl7.org/fhir/R4/observation-vitalsigns.html).
  - *Check:* Mandates `status` (`final`), `category` (`vital-signs`), and LOINC code (e.g., `8867-4` for Heart Rate).
  - *Task:* Validate exported JSON against FHIR R4 schema in `platform.js`.
  - *Owner:* QA Engineer (`06bae13804b8`) & Backend Engineer (`b0c1f3854139`).

- **Item 20: DHIS2 Tracker Program vs Event Program** `[VERIFY]`
  - *Research:* DHIS2 Tracker Implementation Guide. [Documentation](https://docs.dhis2.org/en/implement/tracker-implementation/introduction.html).
  - *Check:* Longitudinal tracking requires DHIS2 Tracker Program (`TrackedEntityInstance`). Single readings use Event Program.
  - *Task:* Configure `platform.js` to emit DHIS2 Tracker Program payloads for patient history continuity.
  - *Owner:* QA Engineer (`06bae13804b8`) & Backend Engineer (`b0c1f3854139`).

---

## Group H — Device & Platform API Integrations (`bleOximeter.js`, `thermalCamera.js`, `wearableIntegration.js`, `storage.js`)

- **Item 21: Hardware Integration Labeling** `[SCOPE]`
  - *Check:* Web Bluetooth, Web USB, and Web Camera integrations represent API engineering layers.
  - *Task:* Categorize hardware drivers distinctly from clinical math algorithms in dossier summary tables.
  - *Owner:* Product Manager (`e2f045dbc0a1`) & DevOps Engineer (`f37c976fa739`).

- **Item 22: LLM AI Explanation Authority Boundary** `[VERIFY]`
  - *Check:* AI LLMs (Qwen/Llama) must serve exclusively as explanation layers for deterministic triage decisions.
  - *Task:* Enforce offline rule-engine precedence in `ai.js` so LLM output cannot alter calculated WHO triage risk level.
  - *Owner:* Product Manager (`e2f045dbc0a1`) & Backend Engineer (`b0c1f3854139`).

- **Item 23: Offline Storage Reliability** `[SCOPE]`
  - *Check:* IndexedDB/LocalStorage queueing (`storage.js`) provides reliable offline-first sync.
  - *Task:* Verify zero-loss sync queue behavior under network reconnection in CI/CD pipeline.
  - *Owner:* DevOps Engineer (`f37c976fa739`).

- **Item 24: Platform Sharing Triggers** `[SCOPE]`
  - *Check:* Web Speech API, QR generation, and SMS/WhatsApp triggers handle user interaction.
  - *Task:* Group platform triggers under UX utility integrations in project documentation.
  - *Owner:* Product Manager (`e2f045dbc0a1`).

---

## Group I — Workflow Governance & Closed-Loop Swarm Principles

- **Item 25: Stoudt ERP 3-Phase Workflow Principles** `[VERIFY]`
  - *Research:* Stoudt S., Vásquez V.N., Martinez C.C. (2021). "Principles for data analysis workflows." *PLoS Computational Biology*, 17(3): e1008770. PMCID: [PMC7971542](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7971542/). PMID: [33735208](https://pubmed.ncbi.nlm.nih.gov/33735208/).
  - *Check:* Structured research workflows require 3 explicit phases:
    1. **Explore Phase:** Raw data intake, WebRTC camera acquisition, ambient lighting diagnostics.
    2. **Refine Phase:** Closed-loop signal processing (Goertzel, Butterworth, rPPG, WHO triage, self-reflection check gates, remediation retry loops).
    3. **Produce Phase:** Production-grade reproducible artifacts (FAIR DOIs, 8-language SOAP reports, DHIS2 payloads, 3-gate DevOps release).
  - *Task:* Enforce Explore-Refine-Produce structure across all 9 agent WakerFlow definitions.
  - *Owner:* Master Router (`46effbe9f9b2`) & All Swarm Agents.

- **Item 26: van der Aalst ECAA Workflow Rules & Closed Loops** `[VERIFY]`
  - *Research:* van der Aalst, W.M.P. (2016). "Process Mining: Data Science in Action." Springer.
  - *Check:* Business processes require Event-Condition-Action-Reaction (ECAA) rules with explicit self-reflection loops, visual loop-back arrows, maximum retry bounds (e.g. 3 retries), and graceful fallback termination.
  - *Task:* Maintain loop-back connections (`next` array arrows) in all agent workflows to handle hardware variance, signal noise, and QA failure gracefully.
  - *Owner:* Master Router (`46effbe9f9b2`) & All Swarm Agents.

---

## Agent Task Responsibility Matrix

| Agent Role | Waker ID | Owned Algorithm & Research Items | Total Count |
|---|---|---|---|
| **Backend Engineer** | `b0c1f3854139` | Items 1, 2, 3, 4, 5, 6, 8, 13, 14, 15, 17, 18, 19, 20, 22 | 15 |
| **Data Analyst** | `cf0c0821d3e7` | Items 1, 5, 6, 7, 11, 12, 16, 17, 18 | 9 |
| **Product Manager** | `e2f045dbc0a1` | Items 7, 9, 10, 12, 15, 16, 21, 22, 24 | 9 |
| **QA Engineer** | `06bae13804b8` | Items 8, 19, 20 (13-Vector Synthetic Harness & DoD Gate) | 3 |
| **UI Designer** | `ed61e49fe68e` | Items 9, 10 (Glassmorphic Triage Badge Mapping) | 2 |
| **Content Ops** | `323a31a7cd00` | Items 9, 13 (Multilingual AI SOAP Reports & FAIR DOIs) | 2 |
| **DevOps Engineer** | `f37c976fa739` | Items 0, 21, 23 (3-Gate CI/CD & Alibaba Cloud Release) | 3 |
| **Frontend Engineer**| `cff36e25cd5e` | Items 3 (WebRTC Camera ROI & Illumination Diagnostics) | 1 |
| **Master Router** | `46effbe9f9b2` | Items 25, 26 (Explore-Refine-Produce & ECAA Orchestration)| 2 |
