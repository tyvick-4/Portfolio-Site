import React from 'react';
import { Compass, Gamepad2, MonitorPlay, GraduationCap, Music, FlaskConical, LayoutGrid } from 'lucide-react';

const CATEGORIES = [
    { id: 'featured', label: 'Featured', icon: Compass },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { id: 'entertainment', label: 'Entertainment', icon: MonitorPlay },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'tech', label: 'Science & Tech', icon: FlaskConical },
    { id: 'student', label: 'Student Hubs', icon: LayoutGrid },
];

const CategorySidebar = ({ activeCategory = 'gaming' }) => {
    return (
        <div style={{
            width: '240px',
            height: '100%',
            backgroundColor: 'var(--bg-secondary)',
            padding: '16px 8px',
            flexShrink: 0,
        }}>
            <h2 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: 'var(--text-primary)',
                padding: '0 8px',
                marginBottom: '24px'
            }}>
                Discover
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {CATEGORIES.map(category => {
                    const isActive = category.id === activeCategory;
                    const Icon = category.icon;
                    return (
                        <button
                            key={category.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                width: '100%',
                                padding: '10px 12px',
                                borderRadius: '4px',
                                backgroundColor: isActive ? 'var(--bg-card-hover)' : 'transparent',
                                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                                fontWeight: isActive ? '600' : '500',
                                fontSize: '16px',
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }
                            }}
                        >
                            <Icon size={20} />
                            {category.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CategorySidebar;
