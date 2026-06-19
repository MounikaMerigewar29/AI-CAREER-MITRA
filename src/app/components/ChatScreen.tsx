import { useState } from 'react';
import { Send, Mic, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  from: 'user' | 'ai';
  text: string;
  time: string;
}

const initial: Message[] = [
  {
    id: 1, from: 'ai', time: '9:40 AM',
    text: 'Namaste! 👋 I\'m your AI Career Coach. Ask me anything about careers, colleges, exams, or your future. I\'m here to help! 🎓',
  },
  {
    id: 2, from: 'user', time: '9:41 AM',
    text: 'Can I become a software engineer if I am weak in mathematics?',
  },
  {
    id: 3, from: 'ai', time: '9:41 AM',
    text: 'Great question! Yes, you absolutely can become a Software Engineer even if you struggle with maths right now! 💪\n\nHere\'s why:\n\n✅ Programming is more about logic and problem-solving than complex maths.\n\n✅ You only need basic algebra and discrete maths for most coding roles.\n\n✅ Many successful engineers were not maths toppers in school!\n\nHere\'s my advice:\n📘 Practice class 11-12 maths consistently — it will become easier.\n🖥️ Start learning basic programming now (Python is easy to begin with).\n🎯 Focus on logical thinking and building projects.\n\nDon\'t let one subject stop your dream. Would you like a study plan for improving your maths? 😊',
  },
];

const suggestions = ['Best colleges for B.Tech CSE?', 'What scholarships can I get?', 'How to prepare for JEE?'];

export function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>(initial);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), from: 'user', time: '9:42 AM', text: input };
    const aiMsg: Message = {
      id: Date.now() + 1, from: 'ai', time: '9:42 AM',
      text: `That's a great question about "${input}"! I'm analyzing your profile and will provide personalized guidance. In the meantime, let me recommend you explore the career roadmap I generated for you. 📊`,
    };
    setMessages(m => [...m, userMsg, aiMsg]);
    setInput('');
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1565C0 0%, #0097A7 100%)',
        padding: '14px 20px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
          border: '2px solid rgba(255,255,255,0.3)',
        }}>🤖</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: 'white', fontSize: 16, fontWeight: 800 }}>Career Mitra AI</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#69F0AE' }} />
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Online • Instant replies</span>
          </div>
        </div>
        <Bot size={22} color="rgba(255,255,255,0.7)" />
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map(({ id, from, text, time }) => (
          <div key={id} style={{
            display: 'flex', gap: 8, flexDirection: from === 'user' ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
          }}>
            {/* Avatar */}
            <div style={{
              width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
              background: from === 'ai' ? '#1565C0' : '#E65100',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15,
            }}>
              {from === 'ai' ? '🤖' : '👤'}
            </div>
            {/* Bubble */}
            <div style={{ maxWidth: '75%' }}>
              <div style={{
                background: from === 'ai' ? 'white' : '#1565C0',
                borderRadius: from === 'ai' ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                padding: '12px 14px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              }}>
                <p style={{
                  margin: 0, fontSize: 13.5, lineHeight: 1.55,
                  color: from === 'ai' ? '#263238' : 'white',
                  whiteSpace: 'pre-line',
                }}>{text}</p>
              </div>
              <div style={{
                fontSize: 10, color: '#9E9E9E', marginTop: 4,
                textAlign: from === 'user' ? 'right' : 'left',
              }}>{time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div style={{ padding: '4px 16px 0', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {suggestions.map(s => (
          <button key={s} onClick={() => setInput(s)} style={{
            background: '#E3F2FD', border: '1px solid #90CAF9', borderRadius: 16,
            padding: '6px 12px', color: '#1565C0', fontSize: 11.5, fontWeight: 600,
            cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            {s}
          </button>
        ))}
      </div>

      {/* Input bar */}
      <div style={{
        padding: '10px 16px 14px',
        background: 'white',
        borderTop: '1px solid #E8EAED',
        display: 'flex', gap: 8, alignItems: 'center',
      }}>
        <button style={{
          width: 40, height: 40, borderRadius: '50%', border: 'none', background: '#E3F2FD',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          flexShrink: 0,
        }}>
          <Mic size={18} color="#1565C0" />
        </button>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Ask anything about careers..."
          style={{
            flex: 1, height: 42, borderRadius: 21, border: '2px solid #E8EAED',
            padding: '0 16px', fontSize: 14, color: '#263238', background: '#F5F7FF',
            outline: 'none', fontFamily: 'inherit',
          }}
        />
        <button onClick={send} style={{
          width: 40, height: 40, borderRadius: '50%', border: 'none',
          background: input.trim() ? '#1565C0' : '#E8EAED',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          flexShrink: 0, transition: 'background 0.2s',
          boxShadow: input.trim() ? '0 3px 10px rgba(21,101,192,0.35)' : 'none',
        }}>
          <Send size={16} color={input.trim() ? 'white' : '#9E9E9E'} />
        </button>
      </div>
    </div>
  );
}
