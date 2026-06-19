import { TrendingUp } from 'lucide-react';

interface Props { onExplore: () => void; }

const stats = [
  { value: '12', label: 'Careers\nExplored', icon: '🎯', color: '#1565C0', bg: '#E3F2FD' },
  { value: '8', label: 'Scholarships\nFound', icon: '🏆', color: '#2E7D32', bg: '#E8F5E9' },
  { value: '3', label: 'Roadmaps\nGenerated', icon: '🗺️', color: '#E65100', bg: '#FFF3E0' },
];

const activity = [
  { text: 'Explored Software Engineering career', time: '10 min ago', icon: '💻', color: '#1565C0' },
  { text: 'Found Post Matric Scholarship match', time: '25 min ago', icon: '🏆', color: '#2E7D32' },
  { text: 'Generated B.Tech CSE roadmap', time: '1 hour ago', icon: '🗺️', color: '#E65100' },
  { text: 'Completed Interest Assessment', time: 'Today', icon: '✅', color: '#6A1B9A' },
];

const topCareers = [
  { title: 'Software Engineer', match: 96, color: '#1565C0' },
  { title: 'Data Analyst', match: 89, color: '#0097A7' },
  { title: 'UI/UX Designer', match: 82, color: '#6A1B9A' },
];

export function DashboardScreen({ onExplore }: Props) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1565C0 0%, #0097A7 100%)',
        padding: '16px 20px 24px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 600 }}>GOOD MORNING</div>
            <h2 style={{ margin: '2px 0 0', color: 'white', fontSize: 22, fontWeight: 800 }}>Ravi Kumar 👋</h2>
          </div>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
            border: '2px solid rgba(255,255,255,0.3)',
          }}>🎓</div>
        </div>
        <div style={{
          marginTop: 14, background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 16 }}>🔥</span>
          <div>
            <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>7-day streak! </span>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Keep exploring your career options</span>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 20px' }}>
        {/* Stats row */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
          {stats.map(({ value, label, icon, color, bg }) => (
            <div key={label} style={{
              flex: 1, background: 'white', borderRadius: 18, padding: '14px 10px',
              boxShadow: '0 3px 12px rgba(0,0,0,0.06)', textAlign: 'center',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, margin: '0 auto 8px',
              }}>{icon}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color, lineHeight: 1.1 }}>{value}</div>
              <div style={{ fontSize: 10, color: '#78909C', fontWeight: 600, marginTop: 4, lineHeight: 1.3, whiteSpace: 'pre-line' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Top career matches */}
        <div style={{ background: 'white', borderRadius: 18, padding: 16, marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>Top Career Matches</span>
            <TrendingUp size={16} color="#1565C0" />
          </div>
          {topCareers.map(({ title, match, color }) => (
            <div key={title} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#263238' }}>{title}</span>
                <span style={{ fontSize: 12, fontWeight: 800, color }}>{match}%</span>
              </div>
              <div style={{ height: 8, background: '#F5F5F5', borderRadius: 4 }}>
                <div style={{
                  width: `${match}%`, height: '100%', borderRadius: 4,
                  background: `linear-gradient(90deg, ${color}, ${color}99)`,
                  transition: 'width 0.5s ease',
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Recent activity */}
        <div style={{ background: 'white', borderRadius: 18, padding: 16, marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>Recent Activity</div>
          {activity.map(({ text, time, icon, color }, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, alignItems: 'flex-start',
              paddingBottom: i < activity.length - 1 ? 12 : 0,
              borderBottom: i < activity.length - 1 ? '1px solid #F5F5F5' : 'none',
              marginBottom: i < activity.length - 1 ? 12 : 0,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                background: `${color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
              }}>{icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, color: '#263238', fontWeight: 600, lineHeight: 1.3 }}>{text}</div>
                <div style={{ fontSize: 11, color: '#9E9E9E', marginTop: 2 }}>{time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational quote */}
        <div style={{
          background: 'linear-gradient(135deg, #1565C0, #0097A7)',
          borderRadius: 18, padding: '18px 20px', marginBottom: 16,
        }}>
          <div style={{ fontSize: 20, marginBottom: 8 }}>💭</div>
          <p style={{ margin: 0, color: 'white', fontSize: 15, fontWeight: 700, lineHeight: 1.5, fontStyle: 'italic' }}>
            "Your future begins with informed decisions."
          </p>
          <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
            — AI Career Mitra
          </p>
        </div>

        <button onClick={onExplore} style={{
          width: '100%', height: 54, background: '#1565C0', border: 'none',
          borderRadius: 27, color: 'white', fontSize: 16, fontWeight: 800,
          cursor: 'pointer', boxShadow: '0 5px 18px rgba(21,101,192,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          🚀 Explore More Careers
        </button>
      </div>
    </div>
  );
}
