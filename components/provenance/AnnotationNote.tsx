import React from 'react';
import type { AnnotationType } from './types';

interface AnnotationNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AnnotationType;
  /** Version the note was recorded with, e.g. "v2". */
  versionRef?: string;
  body: string;
  /** Renders a close button when provided (popover usage). */
  onClose?: () => void;
}

/** Margin note explaining one intervention: what changed, in which version, why.
    The most valuable provenance artifact. */
const AnnotationNote: React.FC<AnnotationNoteProps> = ({ type = 'revision', versionRef, body, onClose, style, ...rest }) => (
  <div style={{
    background: 'var(--color-bg-card)', border: '1px solid var(--color-border-light)',
    borderLeft: '3px solid var(--prov-human)', borderRadius: 8,
    padding: '14px 16px', boxShadow: '0 12px 32px -12px rgba(0,0,0,0.6)', maxWidth: 360, ...style,
  }} {...rest}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--prov-human)',
      }}>◈ {type}{versionRef ? ' · ' + versionRef : ''}</span>
      {onClose && (
        <button onClick={onClose} aria-label="Close" style={{
          border: 'none', background: 'none', color: 'var(--color-text-muted)', cursor: 'pointer',
          fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '0 2px', lineHeight: 1,
        }}>✕</button>
      )}
    </div>
    <p style={{ fontSize: '0.875rem', lineHeight: 1.5, margin: 0, color: 'var(--color-text-secondary)' }}>{body}</p>
  </div>
);

export default AnnotationNote;
