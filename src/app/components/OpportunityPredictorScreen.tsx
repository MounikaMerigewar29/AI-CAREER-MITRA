import { Clock, ExternalLink, Zap } from 'lucide-react';

const opportunities = [
  {
    urgency: 'URGENT', urgencyColor: '#EF5350', urgencyBg: '#FFEBEE',
    daysLeft: 3, type: 'Scholarship', emoji: '🏆',
    title: 'NSP Central Sector Scholarship',
    org: 'National Scholarship Portal',
    desc: 'You match 96% eligibility. ₹12,000/year award. Only 3 days left — apply immediately!',
    action: 'Apply NOW', color: '#EF5350', bg: '#FFEBEE',
    alert: '⚡ Closing in 72 hours',
  },
  {
    urgency: 'EXPIRING SOON', urgencyColor: '#F57F17', urgencyBg: '#FFF8E1',
    daysLeft: 12, type: 'Internship', emoji: '💼',
    title: 'TCS iON Software Intern (Paid)',
    org: 'Tata Consultancy Services',
    desc: 'AI matched this to your profile. ₹15,000/month stipend. 500+ students from AP selected last year.',
    action: 'Apply This Week', color: '#F57F17', bg: '#FFF8E1',
    alert: '📅 Closes Jan 30',
  },
  {
    urgency: 'DON\'T MISS', urgencyColor: '#6A1B9A', urgencyBg: '#F3E5F5',
    daysLeft: 20, type: 'Competition', emoji: '⌨️',
    title: 'TCS CodeVita Season 13',
    org: 'TCS',
    desc: 'Coding competition. Finalists get Pre-Placement Offer at TCS. 10 lakh+ participants. Your coding skills qualify.',
    action: 'Register Free', color: '#6A1B9A', bg: '#F3E5F5',
    alert: '🎯 PPO for winners',
  },
  {
    urgency: 'OPEN', urgencyColor: '#2E7D32', urgencyBg: '#E8F5E9',
    daysLeft: null, type: 'Certification', emoji: '📜',
    title: 'Google Data Analytics Certificate',
    org: 'Google on Coursera',
    desc: 'Free for 7 days trial. Globally recognized certificate. Adds ₹1–3 LPA to your salary potential.',
    action: 'Start Free Trial', color: '#2E7D32', bg: '#E8F5E9',
    alert: '🆓 7-day free trial',
  },
  {
    urgency: 'UPCOMING', urgencyColor: '#1565C0', urgencyBg: '#E3F2FD',
    daysLeft: 45, type: 'Hackathon', emoji: '🚀',
    title: 'Smart India Hackathon 2026',
    org: 'Ministry of Education',
    desc: 'National-level event. ₹1 lakh prize + direct job offers. Register now to form your team in time.',
    action: 'Register Team', color: '#1565C0', bg: '#E3F2FD',
    alert: '🏆 ₹1L prize',
  },
  {
    urgency: 'OPEN', urgencyColor: '#0097A7', urgencyBg: '#E0F7FA',
    daysLeft: null, type: 'Govt Scheme', emoji: '🏛️',
    title: 'PM KAUSHAL VIKAS YOJANA (PMKVY)',
    org: 'Ministry of Skill Development',
    desc: 'Free IT skills training + ₹8,000 reward on completion. Python, Cybersecurity, AI tracks available.',
    action: 'Enroll Free', color: '#0097A7', bg: '#E0F7FA',
    alert: '💰 ₹8,000 reward',
  },
];

export function OpportunityPredictorScreen() {
  const urgent = opportunities.filter(o => o.urgency === 'URGENT' || o.urgency === 'EXPIRING SOON').length;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1A237E 0%, #283593 100%)', padding: '14px 20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: '#FFD54F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={22} color="#1A237E" fill="#1A237E" />
          </div>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>AI Opportunity Predictor</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Opportunities you might miss</p>
          </div>
        </div>
        {/* Alert banner */}
        <div style={{ background: '#EF5350', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Clock size={15} color="white" />
          <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>
            ⚠️ {urgent} opportunities closing soon! Act now.
          </span>
        </div>
      </div>

      {/* Opportunity cards */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        <div style={{ fontSize: 12, color: '#78909C', fontWeight: 700, marginBottom: 12 }}>
          🤖 AI identified {opportunities.length} opportunities based on your profile
        </div>
        {opportunities.map(({ urgency, urgencyColor, urgencyBg, daysLeft, type, emoji, title, org, desc, action, color, bg, alert }, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 18, marginBottom: 12, overflow: 'hidden', boxShadow: '0 3px 12px rgba(0,0,0,0.07)', border: urgency === 'URGENT' ? `2px solid ${urgencyColor}` : '2px solid transparent' }}>
            {/* Urgency strip */}
            <div style={{ background: urgencyBg, padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 9, fontWeight: 900, color: urgencyColor, background: `${urgencyColor}20`, padding: '2px 10px', borderRadius: 10, letterSpacing: 0.5 }}>{urgency}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: urgencyColor }}>{alert}</span>
              </div>
              {daysLeft && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Clock size={11} color={urgencyColor} />
                  <span style={{ fontSize: 11, fontWeight: 800, color: urgencyColor }}>{daysLeft} days</span>
                </div>
              )}
            </div>

            {/* Main content */}
            <div style={{ padding: '12px 16px' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', lineHeight: 1.2, flex: 1, marginRight: 8 }}>{title}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, background: `${color}15`, color, padding: '2px 8px', borderRadius: 8, whiteSpace: 'nowrap', flexShrink: 0 }}>{type}</span>
                  </div>
                  <div style={{ fontSize: 11, color: '#78909C', marginTop: 2 }}>{org}</div>
                </div>
              </div>
              <p style={{ margin: '0 0 12px', fontSize: 13, color: '#546E7A', lineHeight: 1.5 }}>{desc}</p>
              <button style={{
                width: '100%', height: 44, background: color, border: 'none', borderRadius: 22,
                color: 'white', fontSize: 13, fontWeight: 800, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                boxShadow: `0 3px 10px ${color}35`,
              }}>
                {action} <ExternalLink size={13} />
              </button>
            </div>
          </div>
        ))}

        <div style={{ background: '#E3F2FD', borderRadius: 14, padding: '12px 14px', display: 'flex', gap: 8 }}>
          <span style={{ fontSize: 16 }}>🔔</span>
          <div style={{ fontSize: 12, color: '#1565C0', lineHeight: 1.5 }}>
            <strong>Enable WhatsApp alerts</strong> so you never miss an opportunity like these. AI checks for new matches daily!
          </div>
        </div>
      </div>
    </div>
  );
}
