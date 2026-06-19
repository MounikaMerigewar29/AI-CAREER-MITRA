import { motion } from 'motion/react';

function FutureAvatar() {
  return (
    <svg viewBox="0 0 260 280" fill="none" style={{ width: 220, height: 240 }}>
      {/* Glow rings */}
      <circle cx="130" cy="120" r="100" fill="rgba(100,200,255,0.04)" />
      <circle cx="130" cy="120" r="75" fill="rgba(100,200,255,0.06)" />
      {/* Floating particles */}
      {[[40, 40], [220, 50], [30, 180], [240, 160], [60, 240], [210, 230]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3 + (i % 3)} fill="#64FFDA" opacity={0.6} />
      ))}
      {/* Professional jacket */}
      <path d="M80 150 Q98 140 130 138 Q162 140 180 150 L188 240 H72 Z" fill="#1A237E" />
      <path d="M112 138 L130 165 L148 138" fill="rgba(255,255,255,0.15)" />
      {/* Tie */}
      <polygon points="130,142 123,160 130,168 137,160" fill="#FF7043" />
      {/* Collar */}
      <polygon points="112,138 122,155 130,142" fill="white" opacity="0.9" />
      <polygon points="148,138 138,155 130,142" fill="white" opacity="0.9" />
      {/* Head */}
      <circle cx="130" cy="95" r="36" fill="#FFCC80" />
      {/* Hair (professional) */}
      <path d="M94 85 Q94 60 130 58 Q166 60 166 85 Q166 68 130 65 Q94 68 94 85Z" fill="#4E342E" />
      {/* Glasses */}
      <rect x="106" y="90" width="16" height="10" rx="5" fill="none" stroke="#546E7A" strokeWidth="1.5" />
      <rect x="128" y="90" width="16" height="10" rx="5" fill="none" stroke="#546E7A" strokeWidth="1.5" />
      <line x1="122" y1="95" x2="128" y2="95" stroke="#546E7A" strokeWidth="1.5" />
      <line x1="96" y1="95" x2="102" y2="93" stroke="#546E7A" strokeWidth="1.5" />
      <line x1="148" y1="93" x2="154" y2="95" stroke="#546E7A" strokeWidth="1.5" />
      {/* Eyes behind glasses */}
      <circle cx="114" cy="95" r="3" fill="#3E2723" />
      <circle cx="136" cy="95" r="3" fill="#3E2723" />
      {/* Confident smile */}
      <path d="M118 110 Q130 120 142 110" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Arms - laptop */}
      <path d="M80 158 Q65 175 58 188" stroke="#FFCC80" strokeWidth="20" strokeLinecap="round" />
      <path d="M180 158 Q195 175 202 188" stroke="#FFCC80" strokeWidth="20" strokeLinecap="round" />
      {/* Laptop */}
      <rect x="54" y="185" width="56" height="36" rx="6" fill="#263238" />
      <rect x="57" y="188" width="50" height="27" rx="4" fill="#37474F" />
      <rect x="60" y="191" width="44" height="22" rx="2" fill="#00BCD4" opacity="0.6" />
      <text x="68" y="205" fontSize="9" fill="white" fontWeight="bold">&lt;/&gt;</text>
      <rect x="50" y="221" width="64" height="5" rx="2" fill="#455A64" />
      {/* Google badge */}
      <rect x="152" y="138" width="44" height="20" rx="8" fill="white" />
      <text x="156" y="151" fontSize="10" fontWeight="900" fill="#4285F4">G</text>
      <text x="165" y="151" fontSize="9" fontWeight="700" fill="#263238">oogle</text>
      {/* Legs */}
      <rect x="108" y="238" width="22" height="36" rx="11" fill="#0D47A1" />
      <rect x="140" y="238" width="22" height="36" rx="11" fill="#0D47A1" />
      <ellipse cx="119" cy="274" rx="20" ry="7" fill="#0A237E" />
      <ellipse cx="151" cy="274" rx="20" ry="7" fill="#0A237E" />
    </svg>
  );
}

const achievements = [
  { icon: '🏆', label: 'Led team of 12 engineers', color: '#FFD54F' },
  { icon: '🚀', label: 'Shipped 3 products used by 10M users', color: '#69F0AE' },
  { icon: '💰', label: 'Paid off education loan in 2 years', color: '#80DEEA' },
  { icon: '🏠', label: 'Built family home in Nandyal', color: '#FFAB40' },
];

export function FutureTwinScreen() {
  return (
    <div style={{
      height: '100%',
      background: 'linear-gradient(160deg, #0A0F2A 0%, #0D1B3E 40%, #0A2744 70%, #0D3B55 100%)',
      display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden',
    }}>
      {/* Animated grid background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(100,200,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,200,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: -80, right: -80, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,188,212,0.12) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: 60, left: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,255,218,0.08) 0%, transparent 70%)' }} />

      {/* Header */}
      <div style={{ padding: '16px 20px 12px', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(100,255,218,0.1)', borderRadius: 20, padding: '5px 14px',
          border: '1px solid rgba(100,255,218,0.25)', marginBottom: 8,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#64FFDA', animation: 'pulse 1.5s infinite' }} />
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
          <span style={{ color: '#64FFDA', fontSize: 11, fontWeight: 800 }}>AI FUTURE TWIN • 2031</span>
        </div>
        <h2 style={{ margin: 0, color: 'white', fontSize: 22, fontWeight: 900, lineHeight: 1.2 }}>
          Meet <span style={{ color: '#64FFDA' }}>Ravi</span> in 2031
        </h2>
        <p style={{ margin: '4px 0 0', color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>Senior Software Engineer at Google</p>
      </div>

      {/* Avatar + stats */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '0 16px', zIndex: 1 }}>
        <FutureAvatar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'Salary', value: '₹45 LPA', icon: '💰', color: '#FFD54F' },
            { label: 'Experience', value: '5 Years', icon: '⭐', color: '#64FFDA' },
            { label: 'Location', value: 'Hyderabad', icon: '📍', color: '#80DEEA' },
            { label: 'Team', value: '12 Engineers', icon: '👥', color: '#FFAB40' },
          ].map(({ label, value, icon, color }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 12, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>{label.toUpperCase()}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 1 }}>
                <span style={{ fontSize: 13 }}>{icon}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color }}>{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable content below */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 20px', zIndex: 1 }}>
        {/* Achievements */}
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>CAREER ACHIEVEMENTS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
          {achievements.map(({ icon, label, color }, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '10px 14px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: 18 }}>{icon}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Lifestyle */}
        <div style={{ background: 'rgba(100,255,218,0.08)', borderRadius: 14, padding: '12px 14px', border: '1px solid rgba(100,255,218,0.2)', marginBottom: 14 }}>
          <div style={{ fontSize: 12, color: '#64FFDA', fontWeight: 800, marginBottom: 8 }}>🌟 LIFESTYLE PREVIEW</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['🏠 Own house in Hyderabad', '✈️ Travelled 8 countries', '🎓 Sponsored 3 cousins', '🚗 Drives own car', '👨‍👩‍👦 Supporting family'].map(item => (
              <span key={item} style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: 10, fontWeight: 600 }}>{item}</span>
            ))}
          </div>
        </div>

        <button style={{
          width: '100%', height: 50, background: 'linear-gradient(135deg, #0097A7, #00BCD4)',
          border: 'none', borderRadius: 25, color: 'white', fontSize: 15, fontWeight: 800, cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(0,188,212,0.4)',
        }}>
          🚀 Start Building This Future
        </button>
      </div>
    </div>
  );
}
