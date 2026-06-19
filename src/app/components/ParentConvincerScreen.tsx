import { useState } from 'react';
import { Play, Pause, Share2, Download, Globe } from 'lucide-react';

type Lang = 'Telugu' | 'Hindi' | 'English';

const points: Record<Lang, { title: string; points: { icon: string; heading: string; detail: string }[] }> = {
  Telugu: {
    title: 'మీ పిల్లవాడి భవిష్యత్తు గురించి',
    points: [
      { icon: '💰', heading: 'జీతం – నెలకు ₹50,000+', detail: 'Software Engineer గా మొదట ₹50,000 వస్తుంది. 5 సంవత్సరాలలో ₹1,50,000+ నెలకు సాధ్యం.' },
      { icon: '🏢', heading: 'TCS, Infosys, Google లో ఉద్యోగం', detail: 'Hyderabad, Bangalore IT పార్కులలో 20 లక్షలకు పైగా jobs అందుబాటులో ఉన్నాయి.' },
      { icon: '🎓', heading: 'B.Tech CSE – ప్రభుత్వ కళాశాలలో', detail: 'NIT, JNTU లలో చదివితే ఖర్చు తక్కువ. TS Epass, Post Matric scholarship లు లభిస్తాయి.' },
      { icon: '🏠', heading: 'Work From Home – ఊరిలో ఉండవచ్చు', detail: 'IT రంగంలో remote work విస్తృతంగా ఉంది. పిల్లవాడు ఇంటి దగ్గరే పని చేయవచ్చు.' },
      { icon: '🔒', heading: 'భవిష్యత్తులో డిమాండ్ చాలా ఎక్కువ', detail: '2030 కల్లా 21 లక్షలకు పైగా IT jobs అవసరం. మీ పిల్లవాడికి ఉద్యోగం గ్యారంటీ.' },
    ],
  },
  Hindi: {
    title: 'आपके बच्चे का भविष्य',
    points: [
      { icon: '💰', heading: 'सैलरी – ₹50,000/माह से शुरू', detail: 'Software Engineer के रूप में शुरुआत ₹50,000 से होती है। 5 साल में ₹1,50,000+ संभव।' },
      { icon: '🏢', heading: 'TCS, Infosys, Google में नौकरी', detail: 'हैदराबाद, बेंगलुरू IT पार्कों में 20 लाख+ jobs उपलब्ध हैं।' },
      { icon: '🎓', heading: 'B.Tech CSE – सरकारी कॉलेज', detail: 'NIT, JNTU में पढ़ाई सस्ती है। NSP, Post Matric छात्रवृत्ति मिलती है।' },
      { icon: '🏠', heading: 'घर से काम – गांव में रह सकते हैं', detail: 'IT में remote work बहुत है। बच्चा घर के पास रहकर काम कर सकता है।' },
      { icon: '🔒', heading: '2030 तक बहुत मांग', detail: '21 लाख+ IT jobs जरूरी होंगी। आपके बच्चे को नौकरी की गारंटी।' },
    ],
  },
  English: {
    title: 'Your Child\'s Bright Future',
    points: [
      { icon: '💰', heading: 'Salary – ₹50,000/month to start', detail: 'Software Engineers start at ₹50,000/month and can earn ₹1,50,000+ within 5 years.' },
      { icon: '🏢', heading: 'Jobs at TCS, Infosys, Google', detail: '20+ lakh IT jobs available in Hyderabad and Bengaluru IT parks. Very easy to find work.' },
      { icon: '🎓', heading: 'B.Tech CSE – Government College', detail: 'Government engineering colleges are affordable. Scholarships available to reduce fees.' },
      { icon: '🏠', heading: 'Work From Home – Stay close', detail: 'IT has extensive remote work options. Your child can earn well while staying near family.' },
      { icon: '🔒', heading: 'Very high demand by 2030', detail: '21 lakh+ IT jobs needed by 2030. Your child\'s job security is virtually guaranteed.' },
    ],
  },
};

export function ParentConvincerScreen() {
  const [lang, setLang] = useState<Lang>('Telugu');
  const [generated, setGenerated] = useState(false);
  const [playing, setPlaying] = useState(false);
  const content = points[lang];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FFF8F0' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #E65100 0%, #FF7043 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 28 }}>🤝</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>AI Parent Convincer</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Auto-generate parent explanations</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {(['Telugu', 'Hindi', 'English'] as Lang[]).map(l => (
            <button key={l} onClick={() => { setLang(l); setGenerated(false); }} style={{
              flex: 1, padding: '8px 0', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 800,
              background: lang === l ? 'white' : 'rgba(255,255,255,0.2)',
              color: lang === l ? '#E65100' : 'rgba(255,255,255,0.9)',
            }}>{l}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px 20px' }}>
        {/* Big CTA */}
        {!generated && (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: 60, marginBottom: 16 }}>👨‍👩‍👦</div>
            <h3 style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 800, color: '#1A237E' }}>
              Explain to My Parents
            </h3>
            <p style={{ margin: '0 0 24px', fontSize: 14, color: '#78909C', lineHeight: 1.6 }}>
              AI will generate a simple, honest explanation in {lang} that will help your parents understand and support your career choice.
            </p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              {['📱 Voice Explanation', '📄 Written Summary', '💬 WhatsApp Ready'].map(f => (
                <div key={f} style={{ flex: 1, background: '#FFF3E0', borderRadius: 12, padding: '10px 6px', fontSize: 11, color: '#E65100', fontWeight: 700, textAlign: 'center', lineHeight: 1.4 }}>{f}</div>
              ))}
            </div>
            <button onClick={() => setGenerated(true)} style={{
              width: '100%', height: 60, background: 'linear-gradient(135deg, #E65100, #FF7043)',
              border: 'none', borderRadius: 30, color: 'white', fontSize: 18, fontWeight: 800,
              cursor: 'pointer', boxShadow: '0 6px 20px rgba(230,81,0,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}>
              🎤 Generate {lang} Explanation
            </button>
          </div>
        )}

        {generated && (
          <>
            <div style={{ background: '#E8F5E9', borderRadius: 12, padding: '10px 14px', marginBottom: 14, display: 'flex', gap: 8 }}>
              <span>✅</span><span style={{ fontSize: 13, color: '#2E7D32', fontWeight: 700 }}>Ready! Share this with your parents.</span>
            </div>

            {/* Audio player */}
            <div style={{ background: 'linear-gradient(135deg, #E65100, #FF7043)', borderRadius: 18, padding: '16px', marginBottom: 14, boxShadow: '0 4px 16px rgba(230,81,0,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Globe size={18} color="white" />
                <div style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>Audio Explanation in {lang}</div>
                <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.2)', borderRadius: 10, padding: '2px 10px', fontSize: 10, color: 'white', fontWeight: 800 }}>3:45 min</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 32, marginBottom: 12 }}>
                {Array.from({ length: 40 }, (_, i) => (
                  <div key={i} style={{ flex: 1, borderRadius: 2, height: `${Math.abs(Math.sin(i * 0.6) * 55 + 30)}%`, background: playing ? (i < 18 ? 'white' : 'rgba(255,255,255,0.35)') : 'rgba(255,255,255,0.35)' }} />
                ))}
              </div>
              <button onClick={() => setPlaying(!playing)} style={{
                width: '100%', height: 46, borderRadius: 23, border: 'none',
                background: playing ? 'rgba(255,255,255,0.9)' : 'white', color: '#E65100',
                fontSize: 14, fontWeight: 800, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}>
                {playing ? <><Pause size={18} /> Pause Audio</> : <><Play size={18} fill="#E65100" /> Play Audio for Parents</>}
              </button>
            </div>

            {/* Content */}
            <div style={{ background: 'white', borderRadius: 18, padding: '16px', marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>{content.title}</div>
              {content.points.map(({ icon, heading, detail }, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: i < content.points.length - 1 ? 14 : 0, paddingBottom: i < content.points.length - 1 ? 14 : 0, borderBottom: i < content.points.length - 1 ? '1px solid #F5F5F5' : 'none' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FFF3E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#263238', marginBottom: 3 }}>{heading}</div>
                    <div style={{ fontSize: 13, color: '#546E7A', lineHeight: 1.5 }}>{detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Share buttons */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <button style={{ flex: 1, height: 50, background: '#2E7D32', border: 'none', borderRadius: 25, color: 'white', fontSize: 14, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Share2 size={16} /> WhatsApp
              </button>
              <button style={{ flex: 1, height: 50, background: '#E3F2FD', border: '2px solid #90CAF9', borderRadius: 25, color: '#1565C0', fontSize: 14, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Download size={16} /> Save PDF
              </button>
            </div>
            <button onClick={() => setGenerated(false)} style={{ width: '100%', height: 42, background: 'transparent', border: '2px solid #E8EAED', borderRadius: 21, color: '#78909C', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
              ↩ Change Language
            </button>
          </>
        )}
      </div>
    </div>
  );
}
