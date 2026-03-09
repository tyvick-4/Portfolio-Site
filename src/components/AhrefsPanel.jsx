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
    border: '1px solid rgba(88,101,242,0.4)',
    borderRadius: '10px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    background: 'linear-gradient(135deg, rgba(88,101,242,0.08) 0%, rgba(88,101,242,0.03) 100%)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{
        width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
        backgroundColor: 'rgba(88,101,242,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Search size={18} style={{ color: '#5865F2' }} />
      </div>
      <div>
        <div style={{ fontSize: '14px', fontWeight: '700', color: '#F2F3F5', marginBottom: '2px' }}>
          Organic Search — Your Untapped Referrer
        </div>
        <div style={{ fontSize: '12px', color: '#80848E' }}>
          SEO data not connected · See how to unlock this below
        </div>
      </div>
    </div>

    <div style={{ fontSize: '13px', color: '#80848E', lineHeight: '1.7' }}>
      When your invite link is shared on content that ranks in Google — a Reddit thread,
      YouTube video description, or a blog post — those clicks appear as referrals in your
      Insights <strong style={{ color: '#B5BAC1' }}>Most Popular Referrers</strong> table.
      As this data shows, those referrals consistently deliver 3–4× better 1-week retention
      than Server Discovery joins. Connect Ahrefs to see which search terms are already
      driving organic traffic to pages that link to your server.
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        { icon: '🔎', text: 'Which Google keywords send members to your server via Reddit or YouTube' },
        { icon: '📈', text: 'Which external pages rank for your community\'s topics and link to you' },
        { icon: '⚡', text: 'Where to create or contribute content to grow your organic referral channel' },
      ].map(({ icon, text }) => (
        <div key={text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>{icon}</span>
          <span style={{ fontSize: '12px', color: '#80848E', lineHeight: '1.5' }}>{text}</span>
        </div>
      ))}
    </div>

    <div style={{
      padding: '8px 14px',
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
        <SectionHeader icon={Search} title="Keywords Driving Organic Referrals to Your Server" />
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

      {/* Section 2: Organic vs Discovery quality gap narrative */}
      <div>
        <SectionHeader icon={TrendingUp} title="Why Organic Referrers Beat Server Discovery" />
        <div style={{
          backgroundColor: 'rgba(87,242,135,0.06)',
          border: '1px solid rgba(87,242,135,0.2)',
          borderRadius: '8px',
          padding: '16px 18px',
          fontSize: '13px',
          lineHeight: '1.7',
          color: '#B5BAC1',
        }}>
          The keyword <strong style={{ color: '#F2F3F5' }}>"{narrativeKeyword}"</strong>{' '}
          attracts ~<strong style={{ color: '#57F287' }}>{narrativeVolume}</strong> searches per month
          from people already interested in this topic. When they find an external page
          containing your invite link, they arrive with intent — not just browsing.
          That's why these referrals show{' '}
          <strong style={{ color: '#57F287' }}>3–4× higher 1-week retention</strong> compared
          to Server Discovery's <strong style={{ color: '#ED4245' }}>{discoveryRetention}%</strong>.
          In your Insights <strong style={{ color: '#B5BAC1' }}>Most Popular Referrers</strong> table,
          these organic sources will stand out as your highest-quality acquisition channel.
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
            Organic Search Intelligence
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
