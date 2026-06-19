import { CheckCircle, Circle, Lock } from 'lucide-react';

const milestones = [
  { label: 'Complete Profile', done: true, points: 50 },
  { label: 'Finish Interest Assessment', done: true, points: 100 },
  { label: 'Explore Career Options', done: true, points: 80 },
  { label: 'Generate Career Roadmap', done: true, points: 120 },
  { label: 'Find & Apply Scholarships', done: false, points: 150 },
  { label: 'Complete Skill Gap Analysis', done: false, points: 100 },
  { label: 'Practice Mock Interview (3x)', done: false, points: 200 },
  { label: 'Shortlist 3 Colleges', done: false, points: 80 },
  { label: 'Download Career Report', done: false, points: 50 },
];

const skills = [
  { name: 'Career Awareness', value: 85, color: '#1565C0' },
  { name: 'Self Assessment', value: 90, color: '#2E7D32' },
  { name: 'Goal Setting', value: 70, color: '#E65100' },
  { name: 'Interview Readiness', value: 40, color: '#6A1B9A' },
  { name: 'Financial Planning', value: 30, color: '#0097A7' },
];

const badges = [
  { icon: '🎯', label: 'First Assessment', earned: true },
  { icon: '🗺️', label: 'Roadmap Builder', earned: true },
  { icon: '💼', label: 'Career Explorer', earned: true },
  { icon: '🏆', label: 'Scholarship Hunter', earned: false },
  { icon: '🎙️', label: 'Interview Pro', earned: false },
  { icon: '⭐', label: 'Career Ready', earned: false },
];

const completedCount = milestones.filter(m => m.done).length;
const totalPoints = milestones.filter(m => m.done).reduce((a, m) => a + m.points, 0);
const readiness = Math.round((completedCount / milestones.length) * 100);
const circumference = 2 * Math.PI * 52;

export function ProgressDashboardScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1565C0 0%, #0097A7 100%)', padding: '14px 20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 24 }}>📈</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Progress Dashboard</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Your career readiness journey</p>
          </div>
        </div>
        {/* Readiness circle + stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(255,255,255,0.12)', borderRadius: 14, padding: '12px 16px' }}>
          <div style={{ position: 'relative', width: 80, height: 80, flexShrink: 0 }}>
            <svg width="80" height="80" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="10" />
              <circle cx="60" cy="60" r="52" fill="none" stroke="#FFD54F" strokeWidth="10"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={`${circumference * (1 - readiness / 100)}`}
                strokeLinecap="round" transform="rotate(-90 60 60)" />
              <text x="60" y="62" textAnchor="middle" fontSize="22" fontWeight="900" fill="white">{readiness}%</text>
              <text x="60" y="78" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.7)">Ready</text>
            </svg>
          </div>
          <div>
            <div style={{ color: 'white', fontSize: 15, fontWeight: 800 }}>Career Readiness Score</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 3 }}>{completedCount}/{milestones.length} milestones complete</div>
            <div style={{ marginTop: 6, display: 'flex', gap: 8 }}>
              <span style={{ background: '#FFD54F', color: '#1A237E', fontSize: 11, fontWeight: 900, padding: '3px 10px', borderRadius: 10 }}>🏅 {totalPoints} pts</span>
              <span style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 10 }}>Level 3</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* Milestones */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px 16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>🎯 Milestones</div>
          {milestones.map(({ label, done, points }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: i < milestones.length - 1 ? 10 : 0, opacity: done ? 1 : 0.7 }}>
              {done
                ? <CheckCircle size={22} color="#2E7D32" fill="#E8F5E9" />
                : i <= completedCount
                  ? <Circle size={22} color="#90A4AE" />
                  : <Lock size={22} color="#BDBDBD" />}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: done ? 700 : 500, color: done ? '#263238' : '#90A4AE', textDecoration: 'none' }}>{label}</div>
              </div>
              <span style={{
                fontSize: 11, fontWeight: 800, padding: '2px 8px', borderRadius: 10,
                background: done ? '#E8F5E9' : '#F5F5F5',
                color: done ? '#2E7D32' : '#90A4AE',
              }}>+{points}pts</span>
            </div>
          ))}
        </div>

        {/* Skills progress */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px 16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>💪 Career Skills Progress</div>
          {skills.map(({ name, value, color }, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#263238' }}>{name}</span>
                <span style={{ fontSize: 12, fontWeight: 800, color }}>{value}%</span>
              </div>
              <div style={{ height: 8, background: '#F0F0F0', borderRadius: 4 }}>
                <div style={{ width: `${value}%`, height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${color}, ${color}99)`, transition: 'width 0.5s' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px 16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>🏅 Achievements</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {badges.map(({ icon, label, earned }) => (
              <div key={label} style={{
                textAlign: 'center', padding: '12px 8px', borderRadius: 14,
                background: earned ? '#E3F2FD' : '#F5F5F5',
                border: `2px solid ${earned ? '#90CAF9' : '#EEEEEE'}`,
                opacity: earned ? 1 : 0.5,
              }}>
                <div style={{ fontSize: 26, marginBottom: 4, filter: earned ? 'none' : 'grayscale(100%)' }}>{icon}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: earned ? '#1565C0' : '#9E9E9E', lineHeight: 1.2 }}>{label}</div>
                {!earned && <div style={{ fontSize: 9, color: '#BDBDBD', marginTop: 3 }}>🔒 Locked</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Next action */}
        <div style={{ background: 'linear-gradient(135deg, #1565C0, #0097A7)', borderRadius: 16, padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: 'white', fontSize: 13, fontWeight: 800, marginBottom: 3 }}>Next Step 🚀</div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>Find & apply for scholarships</div>
            <div style={{ color: '#FFD54F', fontSize: 11, fontWeight: 700, marginTop: 3 }}>+150 pts reward</div>
          </div>
          <button style={{ background: 'white', border: 'none', borderRadius: 20, padding: '10px 16px', color: '#1565C0', fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
            Start →
          </button>
        </div>
      </div>
    </div>
  );
}
