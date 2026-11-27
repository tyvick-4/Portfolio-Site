import React from 'react';

/** Stylized, made-up Server Web Page in miniature: a public server page with Channel Summaries,
    plus a floating search result to show the conversation is findable from the web.
    All names and numbers are invented; nothing is copied from a real server. */
const ServerWebPageMini: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1000 700"
    preserveAspectRatio="xMidYMid slice"
    className={className}
    role="img"
    aria-labelledby="swp-title"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="swp-title">
      Illustration of a Server Web Page: a public server with Channel Summaries, surfaced as a web search result.
    </title>
    <defs>
      <linearGradient id="swp-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1e1650" />
        <stop offset="1" stopColor="#0a0f1e" />
      </linearGradient>
      <radialGradient id="swp-glow-amber" cx="0.82" cy="0.12" r="0.55">
        <stop offset="0" stopColor="#f59e0b" stopOpacity="0.45" />
        <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="swp-glow-violet" cx="0.1" cy="0.95" r="0.6">
        <stop offset="0" stopColor="#7c3aed" stopOpacity="0.4" />
        <stop offset="1" stopColor="#7c3aed" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="swp-banner" x1="0" y1="0" x2="1" y2="0.3">
        <stop offset="0" stopColor="#6d28d9" />
        <stop offset="0.55" stopColor="#db2777" />
        <stop offset="1" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient id="swp-icon" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fbbf24" />
        <stop offset="1" stopColor="#ea580c" />
      </linearGradient>
      <clipPath id="swp-window">
        <rect x="150" y="70" width="700" height="560" rx="22" />
      </clipPath>
      <filter id="swp-shadow" x="-20%" y="-20%" width="140%" height="160%">
        <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#000" floodOpacity="0.5" />
      </filter>
    </defs>

    {/* Backdrop */}
    <rect width="1000" height="700" fill="url(#swp-bg)" />
    <rect width="1000" height="700" fill="url(#swp-glow-amber)" />
    <rect width="1000" height="700" fill="url(#swp-glow-violet)" />
    <g fill="#f6f4ef">
      <circle cx="70" cy="90" r="2" opacity="0.6" />
      <circle cx="930" cy="400" r="2.5" opacity="0.5" />
      <circle cx="90" cy="420" r="1.5" opacity="0.5" />
      <circle cx="905" cy="80" r="1.5" opacity="0.7" />
      <circle cx="60" cy="610" r="2" opacity="0.4" />
    </g>

    {/* Browser window */}
    <g filter="url(#swp-shadow)">
      <rect x="150" y="70" width="700" height="560" rx="22" fill="#121a30" />
    </g>
    <g clipPath="url(#swp-window)">
      {/* Chrome + search bar */}
      <rect x="150" y="70" width="700" height="52" fill="#0d1426" />
      <circle cx="182" cy="96" r="6" fill="#ff5f57" />
      <circle cx="204" cy="96" r="6" fill="#febc2e" />
      <circle cx="226" cy="96" r="6" fill="#28c840" />
      <rect x="262" y="82" width="470" height="28" rx="14" fill="#1a2338" />
      <circle cx="283" cy="95" r="6.5" fill="none" stroke="#9aa2b8" strokeWidth="2.2" />
      <line x1="288" y1="100" x2="293" y2="105" stroke="#9aa2b8" strokeWidth="2.2" strokeLinecap="round" />
      <text x="304" y="101" fontFamily="Inter, sans-serif" fontSize="15" fill="#9aa2b8">open world racing tips</text>

      {/* Banner with a little road scene */}
      <rect x="150" y="122" width="700" height="150" fill="url(#swp-banner)" />
      <circle cx="725" cy="178" r="34" fill="#fde68a" opacity="0.9" />
      <path d="M150 250 Q 290 180 430 238 T 700 220 T 850 236 V272 H150 Z" fill="#3b0764" opacity="0.55" />
      <path d="M150 262 Q 330 214 520 252 T 850 248 V272 H150 Z" fill="#1e1b4b" opacity="0.7" />
      <polygon points="430,272 590,272 522,196 498,196" fill="#0f0c29" />
      <g fill="#fcd34d">
        <rect x="507" y="204" width="6" height="12" rx="2" />
        <rect x="506" y="226" width="8" height="16" rx="2" />
        <rect x="505" y="252" width="10" height="20" rx="2" />
      </g>

      {/* Server identity */}
      <circle cx="222" cy="282" r="46" fill="#121a30" />
      <circle cx="222" cy="282" r="39" fill="url(#swp-icon)" />
      <path d="M205 266 v34 M205 268 h30 l-7 9 l7 9 h-30" fill="none" stroke="#0a0f1e" strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round" />
      <text x="284" y="318" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="700" fill="#f6f4ef">Open-World Racing Hub</text>
      <circle cx="291" cy="341" r="5" fill="#22c55e" />
      <text x="304" y="346" fontFamily="Inter, sans-serif" fontSize="15" fill="#9aa2b8">12,480 members · 1,032 online</text>
      <rect x="690" y="298" width="130" height="40" rx="20" fill="#f59e0b" />
      <text x="755" y="324" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#0a0f1e">Join Server</text>

      {/* Channel Summaries */}
      <text x="180" y="398" fontFamily="'JetBrains Mono', monospace" fontSize="13" letterSpacing="2" fill="#fbbf24">WHAT PEOPLE ARE SAYING</text>
      <path d="M418 384 l3.5 8.5 l8.5 3.5 l-8.5 3.5 l-3.5 8.5 l-3.5 -8.5 l-8.5 -3.5 l8.5 -3.5 Z" fill="#fbbf24" />

      <rect x="180" y="416" width="310" height="180" rx="14" fill="#1a2338" stroke="#ffffff" strokeOpacity="0.08" />
      <rect x="198" y="434" width="122" height="26" rx="13" fill="#7c3aed" fillOpacity="0.28" />
      <text x="212" y="452" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#c4b5fd"># racing-tips</text>
      <text x="198" y="490" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700" fill="#f6f4ef">Rubber-banding debate</text>
      <rect x="198" y="506" width="272" height="9" rx="4.5" fill="#2b3552" />
      <rect x="198" y="524" width="236" height="9" rx="4.5" fill="#2b3552" />
      <rect x="198" y="542" width="254" height="9" rx="4.5" fill="#2b3552" />
      <text x="198" y="578" fontFamily="Inter, sans-serif" fontSize="12" fill="#5f677e">35 messages ›</text>

      <rect x="510" y="416" width="310" height="180" rx="14" fill="#1a2338" stroke="#ffffff" strokeOpacity="0.08" />
      <rect x="528" y="434" width="118" height="26" rx="13" fill="#db2777" fillOpacity="0.28" />
      <text x="542" y="452" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#f9a8d4"># car-builds</text>
      <text x="528" y="490" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700" fill="#f6f4ef">Best drift tuning setups</text>
      <rect x="528" y="506" width="262" height="9" rx="4.5" fill="#2b3552" />
      <rect x="528" y="524" width="270" height="9" rx="4.5" fill="#2b3552" />
      <rect x="528" y="542" width="212" height="9" rx="4.5" fill="#2b3552" />
      <text x="528" y="578" fontFamily="Inter, sans-serif" fontSize="12" fill="#5f677e">52 messages ›</text>
    </g>

    {/* Floating web search result */}
    <g transform="rotate(-4 785 600)" filter="url(#swp-shadow)">
      <rect x="606" y="548" width="358" height="108" rx="16" fill="#f6f4ef" />
      <circle cx="632" cy="574" r="9" fill="url(#swp-icon)" />
      <text x="648" y="579" fontFamily="Inter, sans-serif" fontSize="12" fill="#5a5f70">Open-World Racing Hub</text>
      <text x="626" y="608" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="600" fill="#1d4ed8">Rubber-banding debate: what players say</text>
      <rect x="626" y="622" width="300" height="8" rx="4" fill="#d6d3cb" />
      <rect x="626" y="637" width="220" height="8" rx="4" fill="#d6d3cb" />
    </g>
  </svg>
);

export default ServerWebPageMini;
