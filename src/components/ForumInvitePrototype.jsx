import React, { useState } from 'react';
import { Search, Shield, CheckCircle, TrendingUp, Users, Zap, ExternalLink, MessageSquare, Heart, ChevronRight } from 'lucide-react';

// ─── Mock data — "Hollow Reach" indie RPG ────────────────────────────────────

const GAME = {
  name: 'Hollow Reach',
  tagline: 'Survival RPG · Early Access',
  members: 2847,
  online: 341,
  bannerGradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 40%, #1a2a4a 100%)',
  accentColor: '#a78bfa', // purple-ish game accent
  icon: '⚔️',
};

const FORUM_THREADS = [
  {
    id: 1,
    channel: 'Strategy & Builds',
    title: 'The Riftwalker build is actually broken in 1.4 🔥',
    author: 'grimveil_sk',
    replies: 47,
    reactions: 203,
    preview: 'Stacking shadow resistance with the new void blade synergy — tested 60+ runs, here\'s the full breakdown...',
    timeAgo: '2h ago',
    hot: true,
  },
  {
    id: 2,
    channel: 'New Player Help',
    title: 'Complete beginner\'s guide — everything I wish I knew',
    author: 'morwen_plays',
    replies: 89,
    reactions: 412,
    preview: 'After 200 hours I wrote this for my friends. Covers progression, early builds, and the mistakes everyone makes...',
    timeAgo: '1d ago',
    hot: false,
  },
  {
    id: 3,
    channel: 'Patch Notes Discussion',
    title: 'Patch 1.4 megathread — reactions & meta predictions',
    author: 'hollow_reach_mods',
    replies: 134,
    reactions: 891,
    preview: 'Official discussion thread. All balance changes, new content, and early community meta analysis here...',
    timeAgo: '3d ago',
    hot: false,
  },
];

const SEO_DATA = {
  topQueries: [
    { query: 'hollow reach riftwalker build guide', joins: 6, trend: 'up' },
    { query: 'hollow reach beginner tips patch 1.4', joins: 5, trend: 'up' },
    { query: 'hollow reach best early game strategy', joins: 3, trend: 'stable' },
  ],
  indexedPosts: 1247,
  schemaActive: true,
  externalJoinsThisWeek: 14,
  externalRetention7d: 71,
  discoveryRetention7d: 24,
};

const FORUM_SETUP = [
  { label: 'Forum Channels set to public', done: true },
  { label: 'DiscussionForumPosting schema active', done: true },
  { label: 'Content moderation filters configured', done: true },
  { label: 'Invite page forum highlights enabled', done: true },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <div style={{
    fontSize: '11px', fontWeight: '700', color: '#80848E',
    textTransform: 'uppercase', letterSpacing: '0.08em',
    marginBottom: '12px',
  }}>
    {children}
  </div>
);

const Card = ({ children, style = {} }) => (
  <div style={{
    backgroundColor: '#2B2D31',
    borderRadius: '10px',
    padding: '20px',
    ...style,
  }}>
    {children}
  </div>
);

// ─── Enriched Invite Page ─────────────────────────────────────────────────────

const ThreadPreview = ({ thread, accent }) => (
  <div style={{
    padding: '10px 14px',
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: '7px',
    borderLeft: `3px solid ${thread.hot ? accent : 'rgba(255,255,255,0.1)'}`,
    cursor: 'pointer',
    transition: 'background 0.15s',
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '3px' }}>
      <span style={{ fontSize: '10px', color: accent, fontWeight: '600' }}>#{thread.channel}</span>
      {thread.hot && (
        <span style={{ fontSize: '9px', color: '#F59E0B', backgroundColor: 'rgba(245,158,11,0.12)', padding: '1px 5px', borderRadius: '3px', fontWeight: '700' }}>
          HOT
        </span>
      )}
      <span style={{ fontSize: '10px', color: '#80848E', marginLeft: 'auto' }}>{thread.timeAgo}</span>
    </div>
    <div style={{ fontSize: '13px', fontWeight: '600', color: '#F2F3F5', marginBottom: '3px', lineHeight: '1.3' }}>
      {thread.title}
    </div>
    <div style={{ fontSize: '11px', color: '#80848E', lineHeight: '1.4', marginBottom: '6px' }}>
      {thread.preview.slice(0, 80)}…
    </div>
    <div style={{ display: 'flex', gap: '12px' }}>
      <span style={{ fontSize: '11px', color: '#80848E', display: 'flex', alignItems: 'center', gap: '3px' }}>
        <MessageSquare size={10} /> {thread.replies}
      </span>
      <span style={{ fontSize: '11px', color: '#80848E', display: 'flex', alignItems: 'center', gap: '3px' }}>
        <Heart size={10} /> {thread.reactions}
      </span>
      <span style={{ fontSize: '11px', color: '#80848E' }}>by {thread.author}</span>
    </div>
  </div>
);

const SEOLayerOverlay = ({ data, accent }) => (
  <div style={{
    backgroundColor: '#1E1F22',
    border: '1px solid rgba(88,101,242,0.4)',
    borderRadius: '10px',
    padding: '16px 18px',
    marginTop: '12px',
  }}>
    {/* Status row */}
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
      <span style={{
        fontSize: '11px', fontWeight: '700',
        color: '#57F287', backgroundColor: 'rgba(87,242,135,0.1)',
        padding: '3px 10px', borderRadius: '10px',
        display: 'flex', alignItems: 'center', gap: '4px',
      }}>
        <CheckCircle size={10} /> Indexed by Google
      </span>
      <span style={{
        fontSize: '11px', fontWeight: '700',
        color: '#5865F2', backgroundColor: 'rgba(88,101,242,0.12)',
        padding: '3px 10px', borderRadius: '10px',
      }}>
        DiscussionForumPosting schema: Active
      </span>
      <span style={{
        fontSize: '11px', fontWeight: '600', color: '#80848E',
        padding: '3px 10px', borderRadius: '10px',
        backgroundColor: 'rgba(255,255,255,0.05)',
      }}>
        {data.indexedPosts.toLocaleString()} posts indexed
      </span>
    </div>

    {/* Top search queries */}
    <div style={{ marginBottom: '14px' }}>
      <div style={{ fontSize: '11px', color: '#80848E', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Search size={10} /> Top queries bringing players to this server
      </div>
      {data.topQueries.map((q, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '5px 0',
          borderBottom: i < data.topQueries.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}>
          <span style={{ fontSize: '12px', color: '#B5BAC1', fontFamily: 'monospace' }}>{q.query}</span>
          <span style={{ fontSize: '11px', color: '#57F287', fontWeight: '600', whiteSpace: 'nowrap', marginLeft: '10px' }}>
            {q.joins} joins ↑
          </span>
        </div>
      ))}
    </div>

    {/* Retention comparison */}
    <div style={{
      display: 'flex', gap: '8px',
    }}>
      <div style={{
        flex: 1, padding: '10px 12px',
        backgroundColor: 'rgba(87,242,135,0.07)',
        borderRadius: '7px', border: '1px solid rgba(87,242,135,0.15)',
      }}>
        <div style={{ fontSize: '18px', fontWeight: '700', color: '#57F287' }}>{data.externalRetention7d}%</div>
        <div style={{ fontSize: '10px', color: '#80848E', marginTop: '2px', lineHeight: '1.4' }}>7-day retention<br />search-referred joins</div>
      </div>
      <div style={{
        flex: 1, padding: '10px 12px',
        backgroundColor: 'rgba(237,66,69,0.07)',
        borderRadius: '7px', border: '1px solid rgba(237,66,69,0.15)',
      }}>
        <div style={{ fontSize: '18px', fontWeight: '700', color: '#ED4245' }}>{data.discoveryRetention7d}%</div>
        <div style={{ fontSize: '10px', color: '#80848E', marginTop: '2px', lineHeight: '1.4' }}>7-day retention<br />Server Discovery joins</div>
      </div>
      <div style={{
        flex: 1, padding: '10px 12px',
        backgroundColor: 'rgba(88,101,242,0.07)',
        borderRadius: '7px', border: '1px solid rgba(88,101,242,0.15)',
      }}>
        <div style={{ fontSize: '18px', fontWeight: '700', color: '#5865F2' }}>{data.externalJoinsThisWeek}</div>
        <div style={{ fontSize: '10px', color: '#80848E', marginTop: '2px', lineHeight: '1.4' }}>search-referred joins<br />this week</div>
      </div>
    </div>
  </div>
);

const EnrichedInvitePage = ({ seoLayerOpen, onToggleSeo }) => {
  const accent = GAME.accentColor;

  return (
    <div style={{
      backgroundColor: '#313338',
      borderRadius: '14px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.07)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
    }}>
      {/* Game banner */}
      <div style={{
        background: GAME.bannerGradient,
        padding: '28px 24px 20px',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(167,139,250,0.03) 40px, rgba(167,139,250,0.03) 80px)',
        }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '14px',
            backgroundColor: 'rgba(167,139,250,0.2)',
            border: `2px solid ${accent}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '26px',
          }}>
            {GAME.icon}
          </div>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: '#F2F3F5', letterSpacing: '-0.01em' }}>
              {GAME.name}
            </div>
            <div style={{ fontSize: '12px', color: accent, marginTop: '2px', fontWeight: '500' }}>
              {GAME.tagline}
            </div>
          </div>
        </div>

        {/* Member pulse */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#57F287' }} />
            <span style={{ fontSize: '12px', color: '#B5BAC1' }}><strong style={{ color: '#F2F3F5' }}>{GAME.online}</strong> online now</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Users size={11} style={{ color: '#80848E' }} />
            <span style={{ fontSize: '12px', color: '#B5BAC1' }}><strong style={{ color: '#F2F3F5' }}>{GAME.members.toLocaleString()}</strong> members</span>
          </div>
        </div>
      </div>

      {/* Forum highlights */}
      <div style={{ padding: '18px 18px 0' }}>
        <div style={{
          fontSize: '11px', fontWeight: '700', color: '#80848E',
          textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: '10px',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <Zap size={10} style={{ color: accent }} />
          Live from the forums
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          {FORUM_THREADS.map(t => (
            <ThreadPreview key={t.id} thread={t} accent={accent} />
          ))}
        </div>
      </div>

      {/* CTA row */}
      <div style={{ padding: '16px 18px 18px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <button style={{
          flex: 1, padding: '11px',
          backgroundColor: '#5865F2',
          color: '#fff', fontWeight: '700', fontSize: '14px',
          borderRadius: '8px', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
        }}>
          Join Hollow Reach <ChevronRight size={14} />
        </button>

        {/* SEO Layer toggle */}
        <button
          onClick={onToggleSeo}
          style={{
            padding: '11px 14px',
            backgroundColor: seoLayerOpen ? 'rgba(88,101,242,0.2)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${seoLayerOpen ? 'rgba(88,101,242,0.5)' : 'rgba(255,255,255,0.1)'}`,
            color: seoLayerOpen ? '#5865F2' : '#80848E',
            fontWeight: '600', fontSize: '12px',
            borderRadius: '8px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '6px',
            whiteSpace: 'nowrap',
            transition: 'all 0.15s',
          }}
        >
          <Search size={12} />
          {seoLayerOpen ? 'Hide SEO Layer' : 'View SEO Layer'}
        </button>
      </div>

      {/* SEO Layer reveal */}
      {seoLayerOpen && (
        <div style={{ padding: '0 18px 18px' }}>
          <SEOLayerOverlay data={SEO_DATA} accent={accent} />
        </div>
      )}
    </div>
  );
};

// ─── Admin Panel ──────────────────────────────────────────────────────────────

const AdminPanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

    {/* North star metric */}
    <Card style={{ backgroundColor: '#1E1F22', border: '1px solid rgba(87,242,135,0.2)' }}>
      <SectionLabel>This Week · North Star</SectionLabel>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#57F287', lineHeight: '1' }}>
            {SEO_DATA.externalJoinsThisWeek}
          </div>
          <div style={{ fontSize: '11px', color: '#80848E', marginTop: '3px', lineHeight: '1.4' }}>
            externally-referred joins
          </div>
        </div>
        <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />
        <div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#57F287', lineHeight: '1' }}>
            {SEO_DATA.externalRetention7d}%
          </div>
          <div style={{ fontSize: '11px', color: '#80848E', marginTop: '3px', lineHeight: '1.4' }}>
            retained at 7 days
          </div>
        </div>
        <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />
        <div>
          <div style={{ fontSize: '28px', fontWeight: '800', color: '#ED4245', lineHeight: '1' }}>
            {SEO_DATA.discoveryRetention7d}%
          </div>
          <div style={{ fontSize: '11px', color: '#80848E', marginTop: '3px', lineHeight: '1.4' }}>
            Server Discovery<br />retention (same period)
          </div>
        </div>
      </div>
    </Card>

    {/* Forum setup checklist */}
    <Card>
      <SectionLabel>Forum Discovery Setup</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {FORUM_SETUP.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle size={15} style={{ color: '#57F287', flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#B5BAC1' }}>{item.label}</span>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: '12px', padding: '10px 12px',
        backgroundColor: 'rgba(87,242,135,0.06)',
        borderRadius: '7px', border: '1px solid rgba(87,242,135,0.15)',
        fontSize: '12px', color: '#80848E', lineHeight: '1.5',
      }}>
        <strong style={{ color: '#57F287' }}>
          {SEO_DATA.indexedPosts.toLocaleString()} forum posts indexed
        </strong>
        {' '}— your community's conversations are now discoverable in Google, Perplexity, and AI Overviews.
      </div>
    </Card>

    {/* Top search queries */}
    <Card>
      <SectionLabel>Top Search Queries Driving Joins</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {SEO_DATA.topQueries.map((q, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '9px 0',
            borderBottom: i < SEO_DATA.topQueries.length - 1
              ? '1px solid rgba(255,255,255,0.05)' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
              <Search size={11} style={{ color: '#80848E', flexShrink: 0 }} />
              <span style={{
                fontSize: '12px', color: '#B5BAC1',
                fontFamily: 'monospace',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {q.query}
              </span>
            </div>
            <span style={{
              fontSize: '12px', fontWeight: '700', color: '#57F287',
              whiteSpace: 'nowrap', marginLeft: '10px',
            }}>
              {q.joins} joins
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px', fontSize: '11px', color: '#80848E' }}>
        From <strong style={{ color: '#B5BAC1' }}>Growth &amp; Activation › Most Popular Referrers</strong>
      </div>
    </Card>

    {/* Why it matters callout */}
    <div style={{
      padding: '14px 16px',
      backgroundColor: 'rgba(88,101,242,0.08)',
      border: '1px solid rgba(88,101,242,0.2)',
      borderRadius: '10px',
      fontSize: '12px', color: '#80848E', lineHeight: '1.65',
    }}>
      <strong style={{ color: '#5865F2' }}>Why the gap?</strong>{' '}
      Players who join after searching for specific game content arrive with intent. They already know
      what they're looking for — and your Forum Channels proved it's here. Server Discovery joiners
      are browsing without a specific goal, so fewer stick around.
    </div>

  </div>
);

// ─── Persona context banner ───────────────────────────────────────────────────

const PersonaBanner = () => (
  <div style={{
    backgroundColor: '#1E1F22',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    padding: '10px 32px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '16px' }}>⚔️</span>
      <div>
        <span style={{ fontSize: '13px', fontWeight: '700', color: '#F2F3F5' }}>Hollow Reach Studio</span>
        <span style={{ fontSize: '12px', color: '#80848E', marginLeft: '8px' }}>Indie RPG · 3-person team</span>
      </div>
    </div>
    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
    <div style={{ fontSize: '12px', color: '#80848E' }}>
      Persona: <strong style={{ color: '#B5BAC1' }}>Server admin at game launch</strong> — great community content, low durable visibility
    </div>
    <div style={{ width: '1px', height: '20px', backgroundColor: 'rgba(255,255,255,0.08)' }} />
    <div style={{ fontSize: '12px', color: '#80848E' }}>
      Goal: <strong style={{ color: '#B5BAC1' }}>Turn forum conversations into retained member growth</strong>
    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────

const ForumInvitePrototype = () => {
  const [seoLayerOpen, setSeoLayerOpen] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#313338',
      color: '#F2F3F5',
      fontFamily: "'DM Sans', 'Nunito', sans-serif",
    }}>
      <PersonaBanner />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '32px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '28px',
        alignItems: 'start',
      }}>
        {/* Left: Invite page preview */}
        <div>
          <div style={{ marginBottom: '14px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#80848E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
              Player view · Invite page
            </div>
            <div style={{ fontSize: '12px', color: '#80848E', lineHeight: '1.5' }}>
              What a player sees when they find Hollow Reach through search and click the invite link. Toggle the SEO Layer to see what's driving them here.
            </div>
          </div>
          <EnrichedInvitePage
            seoLayerOpen={seoLayerOpen}
            onToggleSeo={() => setSeoLayerOpen(v => !v)}
          />
        </div>

        {/* Right: Admin panel */}
        <div>
          <div style={{ marginBottom: '14px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#80848E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
              Admin view · Growth &amp; Activation
            </div>
            <div style={{ fontSize: '12px', color: '#80848E', lineHeight: '1.5' }}>
              What the server admin sees — forum setup status, north star metric (externally-referred joins retained at 7 days), and top search queries.
            </div>
          </div>
          <AdminPanel />
        </div>
      </div>
    </div>
  );
};

export default ForumInvitePrototype;
