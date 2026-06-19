import { Download, Share2, FileText, CheckCircle } from 'lucide-react';

const sections = [
  { icon: '🎯', title: 'Career Recommendations', preview: 'Software Engineer (96%), Data Analyst (89%), UI/UX Designer (82%)', done: true },
  { icon: '🗺️', title: 'Personalized Roadmap', preview: 'Class 12 → B.Tech CSE → Skill Dev → Internship → Placement', done: true },
  { icon: '🏆', title: 'Matched Scholarships', preview: '8 scholarships | ₹48,500 potential annual support', done: true },
  { icon: '🏛️', title: 'College Finder', preview: 'NIT Warangal (98%), JNTU Hyd (91%), IIIT Hyd (96%)', done: true },
  { icon: '📊', title: 'Skill Gap Analysis', preview: '8 skill areas analyzed | 3 priority learning areas identified', done: true },
  { icon: '✅', title: 'Next-Step Action Plan', preview: '12 action items | 3 immediate, 5 this month, 4 quarterly', done: true },
];

export function CareerReportScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #2E7D32 0%, #43A047 100%)', padding: '14px 20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={22} color="white" />
          </div>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Career Report</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>AI-Generated • Personalized for Ravi Kumar</p>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <CheckCircle size={16} color="#69F0AE" />
          <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>6/6 Sections Complete • Ready to Download</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px 20px' }}>
        {/* Report preview card */}
        <div style={{
          background: 'white', borderRadius: 20, overflow: 'hidden',
          boxShadow: '0 6px 24px rgba(0,0,0,0.1)', marginBottom: 16,
        }}>
          {/* PDF header preview */}
          <div style={{ background: 'linear-gradient(135deg, #1565C0, #0097A7)', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 22 }}>🎓</span>
              <div>
                <div style={{ color: 'white', fontSize: 14, fontWeight: 900 }}>AI Career Mitra</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10 }}>Personalized Career Intelligence Report</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '4px 10px' }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 9 }}>STUDENT</div>
                <div style={{ color: 'white', fontSize: 12, fontWeight: 800 }}>Ravi Kumar</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '4px 10px' }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 9 }}>TOP CAREER</div>
                <div style={{ color: 'white', fontSize: 12, fontWeight: 800 }}>Software Engineer</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '4px 10px' }}>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 9 }}>DATE</div>
                <div style={{ color: 'white', fontSize: 12, fontWeight: 800 }}>Jun 2026</div>
              </div>
            </div>
          </div>

          {/* Sections preview */}
          <div style={{ padding: '12px 14px' }}>
            {sections.map(({ icon, title, preview, done }, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, alignItems: 'flex-start', paddingBottom: 12,
                borderBottom: i < sections.length - 1 ? '1px solid #F5F5F5' : 'none', marginBottom: 12,
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#F5F7FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#1A237E' }}>{title}</div>
                    {done && <CheckCircle size={14} color="#2E7D32" />}
                  </div>
                  <div style={{ fontSize: 11.5, color: '#78909C', lineHeight: 1.4 }}>{preview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page count */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
          {[['📄', '12', 'Pages'], ['📊', '8', 'Charts'], ['🎯', '24', 'Actions'], ['🏆', '8', 'Scholarships']].map(([icon, count, label]) => (
            <div key={label} style={{ flex: 1, background: 'white', borderRadius: 14, padding: '10px 6px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 18 }}>{icon}</div>
              <div style={{ fontSize: 16, fontWeight: 900, color: '#1A237E' }}>{count}</div>
              <div style={{ fontSize: 10, color: '#78909C', fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <button style={{
          width: '100%', height: 56, background: 'linear-gradient(135deg, #2E7D32, #43A047)',
          border: 'none', borderRadius: 28, color: 'white', fontSize: 16, fontWeight: 800, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 10,
          boxShadow: '0 6px 20px rgba(46,125,50,0.35)',
        }}>
          <Download size={20} /> Download PDF Report
        </button>

        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{
            flex: 1, height: 48, background: '#E8F5E9', border: '2px solid #A5D6A7',
            borderRadius: 24, color: '#2E7D32', fontSize: 13, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <Share2 size={15} /> WhatsApp
          </button>
          <button style={{
            flex: 1, height: 48, background: '#E3F2FD', border: '2px solid #90CAF9',
            borderRadius: 24, color: '#1565C0', fontSize: 13, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <Share2 size={15} /> Email
          </button>
        </div>

        <div style={{ marginTop: 14, background: '#FFF3E0', borderRadius: 12, padding: '10px 14px', display: 'flex', gap: 8 }}>
          <span style={{ fontSize: 16 }}>💡</span>
          <div style={{ fontSize: 12, color: '#E65100', lineHeight: 1.5 }}>
            Share this report with your school counselor or parents for guidance. Updated monthly as you progress.
          </div>
        </div>
      </div>
    </div>
  );
}
