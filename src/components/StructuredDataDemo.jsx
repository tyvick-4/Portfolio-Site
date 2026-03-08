import React, { useState } from 'react';
import JsonLdBlock from './JsonLdBlock';
import SerpPreview from './SerpPreview';
import { ArrowLeft } from 'lucide-react';

const StructuredDataDemo = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('proposed'); // 'current' or 'proposed'

    const currentHeadHtml = `<!-- Discord's current <head> for a server page — sparse -->
<title>VALORANT Community | Discord</title>
<meta name="description" content="The largest Valorant community on Discord.">
<meta property="og:title" content="VALORANT Community">
<meta property="og:image" content="https://cdn.discordapp.com/icons/...">
<!-- No structured data. Google sees a generic page. -->`;

    const orgSchema = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VALORANT Community",
  "description": "The largest Valorant community on Discord. Strategy, clips, LFG, coaching.",
  "url": "https://discord.com/servers/valorant-community-123456",
  "logo": "https://cdn.discordapp.com/icons/123456/abc.png",
  "sameAs": ["https://discord.gg/valorant"],
  "memberOf": {
    "@type": "WebSite",
    "name": "Discord",
    "url": "https://discord.com"
  },
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/FollowAction",
    "userInteractionCount": 847200
  },
  "keywords": "valorant, fps, competitive gaming, esports, discord"
}`;

    const forumSchema = `{
  "@context": "https://schema.org",
  "@type": "DiscussionForumPosting",
  "mainEntityOfPage": "https://discord.com/servers/valorant-community-123456/tips-tricks",
  "headline": "Best crosshair settings for Valorant in 2025",
  "text": "After 500 hours I finally found the crosshair that works. Here's my full breakdown...",
  "url": "https://discord.com/servers/valorant-community-123456/tips-tricks/msg-98765",
  "datePublished": "2025-11-15T14:22:00Z",
  "author": {
    "@type": "Person",
    "name": "apex_tyler",
    "url": "https://discord.com/users/apex_tyler",
    "agentInteractionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WriteAction",
      "userInteractionCount": 312
    }
  },
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/LikeAction",
    "userInteractionCount": 89
  },
  "comment": [
    {
      "@type": "Comment",
      "text": "This changed my game completely, ty",
      "datePublished": "2025-11-15T15:04:00Z",
      "author": {
        "@type": "Person",
        "name": "kira_shots"
      }
    }
  ]
}`;

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f8f9fa', // Moving to a lighter Google-like background for this view
            color: '#202124',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <header style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                padding: '16px 32px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                borderBottom: '1px solid var(--border-subtle)',
            }}>
                <button
                    onClick={onBack}
                    style={{
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        fontWeight: '500'
                    }}
                >
                    <ArrowLeft size={16} />
                    Back to Discovery Demo
                </button>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>SEO Structured Data Layer</h1>
            </header>

            {/* Real-data stats banner */}
            <div style={{
                backgroundColor: '#1E1F22',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '12px 40px',
                display: 'flex',
                gap: '40px',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#80848E', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
                    Live Benchmarks
                </span>
                {[
                    { label: 'Reddit organic traffic share', value: '63–68%', color: '#FF4500' },
                    { label: 'Discord organic traffic share', value: '~4%', color: '#ED4245' },
                    { label: 'Reddit in Google top-10 results', value: '37%', color: '#57F287' },
                    { label: 'Reddit AI Overview citations (2025)', value: '+450% YoY', color: '#57F287' },
                    { label: 'Discord AI citation share', value: '0%', color: '#ED4245' },
                ].map(({ label, value, color }) => (
                    <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '11px', color: '#80848E' }}>{label}</span>
                        <span style={{ fontSize: '16px', fontWeight: '700', color }}>{value}</span>
                    </div>
                ))}
                <span style={{ fontSize: '11px', color: '#80848E', marginLeft: 'auto', whiteSpace: 'nowrap' }}>
                    Source: Semrush · Similarweb · SE Ranking, Jan 2026
                </span>
            </div>

            <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '40px', display: 'flex', gap: '40px', flexGrow: 1 }}>

                {/* Left Column: Code/Implementation Mockup */}
                <div style={{ flex: 1, minWidth: '50%', display: 'flex', flexDirection: 'column', gap: '24px' }}>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            onClick={() => setActiveTab('current')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                backgroundColor: activeTab === 'current' ? '#e8eaed' : 'transparent',
                                color: activeTab === 'current' ? '#202124' : '#5f6368',
                                border: '1px solid',
                                borderColor: activeTab === 'current' ? '#dadce0' : 'transparent',
                            }}
                        >
                            Current State (No Schema)
                        </button>
                        <button
                            onClick={() => setActiveTab('proposed')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                backgroundColor: activeTab === 'proposed' ? 'var(--accent-blurple)' : 'transparent',
                                color: activeTab === 'proposed' ? '#fff' : '#5f6368',
                                border: '1px solid',
                                borderColor: activeTab === 'proposed' ? 'var(--accent-blurple)' : '#dadce0',
                            }}
                        >
                            Proposed State (+ JSON-LD)
                        </button>
                    </div>

                    <div style={{ backgroundColor: 'var(--bg-primary)', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            &lt;head&gt; Implementation
                        </h3>

                        {activeTab === 'current' ? (
                            <JsonLdBlock code={currentHeadHtml} />
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div>
                                    <div style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>Server as Organization Schema:</div>
                                    <JsonLdBlock code={orgSchema} />
                                </div>
                                <div>
                                    <div style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--text-secondary)' }}>Public Channel Threads as DiscussionForumPosting Schema:</div>
                                    <JsonLdBlock code={forumSchema} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Google SERP Preview Widget */}
                <div style={{ flex: 1, maxWidth: '600px', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#5f6368', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Google Search Result Simulator
                    </h3>

                    <SerpPreview hasSchema={activeTab === 'proposed'} />

                    <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#e8eaed', borderRadius: '8px', fontSize: '14px', color: '#4d5156', lineHeight: '1.5' }}>
                        <strong style={{ color: '#202124' }}>Why this matters:</strong>
                        {activeTab === 'current' ? (
                            <p style={{ margin: '8px 0 0 0' }}>Without structured data, search engines see Discord server pages as generic, thin content. They cannot surface discussions or community size directly in search results. Discord's organic traffic share sits at <strong>~4%</strong> of total visits — vs. Reddit's <strong>63–68%</strong>.</p>
                        ) : (
                            <div>
                                <p style={{ margin: '8px 0 8px 0' }}>By implementing standard <code>DiscussionForumPosting</code> schema, Discord pages become eligible for Google's "Discussions and forums" features, directly competing with Reddit for discovery-driven organic search traffic.</p>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                                    <span style={{ backgroundColor: '#FF450022', color: '#FF4500', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>
                                        Reddit precedent: 37% of Google top-10 results
                                    </span>
                                    <span style={{ backgroundColor: '#1a73e822', color: '#1a73e8', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>
                                        Same schema. Same opportunity.
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StructuredDataDemo;
