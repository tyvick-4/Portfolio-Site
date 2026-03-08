import React from 'react';
import ReasonChip from './ReasonChip';

const ServerCard = ({ server, isPersonalized, onClick }) => {
    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    };

    return (
        <div
            className="server-card"
            onClick={() => onClick(server)}
            style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'var(--bg-card)';
            }}
        >
            {isPersonalized && server.personalizedReason && (
                <ReasonChip
                    reason={server.personalizedReason}
                    friendsCount={server.friendsInServer}
                    reasonLabel={server.reasonLabel}
                />
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div
                    className="server-icon"
                    style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: server.iconColor || 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        flexShrink: 0
                    }}
                >
                    {server.icon}
                </div>
                <div>
                    <h3 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}>
                        {server.isVerified && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-green)">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        )}
                        {server.name}
                    </h3>
                    <div style={{
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '2px'
                    }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-muted)' }} />
                            {formatNumber(server.memberCount)} Members
                        </span>
                    </div>
                </div>
            </div>

            <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: '1.4',
                margin: '0 0 16px 0',
                flexGrow: 1,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}>
                {server.description}
            </p>

            <button style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                width: '100%',
                transition: 'background-color 0.15s ease'
            }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-blurple)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)';
                }}
            >
                Join Server
            </button>
        </div>
    );
};

export default ServerCard;
