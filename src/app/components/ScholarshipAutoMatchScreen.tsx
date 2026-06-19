import { CheckCircle, Clock, FileText } from 'lucide-react';

const profile = [
  { label: 'State', value: 'Andhra Pradesh', icon: '📍' },
  { label: 'Income', value: '< ₹2 Lakh', icon: '💰' },
  { label: 'Category', value: 'BC-B', icon: '🏷️' },
  { label: 'Gender', value: 'Male', icon: '👤' },
  { label: 'Score', value: '78%', icon: '📊' },
];

const matches = [
  {
    name: 'Post Matric Scholarship (AP)',
    org: 'AP Social Welfare Dept.',
    amount: '₹5,500/year',
    deadline: 'Oct 31, 2026',
    daysLeft: 15,
    eligibility: 96,
    probability: 88,
    color: '#1565C0', bg: '#E3F2FD',
    emoji: '🎓',
    documents: ['Income Certificate', 'Caste Certificate', 'Marks Memo', 'Aadhaar Card', 'Bank Passbook'],
    status: 'Apply Now',
  },
  {
    name: 'NSP Central Sector Scholarship',
    org: 'National Scholarship Portal',
    amount: '₹12,000/year',
    deadline: 'Nov 15, 2026',
    daysLeft: 30,
    eligibility: 91,
    probability: 82,
    color: '#2E7D32', bg: '#E8F5E9',
    emoji: '🏆',
    documents: ['Class 10 & 12 Marksheets', 'Income Certificate', 'Aadhaar', 'Bank Account', 'Bonafide Certificate'],
    status: 'Apply Now',
  },
  {
    name: 'Telangana BC EBC Scholarship',
    org: 'Telangana BC Welfare',
    amount: '₹8,000/year',
    deadline: 'Dec 1, 2026',
    daysLeft: 46,
    eligibility: 85,
    probability: 74,
    color: '#6A1B9A', bg: '#F3E5F5',
    emoji: '💜',
    documents: ['Caste Certificate', 'Income Certificate', 'Marks Memo', 'Aadhaar', 'Residence Proof'],
    status: 'Check Eligibility',
  },
  {
    name: 'PM Vidya Lakshmi Education Loan',
    org: 'Ministry of Finance',
    amount: 'Up to ₹1.5 Lakh',
    deadline: 'Rolling Basis',
    daysLeft: null,
    eligibility: 100,
    probability: 92,
    color: '#E65100', bg: '#FFF3E0',
    emoji: '🌟',
    documents: ['Admission Letter', 'Income Certificate', 'Aadhaar', 'Bank Details', 'Fee Structure'],
    status: 'Apply Now',
  },
];

function EligibilityRing({ value, color }: { value: number; color: string }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: 52, height: 52, flexShrink: 0 }}>
      <svg width="52" height="52" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r={r} fill="none" stroke="#F0F0F0" strokeWidth="5" />
        <circle cx="26" cy="26" r={r} fill="none" stroke={color} strokeWidth="5"
          strokeDasharray={`${circ}`} strokeDashoffset={`${circ * (1 - value / 100)}`}
          strokeLinecap="round" transform="rotate(-90 26 26)" />
        <text x="26" y="30" textAnchor="middle" fontSize="12" fontWeight="900" fill={color}>{value}%</text>
      </svg>
    </div>
  );
}

export function ScholarshipAutoMatchScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1A237E 0%, #1565C0 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 26 }}>🤖</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Scholarship Auto-Match</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>AI found 4 scholarships for you</p>
          </div>
        </div>
        {/* Profile chips */}
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {profile.map(({ label, value, icon }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 12 }}>{icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 10, fontWeight: 600 }}>{label}: </span>
              <span style={{ color: 'white', fontSize: 10, fontWeight: 800 }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scholarship cards */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
          <CheckCircle size={16} color="#2E7D32" />
          <span style={{ fontSize: 12, color: '#2E7D32', fontWeight: 700 }}>Auto-matched based on your profile</span>
        </div>

        {matches.map(({ name, org, amount, deadline, daysLeft, eligibility, probability, color, bg, emoji, documents, status }, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 20, marginBottom: 14, overflow: 'hidden', boxShadow: '0 3px 14px rgba(0,0,0,0.07)' }}>
            {/* Top band */}
            <div style={{ background: bg, padding: '14px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', flexShrink: 0 }}>{emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', lineHeight: 1.2 }}>{name}</div>
                  <div style={{ fontSize: 11, color: '#78909C', marginTop: 2 }}>{org}</div>
                </div>
                <EligibilityRing value={eligibility} color={color} />
              </div>
              {/* Labels */}
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 800, background: color, color: 'white', padding: '2px 10px', borderRadius: 10 }}>ELIGIBLE</span>
                <span style={{ fontSize: 10, fontWeight: 800, background: 'white', color: color, padding: '2px 10px', borderRadius: 10 }}>{eligibility}% Match</span>
              </div>
            </div>

            <div style={{ padding: '12px 16px' }}>
              {/* Amount & deadline */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <div>
                  <div style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700 }}>AMOUNT</div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: '#2E7D32' }}>{amount}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700 }}>DEADLINE</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: daysLeft && daysLeft < 20 ? '#EF5350' : '#546E7A' }}>
                    {deadline}
                  </div>
                  {daysLeft && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Clock size={10} color={daysLeft < 20 ? '#EF5350' : '#78909C'} />
                      <span style={{ fontSize: 10, color: daysLeft < 20 ? '#EF5350' : '#78909C', fontWeight: 700 }}>{daysLeft} days left</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Success probability */}
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700 }}>SUCCESS PROBABILITY</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color }}>{probability}%</span>
                </div>
                <div style={{ height: 6, background: '#F0F0F0', borderRadius: 3 }}>
                  <div style={{ width: `${probability}%`, height: '100%', borderRadius: 3, background: `linear-gradient(90deg, ${color}, ${color}99)` }} />
                </div>
              </div>

              {/* Documents */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
                  <FileText size={12} color="#546E7A" />
                  <span style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700 }}>REQUIRED DOCUMENTS</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {documents.map(d => (
                    <span key={d} style={{ fontSize: 10, background: '#F5F7FF', color: '#546E7A', padding: '3px 8px', borderRadius: 8, fontWeight: 600, border: '1px solid #E8EAED' }}>{d}</span>
                  ))}
                </div>
              </div>

              <button style={{
                width: '100%', height: 44, background: color, border: 'none', borderRadius: 22,
                color: 'white', fontSize: 14, fontWeight: 800, cursor: 'pointer',
                boxShadow: `0 4px 12px ${color}40`,
              }}>
                {status} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
