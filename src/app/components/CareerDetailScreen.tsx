import { ArrowLeft, Map, MessageCircle, Star } from 'lucide-react';

interface Props {
  onRoadmap: () => void;
  onCoach: () => void;
  onBack: () => void;
}

const skills = ['Python', 'Java', 'JavaScript', 'React', 'SQL', 'Git', 'Problem Solving', 'Cloud (AWS)'];

const stories = [
  { name: 'Ravi Kumar', from: 'Guntur, AP', salary: '₹14 LPA', company: 'TCS', initial: 'R' },
  { name: 'Priya Reddy', from: 'Warangal, TG', salary: '₹18 LPA', company: 'Infosys', initial: 'P' },
];

export function CareerDetailScreen({ onRoadmap, onCoach, onBack }: Props) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1565C0 0%, #0097A7 100%)',
        padding: '16px 20px 24px',
      }}>
        <button onClick={onBack} style={{
          background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 10,
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', marginBottom: 14,
        }}>
          <ArrowLeft size={20} color="white" />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 20, background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32,
            border: '2px solid rgba(255,255,255,0.3)',
          }}>💻</div>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 22, fontWeight: 800 }}>Software Engineer</h2>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 4 }}>
              Technology & IT Sector
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 10, padding: '2px 10px', color: 'white', fontSize: 11, fontWeight: 700 }}>
                ₹6–25 LPA
              </span>
              <span style={{ background: '#4CAF50', borderRadius: 10, padding: '2px 10px', color: 'white', fontSize: 11, fontWeight: 700 }}>
                96% Match
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 20px' }}>
        {/* What this career does */}
        <div style={{ background: 'white', borderRadius: 18, padding: 16, marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>What does this career do?</span>
          </div>
          <p style={{ margin: 0, fontSize: 13.5, color: '#546E7A', lineHeight: 1.6 }}>
            Software Engineers design, develop, and maintain software applications. They write code, solve technical problems, and build products used by millions of people — from mobile apps to banking systems.
          </p>
        </div>

        {/* Skills */}
        <div style={{ background: 'white', borderRadius: 18, padding: 16, marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 18 }}>🛠️</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>Skills Required</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {skills.map(s => (
              <span key={s} style={{
                background: '#E3F2FD', color: '#1565C0', fontSize: 12, fontWeight: 700,
                padding: '6px 12px', borderRadius: 12,
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Salary & Demand */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
          <div style={{ flex: 1, background: '#E8F5E9', borderRadius: 16, padding: 14 }}>
            <div style={{ fontSize: 11, color: '#2E7D32', fontWeight: 700, marginBottom: 4 }}>AVG SALARY</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#1A237E' }}>₹12 LPA</div>
            <div style={{ fontSize: 11, color: '#4CAF50', marginTop: 4 }}>↑ 18% YoY growth</div>
          </div>
          <div style={{ flex: 1, background: '#FFF3E0', borderRadius: 16, padding: 14 }}>
            <div style={{ fontSize: 11, color: '#E65100', fontWeight: 700, marginBottom: 4 }}>FUTURE DEMAND</div>
            <div style={{ height: 6, background: '#FFE0B2', borderRadius: 3, margin: '8px 0 6px' }}>
              <div style={{ width: '88%', height: '100%', borderRadius: 3, background: '#FF9800' }} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#E65100' }}>Very High 🔥</div>
          </div>
        </div>

        {/* Learning roadmap brief */}
        <div style={{ background: 'white', borderRadius: 18, padding: 16, marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 18 }}>🗺️</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>Learning Roadmap</span>
          </div>
          {['Class 12 with Science', 'B.Tech CSE (4 years)', 'Online skill certifications', 'Internships & Projects', 'Placement / Job'].map((step, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < arr.length - 1 ? 0 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                  background: i === arr.length - 1 ? '#1565C0' : '#E3F2FD',
                  border: `2px solid ${i === arr.length - 1 ? '#1565C0' : '#90CAF9'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 800, color: i === arr.length - 1 ? 'white' : '#1565C0',
                }}>
                  {i + 1}
                </div>
                {i < arr.length - 1 && <div style={{ width: 2, height: 24, background: '#E3F2FD', margin: '2px 0' }} />}
              </div>
              <div style={{ paddingBottom: i < arr.length - 1 ? 0 : 0, paddingTop: 1, fontSize: 13, color: '#263238', fontWeight: i === arr.length - 1 ? 700 : 500, marginBottom: 24 }}>
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* Success stories */}
        <div style={{ background: 'white', borderRadius: 18, padding: 16, marginBottom: 16, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <Star size={16} color="#FFB300" fill="#FFB300" />
            <span style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>Success Stories</span>
          </div>
          {stories.map(({ name, from, salary, company, initial }) => (
            <div key={name} style={{
              display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10,
              background: '#F5F7FF', borderRadius: 12, padding: '10px 12px',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: '#1565C0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: 16, fontWeight: 800, flexShrink: 0,
              }}>{initial}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1A237E' }}>{name}</div>
                <div style={{ fontSize: 12, color: '#78909C' }}>{from} → {company}</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#2E7D32' }}>{salary}</div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={onRoadmap} style={{
            flex: 1, height: 52, background: '#1565C0', border: 'none', borderRadius: 26,
            color: 'white', fontSize: 14, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            boxShadow: '0 4px 14px rgba(21,101,192,0.35)',
          }}>
            <Map size={16} /> Roadmap
          </button>
          <button onClick={onCoach} style={{
            flex: 1, height: 52, background: '#E8F5E9', border: '2px solid #A5D6A7',
            borderRadius: 26, color: '#2E7D32', fontSize: 14, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <MessageCircle size={16} /> AI Coach
          </button>
        </div>
      </div>
    </div>
  );
}
