import React from 'react';
import { ExternalLink, TrendingUp, Search, Link2 } from 'lucide-react';

// Position badge: green ≤10, yellow 11–30, red 31+
const PositionBadge = ({ position }) => {
  const color =
    position <= 10 ? { bg: 'rgba(87,242,135,0.15)', text: '#57F287', border: '#57F28733' }
    : position <= 30 ? { bg: 'rgba(254,231,92,0.12)', text: '#FEE75C', border: '#FEE75C33' }
    : { bg: 'rgba(237,66,69,0.12)', text: '#ED4245', border: '#ED424533' };

  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: '700',
      backgroundColor: color.bg,
      color: color.text,
      border: `1px solid ${color.border}`,
      minWidth: '32px',
      textAlign: 'center',
    }}>
      #{position}
    </span>
  );
};

const SectionHeader = ({ icon: Icon, title }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  }}>
    <Icon size={14} style={{ color: '#5865F2' }} />
    <span style={{
      fontSize: '11px',
      fontWeight: '700',
      color: '#80848E',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
    }}>
      {title}
    </span>
  </div>
);

// ─── Placeholder state (no Ahrefs data connected) ───────────────────────────

const AhrefsPlaceholder = () => (
  <div style={{
    border: '1px solid #5865F2',
    borderRadius: '10px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgba(88,101,242,0.08) 0%, rgba(88,101,242,0.03) 100%)',
  }}>
    <div style={{
      width: '44px',
      height: '44px',
      borderRadius: '10px',
      backgroundColor: 'rgba(88,101,242,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Search size={20} style={{ color: '#5865F2' }} />
    </div>
    <div>
      <div style={{ fontSize: '14px', fontWeight: '700', color: '#F2F3F5', marginBottom: '6px' }}>
        Ahrefs Data Not Connected
      </div>
      <div style={{ fontSize: '13px', color: '#80848E', lineHeight: '1.6', maxWidth: '380px' }}>
        Connect the Ahrefs API to populate this panel with live organic keyword data for{' '}
        <span style={{ color: '#5865F2', fontWeight: '500' }}>discord.com/servers</span> —
        including top ranking keywords, monthly search volumes, and domain authority signals.
      </div>
    </div>
    <div style={{
      marginTop: '4px',
      padding: '8px 16px',
      backgroundColor: 'rgba(88,101,242,0.12)',
      borderRadius: '6px',
      fontSize: '12px',
      color: '#80848E',
      fontFamily: 'monospace',
    }}>
      Pass <code style={{ color: '#5865F2' }}>ahrefsData</code> prop or update{' '}
      <code style={{ color: '#B5BAC1' }}>src/data/mockAhrefsData.js</code>
    </div>
  </div>
);

// ─── Populated state ─────────────────────────────────────────────────────────

const AhrefsPopulated = ({ data, discoveryRetention }) => {
  const topKeyword = data.topOrganicKeywords?.[0];
  const narrativeVolume = topKeyword?.volume?.toLocaleString() ?? '—';
  const narrativeKeyword = topKeyword?.keyword ?? '—';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* DR + Traffic summary pills */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {[
          { label: 'Domain Rating', value: data.domainRating, suffix: '/100' },
          { label: 'Est. Monthly Organic', value: data.organicTrafficEstimate?.toLocaleString(), suffix: ' visits' },
        ].map(({ label, value, suffix }) => (
          <div key={label} style={{
            backgroundColor: '#1E1F22',
            borderRadius: '8px',
            padding: '10px 16px',
            flex: '1',
          }}>
            <div style={{ fontSize: '11px', color: '#80848E', marginBottom: '4px' }}>{label}</div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#5865F2' }}>
              {value}<span style={{ fontSize: '13px', color: '#80848E' }}>{suffix}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Section 1: Top Keywords */}
      <div>
        <SectionHeader icon={Search} title="Top Server Discovery Keywords" />
        <div style={{
          backgroundColor: '#1E1F22',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Keyword', 'Pos.', 'Volume / mo', 'URL', 'KD'].map(col => (
                  <th key={col} style={{
                    padding: '10px 14px',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#80848E',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(data.topOrganicKeywords || []).map((kw, i) => (
                <tr
                  key={kw.keyword}
                  style={{
                    borderBottom: i < data.topOrganicKeywords.length - 1
                      ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <td style={{ padding: '10px 14px', fontSize: '13px', color: '#F2F3F5' }}>
                    {kw.keyword}
                  </td>
                  <td style={{ padding: '10px 14px' }}>
                    <PositionBadge position={kw.position} />
                  </td>
                  <td style={{ padding: '10px 14px', fontSize: '13px', color: '#B5BAC1' }}>
                    {kw.volume?.toLocaleString()}
                  </td>
                  <td style={{ padding: '10px 14px', fontSize: '12px', color: '#80848E', fontFamily: 'monospace' }}>
                    {kw.url}
                  </td>
                  <td style={{ padding: '10px 14px', fontSize: '13px', color: '#B5BAC1' }}>
                    {kw.difficulty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Discovery Traffic Quality Gap narrative */}
      <div>
        <SectionHeader icon={TrendingUp} title="Discovery Traffic Quality Gap" />
        <div style={{
          backgroundColor: 'rgba(120,53,15,0.25)',
          border: '1px solid rgba(245,158,11,0.3)',
          borderRadius: '8px',
          padding: '16px 18px',
          fontSize: '13px',
          lineHeight: '1.7',
          color: '#B5BAC1',
        }}>
          The keyword{' '}
          <strong style={{ color: '#F2F3F5' }}>"{narrativeKeyword}"</strong>{' '}
          drives ~<strong style={{ color: '#FEE75C' }}>{narrativeVolume}</strong> monthly
          searches to <code style={{ color: '#5865F2', fontSize: '12px' }}>discord.com/servers</code> —
          but Server Discovery members convert at only{' '}
          <strong style={{ color: '#ED4245' }}>{discoveryRetention}% D7 retention</strong>.
          External content ranking for these terms pre-qualifies users before arrival,
          producing 3–4× higher engagement per join than discovery browse.
        </div>
      </div>

      {/* Section 3: Top Ranking Pages */}
      <div>
        <SectionHeader icon={Link2} title="Top Ranking Pages" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {(data.topPages || []).map(page => (
            <div key={page.url} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#1E1F22',
              borderRadius: '6px',
              padding: '10px 14px',
              gap: '12px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                <ExternalLink size={12} style={{ color: '#5865F2', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: '#80848E', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {page.url}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <span style={{ fontSize: '12px', color: '#B5BAC1' }}>
                  {page.traffic?.toLocaleString()} visits/mo
                </span>
                <span style={{
                  fontSize: '11px',
                  color: '#5865F2',
                  backgroundColor: 'rgba(88,101,242,0.12)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                }}>
                  {page.topKeyword}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

// ─── Main export ─────────────────────────────────────────────────────────────

const AhrefsPanel = ({ data = null, discoveryRetention = 22 }) => {
  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: '700',
            color: '#80848E',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            Ahrefs SEO Intelligence
          </div>
          <span style={{
            fontSize: '10px',
            fontWeight: '600',
            color: data ? '#57F287' : '#80848E',
            backgroundColor: data ? 'rgba(87,242,135,0.1)' : 'rgba(255,255,255,0.06)',
            padding: '2px 8px',
            borderRadius: '10px',
          }}>
            {data ? '● Live' : '○ Not connected'}
          </span>
        </div>
      </div>

      {data ? (
        <AhrefsPopulated data={data} discoveryRetention={discoveryRetention} />
      ) : (
        <AhrefsPlaceholder />
      )}
    </div>
  );
};

export default AhrefsPanel;
