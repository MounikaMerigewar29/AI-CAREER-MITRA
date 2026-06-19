import { Home, Briefcase, GraduationCap, MessageCircle, User } from 'lucide-react';

interface Props {
  active: string;
  onNavigate: (id: string) => void;
}

const items = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'careers', label: 'Careers', Icon: Briefcase },
  { id: 'scholarships', label: 'Scholarships', Icon: GraduationCap },
  { id: 'coach', label: 'AI Coach', Icon: MessageCircle },
  { id: 'profile', label: 'Profile', Icon: User },
];

export function BottomNav({ active, onNavigate }: Props) {
  return (
    <div style={{
      display: 'flex', background: 'white', borderTop: '1px solid #E8EAED',
      paddingTop: 8, paddingBottom: 4,
      boxShadow: '0 -4px 12px rgba(0,0,0,0.06)',
    }}>
      {items.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button key={id} onClick={() => onNavigate(id)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 3, border: 'none', background: 'transparent',
              cursor: 'pointer', padding: '4px 0',
            }}>
            <div style={{
              width: 40, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 14, background: isActive ? '#E3F2FD' : 'transparent',
              transition: 'background 0.2s',
            }}>
              <Icon size={20} color={isActive ? '#1565C0' : '#9E9E9E'} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span style={{
              fontSize: 10, color: isActive ? '#1565C0' : '#9E9E9E',
              fontWeight: isActive ? 700 : 500, letterSpacing: 0.1,
            }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
