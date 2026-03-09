import React, { useState } from 'react';
import { Zap, TrendingUp, ChevronDown, ChevronUp, BarChart2 } from 'lucide-react';

// ─── Section header (shared style) ──────────────────────────────────────────

const SectionHeader = ({ icon: Icon, title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
    <Icon size={14} style={{ color: '#5865F2' }} />
    <span style={{
      fontSize: '11px', fontWeight: '700', color: '#80848E',
      textTransform: 'uppercase', letterSpacing: '0.08em',
    }}>
      {title}
    </span>
  </div>
);

// ─── Citation share bar ──────────────────────────────────────────────────────

const CitationBar = ({ label, pct, color, note }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span style={{ fontSize: '13px', fontWeight: '600', color: '#F2F3F5' }}>{label}</span>
      <span style={{ fontSize: '18px', fontWeight: '700', color }}>{pct}</span>
    </div>
    <div style={{ height: '8px', backgroundColor: '#1E1F22', borderRadius: '4px', overflow: 'hidden' }}>
      <div style={{
        width: pct,
        height: '100%',
        backgroundColor: color,
        borderRadius: '4px',
        transition: 'width 0.6s ease',
      }} />
    </div>
    {note && (
      <span style={{ fontSize: '11px', color: '#80848E' }}>{note}</span>
    )}
  </div>
);

// ─── Fan-out query visualizer ────────────────────────────────────────────────

const FAN_OUT_QUERIES = [
  { text: 'best valorant agents for beginners', covered: true },
  { text: 'valorant crosshair settings pros use', covered: true },
  { text: 'valorant ranked tips climbing', covered: true },
  { text: 'valorant map callouts guide', covered: true },
  { text: 'how to improve aim valorant', covered: true },
  { text: 'valorant economy guide buy rounds', covered: true },
  { text: 'valorant patch notes discussion', covered: true },
  { text: 'valorant team comps ranked', covered: true },
];

const FanOutVisualizer = ({ expanded, onToggle }) => (
  <div style={{
    backgroundColor: '#1E1F22',
    borderRadius: '8px',
    overflow: 'hidden',
  }}>
    {/* Seed query */}
    <div style={{
      padding: '12px 16px',
      backgroundColor: 'rgba(88,101,242,0.15)',
      borderBottom: '1px solid rgba(88,101,242,0.2)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }}>
      <Zap size={13} style={{ color: '#5865F2', flexShrink: 0 }} />
      <span style={{ fontSize: '12px', color: '#80848E', fontStyle: 'italic' }}>User prompt: </span>
      <span style={{ fontSize: '13px', fontWeight: '600', color: '#F2F3F5' }}>"valorant community tips and strategy"</span>
    </div>

    {/* Arrow + label */}
    <div style={{
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ width: '1px', height: '16px', backgroundColor: '#5865F2', marginLeft: '6px' }} />
      <span style={{ fontSize: '11px', color: '#80848E' }}>
        AI decomposes into <strong style={{ color: '#5865F2' }}>5–28 sub-queries</strong> simultaneously
        <span style={{ color: '#80848E', fontStyle: 'italic' }}> (reciprocal rank fusion scoring)</span>
      </span>
    </div>

    {/* Sub-queries grid */}
    <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {(expanded ? FAN_OUT_QUERIES : FAN_OUT_QUERIES.slice(0, 4)).map((q, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
            backgroundColor: q.covered ? '#57F287' : '#ED4245',
          }} />
          <span style={{ fontSize: '12px', color: q.covered ? '#B5BAC1' : '#80848E', fontFamily: 'monospace' }}>
            {q.text}
          </span>
          {q.covered && (
            <span style={{
              fontSize: '10px', color: '#57F287',
              backgroundColor: 'rgba(87,242,135,0.1)',
              padding: '1px 6px', borderRadius: '3px',
              marginLeft: 'auto', flexShrink: 0,
            }}>
              ✓ covered by Forum Channel
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Toggle */}
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        fontSize: '11px',
        color: '#80848E',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
    >
      {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
      {expanded ? 'Show less' : `Show all ${FAN_OUT_QUERIES.length} sub-queries`}
    </button>
  </div>
);

// ─── Topic hub vs keyword pages comparison ───────────────────────────────────

const ComparisonColumn = ({ label, accent, metric1, label1, metric2, label2, note }) => (
  <div style={{
    flex: 1,
    backgroundColor: '#1E1F22',
    borderRadius: '8px',
    padding: '16px',
    border: `1px solid ${accent}22`,
  }}>
    <div style={{
      fontSize: '11px', fontWeight: '700', color: accent,
      textTransform: 'uppercase', letterSpacing: '0.08em',
      marginBottom: '14px',
    }}>
      {label}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <div style={{ fontSize: '24px', fontWeight: '700', color: accent, lineHeight: '1.1' }}>{metric1}</div>
        <div style={{ fontSize: '11px', color: '#80848E', marginTop: '2px' }}>{label1}</div>
      </div>
      <div>
        <div style={{ fontSize: '24px', fontWeight: '700', color: accent, lineHeight: '1.1' }}>{metric2}</div>
        <div style={{ fontSize: '11px', color: '#80848E', marginTop: '2px' }}>{label2}</div>
      </div>
    </div>
    {note && (
      <div style={{ marginTop: '12px', fontSize: '11px', color: '#80848E', lineHeight: '1.5', fontStyle: 'italic' }}>
        {note}
      </div>
    )}
  </div>
);

// ─── Main export ─────────────────────────────────────────────────────────────

const AIOverviewOpportunity = () => {
  const [fanOutExpanded, setFanOutExpanded] = useState(false);

  return (
    <div>
      {/* Panel header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            fontSize: '11px', fontWeight: '700', color: '#80848E',
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            AI Overview Opportunity
          </div>
          <span style={{
            fontSize: '10px', fontWeight: '600', color: '#FEE75C',
            backgroundColor: 'rgba(254,231,92,0.1)',
            padding: '2px 8px', borderRadius: '10px',
          }}>
            ● 2026 North Star
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        {/* ── Section 1: Brand citation share ── */}
        <div>
          <SectionHeader icon={BarChart2} title="AI Overview Brand Citation Share" />

          <div style={{
            backgroundColor: '#1E1F22',
            borderRadius: '8px',
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <CitationBar
              label="Reddit"
              pct="21%"
              color="#FF4500"
              note="+450% AI Overview citations Mar→Jun 2025 · Cited in 21% of all Google AI Overviews"
            />
            <CitationBar
              label="Discord"
              pct="0%"
              color="#ED4245"
              note="Appears in 0% of Google AI Overviews despite 860M monthly visits"
            />

            <div style={{
              padding: '10px 14px',
              backgroundColor: 'rgba(254,231,92,0.07)',
              border: '1px solid rgba(254,231,92,0.2)',
              borderRadius: '6px',
              fontSize: '12px',
              color: '#B5BAC1',
              lineHeight: '1.6',
            }}>
              <strong style={{ color: '#FEE75C' }}>The new north star metric:</strong>{' '}
              % of relevant topic queries where a Discord community is cited in Google AI Overviews,
              Perplexity, or SearchGPT. Reddit ranks in{' '}
              <strong style={{ color: '#FF4500' }}>37%</strong> of Google top-10 results;
              Discord's current share is effectively zero — making this the largest
              organic acquisition gap in the platform.
            </div>
          </div>
        </div>

        {/* ── Section 2: Fan-out query strategy ── */}
        <div>
          <SectionHeader icon={Zap} title="How AI Search Works — The Fan-Out Query Strategy" />

          <div style={{
            fontSize: '13px', color: '#80848E', lineHeight: '1.65',
            marginBottom: '12px',
          }}>
            AI search engines (Google AIO, Perplexity, SearchGPT) don't execute one query — they
            decompose a single prompt into{' '}
            <strong style={{ color: '#F2F3F5' }}>5–28 sub-queries simultaneously</strong>.
            Pages cited across the most sub-queries win via{' '}
            <strong style={{ color: '#5865F2' }}>reciprocal rank fusion scoring</strong>.
            A Forum Channel naturally generates coverage across all of them — no content manufacturing needed.
          </div>

          <FanOutVisualizer
            expanded={fanOutExpanded}
            onToggle={() => setFanOutExpanded(v => !v)}
          />
        </div>

        {/* ── Section 3: Topic hub vs keyword pages ── */}
        <div>
          <SectionHeader icon={TrendingUp} title="Topic Hub vs. Keyword Pages — Coverage Comparison" />

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <ComparisonColumn
              label="1 Forum Channel (Topic Hub)"
              accent="#57F287"
              metric1="2,500+"
              label1="keywords ranked"
              metric2="473"
              label2="AI Overview appearances"
              note="Covers strategy, beginner, troubleshooting, news, and social angles simultaneously."
            />
            <ComparisonColumn
              label="60 Keyword-Targeted Pages"
              accent="#ED4245"
              metric1="266"
              label1="keywords ranked"
              metric2="~0"
              label2="AI Overview appearances"
              note="Single-topic pages miss the fan-out surface area AI search requires."
            />
          </div>

          <div style={{
            marginTop: '10px',
            fontSize: '11px', color: '#80848E', textAlign: 'right',
          }}>
            Source: Ahrefs Healthline analysis, March 2026
          </div>
        </div>

        {/* ── Structural advantage callout ── */}
        <div style={{
          backgroundColor: 'rgba(88,101,242,0.08)',
          border: '1px solid rgba(88,101,242,0.25)',
          borderRadius: '8px',
          padding: '16px 18px',
          fontSize: '13px',
          lineHeight: '1.7',
          color: '#B5BAC1',
        }}>
          <strong style={{ color: '#5865F2' }}>Discord's structural advantage:</strong>{' '}
          Communities naturally generate comprehensive fan-out coverage — strategy discussions,
          troubleshooting, social threads, news commentary, beginner guides. A single public Forum Channel
          covering a topic already contains the AI-citation surface area that 60+ separate keyword pages
          can't replicate. Enabling{' '}
          <strong style={{ color: '#F2F3F5' }}>DiscussionForumPosting</strong> structured data on public
          channels flips this from a gap to a moat.
        </div>

      </div>
    </div>
  );
};

export default AIOverviewOpportunity;
