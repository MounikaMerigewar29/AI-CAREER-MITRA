import { Navigation, Zap } from 'lucide-react';

const route = [
  { id: 0, label: 'You Are Here', sub: 'Intermediate Student, Nandyal', icon: '📍', status: 'current', color: '#1565C0', action: null },
  { id: 1, label: 'Foundation Skills', sub: 'Python basics, Maths (Class 11-12)', icon: '📚', status: 'next', color: '#0097A7', action: 'Start Python Course →' },
  { id: 2, label: 'Qualify JEE / EAMCET', sub: 'Score 85%+ in Class 12 | Rank < 10K', icon: '🎯', status: 'upcoming', color: '#6A1B9A', action: null },
  { id: 3, label: 'B.Tech CSE (4 Years)', sub: 'NIT Warangal / JNTU / IIIT Hyd', icon: '🎓', status: 'upcoming', color: '#2E7D32', action: null },
  { id: 4, label: 'Skill Development', sub: 'DSA, Full Stack, Cloud • NPTEL, Coursera', icon: '⚡', status: 'upcoming', color: '#E65100', action: null },
  { id: 5, label: 'GitHub Projects', sub: 'Build 5 real projects | Active contributions', icon: '🛠️', status: 'upcoming', color: '#0097A7', action: null },
  { id: 6, label: 'Internships (2-3x)', sub: 'TCS, Infosys, Startups | Earn while learning', icon: '🏢', status: 'upcoming', color: '#1565C0', action: null },
  { id: 7, label: '🎯 Software Engineer', sub: 'Google / Amazon / TCS | ₹8–45 LPA', icon: '💻', status: 'goal', color: '#FFD54F', action: null },
];

const overallProgress = 12;

export function CareerGPSScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header — Maps-style */}
      <div style={{ background: 'linear-gradient(135deg, #0D47A1, #1565C0)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Navigation size={20} color="white" />
          </div>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>AI Career GPS</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Route to Software Engineer</p>
          </div>
        </div>
        {/* Progress bar */}
        <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '10px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>Journey Progress</span>
            <span style={{ color: 'white', fontWeight: 800, fontSize: 12 }}>{overallProgress}% Complete</span>
          </div>
          <div style={{ height: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 4 }}>
            <div style={{ width: `${overallProgress}%`, height: '100%', borderRadius: 4, background: 'linear-gradient(90deg, #69F0AE, #00BCD4)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10 }}>📍 Nandyal</span>
            <span style={{ color: '#FFD54F', fontSize: 10, fontWeight: 700 }}>🎯 Software Engineer</span>
          </div>
        </div>
      </div>

      {/* Route map */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px 20px' }}>
        {/* ETA card */}
        <div style={{ background: 'white', borderRadius: 16, padding: '12px 16px', marginBottom: 14, display: 'flex', gap: 12, alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
          <Zap size={20} color="#E65100" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#263238' }}>Estimated Time to Goal</div>
            <div style={{ fontSize: 12, color: '#78909C' }}>5–6 years • 8 milestones</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: '#1565C0' }}>2031</div>
            <div style={{ fontSize: 10, color: '#78909C' }}>Target Year</div>
          </div>
        </div>

        {/* Route steps */}
        <div style={{ position: 'relative' }}>
          {/* Road line */}
          <div style={{ position: 'absolute', left: 22, top: 22, bottom: 22, width: 4, borderRadius: 2, background: 'linear-gradient(180deg, #1565C0 12%, #E8EAED 12%)' }} />

          {route.map(({ id, label, sub, icon, status, color, action }, i) => {
            const isCurrent = status === 'current';
            const isGoal = status === 'goal';
            const isNext = status === 'next';
            return (
              <div key={id} style={{ display: 'flex', gap: 14, marginBottom: 14, position: 'relative', zIndex: 1 }}>
                {/* Node */}
                <div style={{
                  width: 46, height: 46, borderRadius: isCurrent || isGoal ? 14 : '50%', flexShrink: 0,
                  background: isCurrent ? '#1565C0' : isGoal ? '#FFD54F' : isNext ? 'white' : '#F5F7FF',
                  border: `3px solid ${isCurrent ? '#1565C0' : isGoal ? '#FFB300' : isNext ? '#1565C0' : '#E8EAED'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                  boxShadow: isCurrent ? '0 4px 14px rgba(21,101,192,0.4)' : isGoal ? '0 4px 14px rgba(255,179,0,0.4)' : '0 2px 6px rgba(0,0,0,0.06)',
                }}>{icon}</div>

                {/* Card */}
                <div style={{
                  flex: 1, background: isCurrent ? '#1565C0' : isGoal ? 'linear-gradient(135deg, #FFF8E1, #FFF3E0)' : 'white',
                  borderRadius: 16, padding: '10px 14px',
                  border: `2px solid ${isCurrent ? '#1565C0' : isGoal ? '#FFB300' : isNext ? '#90CAF9' : '#F0F0F0'}`,
                  boxShadow: isCurrent || isGoal ? `0 4px 16px ${isGoal ? 'rgba(255,179,0,0.2)' : 'rgba(21,101,192,0.2)'}` : '0 1px 6px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: isCurrent ? 'white' : isGoal ? '#E65100' : '#1A237E' }}>
                      {label}
                      {isCurrent && <span style={{ fontSize: 9, background: '#69F0AE', color: '#1B5E20', padding: '1px 6px', borderRadius: 8, marginLeft: 6, fontWeight: 800 }}>NOW</span>}
                    </div>
                    {isNext && <span style={{ fontSize: 9, background: '#E3F2FD', color: '#1565C0', padding: '2px 8px', borderRadius: 8, fontWeight: 800 }}>NEXT STEP</span>}
                  </div>
                  <div style={{ fontSize: 12, color: isCurrent ? 'rgba(255,255,255,0.8)' : '#78909C', lineHeight: 1.4 }}>{sub}</div>
                  {action && (
                    <button style={{ marginTop: 8, background: 'white', border: 'none', borderRadius: 14, padding: '6px 12px', fontSize: 12, fontWeight: 800, color: '#1565C0', cursor: 'pointer' }}>
                      {action}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reroute button */}
        <div style={{ background: '#E3F2FD', borderRadius: 14, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1565C0' }}>🔄 Explore alternate routes?</div>
            <div style={{ fontSize: 11, color: '#78909C' }}>Polytechnic → Lateral Entry B.Tech path</div>
          </div>
          <button style={{ background: '#1565C0', border: 'none', borderRadius: 18, padding: '8px 14px', color: 'white', fontSize: 12, fontWeight: 800, cursor: 'pointer' }}>
            Reroute
          </button>
        </div>
      </div>
    </div>
  );
}
