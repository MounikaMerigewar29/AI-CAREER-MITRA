import { useState } from 'react';
import { Trophy } from 'lucide-react';

type Career = 'Software Engineer' | 'Data Analyst' | 'UI/UX Designer' | 'Teacher' | 'Civil Services';

const careerData: Record<Career, { emoji: string; color: string; salary: number; demand: number; skills: number; wlb: number; education: number; futureScope: number; salaryLabel: string }> = {
  'Software Engineer': { emoji: '💻', color: '#1565C0', salary: 90, demand: 94, skills: 78, wlb: 64, education: 72, futureScope: 91, salaryLabel: '₹6–25 LPA' },
  'Data Analyst':      { emoji: '📊', color: '#0097A7', salary: 78, demand: 91, skills: 68, wlb: 76, education: 65, futureScope: 88, salaryLabel: '₹5–18 LPA' },
  'UI/UX Designer':    { emoji: '🎨', color: '#6A1B9A', salary: 70, demand: 82, skills: 60, wlb: 80, education: 60, futureScope: 79, salaryLabel: '₹4–16 LPA' },
  'Teacher':           { emoji: '👩‍🏫', color: '#2E7D32', salary: 48, demand: 72, skills: 50, wlb: 90, education: 55, futureScope: 56, salaryLabel: '₹3–10 LPA' },
  'Civil Services':    { emoji: '🏛️', color: '#E65100', salary: 62, demand: 68, skills: 55, wlb: 68, education: 70, futureScope: 52, salaryLabel: '₹8–18 LPA' },
};

const metrics: { key: keyof typeof careerData['Software Engineer']; label: string; icon: string; higherIsBetter: boolean }[] = [
  { key: 'salary', label: 'Salary', icon: '💰', higherIsBetter: true },
  { key: 'demand', label: 'Job Demand', icon: '📈', higherIsBetter: true },
  { key: 'skills', label: 'Skills Ease', icon: '⚡', higherIsBetter: true },
  { key: 'wlb', label: 'Work-Life Balance', icon: '⚖️', higherIsBetter: true },
  { key: 'education', label: 'Education Ease', icon: '🎓', higherIsBetter: true },
  { key: 'futureScope', label: 'Future Scope', icon: '🔭', higherIsBetter: true },
];

const careerList = Object.keys(careerData) as Career[];

export function CareerBattleScreen() {
  const [careerA, setCareerA] = useState<Career>('Software Engineer');
  const [careerB, setCareerB] = useState<Career>('Data Analyst');

  const dataA = careerData[careerA];
  const dataB = careerData[careerB];

  const winsA = metrics.filter(m => (dataA[m.key] as number) > (dataB[m.key] as number)).length;
  const winsB = metrics.filter(m => (dataB[m.key] as number) > (dataA[m.key] as number)).length;
  const overallA = Math.round(metrics.reduce((s, m) => s + (dataA[m.key] as number), 0) / metrics.length);
  const overallB = Math.round(metrics.reduce((s, m) => s + (dataB[m.key] as number), 0) / metrics.length);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #B71C1C, #C62828)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <Trophy size={24} color="#FFD54F" />
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>AI Career Battle</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Compare two careers head-to-head</p>
          </div>
        </div>
        {/* Career A vs B selectors */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <select value={careerA} onChange={e => setCareerA(e.target.value as Career)} style={{ flex: 1, height: 40, borderRadius: 12, border: 'none', padding: '0 10px', fontSize: 12, fontWeight: 700, background: dataA.color, color: 'white', cursor: 'pointer', fontFamily: 'inherit' }}>
            {careerList.map(c => <option key={c} value={c} style={{ color: '#263238', background: 'white' }}>{c}</option>)}
          </select>
          <div style={{ background: 'rgba(255,255,255,0.25)', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: 'white', fontSize: 12, fontWeight: 900 }}>VS</span>
          </div>
          <select value={careerB} onChange={e => setCareerB(e.target.value as Career)} style={{ flex: 1, height: 40, borderRadius: 12, border: 'none', padding: '0 10px', fontSize: 12, fontWeight: 700, background: dataB.color, color: 'white', cursor: 'pointer', fontFamily: 'inherit' }}>
            {careerList.filter(c => c !== careerA).map(c => <option key={c} value={c} style={{ color: '#263238', background: 'white' }}>{c}</option>)}
          </select>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* Career header cards */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
          {[{ career: careerA, data: dataA, wins: winsA, overall: overallA }, { career: careerB, data: dataB, wins: winsB, overall: overallB }].map(({ career, data, wins, overall }) => (
            <div key={career} style={{ flex: 1, background: 'white', borderRadius: 16, padding: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.06)', border: `2px solid ${wins > 3 ? data.color : '#F0F0F0'}` }}>
              <div style={{ fontSize: 26, marginBottom: 4 }}>{data.emoji}</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: '#1A237E', lineHeight: 1.2, marginBottom: 4 }}>{career}</div>
              <div style={{ fontSize: 11, color: data.color, fontWeight: 700, marginBottom: 6 }}>{data.salaryLabel}</div>
              <div style={{ background: `${data.color}15`, borderRadius: 10, padding: '4px 0' }}>
                <span style={{ fontSize: 16, fontWeight: 900, color: data.color }}>{overall}</span>
                <span style={{ fontSize: 9, color: data.color, fontWeight: 600 }}>/100</span>
              </div>
              {wins >= winsB && wins >= winsA && wins > 0 && (
                <div style={{ marginTop: 6, fontSize: 10, fontWeight: 800, color: '#2E7D32', background: '#E8F5E9', borderRadius: 8, padding: '2px 0' }}>
                  🏆 Leading
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Metric comparisons */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px 16px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 14 }}>📊 Head-to-Head Comparison</div>
          {metrics.map(({ key, label, icon }) => {
            const vA = dataA[key] as number;
            const vB = dataB[key] as number;
            const aWins = vA > vB;
            const bWins = vB > vA;
            return (
              <div key={String(key)} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ fontSize: 14 }}>{icon}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#546E7A' }}>{label}</span>
                  </div>
                  {aWins && <span style={{ fontSize: 9, fontWeight: 800, background: `${dataA.color}15`, color: dataA.color, padding: '2px 8px', borderRadius: 8 }}>
                    {dataA.emoji} wins
                  </span>}
                  {bWins && <span style={{ fontSize: 9, fontWeight: 800, background: `${dataB.color}15`, color: dataB.color, padding: '2px 8px', borderRadius: 8 }}>
                    {dataB.emoji} wins
                  </span>}
                </div>
                {/* Dual bar */}
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: dataA.color, width: 24, textAlign: 'right' }}>{vA}</span>
                  <div style={{ flex: 1, display: 'flex', gap: 2 }}>
                    {/* A bar (grows right to left) */}
                    <div style={{ flex: 1, height: 10, background: '#F5F5F5', borderRadius: '4px 0 0 4px', overflow: 'hidden', display: 'flex', justifyContent: 'flex-end' }}>
                      <div style={{ width: `${vA}%`, height: '100%', background: `linear-gradient(90deg, ${dataA.color}66, ${dataA.color})`, borderRadius: '4px 0 0 4px' }} />
                    </div>
                    <div style={{ width: 2, background: '#E0E0E0', borderRadius: 1 }} />
                    {/* B bar */}
                    <div style={{ flex: 1, height: 10, background: '#F5F5F5', borderRadius: '0 4px 4px 0', overflow: 'hidden' }}>
                      <div style={{ width: `${vB}%`, height: '100%', background: `linear-gradient(90deg, ${dataB.color}, ${dataB.color}66)`, borderRadius: '0 4px 4px 0' }} />
                    </div>
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 800, color: dataB.color, width: 24 }}>{vB}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Winner verdict */}
        <div style={{
          background: overallA >= overallB
            ? `linear-gradient(135deg, ${dataA.color}20, ${dataA.color}10)`
            : `linear-gradient(135deg, ${dataB.color}20, ${dataB.color}10)`,
          border: `2px solid ${overallA >= overallB ? dataA.color : dataB.color}30`,
          borderRadius: 16, padding: '14px 16px', textAlign: 'center',
        }}>
          <div style={{ fontSize: 24, marginBottom: 4 }}>🏆</div>
          <div style={{ fontSize: 15, fontWeight: 900, color: overallA >= overallB ? dataA.color : dataB.color }}>
            {overallA >= overallB ? careerA : careerB} wins overall!
          </div>
          <div style={{ fontSize: 12, color: '#78909C', marginTop: 4 }}>
            Score: {Math.max(overallA, overallB)} vs {Math.min(overallA, overallB)} ({winsA} vs {winsB} categories)
          </div>
          <div style={{ fontSize: 12, color: '#546E7A', marginTop: 6, fontStyle: 'italic' }}>
            But the best career is the one YOU are most passionate about!
          </div>
        </div>
      </div>
    </div>
  );
}
