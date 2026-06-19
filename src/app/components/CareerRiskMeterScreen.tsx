import { useState } from 'react';

const careers = ['Software Engineer', 'Data Analyst', 'UI/UX Designer', 'Teacher', 'Civil Services'];

const careerData: Record<string, { demand: number; risk: number; growth: number; security: number; insight: string }> = {
  'Software Engineer': { demand: 94, risk: 18, growth: 89, security: 85, insight: 'Extremely future-proof. AI creates MORE jobs for software engineers who can work with AI tools.' },
  'Data Analyst':      { demand: 91, risk: 24, growth: 85, security: 82, insight: 'Data skills are critical. Analysts who know AI/ML stay highly relevant through 2030+.' },
  'UI/UX Designer':    { demand: 82, risk: 20, growth: 78, security: 78, insight: 'Human creativity in design cannot be automated. Strong job security with rising demand.' },
  'Teacher':           { demand: 72, risk: 12, growth: 55, security: 92, insight: 'AI assists but cannot replace human mentors. Government teaching offers strong protection.' },
  'Civil Services':    { demand: 68, risk: 8, growth: 50, security: 99, insight: 'Maximum job security. UPSC posts are immune to automation — perfect for stability seekers.' },
};

function Gauge({ value, label, color, lowIsBetter = false }: { value: number; label: string; color: string; lowIsBetter?: boolean }) {
  // Semicircle path length ≈ π × 42 ≈ 132
  const pathLen = 132;
  const offset = pathLen * (1 - value / 100);
  const displayColor = lowIsBetter
    ? value <= 30 ? '#2E7D32' : value <= 60 ? '#F57F17' : '#EF5350'
    : color;
  const grade = lowIsBetter
    ? value <= 25 ? 'Low ✓' : value <= 50 ? 'Medium' : 'High ⚠'
    : value >= 80 ? 'Excellent' : value >= 60 ? 'Good' : 'Moderate';

  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <svg width="100" height="60" viewBox="0 0 100 60" style={{ overflow: 'visible' }}>
        {/* Track */}
        <path d="M 8 55 A 42 42 0 0 1 92 55" fill="none" stroke="#F0F0F0" strokeWidth="9" strokeLinecap="round" />
        {/* Value */}
        <path d="M 8 55 A 42 42 0 0 1 92 55" fill="none" stroke={displayColor} strokeWidth="9" strokeLinecap="round"
          strokeDasharray={`${pathLen}`} strokeDashoffset={`${offset}`} />
        {/* Value text */}
        <text x="50" y="45" textAnchor="middle" fontSize="18" fontWeight="900" fill={displayColor}>{value}</text>
        <text x="50" y="56" textAnchor="middle" fontSize="8" fill="#90A4AE">/ 100</text>
      </svg>
      <div style={{ fontSize: 11, fontWeight: 800, color: displayColor, marginTop: -2 }}>{grade}</div>
      <div style={{ fontSize: 10, color: '#90A4AE', fontWeight: 600, marginTop: 2 }}>{label}</div>
    </div>
  );
}

export function CareerRiskMeterScreen() {
  const [selected, setSelected] = useState('Software Engineer');
  const data = careerData[selected];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1A237E 0%, #283593 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 26 }}>⚡</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Career Risk & Demand Meter</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>AI-powered market analysis</p>
          </div>
        </div>
        {/* Career selector */}
        <div style={{ display: 'flex', gap: 5, overflowX: 'auto', paddingBottom: 2 }}>
          {careers.map(c => (
            <button key={c} onClick={() => setSelected(c)} style={{
              padding: '6px 12px', borderRadius: 18, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              background: selected === c ? 'white' : 'rgba(255,255,255,0.15)',
              color: selected === c ? '#1A237E' : 'rgba(255,255,255,0.85)',
              fontSize: 11, fontWeight: 800, flexShrink: 0,
            }}>{c}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px 20px' }}>
        {/* Selected career banner */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px 16px', marginBottom: 14, boxShadow: '0 3px 12px rgba(0,0,0,0.06)', textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: '#78909C', fontWeight: 600, marginBottom: 4 }}>ANALYZING</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#1A237E' }}>{selected}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 8 }}>
            <span style={{ fontSize: 11, background: '#E8F5E9', color: '#2E7D32', padding: '4px 12px', borderRadius: 12, fontWeight: 800 }}>
              2024 Data
            </span>
            <span style={{ fontSize: 11, background: '#E3F2FD', color: '#1565C0', padding: '4px 12px', borderRadius: 12, fontWeight: 800 }}>
              India Job Market
            </span>
          </div>
        </div>

        {/* Gauges — 2×2 grid */}
        <div style={{ background: 'white', borderRadius: 20, padding: '16px', marginBottom: 14, boxShadow: '0 3px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>Market Indicators</div>
            <span style={{ fontSize: 10, color: '#78909C', background: '#F5F5F5', padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>Score /100</span>
          </div>
          <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
            <Gauge value={data.demand} label="Future Demand" color="#1565C0" />
            <Gauge value={data.risk} label="Automation Risk" color="#EF5350" lowIsBetter />
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <Gauge value={data.growth} label="Growth Potential" color="#2E7D32" />
            <Gauge value={data.security} label="Job Security" color="#E65100" />
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
          {[
            { label: 'Demand', value: data.demand, color: '#1565C0', icon: '📈' },
            { label: 'Risk', value: data.risk, color: data.risk <= 30 ? '#2E7D32' : '#EF5350', icon: '⚠️', note: 'Lower = Better' },
            { label: 'Growth', value: data.growth, color: '#2E7D32', icon: '🚀' },
            { label: 'Security', value: data.security, color: '#E65100', icon: '🔒' },
          ].map(({ label, value, color, icon, note }) => (
            <div key={label} style={{ flex: 1, minWidth: 80, background: `${color}10`, borderRadius: 12, padding: '8px 10px', border: `1px solid ${color}25`, textAlign: 'center' }}>
              <div style={{ fontSize: 14 }}>{icon}</div>
              <div style={{ fontSize: 15, fontWeight: 900, color }}>{value}</div>
              <div style={{ fontSize: 9, color, fontWeight: 700 }}>{label}</div>
              {note && <div style={{ fontSize: 8, color: '#90A4AE', marginTop: 1 }}>{note}</div>}
            </div>
          ))}
        </div>

        {/* AI insight */}
        <div style={{ background: 'linear-gradient(135deg, #1A237E, #283593)', borderRadius: 16, padding: '14px 16px', marginBottom: 14 }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 700, marginBottom: 6 }}>🤖 AI MARKET INSIGHT</div>
          <p style={{ margin: 0, color: 'white', fontSize: 13, lineHeight: 1.6 }}>{data.insight}</p>
        </div>

        {/* Overall verdict */}
        <div style={{
          background: data.demand >= 85 ? '#E8F5E9' : '#FFF3E0', borderRadius: 16,
          padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: 28 }}>{data.demand >= 85 ? '✅' : data.demand >= 70 ? '⚡' : '⚠️'}</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: data.demand >= 85 ? '#2E7D32' : '#E65100' }}>
              {data.demand >= 85 ? 'Highly Recommended Career' : data.demand >= 70 ? 'Good Career Choice' : 'Consider Alternatives'}
            </div>
            <div style={{ fontSize: 12, color: '#546E7A', marginTop: 2 }}>
              Overall score: {Math.round((data.demand + (100 - data.risk) + data.growth + data.security) / 4)}/100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
