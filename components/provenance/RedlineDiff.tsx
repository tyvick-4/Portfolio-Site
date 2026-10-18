import React from 'react';
import type { DiffPart } from './types';

interface RedlineDiffProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase label, e.g. "¶1 · Lede · rewritten from scratch". */
  label?: string;
  parts: DiffPart[];
  delWords?: number;
  insWords?: number;
  /** Author's note quoted after the stats. */
  note?: string;
}

/** Journalistic redlines between two versions of a paragraph:
    red strikethrough deletions, green underline insertions. */
const RedlineDiff: React.FC<RedlineDiffProps> = ({ label, parts, delWords, insWords, note, style, ...rest }) => (
  <div style={{
    border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
    padding: '20px 24px', background: 'var(--surface)', ...style,
  }} {...rest}>
    {label && (
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase', color: 'var(--text-faint)', margin: '0 0 10px', lineHeight: 1.4,
      }}>{label}</p>
    )}
    <p style={{ fontSize: 'var(--text-body)', lineHeight: 1.75, margin: 0, color: 'var(--text)' }}>
      {parts.map((p, i) => p.t === 'del'
        ? <del key={i} style={{ color: 'var(--prov-del)', background: 'var(--prov-del-tint)', textDecorationThickness: 1.5 }}>{p.text}</del>
        : p.t === 'ins'
          ? <ins key={i} style={{ color: 'var(--prov-ins)', background: 'var(--prov-ins-tint)', textDecoration: 'underline', textDecorationThickness: 1.5, textUnderlineOffset: 3 }}>{p.text}</ins>
          : <span key={i}>{p.text}</span>)}
    </p>
    {(delWords != null || insWords != null || note) && (
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', color: 'var(--text-faint)', margin: '12px 0 0', lineHeight: 1.5 }}>
        {delWords != null && <span style={{ color: 'var(--prov-del)' }}>−{delWords}</span>}
        {delWords != null && insWords != null && ' / '}
        {insWords != null && <span style={{ color: 'var(--prov-ins)' }}>+{insWords} words</span>}
        {note && <span>&nbsp;·&nbsp;note: “{note}”</span>}
      </p>
    )}
  </div>
);

export default RedlineDiff;
