import React, { useState } from 'react';
import AttributionText from '../components/provenance/AttributionText';
import TrustReceipt from '../components/provenance/TrustReceipt';
import ProvenanceBar from '../components/provenance/ProvenanceBar';
import RedlineDiff from '../components/provenance/RedlineDiff';
import VersionRail from '../components/provenance/VersionRail';
import AnnotationNote from '../components/provenance/AnnotationNote';
import PromptCard from '../components/provenance/PromptCard';
import SourceChip from '../components/provenance/SourceChip';
import { diffWords, wc } from '../components/provenance/diff';
import type { ProvenanceDoc, ReadingMode, Span } from '../components/provenance/types';
import { ESSAYS } from '../content/writing';
import SEO from '../components/SEO';

interface OpenNote {
  span: Span;
  x: number;
  y: number;
}

const Legend: React.FC<{ doc: ProvenanceDoc }> = ({ doc }) => {
  const { share } = doc.receipt;
  const needsCheck = Object.keys(doc.sources).find(k => doc.sources[k].status === 'needs-check');
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-label)', color: 'var(--text-muted)' }}>
      <span><span style={{ display: 'inline-block', width: 13, height: 4, borderRadius: 2, background: 'var(--prov-human)', marginRight: 6, verticalAlign: 'middle' }} />Human {share.human}%</span>
      <span><span style={{ display: 'inline-block', width: 13, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, var(--prov-ai), var(--prov-human))', marginRight: 6, verticalAlign: 'middle' }} />AI, edited {share.aiEdited}%</span>
      <span><span style={{ display: 'inline-block', width: 13, height: 4, borderRadius: 2, background: 'var(--prov-ai)', marginRight: 6, verticalAlign: 'middle' }} />AI {share.ai}%</span>
      {needsCheck && (
        <>
          <span style={{ opacity: 0.5 }}>·</span>
          <SourceChip id={needsCheck} origin={doc.sources[needsCheck].origin} status="needs-check" />
        </>
      )}
    </div>
  );
};

const WritingPage: React.FC = () => {
  const [docIdx, setDocIdx] = useState(0);
  const DOC = ESSAYS[docIdx];
  const lastVersion = DOC.versions[DOC.versions.length - 1].id;
  const [mode, setMode] = useState<ReadingMode>('Read');
  const [sel, setSel] = useState(lastVersion);
  const [note, setNote] = useState<OpenNote | null>(null);

  const switchEssay = (idx: number) => {
    setDocIdx(idx);
    setMode('Read');
    setSel(ESSAYS[idx].versions[ESSAYS[idx].versions.length - 1].id);
    setNote(null);
  };

  const article = (withAttribution: boolean) => (
    <div className="max-w-2xl mx-auto">
      {DOC.blocks.map(b => (
        <p key={b.id} className="mb-7" style={{ fontSize: 'var(--text-body-lg)', lineHeight: 1.75, color: 'var(--text)' }}>
          {b.spans.map((sp, i) => withAttribution ? (
            <React.Fragment key={i}>
              <AttributionText
                origin={sp.origin} note={!!sp.ann} sourceRef={sp.src} interactive={!!sp.ann}
                onClick={sp.ann ? (e => { e.stopPropagation(); setNote({ span: sp, x: e.clientX, y: e.clientY }); }) : undefined}
              >
                {sp.text}
              </AttributionText>{' '}
            </React.Fragment>
          ) : <span key={i}>{sp.text} </span>)}
        </p>
      ))}
    </div>
  );

  const history = () => {
    const idx = DOC.versions.findIndex(v => v.id === sel);
    const v = DOC.versions[idx];
    const prev = idx > 0 ? DOC.versions[idx - 1] : undefined;
    return (
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[250px_minmax(0,1fr)]">
        <VersionRail versions={DOC.versions} selected={sel} onSelect={setSel} />
        <div className="flex flex-col gap-5">
          {v.prompt ? (
            <PromptCard author={DOC.meta.author} ts={v.ts}>{v.prompt}</PromptCard>
          ) : prev && prev.prompt ? (
            <RedlineDiff
              label={`${v.id} · first draft, generated from the prompt`}
              parts={[{ t: 'ins', text: Object.values(v.paras || {}).join('\n\n') }]}
              insWords={Object.values(v.paras || {}).reduce((s, t) => s + wc(t), 0)}
            />
          ) : prev && prev.paras && v.paras ? (
            [...new Set([...(prev.order || []), ...(v.order || [])])].map((pid, k) => {
              const a = prev.paras![pid], b = v.paras![pid];
              if (a === b) return null;
              if (a !== undefined && b === undefined)
                return <RedlineDiff key={pid} label={`¶${k + 1} · paragraph cut`} parts={[{ t: 'del', text: a }]} delWords={wc(a)} />;
              if (a === undefined)
                return <RedlineDiff key={pid} label={`¶${k + 1} · paragraph added`} parts={[{ t: 'ins', text: b }]} insWords={wc(b)} />;
              const parts = diffWords(a, b);
              const eqW = parts.filter(p => p.t === 'eq').reduce((s, p) => s + wc(p.text), 0);
              const delW = parts.filter(p => p.t === 'del').reduce((s, p) => s + wc(p.text), 0);
              const insW = parts.filter(p => p.t === 'ins').reduce((s, p) => s + wc(p.text), 0);
              const rewrite = eqW / Math.max(1, Math.max(wc(a), wc(b))) < 0.4;
              return (
                <RedlineDiff
                  key={pid}
                  label={`¶${k + 1} · ${rewrite ? 'rewritten' : 'revised'}`}
                  parts={rewrite ? [{ t: 'del', text: a + ' ' }, { t: 'ins', text: b }] : parts}
                  delWords={delW} insWords={insW}
                />
              );
            })
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div onClick={() => setNote(null)}>
      <SEO
        title="Writing | Tyler Vickers"
        description="Essays published with their full revision history: the prompt, every draft, redlines, and where the human intervened."
      />
      <div className="page-container pt-16 pb-10">
        {ESSAYS.length > 1 && <div className="max-w-2xl mx-auto mb-8 flex flex-wrap gap-2">
          {ESSAYS.map((e, i) => (
            <button key={e.meta.title} onClick={() => switchEssay(i)} style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-ui)', fontWeight: 500, padding: '5px 14px',
              borderRadius: 'var(--radius-pill)', cursor: 'pointer',
              border: '1px solid ' + (i === docIdx ? 'var(--accent)' : 'var(--border-strong)'),
              background: i === docIdx ? 'var(--accent-soft)' : 'transparent',
              color: i === docIdx ? 'var(--accent)' : 'var(--text-muted)',
            }}>{e.meta.title}</button>
          ))}
        </div>}
        <div className="max-w-2xl mx-auto border-b border-line pb-8 mb-10">
          <p className="eyebrow text-accent mb-4">
            Essay · Writing, with receipts
          </p>
          <h1 className="text-display-2 mb-3">{DOC.meta.title}</h1>
          <p className="font-mono text-label text-faint">
            {DOC.meta.author} · {DOC.meta.published} · {DOC.meta.readingMinutes} min read
          </p>
          <p className="mt-5 text-small text-muted">
            This piece is published with its provenance: the prompt that seeded it, every draft, and
            redlines showing where I pushed back. Switch modes in the bar below.
          </p>
        </div>
        <div className="pb-24">
          {mode === 'History' ? history() : article(mode === 'Provenance')}
        </div>
      </div>

      {note && (
        <div
          style={{ position: 'fixed', left: Math.min(note.x, window.innerWidth - 380), top: Math.min(note.y + 10, window.innerHeight - 220), zIndex: 50 }}
          onClick={e => e.stopPropagation()}
        >
          <AnnotationNote type={note.span.annType} versionRef={note.span.annV} body={note.span.ann || ''} onClose={() => setNote(null)} />
        </div>
      )}

      <ProvenanceBar sticky mode={mode} onModeChange={m => { setMode(m); setNote(null); }}>
        {mode === 'Provenance' ? <Legend doc={DOC} /> : <TrustReceipt versions={DOC.receipt.versions} humanPct={DOC.receipt.humanPct} interventions={DOC.receipt.interventions} />}
      </ProvenanceBar>
    </div>
  );
};

export default WritingPage;
