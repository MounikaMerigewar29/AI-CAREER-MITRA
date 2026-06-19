import { useState } from 'react';
import { Mic, ChevronRight, RefreshCw } from 'lucide-react';

const questions = [
  { id: 1, text: 'Tell me about yourself and why you want to become a Software Engineer.', type: 'Behavioral', difficulty: 'Easy' },
  { id: 2, text: 'Explain the difference between an array and a linked list.', type: 'Technical', difficulty: 'Medium' },
  { id: 3, text: 'Describe a time you solved a difficult problem. What was your approach?', type: 'Behavioral', difficulty: 'Medium' },
  { id: 4, text: 'What is recursion? Give an example of where you would use it.', type: 'Technical', difficulty: 'Hard' },
];

const feedbackData = {
  confidence: 72,
  communication: 85,
  technical: 68,
  tips: [
    'Use the STAR method (Situation, Task, Action, Result) for behavioral answers',
    'Start with a brief intro, then elaborate with specific examples',
    'Speak slowly and clearly — confidence comes with practice!',
    'Practice DSA problems daily on LeetCode or HackerRank',
  ],
};

function ScoreArc({ score, label, color }: { score: number; label: string; color: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - score / 100);
  return (
    <div style={{ textAlign: 'center' }}>
      <svg width="70" height="70" viewBox="0 0 70 70">
        <circle cx="35" cy="35" r={r} fill="none" stroke="#F0F0F0" strokeWidth="5" />
        <circle cx="35" cy="35" r={r} fill="none" stroke={color} strokeWidth="5"
          strokeDasharray={`${circ}`} strokeDashoffset={`${offset}`}
          strokeLinecap="round" transform="rotate(-90 35 35)" />
        <text x="35" y="39" textAnchor="middle" fontSize="14" fontWeight="800" fill={color}>{score}</text>
      </svg>
      <div style={{ fontSize: 11, color: '#546E7A', fontWeight: 600, marginTop: -4 }}>{label}</div>
    </div>
  );
}

export function InterviewCoachScreen() {
  const [phase, setPhase] = useState<'intro' | 'recording' | 'feedback'>('intro');
  const [qIndex, setQIndex] = useState(0);
  const [recording, setRecording] = useState(false);
  const [lang, setLang] = useState<'Telugu' | 'Hindi' | 'English'>('English');
  const q = questions[qIndex];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #4A148C 0%, #6A1B9A 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 24 }}>🎙️</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>AI Interview Coach</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Mock Interview • Q {qIndex + 1}/{questions.length}</p>
          </div>
        </div>
        {/* Language + difficulty */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {(['Telugu', 'Hindi', 'English'] as const).map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              padding: '5px 12px', borderRadius: 16, border: 'none', cursor: 'pointer',
              background: lang === l ? 'white' : 'rgba(255,255,255,0.2)',
              color: lang === l ? '#6A1B9A' : 'rgba(255,255,255,0.85)',
              fontSize: 11, fontWeight: 800,
            }}>{l}</button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 800, color: q.difficulty === 'Easy' ? '#69F0AE' : q.difficulty === 'Medium' ? '#FFD54F' : '#FF7043', background: 'rgba(255,255,255,0.15)', padding: '3px 10px', borderRadius: 10 }}>
            {q.type} • {q.difficulty}
          </span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px 20px' }}>
        {phase !== 'feedback' && (
          <>
            {/* Question card */}
            <div style={{ background: 'white', borderRadius: 18, padding: '18px', marginBottom: 16, boxShadow: '0 3px 14px rgba(0,0,0,0.07)' }}>
              <div style={{ fontSize: 11, color: '#6A1B9A', fontWeight: 800, letterSpacing: 0.5, marginBottom: 8 }}>QUESTION {qIndex + 1}</div>
              <p style={{ margin: 0, fontSize: 16, color: '#1A237E', fontWeight: 700, lineHeight: 1.5 }}>{q.text}</p>
              <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                <span style={{ fontSize: 11, background: '#F3E5F5', color: '#6A1B9A', padding: '4px 10px', borderRadius: 10, fontWeight: 700 }}>💡 Think for 30 seconds</span>
                <span style={{ fontSize: 11, background: '#E3F2FD', color: '#1565C0', padding: '4px 10px', borderRadius: 10, fontWeight: 700 }}>Use STAR method</span>
              </div>
            </div>

            {/* Recording interface */}
            {phase === 'intro' && (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: 13, color: '#78909C', marginBottom: 20, lineHeight: 1.5 }}>
                  Answer in <strong>{lang}</strong>. Speak naturally and confidently.
                </div>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
                  <button onClick={() => setPhase('recording')} style={{
                    width: 80, height: 80, borderRadius: '50%', background: '#6A1B9A', border: 'none',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', boxShadow: '0 6px 20px rgba(106,27,154,0.4)',
                  }}>
                    <Mic size={28} color="white" />
                    <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.8)', marginTop: 2, fontWeight: 700 }}>VOICE</span>
                  </button>
                  <button onClick={() => setPhase('feedback')} style={{
                    width: 80, height: 80, borderRadius: '50%', background: '#E3F2FD',
                    border: '2px solid #90CAF9', display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  }}>
                    <span style={{ fontSize: 24 }}>⌨️</span>
                    <span style={{ fontSize: 9, color: '#1565C0', marginTop: 2, fontWeight: 700 }}>TEXT</span>
                  </button>
                </div>
                <p style={{ fontSize: 12, color: '#78909C' }}>Tap Voice to start recording your answer</p>
              </div>
            )}

            {phase === 'recording' && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', width: 120, height: 120, margin: '0 auto 20px' }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      position: 'absolute', inset: i * -16, borderRadius: '50%',
                      background: recording ? `rgba(106,27,154,${0.1 - i * 0.02})` : 'transparent',
                      animation: recording ? `ripple ${1.2 + i * 0.4}s ease-out infinite` : 'none',
                    }} />
                  ))}
                  <style>{`@keyframes ripple { 0%,100%{transform:scale(1);opacity:0.8} 50%{transform:scale(1.15);opacity:0.2} }`}</style>
                  <button onClick={() => { setRecording(!recording); if (recording) setTimeout(() => setPhase('feedback'), 500); }}
                    style={{
                      width: 120, height: 120, borderRadius: '50%',
                      background: recording ? '#EF5350' : '#6A1B9A', border: 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                      boxShadow: `0 8px 24px rgba(${recording ? '239,83,80' : '106,27,154'},0.4)`,
                    }}>
                    <Mic size={44} color="white" />
                  </button>
                </div>
                <div style={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, marginBottom: 12 }}>
                  {Array.from({ length: 24 }, (_, i) => (
                    <div key={i} style={{
                      width: 3, borderRadius: 2,
                      height: recording ? `${Math.abs(Math.sin(i * 0.8) * 28 + 12)}px` : '4px',
                      background: '#6A1B9A', opacity: recording ? 0.7 + Math.random() * 0.3 : 0.3,
                      transition: 'height 0.15s',
                    }} />
                  ))}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: recording ? '#EF5350' : '#6A1B9A', marginBottom: 6 }}>
                  {recording ? '🔴 Recording... Tap to stop' : 'Tap to start recording'}
                </div>
                {!recording && <button onClick={() => setPhase('intro')} style={{ background: 'none', border: 'none', color: '#78909C', fontSize: 12, cursor: 'pointer' }}>← Back</button>}
              </div>
            )}
          </>
        )}

        {phase === 'feedback' && (
          <>
            <div style={{ background: '#E8F5E9', borderRadius: 14, padding: '12px 16px', marginBottom: 14, display: 'flex', gap: 8 }}>
              <span style={{ fontSize: 18 }}>✅</span>
              <div style={{ fontSize: 13, color: '#2E7D32', fontWeight: 600 }}>Answer submitted! Here's your AI analysis.</div>
            </div>

            {/* Scores */}
            <div style={{ background: 'white', borderRadius: 18, padding: '16px', marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', marginBottom: 14 }}>📊 Your Scores</div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 14 }}>
                <ScoreArc score={feedbackData.confidence} label="Confidence" color="#1565C0" />
                <ScoreArc score={feedbackData.communication} label="Communication" color="#2E7D32" />
                <ScoreArc score={feedbackData.technical} label="Technical" color="#E65100" />
              </div>
              {/* Overall */}
              <div style={{ background: '#F5F7FF', borderRadius: 12, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 13, color: '#546E7A', fontWeight: 700 }}>Overall Score</div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#1A237E' }}>75/100</div>
                </div>
                <div style={{ fontSize: 11, background: '#FFF3E0', color: '#E65100', padding: '4px 10px', borderRadius: 10, fontWeight: 800 }}>
                  🎖️ Good Start!
                </div>
              </div>
            </div>

            {/* Tips */}
            <div style={{ background: 'white', borderRadius: 18, padding: '16px', marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>💡 Improvement Tips</div>
              {feedbackData.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#1565C0', flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ fontSize: 13, color: '#546E7A', lineHeight: 1.5 }}>{tip}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => { setPhase('intro'); setQIndex(i => Math.min(i + 1, questions.length - 1)); }} style={{
                flex: 1, height: 50, background: '#6A1B9A', border: 'none', borderRadius: 25,
                color: 'white', fontSize: 14, fontWeight: 800, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}>
                Next Question <ChevronRight size={16} />
              </button>
              <button onClick={() => setPhase('intro')} style={{
                width: 50, height: 50, background: '#F3E5F5', border: 'none', borderRadius: 25,
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}>
                <RefreshCw size={18} color="#6A1B9A" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
