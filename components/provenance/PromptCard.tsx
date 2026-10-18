import React from 'react';

interface PromptCardProps extends React.HTMLAttributes<HTMLDivElement> {
  author?: string;
  ts?: string;
  /** Show the "Read the full prompt →" affordance. */
  more?: boolean;
  children?: React.ReactNode;
}

/** v0 as a first-class artifact: the prompt that seeded the piece.
    Hiding the prompt implies shame; showing it implies intent. */
const PromptCard: React.FC<PromptCardProps> = ({ author, ts, more, children, style, ...rest }) => (
  <div style={{
    background: 'var(--surface-2)', border: '1px solid var(--border-strong)',
    borderRadius: 'var(--radius-md)', padding: '20px 24px', ...style,
  }} {...rest}>
    <p style={{
      fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label-sm)', letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase', color: 'var(--prov-human)', margin: '0 0 10px', lineHeight: 1.5,
    }}>◈ v0 · The prompt behind this piece{author ? ' · ' + author : ''}{ts ? ' · ' + ts : ''}</p>
    <blockquote style={{
      margin: 0, fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic',
      color: 'var(--text)', whiteSpace: 'pre-line',
    }}>{children}</blockquote>
    {more && (
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-small)', fontWeight: 500, color: 'var(--link)', margin: '12px 0 0' }}>
        Read the full prompt →
      </p>
    )}
  </div>
);

export default PromptCard;
