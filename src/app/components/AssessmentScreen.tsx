import { useState } from 'react';

interface Props { onNext: () => void; }

const questions = [
  {
    question: 'Which subjects do you enjoy?',
    emoji: '📚',
    options: ['Mathematics', 'Science', 'English', 'History', 'Computer Science', 'Commerce', 'Arts', 'Biology'],
  },
  {
    question: 'What activities do you like?',
    emoji: '🎯',
    options: ['Building things', 'Drawing / Design', 'Teaching others', 'Analyzing data', 'Writing', 'Sports', 'Music', 'Coding'],
  },
  {
    question: 'What are your strengths?',
    emoji: '💪',
    options: ['Problem solving', 'Communication', 'Creativity', 'Leadership', 'Critical thinking', 'Patience', 'Teamwork', 'Detail-oriented'],
  },
  {
    question: 'What kind of work interests you?',
    emoji: '🚀',
    options: ['Tech & Software', 'Healthcare', 'Education', 'Finance', 'Design', 'Government jobs', 'Business', 'Research'],
  },
];

export function AssessmentScreen({ onNext }: Props) {
  const [selections, setSelections] = useState<Record<number, string[]>>({ 0: [], 1: [], 2: [], 3: [] });

  const toggle = (qi: number, opt: string) => {
    setSelections(prev => {
      const curr = prev[qi];
      return {
        ...prev,
        [qi]: curr.includes(opt) ? curr.filter(x => x !== opt) : [...curr, opt],
      };
    });
  };

  const totalSelected = Object.values(selections).flat().length;
  const progress = Math.min(totalSelected / 8, 1);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FAFBFF' }}>
      {/* Progress header */}
      <div style={{ background: 'white', padding: '16px 20px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 12, color: '#78909C', fontWeight: 600 }}>STEP 2 OF 3 • ASSESSMENT</div>
            <h2 style={{ margin: '2px 0 0', fontSize: 19, fontWeight: 800, color: '#1A237E' }}>Interest Assessment</h2>
          </div>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: `conic-gradient(#1565C0 ${progress * 360}deg, #E3F2FD 0deg)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 800, color: '#1565C0',
            }}>
              {Math.round(progress * 100)}%
            </div>
          </div>
        </div>
        <div style={{ height: 6, background: '#E3F2FD', borderRadius: 3, marginBottom: 14 }}>
          <div style={{
            height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #1565C0, #0097A7)',
            width: `${progress * 100}%`, transition: 'width 0.4s ease',
          }} />
        </div>
      </div>

      {/* Scrollable questions */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 20px' }}>
        {questions.map(({ question, emoji, options }, qi) => (
          <div key={qi} style={{
            background: 'white', borderRadius: 20, padding: '18px', marginBottom: 14,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            border: selections[qi].length > 0 ? '2px solid #E3F2FD' : '2px solid transparent',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12, background: '#E3F2FD',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>
                {emoji}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#263238', lineHeight: 1.3, flex: 1 }}>
                {question}
              </div>
              {selections[qi].length > 0 && (
                <div style={{
                  background: '#1565C0', color: 'white', fontSize: 11, fontWeight: 800,
                  padding: '2px 8px', borderRadius: 10,
                }}>
                  {selections[qi].length}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {options.map(opt => {
                const selected = selections[qi].includes(opt);
                return (
                  <button key={opt} onClick={() => toggle(qi, opt)} style={{
                    padding: '8px 14px', borderRadius: 20, border: 'none', cursor: 'pointer',
                    background: selected ? '#1565C0' : '#F5F7FF',
                    color: selected ? 'white' : '#546E7A',
                    fontSize: 13, fontWeight: selected ? 700 : 500,
                    transition: 'all 0.2s',
                    boxShadow: selected ? '0 3px 10px rgba(21,101,192,0.3)' : 'none',
                  }}>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <button onClick={onNext} style={{
          width: '100%', height: 56, background: '#1565C0', border: 'none',
          borderRadius: 28, color: 'white', fontSize: 17, fontWeight: 800,
          cursor: 'pointer', marginTop: 4, boxShadow: '0 6px 20px rgba(21,101,192,0.35)',
        }}>
          Analyze My Interests →
        </button>
      </div>
    </div>
  );
}
