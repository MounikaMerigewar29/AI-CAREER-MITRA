import { ArrowLeft, Download, CheckCircle } from 'lucide-react';

interface Props {
  onBack: () => void;
  onSuccess: () => void;
}

const steps = [
  {
    phase: 'Class 12',
    duration: 'Now',
    desc: 'Focus on Mathematics, Physics & Computer Science. Score 75%+',
    status: 'current',
    icon: '📚',
    color: '#1565C0',
  },
  {
    phase: 'B.Tech CSE',
    duration: '4 Years',
    desc: 'Enroll in Computer Science Engineering. Top colleges: IIT, NIT, IIIT, State Universities',
    status: 'upcoming',
    icon: '🎓',
    color: '#0097A7',
  },
  {
    phase: 'Skill Development',
    duration: '1–2 Years',
    desc: 'Learn Python, Java, Web Development. Complete certifications from NPTEL, Coursera',
    status: 'upcoming',
    icon: '⚡',
    color: '#6A1B9A',
  },
  {
    phase: 'Internships',
    duration: '6–12 Months',
    desc: 'Apply for internships at TCS, Infosys, Wipro, startups. Build your project portfolio',
    status: 'upcoming',
    icon: '🏢',
    color: '#E65100',
  },
  {
    phase: 'Placement',
    duration: 'Final Year',
    desc: 'On-campus placement drives. Prepare for DSA, system design, and aptitude tests',
    status: 'upcoming',
    icon: '🎯',
    color: '#2E7D32',
  },
  {
    phase: 'Software Engineer',
    duration: 'Goal 🚀',
    desc: 'Starting salary ₹6–10 LPA. Grow to ₹25+ LPA with 3–5 years experience',
    status: 'goal',
    icon: '💻',
    color: '#1565C0',
  },
];

export function RoadmapScreen({ onBack, onSuccess }: Props) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #2E7D32 0%, #43A047 100%)',
        padding: '16px 20px 20px',
      }}>
        <button onClick={onBack} style={{
          background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 10,
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', marginBottom: 12,
        }}>
          <ArrowLeft size={20} color="white" />
        </button>
        <h2 style={{ margin: 0, color: 'white', fontSize: 22, fontWeight: 800 }}>Your Career Roadmap</h2>
        <p style={{ margin: '4px 0 0', color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
          Personalized path → Software Engineer
        </p>
        <div style={{
          marginTop: 12, background: 'rgba(255,255,255,0.15)', borderRadius: 10, padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 14 }}>⏱️</span>
          <span style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>
            Estimated Timeline: 5–6 years to reach your goal
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 20px' }}>
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 22, top: 22, bottom: 22, width: 3,
            background: 'linear-gradient(180deg, #1565C0, #43A047)',
            borderRadius: 2,
          }} />

          {steps.map(({ phase, duration, desc, status, icon, color }, i) => (
            <div key={i} style={{
              display: 'flex', gap: 16, marginBottom: 16,
              position: 'relative', zIndex: 1,
            }}>
              {/* Node */}
              <div style={{
                width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                background: status === 'goal' ? color : status === 'current' ? color : 'white',
                border: `3px solid ${color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, boxShadow: status === 'goal' ? `0 4px 16px ${color}40` : '0 2px 8px rgba(0,0,0,0.1)',
              }}>
                {status === 'current' ? <span style={{ fontSize: 18 }}>📍</span> : icon}
              </div>

              {/* Card */}
              <div style={{
                flex: 1, background: status === 'goal' ? `linear-gradient(135deg, ${color}15, ${color}05)` : 'white',
                borderRadius: 16, padding: '12px 14px',
                border: `2px solid ${status === 'current' ? color : status === 'goal' ? color : '#E8EAED'}`,
                boxShadow: status === 'current' ? `0 4px 16px ${color}25` : '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: status === 'goal' ? color : '#1A237E' }}>
                    {phase}
                    {status === 'current' && (
                      <span style={{
                        marginLeft: 8, background: color, color: 'white',
                        fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 10,
                      }}>YOU ARE HERE</span>
                    )}
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: color,
                    background: `${color}15`, padding: '2px 8px', borderRadius: 10,
                  }}>{duration}</span>
                </div>
                <p style={{ margin: 0, fontSize: 12.5, color: '#546E7A', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          background: '#E3F2FD', borderRadius: 16, padding: 16,
          display: 'flex', justifyContent: 'space-around', marginTop: 4, marginBottom: 16,
        }}>
          {[['₹8 LPA', 'Starting Salary'], ['₹25+ LPA', 'At 5 Years'], ['2M+', 'Job Openings']].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#1565C0' }}>{val}</div>
              <div style={{ fontSize: 11, color: '#78909C', fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            flex: 1, height: 52, background: '#E65100', border: 'none', borderRadius: 26,
            color: 'white', fontSize: 14, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            boxShadow: '0 4px 14px rgba(230,81,0,0.35)',
          }}>
            <Download size={16} /> Download PDF
          </button>
          <button onClick={onSuccess} style={{
            flex: 1, height: 52, background: '#2E7D32', border: 'none', borderRadius: 26,
            color: 'white', fontSize: 14, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            boxShadow: '0 4px 14px rgba(46,125,50,0.35)',
          }}>
            <CheckCircle size={16} /> Save Plan
          </button>
        </div>
      </div>
    </div>
  );
}
