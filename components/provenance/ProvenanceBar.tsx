import React from 'react';
import type { ReadingMode } from './types';

const MODES: ReadingMode[] = ['Read', 'Provenance', 'History'];

interface ProvenanceBarProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: ReadingMode;
  onModeChange?: (mode: ReadingMode) => void;
  /** Dock to the bottom of the viewport. */
  sticky?: boolean;
  /** Left-slot content: a TrustReceipt, a legend, or diff stats. */
  children?: React.ReactNode;
}

/** The reader's only chrome: left slot + Read / Provenance / History tabs. */
const ProvenanceBar: React.FC<ProvenanceBarProps> = ({ mode = 'Read', onModeChange, sticky = false, children, style, ...rest }) => (
  <div style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
    background: 'var(--bg-raised)', borderTop: '1px solid var(--border-strong)',
    padding: '10px 20px',
    position: sticky ? 'sticky' : undefined, bottom: sticky ? 0 : undefined, zIndex: sticky ? 40 : undefined,
    ...style,
  }} {...rest}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', minWidth: 0 }}>{children}</div>
    <div style={{ display: 'flex', gap: 4 }}>
      {MODES.map(m => (
        <button key={m} onClick={onModeChange ? () => onModeChange(m) : undefined} style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-ui)', letterSpacing: 'var(--ls-normal)',
          padding: '5px 12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
          border: '1px solid ' + (m === mode ? 'var(--border-strong)' : 'transparent'),
          background: m === mode ? 'var(--surface)' : 'transparent',
          color: m === mode ? 'var(--text)' : 'var(--text-muted)',
          fontWeight: m === mode ? 600 : 500,
          transition: 'all var(--duration-fast) var(--ease-out)',
        }}>{m}</button>
      ))}
    </div>
  </div>
);

export default ProvenanceBar;
