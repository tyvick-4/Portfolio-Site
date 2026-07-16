import React from 'react';

interface TrustReceiptProps extends React.HTMLAttributes<HTMLSpanElement> {
  versions: number;
  /** Percent of final words human-written or human-edited. */
  humanPct: number;
  interventions: number;
  fromPrompt?: boolean;
}

/** The one-line authorship summary a piece carries with it: a nutrition label
    for authorship. Numbers come from real provenance data, never invented. */
const TrustReceipt: React.FC<TrustReceiptProps> = ({ versions, humanPct, interventions, fromPrompt = true, style, ...rest }) => {
  const Dot = () => <span style={{ opacity: 0.5 }}>·</span>;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
      fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)', ...style,
    }} {...rest}>
      <span style={{ color: 'var(--prov-human)', fontSize: '0.85rem' }}>◈</span>
      <span><b style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{versions} versions</b></span><Dot />
      <span><b style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{humanPct}%</b> human-written or edited</span><Dot />
      <span><b style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{interventions}</b> interventions</span>
      {fromPrompt && (<><Dot /><span>started from a prompt →</span></>)}
    </span>
  );
};

export default TrustReceipt;
