# OSINT Toolkit — Build Plan & Timeline

## 1) Project Goal
Build a **presentation-ready OSINT Toolkit website** with many pages and functional demos, using:
- **Frontend:** Next.js + Tailwind CSS
- **Backend:** FastAPI (Python)
- **Optional infra:** Docker Compose

Primary objective for exam: **broad module coverage + clean UI + stable demo flow**.

---

## 2) Delivery Strategy (Short Deadline)
Use a **3-layer approach** so the project is always demoable:

1. **Layer A — UI-Complete Pages**
   - All planned pages exist with forms, sections, and realistic sample states.
2. **Layer B — Real API-backed modules**
   - High-impact tools actually work with backend routes.
3. **Layer C — Advanced/optional integrations**
   - Add stretch features only after Layer A+B are stable.

This prevents getting blocked by one difficult module.

---

## 3) Target Pages (Showcase-Oriented)

### Core Intelligence (6+ pages)
1. Home / Dashboard
2. Breach Checker
3. WHOIS & DNS Explorer
4. Subdomain Finder
5. Username Enumeration
6. IP Intelligence & Geolocation
7. Website Tech Stack Profiler

### Digital Forensics (3+ pages)
8. Metadata Extractor (EXIF)
9. Email Header Forensic Lab
10. Wordlist Generator

### Platform / Presentation pages
11. OSINT Framework Wiki
12. Investigation Case Manager (basic save/export)
13. Live Threat Map
14. About
15. Contact
16. Showcase

> You already have several routes in the frontend. We will extend and align these with this final page list.

---

## 4) Technical Build Steps

## Phase 0 — Setup & Baseline (0.5 day)
- Confirm local tools: Git, Node.js, Python, Docker (optional).
- Create virtual environment for backend.
- Install frontend/backend dependencies.
- Run both servers (`Next.js` + `FastAPI`).
- Verify baseline pages load.

**Output:** Running local project with no setup blockers.

---

## Phase 1 — Architecture & Reusable UI (1 day)
- Finalize route map in `frontend/src/app`.
- Build/standardize reusable components:
  - `SearchBar`
  - `ResultsPanel`
  - `ModuleCard`
  - loading/error/empty states
- Add consistent page shell (title, description, input, results, notes).

**Output:** Every page can be scaffolded quickly and looks consistent.

---

## Phase 2 — Core Intelligence Implementation (2 days)

### 2.1 Breach Checker
- Backend service + route to query breach source/API.
- Frontend form + red/green result cards.

### 2.2 WHOIS & DNS Explorer
- Backend `whois` lookup + DNS/MX extraction.
- Add subdomain section (real or mocked fallback).

### 2.3 Username Enumeration
- Backend checks username patterns on selected platforms.
- Return found/not found + profile links.

### 2.4 IP Intelligence & Geolocation
- Backend integrates geolocation service.
- Frontend shows ISP/org/country/city and map marker.

### 2.5 Tech Stack Profiler
- Backend fetches URL headers/HTML.
- Detect frameworks/CDN/server signatures.

**Output:** 5 core modules usable in live demo.

---

## Phase 3 — Digital Forensics Implementation (1.5 days)

### 3.1 Metadata Extractor
- Image upload endpoint.
- Parse EXIF (camera/time/GPS).

### 3.2 Email Header Forensic Lab
- Parse raw headers.
- Extract Received chain + probable origin IP.

### 3.3 Wordlist Generator
- Generate candidate passwords from user profile fields.
- Download/export as `.txt`.

**Output:** 3 forensics modules complete and demo-ready.

---

## Phase 4 — Presentation/Polish Pages (1 day)
- OSINT Framework Wiki with categorized external resources.
- Investigation Case Manager:
  - MVP: local JSON save/export in browser
  - Stretch: DB-backed persistence
- Live Threat Map embed/data view.
- Finalize About/Contact/Showcase storytelling.

**Output:** Platform feels complete beyond just tools.

---

## Phase 5 — Testing, Hardening, Demo Prep (1 day)
- Backend tests for each route family (`intelligence`, `forensics`).
- Input validation, rate-limit-safe handling, timeout handling.
- Add friendly error messages for API failures.
- Demo dataset + scripted demo flow.
- README updates: setup, architecture, screenshots.

**Output:** Stable demo with clear documentation.

---

## 5) Day-by-Day Timeline (7 Working Days)

## Day 1
- Environment setup + project runs end-to-end.
- Standardize shared UI components and page layout.

## Day 2
- Build Breach Checker + WHOIS/DNS pages (frontend+backend).

## Day 3
- Build Username Enumeration + IP Geolocation.

## Day 4
- Build Tech Stack Profiler + Subdomain integration/fallback.

## Day 5
- Build Metadata Extractor + Email Header Lab.

## Day 6
- Build Wordlist Generator + Wiki + Threat Map + Case Manager MVP.

## Day 7
- Tests, bug fixes, UX polish, README, screenshots, final rehearsal.

---

## 6) Priority Matrix (If Time Becomes Tight)

## Must Have (Demo Critical)
- Working frontend routing for all pages
- 5 working modules:
  - Breach Checker
  - WHOIS/DNS
  - Username Enumeration
  - IP Geolocation
  - Metadata Extractor
- Basic backend validation + graceful error handling

## Should Have
- Email Header Lab
- Tech Stack Profiler
- Wordlist Generator
- Threat Map page

## Nice to Have
- Full DB-powered Case Manager
- Advanced subdomain scanning integration
- Authentication and user accounts

---

## 7) Risk Management

1. **External API failures/rate limits**
   - Add fallback mock responses + retry messaging.
2. **Complex modules taking too long**
   - Keep page UI complete first; plug in live backend later.
3. **Demo-time network issues**
   - Keep cached/sample JSON payloads for offline demo mode.
4. **Over-scope pressure**
   - Freeze scope after Day 4; only bug fixes after Day 6.

---

## 8) Definition of Done (Exam Ready)
- All planned pages are navigable and styled consistently.
- At least 6 modules return real or clearly labeled demo data.
- No crash on invalid input.
- One-click local run instructions work from README.
- Prepared 5–7 minute demo script with expected outputs.

---

## 9) Suggested Demo Script (5–7 Minutes)
1. Open dashboard and explain module categories.
2. Run Breach Checker (email example).
3. Run WHOIS/DNS + IP Geolocation.
4. Run Metadata Extractor on sample image.
5. Show Case Manager export/report.
6. End with Threat Map and project architecture slide.

---

## 10) Immediate Next Actions (Today)
1. Finalize exact route names and page titles.
2. Implement shared UI template for every module page.
3. Complete first two working modules (Breach + WHOIS/DNS).
4. Commit checkpoint at end of day with screenshots.
