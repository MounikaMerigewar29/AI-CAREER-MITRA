import { Sparkles } from 'lucide-react';

interface Props { onNext: () => void; }

function StudentIllustration() {
  return (
    <svg viewBox="0 0 280 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 240, height: 260 }}>
      <ellipse cx="140" cy="292" rx="72" ry="10" fill="rgba(0,0,0,0.12)" />
      {/* Stars background */}
      <circle cx="30" cy="60" r="3" fill="#FFD54F" opacity="0.8" />
      <circle cx="248" cy="45" r="4" fill="#FFD54F" opacity="0.7" />
      <circle cx="18" cy="160" r="2.5" fill="#FFD54F" opacity="0.6" />
      <circle cx="262" cy="130" r="3.5" fill="#FFD54F" opacity="0.8" />
      <circle cx="55" cy="200" r="2" fill="#FFD54F" opacity="0.5" />
      <circle cx="235" cy="200" r="3" fill="#FFD54F" opacity="0.7" />
      <text x="22" y="72" fontSize="18" fill="#FFD54F">★</text>
      <text x="240" y="52" fontSize="14" fill="#FFD54F">★</text>
      <text x="245" y="140" fontSize="20" fill="#FFD54F">★</text>
      <text x="10" y="140" fontSize="12" fill="#FFD54F">✦</text>
      {/* Graduation cap */}
      <rect x="106" y="56" width="68" height="12" rx="4" fill="#0D47A1" />
      <polygon points="140,38 106,56 174,56" fill="#0D47A1" />
      <line x1="174" y1="56" x2="183" y2="78" stroke="#FFB300" strokeWidth="2.5" />
      <circle cx="183" cy="81" r="5" fill="#FFB300" />
      {/* Head */}
      <circle cx="140" cy="96" r="36" fill="#FFCC80" />
      {/* Hair */}
      <path d="M104 88 Q104 60 140 58 Q176 60 176 88 Q176 70 140 67 Q104 70 104 88Z" fill="#5D4037" />
      {/* Eyes */}
      <circle cx="128" cy="94" r="4" fill="#3E2723" />
      <circle cx="152" cy="94" r="4" fill="#3E2723" />
      <circle cx="129.5" cy="92.5" r="1.5" fill="white" />
      <circle cx="153.5" cy="92.5" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M129 106 Q140 116 151 106" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Uniform body */}
      <path d="M104 133 Q120 126 140 124 Q160 126 176 133 L182 226 H98 Z" fill="#1565C0" />
      <path d="M120 124 L140 152 L160 124" fill="rgba(255,255,255,0.2)" />
      {/* Left arm */}
      <path d="M104 142 Q80 162 64 182" stroke="#FFCC80" strokeWidth="22" strokeLinecap="round" />
      {/* Books (left hand) */}
      <rect x="44" y="168" width="32" height="42" rx="4" fill="#EF5350" transform="rotate(-8, 60, 189)" />
      <rect x="47" y="165" width="32" height="42" rx="4" fill="#FF9800" transform="rotate(-8, 63, 186)" />
      <rect x="50" y="162" width="32" height="42" rx="4" fill="#43A047" transform="rotate(-8, 66, 183)" />
      {/* Right arm */}
      <path d="M176 142 Q195 158 208 172" stroke="#FFCC80" strokeWidth="22" strokeLinecap="round" />
      {/* Legs */}
      <rect x="110" y="224" width="24" height="62" rx="12" fill="#1A237E" />
      <rect x="146" y="224" width="24" height="62" rx="12" fill="#1A237E" />
      {/* Shoes */}
      <ellipse cx="122" cy="287" rx="22" ry="9" fill="#0D47A1" />
      <ellipse cx="158" cy="287" rx="22" ry="9" fill="#0D47A1" />
      {/* Floating career icons above */}
      <rect x="195" y="80" width="48" height="34" rx="10" fill="rgba(255,255,255,0.2)" />
      <text x="208" y="102" fontSize="18">💻</text>
      <rect x="28" y="95" width="48" height="34" rx="10" fill="rgba(255,255,255,0.2)" />
      <text x="40" y="117" fontSize="18">📊</text>
    </svg>
  );
}

export function SplashScreen({ onNext }: Props) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'linear-gradient(160deg, #0D47A1 0%, #1565C0 30%, #0097A7 65%, #00ACC1 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'space-between', padding: '28px 28px 36px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background decorations */}
      <div style={{ position: 'absolute', top: -80, right: -60, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', bottom: 100, left: -80, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
      <div style={{ position: 'absolute', top: 120, right: -40, width: 140, height: 140, borderRadius: '50%', background: 'rgba(0,188,212,0.15)' }} />

      {/* Logo */}
      <div style={{ textAlign: 'center', zIndex: 1, marginTop: 8 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
          borderRadius: 20, padding: '10px 20px', marginBottom: 16,
          border: '1px solid rgba(255,255,255,0.25)',
        }}>
          <Sparkles size={22} color="#FFD54F" />
          <span style={{ color: 'white', fontSize: 13, fontWeight: 700, letterSpacing: 1.5 }}>AI POWERED</span>
        </div>
        <h1 style={{ color: 'white', fontSize: 32, fontWeight: 900, margin: 0, lineHeight: 1.1, letterSpacing: '-0.5px' }}>
          AI Career<br />Mitra
        </h1>
        <div style={{
          width: 40, height: 3, background: '#FFD54F', borderRadius: 2,
          margin: '12px auto',
        }} />
        <p style={{
          color: 'rgba(255,255,255,0.85)', fontSize: 13.5, margin: 0,
          lineHeight: 1.5, maxWidth: 220, textAlign: 'center',
        }}>
          "Guiding Every Student Towards<br />the Right Future"
        </p>
      </div>

      {/* Illustration */}
      <div style={{ zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <StudentIllustration />
      </div>

      {/* Bottom */}
      <div style={{ width: '100%', zIndex: 1 }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, textAlign: 'center', margin: '0 0 16px' }}>
          Telugu • Hindi • English
        </p>
        <button onClick={onNext} style={{
          width: '100%', height: 56, background: 'white', border: 'none',
          borderRadius: 28, color: '#1565C0', fontSize: 17, fontWeight: 800,
          cursor: 'pointer', letterSpacing: 0.3,
          boxShadow: '0 8px 28px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          Get Started →
        </button>
      </div>
    </div>
  );
}
