import { useState } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const careers = ['Software Engineer', 'Data Analyst', 'Civil Services', 'Teacher', 'UI/UX Designer'];

const realityData: Record<string, {
  emoji: string;
  overall: string;
  overallColor: string;
  metrics: { label: string; value: number; desc: string; icon: string; color: string }[];
  successFactors: string[];
  pitfalls: string[];
  prepTime: string;
  verdict: string;
}> = {
  'Software Engineer': {
    emoji: '💻', overall: 'Challenging but Highly Rewarding', overallColor: '#1565C0',
    metrics: [
      { label: 'Difficulty Level', value: 72, desc: 'Requires consistent learning & practice', icon: '🧠', color: '#E65100' },
      { label: 'Competition Level', value: 80, desc: 'Lakhs of engineers compete annually', icon: '⚔️', color: '#EF5350' },
      { label: 'Required Commitment', value: 78, desc: '4-yr degree + 2 yrs skill building', icon: '⏱️', color: '#F57F17' },
      { label: 'Stress Level', value: 60, desc: 'Deadlines & sprints can be intense', icon: '😤', color: '#E65100' },
      { label: 'Upskilling Need', value: 85, desc: 'Tech evolves fast — continuous learning required', icon: '📚', color: '#6A1B9A' },
    ],
    successFactors: ['Practice DSA daily on LeetCode', 'Build 3–5 GitHub projects', 'Do 2+ internships before graduation', 'Learn from top NPTEL/Coursera courses', 'Network on LinkedIn proactively'],
    pitfalls: ['Ignoring fundamentals for shortcuts', 'Not building real projects', 'Skipping internships', 'Learning only theory without coding'],
    prepTime: '5–6 years (Class 12 → Placement)',
    verdict: 'If you enjoy problem-solving and building things, this challenge is absolutely worth it. The rewards are exceptional.',
  },
  'Data Analyst': {
    emoji: '📊', overall: 'Moderately Challenging & Very Rewarding', overallColor: '#0097A7',
    metrics: [
      { label: 'Difficulty Level', value: 62, desc: 'More accessible than SDE for beginners', icon: '🧠', color: '#F57F17' },
      { label: 'Competition Level', value: 70, desc: 'Lower than SDE, rapidly growing field', icon: '⚔️', color: '#E65100' },
      { label: 'Required Commitment', value: 65, desc: 'Any degree + Python/SQL certifications', icon: '⏱️', color: '#F57F17' },
      { label: 'Stress Level', value: 50, desc: 'Generally good work-life balance', icon: '😊', color: '#2E7D32' },
      { label: 'Upskilling Need', value: 75, desc: 'SQL, Python, Excel skills always evolving', icon: '📚', color: '#E65100' },
    ],
    successFactors: ['Master SQL and Excel first', 'Learn Python for data analysis', 'Complete Google Data Analytics cert', 'Build portfolio on Kaggle', 'Learn Power BI or Tableau'],
    pitfalls: ['Ignoring business context', 'Only knowing tools without statistics', 'Not communicating findings clearly'],
    prepTime: '3–4 years with focused skill building',
    verdict: 'Great choice for analytical minds who prefer insights over pure coding. Growing demand + good salaries.',
  },
  'Civil Services': {
    emoji: '🏛️', overall: 'Extremely Challenging — Requires Total Dedication', overallColor: '#E65100',
    metrics: [
      { label: 'Difficulty Level', value: 95, desc: 'UPSC is one of the toughest exams globally', icon: '🧠', color: '#EF5350' },
      { label: 'Competition Level', value: 98, desc: '10 lakh+ candidates for ~1000 seats', icon: '⚔️', color: '#B71C1C' },
      { label: 'Required Commitment', value: 92, desc: '2–5 years of dedicated preparation', icon: '⏱️', color: '#EF5350' },
      { label: 'Stress Level', value: 88, desc: 'High uncertainty until selection', icon: '😰', color: '#EF5350' },
      { label: 'Upskilling Need', value: 70, desc: 'Constant reading of current affairs + static GK', icon: '📚', color: '#E65100' },
    ],
    successFactors: ['NCERT basics first', 'Daily newspaper habit (The Hindu)', 'Answer writing practice from Day 1', 'Join a good test series', 'Mentor guidance is critical'],
    pitfalls: ['Studying without strategy', 'Ignoring answer writing till late', 'Not having a backup plan', 'Isolation from family support'],
    prepTime: '3–5 years of serious preparation',
    verdict: 'Only attempt if you have immense passion for public service. The job security and respect are unmatched — but the journey is hard.',
  },
  'Teacher': {
    emoji: '👩‍🏫', overall: 'Accessible & Highly Fulfilling', overallColor: '#2E7D32',
    metrics: [
      { label: 'Difficulty Level', value: 45, desc: 'Subject knowledge + communication skills', icon: '🧠', color: '#2E7D32' },
      { label: 'Competition Level', value: 60, desc: 'Government teaching is competitive', icon: '⚔️', color: '#F57F17' },
      { label: 'Required Commitment', value: 55, desc: 'Degree + B.Ed + TET/DSC exam', icon: '⏱️', color: '#2E7D32' },
      { label: 'Stress Level', value: 35, desc: 'Generally low, excellent work-life balance', icon: '😊', color: '#2E7D32' },
      { label: 'Upskilling Need', value: 48, desc: 'Subject updates + digital teaching skills', icon: '📚', color: '#2E7D32' },
    ],
    successFactors: ['Deep subject mastery', 'Clear communication in Telugu/English', 'Pass TET/DSC with good rank', 'Learn EdTech tools like DIKSHA', 'Be patient and student-focused'],
    pitfalls: ['Underestimating exam competition', 'Neglecting digital teaching skills', 'Not connecting with students emotionally'],
    prepTime: '4–5 years (degree + B.Ed + exam prep)',
    verdict: 'Perfect for those with patience and a desire to impact society. Government teaching offers excellent job security and respect.',
  },
  'UI/UX Designer': {
    emoji: '🎨', overall: 'Creative & Moderately Challenging', overallColor: '#6A1B9A',
    metrics: [
      { label: 'Difficulty Level', value: 55, desc: 'Portfolio-based — creativity matters most', icon: '🧠', color: '#F57F17' },
      { label: 'Competition Level', value: 65, desc: 'Growing rapidly; good portfolio stands out', icon: '⚔️', color: '#E65100' },
      { label: 'Required Commitment', value: 58, desc: 'Any degree + design tools + portfolio', icon: '⏱️', color: '#F57F17' },
      { label: 'Stress Level', value: 48, desc: 'Client feedback can be challenging', icon: '😊', color: '#2E7D32' },
      { label: 'Upskilling Need', value: 70, desc: 'Design trends and tools change fast', icon: '📚', color: '#E65100' },
    ],
    successFactors: ['Build 5+ case studies on Behance', 'Master Figma completely (it\'s free!)', 'Understand user psychology basics', 'Freelance to build experience fast', 'Follow top designers on LinkedIn'],
    pitfalls: ['Building beautiful but unusable designs', 'Ignoring user research', 'Not explaining design decisions'],
    prepTime: '2–3 years with dedicated portfolio building',
    verdict: 'Excellent for visual thinkers. Lower barrier to entry than coding roles, with strong remote work potential.',
  },
};

export function CareerRealityCheckScreen() {
  const [selected, setSelected] = useState('Software Engineer');
  const data = realityData[selected];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #37474F 0%, #455A64 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <AlertTriangle size={22} color="#FFD54F" />
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>AI Career Reality Check</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Honest expectations before you decide</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 5, overflowX: 'auto', paddingBottom: 2 }}>
          {careers.map(c => (
            <button key={c} onClick={() => setSelected(c)} style={{
              padding: '6px 12px', borderRadius: 18, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              background: selected === c ? 'white' : 'rgba(255,255,255,0.15)',
              color: selected === c ? '#37474F' : 'rgba(255,255,255,0.85)',
              fontSize: 11, fontWeight: 800, flexShrink: 0,
            }}>{c}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* Overall verdict banner */}
        <div style={{ background: `${data.overallColor}15`, border: `2px solid ${data.overallColor}30`, borderRadius: 16, padding: '12px 16px', marginBottom: 14, display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 28 }}>{data.emoji}</span>
          <div>
            <div style={{ fontSize: 11, color: data.overallColor, fontWeight: 800, letterSpacing: 0.5, marginBottom: 2 }}>OVERALL ASSESSMENT</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>{data.overall}</div>
            <div style={{ fontSize: 11, color: '#78909C', marginTop: 2 }}>⏱ {data.prepTime}</div>
          </div>
        </div>

        {/* Reality metrics */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px 16px', marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <AlertTriangle size={15} color="#F57F17" />
            <span style={{ fontSize: 13, fontWeight: 800, color: '#1A237E' }}>Reality Meters</span>
            <span style={{ fontSize: 10, color: '#78909C', marginLeft: 4 }}>Higher = More demanding</span>
          </div>
          {data.metrics.map(({ label, value, desc, icon, color }, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ fontSize: 14 }}>{icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#263238' }}>{label}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 900, color }}>{value}/100</span>
              </div>
              <div style={{ height: 9, background: '#F0F0F0', borderRadius: 5 }}>
                <div style={{ width: `${value}%`, height: '100%', borderRadius: 5, background: `linear-gradient(90deg, ${color}CC, ${color})`, transition: 'width 0.5s ease' }} />
              </div>
              <div style={{ fontSize: 11, color: '#90A4AE', marginTop: 3 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* Success factors */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px', marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <CheckCircle size={15} color="#2E7D32" />
            <span style={{ fontSize: 13, fontWeight: 800, color: '#1A237E' }}>Keys to Success</span>
          </div>
          {data.successFactors.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'flex-start' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#2E7D32', fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✓</div>
              <span style={{ fontSize: 13, color: '#546E7A', lineHeight: 1.4 }}>{f}</span>
            </div>
          ))}
        </div>

        {/* Common pitfalls */}
        <div style={{ background: '#FFF8E1', borderRadius: 16, padding: '12px 14px', marginBottom: 14, border: '1px solid #FFE082' }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#F57F17', marginBottom: 8 }}>⚠️ Common Pitfalls to Avoid</div>
          {data.pitfalls.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 5 }}>
              <span style={{ fontSize: 11, color: '#EF5350', flexShrink: 0, marginTop: 1 }}>✗</span>
              <span style={{ fontSize: 12, color: '#78909C', lineHeight: 1.4 }}>{p}</span>
            </div>
          ))}
        </div>

        {/* AI verdict */}
        <div style={{ background: 'linear-gradient(135deg, #37474F, #455A64)', borderRadius: 16, padding: '14px', marginBottom: 14 }}>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11, fontWeight: 700, marginBottom: 5 }}>🤖 AI VERDICT</div>
          <p style={{ margin: 0, color: 'white', fontSize: 13, lineHeight: 1.6 }}>{data.verdict}</p>
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            flex: 1, height: 52, background: data.overallColor, border: 'none', borderRadius: 26,
            color: 'white', fontSize: 14, fontWeight: 800, cursor: 'pointer',
            boxShadow: `0 4px 14px ${data.overallColor}40`,
          }}>
            ✅ I'm Ready — Let's Go!
          </button>
          <button style={{
            flex: 1, height: 52, background: '#F5F7FF', border: '2px solid #E8EAED',
            borderRadius: 26, color: '#546E7A', fontSize: 13, fontWeight: 700, cursor: 'pointer',
          }}>
            🔄 Show Easier Options
          </button>
        </div>
      </div>
    </div>
  );
}
