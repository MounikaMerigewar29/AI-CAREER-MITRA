# PROJECT AUDIT — AI-CAREER-MITRA

## 1) Complete technology stack

### Core runtime
- **React 18.3.1** (peer dependency)
- **React DOM 18.3.1** (peer dependency)
- **TypeScript + TSX** source files
- **Vite 6.3.5** build/dev server

### UI and design system
- **Inline-styled React components** for all product screens
- **Tailwind CSS v4** (`@tailwindcss/vite`, `tailwindcss`)
- **tw-animate-css**
- **Lucide React** icon library
- **Radix UI** primitives (large local `src/app/components/ui/*` library, mostly unused in the current screen flow)
- **MUI** packages present (`@mui/material`, `@mui/icons-material`, `@emotion/*`) but not used in the main app flow
- **Recharts**, **embla-carousel**, **react-hook-form**, **sonner**, etc. are installed but not used by routed screens

### Tooling and config
- **npm** (`package-lock.json` present)
- **pnpm workspace file** present (`pnpm-workspace.yaml`)
- **PostCSS** config exists (`postcss.config.mjs`)
- Custom **Vite plugin** `figma-asset-resolver` in `vite.config.ts`

### Project nature
- This is a **prototype generated from Figma Make** and adapted as a single-page simulated mobile app experience.

---

## 2) Folder structure

```text
/home/runner/work/AI-CAREER-MITRA/AI-CAREER-MITRA
├── ATTRIBUTIONS.md
├── README.md
├── default_shadcn_theme.css
├── guidelines/
│   └── Guidelines.md
├── index.html
├── package.json
├── package-lock.json
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── app/
    │   ├── App.tsx
    │   └── components/
    │       ├── [38 feature screen components]
    │       ├── BottomNav.tsx
    │       ├── figma/
    │       │   └── ImageWithFallback.tsx
    │       └── ui/
    │           └── [shadcn/radix-based reusable UI components]
    └── styles/
        ├── fonts.css
        ├── globals.css
        ├── index.css
        ├── tailwind.css
        └── theme.css
```

---

## 3) All screens and their purpose

The app currently registers **38 screens** in `src/app/App.tsx`:

### Core flow (1–14)
1. **Splash Screen** — branded entry screen and “Get Started” CTA.  
2. **Language Selection** — selects app language (Telugu/Hindi/English).  
3. **Welcome Screen** — introduces AI assistant and starts assessment/voice flow.  
4. **Student Profile** — collects profile details (name, class, state, language).  
5. **Interest Assessment** — question-by-question preference capture.  
6. **AI Analysis** — loading + results summary from assessment.  
7. **Career Recommendations** — ranked career cards with fit scores.  
8. **Career Details** — deep dive into selected career, skills, outcomes, stories.  
9. **Career Roadmap** — staged milestones to reach selected career.  
10. **Scholarship Discovery** — scholarship listing/filter/search view.  
11. **Parent Mode** — parent-oriented explanations and trust-building content.  
12. **AI Coach Chat** — chat UI with canned interactions/suggestions.  
13. **Impact Dashboard** — student progress stats, activity, and top careers.  
14. **Success Screen** — completion state with share/download/explore CTAs.  

### Premium (15–25)
15. **Enhanced Parent Guide** — richer parent communication flow.  
16. **Career Simulator** — simulates day-in-life/career scenario.  
17. **College Finder** — college search and category-based shortlist.  
18. **Skill Gap Analyzer** — compares current vs required skills.  
19. **Interview Coach** — mock interview prompt/recording/feedback simulation.  
20. **Demand Forecast** — projected job demand and trend visualizations.  
21. **Opportunity Hub** — opportunities (internships/events/courses) listing.  
22. **Career Report** — generated report-style summary for the user.  
23. **WhatsApp Alerts** — notification preference + sample WhatsApp updates.  
24. **Success Stories** — curated student journeys/testimonials.  
25. **Progress Dashboard** — milestones, badges, readiness indicators.  

### Advanced innovation (26–38)
26. **AI Future Twin** — future-self visualization narrative.  
27. **AI Career GPS** — route-style path visualization to target career.  
28. **Dream-to-Reality Planner** — user goal input converted to milestones.  
29. **Talent Discovery Engine** — hidden strengths/personality domain mapping.  
30. **Scholarship Auto-Match** — profile-to-scholarship auto matching results.  
31. **Career Risk & Demand Meter** — career risk/viability score view.  
32. **Financial Planner** — fee/loan/ROI comparison for education paths.  
33. **Parent Convincer** — auto-generated parent conversation framing.  
34. **Career Battle** — side-by-side career comparison mode.  
35. **Opportunity Predictor** — predicts likely missed opportunities.  
36. **AI Mentor Avatar** — conversational mentor avatar with voice-like behavior.  
37. **Village Impact Dashboard** — regional impact metrics and trends.  
38. **Career Reality Check** — practical expectations and reality-check signals.  

---

## 4) Navigation flow

### Primary orchestration
- Navigation is fully managed in **`src/app/App.tsx`** using local state:
  - `screen` (number 1–38)
  - `activeNav` (`home|careers|scholarships|coach|profile`)
  - `activeSection` (`Core Flow|Premium|Advanced`)
- No React Router route definitions are used for in-app navigation.

### Core sequential flow
- Main guided flow is linear: **1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 14** (with supporting access to 10/11/12/13 via nav).

### Explicit callback-based transitions
- Splash `onNext` → 2
- Language `onNext` → 3
- Welcome `onAssessment` / `onVoice` → 4
- Profile `onNext` → 5
- Assessment `onNext` → 6
- Analysis `onNext` → 7
- Recommendations `onSelect` → 8
- Career Detail `onRoadmap` → 9, `onCoach` → 12, `onBack` → 7
- Roadmap `onBack` → 8, `onSuccess` → 14
- Dashboard `onExplore` → 7
- Success `onExplore` → 7 (`onDownload` is currently a no-op in App)

### Global navigation controls in App container
- Left/right arrow buttons move to previous/next screen index.
- Section tabs jump to the first screen in a section:
  - Core → 1
  - Premium → 15
  - Advanced → 26
- Dot indicators and quick-jump chips can jump to any of the 38 screens.
- Bottom navigation visible only for screens **7–14**:
  - `home` → 13
  - `careers` → 7
  - `scholarships` → 10
  - `coach` → 12
  - `profile` → 4

---

## 5) Shared/reusable components

### Actually used in current app flow
- **`BottomNav.tsx`** — reusable bottom tab bar used on screens 7–14.
- **App-level reusable UI blocks in `App.tsx`**:
  - `StatusBar` component
  - Reusable shell: phone frame, arrows, section tabs, screen dots, quick-jump groups.

### Present but currently unused in screen flow
- **`src/app/components/ui/*`** — broad shadcn/radix-style component library (accordion, dialog, form controls, table, sidebar, etc.).
- **`src/app/components/figma/ImageWithFallback.tsx`** — image fallback utility, currently not imported by active screens.

---

## 6) Mock data currently used

Mock/demo data is embedded directly in component files (no API/data layer). Key datasets include:

- `LanguageScreen.tsx`: `languages`
- `ProfileScreen.tsx`: `classes`, `states`, `langs`
- `AssessmentScreen.tsx`: `questions`
- `AnalysisScreen.tsx`: `resultCards`
- `RecommendationsScreen.tsx`: `careers`
- `CareerDetailScreen.tsx`: `skills`, `stories`
- `RoadmapScreen.tsx`: `steps`
- `ScholarshipScreen.tsx`: `filters`, `scholarships`
- `ParentModeScreen.tsx`: `sections`
- `ChatScreen.tsx`: `suggestions`
- `DashboardScreen.tsx`: `stats`, `activity`, `topCareers`
- `CollegeFinderScreen.tsx`: `categories`, `colleges`
- `SkillGapScreen.tsx`: `skills`
- `InterviewCoachScreen.tsx`: `questions`
- `DemandForecastScreen.tsx`: `demandData`, `careerComparison`, `insights`
- `OpportunityHubScreen.tsx`: inline opportunity cards/text blocks
- `CareerReportScreen.tsx`: `sections`
- `WhatsAppScreen.tsx`: `notifications`, `previewMessages`
- `SuccessStoriesScreen.tsx`: `stories`, `filters`
- `ProgressDashboardScreen.tsx`: `milestones`, `skills`, `badges`
- `FutureTwinScreen.tsx`: `achievements`
- `CareerGPSScreen.tsx`: `route`
- `DreamPlannerScreen.tsx`: `presetGoals`
- `TalentDiscoveryScreen.tsx`: `personalityTypes`, `hiddenStrengths`, `naturalTalents`, `domains`
- `ScholarshipAutoMatchScreen.tsx`: `profile`, `matches`
- `CareerRiskMeterScreen.tsx`: `careers`
- `OpportunityPredictorScreen.tsx`: `opportunities`
- `MentorAvatarScreen.tsx`: `topics`, canned `replies`
- `VillageImpactScreen.tsx`: `monthlyData`, `districts`, `careers`
- `CareerRealityCheckScreen.tsx`: `careers`
- `FinancialPlannerScreen.tsx`: `colleges`

---

## 7) Hardcoded data currently used

Representative hardcoded values/patterns:

- **Screen registry and section metadata** in `App.tsx` (`SCREENS`, colors, ids, names).
- **Navigation mapping** hardcoded in `App.tsx` (`home→13`, `careers→7`, etc.).
- **Fixed persona content** repeated across screens:
  - Name examples like **“Ravi Kumar”**, **“Priya …”**, etc.
  - Static profile/location/company/salary values.
- **Static scores and analytics values** across dashboards, reports, and forecast screens.
- **Static text copy** for chat, mentor replies, parent explanations, and success stories.
- **Extensive hardcoded inline styles** (colors, spacing, typography) in nearly every screen component.
- **Prototype device chrome values** (9:41 time, battery/signal visuals) hardcoded in `StatusBar`.

---

## 8) Missing functionality

Major functional gaps (prototype-level limitations):

1. **No backend/API integration** (all data local/static).  
2. **No persistence** (assessment/profile/chat state is not saved).  
3. **No real authentication/authorization** or user accounts.  
4. **No real routing/deep-linking** (single state machine in `App.tsx`).  
5. **No form validation/error handling** for many inputs.  
6. **No production download/share implementation** (`SuccessScreen` download callback is a no-op from App).  
7. **No i18n framework** (language selection is UI-only).  
8. **No accessibility pass** (keyboard/screen-reader semantics are partial).  
9. **No test suite** (unit/integration/e2e absent).  
10. **No lint script/type-check script in npm scripts**; only `dev` and `build`.  
11. **Unused heavy dependency set** inflates bundle and maintenance overhead.  
12. **No centralized design tokens usage in feature screens** (dominantly inline CSS, hard to scale).

---

## 9) Build issues and warnings

### Commands run
- `npm i`
- `npm run build`
- `npm audit --json`

### Observed results
- ✅ Build succeeds with Vite.
- ⚠️ Build warning: large bundle chunk
  - `dist/assets/index-*.js` ≈ **946.75 kB** (gzip ≈ 263.70 kB)
  - Rollup warns about chunks > 500 kB; code-splitting/manual chunks recommended.
- ⚠️ Install warning: `recharts@2.15.2` deprecated (2.x no longer actively maintained; migrate to v3 advised).
- ⚠️ Security audit: **2 high vulnerabilities** reported:
  - `react-router` (installed 7.13.0; fix suggested 7.18.0)
  - `vite` (installed 6.3.5; fix suggested 6.4.3)

---

## 10) Recommended development roadmap

### Phase 1 — Stabilize foundation
1. Add scripts for `lint`, `typecheck`, `test` and CI checks.
2. Upgrade vulnerable dependencies (`react-router`, `vite`) and deprecated `recharts`.
3. Remove unused dependencies to reduce attack surface and bundle size.
4. Introduce environment-based config and centralized constants.

### Phase 2 — Architecture and data
1. Introduce real route-based navigation (screen modules + route config).
2. Build a data layer (API client + typed models + service modules).
3. Replace static datasets with API/mock-service abstraction.
4. Persist user profile, assessments, and progress (local + backend sync).

### Phase 3 — Feature completion
1. Complete currently non-functional CTAs (download/share/report actions).
2. Implement real chat/mentor orchestration with backend inference endpoints.
3. Integrate scholarship/college/opportunity search APIs.
4. Implement role-based parent/student experiences.

### Phase 4 — Quality and UX
1. Add unit tests for core logic and component tests for key screens.
2. Add end-to-end tests for primary user journeys.
3. Improve accessibility and responsive behavior.
4. Refactor inline styles into reusable themed component primitives.

### Phase 5 — Performance and release readiness
1. Add code-splitting and lazy-loading by screen groups.
2. Introduce telemetry/analytics and runtime error monitoring.
3. Optimize assets and enforce performance budgets.
4. Prepare production deployment pipeline and release checklist.

---

## Notes
- This audit was produced without modifying application logic.
- New file added: **`PROJECT_AUDIT.md`**.
