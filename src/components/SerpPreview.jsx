import React from 'react';

const SerpPreview = ({ hasSchema, server }) => {
    // Allow caller to override server details; fall back to the original Valorant defaults
    const s = {
        slug:        server?.slug        ?? 'valorant-community',
        name:        server?.name        ?? 'VALORANT Community',
        description: server?.description ?? 'The largest Valorant community on Discord. Strategy, clips, LFG, coaching.',
        members:     server?.members     ?? '847,200',
        tags:        server?.tags        ?? 'Gaming · Esports',
        threads:     server?.threads     ?? [
            {
                title:   'Best crosshair settings for Valorant in 2025',
                author:  'apex_tyler',
                date:    'Nov 15, 2025',
                likes:   89,
                replies: 3,
                preview: '"After 500 hours I finally found the crosshair that works..."',
            },
            {
                title:   'Vandal vs Phantom: The definitive data analysis',
                author:  'stats_nerd',
                date:    'Nov 12, 2025',
                likes:   142,
                replies: 18,
                preview: null,
            },
        ],
        moreCount: server?.moreCount ?? 4,
    };

    if (!hasSchema) {
        return (
            <div style={{
                backgroundColor: '#fff',
                padding: '24px',
                borderRadius: '8px',
                fontFamily: 'Roboto, Arial, sans-serif',
                maxWidth: '600px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}>
                <div style={{ fontSize: '14px', color: '#4d5156', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>discord.com</span>
                    <span style={{ fontSize: '12px' }}>›</span>
                    <span>servers</span>
                    <span style={{ fontSize: '12px' }}>›</span>
                    <span>{s.slug}</span>
                </div>
                <div style={{ fontSize: '20px', color: '#1a0dab', marginBottom: '8px', cursor: 'pointer', lineHeight: '1.3' }}>
                    {s.name} | Discord
                </div>
                <div style={{ fontSize: '14px', color: '#4d5156', lineHeight: '1.58' }}>
                    {s.description}
                </div>
            </div>
        );
    }

    // Rich result — with DiscussionForumPosting schema active
    return (
        <div style={{
            backgroundColor: '#fff',
            padding: '24px',
            borderRadius: '8px',
            fontFamily: 'Roboto, Arial, sans-serif',
            maxWidth: '600px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
            <div style={{ fontSize: '14px', color: '#4d5156', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>discord.com</span>
                <span style={{ fontSize: '12px' }}>›</span>
                <span>servers</span>
                <span style={{ fontSize: '12px' }}>›</span>
                <span>{s.slug}</span>
                <span style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    marginLeft: '8px', backgroundColor: '#f1f3f4',
                    padding: '2px 8px', borderRadius: '12px', fontSize: '12px',
                }}>
                    💬 Forum
                </span>
            </div>

            <div style={{ fontSize: '20px', color: '#1a0dab', marginBottom: '4px', cursor: 'pointer', lineHeight: '1.3' }}>
                {s.name}
            </div>
            <div style={{ fontSize: '14px', color: '#70757a', marginBottom: '16px' }}>
                {s.members} members · {s.tags}
            </div>

            {/* Forum thread rich results */}
            <div style={{
                display: 'flex', flexDirection: 'column', gap: '16px',
                borderLeft: '2px solid #dadce0',
                paddingLeft: '16px', marginLeft: '8px',
            }}>
                {s.threads.map((thread, i) => (
                    <div key={i}>
                        <div style={{ fontSize: '18px', color: '#1a0dab', marginBottom: '4px', cursor: 'pointer' }}>
                            {thread.title}
                        </div>
                        <div style={{ fontSize: '13px', color: '#70757a', marginBottom: thread.preview ? '4px' : '0' }}>
                            {thread.author} · {thread.date} · {thread.likes} 👍 · {thread.replies} {thread.replies === 1 ? 'reply' : 'replies'}
                        </div>
                        {thread.preview && (
                            <div style={{ fontSize: '14px', color: '#4d5156', lineHeight: '1.5' }}>
                                {thread.preview}
                            </div>
                        )}
                    </div>
                ))}

                <div style={{ fontSize: '14px', color: '#1a0dab', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>+ {s.moreCount} more discussions</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M7 10l5 5 5-5z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SerpPreview;
