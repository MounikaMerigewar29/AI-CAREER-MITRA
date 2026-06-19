import { useState } from 'react';
import { Mic, Send, Volume2 } from 'lucide-react';

type Lang = 'Telugu' | 'Hindi' | 'English';

const topics = ['Career Guidance', 'Scholarships', 'College Advice', 'Interview Prep', 'Skill Building', 'Parent Support'];

const replies: Record<string, string> = {
  'Career Guidance': 'Based on your profile, Software Engineering is your strongest match at 96%! I recommend starting with Python programming and practicing DSA problems on LeetCode every day for 30 minutes.',
  'Scholarships': 'Excellent news! I found 4 scholarships you\'re eligible for — Post Matric (₹5,500/yr), NSP Central Sector (₹12,000/yr), and 2 more. The NSP deadline is in 30 days. Shall I guide you through the application?',
  'College Advice': 'For Software Engineering, I recommend: NIT Warangal (98% match, JEE required), JNTU Hyderabad (91% match, EAMCET), or IIIT Hyderabad (96% match, excellent placements). Which would you like to explore?',
  'Interview Prep': 'Great choice! Let\'s start with the basics. For a Software Engineer role, focus on: 1) Data Structures & Algorithms, 2) Object-Oriented Programming, 3) System Design basics. Want to start a mock interview now?',
  'Skill Building': 'To bridge your skill gap, I recommend this learning order: Python basics (2 weeks) → DSA on GeeksforGeeks (2 months) → Web Dev with React (1 month) → SQL (2 weeks). All free resources!',
  'Parent Support': 'I understand. Let me help you explain your career choice to your parents. I can generate a clear explanation in Telugu, Hindi, or English that addresses their concerns about salary, job security, and education costs.',
};

function MentorAvatar({ speaking }: { speaking: boolean }) {
  return (
    <svg viewBox="0 0 160 180" fill="none" style={{ width: 130, height: 146 }}>
      {/* Glow */}
      <ellipse cx="80" cy="170" rx="45" ry="8" fill="rgba(21,101,192,0.15)" />
      {/* Body */}
      <path d="M42 110 Q58 102 80 100 Q102 102 118 110 L122 165 H38 Z" fill="#1565C0" />
      <path d="M64 100 L80 122 L96 100" fill="rgba(255,255,255,0.2)" />
      {/* Tie */}
      <polygon points="80,104 75,116 80,122 85,116" fill="#FFD54F" />
      {/* Head */}
      <circle cx="80" cy="68" r="32" fill="#FFCC80" />
      {/* Hair */}
      <path d="M48 60 Q48 38 80 36 Q112 38 112 60 Q112 46 80 43 Q48 46 48 60Z" fill="#4E342E" />
      {/* Glasses */}
      <rect x="58" y="63" width="20" height="13" rx="6" fill="none" stroke="#78909C" strokeWidth="2" />
      <rect x="82" y="63" width="20" height="13" rx="6" fill="none" stroke="#78909C" strokeWidth="2" />
      <line x1="78" y1="69" x2="82" y2="69" stroke="#78909C" strokeWidth="2" />
      <line x1="48" y1="69" x2="54" y2="67" stroke="#78909C" strokeWidth="2" />
      <line x1="106" y1="67" x2="112" y2="69" stroke="#78909C" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="68" cy="69" r="3.5" fill="#3E2723" />
      <circle cx="92" cy="69" r="3.5" fill="#3E2723" />
      <circle cx="69.5" cy="68" r="1.2" fill="white" />
      <circle cx="93.5" cy="68" r="1.2" fill="white" />
      {/* Smile */}
      <path d="M68 84 Q80 94 92 84" stroke="#3E2723" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Speaking animation dots */}
      {speaking && (
        <g>
          <circle cx="62" cy="105" r="3" fill="#FFD54F" opacity="0.8" />
          <circle cx="73" cy="108" r="4" fill="#FFD54F" opacity="0.9" />
          <circle cx="86" cy="108" r="5" fill="#FFD54F" />
          <circle cx="99" cy="105" r="3.5" fill="#FFD54F" opacity="0.8" />
        </g>
      )}
      {/* Arms */}
      <path d="M42 118 Q30 130 26 142" stroke="#FFCC80" strokeWidth="16" strokeLinecap="round" />
      <path d="M118 118 Q130 130 134 142" stroke="#FFCC80" strokeWidth="16" strokeLinecap="round" />
      {/* Legs */}
      <rect x="62" y="163" width="16" height="14" rx="8" fill="#0D47A1" />
      <rect x="82" y="163" width="16" height="14" rx="8" fill="#0D47A1" />
    </svg>
  );
}

const greetings: Record<Lang, string> = {
  Telugu: 'నమస్కారం! నేను Career Mitra AI Mentor ని. మీకు ఏమి సహాయం చేయవచ్చు?',
  Hindi: 'नमस्ते! मैं Career Mitra AI Mentor हूं। मैं आपकी कैसे मदद कर सकता हूं?',
  English: 'Hello! I\'m your Career Mitra AI Mentor. How can I help you today? 😊',
};

export function MentorAvatarScreen() {
  const [lang, setLang] = useState<Lang>('English');
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ from: 'ai' | 'user'; text: string }[]>([
    { from: 'ai', text: greetings['English'] },
  ]);

  const handleTopic = (topic: string) => {
    setActiveTopic(topic);
    setSpeaking(true);
    const reply = replies[topic] || 'Great question! Let me guide you on this topic.';
    setMessages(m => [...m, { from: 'user', text: `Tell me about ${topic}` }, { from: 'ai', text: reply }]);
    setTimeout(() => setSpeaking(false), 2500);
  };

  const send = () => {
    if (!input.trim()) return;
    const reply = 'That\'s a great question! Based on your profile and assessment results, I recommend focusing on building practical skills through projects and internships. Shall I create a specific action plan for you?';
    setMessages(m => [...m, { from: 'user', text: input }, { from: 'ai', text: reply }]);
    setSpeaking(true);
    setTimeout(() => setSpeaking(false), 2000);
    setInput('');
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1565C0 0%, #0097A7 100%)', padding: '12px 20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🎓</div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: '50%', background: '#69F0AE', border: '2px solid white' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: 'white', fontSize: 16, fontWeight: 800 }}>Career Mitra Mentor</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11 }}>AI • Always available • Multilingual</div>
          </div>
          <div style={{ display: 'flex', gap: 5 }}>
            {(['Telugu', 'Hindi', 'English'] as Lang[]).map(l => (
              <button key={l} onClick={() => { setLang(l); setMessages([{ from: 'ai', text: greetings[l] }]); }} style={{
                padding: '4px 10px', borderRadius: 12, border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 800,
                background: lang === l ? 'white' : 'rgba(255,255,255,0.2)',
                color: lang === l ? '#1565C0' : 'rgba(255,255,255,0.9)',
              }}>{l.slice(0, 3)}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Avatar + topics */}
      <div style={{ background: 'white', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid #F0F0F0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MentorAvatar speaking={speaking} />
          {speaking && (
            <div style={{ display: 'flex', gap: 3, marginTop: 4 }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#1565C0', animation: `bounce 0.6s ${i * 0.2}s infinite` }} />
              ))}
              <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}`}</style>
            </div>
          )}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#546E7A', marginBottom: 8 }}>CHOOSE A TOPIC</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {topics.map(t => (
              <button key={t} onClick={() => handleTopic(t)} style={{
                padding: '6px 10px', borderRadius: 16, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 700,
                background: activeTopic === t ? '#1565C0' : '#F5F7FF',
                color: activeTopic === t ? 'white' : '#546E7A',
                transition: 'all 0.2s',
              }}>{t}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 8 }}>
            <Volume2 size={14} color="#1565C0" />
            <span style={{ fontSize: 11, color: '#1565C0', fontWeight: 600 }}>Voice responses in {lang}</span>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '80%', padding: '10px 13px', borderRadius: msg.from === 'ai' ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
              background: msg.from === 'ai' ? 'white' : '#1565C0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              fontSize: 13, lineHeight: 1.55, color: msg.from === 'ai' ? '#263238' : 'white',
            }}>{msg.text}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{ padding: '8px 14px 12px', background: 'white', borderTop: '1px solid #E8EAED', display: 'flex', gap: 8, alignItems: 'center' }}>
        <button style={{ width: 40, height: 40, borderRadius: '50%', background: '#E3F2FD', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
          <Mic size={18} color="#1565C0" />
        </button>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}
          placeholder={`Ask in ${lang}...`}
          style={{ flex: 1, height: 40, borderRadius: 20, border: '2px solid #E8EAED', padding: '0 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit', background: '#F5F7FF' }} />
        <button onClick={send} style={{ width: 40, height: 40, borderRadius: '50%', background: input ? '#1565C0' : '#E8EAED', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'background 0.2s' }}>
          <Send size={16} color={input ? 'white' : '#9E9E9E'} />
        </button>
      </div>
    </div>
  );
}
