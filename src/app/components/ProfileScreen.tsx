import { useState } from 'react';
import { User, ChevronDown } from 'lucide-react';

interface Props { onNext: () => void; }

const classes = ['10th', 'Intermediate', 'Diploma', 'Degree'];
const states = ['Andhra Pradesh', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Maharashtra', 'Other'];
const langs = ['Telugu', 'Hindi', 'English'];

export function ProfileScreen({ onNext }: Props) {
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState('Intermediate');
  const [state, setState] = useState('Andhra Pradesh');
  const [lang, setLang] = useState('Telugu');
  const [showState, setShowState] = useState(false);

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: '#FAFBFF' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1565C0 0%, #0097A7 100%)',
        padding: '24px 24px 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <User size={22} color="white" />
          </div>
          <div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: 0.5 }}>STEP 1 OF 3</div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Your Profile</h2>
          </div>
        </div>
        <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
          Tell us about yourself so we can personalize your career recommendations
        </p>
      </div>

      <div style={{ padding: '24px 20px 100px' }}>
        {/* Name */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#546E7A', marginBottom: 8, letterSpacing: 0.5 }}>
            FULL NAME
          </label>
          <input
            value={name} onChange={e => setName(e.target.value)}
            placeholder="Enter your full name"
            style={{
              width: '100%', height: 52, borderRadius: 14, border: '2px solid #E8EAED',
              padding: '0 16px', fontSize: 16, color: '#263238', background: 'white',
              outline: 'none', boxSizing: 'border-box',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Class */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#546E7A', marginBottom: 8, letterSpacing: 0.5 }}>
            CURRENT CLASS / EDUCATION
          </label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {classes.map(c => (
              <button key={c} onClick={() => setSelectedClass(c)} style={{
                padding: '10px 18px', borderRadius: 24,
                background: selectedClass === c ? '#1565C0' : 'white',
                border: `2px solid ${selectedClass === c ? '#1565C0' : '#E8EAED'}`,
                color: selectedClass === c ? 'white' : '#546E7A',
                fontSize: 14, fontWeight: 700, cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* State */}
        <div style={{ marginBottom: 20, position: 'relative' }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#546E7A', marginBottom: 8, letterSpacing: 0.5 }}>
            STATE
          </label>
          <button onClick={() => setShowState(!showState)} style={{
            width: '100%', height: 52, borderRadius: 14, border: '2px solid #E8EAED',
            padding: '0 16px', fontSize: 15, color: '#263238', background: 'white',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            fontFamily: 'inherit',
          }}>
            {state}
            <ChevronDown size={18} color="#90A4AE" />
          </button>
          {showState && (
            <div style={{
              position: 'absolute', top: 90, left: 0, right: 0, background: 'white',
              borderRadius: 14, boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              border: '1px solid #E8EAED', zIndex: 10, overflow: 'hidden',
            }}>
              {states.map(s => (
                <button key={s} onClick={() => { setState(s); setShowState(false); }} style={{
                  width: '100%', padding: '14px 16px', border: 'none',
                  background: state === s ? '#E3F2FD' : 'transparent',
                  color: state === s ? '#1565C0' : '#263238',
                  fontSize: 15, cursor: 'pointer', textAlign: 'left',
                  fontWeight: state === s ? 700 : 400, fontFamily: 'inherit',
                }}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Language preference */}
        <div style={{ marginBottom: 28 }}>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: '#546E7A', marginBottom: 8, letterSpacing: 0.5 }}>
            PREFERRED LANGUAGE
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            {langs.map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                flex: 1, padding: '12px 0', borderRadius: 14,
                background: lang === l ? '#E3F2FD' : 'white',
                border: `2px solid ${lang === l ? '#1565C0' : '#E8EAED'}`,
                color: lang === l ? '#1565C0' : '#546E7A',
                fontSize: 14, fontWeight: 700, cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Info card */}
        <div style={{
          background: '#E8F5E9', borderRadius: 14, padding: '14px 16px',
          display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 24,
        }}>
          <span style={{ fontSize: 18 }}>🔒</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#2E7D32', marginBottom: 2 }}>Your data is safe</div>
            <div style={{ fontSize: 12, color: '#4CAF50' }}>We only use this information to personalize your career guidance</div>
          </div>
        </div>

        <button onClick={onNext} style={{
          width: '100%', height: 56, background: '#1565C0', border: 'none',
          borderRadius: 28, color: 'white', fontSize: 17, fontWeight: 800,
          cursor: 'pointer', boxShadow: '0 6px 20px rgba(21,101,192,0.35)',
        }}>
          Next →
        </button>
      </div>
    </div>
  );
}
