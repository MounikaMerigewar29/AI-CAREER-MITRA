import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const personalityTypes = [
  { type: 'The Innovator', emoji: '🚀', desc: 'You thrive on solving new problems, building systems, and pushing boundaries. Born for tech & engineering.', color: '#1565C0', bg: 'linear-gradient(135deg, #1565C0, #0097A7)' },
  { type: 'The Creator', emoji: '🎨', desc: 'Visual thinker with a strong aesthetic sense. You see the world differently and express ideas beautifully.', color: '#6A1B9A', bg: 'linear-gradient(135deg, #6A1B9A, #AB47BC)' },
  { type: 'The Nurturer', emoji: '🌿', desc: 'Deeply empathetic and driven to help others grow. Natural teacher, counselor, or healthcare professional.', color: '#2E7D32', bg: 'linear-gradient(135deg, #2E7D32, #43A047)' },
  { type: 'The Analyst', emoji: '📊', desc: 'Logic-first mindset. You find patterns in chaos and make data-driven decisions. Made for finance and research.', color: '#E65100', bg: 'linear-gradient(135deg, #E65100, #FF7043)' },
];

const hiddenStrengths = [
  { label: 'Analytical Mindset', desc: 'You break down complex problems systematically', icon: '🧠', color: '#1565C0', bg: '#E3F2FD' },
  { label: 'Pattern Recognition', desc: 'You spot connections others miss', icon: '🔍', color: '#2E7D32', bg: '#E8F5E9' },
  { label: 'Creative Problem Solving', desc: 'You find unconventional solutions', icon: '💡', color: '#E65100', bg: '#FFF3E0' },
];

const naturalTalents = [
  { label: 'Quick Learner', icon: '⚡' }, { label: 'Logical Thinking', icon: '🔢' },
  { label: 'Detail Oriented', icon: '🎯' }, { label: 'Adaptable', icon: '🔄' },
  { label: 'Team Player', icon: '🤝' }, { label: 'Self-Motivated', icon: '🔥' },
];

const domains = [
  { label: 'Technology & Software', match: 96, color: '#1565C0' },
  { label: 'Data Science & AI', match: 91, color: '#0097A7' },
  { label: 'Product & Design', match: 84, color: '#6A1B9A' },
  { label: 'Research & Academia', match: 78, color: '#2E7D32' },
];

export function TalentDiscoveryScreen() {
  const [revealed, setRevealed] = useState(false);
  const [personalityIdx] = useState(0);
  const personality = personalityTypes[personalityIdx];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1565C0 0%, #6A1B9A 100%)', padding: '14px 20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={20} color="white" />
          </div>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Talent Discovery Engine</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>AI-powered personal analysis</p>
          </div>
        </div>
        {!revealed && (
          <button onClick={() => setRevealed(true)} style={{
            width: '100%', height: 48, background: 'white', border: 'none', borderRadius: 24,
            color: '#1565C0', fontSize: 15, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          }}>
            <Sparkles size={18} /> Reveal My Hidden Talents
          </button>
        )}
        {revealed && (
          <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 14 }}>✅</span>
            <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>Analysis complete — 847 data points analyzed</span>
          </div>
        )}
      </div>

      {!revealed ? (
        /* Pre-reveal state */
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🔮</div>
            <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 800, color: '#1A237E' }}>Your talents are waiting to be discovered</h3>
            <p style={{ margin: 0, fontSize: 14, color: '#78909C', lineHeight: 1.6 }}>
              Our AI has analyzed your assessment responses, interests, and behavior patterns to reveal your unique strengths.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
            {['Analyzing 847 assessment responses', 'Mapping personality traits', 'Identifying hidden strengths', 'Matching career domains'].map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'white', borderRadius: 14, padding: '12px 16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                  {['🔍', '🧠', '⚡', '🎯'][i]}
                </div>
                <span style={{ fontSize: 13, color: '#546E7A', fontWeight: 600 }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Post-reveal state */
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
          {/* Career Personality Type — Hero */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
            style={{ background: personality.bg, borderRadius: 22, padding: '20px', marginBottom: 14, boxShadow: '0 8px 24px rgba(21,101,192,0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 10, padding: '3px 12px', color: 'white', fontSize: 10, fontWeight: 800, letterSpacing: 1 }}>CAREER PERSONALITY TYPE</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, flexShrink: 0 }}>
                {personality.emoji}
              </div>
              <div>
                <div style={{ color: 'white', fontSize: 24, fontWeight: 900, lineHeight: 1.1 }}>{personality.type}</div>
                <p style={{ margin: '6px 0 0', color: 'rgba(255,255,255,0.85)', fontSize: 13, lineHeight: 1.5 }}>{personality.desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Hidden Strengths */}
          <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 10 }}>✨ HIDDEN STRENGTHS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
            {hiddenStrengths.map(({ label, desc, icon, color, bg }, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1 }}
                style={{ background: 'white', borderRadius: 16, padding: '12px 14px', display: 'flex', gap: 12, alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color }}>🔓 {label}</div>
                  <div style={{ fontSize: 12, color: '#78909C', marginTop: 2 }}>{desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Natural Talents */}
          <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 10 }}>💎 NATURAL TALENTS</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
            {naturalTalents.map(({ label, icon }) => (
              <motion.span key={label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
                style={{ background: 'white', border: '2px solid #E3F2FD', borderRadius: 20, padding: '8px 14px', fontSize: 13, fontWeight: 700, color: '#1565C0', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                <span>{icon}</span> {label}
              </motion.span>
            ))}
          </div>

          {/* Top matching domains */}
          <div style={{ background: 'white', borderRadius: 18, padding: '14px 16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>🎯 TOP MATCHING CAREER DOMAINS</div>
            {domains.map(({ label, match, color }, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#263238' }}>{label}</span>
                  <span style={{ fontSize: 12, fontWeight: 800, color }}>{match}% match</span>
                </div>
                <div style={{ height: 8, background: '#F5F5F5', borderRadius: 4 }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${match}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${color}, ${color}99)` }} />
                </div>
              </div>
            ))}
          </div>

          <button style={{
            width: '100%', height: 52, background: 'linear-gradient(135deg, #1565C0, #6A1B9A)',
            border: 'none', borderRadius: 26, color: 'white', fontSize: 15, fontWeight: 800, cursor: 'pointer',
            boxShadow: '0 5px 18px rgba(21,101,192,0.35)',
          }}>
            📄 Download My Talent Report
          </button>
        </div>
      )}
    </div>
  );
}
