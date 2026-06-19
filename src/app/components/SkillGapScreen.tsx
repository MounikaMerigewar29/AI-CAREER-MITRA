import { BookOpen, ExternalLink } from 'lucide-react';

const skills = [
  { name: 'Python Programming', current: 25, required: 85, resource: 'Python Bootcamp – Coursera' },
  { name: 'Data Structures & Algo', current: 35, required: 90, resource: 'DSA – NPTEL Free Course' },
  { name: 'Web Development', current: 48, required: 80, resource: 'Full Stack – freeCodeCamp' },
  { name: 'SQL & Databases', current: 12, required: 70, resource: 'SQL for Beginners – Kaggle' },
  { name: 'Communication Skills', current: 72, required: 65, resource: null },
  { name: 'Git & Version Control', current: 20, required: 75, resource: 'Git Crash Course – YouTube' },
  { name: 'Cloud Computing (AWS)', current: 8, required: 50, resource: 'AWS Fundamentals – Coursera' },
  { name: 'Mathematics (Discrete)', current: 55, required: 60, resource: 'Discrete Maths – NPTEL' },
];

function getStatus(current: number, required: number) {
  if (current >= required) return { label: 'Achieved', color: '#2E7D32', bg: '#E8F5E9', bar: '#4CAF50' };
  const gap = required - current;
  if (gap <= 20) return { label: 'Almost there', color: '#F57F17', bg: '#FFF8E1', bar: '#FFC107' };
  return { label: 'Needs Work', color: '#C62828', bg: '#FFEBEE', bar: '#EF5350' };
}

export function SkillGapScreen() {
  const achieved = skills.filter(s => s.current >= s.required).length;
  const overallReadiness = Math.round(skills.reduce((a, s) => a + Math.min(s.current / s.required * 100, 100), 0) / skills.length);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1565C0 0%, #283593 100%)', padding: '14px 20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 24 }}>📊</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Skill Gap Analyzer</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Target: Software Engineer</p>
          </div>
        </div>
        {/* Overall readiness */}
        <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative', width: 56, height: 56, flexShrink: 0 }}>
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="5" />
              <circle cx="28" cy="28" r="22" fill="none" stroke="#69F0AE" strokeWidth="5"
                strokeDasharray={`${2 * Math.PI * 22}`}
                strokeDashoffset={`${2 * Math.PI * 22 * (1 - overallReadiness / 100)}`}
                strokeLinecap="round" transform="rotate(-90 28 28)" />
            </svg>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 12, fontWeight: 900, color: 'white' }}>{overallReadiness}%</span>
            </div>
          </div>
          <div>
            <div style={{ color: 'white', fontSize: 15, fontWeight: 800 }}>Overall Readiness</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 2 }}>
              {achieved}/{skills.length} skills achieved • {skills.length - achieved} gaps to close
            </div>
          </div>
        </div>
      </div>

      {/* Skills list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {skills.map(({ name, current, required, resource }, i) => {
          const status = getStatus(current, required);
          const gap = Math.max(0, required - current);
          return (
            <div key={i} style={{ background: 'white', borderRadius: 16, padding: '14px', marginBottom: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1A237E', marginBottom: 3 }}>{name}</div>
                  <span style={{ fontSize: 10, fontWeight: 800, color: status.color, background: status.bg, padding: '2px 8px', borderRadius: 8 }}>
                    {status.label}
                    {gap > 0 ? ` • ${gap}% gap` : ' ✓'}
                  </span>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#263238' }}>{current}%</div>
                  <div style={{ fontSize: 10, color: '#90A4AE' }}>of {required}%</div>
                </div>
              </div>
              {/* Dual progress bar */}
              <div style={{ position: 'relative', height: 10, background: '#F0F0F0', borderRadius: 5 }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${required}%`, background: '#F0F0F0', borderRadius: 5 }} />
                <div style={{
                  position: 'absolute', left: 0, top: 0, height: '100%',
                  width: `${current}%`, borderRadius: 5,
                  background: `linear-gradient(90deg, ${status.bar}, ${status.bar}CC)`,
                  transition: 'width 0.5s ease',
                }} />
                {/* Required marker */}
                <div style={{
                  position: 'absolute', left: `${required}%`, top: -3, bottom: -3,
                  width: 2, background: '#263238', borderRadius: 1,
                  transform: 'translateX(-50%)',
                }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                <span style={{ fontSize: 10, color: '#90A4AE' }}>Current: {current}%</span>
                <span style={{ fontSize: 10, color: '#546E7A', fontWeight: 600 }}>Target: {required}%</span>
              </div>
              {resource && (
                <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8, background: '#E3F2FD', borderRadius: 10, padding: '8px 10px' }}>
                  <BookOpen size={13} color="#1565C0" />
                  <span style={{ fontSize: 12, color: '#1565C0', fontWeight: 600, flex: 1 }}>📎 {resource}</span>
                  <ExternalLink size={12} color="#1565C0" />
                </div>
              )}
              {!resource && (
                <div style={{ marginTop: 8, background: '#E8F5E9', borderRadius: 10, padding: '6px 10px' }}>
                  <span style={{ fontSize: 12, color: '#2E7D32', fontWeight: 700 }}>✅ You already exceed requirements!</span>
                </div>
              )}
            </div>
          );
        })}

        <div style={{
          background: 'linear-gradient(135deg, #1565C0, #0097A7)',
          borderRadius: 16, padding: '14px 16px', marginTop: 4,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <div style={{ color: 'white', fontSize: 14, fontWeight: 800 }}>Get Your Learning Plan</div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>AI-curated courses to close all gaps</div>
          </div>
          <button style={{
            background: 'white', border: 'none', borderRadius: 20,
            padding: '10px 16px', color: '#1565C0', fontSize: 13, fontWeight: 800, cursor: 'pointer',
          }}>Generate →</button>
        </div>
      </div>
    </div>
  );
}
