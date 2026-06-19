import { useState } from 'react';
import { MapPin, Star, X } from 'lucide-react';

const stories = [
  {
    name: 'Ravi Kumar Reddy', initial: 'R', from: 'Nandyal, Andhra Pradesh', career: 'Software Engineer', company: 'Google Hyderabad',
    salary: '₹42 LPA', year: 2023, emoji: '💻', color: '#1565C0', bg: '#E3F2FD',
    story: 'I grew up in a small farming family in Nandyal. My parents worried about paying ₹50,000 in college fees. With Career Mitra, I found the Post Matric scholarship that covered my fees. I got into NIT Warangal, practiced DSA daily for 2 years, and got placed at Google! Today I support my family and have built a house in our village.',
    tags: ['NIT Warangal', 'JEE Qualified', 'Rural → MNC'],
    rating: 5,
  },
  {
    name: 'Priya Devi Pullela', initial: 'P', from: 'Karimnagar, Telangana', career: 'Data Scientist', company: 'Flipkart Bengaluru',
    salary: '₹28 LPA', year: 2024, emoji: '📊', color: '#6A1B9A', bg: '#F3E5F5',
    story: 'I was the first girl in my village to pursue engineering. My family didn\'t believe in girls working in IT. Career Mitra\'s Parent Mode helped me explain to my parents in Telugu. I got the YSR Vasathi Deevena scholarship for hostel fees. I graduated from JNTU and now work as a Data Scientist at Flipkart. I inspire 15 younger girls from my village who are now pursuing STEM.',
    tags: ['JNTU Hyderabad', 'TS Scholarship', 'First Gen Engineer'],
    rating: 5,
  },
  {
    name: 'Suresh Yadav Manga', initial: 'S', from: 'Warangal, Telangana', career: 'UI/UX Designer', company: 'Swiggy (Remote)',
    salary: '₹16 LPA', year: 2024, emoji: '🎨', color: '#E65100', bg: '#FFF3E0',
    story: 'I was weak in maths and thought engineering wasn\'t for me. Career Mitra\'s assessment showed my strength in visual thinking and creativity. I pursued a Design degree, took free Figma courses, built a portfolio on Behance, and got hired at Swiggy remotely! I work from Warangal, earn ₹16 LPA, and spend time with my family every day.',
    tags: ['Design Degree', 'Behance Portfolio', 'Remote Work'],
    rating: 5,
  },
  {
    name: 'Anjali Sharma', initial: 'A', from: 'Kurnool, Andhra Pradesh', career: 'Govt. Engineer (DRDO)', company: 'DRDO Hyderabad',
    salary: '₹18 LPA + Benefits', year: 2023, emoji: '🔬', color: '#2E7D32', bg: '#E8F5E9',
    story: 'My dream was always a government job with job security. Career Mitra showed me DRDO, ISRO, and BARC as career options. I appeared for GATE with 99.2 percentile. DRDO offered me a Scientist B position. I have a government house, pension, and my parents are very proud. Best decision of my life was to follow Career Mitra\'s suggestion!',
    tags: ['GATE 99.2%', 'DRDO Scientist B', 'Job Security'],
    rating: 5,
  },
];

export function SuccessStoriesScreen() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Tech', 'Govt', 'Design', 'Rural'];

  const expandedStory = expanded !== null ? stories[expanded] : null;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F5F7FF' }}>
      {/* Full story overlay */}
      {expandedStory && (
        <div style={{ position: 'absolute', inset: 0, background: 'white', zIndex: 100, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <div style={{ background: `linear-gradient(135deg, ${expandedStory.color}, ${expandedStory.color}CC)`, padding: '20px 20px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
              <button onClick={() => setExpanded(null)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <X size={18} color="white" />
              </button>
            </div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 900, color: 'white', border: '2px solid rgba(255,255,255,0.4)' }}>{expandedStory.initial}</div>
              <div>
                <div style={{ color: 'white', fontSize: 18, fontWeight: 800 }}>{expandedStory.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={10} />{expandedStory.from}</div>
                <div style={{ color: '#FFD54F', fontSize: 20, fontWeight: 900, marginTop: 4 }}>{expandedStory.salary}</div>
              </div>
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {expandedStory.tags.map(t => <span key={t} style={{ background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 10 }}>{t}</span>)}
            </div>
          </div>
          <div style={{ padding: '20px 20px' }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E', marginBottom: 12 }}>🌟 {expandedStory.name}'s Journey</div>
            <p style={{ fontSize: 14, color: '#546E7A', lineHeight: 1.7, margin: 0 }}>{expandedStory.story}</p>
            <div style={{ marginTop: 20, background: '#E8F5E9', borderRadius: 14, padding: '14px 16px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#2E7D32', marginBottom: 4 }}>💬 Message to Students</div>
              <div style={{ fontSize: 13, color: '#546E7A', fontStyle: 'italic', lineHeight: 1.5 }}>
                "If I could do it, you can too. Your background doesn't define your future. Hard work and the right guidance does. Trust the process!"
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1565C0 0%, #0097A7 100%)', padding: '14px 20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 24 }}>🌟</span>
          <div>
            <h2 style={{ margin: 0, color: 'white', fontSize: 20, fontWeight: 800 }}>Success Stories</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Real students, real transformations</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '5px 14px', borderRadius: 16, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              background: filter === f ? 'white' : 'rgba(255,255,255,0.2)',
              color: filter === f ? '#1565C0' : 'rgba(255,255,255,0.9)',
              fontSize: 12, fontWeight: 800,
            }}>{f}</button>
          ))}
        </div>
      </div>

      {/* Featured */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px 20px' }}>
        {/* Big featured card */}
        <div onClick={() => setExpanded(0)} style={{
          background: 'linear-gradient(135deg, #1565C0, #0097A7)',
          borderRadius: 20, padding: '18px', marginBottom: 14, cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(21,101,192,0.3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 8, padding: '2px 10px', fontSize: 10, color: 'white', fontWeight: 800 }}>⭐ FEATURED STORY</div>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: 'white', flexShrink: 0 }}>R</div>
            <div>
              <div style={{ color: 'white', fontSize: 16, fontWeight: 800 }}>Ravi Kumar Reddy</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Nandyal → Google Hyderabad</div>
              <div style={{ color: '#FFD54F', fontSize: 18, fontWeight: 900 }}>₹42 LPA 💻</div>
            </div>
          </div>
          <p style={{ margin: '12px 0 0', color: 'rgba(255,255,255,0.85)', fontSize: 12.5, lineHeight: 1.5 }}>
            "From a farming family in Nandyal to Software Engineer at Google — Career Mitra changed my life." <span style={{ fontWeight: 700 }}>Tap to read full story →</span>
          </p>
        </div>

        {/* Grid of other stories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {stories.slice(1).map(({ name, initial, from, career, company, salary, emoji, color, bg, tags, rating }, i) => (
            <div key={i} onClick={() => setExpanded(i + 1)} style={{
              background: 'white', borderRadius: 18, overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', cursor: 'pointer',
            }}>
              <div style={{ background: bg, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 900, color: 'white', flexShrink: 0 }}>{initial}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: '#1A237E' }}>{name}</div>
                  <div style={{ fontSize: 11, color: '#78909C', display: 'flex', alignItems: 'center', gap: 3 }}><MapPin size={9} />{from}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 14, fontWeight: 900, color: color }}>{salary}</div>
                  <div style={{ display: 'flex', gap: 1 }}>
                    {Array.from({ length: rating }, (_, i) => <Star key={i} size={10} color="#FFB300" fill="#FFB300" />)}
                  </div>
                </div>
              </div>
              <div style={{ padding: '10px 14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#263238' }}>{emoji} {career}</span>
                    <div style={{ fontSize: 11, color: '#78909C' }}>at {company}</div>
                  </div>
                  <span style={{ fontSize: 11, color: color, fontWeight: 700 }}>Read Story →</span>
                </div>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {tags.map(t => <span key={t} style={{ fontSize: 10, background: `${color}12`, color, padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 16, background: '#E3F2FD', borderRadius: 16, padding: '14px 16px', textAlign: 'center' }}>
          <div style={{ fontSize: 24, marginBottom: 6 }}>🤝</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#1565C0', marginBottom: 4 }}>Could be the next success story!</div>
          <div style={{ fontSize: 12, color: '#78909C' }}>2,847 students from Tier-2/3 cities have transformed their careers with AI Career Mitra</div>
        </div>
      </div>
    </div>
  );
}
