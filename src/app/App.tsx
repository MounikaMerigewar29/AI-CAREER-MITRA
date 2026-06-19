import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Original 14 screens
import { SplashScreen } from './components/SplashScreen';
import { LanguageScreen } from './components/LanguageScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { AssessmentScreen } from './components/AssessmentScreen';
import { AnalysisScreen } from './components/AnalysisScreen';
import { RecommendationsScreen } from './components/RecommendationsScreen';
import { CareerDetailScreen } from './components/CareerDetailScreen';
import { RoadmapScreen } from './components/RoadmapScreen';
import { ScholarshipScreen } from './components/ScholarshipScreen';
import { ParentModeScreen } from './components/ParentModeScreen';
import { ChatScreen } from './components/ChatScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { SuccessScreen } from './components/SuccessScreen';

// Premium features batch 1 (15–17)
import { EnhancedParentGuideScreen } from './components/EnhancedParentGuideScreen';
import { CareerSimulatorScreen } from './components/CareerSimulatorScreen';
import { CollegeFinderScreen } from './components/CollegeFinderScreen';

// Premium features batch 2 (18–25)
import { SkillGapScreen } from './components/SkillGapScreen';
import { InterviewCoachScreen } from './components/InterviewCoachScreen';
import { DemandForecastScreen } from './components/DemandForecastScreen';
import { OpportunityHubScreen } from './components/OpportunityHubScreen';
import { CareerReportScreen } from './components/CareerReportScreen';
import { WhatsAppScreen } from './components/WhatsAppScreen';
import { SuccessStoriesScreen } from './components/SuccessStoriesScreen';
import { ProgressDashboardScreen } from './components/ProgressDashboardScreen';

// Advanced innovation screens (26–38)
import { FutureTwinScreen } from './components/FutureTwinScreen';
import { CareerGPSScreen } from './components/CareerGPSScreen';
import { DreamPlannerScreen } from './components/DreamPlannerScreen';
import { TalentDiscoveryScreen } from './components/TalentDiscoveryScreen';
import { ScholarshipAutoMatchScreen } from './components/ScholarshipAutoMatchScreen';
import { CareerRiskMeterScreen } from './components/CareerRiskMeterScreen';
import { FinancialPlannerScreen } from './components/FinancialPlannerScreen';
import { ParentConvincerScreen } from './components/ParentConvincerScreen';
import { CareerBattleScreen } from './components/CareerBattleScreen';
import { OpportunityPredictorScreen } from './components/OpportunityPredictorScreen';
import { MentorAvatarScreen } from './components/MentorAvatarScreen';
import { VillageImpactScreen } from './components/VillageImpactScreen';
import { CareerRealityCheckScreen } from './components/CareerRealityCheckScreen';

import { BottomNav } from './components/BottomNav';

// ─── Screen registry ───────────────────────────────────────────────────────────
const SCREENS: { id: number; name: string; section: string; color: string }[] = [
  // Core Flow
  { id: 1,  name: 'Splash Screen',            section: 'Core Flow',        color: '#1565C0' },
  { id: 2,  name: 'Language Selection',        section: 'Core Flow',        color: '#1565C0' },
  { id: 3,  name: 'Welcome Screen',            section: 'Core Flow',        color: '#1565C0' },
  { id: 4,  name: 'Student Profile',           section: 'Core Flow',        color: '#1565C0' },
  { id: 5,  name: 'Interest Assessment',       section: 'Core Flow',        color: '#1565C0' },
  { id: 6,  name: 'AI Analysis',               section: 'Core Flow',        color: '#1565C0' },
  { id: 7,  name: 'Career Recommendations',    section: 'Core Flow',        color: '#1565C0' },
  { id: 8,  name: 'Career Details',            section: 'Core Flow',        color: '#1565C0' },
  { id: 9,  name: 'Career Roadmap',            section: 'Core Flow',        color: '#1565C0' },
  { id: 10, name: 'Scholarship Discovery',     section: 'Core Flow',        color: '#1565C0' },
  { id: 11, name: 'Parent Mode',               section: 'Core Flow',        color: '#1565C0' },
  { id: 12, name: 'AI Coach Chat',             section: 'Core Flow',        color: '#1565C0' },
  { id: 13, name: 'Impact Dashboard',          section: 'Core Flow',        color: '#1565C0' },
  { id: 14, name: 'Success Screen',            section: 'Core Flow',        color: '#1565C0' },
  // Premium
  { id: 15, name: 'Enhanced Parent Guide',     section: 'Premium',          color: '#2E7D32' },
  { id: 16, name: 'Career Simulator',          section: 'Premium',          color: '#2E7D32' },
  { id: 17, name: 'College Finder',            section: 'Premium',          color: '#2E7D32' },
  { id: 18, name: 'Skill Gap Analyzer',        section: 'Premium',          color: '#2E7D32' },
  { id: 19, name: 'Interview Coach',           section: 'Premium',          color: '#2E7D32' },
  { id: 20, name: 'Demand Forecast',           section: 'Premium',          color: '#2E7D32' },
  { id: 21, name: 'Opportunity Hub',           section: 'Premium',          color: '#2E7D32' },
  { id: 22, name: 'Career Report',             section: 'Premium',          color: '#2E7D32' },
  { id: 23, name: 'WhatsApp Alerts',           section: 'Premium',          color: '#2E7D32' },
  { id: 24, name: 'Success Stories',           section: 'Premium',          color: '#2E7D32' },
  { id: 25, name: 'Progress Dashboard',        section: 'Premium',          color: '#2E7D32' },
  // Advanced Innovation
  { id: 26, name: 'AI Future Twin',            section: 'Advanced',         color: '#E65100' },
  { id: 27, name: 'AI Career GPS',             section: 'Advanced',         color: '#E65100' },
  { id: 28, name: 'Dream-to-Reality Planner',  section: 'Advanced',         color: '#E65100' },
  { id: 29, name: 'Talent Discovery Engine',   section: 'Advanced',         color: '#E65100' },
  { id: 30, name: 'Scholarship Auto-Match',    section: 'Advanced',         color: '#E65100' },
  { id: 31, name: 'Career Risk & Demand Meter',section: 'Advanced',         color: '#E65100' },
  { id: 32, name: 'Financial Planner',         section: 'Advanced',         color: '#E65100' },
  { id: 33, name: 'Parent Convincer',          section: 'Advanced',         color: '#E65100' },
  { id: 34, name: 'Career Battle',             section: 'Advanced',         color: '#E65100' },
  { id: 35, name: 'Opportunity Predictor',     section: 'Advanced',         color: '#E65100' },
  { id: 36, name: 'AI Mentor Avatar',          section: 'Advanced',         color: '#E65100' },
  { id: 37, name: 'Village Impact Dashboard',  section: 'Advanced',         color: '#E65100' },
  { id: 38, name: 'Career Reality Check',      section: 'Advanced',         color: '#E65100' },
];

const TOTAL = SCREENS.length;

// ─── Status Bar ────────────────────────────────────────────────────────────────
function StatusBar({ light = false }: { light?: boolean }) {
  const c = light ? 'rgba(255,255,255,0.95)' : '#263238';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 24px 6px', flexShrink: 0 }}>
      <span style={{ fontSize: 15, fontWeight: 800, color: c, letterSpacing: '-0.5px' }}>9:41</span>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 17 11">
          {[0, 1, 2, 3].map(i => (
            <rect key={i} x={i * 4.5} y={10 - (i + 1) * 2.5} width="3" height={(i + 1) * 2.5} rx="0.8"
              fill={c} opacity={0.3 + i * 0.18} />
          ))}
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11">
          <path d="M7.5 2.5C5.2 2.5 3.1 3.5 1.7 5.1L0.3 3.7C2.1 1.8 4.7.5 7.5.5s5.4 1.3 7.2 3.2L13.3 5.1C11.9 3.5 9.8 2.5 7.5 2.5z" fill={c} opacity={0.4} />
          <path d="M7.5 5.5c-1.5 0-2.9.6-3.9 1.6L2.2 5.7C3.6 4.4 5.5 3.5 7.5 3.5s3.9.9 5.3 2.2L11.4 7.1C10.4 6.1 9 5.5 7.5 5.5z" fill={c} opacity={0.7} />
          <circle cx="7.5" cy="10" r="2" fill={c} />
        </svg>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 25, height: 12, border: `1.5px solid ${c}`, borderRadius: 3.5, padding: '1.5px', display: 'flex' }}>
            <div style={{ width: '72%', height: '100%', borderRadius: 2, background: c }} />
          </div>
          <div style={{ width: 2, height: 6, borderRadius: '0 1.5px 1.5px 0', background: c, opacity: 0.4, marginLeft: 1 }} />
        </div>
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState(1);
  const [language, setLanguage] = useState('English');
  const [activeNav, setActiveNav] = useState('home');
  const [activeSection, setActiveSection] = useState('Core Flow');

  const goTo = (n: number) => setScreen(Math.max(1, Math.min(TOTAL, n)));
  const showBottomNav = screen >= 7 && screen <= 14;
  const lightStatus = [1, 3, 6, 14, 26].includes(screen);

  const handleNav = (id: string) => {
    setActiveNav(id);
    const map: Record<string, number> = { home: 13, careers: 7, scholarships: 10, coach: 12, profile: 4 };
    goTo(map[id] ?? screen);
  };

  const renderScreen = () => {
    switch (screen) {
      // Core Flow
      case 1:  return <SplashScreen onNext={() => goTo(2)} />;
      case 2:  return <LanguageScreen language={language} setLanguage={setLanguage} onNext={() => goTo(3)} />;
      case 3:  return <WelcomeScreen onAssessment={() => goTo(4)} onVoice={() => goTo(4)} />;
      case 4:  return <ProfileScreen onNext={() => goTo(5)} />;
      case 5:  return <AssessmentScreen onNext={() => goTo(6)} />;
      case 6:  return <AnalysisScreen onNext={() => goTo(7)} />;
      case 7:  return <RecommendationsScreen onSelect={() => goTo(8)} />;
      case 8:  return <CareerDetailScreen onRoadmap={() => goTo(9)} onCoach={() => goTo(12)} onBack={() => goTo(7)} />;
      case 9:  return <RoadmapScreen onBack={() => goTo(8)} onSuccess={() => goTo(14)} />;
      case 10: return <ScholarshipScreen />;
      case 11: return <ParentModeScreen />;
      case 12: return <ChatScreen />;
      case 13: return <DashboardScreen onExplore={() => goTo(7)} />;
      case 14: return <SuccessScreen onDownload={() => {}} onExplore={() => goTo(7)} />;
      // Premium
      case 15: return <EnhancedParentGuideScreen />;
      case 16: return <CareerSimulatorScreen />;
      case 17: return <CollegeFinderScreen />;
      case 18: return <SkillGapScreen />;
      case 19: return <InterviewCoachScreen />;
      case 20: return <DemandForecastScreen />;
      case 21: return <OpportunityHubScreen />;
      case 22: return <CareerReportScreen />;
      case 23: return <WhatsAppScreen />;
      case 24: return <SuccessStoriesScreen />;
      case 25: return <ProgressDashboardScreen />;
      // Advanced Innovation
      case 26: return <FutureTwinScreen />;
      case 27: return <CareerGPSScreen />;
      case 28: return <DreamPlannerScreen />;
      case 29: return <TalentDiscoveryScreen />;
      case 30: return <ScholarshipAutoMatchScreen />;
      case 31: return <CareerRiskMeterScreen />;
      case 32: return <FinancialPlannerScreen />;
      case 33: return <ParentConvincerScreen />;
      case 34: return <CareerBattleScreen />;
      case 35: return <OpportunityPredictorScreen />;
      case 36: return <MentorAvatarScreen />;
      case 37: return <VillageImpactScreen />;
      case 38: return <CareerRealityCheckScreen />;
      default: return null;
    }
  };

  const currentScreen = SCREENS[screen - 1];
  const sections = ['Core Flow', 'Premium', 'Advanced'] as const;
  const sectionColors: Record<string, string> = { 'Core Flow': '#1565C0', 'Premium': '#2E7D32', 'Advanced': '#E65100' };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #070C1A 0%, #0F1E33 50%, #081626 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    }}>
      {/* App Header */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 20, padding: '5px 16px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: 5 }}>
          <span style={{ fontSize: 15 }}>🎓</span>
          <span style={{ color: 'white', fontSize: 14, fontWeight: 800 }}>AI Career Mitra</span>
          <span style={{ background: '#FFD54F', color: '#1A237E', fontSize: 8, fontWeight: 900, padding: '1px 7px', borderRadius: 10, letterSpacing: 0.5 }}>PROTOTYPE</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11.5 }}>
          <span style={{ color: sectionColors[currentScreen.section], fontWeight: 700 }}>{currentScreen.section}</span>
          <span style={{ margin: '0 5px', opacity: 0.4 }}>•</span>
          {currentScreen.name}
          <span style={{ margin: '0 5px', opacity: 0.4 }}>•</span>
          {screen}/{TOTAL}
        </div>
      </div>

      {/* Phone + Arrows */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={() => goTo(screen - 1)} disabled={screen === 1}
          style={{ width: 42, height: 42, borderRadius: '50%', border: 'none', flexShrink: 0, cursor: screen === 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: screen === 1 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)', color: screen === 1 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}>
          <ChevronLeft size={22} />
        </button>

        {/* Phone Frame */}
        <div style={{ width: 390, height: 844, borderRadius: 44, overflow: 'hidden', position: 'relative', flexShrink: 0, background: '#F5F7FF', display: 'flex', flexDirection: 'column', boxShadow: '0 60px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.1)' }}>
          {/* Inner bezel */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 44, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)', pointerEvents: 'none', zIndex: 50 }} />
          {/* Dynamic island */}
          <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 120, height: 34, borderRadius: 20, background: '#000', zIndex: 40 }} />
          <StatusBar light={lightStatus} />
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            {renderScreen()}
          </div>
          {showBottomNav && <BottomNav active={activeNav} onNavigate={handleNav} />}
          <div style={{ height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', background: showBottomNav ? 'white' : 'transparent', flexShrink: 0 }}>
            <div style={{ width: 130, height: 5, borderRadius: 3, background: 'rgba(0,0,0,0.12)' }} />
          </div>
        </div>

        <button onClick={() => goTo(screen + 1)} disabled={screen === TOTAL}
          style={{ width: 42, height: 42, borderRadius: '50%', border: 'none', flexShrink: 0, cursor: screen === TOTAL ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: screen === TOTAL ? 'rgba(255,255,255,0.05)' : '#1565C0', color: screen === TOTAL ? 'rgba(255,255,255,0.2)' : 'white', boxShadow: screen === TOTAL ? 'none' : '0 4px 14px rgba(21,101,192,0.5)', transition: 'all 0.2s' }}>
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Section tabs */}
      <div style={{ display: 'flex', gap: 6, marginTop: 12, marginBottom: 8 }}>
        {sections.map(sec => (
          <button key={sec} onClick={() => {
            setActiveSection(sec);
            const first = SCREENS.find(s => s.section === sec);
            if (first) goTo(first.id);
          }} style={{
            padding: '5px 14px', borderRadius: 16, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 800,
            background: activeSection === sec ? sectionColors[sec] : 'rgba(255,255,255,0.08)',
            color: activeSection === sec ? 'white' : 'rgba(255,255,255,0.45)',
            transition: 'all 0.2s',
          }}>
            {sec === 'Core Flow' ? '📱 Core' : sec === 'Premium' ? '⭐ Premium' : '🚀 Advanced'}
          </button>
        ))}
      </div>

      {/* Screen dots — grouped by section */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 420, marginBottom: 8 }}>
        {SCREENS.map(({ id, section }) => (
          <button key={id} onClick={() => { goTo(id); setActiveSection(section); }}
            style={{
              width: screen === id ? 22 : 7, height: 7, borderRadius: 4, border: 'none', padding: 0, cursor: 'pointer',
              background: screen === id ? sectionColors[section] : 'rgba(255,255,255,0.15)',
              transition: 'all 0.25s ease',
            }} />
        ))}
      </div>

      {/* Quick-jump grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 500, width: '100%' }}>
        {sections.map(sec => (
          <div key={sec}>
            <div style={{ fontSize: 9, fontWeight: 800, color: sectionColors[sec], letterSpacing: 1, marginBottom: 4, textTransform: 'uppercase' }}>{sec} ({SCREENS.filter(s => s.section === sec).length} screens)</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {SCREENS.filter(s => s.section === sec).map(({ id, name }) => (
                <button key={id} onClick={() => { goTo(id); setActiveSection(sec); }}
                  style={{
                    padding: '3px 9px', borderRadius: 10, border: 'none', cursor: 'pointer',
                    background: screen === id ? sectionColors[sec] : 'rgba(255,255,255,0.06)',
                    color: screen === id ? 'white' : 'rgba(255,255,255,0.35)',
                    fontSize: 9.5, fontWeight: screen === id ? 800 : 500, whiteSpace: 'nowrap',
                    transition: 'all 0.15s',
                  }}>
                  {id}. {name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
