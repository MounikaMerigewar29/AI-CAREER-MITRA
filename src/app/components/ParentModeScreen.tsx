import { Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    title: 'Career Overview',
    teluguHint: 'వృత్తి అవలోకనం',
    content: 'Software Engineering is a highly respected, well-paying career in the IT sector. Your child will design and build computer applications used by millions.',
    icon: '💼',
    color: '#1565C0',
    bg: '#E3F2FD',
  },
  {
    title: 'Job Opportunities',
    teluguHint: 'ఉద్యోగ అవకాశాలు',
    content: 'Over 20 lakh IT jobs are available across India. Companies like TCS, Infosys, Wipro, and Hyderabad tech parks actively hire graduates.',
    icon: '🏢',
    color: '#2E7D32',
    bg: '#E8F5E9',
  },
  {
    title: 'Expected Salary',
    teluguHint: 'వేతన అంచనా',
    content: 'Starting salary is ₹6–10 LPA (₹50,000–₹80,000/month). After 5 years experience, it grows to ₹20–30 LPA.',
    icon: '💰',
    color: '#E65100',
    bg: '#FFF3E0',
  },
  {
    title: 'Education Path',
    teluguHint: 'విద్యా మార్గం',
    content: 'After Class 12 with Maths: B.Tech CSE (4 years) at a government or private engineering college. Scholarships are available.',
    icon: '📚',
    color: '#6A1B9A',
    bg: '#F3E5F5',
  },
];

export function ParentModeScreen() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FFF8F0' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #E65100 0%, #FF7043 100%)',
        padding: '20px 20px 24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 28 }}>👨‍👩‍👦</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 22, fontWeight: 800 }}>Parent Mode</h2>
            <p style={{ margin: '2px 0 0', color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
              Explain to My Parents
            </p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 20px' }}>
        {/* Telugu voice card */}
        <div style={{
          background: 'linear-gradient(135deg, #1565C0, #0097A7)',
          borderRadius: 20, padding: '20px', marginBottom: 18,
          boxShadow: '0 6px 20px rgba(21,101,192,0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Volume2 size={24} color="white" />
            </div>
            <div>
              <div style={{ color: 'white', fontSize: 16, fontWeight: 800 }}>తెలుగులో వినండి</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Listen in Telugu Voice</div>
            </div>
          </div>
          {/* Waveform */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 14, height: 32 }}>
            {Array.from({length: 30}, (_, i) => (
              <div key={i} style={{
                flex: 1, borderRadius: 2,
                height: `${Math.sin(i * 0.7) * 40 + 50}%`,
                background: playing === -1 ? '#FFD54F' : 'rgba(255,255,255,0.4)',
                transition: 'background 0.2s',
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={() => setPlaying(playing === -1 ? null : -1)} style={{
              flex: 1, height: 48, borderRadius: 24, border: 'none',
              background: playing === -1 ? '#FFD54F' : 'white',
              color: playing === -1 ? '#1A237E' : '#1565C0',
              fontSize: 15, fontWeight: 800, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              {playing === -1 ? <Pause size={18} /> : <Play size={18} fill="#1565C0" />}
              {playing === -1 ? 'Pause' : 'Play Telugu Audio'}
            </button>
          </div>
        </div>

        {/* Sections */}
        <div style={{ marginBottom: 8, fontSize: 14, fontWeight: 700, color: '#546E7A' }}>
          CAREER INFORMATION
        </div>
        {sections.map(({ title, teluguHint, content, icon, color, bg }, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: 18, padding: 16, marginBottom: 12,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{
                width: 46, height: 46, borderRadius: 14, background: bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, flexShrink: 0,
              }}>{icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: '#1A237E', marginBottom: 1 }}>{title}</div>
                <div style={{ fontSize: 11, color, fontWeight: 600, marginBottom: 6 }}>{teluguHint}</div>
                <p style={{ margin: 0, fontSize: 13.5, color: '#546E7A', lineHeight: 1.6 }}>{content}</p>
              </div>
            </div>
            <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #F5F5F5', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setPlaying(playing === i ? null : i)} style={{
                background: playing === i ? color : bg, border: 'none', borderRadius: 16,
                padding: '7px 14px', color: playing === i ? 'white' : color,
                fontSize: 12, fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 5, transition: 'all 0.2s',
              }}>
                {playing === i ? <Pause size={12} /> : <Play size={12} fill={color} />}
                {playing === i ? 'Pause' : 'Play Audio'}
              </button>
            </div>
          </div>
        ))}

        {/* Simple note */}
        <div style={{
          background: '#FFF3E0', borderRadius: 14, padding: '14px 16px',
          display: 'flex', gap: 10, alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: 18 }}>💡</span>
          <div style={{ fontSize: 13, color: '#E65100', lineHeight: 1.5 }}>
            <strong>For Parents:</strong> This information is simplified for easy understanding. Our AI coach can answer any specific questions you have.
          </div>
        </div>
      </div>
    </div>
  );
}
