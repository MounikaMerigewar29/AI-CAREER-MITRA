import { useState } from 'react';
import { Clock } from 'lucide-react';

type Career = 'Software Engineer' | 'Data Analyst' | 'Teacher' | 'UI/UX Designer';

const days: Record<Career, { time: string; activity: string; emoji: string; detail: string; mood: string }[]> = {
  'Software Engineer': [
    { time: '9:00 AM', activity: 'Morning standup meeting', emoji: '☕', mood: '😊', detail: 'Quick 15-min sync with your team. Discuss what you\'re building and any blockers. Fully remote or in-office!' },
    { time: '9:30 AM', activity: 'Code review & bug fixing', emoji: '🐛', mood: '🤔', detail: 'Review your teammate\'s code, spot issues, suggest improvements. This is how great software is built.' },
    { time: '11:00 AM', activity: 'Building new features', emoji: '💻', mood: '🚀', detail: 'Write Python/Java code to build new app features. You see your ideas come to life on screen!' },
    { time: '1:00 PM', activity: 'Lunch break 🍱', emoji: '🍽️', mood: '😄', detail: 'Relax, recharge! Many companies have free lunch and game rooms.' },
    { time: '2:00 PM', activity: 'Design discussion with team', emoji: '🎯', mood: '🤝', detail: 'Work with designers and product managers to plan the next feature. Your ideas shape the product!' },
    { time: '3:30 PM', activity: 'Learning & upskilling', emoji: '📚', mood: '🧠', detail: 'Companies give time (and pay!) for you to learn new technologies — Coursera, Udemy on company time!' },
    { time: '5:00 PM', activity: 'Testing & deployment', emoji: '🚀', mood: '🎉', detail: 'Your code goes live! Users around the world start using what you built today. Priceless feeling.' },
    { time: '6:00 PM', activity: 'Work ends — your time!', emoji: '🏠', mood: '😊', detail: 'Healthy work-life balance. Work from home means you save commute time too.' },
  ],
  'Data Analyst': [
    { time: '9:00 AM', activity: 'Check dashboards & reports', emoji: '📊', mood: '☕', detail: 'Review overnight data trends, check if business metrics are on track. You\'re the company\'s data detective!' },
    { time: '10:00 AM', activity: 'SQL queries & data cleaning', emoji: '🔍', mood: '🤔', detail: 'Write SQL to extract data. Clean messy data to make it analysis-ready.' },
    { time: '11:30 AM', activity: 'Build Power BI visualizations', emoji: '📈', mood: '🎨', detail: 'Turn raw numbers into beautiful charts that help managers make million-rupee decisions!' },
    { time: '1:00 PM', activity: 'Lunch break 🍱', emoji: '🍽️', mood: '😄', detail: 'Great culture with flexible break times.' },
    { time: '2:00 PM', activity: 'Present insights to management', emoji: '🎤', mood: '💼', detail: 'Present your findings to senior leaders. Your data insights influence strategy!' },
    { time: '3:30 PM', activity: 'Python scripting & automation', emoji: '🐍', mood: '⚡', detail: 'Automate repetitive tasks using Python. Save hours of manual work every week.' },
    { time: '5:00 PM', activity: 'Prepare tomorrow\'s reports', emoji: '📋', mood: '✅', detail: 'Set up automated reports so stakeholders have fresh data every morning.' },
    { time: '6:00 PM', activity: 'Log off — data can wait!', emoji: '🏠', mood: '😊', detail: 'Great work-life balance in most analytics roles.' },
  ],
  'Teacher': [
    { time: '8:00 AM', activity: 'Prepare lesson plans', emoji: '📝', mood: '☕', detail: 'Design engaging lessons. Great teachers make complex topics simple and fun!' },
    { time: '9:00 AM', activity: 'Teach Class 10 Mathematics', emoji: '📐', mood: '🎓', detail: 'Stand in front of 40+ eager students. Explain concepts, answer questions, inspire curiosity.' },
    { time: '10:30 AM', activity: 'Interactive quiz session', emoji: '🎯', mood: '😄', detail: 'Fun quiz game — students compete to answer fastest. Learning through play!' },
    { time: '12:00 PM', activity: 'Lunch & student counseling', emoji: '🍽️', mood: '🤝', detail: 'Students come with personal problems. You guide them, be their mentor.' },
    { time: '1:00 PM', activity: 'Science lab session', emoji: '🔬', mood: '🚀', detail: 'Hands-on experiments make science real. When a student\'s eyes light up — that\'s why you teach!' },
    { time: '2:30 PM', activity: 'Correct assignments', emoji: '✏️', mood: '📚', detail: 'Review student work, give helpful feedback. Track each student\'s progress carefully.' },
    { time: '4:00 PM', activity: 'Parent-teacher meetings', emoji: '👨‍👩‍👦', mood: '💬', detail: 'Build partnerships for student success.' },
    { time: '5:30 PM', activity: 'Prepare tomorrow & rest', emoji: '🏠', mood: '😊', detail: 'Government teachers have fixed hours and great job security with pension.' },
  ],
  'UI/UX Designer': [
    { time: '9:30 AM', activity: 'Review design briefs', emoji: '📋', mood: '☕', detail: 'Read new project requirements. Understand what users need — great design starts with empathy!' },
    { time: '10:00 AM', activity: 'Wireframing in Figma', emoji: '🎨', mood: '✏️', detail: 'Sketch app screens in Figma. Your creative ideas become the blueprint for apps!' },
    { time: '11:30 AM', activity: 'User research & interviews', emoji: '🔍', mood: '🤔', detail: 'Talk to real users, understand their pain points. Design that solves real problems.' },
    { time: '1:00 PM', activity: 'Lunch + inspiration hunt', emoji: '🍽️', mood: '😄', detail: 'Designers draw inspiration from everywhere — art, nature, other apps.' },
    { time: '2:00 PM', activity: 'Create high-fidelity designs', emoji: '💎', mood: '🎨', detail: 'Polish your wireframes into beautiful, pixel-perfect screens.' },
    { time: '3:30 PM', activity: 'Prototype & test with users', emoji: '📱', mood: '🚀', detail: 'Build interactive prototypes, watch real users try them.' },
    { time: '5:00 PM', activity: 'Design reviews with developers', emoji: '🤝', mood: '💼', detail: 'Handoff designs to developers, explain interactions. Bridge creativity and technology!' },
    { time: '6:00 PM', activity: 'Creative time — log off!', emoji: '🏠', mood: '😊', detail: 'UI/UX has great remote work options. Many designers freelance for global clients from home.' },
  ],
};

const careers: Career[] = ['Software Engineer', 'Data Analyst', 'Teacher', 'UI/UX Designer'];
const careerEmoji: Record<Career, string> = { 'Software Engineer': '💻', 'Data Analyst': '📊', 'Teacher': '👩‍🏫', 'UI/UX Designer': '🎨' };
const careerColor: Record<Career, string> = { 'Software Engineer': '#1565C0', 'Data Analyst': '#0097A7', 'Teacher': '#E65100', 'UI/UX Designer': '#6A1B9A' };

export function CareerSimulatorScreen() {
  const [selectedCareer, setSelectedCareer] = useState<Career>('Software Engineer');
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const timeline = days[selectedCareer];
  const color = careerColor[selectedCareer];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      <div style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`, padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 22 }}>🎬</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 19, fontWeight: 800 }}>AI Career Simulator</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>A Day in the Life of a...</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2 }}>
          {careers.map(c => (
            <button key={c} onClick={() => { setSelectedCareer(c); setExpandedStep(0); }} style={{
              padding: '7px 12px', borderRadius: 20, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              background: selectedCareer === c ? 'white' : 'rgba(255,255,255,0.2)',
              color: selectedCareer === c ? careerColor[c] : 'rgba(255,255,255,0.9)',
              fontSize: 12, fontWeight: 800, flexShrink: 0,
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              {careerEmoji[c]} {c.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ background: 'white', padding: '10px 20px', display: 'flex', gap: 16, alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <Clock size={14} color="#78909C" />
        <span style={{ fontSize: 12, color: '#78909C', fontWeight: 600 }}>A TYPICAL WORKDAY</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <span style={{ fontSize: 11, background: '#E8F5E9', color: '#2E7D32', padding: '3px 10px', borderRadius: 10, fontWeight: 700 }}>8–9 hrs/day</span>
          <span style={{ fontSize: 11, background: `${color}15`, color, padding: '3px 10px', borderRadius: 10, fontWeight: 700 }}>{careerEmoji[selectedCareer]}</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 22, top: 0, bottom: 0, width: 2, background: `linear-gradient(180deg, ${color}, ${color}33)` }} />
          {timeline.map(({ time, activity, emoji, detail, mood }, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 10, position: 'relative', zIndex: 1 }}>
              <div onClick={() => setExpandedStep(expandedStep === i ? null : i)} style={{
                width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                background: expandedStep === i ? color : 'white',
                border: `2.5px solid ${expandedStep === i ? color : '#E8EAED'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                boxShadow: expandedStep === i ? `0 4px 14px ${color}40` : '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer',
              }}>{emoji}</div>
              <button onClick={() => setExpandedStep(expandedStep === i ? null : i)} style={{
                flex: 1, background: expandedStep === i ? `${color}10` : 'white',
                border: `2px solid ${expandedStep === i ? color : '#F0F0F0'}`,
                borderRadius: 16, padding: '10px 14px', cursor: 'pointer', textAlign: 'left',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: expandedStep === i ? 8 : 0 }}>
                  <div>
                    <div style={{ fontSize: 11, color, fontWeight: 800, marginBottom: 2 }}>{time}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#263238' }}>{activity}</div>
                  </div>
                  <span style={{ fontSize: 18 }}>{mood}</span>
                </div>
                {expandedStep === i && <p style={{ margin: 0, fontSize: 13, color: '#546E7A', lineHeight: 1.55, borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 8 }}>{detail}</p>}
              </button>
            </div>
          ))}
        </div>
        <div style={{ background: `linear-gradient(135deg, ${color}, ${color}BB)`, borderRadius: 16, padding: '14px 16px', marginTop: 6 }}>
          <div style={{ color: 'white', fontSize: 13, fontWeight: 700, marginBottom: 4 }}>💡 Key Insight</div>
          <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, lineHeight: 1.5 }}>
            {selectedCareer === 'Software Engineer' && 'Software Engineers enjoy creative problem-solving, flexible hours, and among the highest salaries in India.'}
            {selectedCareer === 'Data Analyst' && 'Data Analysts bridge data and decisions — one of the fastest-growing roles in India right now.'}
            {selectedCareer === 'Teacher' && 'Teachers shape the next generation. Government teachers enjoy job security, pension, and deep respect.'}
            {selectedCareer === 'UI/UX Designer' && 'UI/UX Designers blend creativity and technology — high demand in product companies and agencies.'}
          </div>
        </div>
      </div>
    </div>
  );
}
