import React, { useState, useEffect } from 'react';
import CategorySidebar from './components/CategorySidebar';
import PanelHeader from './components/PanelHeader';
import ServerCard from './components/ServerCard';
import ServerModal from './components/ServerModal';
import PMNotesPanel from './components/PMNotesPanel';
import StructuredDataDemo from './components/StructuredDataDemo';
import { mockServers, mockUser } from './mockData';
import { Sparkles, Users } from 'lucide-react';

const ServerDiscoveryPrototype = () => {
    const [showSeoLayer, setShowSeoLayer] = useState(false);
    const [selectedServer, setSelectedServer] = useState(null);
    const [userState, setUserState] = useState('returning'); // 'returning' or 'new'
    const [mountedTracker, setMountedTracker] = useState(false);

    // Trigger animation mount reset when switching user state
    useEffect(() => {
        setMountedTracker(false);
        const timer = setTimeout(() => setMountedTracker(true), 50);
        return () => clearTimeout(timer);
    }, [userState]);

    if (showSeoLayer) {
        return <StructuredDataDemo onBack={() => setShowSeoLayer(false)} />;
    }

    // --- Data Loading & Shaping based on user state ---
    // In a real app this would be an API call, here we filter the mock data
    const currentCategory = 'gaming';
    const categoryServers = mockServers.filter(s => s.category.toLowerCase() === currentCategory);

    // "Control" Panel: Generic sort by member count, no personalization signals
    const controlServers = [...categoryServers].sort((a, b) => b.memberCount - a.memberCount).map(s => ({
        ...s,
        personalizedReason: null // strip out any backend recommendation signals for the generic view
    }));

    // "Treatment" Panel: Personalized reordering based on signals
    let treatmentServers = [...categoryServers];

    if (userState === 'returning') {
        // For dormant/returning users: Prioritize "back" (servers they left) and "friends" first, then sort the rest
        const reactivateServers = treatmentServers.filter(s => s.personalizedReason === 'back');
        const friendServers = treatmentServers.filter(s => s.personalizedReason === 'friends');
        const interestServers = treatmentServers.filter(s => s.personalizedReason === 'interest');
        const trendingServers = treatmentServers.filter(s => s.personalizedReason === 'trending');
        const serendipityServers = treatmentServers.filter(s => s.personalizedReason === 'serendipity');
        const otherServers = treatmentServers.filter(s => !s.personalizedReason);

        treatmentServers = [
            ...reactivateServers,
            ...friendServers,
            ...interestServers,
            ...trendingServers,
            ...serendipityServers,
            ...otherServers.sort((a, b) => b.memberCount - a.memberCount)
        ];
    } else {
        // For brand new users (cold start): Mix trending and huge generic servers
        // Just simulating a different mix to show the toggle works
        treatmentServers = treatmentServers.sort((a, b) => {
            if (a.personalizedReason === 'trending') return -1;
            if (b.personalizedReason === 'trending') return 1;
            return b.memberCount - a.memberCount;
        });
    }

    const personalizedCount = treatmentServers.filter(s => s.personalizedReason).length;

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'var(--font-primary)'
        }}>
            {/* Global Top Nav */}
            <header style={{
                height: '48px',
                backgroundColor: 'var(--bg-tertiary)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                position: 'sticky',
                top: 0,
                zIndex: 50
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div style={{ fontWeight: '800', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '20px' }}>👾</span> Discord Discovery Demo
                    </div>

                    <div style={{
                        display: 'flex',
                        backgroundColor: 'var(--bg-primary)',
                        borderRadius: '4px',
                        padding: '4px',
                        gap: '4px'
                    }}>
                        <button
                            onClick={() => setUserState('returning')}
                            style={{
                                padding: '4px 12px',
                                borderRadius: '4px',
                                fontSize: '13px',
                                fontWeight: '600',
                                backgroundColor: userState === 'returning' ? 'var(--bg-card-hover)' : 'transparent',
                                color: userState === 'returning' ? 'var(--text-primary)' : 'var(--text-secondary)',
                            }}
                        >
                            Dormant User Profile
                        </button>
                        <button
                            onClick={() => setUserState('new')}
                            style={{
                                padding: '4px 12px',
                                borderRadius: '4px',
                                fontSize: '13px',
                                fontWeight: '600',
                                backgroundColor: userState === 'new' ? 'var(--bg-card-hover)' : 'transparent',
                                color: userState === 'new' ? 'var(--text-primary)' : 'var(--text-secondary)',
                            }}
                        >
                            New User Profile
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => setShowSeoLayer(true)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: '#1E40AF', // A deliberate non-discord blue to indicate "Google/SEO" mode
                        color: '#fff',
                        padding: '6px 16px',
                        borderRadius: '16px',
                        fontSize: '13px',
                        fontWeight: '600',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}
                >
                    <Sparkles size={14} />
                    View SEO Layer
                </button>
            </header>

            {/* Main Two-Panel Layout */}
            <main style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                gap: '2px',
                backgroundColor: 'var(--bg-tertiary)', // the gap creates the divider line
                flexGrow: 1
            }}>

                {/* LEFT PANEL: Control (Generic) */}
                <div style={{ backgroundColor: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <PanelHeader
                        title="Discovery Today"
                        tag="No Personalization"
                        serverCount={controlServers.length}
                        personalizedCount={0}
                    />
                    <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
                        <CategorySidebar activeCategory={currentCategory} />
                        <div style={{
                            flexGrow: 1,
                            padding: '24px 32px',
                            overflowY: 'auto'
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                gap: '16px'
                            }}>
                                {controlServers.map((server, i) => (
                                    <div
                                        key={`control-${server.id}`}
                                        style={{
                                            opacity: mountedTracker ? 1 : 0,
                                            transform: mountedTracker ? 'translateY(0)' : 'translateY(8px)',
                                            transition: `opacity 0.3s ease-out, transform 0.3s ease-out`,
                                            transitionDelay: `${i * 30}ms`
                                        }}
                                    >
                                        <ServerCard server={server} isPersonalized={false} onClick={setSelectedServer} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT PANEL: Treatment (Personalized) */}
                <div style={{ backgroundColor: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>

                    {/* Subtle overlay header divider label */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translate(-50%, -50%) rotate(270deg)',
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-muted)',
                        padding: '4px 12px',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        borderRadius: '4px',
                        zIndex: 100,
                        pointerEvents: 'none'
                    }}>
                        Control • Treatment
                    </div>

                    <PanelHeader
                        title="With Personalization"
                        tag="Interest Graph + Behavior"
                        serverCount={treatmentServers.length}
                        personalizedCount={userState === 'returning' ? personalizedCount : 0}
                    />
                    <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
                        <CategorySidebar activeCategory={currentCategory} />
                        <div style={{
                            flexGrow: 1,
                            padding: '24px 32px',
                            overflowY: 'auto'
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                gap: '16px'
                            }}>
                                {treatmentServers.map((server, i) => (
                                    <div
                                        key={`treatment-${server.id}-${userState}`}
                                        style={{
                                            opacity: mountedTracker ? 1 : 0,
                                            transform: mountedTracker ? 'translateY(0)' : 'translateY(8px)',
                                            transition: `opacity 0.3s ease-out, transform 0.3s ease-out`,
                                            transitionDelay: `${i * 30}ms`
                                        }}
                                    >
                                        {/* Only pass isPersonalized as true if we are in the returning user state or if we intend to show trending tags to new users */}
                                        <ServerCard
                                            server={server}
                                            isPersonalized={userState === 'returning' || server.personalizedReason === 'trending'}
                                            onClick={setSelectedServer}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <PMNotesPanel />
            <ServerModal server={selectedServer} isOpen={!!selectedServer} onClose={() => setSelectedServer(null)} />
        </div>
    );
};

export default ServerDiscoveryPrototype;
