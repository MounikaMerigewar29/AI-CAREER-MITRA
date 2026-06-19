import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { useState } from 'react';

const demandData = [
  { year: '2022', jobs: 450, salary: 8 },
  { year: '2023', jobs: 580, salary: 10 },
  { year: '2024', jobs: 720, salary: 12 },
  { year: '2025', jobs: 895, salary: 14 },
  { year: '2026', jobs: 1050, salary: 16 },
  { year: '2027', jobs: 1260, salary: 18 },
  { year: '2028', jobs: 1480, salary: 21 },
  { year: '2030', jobs: 2100, salary: 28 },
];

const careerComparison = [
  { career: 'Soft. Eng', demand: 94, risk: 18, growth: 88 },
  { career: 'Data Analyst', demand: 91, risk: 24, growth: 85 },
  { career: 'UI/UX', demand: 82, risk: 20, growth: 78 },
  { career: 'Teacher', demand: 70, risk: 10, growth: 55 },
];

const insights = [
  { icon: '🚀', title: 'AI Surge', desc: '2.1M IT jobs by 2030 driven by AI & cloud', color: '#1565C0', bg: '#E3F2FD' },
  { icon: '🌍', title: 'Global Demand', desc: 'Indian engineers hired by Google, Meta, Amazon', color: '#2E7D32', bg: '#E8F5E9' },
  { icon: '🏙️', title: 'Tier-2 Growth', desc: 'Hyderabad, Pune, Coimbatore — fastest growing hubs', color: '#E65100', bg: '#FFF3E0' },
  { icon: '💰', title: 'Salary Boom', desc: 'Average package rising 18% YoY for CSE graduates', color: '#6A1B9A', bg: '#F3E5F5' },
];

export function DemandForecastScreen() {
  const [tab, setTab] = useState<'jobs' | 'salary' | 'compare'>('jobs');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 24 }}>📈</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Career Demand Forecast</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>2024–2030 Market Analysis</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[['jobs', '📊 Job Market'], ['salary', '💰 Salaries'], ['compare', '⚡ Compare']].map(([key, label]) => (
            <button key={key} onClick={() => setTab(key as 'jobs' | 'salary' | 'compare')} style={{
              flex: 1, padding: '7px 0', borderRadius: 16, border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 800,
              background: tab === key ? 'white' : 'rgba(255,255,255,0.15)',
              color: tab === key ? '#1565C0' : 'rgba(255,255,255,0.85)',
            }}>{label}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* Big metric */}
        {tab !== 'compare' && (
          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            {tab === 'jobs' ? (
              <>
                <div style={{ flex: 1, background: '#E3F2FD', borderRadius: 14, padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#1565C0' }}>21L+</div>
                  <div style={{ fontSize: 11, color: '#78909C', fontWeight: 600 }}>Jobs by 2030</div>
                </div>
                <div style={{ flex: 1, background: '#E8F5E9', borderRadius: 14, padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#2E7D32' }}>+366%</div>
                  <div style={{ fontSize: 11, color: '#78909C', fontWeight: 600 }}>8-Year Growth</div>
                </div>
                <div style={{ flex: 1, background: '#FFF3E0', borderRadius: 14, padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#E65100' }}>2031</div>
                  <div style={{ fontSize: 11, color: '#78909C', fontWeight: 600 }}>Peak Year</div>
                </div>
              </>
            ) : (
              <>
                <div style={{ flex: 1, background: '#E8F5E9', borderRadius: 14, padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#2E7D32' }}>₹28 LPA</div>
                  <div style={{ fontSize: 11, color: '#78909C', fontWeight: 600 }}>Avg by 2030</div>
                </div>
                <div style={{ flex: 1, background: '#E3F2FD', borderRadius: 14, padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#1565C0' }}>+250%</div>
                  <div style={{ fontSize: 11, color: '#78909C', fontWeight: 600 }}>Salary Growth</div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Chart */}
        {tab === 'jobs' && (
          <div style={{ background: 'white', borderRadius: 18, padding: '16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A237E', marginBottom: 12 }}>
              Software Engineering Jobs (in thousands)
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={demandData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="jobGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1565C0" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#1565C0" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#90A4AE' }} />
                <YAxis tick={{ fontSize: 10, fill: '#90A4AE' }} />
                <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontSize: 12 }} formatter={(v: number) => [`${v}K jobs`, '']} />
                <Area type="monotone" dataKey="jobs" stroke="#1565C0" strokeWidth={2.5} fill="url(#jobGrad)" dot={{ fill: '#1565C0', strokeWidth: 0, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {tab === 'salary' && (
          <div style={{ background: 'white', borderRadius: 18, padding: '16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A237E', marginBottom: 12 }}>
              Average Salary Trend (₹ LPA)
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <AreaChart data={demandData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="salGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2E7D32" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2E7D32" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#90A4AE' }} />
                <YAxis tick={{ fontSize: 10, fill: '#90A4AE' }} />
                <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontSize: 12 }} formatter={(v: number) => [`₹${v} LPA`, '']} />
                <Area type="monotone" dataKey="salary" stroke="#2E7D32" strokeWidth={2.5} fill="url(#salGrad)" dot={{ fill: '#2E7D32', strokeWidth: 0, r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}

        {tab === 'compare' && (
          <div style={{ background: 'white', borderRadius: 18, padding: '16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A237E', marginBottom: 12 }}>Demand vs Growth vs Risk</div>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={careerComparison} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
                <XAxis dataKey="career" tick={{ fontSize: 9, fill: '#90A4AE' }} />
                <YAxis tick={{ fontSize: 10, fill: '#90A4AE' }} />
                <Tooltip contentStyle={{ borderRadius: 10, border: 'none', fontSize: 11 }} />
                <Legend wrapperStyle={{ fontSize: 10 }} />
                <Bar dataKey="demand" name="Demand" fill="#1565C0" radius={[3, 3, 0, 0]} />
                <Bar dataKey="growth" name="Growth" fill="#2E7D32" radius={[3, 3, 0, 0]} />
                <Bar dataKey="risk" name="AI Risk" fill="#EF5350" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div style={{ marginTop: 8, fontSize: 11, color: '#78909C', textAlign: 'center' }}>Lower AI Risk = More Job Security</div>
          </div>
        )}

        {/* Insights */}
        <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 10 }}>Market Insights</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {insights.map(({ icon, title, desc, color, bg }) => (
            <div key={title} style={{ background: 'white', borderRadius: 14, padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 12, fontWeight: 800, color, marginBottom: 4 }}>{title}</div>
              <div style={{ fontSize: 11, color: '#78909C', lineHeight: 1.4 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
