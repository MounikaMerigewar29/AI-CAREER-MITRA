# IMPLEMENTATION PLAN — AI-CAREER-MITRA

## Repository-wide review

## 1) Screens reviewed
- Total screens implemented in UI registry: **38** (`/home/runner/work/AI-CAREER-MITRA/AI-CAREER-MITRA/src/app/App.tsx`).
- All 38 screens have TSX components present under `/home/runner/work/AI-CAREER-MITRA/AI-CAREER-MITRA/src/app/components`.

## 2) Components reviewed
- **App shell/orchestrator**: `App.tsx` (state-driven navigation).
- **Shared runtime components used by flow**:
  - `BottomNav.tsx`
- **Utility component**:
  - `figma/ImageWithFallback.tsx` (present, not used by main flow)
- **Reusable UI library**:
  - `/src/app/components/ui/*` (large shadcn/radix-style set, mostly not consumed by screen components)

## 3) Services reviewed
- **No service layer found** (no `services/`, `api/`, Firebase clients, Gemini clients, repository/store modules).

## 4) Data sources reviewed
- **Current source of truth**: static in-component constants and hardcoded values.
- **No backend APIs**, **no Firebase**, **no database**, **no CMS**, **no Gemini integration** in code.

---

## Screen-by-screen implementation matrix

| # | Screen name | Purpose | UI Status | Uses mock data? | Uses hardcoded data? | Requires Firebase? | Requires Gemini AI? | Estimated implementation effort |
|---|---|---|---|---|---|---|---|---|
| 1 | Splash Screen | Brand entry and app launch CTA | Complete | No | Yes | No | No | Low |
| 2 | Language Selection | Choose preferred language | Complete | Yes | Yes | No | No | Low |
| 3 | Welcome Screen | Introduce AI guide and start flow | Complete | No | Yes | No | No | Low |
| 4 | Student Profile | Capture profile inputs | Partial | Yes | Yes | Yes | No | Medium |
| 5 | Interest Assessment | Collect interest responses | Partial | Yes | Yes | Yes | No | Medium |
| 6 | AI Analysis | Analyze profile + assessment results | Partial | Yes | Yes | Yes | Yes | High |
| 7 | Career Recommendations | Show ranked career matches | Partial | Yes | Yes | Yes | Yes | High |
| 8 | Career Details | Explain selected career deeply | Partial | Yes | Yes | Yes | Yes | High |
| 9 | Career Roadmap | Build step-wise career plan | Partial | Yes | Yes | Yes | Yes | High |
| 10 | Scholarship Discovery | Search/filter scholarships | Partial | Yes | Yes | Yes | No | High |
| 11 | Parent Mode | Parent-friendly guidance view | Partial | Yes | Yes | Yes | Yes | Medium |
| 12 | AI Coach Chat | Conversational career assistant | Partial | Yes | Yes | Yes | Yes | High |
| 13 | Impact Dashboard | Show learner progress and KPIs | Partial | Yes | Yes | Yes | No | Medium |
| 14 | Success Screen | Completion summary and next actions | Partial | No | Yes | Yes | No | Low |
| 15 | Enhanced Parent Guide | Expanded parent trust/explanation content | Partial | No | Yes | Yes | Yes | Medium |
| 16 | Career Simulator | Simulate day-in-life for careers | Partial | No | Yes | Yes | Yes | High |
| 17 | College Finder | Find and compare colleges | Partial | Yes | Yes | Yes | No | High |
| 18 | Skill Gap Analyzer | Compare current vs target skill set | Partial | Yes | Yes | Yes | Yes | High |
| 19 | Interview Coach | Mock interviews and feedback | Partial | Yes | Yes | Yes | Yes | High |
| 20 | Demand Forecast | Demand trend analysis for careers | Partial | Yes | Yes | Yes | Yes | High |
| 21 | Opportunity Hub | Aggregate internships/courses/events | Partial | No | Yes | Yes | Yes | High |
| 22 | Career Report | Generate downloadable personalized report | Partial | Yes | Yes | Yes | Yes | High |
| 23 | WhatsApp Alerts | Manage alert preferences and message previews | Partial | Yes | Yes | Yes | No | Medium |
| 24 | Success Stories | Browse student outcome stories | Partial | Yes | Yes | Yes | No | Medium |
| 25 | Progress Dashboard | Track milestones, badges, readiness | Partial | Yes | Yes | Yes | No | Medium |
| 26 | AI Future Twin | Future-self projection narrative | Partial | Yes | Yes | Yes | Yes | High |
| 27 | AI Career GPS | Route-style guidance toward goals | Partial | Yes | Yes | Yes | Yes | High |
| 28 | Dream-to-Reality Planner | Convert dream goal into executable plan | Partial | Yes | Yes | Yes | Yes | High |
| 29 | Talent Discovery Engine | Identify latent strengths/domains | Partial | Yes | Yes | Yes | Yes | High |
| 30 | Scholarship Auto-Match | Match user profile to scholarships | Partial | Yes | Yes | Yes | Yes | High |
| 31 | Career Risk & Demand Meter | Show risk/opportunity score by career | Partial | Yes | Yes | Yes | Yes | Medium |
| 32 | Financial Planner | Estimate education cost/loan/ROI | Partial | Yes | Yes | Yes | No | High |
| 33 | Parent Convincer | Generate parent-specific persuasion script | Partial | No | Yes | Yes | Yes | Medium |
| 34 | Career Battle | Compare two careers side-by-side | Partial | No | Yes | Yes | Yes | Medium |
| 35 | Opportunity Predictor | Predict missed opportunities | Partial | Yes | Yes | Yes | Yes | High |
| 36 | AI Mentor Avatar | Persona-driven assistant interactions | Partial | Yes | Yes | Yes | Yes | High |
| 37 | Village Impact Dashboard | Regional cohort impact analytics | Partial | Yes | Yes | Yes | No | High |
| 38 | Career Reality Check | Real-world constraints/expectation setting | Partial | Yes | Yes | Yes | Yes | Medium |

---

## P1 / P2 / P3 summary table

| Priority | Definition | Focus screens/features |
|---|---|---|
| P1 | Critical for demo | Core onboarding + profile + assessment + AI recommendations + chat + scholarship discovery + dashboard (Screens 1–14 with emphasis on 4–13) |
| P2 | Important | Parent tools, college finder, skill gap, interview coach, progress tracking, report generation, WhatsApp alerts (Screens 15–25, plus 32) |
| P3 | Optional | Advanced innovation modules for differentiation (Screens 26–38) |

---

## Top 10 features to implement first (prototype → working product)

1. **Authentication + user profile persistence (Firebase Auth + Firestore)**  
   Needed to make user journeys real, resumable, and personalized.

2. **Assessment submission pipeline and result storage**  
   Persist answers, scoring, and profile context for downstream screens.

3. **Gemini-powered recommendation engine (Screens 6–9)**  
   Replace static AI analysis/recommendation/roadmap content with generated outputs.

4. **Career data service layer (careers, skills, outcomes, salary ranges)**  
   Move from hardcoded arrays to centralized, queryable data.

5. **Scholarship discovery backend + auto-match logic (Screens 10, 30)**  
   Add searchable scholarship catalog, eligibility checks, and ranking.

6. **AI coach chat backend (Screen 12) with conversation history**  
   Real LLM responses, prompt safety, and stored chat threads.

7. **Dashboard and progress tracking services (Screens 13, 25)**  
   Dynamic KPI calculation from user events and milestone progress.

8. **Career report generation and export (Screen 22 + Success screen action)**  
   Generate shareable PDF/report and implement download action.

9. **College/opportunity integrations (Screens 17, 21, 35)**  
   Live external data for colleges, opportunities, and recommendation scoring.

10. **Production readiness baseline**  
   Introduce route-based navigation, validation/error handling, analytics, and CI checks for stable demos.

---

## Additional implementation notes

- Current codebase is **UI-first prototype**: strong visual coverage, minimal production behavior.
- No application code currently wires Firebase or Gemini; both require new foundational modules.
- Most screens are marked **Partial** because UI exists but real data, persistence, and backend intelligence are missing.
