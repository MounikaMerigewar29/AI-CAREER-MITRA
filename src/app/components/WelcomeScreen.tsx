import { Mic, Play } from 'lucide-react';

interface Props {
  onAssessment: () => void;
  onVoice: () => void;
}

function AICharacter() {
  return (
    <svg viewBox="0 0 200 220" fill="none" style={{ width: 180, height: 200 }}>
      {/* Glow */}
      <ellipse cx="100" cy="210" rx="55" ry="10" fill="rgba(255,255,255,0.1)" />
      {/* Robot body */}
      <rect x="60" y="120" width="80" height="75" rx="18" fill="rgba(255,255,255,0.2)" />
      <rect x="62" y="122" width="76" height="71" rx="16" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      {/* Chest panel */}
      <rect x="76" y="138" width="48" height="28" rx="8" fill="rgba(255,255,255,0.15)" />
      {/* Heart icon on chest */}
      <text x="88" y="158" fontSize="20">💡</text>
      {/* Arms */}
      <rect x="28" y="128" width="32" height="14" rx="7" fill="rgba(255,255,255,0.2)" />
      <rect x="140" y="128" width="32" height="14" rx="7" fill="rgba(255,255,255,0.2)" />
      {/* Hands */}
      <circle cx="22" cy="135" r="10" fill="rgba(255,255,255,0.25)" />
      <circle cx="178" cy="135" r="10" fill="rgba(255,255,255,0.25)" />
      {/* Neck */}
      <rect x="88" y="110" width="24" height="14" rx="7" fill="rgba(255,255,255,0.2)" />
      {/* Head */}
      <rect x="52" y="38" width="96" height="76" rx="24" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
      {/* Antenna */}
      <line x1="100" y1="38" x2="100" y2="18" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="13" r="7" fill="#FFD54F" />
      <circle cx="100" cy="13" r="4" fill="#FF8F00" />
      {/* Eyes */}
      <rect x="68" y="58" width="26" height="18" rx="9" fill="rgba(255,255,255,0.9)" />
      <rect x="106" y="58" width="26" height="18" rx="9" fill="rgba(255,255,255,0.9)" />
      <circle cx="81" cy="67" r="6" fill="#1565C0" />
      <circle cx="119" cy="67" r="6" fill="#1565C0" />
      <circle cx="83" cy="65" r="2" fill="white" />
      <circle cx="121" cy="65" r="2" fill="white" />
      {/* Smile */}
      <path d="M76 92 Q100 108 124 92" stroke="rgba(255,255,255,0.8)" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="68" cy="86" r="10" fill="#FF6B6B" opacity="0.3" />
      <circle cx="132" cy="86" r="10" fill="#FF6B6B" opacity="0.3" />
      {/* Legs */}
      <rect x="76" y="193" width="18" height="22" rx="9" fill="rgba(255,255,255,0.2)" />
      <rect x="106" y="193" width="18" height="22" rx="9" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

export function WelcomeScreen({ onAssessment, onVoice }: Props) {
  return (
    <div style={{
      height: '100%',
      background: 'linear-gradient(170deg, #0D47A1 0%, #1565C0 40%, #0097A7 80%, #00ACC1 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '24px 24px 36px', position: 'relative', overflow: 'hidden',
    }}>
      {/* BG decorations */}
      <div style={{ position: 'absolute', top: -60, left: -60, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
      <div style={{ position: 'absolute', bottom: 80, right: -70, width: 200, height: 200, borderRadius: '50%', background: 'rgba(0,188,212,0.15)' }} />

      {/* AI Label */}
      <div style={{
        background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '6px 16px',
        color: 'rgba(255,255,255,0.9)', fontSize: 12, fontWeight: 700, letterSpacing: 1,
        marginBottom: 16, border: '1px solid rgba(255,255,255,0.2)',
      }}>
        ✨ AI-Powered Career Guidance
      </div>

      {/* AI Character */}
      <AICharacter />

      {/* Chat bubble */}
      <div style={{
        background: 'white', borderRadius: '20px 20px 20px 4px',
        padding: '16px 20px', maxWidth: 300, marginTop: 16, marginBottom: 24,
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4CAF50' }} />
          <span style={{ fontSize: 12, color: '#78909C', fontWeight: 600 }}>Career Mitra • Online</span>
        </div>
        <p style={{ margin: 0, fontSize: 15, color: '#1A237E', lineHeight: 1.5, fontWeight: 600 }}>
          Hi! I'm Career Mitra. 👋<br />
          Let's discover the right career for you!
        </p>
        <p style={{ margin: '8px 0 0', fontSize: 13, color: '#546E7A' }}>
          I'll help you explore options based on your interests, strengths & goals.
        </p>
      </div>

      {/* Buttons */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'auto' }}>
        <button onClick={onAssessment} style={{
          width: '100%', height: 56, background: 'white', border: 'none',
          borderRadius: 28, color: '#1565C0', fontSize: 17, fontWeight: 800,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        }}>
          <Play size={20} fill="#1565C0" />
          Start Assessment
        </button>
        <button onClick={onVoice} style={{
          width: '100%', height: 52, background: 'rgba(255,255,255,0.15)',
          border: '2px solid rgba(255,255,255,0.4)', borderRadius: 28,
          color: 'white', fontSize: 16, fontWeight: 700, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          backdropFilter: 'blur(10px)',
        }}>
          <Mic size={20} />
          Talk with Voice
        </button>
      </div>
    </div>
  );
}
