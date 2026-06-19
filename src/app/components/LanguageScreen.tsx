import { Mic, Check } from 'lucide-react';

interface Props {
  language: string;
  setLanguage: (l: string) => void;
  onNext: () => void;
}

const languages = [
  {
    id: 'Telugu', label: 'Telugu', native: 'తెలుగు',
    desc: 'Spoken in Andhra Pradesh & Telangana',
    color: '#1565C0', bg: '#E3F2FD', border: '#90CAF9', flag: '🤙',
  },
  {
    id: 'Hindi', label: 'Hindi', native: 'हिन्दी',
    desc: 'Spoken across India',
    color: '#2E7D32', bg: '#E8F5E9', border: '#A5D6A7', flag: '🙏',
  },
  {
    id: 'English', label: 'English', native: 'English',
    desc: 'International language',
    color: '#E65100', bg: '#FFF3E0', border: '#FFCC80', flag: '🌐',
  },
];

export function LanguageScreen({ language, setLanguage, onNext }: Props) {
  return (
    <div style={{
      height: '100%', background: '#FAFBFF', display: 'flex',
      flexDirection: 'column', padding: '24px 20px 32px',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 16, background: '#E3F2FD',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
        }}>
          <Mic size={24} color="#1565C0" />
        </div>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#1A237E', lineHeight: 1.2 }}>
          Choose Your<br />Language
        </h1>
        <p style={{ margin: '8px 0 0', fontSize: 14, color: '#78909C' }}>
          Select your preferred language for a personalized experience
        </p>
      </div>

      {/* Language cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        {languages.map(({ id, label, native, desc, color, bg, border, flag }) => {
          const selected = language === id;
          return (
            <button key={id} onClick={() => setLanguage(id)} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: selected ? bg : 'white',
              border: `2px solid ${selected ? color : '#E8EAED'}`,
              borderRadius: 20, padding: '18px 20px', cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: selected ? `0 4px 20px ${color}25` : '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: selected ? color : '#F5F5F5',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, flexShrink: 0, transition: 'background 0.2s',
              }}>
                {flag}
              </div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: selected ? color : '#263238', lineHeight: 1.2 }}>
                  {native}
                </div>
                <div style={{ fontSize: 13, color: selected ? color : '#90A4AE', marginTop: 2, fontWeight: 500 }}>
                  {label} • {desc}
                </div>
              </div>
              {selected && (
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', background: color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Check size={16} color="white" strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Voice hint */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: '#F3F4F6', borderRadius: 14, padding: '12px 16px',
        margin: '20px 0 20px',
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, background: '#E3F2FD',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Mic size={18} color="#1565C0" />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#263238' }}>Voice-First Experience</div>
          <div style={{ fontSize: 11, color: '#78909C' }}>Tap the mic to use our app with just your voice</div>
        </div>
      </div>

      <button onClick={onNext} style={{
        width: '100%', height: 56, background: '#1565C0', border: 'none',
        borderRadius: 28, color: 'white', fontSize: 17, fontWeight: 800,
        cursor: 'pointer', boxShadow: '0 6px 20px rgba(21,101,192,0.35)',
      }}>
        Continue
      </button>
    </div>
  );
}
