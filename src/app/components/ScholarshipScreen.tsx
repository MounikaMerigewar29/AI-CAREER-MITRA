import { useState } from 'react';
import { Search, Filter, ExternalLink } from 'lucide-react';

const filters = ['All', 'SC/ST', 'OBC', 'Merit-Based', 'Income'];

const scholarships = [
  {
    name: 'Post Matric Scholarship',
    org: 'Andhra Pradesh Government',
    eligibility: 'SC/ST students, income < ₹2.5L',
    amount: '₹5,500 / year',
    deadline: 'Oct 31, 2026',
    color: '#1565C0', bg: '#E3F2FD',
    emoji: '🎓',
    tag: 'SC/ST',
  },
  {
    name: 'NSP Merit Scholarship',
    org: 'National Scholarship Portal',
    eligibility: 'Scored 60%+, income < ₹3.5L',
    amount: '₹12,000 / year',
    deadline: 'Nov 15, 2026',
    color: '#2E7D32', bg: '#E8F5E9',
    emoji: '🏆',
    tag: 'Merit-Based',
  },
  {
    name: 'PM Vidya Lakshmi',
    org: 'Govt of India',
    eligibility: 'All students pursuing higher education',
    amount: 'Up to ₹1.5 Lakh loan',
    deadline: 'Rolling Basis',
    color: '#6A1B9A', bg: '#F3E5F5',
    emoji: '💎',
    tag: 'All',
  },
  {
    name: 'Telangana State Scholarship',
    org: 'Telangana BC Welfare Dept.',
    eligibility: 'BC students, income < ₹2L',
    amount: '₹8,000 / year',
    deadline: 'Dec 1, 2026',
    color: '#E65100', bg: '#FFF3E0',
    emoji: '🌟',
    tag: 'OBC',
  },
];

export function ScholarshipScreen() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = scholarships.filter(s =>
    (activeFilter === 'All' || s.tag === activeFilter) &&
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #6A1B9A 0%, #8E24AA 100%)',
        padding: '16px 20px 20px',
      }}>
        <h2 style={{ margin: '0 0 4px', color: 'white', fontSize: 22, fontWeight: 800 }}>
          🎓 Scholarships For You
        </h2>
        <p style={{ margin: '0 0 14px', color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
          25+ scholarships matched to your profile
        </p>
        {/* Search */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'rgba(255,255,255,0.15)', borderRadius: 14,
          padding: '10px 14px', border: '1px solid rgba(255,255,255,0.2)',
        }}>
          <Search size={16} color="rgba(255,255,255,0.7)" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search scholarships..."
            style={{
              background: 'transparent', border: 'none', outline: 'none',
              color: 'white', fontSize: 14, flex: 1, fontFamily: 'inherit',
            }}
          />
        </div>
      </div>

      {/* Filters */}
      <div style={{
        background: 'white', padding: '12px 20px', display: 'flex', gap: 8,
        overflowX: 'auto', boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 4 }}>
          <Filter size={14} color="#78909C" />
          <span style={{ fontSize: 12, color: '#78909C', fontWeight: 700 }}>Filter:</span>
        </div>
        {filters.map(f => (
          <button key={f} onClick={() => setActiveFilter(f)} style={{
            padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer',
            background: activeFilter === f ? '#6A1B9A' : '#F5F5F5',
            color: activeFilter === f ? 'white' : '#546E7A',
            fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', transition: 'all 0.2s',
          }}>
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
        <div style={{ fontSize: 13, color: '#78909C', fontWeight: 600, marginBottom: 12 }}>
          {filtered.length} scholarships found
        </div>
        {filtered.map(({ name, org, eligibility, amount, deadline, color, bg, emoji, tag }) => (
          <div key={name} style={{
            background: 'white', borderRadius: 18, marginBottom: 12, overflow: 'hidden',
            boxShadow: '0 3px 12px rgba(0,0,0,0.07)',
          }}>
            {/* Card top */}
            <div style={{ background: bg, padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)', flexShrink: 0,
              }}>{emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', lineHeight: 1.2 }}>{name}</div>
                <div style={{ fontSize: 12, color: '#78909C', marginTop: 2 }}>{org}</div>
              </div>
              <span style={{
                background: color, color: 'white', fontSize: 10, fontWeight: 800,
                padding: '3px 8px', borderRadius: 10, flexShrink: 0,
              }}>{tag}</span>
            </div>
            {/* Card body */}
            <div style={{ padding: '12px 16px' }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700 }}>ELIGIBILITY</div>
                  <div style={{ fontSize: 12.5, color: '#263238', fontWeight: 500, lineHeight: 1.4 }}>{eligibility}</div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid #F5F5F5' }}>
                <div>
                  <div style={{ fontSize: 11, color: '#90A4AE', fontWeight: 700 }}>AMOUNT</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: '#2E7D32' }}>{amount}</div>
                  <div style={{ fontSize: 11, color: '#EF5350', fontWeight: 600 }}>Deadline: {deadline}</div>
                </div>
                <button style={{
                  background: color, border: 'none', borderRadius: 22,
                  padding: '10px 18px', color: 'white', fontSize: 13, fontWeight: 800,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  Apply Now <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
