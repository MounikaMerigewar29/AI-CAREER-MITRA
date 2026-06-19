import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Award, Map } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', students: 180, scholarships: 45 },
  { month: 'Feb', students: 245, scholarships: 68 },
  { month: 'Mar', students: 320, scholarships: 92 },
  { month: 'Apr', students: 478, scholarships: 134 },
  { month: 'May', students: 612, scholarships: 178 },
  { month: 'Jun', students: 847, scholarships: 241 },
];

const districts = [
  { name: 'Kurnool', students: 412, scholarships: 118, readiness: 74, color: '#1565C0' },
  { name: 'Nandyal', students: 287, scholarships: 84, readiness: 68, color: '#2E7D32' },
  { name: 'Anantapur', students: 348, scholarships: 102, readiness: 71, color: '#E65100' },
  { name: 'Warangal', students: 391, scholarships: 87, readiness: 76, color: '#6A1B9A' },
  { name: 'Karimnagar', students: 312, scholarships: 94, readiness: 73, color: '#0097A7' },
];

const careers = [
  { name: 'Software Eng.', count: 48, color: '#1565C0' },
  { name: 'Data Analyst', count: 32, color: '#0097A7' },
  { name: 'Teacher', count: 61, color: '#2E7D32' },
  { name: 'Civil Services', count: 24, color: '#E65100' },
  { name: 'UI/UX Design', count: 19, color: '#6A1B9A' },
];

export function VillageImpactScreen() {
  const totals = {
    students: districts.reduce((a, d) => a + d.students, 0),
    scholarships: districts.reduce((a, d) => a + d.scholarships, 0),
    roadmaps: 1203,
    readiness: Math.round(districts.reduce((a, d) => a + d.readiness, 0) / districts.length),
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F0F4F8' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1A237E 0%, #283593 100%)', padding: '14px 20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <Map size={20} color="#FFD54F" />
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Village Impact Dashboard</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Andhra Pradesh & Telangana • Jun 2026</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ background: '#FFD54F', color: '#1A237E', fontSize: 10, fontWeight: 900, padding: '3px 12px', borderRadius: 10 }}>GOVERNMENT DASHBOARD</span>
          <span style={{ background: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)', fontSize: 10, fontWeight: 700, padding: '3px 12px', borderRadius: 10 }}>Tier-2/3 Cities</span>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* Big impact metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
          {[
            { icon: <Users size={18} color="#1565C0" />, value: totals.students.toLocaleString(), label: 'Students Guided', sub: '+412 this month', color: '#1565C0', bg: '#E3F2FD' },
            { icon: <Award size={18} color="#2E7D32" />, value: `₹${(totals.scholarships * 8500 / 100000).toFixed(1)}L`, label: 'Scholarships Secured', sub: `${totals.scholarships} students`, color: '#2E7D32', bg: '#E8F5E9' },
            { icon: <span style={{ fontSize: 18 }}>🗺️</span>, value: totals.roadmaps.toLocaleString(), label: 'Roadmaps Generated', sub: '94% completion rate', color: '#E65100', bg: '#FFF3E0' },
            { icon: <TrendingUp size={18} color="#6A1B9A" />, value: `${totals.readiness}%`, label: 'Employment Readiness', sub: '↑ 12% vs last year', color: '#6A1B9A', bg: '#F3E5F5' },
          ].map(({ icon, value, label, sub, color, bg }) => (
            <div key={label} style={{ background: 'white', borderRadius: 16, padding: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 20, fontWeight: 900, color, lineHeight: 1.1 }}>{value}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#263238', marginTop: 2 }}>{label}</div>
              <div style={{ fontSize: 10, color: '#78909C', marginTop: 2 }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Growth chart */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E' }}>Monthly Student Growth</div>
            <span style={{ fontSize: 11, background: '#E8F5E9', color: '#2E7D32', padding: '3px 10px', borderRadius: 10, fontWeight: 700 }}>↑ 370% 6mo</span>
          </div>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={monthlyData} margin={{ top: 0, right: 5, left: -25, bottom: 0 }} barGap={3}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#90A4AE' }} />
              <YAxis tick={{ fontSize: 9, fill: '#90A4AE' }} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: 11 }} />
              <Bar dataKey="students" name="Students" fill="#1565C0" radius={[4, 4, 0, 0]} />
              <Bar dataKey="scholarships" name="Scholarships" fill="#2E7D32" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 6 }}>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}><div style={{ width: 10, height: 10, borderRadius: 2, background: '#1565C0' }} /><span style={{ fontSize: 10, color: '#78909C' }}>Students</span></div>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}><div style={{ width: 10, height: 10, borderRadius: 2, background: '#2E7D32' }} /><span style={{ fontSize: 10, color: '#78909C' }}>Scholarships</span></div>
          </div>
        </div>

        {/* District breakdown */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>📍 District-Level Data</div>
          {districts.map(({ name, students, scholarships, readiness, color }, i) => (
            <div key={i} style={{ marginBottom: i < districts.length - 1 ? 12 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#263238' }}>{name}</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ fontSize: 11, color: '#1565C0', fontWeight: 700 }}>👥 {students}</span>
                  <span style={{ fontSize: 11, color: '#2E7D32', fontWeight: 700 }}>🏆 {scholarships}</span>
                  <span style={{ fontSize: 11, color, fontWeight: 800 }}>{readiness}%</span>
                </div>
              </div>
              <div style={{ height: 7, background: '#F5F5F5', borderRadius: 4 }}>
                <div style={{ width: `${readiness}%`, height: '100%', borderRadius: 4, background: `linear-gradient(90deg, ${color}, ${color}99)` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Top career choices */}
        <div style={{ background: 'white', borderRadius: 18, padding: '14px', marginBottom: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>🎯 Top Career Goals (Placed Students)</div>
          {careers.map(({ name, count, color }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#546E7A', width: 100, flexShrink: 0 }}>{name}</span>
              <div style={{ flex: 1, height: 8, background: '#F5F5F5', borderRadius: 4 }}>
                <div style={{ width: `${(count / 70) * 100}%`, height: '100%', borderRadius: 4, background: color }} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 800, color, width: 28, textAlign: 'right' }}>{count}</span>
            </div>
          ))}
        </div>

        {/* Admin actions */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ flex: 1, height: 48, background: '#1A237E', border: 'none', borderRadius: 24, color: 'white', fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
            📊 Export Report
          </button>
          <button style={{ flex: 1, height: 48, background: '#E3F2FD', border: '2px solid #90CAF9', borderRadius: 24, color: '#1565C0', fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
            📤 Share Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
