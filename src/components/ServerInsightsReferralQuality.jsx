import React, { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, Minus, ChevronRight, Users } from 'lucide-react';
import ViewToggle from './ViewToggle';
import InsightCallout from './InsightCallout';
import AhrefsPanel from './AhrefsPanel';
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
          <span>Traffic Sources</span>
          <ChevronRight size={13} />
          <span style={{ color: '#5865F2', fontWeight: '600' }}>Referral Quality</span>
        </nav>

        {/* ── Header Row ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: '700', margin: 0 }}>
                Referral Quality Intelligence
              </h1>
            </div>
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

        {/* ── Summary chips ── */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { label: 'Total Joins (30d)', value: totalJoins.toLocaleString() },
            { label: 'Avg 7-Day Retention', value: `${Math.round(trafficSources.reduce((s, r) => s + r.retention7d * r.joins30d, 0) / totalJoins)}%` },
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
                <ColHeader>Source</ColHeader>
                <ColHeader align="right">Joins (30d)</ColHeader>
                {view === 'volume' && (
                  <ColHeader align="right">Volume Share</ColHeader>
                )}
                {view === 'quality' && (
                  <>
                    <ColHeader align="right">7-Day Retention</ColHeader>
                    <ColHeader align="right">Avg Msgs / Member</ColHeader>
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

        {/* ── Insight Callout (Quality view only) ── */}
        {view === 'quality' && (
          <InsightCallout
            variant="warning"
            title="Discovery Paradox Detected"
            body="Server Discovery drives 3,100 joins — your highest-volume source. But at 22% 7-day retention and 2.1 avg messages per member, it produces the lowest-quality members. YouTube referrals (83% retention) generate 3.8× more engaged members per join. External content pre-qualifies users before they arrive."
          />
        )}

        {/* ── Ahrefs Panel ── */}
        <div style={{ backgroundColor: '#2B2D31', borderRadius: '10px', padding: '24px' }}>
          <AhrefsPanel
            data={ahrefsData}
            discoveryRetention={discoveryRow?.retention7d ?? 22}
          />
        </div>

        {/* ── Footer ── */}
        <div style={{ fontSize: '12px', color: '#80848E', textAlign: 'center', paddingBottom: '16px' }}>
          Data window: last 30 days · Quality Score = composite of D7 retention, avg messages/member, and friends-driven % ·{' '}
          <span style={{ color: '#5865F2' }}>Server Insights beta</span>
        </div>

      </div>
    </div>
  );
};

export default ServerInsightsReferralQuality;
