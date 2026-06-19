import { Download, Compass } from 'lucide-react';

interface Props {
  onDownload: () => void;
  onExplore: () => void;
}

function GraduateIllustration() {
  return (
    <svg viewBox="0 0 280 260" fill="none" style={{ width: 240, height: 220 }}>
      {/* Confetti */}
      {[
        [40, 30, '#FFD54F'], [220, 25, '#FF7043'], [60, 80, '#4CAF50'], [240, 70, '#42A5F5'],
        [20, 120, '#AB47BC'], [260, 100, '#FFB300'], [50, 160, '#26C6DA'], [250, 140, '#EF5350'],
        [30, 200, '#66BB6A'], [230, 190, '#FFA726'],
      ].map(([x, y, color], i) => (
        <rect key={i} x={Number(x)} y={Number(y)} width={8} height={8} rx={2}
          fill={String(color)} transform={`rotate(${i * 27} ${Number(x)+4} ${Number(y)+4})`} opacity={0.8} />
      ))}
      {/* Stars */}
      <text x="15" y="55" fontSize="16" fill="#FFD54F">★</text>
      <text x="255" y="45" fontSize="14" fill="#FFD54F">★</text>
      <text x="12" y="160" fontSize="12" fill="#FFD54F">✦</text>
      <text x="258" y="160" fontSize="18" fill="#FFD54F">★</text>

      {/* Diploma in hand */}
      <rect x="160" y="155" width="48" height="36" rx="6" fill="#FFF9C4" transform="rotate(-12, 184, 173)" />
      <rect x="162" y="157" width="48" height="36" rx="6" fill="white" stroke="#FFB300" strokeWidth="1.5" transform="rotate(-12, 186, 175)" />
      <line x1="172" y1="168" x2="202" y2="168" stroke="#E0E0E0" strokeWidth="1.5" transform="rotate(-12, 186, 175)" />
      <line x1="172" y1="175" x2="202" y2="175" stroke="#E0E0E0" strokeWidth="1.5" transform="rotate(-12, 186, 175)" />
      <text x="175" y="186" fontSize="11" fill="#FFB300" transform="rotate(-12, 186, 175)">🏅</text>

      {/* Graduation cap */}
      <rect x="100" y="48" width="68" height="12" rx="4" fill="#1A237E" />
      <polygon points="134,30 100,48 168,48" fill="#1A237E" />
      <line x1="168" y1="48" x2="180" y2="72" stroke="#FFB300" strokeWidth="2.5" />
      <circle cx="180" cy="75" r="5.5" fill="#FFB300" />

      {/* Head */}
      <circle cx="134" cy="92" r="34" fill="#FFCC80" />
      {/* Hair */}
      <path d="M100 84 Q100 58 134 56 Q168 58 168 84 Q168 66 134 63 Q100 66 100 84Z" fill="#5D4037" />
      {/* Confident smile + eyes */}
      <circle cx="122" cy="90" r="3.5" fill="#3E2723" />
      <circle cx="146" cy="90" r="3.5" fill="#3E2723" />
      <circle cx="123.5" cy="88.5" r="1.5" fill="white" />
      <circle cx="147.5" cy="88.5" r="1.5" fill="white" />
      <path d="M122 104 Q134 116 146 104" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Body - graduation gown */}
      <path d="M100 128 Q117 118 134 116 Q151 118 168 128 L174 218 H94 Z" fill="#1A237E" />
      <path d="M116 116 L134 148 L152 116" fill="rgba(255,255,255,0.15)" />
      {/* Medal ribbon */}
      <path d="M128 140 L134 160 L140 140" stroke="#FFD54F" strokeWidth="2.5" fill="none" />
      <circle cx="134" cy="165" r="8" fill="#FFD54F" />
      <circle cx="134" cy="165" r="5" fill="#FF9800" />

      {/* Right arm holding diploma */}
      <path d="M168 136 Q190 155 196 165" stroke="#FFCC80" strokeWidth="22" strokeLinecap="round" />
      {/* Left arm raised (celebration) */}
      <path d="M100 136 Q75 118 68 105" stroke="#FFCC80" strokeWidth="22" strokeLinecap="round" />
      <text x="55" y="98" fontSize="18">🎉</text>

      {/* Legs */}
      <rect x="110" y="216" width="22" height="36" rx="11" fill="#0D47A1" />
      <rect x="146" y="216" width="22" height="36" rx="11" fill="#0D47A1" />
      <ellipse cx="121" cy="252" rx="20" ry="8" fill="#0A237E" />
      <ellipse cx="157" cy="252" rx="20" ry="8" fill="#0A237E" />
    </svg>
  );
}

export function SuccessScreen({ onDownload, onExplore }: Props) {
  return (
    <div style={{
      height: '100%',
      background: 'linear-gradient(160deg, #0D47A1 0%, #1565C0 35%, #2E7D32 70%, #43A047 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '24px 28px 40px', position: 'relative', overflow: 'hidden',
    }}>
      {/* BG decorations */}
      <div style={{ position: 'absolute', top: -80, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', bottom: 60, left: -80, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

      {/* Badge */}
      <div style={{
        background: '#FFD54F', borderRadius: 24, padding: '8px 20px', marginBottom: 8,
        boxShadow: '0 4px 14px rgba(255,213,79,0.4)',
      }}>
        <span style={{ fontSize: 13, fontWeight: 900, color: '#1A237E', letterSpacing: 1 }}>
          🎊 CONGRATULATIONS
        </span>
      </div>

      <h1 style={{
        color: 'white', fontSize: 28, fontWeight: 900, margin: '0 0 6px',
        textAlign: 'center', lineHeight: 1.2, letterSpacing: '-0.5px',
      }}>
        Your Journey<br />Begins Now!
      </h1>

      <p style={{
        color: 'rgba(255,255,255,0.8)', fontSize: 14, textAlign: 'center',
        margin: '0 0 16px', lineHeight: 1.5,
      }}>
        Your personalized career journey is ready.<br />
        You're one step closer to your dream!
      </p>

      {/* Illustration */}
      <GraduateIllustration />

      {/* Summary cards */}
      <div style={{ width: '100%', display: 'flex', gap: 10, margin: '12px 0 20px' }}>
        {[
          ['🎯', 'Software\nEngineer', '#FFD54F'],
          ['💰', '₹6–25\nLPA', '#69F0AE'],
          ['📅', '5–6 Year\nPlan', '#80DEEA'],
        ].map(([icon, label, color]) => (
          <div key={String(label)} style={{
            flex: 1, background: 'rgba(255,255,255,0.15)',
            borderRadius: 14, padding: '10px 8px', textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.2)',
          }}>
            <div style={{ fontSize: 18 }}>{icon}</div>
            <div style={{
              fontSize: 11, fontWeight: 800, color: String(color),
              marginTop: 4, lineHeight: 1.3, whiteSpace: 'pre-line',
            }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button onClick={onDownload} style={{
          width: '100%', height: 54, background: 'white', border: 'none',
          borderRadius: 27, color: '#1565C0', fontSize: 16, fontWeight: 800,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        }}>
          <Download size={18} />
          Download Roadmap PDF
        </button>
        <button onClick={onExplore} style={{
          width: '100%', height: 50, background: 'rgba(255,255,255,0.15)',
          border: '2px solid rgba(255,255,255,0.4)', borderRadius: 25,
          color: 'white', fontSize: 15, fontWeight: 700, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <Compass size={18} />
          Explore More Careers
        </button>
      </div>
    </div>
  );
}
