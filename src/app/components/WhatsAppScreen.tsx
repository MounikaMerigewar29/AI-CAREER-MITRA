import { useState } from 'react';
import { Bell, Check, Smartphone } from 'lucide-react';

const notifications = [
  { id: 'scholarship', icon: '🏆', title: 'Scholarship Alerts', desc: 'New scholarships matching your profile', urgency: 'High', color: '#2E7D32' },
  { id: 'internship', icon: '💼', title: 'Internship Openings', desc: 'Internships at top companies in your field', urgency: 'High', color: '#1565C0' },
  { id: 'deadline', icon: '⏰', title: 'Application Deadlines', desc: 'Reminders before important deadlines', urgency: 'Critical', color: '#EF5350' },
  { id: 'exam', icon: '📝', title: 'Exam Notifications', desc: 'JEE, EAMCET, GATE exam alerts', urgency: 'High', color: '#E65100' },
  { id: 'hackathon', icon: '⚡', title: 'Hackathons & Events', desc: 'Competitions and career events nearby', urgency: 'Medium', color: '#6A1B9A' },
  { id: 'course', icon: '📚', title: 'Free Course Alerts', desc: 'New free courses from NPTEL, Coursera', urgency: 'Medium', color: '#0097A7' },
  { id: 'jobfair', icon: '🤝', title: 'Job Fair Updates', desc: 'Walk-in drives and campus placements', urgency: 'High', color: '#2E7D32' },
];

const previewMessages = [
  { text: '🎓 *AI Career Mitra Alert*\n\nNew Scholarship Found!\nPost Matric SC/ST Scholarship\nAmount: ₹5,500/year\n⏰ Deadline: Oct 31, 2026\n\nApply Now → bit.ly/apply', time: '10:23 AM', type: 'scholarship' },
  { text: '💼 *Internship Alert!*\n\nTCS iON – Software Intern\nStipend: ₹15,000/month\nDuration: 3 months\nDeadline: Jan 30, 2026\n\nDetails → bit.ly/intern', time: '2:15 PM', type: 'internship' },
];

export function WhatsAppScreen() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({ scholarship: true, internship: true, deadline: true, exam: false, hackathon: true, course: false, jobfair: true });
  const [phone, setPhone] = useState('+91 ');
  const [verified, setVerified] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const enabledCount = Object.values(enabled).filter(Boolean).length;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 28 }}>📱</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>WhatsApp Alerts</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Get career updates on WhatsApp</p>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Bell size={15} color="#69F0AE" />
          <span style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>{enabledCount} of {notifications.length} alert types enabled</span>
          <div style={{ marginLeft: 'auto', background: '#69F0AE', borderRadius: 10, padding: '2px 8px' }}>
            <span style={{ fontSize: 10, fontWeight: 900, color: '#1B5E20' }}>{enabledCount} ACTIVE</span>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* Phone input */}
        <div style={{ background: 'white', borderRadius: 16, padding: '14px 16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#546E7A', marginBottom: 8, letterSpacing: 0.5 }}>YOUR WHATSAPP NUMBER</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input value={phone} onChange={e => setPhone(e.target.value)} style={{
              flex: 1, height: 46, borderRadius: 12, border: '2px solid #E8EAED',
              padding: '0 14px', fontSize: 15, color: '#263238', background: '#F5F7FF',
              outline: 'none', fontFamily: 'inherit',
            }} />
            <button onClick={() => setVerified(true)} style={{
              height: 46, padding: '0 16px', background: verified ? '#E8F5E9' : '#2E7D32',
              border: 'none', borderRadius: 12, color: verified ? '#2E7D32' : 'white',
              fontSize: 13, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5,
            }}>
              {verified ? <><Check size={14} /> Verified</> : 'Verify'}
            </button>
          </div>
          {verified && <div style={{ marginTop: 8, fontSize: 12, color: '#2E7D32', fontWeight: 600 }}>✅ WhatsApp connected successfully!</div>}
        </div>

        {/* Notification toggles */}
        <div style={{ fontSize: 12, fontWeight: 800, color: '#546E7A', marginBottom: 10, letterSpacing: 0.5 }}>CHOOSE ALERT TYPES</div>
        {notifications.map(({ id, icon, title, desc, urgency, color }) => (
          <div key={id} style={{ background: 'white', borderRadius: 14, padding: '12px 14px', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1A237E' }}>{title}</span>
                <span style={{ fontSize: 9, fontWeight: 800, color, background: `${color}15`, padding: '1px 6px', borderRadius: 8 }}>{urgency}</span>
              </div>
              <div style={{ fontSize: 11, color: '#78909C' }}>{desc}</div>
            </div>
            {/* Toggle */}
            <div
              onClick={() => setEnabled(e => ({ ...e, [id]: !e[id] }))}
              style={{
                width: 44, height: 26, borderRadius: 13, cursor: 'pointer',
                background: enabled[id] ? '#2E7D32' : '#E0E0E0',
                position: 'relative', transition: 'background 0.2s', flexShrink: 0,
              }}>
              <div style={{
                position: 'absolute', top: 3, left: enabled[id] ? 21 : 3,
                width: 20, height: 20, borderRadius: '50%', background: 'white',
                transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
              }} />
            </div>
          </div>
        ))}

        {/* Preview */}
        <div style={{ marginTop: 8 }}>
          <button onClick={() => setShowPreview(!showPreview)} style={{
            width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'white', border: 'none', borderRadius: 14, padding: '12px 16px', cursor: 'pointer',
            boxShadow: '0 1px 6px rgba(0,0,0,0.04)', marginBottom: showPreview ? 0 : 0,
          }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Smartphone size={16} color="#2E7D32" /> Preview WhatsApp Messages
            </span>
            <span style={{ fontSize: 12, color: '#78909C' }}>{showPreview ? '▲' : '▼'}</span>
          </button>
          {showPreview && (
            <div style={{ background: '#E5DDD5', borderRadius: '0 0 14px 14px', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {previewMessages.map(({ text, time }, i) => (
                <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '88%' }}>
                  <div style={{
                    background: 'white', borderRadius: '12px 12px 12px 2px', padding: '10px 12px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                  }}>
                    <pre style={{ margin: 0, fontSize: 12, lineHeight: 1.5, color: '#263238', fontFamily: 'inherit', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{text}</pre>
                  </div>
                  <div style={{ fontSize: 10, color: '#78909C', marginTop: 3, marginLeft: 4 }}>{time} ✓✓</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button style={{
          width: '100%', height: 54, background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
          border: 'none', borderRadius: 27, color: 'white', fontSize: 16, fontWeight: 800, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16,
          boxShadow: '0 5px 18px rgba(46,125,50,0.35)',
        }}>
          📱 Enable WhatsApp Alerts
        </button>
      </div>
    </div>
  );
}
