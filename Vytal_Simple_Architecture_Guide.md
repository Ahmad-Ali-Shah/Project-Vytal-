# 📑 VYTAL ARCHITECTURE & SWARM GUIDE
**Plain-English Clear Specification & IF...THEN Flowcharts**  
*Team:* **Ahmad Ali & Laiba** | *Project:* **Vytal (Bano Qabil × Alibaba Cloud AI Hackathon 2026)**

> 📄 **Clean Monochrome PDF Generated:**  
> Click to open: [Vytal_Simple_Architecture_Guide.pdf](file:///home/ahmad-ali/Downloads/Vital-apple-health-redesign%20%281%29/Vytal_Simple_Architecture_Guide.pdf)

---

## 1. MY VISION & HOW WE COMPLETE IT

**Vision:** Turn standard smartphone cameras into clinical vital sign screeners for low-resource health clinics. In 30 seconds, Vytal measures Heart Rate, SpO2, AFib, Blood Pressure trend, Anemia, and Malnutrition without touching the patient.

### Plain IF...THEN Application Execution Flowchart:

```text
IF user clicks "Start Scan" on camera page
  └──► THEN open WebRTC camera video stream (30 frames/sec)

IF camera is active
  └──► THEN track 478 3D face landmarks & crop forehead skin ROI

IF 30 seconds of video captured
  ├──► THEN calculate rPPG pulse signal (CHROM/POS algorithm)
  └──► IF signal noise is low (SNR >= 6dB)
         └──► THEN calculate Heart Rate, SpO2, and AFib RMSSD

IF vital signs calculated
  └──► THEN pass vitals into offline WHO IMCI & PALS clinical rules

IF WHO rules evaluate vitals
  ├──► IF emergency signals found  ──► THEN assign RED / ORANGE triage tier
  └──► IF normal signals found     ──► THEN assign GREEN / YELLOW triage tier

IF clinical triage assigned
  └──► THEN send vitals to Alibaba Cloud Qwen LLM to generate AI SOAP report

IF network connection is present
  └──► THEN sync patient report to Alibaba Cloud OSS & FC 3.0 serverless backend
```

---

## 2. ALL 9 SWARM AGENTS & THEIR EXACT IF...THEN FLOWCHARTS

### Agent Registry Table

| Agent Name | Waker ID | Why Created | What It Does |
|---|---|---|---|
| **Product Manager** (`laiba_task2`) | `e2f045dbc0a1` | Enforce WHO clinical guidelines | Validates WHO IMCI/PALS triage rules & manages backlog. |
| **Backend Engineer** (`liaba`) | `b0c1f3854139` | Build clinical algorithms | Computes rPPG, SpO2 RoR, AFib consensus, and PWA BP in `src/lib/*`. |
| **Frontend Architect** (`Muhammad Ahmad`) | `cff36e25cd5e` | Manage React app & camera | Controls WebRTC video capture & MediaPipe 3D face tracking. |
| **UI Designer** (`Muhammad Ahmad_ui`) | `ed61e49fe68e` | Design glassmorphic UI | Renders WHO 4-color badges (`GREEN`/`YELLOW`/`ORANGE`/`RED`). |
| **QA Engineer** (`Ahmad ALI`) | `06bae13804b8` | Prevent code bugs | Executes 13-vector synthetic biometric test harness. |
| **DevOps Engineer** (`sara`) | `f37c976fa739` | Automate build & deploy | Compiles Vite build & deploys to Alibaba Cloud OSS/FC 3.0. |
| **Data Analyst** | `cf0c0821d3e7` | Detect disease outbreaks | Calculates CDC EARS EWMA statistical process control anomaly. |
| **Content Operations** (`Ahmad`) | `323a31a7cd00` | Translate & cite research | Translates UI to 8 languages & generates FAIR DOIs. |
| **Master Router** (`ALL_IN_ONE`) | `46effbe9f9b2` | Coordinate all agents | Runs 3-phase Explore-Refine-Produce closed-loop workflow. |

---

### IF...THEN Flowcharts for Each Agent:

```text
1. PRODUCT MANAGER (laiba_task2):
   IF triage calculated ──► THEN verify against WHO rules ──► IF compliant ──► THEN approve release

2. BACKEND ENGINEER (liaba):
   IF raw video frames received ──► THEN apply 0.7-3.0Hz bandpass ──► THEN output HR & SpO2

3. FRONTEND ARCHITECT (Muhammad Ahmad):
   IF user opens scan ──► THEN initialize MediaPipe 3D face mesh ──► THEN stream frames to buffer

4. UI DESIGNER (Muhammad Ahmad_ui):
   IF triage tier returned ──► THEN display correct color badge (GREEN / YELLOW / ORANGE / RED)

5. QA ENGINEER (Ahmad ALI):
   IF build created ──► THEN run 13 synthetic test vectors ──► IF MAE <= 3.5 BPM ──► THEN pass QA

6. DEVOPS ENGINEER (sara):
   IF QA test passes ──► THEN run npm run build ──► THEN upload bundle to Alibaba Cloud OSS

7. DATA ANALYST:
   IF vitals saved ──► THEN calculate CDC EARS EWMA score ──► IF Z_t > 2.5 ──► THEN trigger alert

8. CONTENT OPERATIONS (Ahmad):
   IF report created ──► THEN translate to 8 languages (Urdu, Pashto, etc.) ──► THEN format DOIs

9. MASTER ROUTER (ALL IN ONE):
   IF user gives task ──► THEN assign to correct agent ──► IF agent fails ──► THEN retry loop
```

---

## 3. IDE CONNECTION & CONNECTORS EXPLAINED

### What happens when you connect an IDE to Qoder?
When you open your project in an IDE (like VS Code or PyCharm) with Qoder:
1. Qoder links your local workspace folder to its background daemon (running on port `19820`).
2. Qoder reads your code files from disk and loads agent configurations stored in `~/.qoderwake/data/store/qoderwake.sqlite`.

### What each connector does:
- **GitHub Connector:** Syncs repository code, commits, branches, issues, and pull requests.
- **Alibaba Cloud Connector:** Deploys serverless APIs to Function Compute FC 3.0 and invokes Qwen LLM for SOAP reports.
- **Database / Supabase Connector:** Stores patient records and queries historical data.

---

## 4. DIRECT ANSWERS TO IMPORT & SYNC QUESTIONS

### Q1: Are workflows and connectors already there when you import/clone an IDE project?
**NO.** Cloning a Git repository only copies source code files. It does **not** copy the local system database file (`qoderwake.sqlite`) where agent triggers and connectors are saved.

### Q2: How EXACTLY do you import workflows to a new machine?
Run this single terminal command on the new machine:
```bash
python3 scratch/configure_all_agent_connectors_and_triggers.py && ~/.qoderwake/qoderwake restart
```
*This script instantly recreates all 9 agents, GitHub connectors, MCP drivers, and triggers on the new machine.*

### Q3: Do agents and messages created on the Web Page UI remain on the IDE?
**YES on the same computer!** Both the Web UI and the IDE use the exact same background database (`~/.qoderwake/data/store/qoderwake.sqlite`). Any message sent on the web page appears immediately in the IDE.

### Q4: How do you import the SAME messages to a DIFFERENT computer?
Copy these 2 items from your old computer to your new computer:
1. **Database file:** `~/.qoderwake/data/store/qoderwake.sqlite`
2. **Agent chat logs:** `~/.qoderwake/data/workers/`

---

## 5. ADDING NEW CUSTOM BOTS & LINKING EXTERNAL APIS

### How to add a new custom bot/feature:
1. Add a new agent row in `qoderwake.sqlite` with a unique Waker ID.
2. Create a folder at `~/.qoderwake/data/workers/{new_waker_id}/`.
3. Add a trigger matching `tr_[a-z0-9]{8,32}`.

### How to link external APIs (Alibaba Cloud Model Studio, DHIS2, FHIR R4):
- **Method A (Environment Variables):** Add `ALIBABA_DASHSCOPE_API_KEY=sk_xxx` in your `.env` file and call the API inside `src/lib/ai.js`.
- **Method B (MCP Driver):** Add your custom API endpoint into your agent's `.qoder-plugin/.mcp.json` file as an HTTP transport server.
