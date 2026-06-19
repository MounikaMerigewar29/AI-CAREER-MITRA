import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TrendingUp } from 'lucide-react';

const colleges = [
  { name: 'Govt Engineering College', fees: 50000 },
  { name: 'JNTU / State University', fees: 85000 },
  { name: 'NIT Warangal', fees: 130000 },
  { name: 'IIIT Hyderabad', fees: 250000 },
  { name: 'Private College (Tier-1)', fees: 200000 },
];

function roiData(fees: number, scholarship: number) {
  const loan = Math.max(0, (fees - scholarship) * 4);
  const emi = Math.round(loan / 24);
  return [
    { year: 'Y1', expense: fees, income: 0 },
    { year: 'Y2', expense: fees, income: 0 },
    { year: 'Y3', expense: fees, income: 0 },
    { year: 'Y4', expense: fees, income: 0 },
    { year: 'Y5 (Job)', expense: emi * 12, income: 800000 },
    { year: 'Y6', expense: emi * 12, income: 900000 },
    { year: 'Y7', expense: 0, income: 1000000 },
    { year: 'Y8', expense: 0, income: 1200000 },
  ];
}

export function FinancialPlannerScreen() {
  const [collegeIdx, setCollegeIdx] = useState(2);
  const [scholarshipPct, setScholarshipPct] = useState(40);

  const college = colleges[collegeIdx];
  const annualFees = college.fees;
  const totalFees = annualFees * 4;
  const scholarship = Math.round(totalFees * scholarshipPct / 100);
  const loan = Math.max(0, totalFees - scholarship);
  const emi = Math.round(loan / 24);
  const startSalary = 800000;
  const roi = Math.round(((startSalary * 10 - totalFees) / totalFees) * 100);
  const breakEven = Math.round(loan / (startSalary - annualFees));
  const chart = roiData(annualFees, annualFees * scholarshipPct / 100);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: 26 }}>💰</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Education Financial Planner</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Plan fees, loans & ROI</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* College selector */}
        <div style={{ background: 'white', borderRadius: 16, padding: '14px', marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#546E7A', marginBottom: 8, letterSpacing: 0.5 }}>SELECT COLLEGE TYPE</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {colleges.map(({ name, fees }, i) => (
              <button key={i} onClick={() => setCollegeIdx(i)} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 14px', borderRadius: 12, border: `2px solid ${collegeIdx === i ? '#2E7D32' : '#F0F0F0'}`,
                background: collegeIdx === i ? '#E8F5E9' : 'transparent', cursor: 'pointer',
              }}>
                <span style={{ fontSize: 13, fontWeight: collegeIdx === i ? 700 : 500, color: collegeIdx === i ? '#2E7D32' : '#546E7A' }}>{name}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: collegeIdx === i ? '#2E7D32' : '#90A4AE' }}>₹{(fees / 1000).toFixed(0)}K/yr</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scholarship slider */}
        <div style={{ background: 'white', borderRadius: 16, padding: '14px', marginBottom: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#546E7A', letterSpacing: 0.5 }}>SCHOLARSHIP COVERAGE</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: '#2E7D32' }}>{scholarshipPct}%</div>
          </div>
          <input type="range" min={0} max={100} step={5} value={scholarshipPct}
            onChange={e => setScholarshipPct(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#2E7D32' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 10, color: '#90A4AE' }}>0% (No scholarship)</span>
            <span style={{ fontSize: 10, color: '#90A4AE' }}>100% (Full scholarship)</span>
          </div>
        </div>

        {/* Financial summary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          {[
            { label: 'Total College Fees', value: `₹${(totalFees / 100000).toFixed(1)}L`, sub: `₹${(annualFees / 1000).toFixed(0)}K × 4 years`, color: '#1565C0', bg: '#E3F2FD', icon: '🎓' },
            { label: 'Scholarship Amount', value: `₹${(scholarship / 100000).toFixed(1)}L`, sub: `${scholarshipPct}% coverage`, color: '#2E7D32', bg: '#E8F5E9', icon: '🏆' },
            { label: 'Loan Required', value: loan > 0 ? `₹${(loan / 100000).toFixed(1)}L` : 'None!', sub: loan > 0 ? `EMI: ₹${emi.toLocaleString()}/mo` : 'Fully covered 🎉', color: loan > 0 ? '#E65100' : '#2E7D32', bg: loan > 0 ? '#FFF3E0' : '#E8F5E9', icon: loan > 0 ? '🏦' : '✅' },
            { label: '10-Year ROI', value: `${roi}%`, sub: `Break-even: Year ${breakEven + 4}`, color: '#6A1B9A', bg: '#F3E5F5', icon: '📈' },
          ].map(({ label, value, sub, color, bg, icon }) => (
            <div key={label} style={{ background: 'white', borderRadius: 14, padding: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700, marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 17, fontWeight: 900, color }}>{value}</div>
              <div style={{ fontSize: 10, color: '#78909C', marginTop: 2 }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* ROI Chart */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E' }}>Expense vs Income (₹ L)</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <TrendingUp size={14} color="#2E7D32" />
              <span style={{ fontSize: 11, color: '#2E7D32', fontWeight: 700 }}>ROI {roi}%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={chart} margin={{ top: 5, right: 5, left: -25, bottom: 0 }} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
              <XAxis dataKey="year" tick={{ fontSize: 9, fill: '#90A4AE' }} />
              <YAxis tick={{ fontSize: 9, fill: '#90A4AE' }} tickFormatter={v => v >= 100000 ? `${v / 100000}L` : `${v / 1000}K`} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', fontSize: 11 }} formatter={(v: number) => [`₹${(v / 100000).toFixed(1)}L`]} />
              <ReferenceLine y={0} stroke="#263238" strokeWidth={1} />
              <Bar dataKey="expense" name="Expense" fill="#EF5350" radius={[3, 3, 0, 0]} />
              <Bar dataKey="income" name="Income" fill="#2E7D32" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 6 }}>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}><div style={{ width: 10, height: 10, borderRadius: 2, background: '#EF5350' }} /><span style={{ fontSize: 10, color: '#78909C' }}>Expense</span></div>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}><div style={{ width: 10, height: 10, borderRadius: 2, background: '#2E7D32' }} /><span style={{ fontSize: 10, color: '#78909C' }}>Income</span></div>
          </div>
        </div>

        <div style={{ background: '#E8F5E9', borderRadius: 14, padding: '12px 14px', display: 'flex', gap: 8 }}>
          <span style={{ fontSize: 18 }}>💡</span>
          <div style={{ fontSize: 12, color: '#2E7D32', lineHeight: 1.5 }}>
            <strong>Financial Tip:</strong> Apply for Post Matric + NSP scholarships together. You could cover up to {Math.min(scholarshipPct + 20, 100)}% of fees and graduate debt-free!
          </div>
        </div>
      </div>
    </div>
  );
}
