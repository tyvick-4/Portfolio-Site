import React, { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, Minus, ChevronRight, Users, BarChart2, Globe } from 'lucide-react';
import ViewToggle from './ViewToggle';
import InsightCallout from './InsightCallout';
import AhrefsPanel from './AhrefsPanel';
import AIOverviewOpportunity from './AIOverviewOpportunity';
import QualityBadge from './QualityBadge';

// ─── Helpers ────────────────────────────────────────────────────────────────

const TrendIcon = ({ trend }) => {
  if (trend === 'up')   return <TrendingUp   size={13} style={{ color: '#57F287' }} />;
  if (trend === 'down') return <TrendingDown size={13} style={{ color: '#ED4245' }} />;
  return <Minus size={13} style={{ color: '#80848E' }} />;
};

const RetentionCell = ({ value }) => {
  const color =
    value >= 60 ? '#57F287'
    : value >= 40 ? '#FEE75C'
    : '#ED4245';
  return (
    <span style={{ fontWeight: '600', color }}>
      {value}%
    </span>
  );
};

const ColHeader = ({ children, align = 'left' }) => (
  <th style={{
    padding: '10px 16px',
    textAlign: align,
    fontSize: '11px',
    fontWeight: '700',
    color: '#80848E',
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    whiteSpace: 'nowrap',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  }}>
    {children}
  </th>
);

const Cell = ({ children, align = 'left', muted = false }) => (
  <td style={{
    padding: '13px 16px',
    textAlign: align,
    fontSize: '13px',
    color: muted ? '#80848E' : '#B5BAC1',
    verticalAlign: 'middle',
  }}>
    {children}
  </td>
);

// ─── Row highlight logic ────────────────────────────────────────────────────

const getRowStyle = (source, view) => {
  if (view !== 'quality') return {};
  if (source.variant === 'warning')  return { backgroundColor: 'rgba(120,53,15,0.28)' };
  if (source.variant === 'positive') return { backgroundColor: 'rgba(20,83,45,0.22)' };
  if (source.id === 'reddit')        return { backgroundColor: 'rgba(20,83,45,0.16)' };
  return {};
};

// ─── Main Component ─────────────────────────────────────────────────────────

const ServerInsightsReferralQuality = ({
  trafficSources = [],
  ahrefsData = null,
}) => {
  const [view, setView] = useState('quality');

  const discoveryRow = useMemo(
    () => trafficSources.find(s => s.id === 'discovery'),
    [trafficSources]
  );

  const sorted = useMemo(() => {
    const copy = [...trafficSources];
    if (view === 'volume')  copy.sort((a, b) => b.joins30d - a.joins30d);
    if (view === 'quality') copy.sort((a, b) => b.qualityScore - a.qualityScore);
    return copy;
  }, [trafficSources, view]);

  const totalJoins = trafficSources.reduce((sum, s) => sum + s.joins30d, 0);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Nunito', sans-serif",
      backgroundColor: '#313338',
      minHeight: '100vh',
      color: '#F2F3F5',
      padding: '32px',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>

        {/* ── Breadcrumb ── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#80848E' }}>
          <span>Server Insights</span>
          <ChevronRight size={13} />
          <span>Growth &amp; Activation</span>
          <ChevronRight size={13} />
          <span style={{ color: '#5865F2', fontWeight: '600' }}>Referral Quality</span>
        </nav>

        {/* ── Header Row ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: '700', margin: 0 }}>
                Referral Quality
              </h1>
            </div>
            <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#80848E', lineHeight: '1.5', maxWidth: '480px' }}>
              Which invite sources bring members who actually stick around and participate?
              Extends your <span style={{ color: '#B5BAC1', fontWeight: '500' }}>Growth &amp; Activation</span> data with retention and communicator metrics per source.
            </p>
            {/* Server badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#2B2D31',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: '5px 12px 5px 8px',
              fontSize: '13px',
            }}>
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: '#FF4655',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
              }}>
                🎯
              </div>
              <span style={{ fontWeight: '600', color: '#F2F3F5' }}>VALORANT Community</span>
              <span style={{ color: '#80848E' }}>·</span>
              <Users size={12} style={{ color: '#80848E' }} />
              <span style={{ color: '#80848E' }}>847K members</span>
            </div>
          </div>

          <ViewToggle view={view} onChange={setView} />
        </div>

        {/* ── Admin context banner ── */}
        <div style={{
          backgroundColor: '#2B2D31',
          border: '1px solid rgba(88,101,242,0.25)',
          borderRadius: '10px',
          padding: '16px 20px',
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>
          <div style={{ display: 'flex', gap: '12px', flex: '1', minWidth: '260px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
              backgroundColor: 'rgba(88,101,242,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <BarChart2 size={15} style={{ color: '#5865F2' }} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#F2F3F5', marginBottom: '3px' }}>
                Growth &amp; Activation — extended view
              </div>
              <div style={{ fontSize: '12px', color: '#80848E', lineHeight: '1.55' }}>
                Your Insights dashboard already shows new member joins by source.
                This view adds <strong style={{ color: '#B5BAC1' }}>1-week retention</strong> and <strong style={{ color: '#B5BAC1' }}>communicator rate</strong> per source
                — so you can see which channels bring members who come back and actually talk.
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flex: '1', minWidth: '260px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
              backgroundColor: 'rgba(87,242,135,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Globe size={15} style={{ color: '#57F287' }} />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#F2F3F5', marginBottom: '3px' }}>
                Most Popular Referrers — what's driving quality
              </div>
              <div style={{ fontSize: '12px', color: '#80848E', lineHeight: '1.55' }}>
                When your invite link is shared on indexed content — Reddit threads, YouTube
                descriptions, blog posts — those joins appear as <strong style={{ color: '#B5BAC1' }}>organic referrals</strong> in Insights.
                These referrers consistently outperform Server Discovery for long-term retention.
              </div>
            </div>
          </div>
        </div>

        {/* ── Summary chips ── */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { label: 'New Members (30d)', value: totalJoins.toLocaleString() },
            { label: 'Avg 1-Week Retention', value: `${Math.round(trafficSources.reduce((s, r) => s + r.retention7d * r.joins30d, 0) / totalJoins)}%` },
            { label: 'Sources Tracked', value: trafficSources.length },
          ].map(({ label, value }) => (
            <div key={label} style={{
              backgroundColor: '#2B2D31',
              borderRadius: '8px',
              padding: '12px 18px',
              flex: '1',
              minWidth: '140px',
            }}>
              <div style={{ fontSize: '11px', color: '#80848E', marginBottom: '4px' }}>{label}</div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#5865F2' }}>{value}</div>
            </div>
          ))}
        </div>

        {/* ── Data Table ── */}
        <div style={{ backgroundColor: '#2B2D31', borderRadius: '10px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <ColHeader>Invite Source</ColHeader>
                <ColHeader align="right">New Members (30d)</ColHeader>
                {view === 'volume' && (
                  <ColHeader align="right">Share of Joins</ColHeader>
                )}
                {view === 'quality' && (
                  <>
                    <ColHeader align="right">1-Week Retention</ColHeader>
                    <ColHeader align="right">Communicators (Avg Msgs)</ColHeader>
                    <ColHeader align="right">Friends-Driven</ColHeader>
                    <ColHeader align="right">Quality Score</ColHeader>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {sorted.map((source, i) => {
                const rowStyle = getRowStyle(source, view);
                const sharePct = Math.round((source.joins30d / totalJoins) * 100);
                const isLast = i === sorted.length - 1;
                return (
                  <tr
                    key={source.id}
                    style={{
                      ...rowStyle,
                      borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.04)',
                      transition: 'background-color 0.1s ease',
                    }}
                  >
                    {/* Source label + trend */}
                    <Cell>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <TrendIcon trend={source.trend} />
                        <span style={{ color: '#F2F3F5', fontWeight: '500' }}>
                          {source.label}
                        </span>
                        {source.variant === 'warning' && view === 'quality' && (
                          <span style={{
                            fontSize: '10px',
                            backgroundColor: 'rgba(245,158,11,0.15)',
                            color: '#F59E0B',
                            border: '1px solid rgba(245,158,11,0.3)',
                            borderRadius: '4px',
                            padding: '1px 6px',
                            fontWeight: '600',
                          }}>
                            ⚠ High volume, low quality
                          </span>
                        )}
                        {source.variant === 'positive' && view === 'quality' && (
                          <span style={{
                            fontSize: '10px',
                            backgroundColor: 'rgba(87,242,135,0.12)',
                            color: '#57F287',
                            border: '1px solid rgba(87,242,135,0.25)',
                            borderRadius: '4px',
                            padding: '1px 6px',
                            fontWeight: '600',
                          }}>
                            ★ Best quality
                          </span>
                        )}
                      </div>
                    </Cell>

                    {/* Joins */}
                    <Cell align="right">
                      <span style={{ fontWeight: '600', color: '#F2F3F5' }}>
                        {source.joins30d.toLocaleString()}
                      </span>
                    </Cell>

                    {/* Volume view: share bar */}
                    {view === 'volume' && (
                      <Cell align="right">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
                          <div style={{ width: '80px', height: '6px', backgroundColor: '#1E1F22', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{
                              width: `${sharePct}%`,
                              height: '100%',
                              backgroundColor: source.id === 'discovery' ? '#5865F2' : '#5865F280',
                              borderRadius: '3px',
                              transition: 'width 0.3s ease',
                            }} />
                          </div>
                          <span style={{ fontSize: '12px', color: '#80848E', minWidth: '32px', textAlign: 'right' }}>
                            {sharePct}%
                          </span>
                        </div>
                      </Cell>
                    )}

                    {/* Quality view: retention + msgs + friends + badge */}
                    {view === 'quality' && (
                      <>
                        <Cell align="right">
                          <RetentionCell value={source.retention7d} />
                        </Cell>
                        <Cell align="right">
                          <span style={{ color: '#B5BAC1' }}>{source.avgMessages.toFixed(1)}</span>
                        </Cell>
                        <Cell align="right">
                          <span style={{ color: '#B5BAC1' }}>{source.friendsPct}%</span>
                        </Cell>
                        <Cell align="right">
                          <QualityBadge score={source.qualityScore} />
                        </Cell>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ── Insight Callouts (Quality view only) ── */}
        {view === 'quality' && (
          <>
            <InsightCallout
              variant="warning"
              title="The Discovery Paradox — Your Biggest Source Is Your Weakest"
              body="Server Discovery drives 3,100 new members — your top source by volume. But at 22% 1-week retention and 2.1 avg messages per member, it sits far below Discord's benchmark of 30% communicator rate for a healthy server. Meanwhile YouTube referrals retain at 83% — members who arrive from specific content come already invested, not just browsing."
            />
            <InsightCallout
              variant="tip"
              title="Organic Search Referrals Outperform on Every Quality Signal"
              body="When a Reddit thread, YouTube video description, or blog post containing your invite link ranks in Google search, those clicks appear in your Most Popular Referrers as organic referrals. This data shows they retain 3–4× better than Server Discovery joins. Growing your footprint on indexed content is the highest-leverage path to improving your activation and retention numbers in Insights."
            />
          </>
        )}

        {/* ── Ahrefs Panel ── */}
        <div style={{ backgroundColor: '#2B2D31', borderRadius: '10px', padding: '24px' }}>
          <AhrefsPanel
            data={ahrefsData}
            discoveryRetention={discoveryRow?.retention7d ?? 22}
          />
        </div>

        {/* ── AI Overview Opportunity Panel ── */}
        <div style={{ backgroundColor: '#2B2D31', borderRadius: '10px', padding: '24px' }}>
          <AIOverviewOpportunity />
        </div>

        {/* ── Footer ── */}
        <div style={{ fontSize: '12px', color: '#80848E', textAlign: 'center', paddingBottom: '16px', lineHeight: '1.7' }}>
          Data window: last 30 days · Available to Community Servers with 500+ members ·{' '}
          Quality Score = composite of 1-week retention, communicator rate (avg messages/member), and friends-driven % ·{' '}
          <span style={{ color: '#5865F2' }}>Server Insights</span>
        </div>

      </div>
    </div>
  );
};

export default ServerInsightsReferralQuality;
