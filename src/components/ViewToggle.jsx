import React from 'react';
import { BarChart2, Zap } from 'lucide-react';

const ViewToggle = ({ view, onChange }) => {
  const options = [
    { id: 'volume',  label: 'Volume View',  icon: BarChart2, hint: 'Sort by joins' },
    { id: 'quality', label: 'Quality View', icon: Zap,       hint: 'Sort by retention' },
  ];

  return (
    <div style={{
      display: 'inline-flex',
      backgroundColor: '#1E1F22',
      borderRadius: '8px',
      padding: '3px',
      gap: '2px',
    }}>
      {options.map(({ id, label, icon: Icon, hint }) => {
        const active = view === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            title={hint}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: active ? '600' : '500',
              color: active ? '#F2F3F5' : '#80848E',
              backgroundColor: active ? '#5865F2' : 'transparent',
              transition: 'all 0.15s ease',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <Icon size={14} />
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ViewToggle;
