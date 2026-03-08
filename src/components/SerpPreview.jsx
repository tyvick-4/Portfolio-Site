import React from 'react';

const SerpPreview = ({ hasSchema }) => {
    if (!hasSchema) {
        return (
            <div style={{
                backgroundColor: '#fff',
                padding: '24px',
                borderRadius: '8px',
                fontFamily: 'Roboto, Arial, sans-serif',
                maxWidth: '600px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <div style={{ fontSize: '14px', color: '#4d5156', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>discord.com</span>
                    <span style={{ fontSize: '12px' }}>›</span>
                    <span>servers</span>
                    <span style={{ fontSize: '12px' }}>›</span>
                    <span>valorant-community</span>
                </div>
                <div style={{ fontSize: '20px', color: '#1a0dab', marginBottom: '8px', cursor: 'pointer', lineHeight: '1.3' }}>
                    VALORANT Community | Discord
                </div>
                <div style={{ fontSize: '14px', color: '#4d5156', lineHeight: '1.58' }}>
                    The largest Valorant community on Discord. Strategy, clips, LFG, coaching.
                </div>
            </div>
        );
    }

    // With Structure Data Preview (Rich Result)
    return (
        <div style={{
            backgroundColor: '#fff',
            padding: '24px',
            borderRadius: '8px',
            fontFamily: 'Roboto, Arial, sans-serif',
            maxWidth: '600px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
            <div style={{ fontSize: '14px', color: '#4d5156', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>discord.com</span>
                <span style={{ fontSize: '12px' }}>›</span>
                <span>servers</span>
                <span style={{ fontSize: '12px' }}>›</span>
                <span>valorant-community</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '8px', backgroundColor: '#f1f3f4', padding: '2px 8px', borderRadius: '12px', fontSize: '12px' }}>
                    💬 Forum
                </span>
            </div>
            <div style={{ fontSize: '20px', color: '#1a0dab', marginBottom: '4px', cursor: 'pointer', lineHeight: '1.3' }}>
                VALORANT Community
            </div>
            <div style={{ fontSize: '14px', color: '#70757a', marginBottom: '16px' }}>
                847,200 members · Gaming · Esports
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderLeft: '2px solid #dadce0', paddingLeft: '16px', marginLeft: '8px' }}>
                <div>
                    <div style={{ fontSize: '18px', color: '#1a0dab', marginBottom: '4px', cursor: 'pointer' }}>
                        Best crosshair settings for Valorant in 2025
                    </div>
                    <div style={{ fontSize: '13px', color: '#70757a', marginBottom: '4px' }}>
                        apex_tyler · Nov 15, 2025 · 89 👍 · 3 replies
                    </div>
                    <div style={{ fontSize: '14px', color: '#4d5156', lineHeight: '1.5' }}>
                        "After 500 hours I finally found the crosshair that works..."
                    </div>
                </div>

                <div>
                    <div style={{ fontSize: '18px', color: '#1a0dab', marginBottom: '4px', cursor: 'pointer' }}>
                        Vandal vs Phantom: The definitive data analysis
                    </div>
                    <div style={{ fontSize: '13px', color: '#70757a', marginBottom: '4px' }}>
                        stats_nerd · Nov 12, 2025 · 142 👍 · 18 replies
                    </div>
                </div>

                <div style={{ fontSize: '14px', color: '#1a0dab', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>+ 4 more discussions</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default SerpPreview;
