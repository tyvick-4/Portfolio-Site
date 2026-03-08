import React, { useState } from 'react';
import { ClipboardList, ChevronRight } from 'lucide-react';

const PMNotesPanel = () => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'var(--bg-tertiary)',
                    borderLeft: '1px solid var(--border-subtle)',
                    borderTop: '1px solid var(--border-subtle)',
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '16px 12px',
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '-4px 0 12px rgba(0,0,0,0.2)'
                }}
            >
                <ClipboardList size={20} />
                <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '13px', fontWeight: 'bold' }}>
                    PM Notes
                </span>
            </button>
        );
    }

    const NoteSection = ({ title, children }) => (
        <div style={{ marginBottom: '24px' }}>
            <h3 style={{
                fontSize: '11px',
                fontWeight: '700',
                lineHeight: '1.2',
                color: 'var(--text-muted)',
                marginBottom: '8px',
            }}>
                {title}
            </h3>
            <div style={{
                fontSize: '13px',
                lineHeight: '1.5',
                color: 'var(--text-secondary)'
            }}>
                {children}
            </div>
        </div>
    );

    return (
        <div style={{
            position: 'fixed',
            right: 0,
            top: 0,
            bottom: 0,
            width: '320px',
            backgroundColor: 'var(--bg-tertiary)',
            borderLeft: '1px solid var(--border-subtle)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-8px 0 24px rgba(0,0,0,0.3)',
            animation: 'slideLeft 0.2s ease-out'
        }}>
            <div style={{
                padding: '24px',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h2 style={{ fontSize: '16px', fontWeight: '700', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ClipboardList size={20} />
                    PM Notes
                </h2>
                <button
                    onClick={() => setIsOpen(false)}
                    style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div style={{ padding: '24px', overflowY: 'auto', flexGrow: 1 }}>
                <NoteSection title="GROWTH HYPOTHESIS">
                    Returning users shown personalized signals convert at 2–3x the rate of generic browse.
                </NoteSection>

                <NoteSection title="KEY METRIC TO TRACK">
                    <ul style={{ paddingLeft: '16px', margin: 0 }}>
                        <li>Server join rate: personalized vs. control</li>
                        <li>(Primary) 7-day retention after join</li>
                        <li>(Secondary) Time-to-first-message in joined server</li>
                    </ul>
                </NoteSection>

                <NoteSection title="SIGNAL SOURCES (DERE)">
                    <ul style={{ paddingLeft: '16px', margin: 0 }}>
                        <li>Game library → interest graph nodes</li>
                        <li>Previous server membership → "back" signals</li>
                        <li>Friend graph overlap → social proof signals</li>
                        <li>Time-decay weighting → recency-boosted ranking</li>
                    </ul>
                </NoteSection>

                <NoteSection title="DORMANT USER INSIGHT">
                    Discord has 400M+ registered accounts vs. 200M MAU (May 2025). Even 5% reactivation = 20M users. Personalized discovery is the lowest-friction reactivation surface available.
                </NoteSection>

                <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '24px 0' }} />

                <NoteSection title="SEO CONNECTION">
                    Public server pages + DiscussionForumPosting schema = indexed content eligible for Google's rich results. Personalization reactivates dormant users; structured data acquires new ones via organic search. Two-sided engine, one product surface.
                </NoteSection>

                <NoteSection title="ORGANIC TRAFFIC GAP (REAL DATA)">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#FF4500', fontWeight: '600' }}>Reddit</span>
                            <span style={{ fontWeight: '700', color: 'var(--accent-green)' }}>63–68% organic</span>
                        </div>
                        <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
                            <div style={{ width: '65%', height: '100%', backgroundColor: '#FF4500', borderRadius: '3px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                            <span style={{ color: 'var(--accent-blurple)', fontWeight: '600' }}>Discord</span>
                            <span style={{ fontWeight: '700', color: 'var(--accent-red)' }}>~4% organic</span>
                        </div>
                        <div style={{ height: '6px', borderRadius: '3px', backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
                            <div style={{ width: '4%', height: '100%', backgroundColor: 'var(--accent-blurple)', borderRadius: '3px' }} />
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                            Source: Semrush / Similarweb, Jan 2026. Discord total: 860M visits/mo, 82% direct.
                        </div>
                    </div>
                </NoteSection>

                <NoteSection title="REDDIT SERP DOMINANCE (2025)">
                    <ul style={{ paddingLeft: '16px', margin: 0 }}>
                        <li>Appears in <strong style={{ color: 'var(--text-primary)' }}>37%</strong> of Google top-10 results</li>
                        <li>AI Overview citations up <strong style={{ color: 'var(--text-primary)' }}>450%</strong> Mar→Jun 2025</li>
                        <li>Cited in <strong style={{ color: 'var(--text-primary)' }}>21%</strong> of all Google AI Overviews</li>
                        <li>Discord AI citation share: <strong style={{ color: 'var(--accent-red)' }}>0%</strong></li>
                    </ul>
                </NoteSection>

                <NoteSection title="STRUCTURED DATA HYPOTHESIS">
                    DiscussionForumPosting schema on public server pages would make Discord content eligible for Google's Discussions & Forums rich results — currently dominated by Reddit.
                </NoteSection>

                <NoteSection title="IMPLEMENTATION REQUIREMENT">
                    Only works for servers with public channels enabled (opt-in). ~19M active servers weekly; ~28K publicly discoverable today. Even partial rollout unlocks a massive organic search surface.
                </NoteSection>
            </div>
            <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
};

export default PMNotesPanel;
