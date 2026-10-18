import React from 'react';

interface SourceChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Ledger id, e.g. "S1". */
  id: string;
  /** Short origin, e.g. "Pew Research Center, Aug 2023". */
  origin?: string;
  status?: 'verified' | 'needs-check';
}

/** Sources-ledger entry pill. The status is the honesty:
    needs-check claims do not ship. */
const SourceChip: React.FC<SourceChipProps> = ({ id, origin, status = 'verified', style, ...rest }) => {
  const ok = status === 'verified';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', color: 'var(--text-muted)',
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-pill)', padding: '4px 12px', ...style,
    }} {...rest}>
      <b style={{ color: 'var(--text)', fontWeight: 600 }}>{id}</b>
      {origin && <span style={{ opacity: 0.9 }}>{origin}</span>}
      <span style={{ color: ok ? 'var(--prov-verified)' : 'var(--prov-needs-check)', fontWeight: 600,
        letterSpacing: 'var(--ls-normal)',
      }}>
        {ok ? '✓ verified' : '⚠ needs-check'}
      </span>
    </span>
  );
};

export default SourceChip;
