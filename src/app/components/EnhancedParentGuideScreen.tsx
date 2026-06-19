import { useState } from 'react';
import { Play, Pause, Volume2, ChevronDown, ChevronUp, Globe } from 'lucide-react';

type Lang = 'Telugu' | 'Hindi' | 'English';

const content: Record<Lang, {
  greeting: string;
  overview: string;
  salary: string;
  jobs: string;
  education: string;
  faqs: { q: string; a: string }[];
}> = {
  Telugu: {
    greeting: 'గౌరవప్రద తల్లిదండ్రులకు నమస్కారం! 🙏',
    overview: 'మీ పిల్లవాడు సాఫ్ట్‌వేర్ ఇంజినీర్ అవ్వడానికి మంచి సామర్థ్యం ఉంది. ఇది IT రంగంలో అత్యంత గౌరవప్రదమైన వృత్తి.',
    salary: 'నెలకు ₹50,000 – ₹2,00,000',
    jobs: 'TCS, Infosys, విప్రో, హైదరాబాద్ IT పార్కులలో 20 లక్షలకు పైగా ఉద్యోగాలు అందుబాటులో ఉన్నాయి.',
    education: 'Class 12 తర్వాత B.Tech CSE (4 సంవత్సరాలు). ప్రభుత్వ స్కాలర్‌షిప్‌లు అందుబాటులో ఉన్నాయి.',
    faqs: [
      { q: 'ఈ చదువుకు ఎంత ఖర్చవుతుంది?', a: 'ప్రభుత్వ కళాశాలలో సంవత్సరానికి ₹20,000–₹50,000. స్కాలర్‌షిప్‌తో చాలా తక్కువ అవుతుంది.' },
      { q: 'పిల్లవాడు ఊరిలో ఉండవచ్చా?', a: 'అవును! Work from Home అవకాశాలు చాలా ఉన్నాయి. హైదరాబాద్, బెంగళూరులలో కూడా పని అవకాశాలు ఉన్నాయి.' },
      { q: 'ఉద్యోగం గ్యారంటీ ఉంటుందా?', a: 'IT రంగంలో డిమాండ్ చాలా ఎక్కువగా ఉంది. మంచి కళాశాలలో 90%+ ప్లేస్‌మెంట్ రికార్డు ఉంది.' },
    ],
  },
  Hindi: {
    greeting: 'आदरणीय अभिभावकों को नमस्ते! 🙏',
    overview: 'आपका बच्चा Software Engineer बनने की उत्कृष्ट क्षमता रखता है। यह IT क्षेत्र में सबसे सम्मानित और आकर्षक करियर है।',
    salary: 'प्रति माह ₹50,000 – ₹2,00,000',
    jobs: 'TCS, Infosys, Wipro, बेंगलुरु IT पार्कों में 20 लाख से अधिक नौकरियां उपलब्ध हैं।',
    education: 'Class 12 के बाद B.Tech CSE (4 साल)। सरकारी छात्रवृत्तियां उपलब्ध हैं।',
    faqs: [
      { q: 'इस पढ़ाई में कितना खर्च होगा?', a: 'सरकारी कॉलेज में ₹20,000–₹50,000 प्रति वर्ष। छात्रवृत्ति से और कम हो सकता है।' },
      { q: 'क्या बच्चा गांव में रह सकता है?', a: 'हाँ! Work from Home के बहुत अवसर हैं। हैदराबाद, बेंगलुरु में भी काम मिल सकता है।' },
      { q: 'नौकरी मिलने की गारंटी है?', a: 'IT क्षेत्र में मांग बहुत अधिक है। अच्छे कॉलेज में 90%+ placement record है।' },
    ],
  },
  English: {
    greeting: 'Dear Parents, Namaste! 🙏',
    overview: 'Your child shows excellent potential for becoming a Software Engineer — one of the most respected and well-paying careers in the IT sector today.',
    salary: '₹50,000 – ₹2,00,000 per month',
    jobs: '20+ lakh jobs available at TCS, Infosys, Wipro, and Hyderabad / Bengaluru IT parks.',
    education: 'B.Tech CSE (4 years) after Class 12. Government scholarships are available to support education.',
    faqs: [
      { q: 'How much does this education cost?', a: 'Government colleges cost ₹20,000–₹50,000 per year. Scholarships can reduce this significantly.' },
      { q: 'Can my child stay close to home?', a: 'Yes! Work from Home opportunities are widely available. Jobs in Hyderabad and Bengaluru are also an option.' },
      { q: 'Is a job guaranteed?', a: 'IT sector demand is very high. Good colleges have 90%+ placement records.' },
    ],
  },
};

export function EnhancedParentGuideScreen() {
  const [lang, setLang] = useState<Lang>('Telugu');
  const [playing, setPlaying] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const c = content[lang];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#FFF8F0' }}>
      <div style={{ background: 'linear-gradient(135deg, #E65100 0%, #FF7043 100%)', padding: '14px 20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 26 }}>👨‍👩‍👦</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Parent Guidance</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>Career explained for parents</p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4 }}>
            <Globe size={14} color="rgba(255,255,255,0.8)" />
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>Multilingual</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {(['Telugu', 'Hindi', 'English'] as Lang[]).map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              flex: 1, padding: '8px 0', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 800,
              background: lang === l ? 'white' : 'rgba(255,255,255,0.2)',
              color: lang === l ? '#E65100' : 'rgba(255,255,255,0.9)', transition: 'all 0.2s',
            }}>{l}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px 20px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1565C0, #0097A7)', borderRadius: 18, padding: '16px 18px', marginBottom: 14 }}>
          <p style={{ margin: 0, color: 'white', fontSize: 16, fontWeight: 700, lineHeight: 1.5 }}>{c.greeting}</p>
        </div>

        <div style={{ background: 'white', borderRadius: 18, padding: 16, marginBottom: 14, boxShadow: '0 3px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#E3F2FD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Volume2 size={20} color="#1565C0" />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1A237E' }}>Audio Explanation</div>
              <div style={{ fontSize: 12, color: '#78909C' }}>{lang} • 3 min 20 sec</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 2.5, height: 36, marginBottom: 12 }}>
            {Array.from({ length: 36 }, (_, i) => (
              <div key={i} style={{ flex: 1, borderRadius: 2, height: `${Math.abs(Math.sin(i * 0.55) * 60 + 20)}%`, background: playing ? (i < 14 ? '#1565C0' : '#E3F2FD') : '#E3F2FD' }} />
            ))}
          </div>
          <button onClick={() => setPlaying(!playing)} style={{
            width: '100%', height: 46, borderRadius: 23, background: playing ? '#EF5350' : '#1565C0', border: 'none',
            color: 'white', fontSize: 14, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            {playing ? <><Pause size={16} /> Pause Audio</> : <><Play size={16} fill="white" /> Play {lang} Audio</>}
          </button>
        </div>

        {[
          { icon: '💼', title: 'Career Overview', body: c.overview, color: '#1565C0' },
          { icon: '💰', title: 'Expected Salary', body: c.salary, color: '#2E7D32', big: true },
          { icon: '🏢', title: 'Job Opportunities', body: c.jobs, color: '#6A1B9A' },
          { icon: '📚', title: 'Education Path', body: c.education, color: '#E65100' },
        ].map(({ icon, title, body, color, big }) => (
          <div key={title} style={{ background: 'white', borderRadius: 16, padding: '14px 16px', marginBottom: 10, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#546E7A', marginBottom: 3 }}>{title}</div>
                <div style={{ fontSize: big ? 20 : 14, fontWeight: big ? 900 : 500, color: big ? color : '#263238', lineHeight: 1.5 }}>{body}</div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: 10 }}>
          <div style={{ padding: '14px 16px', borderBottom: '1px solid #F5F5F5' }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>❓ Parent FAQs</span>
          </div>
          {c.faqs.map(({ q, a }, i) => (
            <div key={i} style={{ borderBottom: i < c.faqs.length - 1 ? '1px solid #F5F5F5' : 'none' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '14px 16px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', textAlign: 'left', gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#1A237E', lineHeight: 1.4, flex: 1 }}>{q}</span>
                {openFaq === i ? <ChevronUp size={16} color="#78909C" /> : <ChevronDown size={16} color="#78909C" />}
              </button>
              {openFaq === i && <div style={{ padding: '0 16px 14px', fontSize: 13.5, color: '#546E7A', lineHeight: 1.6 }}>{a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
