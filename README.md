# Discord Server Discovery — PM Interview Prototype Suite

**Author:** Tyler Vick | Staff PM, Growth & SEO candidate
**Role target:** Staff Product Manager, Growth & SEO · Discord
**Interview context:** 45-min product case study · March 2026

---

## What This Is

A two-prototype portfolio artifact demonstrating product thinking across two growth levers Discord has not yet fully activated:

| Prototype | Branch | Growth Lever |
|---|---|---|
| **Discovery Personalization** | `main` | Reactivate 200M+ dormant users via personalized server discovery |
| **Referral Quality Intelligence** | `feature/referral-quality-prototype` | Show admins which external traffic sources drive retained, engaged members vs. drive-by joins |

Both prototypes share a top-level nav toggle so they can be demoed in sequence during a single session.

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

Use the top nav bar to switch between the two prototypes.

---

## Demo Script

### Prototype 1: Discovery Personalization

1. **Start on the Main View** — side-by-side A/B comparison. Left (Control) = flat catalog sorted by member count. Right (Treatment) = personalized surface powered by DERE embedding signals.
2. **Highlight the signals** — point out "Why this?" chips (Returning, Friends Here, Trending, etc.)
3. **Toggle user state** — switch between Dormant User and New User in the top nav. Watch the treatment panel re-rank for reactivation vs. cold-start discovery.
4. **Open PM Notes** — click the `📋` tab. Walk through the growth hypothesis and real-data organic traffic gap (Reddit 63–68% organic vs. Discord ~4%).
5. **Switch to SEO Layer** — click `✨ View SEO Layer`. Show the current sparse `<head>` vs. proposed JSON-LD schema. Walk through the Google SERP simulator showing the rich result uplift.

### Prototype 2: Referral Quality Intelligence

1. **Switch to "Referral Quality Intelligence"** in the top nav.
2. **Start in Quality View** — the Discovery Paradox callout immediately frames the core insight: 3,100 joins but only 22% D7 retention.
3. **Switch to Volume View** — show the contrast. Server Discovery looks dominant on volume alone.
4. **Return to Quality View** — walk the table: YouTube (83% retention, quality score 5) vs. Discovery (22% retention, quality score 2).
5. **Point to the Ahrefs panel** — even in placeholder state, explain the intended integration: live keyword data would show which organic search terms are driving the Discovery traffic, proving that SEO-structured server pages can intercept the same queries with pre-qualified users.

---

## Injecting Ahrefs Data (when API is connected)

The `AhrefsPanel` component renders a placeholder until real data is passed. To populate:

**Option A — Update the mock file:**

```js
// src/data/mockAhrefsData.js
const mockAhrefsData = {
  domain: 'discord.com',
  domainRating: 91,
  organicTrafficEstimate: 34500000,
  topOrganicKeywords: [
    { keyword: 'discord servers', position: 1, volume: 450000, url: '/servers', difficulty: 72 },
    { keyword: 'valorant discord', position: 4, volume: 110000, url: '/servers/valorant', difficulty: 58 },
  ],
  topPages: [
    { url: '/servers', traffic: 2100000, topKeyword: 'discord servers' },
    { url: '/servers/gaming', traffic: 480000, topKeyword: 'gaming discord server' },
  ],
};
export default mockAhrefsData;
```

**Option B — Pass prop directly in App.jsx:**

```jsx
<ServerInsightsReferralQuality
  trafficSources={mockTrafficSources}
  ahrefsData={liveDataFromAhrefsMCP}  // ← inject here
/>
```

The full expected shape is documented in `src/data/mockAhrefsData.js` as `AHREFS_DATA_SHAPE`.

---

## Strategic Context

### Why Referral Quality Matters for Discord's Growth

Discord has ~19M active servers, ~28K publicly discoverable. Server Discovery is the primary organic acquisition surface — but it optimizes for browse volume, not member quality. The result is a retention gap: users who join via Server Discovery show significantly lower 7-day retention than users arriving from external, intent-signaled sources like YouTube or Reddit community posts.

**The compounding flywheel this prototype proposes:**
1. **SEO-structured server pages** intercept users already searching for a community (high intent)
2. **High-intent arrivals** produce better retention, which improves server health signals
3. **Healthier servers** rank higher in Discovery, attracting more quality members
4. **Referral Quality dashboard** makes this virtuous cycle visible and actionable for admins

Both growth levers — personalized discovery and structured data SEO — compound from the same product surface.

---

## Project Structure

```
src/
├── App.jsx                                  # Top-level prototype switcher
├── ServerDiscoveryPrototype.jsx             # Prototype 1: main layout
├── mockData.js                              # Prototype 1: server + user data
├── components/
│   ├── ServerInsightsReferralQuality.jsx    # Prototype 2: main dashboard
│   ├── AhrefsPanel.jsx                      # SEO data panel (placeholder or live)
│   ├── ViewToggle.jsx                       # Volume ↔ Quality toggle
│   ├── InsightCallout.jsx                   # Discovery Paradox callout
│   ├── QualityBadge.jsx                     # Dot-meter quality score badge
│   ├── StructuredDataDemo.jsx               # Prototype 1: SEO layer
│   ├── SerpPreview.jsx                      # Google rich result simulator
│   ├── JsonLdBlock.jsx                      # Syntax-highlighted JSON-LD
│   ├── ServerCard.jsx                       # Server card component
│   ├── ReasonChip.jsx                       # Personalization reason chip
│   ├── PMNotesPanel.jsx                     # PM notes sidebar
│   ├── ServerModal.jsx                      # Server preview modal
│   ├── PanelHeader.jsx                      # Panel header
│   └── CategorySidebar.jsx                  # Category nav sidebar
├── data/
│   ├── mockTrafficSources.js                # Prototype 2: referral source data
│   └── mockAhrefsData.js                    # Ahrefs data placeholder + shape
└── styles/
    └── tokens.css                           # Discord dark-mode CSS variables
```

---

## Tech Stack

- React 18 + Vite
- Discord dark-mode CSS variables (`src/styles/tokens.css`)
- DM Sans (Google Fonts) — closest open-source approximation to Discord's `gg sans`
- lucide-react for icons
- No external UI library dependencies
