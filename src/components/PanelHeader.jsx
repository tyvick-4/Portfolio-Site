import React from 'react';

const PanelHeader = ({ title, tag, serverCount, personalizedCount }) => {
    return (
        <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            backgroundColor: 'rgba(49, 51, 56, 0.95)',
            backdropFilter: 'blur(8px)',
            padding: '24px 32px 16px',
            borderBottom: '1px solid var(--border-subtle)',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    margin: 0,
                    color: 'var(--text-primary)'
                }}>
                    {title}
                </h1>
                <div style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-tertiary)',
                    padding: '4px 8px',
                    borderRadius: '4px'
                }}>
                    {tag}
                </div>
            </div>

            <div style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                Showing {serverCount} servers
                {personalizedCount > 0 && (
                    <>
                        <span style={{ color: 'var(--text-muted)' }}>•</span>
                        <span style={{ color: 'var(--accent-blurple)', fontWeight: '500' }}>
                            {personalizedCount} personalized
                        </span>
                    </>
                )}
            </div>
        </div>
    );
};

export default PanelHeader;
