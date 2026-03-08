import React from 'react';

const SCORE_CONFIG = {
  5: { label: 'Excellent', bg: 'rgba(87,242,135,0.15)', color: '#57F287', dots: 5 },
  4: { label: 'Good',      bg: 'rgba(87,242,135,0.08)', color: '#57F287', dots: 4 },
  3: { label: 'Average',   bg: 'rgba(254,231,92,0.12)', color: '#FEE75C', dots: 3 },
  2: { label: 'Low',       bg: 'rgba(237,66,69,0.12)',  color: '#ED4245', dots: 2 },
  1: { label: 'Poor',      bg: 'rgba(237,66,69,0.18)',  color: '#ED4245', dots: 1 },
};

const QualityBadge = ({ score }) => {
  const config = SCORE_CONFIG[score] || SCORE_CONFIG[3];

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      backgroundColor: config.bg,
      border: `1px solid ${config.color}33`,
      borderRadius: '6px',
      padding: '4px 10px',
      whiteSpace: 'nowrap',
    }}>
      {/* Dot meter */}
      <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div
            key={i}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: i <= config.dots ? config.color : 'rgba(255,255,255,0.1)',
            }}
          />
        ))}
      </div>
      <span style={{
        fontSize: '12px',
        fontWeight: '600',
        color: config.color,
        letterSpacing: '0.01em',
      }}>
        {config.label}
      </span>
    </div>
  );
};

export default QualityBadge;
