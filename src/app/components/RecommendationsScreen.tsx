import { TrendingUp, IndianRupee, ChevronRight } from 'lucide-react';

interface Props { onSelect: () => void; }

const careers = [
  {
    title: 'Software Engineer',
    emoji: '💻',
    salary: '₹6 – 25 LPA',
    skills: ['Python', 'Java', 'React', 'SQL'],
    growth: 'Very High',
    growthColor: '#2E7D32',
    matchScore: 96,
    color: '#1565C0',
    bg: 'linear-gradient(135deg, #E3F2FD, #E1F5FE)',
  },
  {
    title: 'Data Analyst',
    emoji: '📊',
    salary: '₹5 – 18 LPA',
    skills: ['Python', 'SQL', 'Excel', 'Power BI'],
    growth: 'High',
    growthColor: '#1565C0',
    matchScore: 89,
    color: '#0097A7',
    bg: 'linear-gradient(135deg, #E0F7FA, #E8F5E9)',
  },
  {
    title: 'UI/UX Designer',
    emoji: '🎨',
    salary: '₹4 – 16 LPA',
    skills: ['Figma', 'Sketch', 'CSS', 'Prototyping'],
    growth: 'High',
    growthColor: '#1565C0',
    matchScore: 82,
    color: '#6A1B9A',
    bg: 'linear-gradient(135deg, #F3E5F5, #EDE7F6)',
  },
  {
    title: 'Teacher / Educator',
    emoji: '👩‍🏫',
    salary: '₹3 – 10 LPA',
    skills: ['Communication', 'Subject expertise', 'Patience'],
    growth: 'Stable',
    growthColor: '#F57F17',
    matchScore: 74,
    color: '#E65100',
    bg: 'linear-gradient(135deg, #FFF3E0, #FFF8E1)',
  },
];

export function RecommendationsScreen({ onSelect }: Props) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'white', padding: '16px 20px 14px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, background: '#E3F2FD',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
          }}>🎯</div>
          <div>
            <div style={{ fontSize: 12, color: '#78909C', fontWeight: 600 }}>AI-POWERED MATCH</div>
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#1A237E' }}>Career Recommendations</h2>
          </div>
        </div>
        <div style={{
          marginTop: 12, background: '#E8F5E9', borderRadius: 10, padding: '8px 12px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <TrendingUp size={14} color="#2E7D32" />
          <span style={{ fontSize: 12, color: '#2E7D32', fontWeight: 600 }}>
            Top 4 careers matched to your profile
          </span>
        </div>
      </div>

      {/* Career cards */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {careers.map(({ title, emoji, salary, skills, growth, growthColor, matchScore, color, bg }, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: 20,
            boxShadow: '0 3px 14px rgba(0,0,0,0.07)', overflow: 'hidden',
          }}>
            {/* Card header */}
            <div style={{ background: bg, padding: '16px 16px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 16, background: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}>
                {emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: '#1A237E', marginBottom: 4 }}>{title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <IndianRupee size={12} color="#2E7D32" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#2E7D32' }}>{salary}</span>
                </div>
              </div>
              <div style={{
                background: color, borderRadius: 20, padding: '6px 10px',
                textAlign: 'center',
              }}>
                <div style={{ color: 'white', fontSize: 13, fontWeight: 800 }}>{matchScore}%</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 9, fontWeight: 600 }}>MATCH</div>
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '12px 16px' }}>
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700, marginBottom: 6 }}>SKILLS REQUIRED</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {skills.map(s => (
                    <span key={s} style={{
                      background: '#F5F7FF', color: '#546E7A', fontSize: 12, fontWeight: 600,
                      padding: '4px 10px', borderRadius: 10, border: '1px solid #E8EAED',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700 }}>GROWTH: </span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: growthColor }}>{growth}</span>
                </div>
                <button onClick={onSelect} style={{
                  background: color, border: 'none', borderRadius: 20,
                  padding: '8px 16px', color: 'white', fontSize: 13, fontWeight: 700,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  View Details <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
