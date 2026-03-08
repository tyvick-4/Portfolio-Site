import React, { useState } from 'react';
const CONFIG = {
    back: {
        icon: '↩',
        shortText: 'Returning',
        color: 'var(--accent-yellow)',
        bg: 'rgba(254, 231, 92, 0.15)'
    },
    friends: {
        icon: '👥',
        shortText: 'friends here', // dynamically prefixed by count
        color: 'var(--accent-green)',
        bg: 'rgba(87, 242, 135, 0.15)'
    },
    interest: {
        icon: '🎮',
        shortText: 'Matches your interests',
        color: 'var(--accent-blurple)',
        bg: 'rgba(88, 101, 242, 0.15)'
    },
    trending: {
        icon: '📈',
        shortText: 'Trending',
        color: 'var(--accent-red)',
        bg: 'rgba(237, 66, 69, 0.15)'
    },
    serendipity: {
        icon: '✨',
        shortText: 'New for you',
        color: '#AB47BC', // purple
        bg: 'rgba(171, 71, 188, 0.15)'
    }
};

const ReasonChip = ({ reason, friendsCount, reasonLabel }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    if (!reason || !CONFIG[reason]) return null;

    const config = CONFIG[reason];
    let text = config.shortText;
    if (reason === 'friends') {
        text = `${friendsCount} ${text}`;
    }

    return (
        <div
            className="reason-chip-wrapper"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            style={{ position: 'relative', display: 'inline-block', marginBottom: '8px' }}
        >
            <div
                className="reason-chip"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    backgroundColor: config.bg,
                    color: config.color,
                    fontSize: '11px',
                    fontWeight: '600',
                    cursor: 'help'
                }}
            >
                <span>{config.icon}</span>
                <span>{text}</span>
            </div>

            {showTooltip && (
                <div
                    className="reason-tooltip"
                    style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginBottom: '6px',
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        padding: '6px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        boxShadow: 'var(--card-shadow)',
                        zIndex: 10,
                        pointerEvents: 'none'
                    }}
                >
                    {reasonLabel}
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderWidth: '4px',
                        borderStyle: 'solid',
                        borderColor: 'var(--bg-tertiary) transparent transparent transparent'
                    }} />
                </div>
            )}
        </div>
    );
};

export default ReasonChip;
