import React from 'react';
import type { Origin } from './types';

interface AttributionTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  origin?: Origin;
  /** Show the amber note dot (passage has an annotation). */
  note?: boolean;
  /** Sources-ledger id rendered as a superscript anchor, e.g. "S1". */
  sourceRef?: string;
  interactive?: boolean;
  children?: React.ReactNode;
}

/** Span-level authorship underline: human (amber, the brand accent), ai (slate),
    ai_edited (slate-to-amber gradient, both hands touched it). */
const AttributionText: React.FC<AttributionTextProps> = ({
  origin = 'ai', note = false, sourceRef, interactive = false, children, style, ...rest
}) => {
  const tint = origin === 'human' ? 'var(--prov-human-tint)' : origin === 'ai' ? 'var(--prov-ai-tint)' : 'var(--prov-edited-tint)';
  const base: React.CSSProperties = {
    background: tint,
    borderBottom: '2px solid',
    borderColor: origin === 'human' ? 'var(--prov-human)' : origin === 'ai' ? 'var(--prov-ai)' : 'transparent',
    paddingBottom: 1,
    borderRadius: 2,
    cursor: interactive ? 'pointer' : undefined,
  };
  if (origin === 'ai_edited') {
    base.borderImage = 'linear-gradient(90deg, var(--prov-ai), var(--prov-human)) 1';
    base.borderImageWidth = '0 0 2px 0';
  }
  return (
    <span style={{ ...base, ...style }} {...rest}>
      {children}
      {sourceRef && (
        <sup style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65em', color: 'var(--prov-human)', fontWeight: 600 }}>
          &nbsp;{sourceRef}
        </sup>
      )}
      {note && (
        <span title="has a note" style={{
          display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
          background: 'var(--prov-human)', verticalAlign: 'super', marginLeft: 2,
        }} />
      )}
    </span>
  );
};

export default AttributionText;
