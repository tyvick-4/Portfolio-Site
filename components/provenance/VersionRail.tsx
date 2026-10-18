import React from 'react';
import type { VersionInfo } from './types';

interface VersionRailProps extends React.HTMLAttributes<HTMLDivElement> {
  versions: VersionInfo[];
  selected?: string;
  onSelect?: (id: string) => void;
  /** Rail heading; pass null to hide. */
  title?: string | null;
}

/** Vertical version timeline: v0 prompt → drafts → final.
    Amber dots = human-authored versions, slate = AI. */
const VersionRail: React.FC<VersionRailProps> = ({ versions, selected, onSelect, title = 'Version history', style, ...rest }) => (
  <div style={style} {...rest}>
    {title && (
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label-sm)', letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 16px',
      }}>{title}</p>
    )}
    {versions.map((v, i) => {
      const isSel = v.id === selected;
      const hue = v.author === 'ai' ? 'var(--prov-ai)' : 'var(--prov-human)';
      return (
        <button key={v.id} onClick={onSelect ? () => onSelect(v.id) : undefined} style={{
          position: 'relative', display: 'block', width: '100%', textAlign: 'left',
          padding: '6px 8px 18px 24px', border: 'none', cursor: onSelect ? 'pointer' : 'default',
          borderRadius: 'var(--radius-sm)',
          background: isSel ? 'linear-gradient(90deg, var(--accent-soft), transparent)' : 'transparent',
          color: 'inherit', fontFamily: 'inherit',
        }}>
          {i < versions.length - 1 && (
            <span style={{ position: 'absolute', left: 11, top: 16, bottom: -4, width: 1, background: 'var(--border-strong)' }} />
          )}
          <span style={{
            position: 'absolute', left: 7, top: 13, width: 9, height: 9, borderRadius: '50%',
            background: hue, border: '2px solid ' + hue,
          }} />
          <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', fontWeight: 600, color: 'var(--text)', marginBottom: 3 }}>
            {v.id} · {v.label}{' '}
            <span style={{
              fontSize: 'var(--text-label-sm)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase',
              padding: '1px 6px', borderRadius: 'var(--radius-pill)', fontWeight: 500,
              color: hue, border: '1px solid ' + hue,
            }}>{v.author === 'ai' ? 'AI' : 'Human'}</span>
          </span>
          <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label-sm)', color: 'var(--text-faint)', marginBottom: 4 }}>
            {v.ts}{isSel ? ' · viewing' : ''}
          </span>
          {v.note && (
            <span style={{ display: 'block', fontSize: '0.82rem', lineHeight: 1.45, color: 'var(--text-muted)' }}>{v.note}</span>
          )}
        </button>
      );
    })}
  </div>
);

export default VersionRail;
