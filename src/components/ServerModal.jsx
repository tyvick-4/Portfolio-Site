import React, { useState } from 'react';
import { X } from 'lucide-react';

const ServerModal = ({ server, isOpen, onClose }) => {
    if (!isOpen || !server) return null;

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
        }} onClick={onClose}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '480px',
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                    animation: 'modalSlideIn 0.2s ease-out'
                }}
                onClick={e => e.stopPropagation()}
            >
                <div style={{
                    height: '120px',
                    backgroundColor: server.iconColor,
                    opacity: 0.8,
                    position: 'relative'
                }}>
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                            color: '#fff',
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.4)'}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div style={{ padding: '0 24px 24px', position: 'relative' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-primary)',
                        padding: '6px',
                        position: 'absolute',
                        top: '-40px',
                        left: '24px'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            backgroundColor: server.iconColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px'
                        }}>
                            {server.icon}
                        </div>
                    </div>

                    <div style={{ marginTop: '56px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {server.name}
                            {server.isVerified && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent-green)">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            )}
                        </h2>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px' }}>
                            {server.description}
                        </p>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '24px',
                            marginBottom: '24px',
                            color: 'var(--text-muted)',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-green)' }} />
                                {formatNumber(server.onlineCount)} Online
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-muted)' }} />
                                {formatNumber(server.memberCount)} Members
                            </span>
                        </div>

                        {server.personalizedReason && (
                            <div style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '12px 16px',
                                borderRadius: '8px',
                                marginBottom: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                fontSize: '14px',
                                color: 'var(--text-primary)',
                                fontWeight: '500'
                            }}>
                                <span style={{ fontSize: '20px' }}>
                                    {server.personalizedReason === 'friends' ? '👥' : '⭐'}
                                </span>
                                {server.reasonLabel}
                            </div>
                        )}

                        <button style={{
                            width: '100%',
                            backgroundColor: 'var(--accent-blurple)',
                            color: '#fff',
                            padding: '12px',
                            borderRadius: '4px',
                            fontSize: '16px',
                            fontWeight: '500',
                            transition: 'background-color 0.2s',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-blurple-hover)'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--accent-blurple)'}
                        >
                            Join Server
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
        @keyframes modalSlideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default ServerModal;
