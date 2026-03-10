import React, { useState } from 'react'
import ForumInvitePrototype from './components/ForumInvitePrototype'
import ServerInsightsReferralQuality from './components/ServerInsightsReferralQuality'
import mockTrafficSources from './data/mockTrafficSources'
import mockAhrefsData from './data/mockAhrefsData'

const NAV_ITEMS = [
  { id: 'forum-discovery',  label: '⚔️ Forum Channel Discovery' },
  { id: 'referral-quality', label: '📊 Referral Quality Intelligence' },
]

function App() {
  const [activeView, setActiveView] = useState('forum-discovery')

  return (
    <div style={{ fontFamily: "'DM Sans', 'Nunito', sans-serif" }}>
      {/* Top-level prototype switcher */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        backgroundColor: '#1E1F22',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '8px 20px',
        height: '44px',
      }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: '#80848E', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '12px' }}>
          Prototype
        </span>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            style={{
              padding: '5px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: activeView === item.id ? '600' : '400',
              color: activeView === item.id ? '#F2F3F5' : '#80848E',
              backgroundColor: activeView === item.id ? '#5865F2' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Offset content below fixed nav */}
      <div style={{ paddingTop: '44px' }}>
        {activeView === 'forum-discovery' && <ForumInvitePrototype />}
        {activeView === 'referral-quality' && (
          <ServerInsightsReferralQuality
            trafficSources={mockTrafficSources}
            ahrefsData={mockAhrefsData}
          />
        )}
      </div>
    </div>
  )
}

export default App
