import { useState } from 'react';
import { Search, MapPin, Star } from 'lucide-react';

const categories = ['All', 'IITs/NITs', 'State Govt.', 'Private', 'Deemed'];

const colleges = [
  { name: 'NIT Warangal', location: 'Warangal, Telangana', type: 'State Govt.', fees: '₹1.3 L/year', placement: '94%', avgPackage: '₹14 LPA', scholarships: ['Post Matric', 'Merit Scholarship', 'NSP'], admission: 'JEE Main Rank < 8000', alignment: 98, rating: 4.8, color: '#1565C0', bg: '#E3F2FD', emoji: '🏛️', highlight: 'Top NIT in South India' },
  { name: 'JNTU Hyderabad', location: 'Hyderabad, Telangana', type: 'State Govt.', fees: '₹85K/year', placement: '88%', avgPackage: '₹9 LPA', scholarships: ['TS Epass', 'NSP', 'Post Matric'], admission: 'TS EAMCET Rank < 5000', alignment: 91, rating: 4.4, color: '#2E7D32', bg: '#E8F5E9', emoji: '🎓', highlight: 'Affordable with great placements' },
  { name: 'IIIT Hyderabad', location: 'Hyderabad, Telangana', type: 'Deemed', fees: '₹2.5 L/year', placement: '97%', avgPackage: '₹24 LPA', scholarships: ['Merit', 'Need-Based'], admission: 'JEE + Interview', alignment: 96, rating: 4.9, color: '#6A1B9A', bg: '#F3E5F5', emoji: '🔬', highlight: 'Best for CS/AI research' },
  { name: 'Osmania University', location: 'Hyderabad, Telangana', type: 'State Govt.', fees: '₹55K/year', placement: '78%', avgPackage: '₹6 LPA', scholarships: ['TS Epass', 'BC Welfare', 'NSP', 'Post Matric', 'SC/ST'], admission: 'TS EAMCET', alignment: 84, rating: 4.1, color: '#E65100', bg: '#FFF3E0', emoji: '🏫', highlight: 'Most accessible for all income levels' },
  { name: 'VIT Vellore', location: 'Vellore, Tamil Nadu', type: 'Private', fees: '₹1.98 L/year', placement: '93%', avgPackage: '₹11 LPA', scholarships: ['Merit', 'VIT Scholarship'], admission: 'VITEEE', alignment: 89, rating: 4.6, color: '#0097A7', bg: '#E0F7FA', emoji: '🌟', highlight: 'Strong industry connections nationwide' },
];

export function CollegeFinderScreen() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filtered = colleges.filter(c =>
    (activeFilter === 'All' || c.type === activeFilter) &&
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      <div style={{ background: 'linear-gradient(135deg, #0097A7 0%, #00838F 100%)', padding: '14px 20px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 24 }}>🏛️</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>College Finder</h2>
            <p style={{ margin: '2px 0 0', color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>Matched to Software Engineering</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.18)', borderRadius: 14, padding: '10px 14px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <Search size={16} color="rgba(255,255,255,0.8)" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search colleges..."
            style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', fontSize: 14, flex: 1, fontFamily: 'inherit' }} />
        </div>
      </div>

      <div style={{ background: 'white', padding: '10px 16px', display: 'flex', gap: 6, overflowX: 'auto', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveFilter(cat)} style={{
            padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer',
            background: activeFilter === cat ? '#0097A7' : '#F5F5F5',
            color: activeFilter === cat ? 'white' : '#546E7A',
            fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
          }}>{cat}</button>
        ))}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 18px' }}>
        <div style={{ fontSize: 12, color: '#78909C', fontWeight: 600, marginBottom: 12 }}>{filtered.length} colleges matched</div>
        {filtered.map(({ name, location, type, fees, placement, avgPackage, scholarships, admission, alignment, rating, color, bg, emoji, highlight }, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 18, marginBottom: 12, overflow: 'hidden', boxShadow: '0 3px 14px rgba(0,0,0,0.07)', border: expandedCard === i ? `2px solid ${color}` : '2px solid transparent' }}>
            <div style={{ background: bg, padding: '14px 16px' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', flexShrink: 0 }}>{emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: '#1A237E' }}>{name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                        <MapPin size={11} color={color} />
                        <span style={{ fontSize: 12, color: '#78909C' }}>{location}</span>
                      </div>
                    </div>
                    <div style={{ background: color, borderRadius: 20, padding: '6px 10px', textAlign: 'center' }}>
                      <div style={{ color: 'white', fontSize: 14, fontWeight: 900, lineHeight: 1.1 }}>{alignment}%</div>
                      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 9, fontWeight: 700 }}>MATCH</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 6, background: 'rgba(255,255,255,0.6)', borderRadius: 8, padding: '3px 10px', display: 'inline-block' }}>
                    <span style={{ fontSize: 11, color, fontWeight: 700 }}>✨ {highlight}</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', padding: '10px 16px', borderBottom: '1px solid #F5F5F5' }}>
              {[{ label: 'Fees/Year', value: fees, icon: '💰' }, { label: 'Placement', value: placement, icon: '🎯' }, { label: 'Avg Package', value: avgPackage, icon: '💼' }].map(({ label, value, icon }, j) => (
                <div key={j} style={{ flex: 1, textAlign: 'center', padding: '4px 0', borderRight: j < 2 ? '1px solid #F5F5F5' : 'none' }}>
                  <div style={{ fontSize: 16 }}>{icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: '#263238' }}>{value}</div>
                  <div style={{ fontSize: 10, color: '#90A4AE', fontWeight: 600 }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '10px 16px 12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                    <Star size={12} color="#FFB300" fill="#FFB300" />
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#263238' }}>{rating}/5.0</span>
                    <span style={{ fontSize: 11, color: '#90A4AE' }}>• {type}</span>
                  </div>
                  <div style={{ fontSize: 11, color: '#78909C' }}><span style={{ fontWeight: 700, color: '#546E7A' }}>Admission: </span>{admission}</div>
                </div>
                <button onClick={() => setExpandedCard(expandedCard === i ? null : i)} style={{ background: '#F5F7FF', border: `1px solid ${color}40`, borderRadius: 14, padding: '6px 12px', fontSize: 12, color, fontWeight: 700, cursor: 'pointer' }}>
                  {expandedCard === i ? 'Less ↑' : 'Details ↓'}
                </button>
              </div>
              {expandedCard === i && (
                <div style={{ marginTop: 12, borderTop: '1px solid #F5F5F5', paddingTop: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#546E7A', marginBottom: 6 }}>AVAILABLE SCHOLARSHIPS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                    {scholarships.map(s => <span key={s} style={{ background: '#E8F5E9', color: '#2E7D32', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 10 }}>{s}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button style={{ flex: 1, height: 40, background: color, border: 'none', borderRadius: 20, color: 'white', fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>Apply Now</button>
                    <button style={{ flex: 1, height: 40, background: '#F5F7FF', border: `1px solid ${color}40`, borderRadius: 20, color, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>Save College</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
