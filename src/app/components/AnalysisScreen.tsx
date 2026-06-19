import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Props { onNext: () => void; }

const resultCards = [
  { label: 'Interests', value: 'Technology, Science, Mathematics', icon: '🎯', color: '#1565C0', bg: '#E3F2FD' },
  { label: 'Strengths', value: 'Analytical thinking, Problem solving', icon: '💪', color: '#2E7D32', bg: '#E8F5E9' },
  { label: 'Personality Traits', value: 'Logical, Detail-oriented, Creative', icon: '🧠', color: '#6A1B9A', bg: '#F3E5F5' },
  { label: 'Recommended Domains', value: 'Software, Data Science, Engineering', icon: '🚀', color: '#E65100', bg: '#FFF3E0' },
];

export function AnalysisScreen({ onNext }: Props) {
  const [phase, setPhase] = useState<'loading' | 'results'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('results'), 400);
          return 100;
        }
        return p + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      height: '100%',
      background: 'linear-gradient(170deg, #0D47A1 0%, #1565C0 40%, #1A237E 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '28px 20px 32px', position: 'relative', overflow: 'hidden',
    }}>
      {/* BG decoration */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
      <div style={{ position: 'absolute', bottom: 50, left: -80, width: 200, height: 200, borderRadius: '50%', background: 'rgba(0,188,212,0.08)' }} />

      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 700, letterSpacing: 1.5, marginBottom: 8 }}>
        STEP 3 OF 3
      </div>

      {phase === 'loading' ? (
        <>
          <h2 style={{ color: 'white', fontSize: 24, fontWeight: 800, textAlign: 'center', margin: '0 0 8px' }}>
            AI is Analyzing<br />Your Profile
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, textAlign: 'center', margin: '0 0 32px' }}>
            Processing your interests and strengths...
          </p>

          {/* Pulsing rings */}
          <div style={{ position: 'relative', width: 180, height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0 32px' }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: 'absolute', width: 180 - i * 40, height: 180 - i * 40, borderRadius: '50%',
                border: `2px solid rgba(255,255,255,${0.15 - i * 0.03})`,
                animation: `pulse ${1.5 + i * 0.5}s ease-in-out infinite`,
              }} />
            ))}
            <style>{`@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.08); opacity: 0.3; } }`}</style>
            <div style={{
              width: 100, height: 100, borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 42,
            }}>
              🧠
            </div>
          </div>

          {/* Progress */}
          <div style={{ width: '100%', maxWidth: 280, marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>Analyzing profile...</span>
              <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>{progress}%</span>
            </div>
            <div style={{ height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 3 }}>
              <div style={{
                height: '100%', borderRadius: 3, width: `${progress}%`,
                background: 'linear-gradient(90deg, #42A5F5, #00BCD4)',
                transition: 'width 0.1s',
              }} />
            </div>
          </div>

          {/* Processing steps */}
          {['Evaluating interests', 'Assessing strengths', 'Matching career paths', 'Generating insights'].map((step, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              color: progress > (i + 1) * 22 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
              fontSize: 13, marginBottom: 6, transition: 'color 0.4s',
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: '50%',
                background: progress > (i + 1) * 22 ? '#4CAF50' : 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10,
                transition: 'background 0.4s',
              }}>
                {progress > (i + 1) * 22 ? '✓' : ''}
              </div>
              {step}
            </div>
          ))}
        </>
      ) : (
        <>
          <h2 style={{ color: 'white', fontSize: 24, fontWeight: 800, textAlign: 'center', margin: '0 0 6px' }}>
            Analysis Complete! 🎉
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, textAlign: 'center', margin: '0 0 24px' }}>
            Here's what we discovered about you
          </p>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 'auto' }}>
            {resultCards.map(({ label, value, icon, color, bg }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
                  borderRadius: 16, padding: '14px 16px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', gap: 12,
                }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: 0.5, marginBottom: 2 }}>
                    {label.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 14, color: 'white', fontWeight: 600 }}>{value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <button onClick={onNext} style={{
            width: '100%', height: 56, background: 'white', border: 'none',
            borderRadius: 28, color: '#1565C0', fontSize: 17, fontWeight: 800,
            cursor: 'pointer', marginTop: 20,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            View Career Recommendations →
          </button>
        </>
      )}
    </div>
  );
}
