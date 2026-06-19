import { useState } from 'react';
import { Wand2 } from 'lucide-react';

const presetGoals = [
  { id: 'salary', label: '💰 Earn ₹15 LPA', sub: 'High-paying career' },
  { id: 'govt', label: '🏛️ Get a Government Job', sub: 'Job security & pension' },
  { id: 'abroad', label: '✈️ Work Abroad', sub: 'International career' },
  { id: 'startup', label: '🚀 Start My Own Startup', sub: 'Entrepreneurship' },
  { id: 'social', label: '🌿 Work for Social Impact', sub: 'NGO / Govt schemes' },
  { id: 'research', label: '🔬 Pursue Research/PhD', sub: 'Academic career' },
];

const plans: Record<string, { careers: string[]; education: string[]; skills: string[]; timeline: string; salary: string }> = {
  salary: {
    careers: ['Software Engineer', 'Data Scientist', 'Product Manager', 'Investment Banker'],
    education: ['B.Tech CSE / MBA Finance', 'Online certifications (AWS, Python)', 'GATE / CAT for top colleges'],
    skills: ['Python / Java', 'Problem Solving', 'Communication', 'Leadership'],
    timeline: '4–6 years to ₹15 LPA',
    salary: '₹15–30 LPA',
  },
  govt: {
    careers: ['UPSC Civil Services', 'SSC / Banking (IBPS)', 'DRDO / ISRO Scientist', 'State PSU Engineer'],
    education: ['B.Tech / B.Sc / BA as required', 'GATE for PSU Engineering', 'UPSC Prelims → Mains → Interview'],
    skills: ['Current Affairs', 'Aptitude & Reasoning', 'Essay Writing', 'Subject Expertise'],
    timeline: '3–7 years to government service',
    salary: '₹8–20 LPA + benefits',
  },
  abroad: {
    careers: ['Software Engineer (US/UK)', 'Data Analyst (Canada)', 'Research Scientist (Germany)', 'Management Consultant'],
    education: ['B.Tech + MS abroad (GRE required)', 'IELTS / TOEFL (6.5+ band)', 'Top-ranked Indian college'],
    skills: ['Advanced Programming', 'English Fluency', 'GRE Preparation', 'Cross-cultural communication'],
    timeline: '6–8 years to international role',
    salary: '$60K–$120K/year abroad',
  },
  startup: {
    careers: ['Tech Founder', 'Product Designer', 'Growth Hacker', 'Business Developer'],
    education: ['Any engineering / Business degree', 'Startup incubator programs', 'IIM / ISB MBA (optional)'],
    skills: ['Product Thinking', 'Coding Basics', 'Marketing', 'Financial Planning'],
    timeline: '3–10 years (startup success varies)',
    salary: '₹0 to unlimited 🚀',
  },
  social: {
    careers: ['NGO Program Officer', 'Govt Scheme Implementation', 'Social Entrepreneur', 'Education Reformer'],
    education: ['Any UG degree + Social Work (MSW)', 'Fellowships: Teach For India, Gandhi Fellowship'],
    skills: ['Communication', 'Community Mobilization', 'Project Management', 'Empathy'],
    timeline: '2–5 years to meaningful impact',
    salary: '₹4–12 LPA + high satisfaction',
  },
  research: {
    careers: ['IIT/IISc Professor', 'ISRO/DRDO Scientist', 'Pharma Researcher', 'AI Researcher'],
    education: ['B.Tech/B.Sc → M.Tech/M.Sc → PhD', 'GATE / CSIR-NET / JRF', 'International collaborations'],
    skills: ['Deep Subject Expertise', 'Research Methods', 'Publication Writing', 'Critical Thinking'],
    timeline: '8–12 years to senior researcher',
    salary: '₹10–25 LPA + global recognition',
  },
};

export function DreamPlannerScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const [generated, setGenerated] = useState(false);
  const [custom, setCustom] = useState('');

  const plan = selected ? plans[selected] : null;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #6A1B9A 0%, #8E24AA 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Wand2 size={20} color="white" />
          </div>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Dream-to-Reality Planner</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Tell AI your goal. Get a plan.</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* Goal selector */}
        <div style={{ fontSize: 12, fontWeight: 800, color: '#546E7A', letterSpacing: 0.5, marginBottom: 10 }}>WHAT IS YOUR DREAM GOAL?</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
          {presetGoals.map(({ id, label, sub }) => (
            <button key={id} onClick={() => { setSelected(id); setGenerated(false); }} style={{
              padding: '12px 10px', borderRadius: 16, border: `2px solid ${selected === id ? '#6A1B9A' : '#E8EAED'}`,
              background: selected === id ? '#F3E5F5' : 'white', cursor: 'pointer', textAlign: 'left',
              boxShadow: selected === id ? '0 4px 14px rgba(106,27,154,0.2)' : '0 1px 6px rgba(0,0,0,0.04)',
              transition: 'all 0.2s',
            }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: selected === id ? '#6A1B9A' : '#263238', marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 11, color: '#90A4AE' }}>{sub}</div>
            </button>
          ))}
        </div>

        {/* Custom goal input */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#546E7A', letterSpacing: 0.5, marginBottom: 8 }}>OR TYPE YOUR OWN GOAL</div>
          <input value={custom} onChange={e => setCustom(e.target.value)} placeholder='e.g. "I want to become a pilot"'
            style={{ width: '100%', height: 46, borderRadius: 14, border: '2px solid #E8EAED', padding: '0 14px', fontSize: 14, color: '#263238', background: 'white', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
        </div>

        <button disabled={!selected && !custom} onClick={() => setGenerated(true)} style={{
          width: '100%', height: 52, borderRadius: 26, border: 'none',
          background: (selected || custom) ? 'linear-gradient(135deg, #6A1B9A, #8E24AA)' : '#E8EAED',
          color: (selected || custom) ? 'white' : '#9E9E9E', fontSize: 16, fontWeight: 800, cursor: (selected || custom) ? 'pointer' : 'not-allowed',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16,
          boxShadow: (selected || custom) ? '0 5px 18px rgba(106,27,154,0.35)' : 'none',
        }}>
          <Wand2 size={18} /> Generate My Plan
        </button>

        {/* Generated plan */}
        {generated && plan && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ background: '#E8F5E9', borderRadius: 12, padding: '10px 14px', display: 'flex', gap: 8 }}>
              <span>✅</span><span style={{ fontSize: 13, color: '#2E7D32', fontWeight: 700 }}>AI Plan Generated! Here's your personalized roadmap.</span>
            </div>

            {/* Salary target */}
            <div style={{ background: 'linear-gradient(135deg, #6A1B9A, #8E24AA)', borderRadius: 16, padding: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 700 }}>TARGET ACHIEVEMENT</div>
                <div style={{ color: 'white', fontSize: 18, fontWeight: 900, marginTop: 2 }}>{plan.salary}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 2 }}>⏱ {plan.timeline}</div>
              </div>
              <span style={{ fontSize: 36 }}>🎯</span>
            </div>

            {/* Careers */}
            <div style={{ background: 'white', borderRadius: 16, padding: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 10 }}>💼 Suitable Careers</div>
              {plan.careers.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#6A1B9A', flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#263238' }}>{c}</span>
                </div>
              ))}
            </div>

            {/* Education */}
            <div style={{ background: 'white', borderRadius: 16, padding: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 10 }}>🎓 Education Path</div>
              {plan.education.map((e, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: '#6A1B9A', fontWeight: 800 }}>{i + 1}.</span>
                  <span style={{ fontSize: 13, color: '#546E7A', lineHeight: 1.4 }}>{e}</span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div style={{ background: 'white', borderRadius: 16, padding: '14px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 10 }}>⚡ Key Skills to Build</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {plan.skills.map(s => (
                  <span key={s} style={{ background: '#F3E5F5', color: '#6A1B9A', fontSize: 12, fontWeight: 700, padding: '5px 12px', borderRadius: 12 }}>{s}</span>
                ))}
              </div>
            </div>

            <button style={{ width: '100%', height: 50, background: '#1565C0', border: 'none', borderRadius: 25, color: 'white', fontSize: 15, fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 14px rgba(21,101,192,0.35)' }}>
              📄 Download My Dream Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
