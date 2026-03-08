import React from 'react';
import { AlertTriangle, Lightbulb, Info } from 'lucide-react';

const VARIANT_CONFIG = {
  warning: {
    bg: 'rgba(120,53,15,0.35)',
    border: '#F59E0B',
    iconColor: '#F59E0B',
    Icon: AlertTriangle,
  },
  tip: {
    bg: 'rgba(49,46,129,0.4)',
    border: '#6366F1',
    iconColor: '#818CF8',
    Icon: Lightbulb,
  },
  neutral: {
    bg: 'rgba(38,38,38,0.6)',
    border: '#6B7280',
    iconColor: '#9CA3AF',
    Icon: Info,
  },
};

const InsightCallout = ({
  variant = 'warning',
  title = 'Discovery Paradox Detected',
  body = 'Server Discovery drives 3,100 joins — your highest-volume source. But at 22% 7-day retention and 2.1 avg messages per member, it produces the lowest-quality members. YouTube referrals (83% retention) generate 3.8x more engaged members per join. External content pre-qualifies users before they arrive.',
}) => {
  const config = VARIANT_CONFIG[variant] || VARIANT_CONFIG.neutral;
  const { Icon } = config;

  return (
    <div style={{
      backgroundColor: config.bg,
      borderLeft: `3px solid ${config.border}`,
      borderRadius: '0 8px 8px 0',
      padding: '16px 20px',
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
    }}>
      <Icon
        size={18}
        style={{ color: config.iconColor, flexShrink: 0, marginTop: '1px' }}
      />
      <div>
        <div style={{
          fontSize: '13px',
          fontWeight: '700',
          color: '#F2F3F5',
          marginBottom: '6px',
          letterSpacing: '0.01em',
        }}>
          {title}
        </div>
        <div style={{
          fontSize: '13px',
          lineHeight: '1.6',
          color: '#B5BAC1',
        }}>
          {body}
        </div>
      </div>
    </div>
  );
};

export default InsightCallout;
