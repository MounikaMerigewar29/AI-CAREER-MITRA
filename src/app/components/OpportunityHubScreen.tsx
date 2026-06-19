import { useState } from 'react';
import { ExternalLink, Clock } from 'lucide-react';

type Tab = 'Internships' | 'Certifications' | 'Govt Schemes' | 'Events';

const data: Record<Tab, { title: string; org: string; duration?: string; stipend?: string; detail: string; deadline?: string; emoji: string; color: string; bg: string; tag: string }[]> = {
  Internships: [
    { title: 'Software Dev Intern', org: 'TCS iON', duration: '3 months', stipend: '₹15,000/mo', detail: 'Build real web apps using Java and React. Open to final-year CSE students.', deadline: 'Jan 30', emoji: '💼', color: '#1565C0', bg: '#E3F2FD', tag: 'PAID' },
    { title: 'AI/ML Research Intern', org: 'DRDO', duration: '6 months', stipend: '₹12,000/mo', detail: 'Work on government AI projects. Excellent stipend + Certificate.', deadline: 'Feb 15', emoji: '🔬', color: '#2E7D32', bg: '#E8F5E9', tag: 'GOVT' },
    { title: 'Data Engineering Intern', org: 'Infosys', duration: '2 months', stipend: '₹20,000/mo', detail: 'Data pipeline work using Python and Spark. Pre-placement offer possible.', deadline: 'Feb 28', emoji: '📊', color: '#6A1B9A', bg: '#F3E5F5', tag: 'PPO' },
    { title: 'Frontend Developer', org: 'Startup – Hyderabad', duration: '3 months', stipend: '₹10,000/mo', detail: 'React development for ed-tech startup. Flexible hours + remote option.', deadline: 'Open', emoji: '🎨', color: '#E65100', bg: '#FFF3E0', tag: 'REMOTE' },
  ],
  Certifications: [
    { title: 'Python for Everybody', org: 'Coursera (U of Michigan)', detail: 'Free audit available. Covers Python basics to data analysis. Most popular course globally.', emoji: '🐍', color: '#1565C0', bg: '#E3F2FD', tag: 'FREE AUDIT' },
    { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', detail: 'Industry-recognized certification. Opens doors at all top IT companies.', emoji: '☁️', color: '#E65100', bg: '#FFF3E0', tag: 'PAID ₹4K' },
    { title: 'Programming in C (NPTEL)', org: 'IIT Madras – NPTEL', detail: '100% free. Earn NPTEL certificate with government recognition. Elite IIT faculty.', emoji: '📘', color: '#2E7D32', bg: '#E8F5E9', tag: 'FREE' },
    { title: 'Google Data Analytics', org: 'Google – Coursera', detail: 'Designed for beginners. 6-month program. Google certificate valued by employers.', emoji: '🔍', color: '#6A1B9A', bg: '#F3E5F5', tag: 'SCHOLARSHIP' },
  ],
  'Govt Schemes': [
    { title: 'PM KAUSHAL VIKAS YOJANA (PMKVY)', org: 'Ministry of Skill Development', detail: 'Free vocational training + ₹8,000 reward on completion. IT tracks available.', emoji: '🏛️', color: '#1565C0', bg: '#E3F2FD', tag: 'FREE + STIPEND' },
    { title: 'Skill India Digital Hub', org: 'Govt of India', detail: 'Free digital skills courses — AI, Cybersecurity, Cloud. Certified by MeitY.', emoji: '🇮🇳', color: '#2E7D32', bg: '#E8F5E9', tag: 'FREE' },
    { title: 'NIELIT O/A Level Course', org: 'NIELIT (Govt Body)', detail: 'Government-recognized IT qualification. Accepted for PSU jobs and UPSC.', emoji: '💻', color: '#E65100', bg: '#FFF3E0', tag: 'GOVT CERT' },
    { title: 'AP YSR Vasathi Deevena', org: 'Andhra Pradesh Govt', detail: 'Hostel + mess fees for engineering students. Income limit ₹2.5 LPA.', emoji: '🏠', color: '#6A1B9A', bg: '#F3E5F5', tag: 'AP ONLY' },
  ],
  Events: [
    { title: 'Smart India Hackathon 2026', org: 'Ministry of Education', duration: '36 hours', detail: 'National-level hackathon. Win ₹1 lakh + direct job offers. Register as team.', deadline: 'Mar 1', emoji: '🏆', color: '#1565C0', bg: '#E3F2FD', tag: 'PRIZE ₹1L' },
    { title: 'TCS CodeVita Season 13', org: 'TCS', duration: '3 rounds', detail: 'Coding competition with PPO at TCS for finalists. 10L+ participants.', deadline: 'Feb 20', emoji: '⌨️', color: '#2E7D32', bg: '#E8F5E9', tag: 'PPO OFFER' },
    { title: 'NASSCOM Tech Career Fair', org: 'NASSCOM', duration: '2 days', detail: 'Hyderabad. 150+ companies. Walk-in interviews + Networking. Free entry.', deadline: 'Mar 15', emoji: '🤝', color: '#E65100', bg: '#FFF3E0', tag: 'FREE ENTRY' },
    { title: 'GitHub Campus Expert Program', org: 'GitHub', duration: 'Ongoing', detail: 'Become a GitHub Campus Expert — lead tech community at your college.', deadline: 'Open', emoji: '🐙', color: '#6A1B9A', bg: '#F3E5F5', tag: 'LEADERSHIP' },
  ],
};

const tabs: Tab[] = ['Internships', 'Certifications', 'Govt Schemes', 'Events'];
const tabEmoji: Record<Tab, string> = { Internships: '💼', Certifications: '📜', 'Govt Schemes': '🏛️', Events: '🎯' };

export function OpportunityHubScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('Internships');
  const items = data[activeTab];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #E65100 0%, #F57C00 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 24 }}>🌟</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Opportunity Hub</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Curated for Software Engineering</p>
          </div>
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 5, overflowX: 'auto' }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              padding: '7px 12px', borderRadius: 18, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              background: activeTab === t ? 'white' : 'rgba(255,255,255,0.2)',
              color: activeTab === t ? '#E65100' : 'rgba(255,255,255,0.9)',
              fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4,
            }}>
              <span>{tabEmoji[t]}</span> {t}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 18px' }}>
        <div style={{ fontSize: 12, color: '#78909C', fontWeight: 600, marginBottom: 10 }}>
          {items.length} opportunities • Matched to your profile
        </div>
        {items.map(({ title, org, duration, stipend, detail, deadline, emoji, color, bg, tag }, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 18, marginBottom: 12, overflow: 'hidden', boxShadow: '0 3px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ background: bg, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 46, height: 46, borderRadius: 14, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', flexShrink: 0 }}>{emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>{title}</div>
                <div style={{ fontSize: 12, color: '#78909C', marginTop: 1 }}>{org}</div>
              </div>
              <span style={{ background: color, color: 'white', fontSize: 9, fontWeight: 800, padding: '3px 8px', borderRadius: 10 }}>{tag}</span>
            </div>
            <div style={{ padding: '10px 14px 12px' }}>
              <div style={{ fontSize: 13, color: '#546E7A', lineHeight: 1.5, marginBottom: 10 }}>{detail}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {duration && <span style={{ fontSize: 11, background: '#F5F7FF', color: '#546E7A', padding: '3px 8px', borderRadius: 8, fontWeight: 600 }}>⏱ {duration}</span>}
                  {stipend && <span style={{ fontSize: 11, background: '#E8F5E9', color: '#2E7D32', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>💰 {stipend}</span>}
                  {deadline && deadline !== 'Open' && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, background: '#FFF3E0', color: '#E65100', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>
                      <Clock size={10} /> Deadline: {deadline}
                    </span>
                  )}
                  {deadline === 'Open' && <span style={{ fontSize: 11, background: '#E8F5E9', color: '#2E7D32', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>🟢 Open</span>}
                </div>
                <button style={{
                  background: color, border: 'none', borderRadius: 18, padding: '8px 14px',
                  color: 'white', fontSize: 12, fontWeight: 800, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  Apply <ExternalLink size={11} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
