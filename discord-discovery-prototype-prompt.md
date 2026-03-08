# AI Build Prompt: Discord Server Discovery Personalization Prototype

> **For use with:** Claude Code, Gemini AI Studio, Cursor, or any frontier coding assistant  
> **Output target:** React component (.jsx) + Figma-ready design spec  
> **Core demo:** Side-by-side personalized vs. generic Server Discovery page

---

## CONTEXT & GOAL

You are building a **high-fidelity prototype** of Discord's Server Discovery page that demonstrates the business value of personalization. The prototype will be used as a product thinking artifact and portfolio case study for a Staff Product Manager, Growth & SEO role interview at Discord.

The demo has one job: **show the measurable difference between a generic, catalog-style discovery experience and a personalized, signal-driven one.** The side-by-side layout is the core UX proof of concept.

Discord's real Server Discovery page (discord.com/servers) is a publicly accessible, unauthenticated catalog of ~50,000 discoverable servers. It uses a category taxonomy (Gaming, Entertainment, Education, Music, Science & Tech, etc.) and a flat browse experience. There is minimal personalization today. The goal of this prototype is to show what it *could* look like with a recommendation layer applied — and what that means for dormant user reactivation and new user activation.

---

## REFERENCE MATERIAL: WHAT THE REAL PAGE LOOKS LIKE

The real Server Discovery page has these confirmed UI elements (from Discord's beta and current live versions):

- **Left sidebar** with category filters: Featured, Gaming, Entertainment, Education, Music, Science & Tech, Student Hubs
- **Top search bar** for keyword search
- **Server cards** in a grid layout, each showing:
  - Server icon (circular avatar)
  - Server name (bold)
  - Short description (1–2 lines)
  - Member count badge (e.g., "32,450 Members")
  - "Join" or "Learn More" CTA button
  - Optional: Category tag chip, Online member count
- **Category landing pages** with curated featured servers at the top + a scrollable grid below
- **Dark-mode UI** using Discord's color palette: `#313338` (app background), `#2B2D31` (sidebar), `#1E1F22` (deeper panels), `#5865F2` (Blurple — Discord's primary brand color), white text
- **Typography:** Discord uses Whitney (their custom font) — substitute with `gg sans` (their newer custom font, available via Discord CDN) or fall back to `DM Sans` or `Nunito` as close approximations

**Key URL pattern:** `discord.com/servers` → `discord.com/servers/{category-slug}`

**From the beta screenshot context (server_discovery.png):** The beta version tested a card-based layout with more prominent server icons, member count pills, and a "Recommended for you" section at the top of the page — above the standard category browse. This is the pattern we want to expand in the prototype.

---

## WHAT TO BUILD

### Primary Component: `ServerDiscoveryPrototype.jsx`

A full-width React component with **two side-by-side panels**:

**Left Panel — "Today's Discovery" (Generic/Control)**
- Mirrors the current live Discord Server Discovery experience
- Category sidebar with category chips
- Search bar at top
- Flat grid of server cards (no personalization signals)
- Sorted by: member count descending (popularity rank)
- Label: `"Discovery Today"` with a subtle tag: `"No personalization"`

**Right Panel — "Personalized Discovery" (Treatment)**
- Same structural layout, but the content is **reordered and annotated** based on mock user signals
- Surfaced sections replace the flat grid:
  1. **"Back for you"** — 3 servers the mock user previously engaged with or left (dormant reactivation)
  2. **"Because you play [Game]"** — interest-matched servers from DERE-style graph signals
  3. **"Your communities are here"** — servers where the user's friends are active
  4. **"Trending in [Interest Tag]"** — real-time trending servers within a matched category
  5. **"Explore something new"** — serendipitous recommendation 1 hop outside the user's interest graph
- Each server card shows a **"Why this?" tooltip/chip** with a one-line explanation of the signal (e.g., "3 of your friends are here", "Based on your Valorant activity", "You were a member 6 months ago")
- Label: `"With Personalization"` with a subtle tag: `"Powered by interest graph + behavior signals"`

---

## MOCK DATA SPECIFICATION

Use this combined mock dataset. It should be defined as a **`mockData.js`** object importable into the component (or defined inline as a const at the top of the JSX file).

### Mock User Profile
```js
const mockUser = {
  id: "user_dormant_42",
  username: "Tyler_V",
  status: "returning", // "new" | "active" | "returning" (dormant reactivation)
  daysSinceLastVisit: 183,
  interestTags: ["valorant", "anime", "lo-fi music", "indie games", "fantasy basketball"],
  gameLibrary: ["Valorant", "League of Legends", "Elden Ring", "Stardew Valley"],
  friendsOnDiscord: 24,
  previousServers: ["server_001", "server_005", "server_009"], // IDs of servers they left
  activeServers: [], // dormant user has no current active servers
  dereEmbeddingVector: "[gaming:0.87, music:0.61, anime:0.74, sports:0.55, tech:0.32]" // display only
};
```

### Mock Server Dataset (12–16 servers)
Each server should have these fields:
```js
{
  id: "server_001",
  name: "VALORANT Community",
  description: "The largest Valorant community on Discord. Strategy, clips, LFG, coaching.",
  icon: "🎯", // use emoji as placeholder icon
  iconColor: "#FF4655", // Valorant red
  memberCount: 847200,
  onlineCount: 12400,
  category: "Gaming",
  subTags: ["FPS", "Competitive", "Valorant"],
  isBoosted: true,
  isVerified: true,
  // Personalization signals:
  personalizedReason: "back", // "back" | "friends" | "interest" | "trending" | "serendipity"
  reasonLabel: "You were a member 6 months ago",
  friendsInServer: 0,
  matchScore: 0.94, // DERE embedding cosine similarity (display only)
}
```

Include a spread of servers across these categories with realistic data:
- **Gaming (5 servers):** Valorant, League of Legends, Elden Ring, Stardew Valley, Fantasy Basketball Hub
- **Music (2 servers):** Lo-Fi Café, Anime OST Community  
- **Anime (2 servers):** Anime Universe, One Piece Community
- **Education/Tech (2 servers):** AI Builders, Indie Game Dev
- **Entertainment (2 servers):** NBA Talk, Retro Gaming Lounge

Assign `personalizedReason` values strategically:
- `"back"` → 2–3 servers the user previously belonged to (use `previousServers` IDs)
- `"friends"` → 2–3 servers where `friendsInServer > 0` (e.g., 3, 7, 2)
- `"interest"` → servers matching `interestTags` with high `matchScore`
- `"trending"` → 1–2 servers with recent member growth spike
- `"serendipity"` → 1 server outside the user's graph (stretch recommendation)

---

## VISUAL DESIGN SPEC

### Color Palette (Discord Dark Mode — match exactly)
```css
--bg-primary: #313338;
--bg-secondary: #2B2D31;
--bg-tertiary: #1E1F22;
--bg-card: #2B2D31;
--bg-card-hover: #35373C;
--accent-blurple: #5865F2;
--accent-blurple-hover: #4752C4;
--accent-green: #57F287;
--accent-yellow: #FEE75C;
--accent-red: #ED4245;
--text-primary: #F2F3F5;
--text-secondary: #B5BAC1;
--text-muted: #80848E;
--border-subtle: rgba(255,255,255,0.06);
--card-shadow: 0 2px 10px rgba(0,0,0,0.3);
```

### Typography
- Primary font: `'DM Sans'` (Google Fonts, closest to Discord's `gg sans`)
- Fallback: `'Nunito', sans-serif`
- Server name: `16px / 600 weight`
- Description: `13px / 400 weight / --text-secondary`
- Member count: `12px / 500 weight / --text-muted`
- Section headers: `11px / 700 weight / uppercase / letter-spacing: 0.08em / --text-muted`
- Reason chip: `11px / 600 weight`

### Server Card Design
- `border-radius: 8px`
- `padding: 16px`
- Background: `--bg-card`
- Hover: lift effect (`transform: translateY(-2px)`) + `--bg-card-hover`
- Transition: `all 0.15s ease`
- Server icon: 48px circle with emoji centered, colored background
- Join button: filled `--accent-blurple`, `border-radius: 4px`, `12px 16px padding`
- Member count: bottom of card, icon + number in muted style

### Personalization Chip (right panel only)
Each personalized card gets a small pill above the server name:
- `"↩ Returning"` — amber/yellow background for "back" reason
- `"👥 3 friends here"` — green background for "friends" reason  
- `"🎮 Matches your interests"` — blurple background for "interest" reason
- `"📈 Trending"` — red/pink background for "trending" reason
- `"✨ New for you"` — purple/indigo background for "serendipity" reason

### Layout
- **Viewport:** Full width, min-height 100vh
- **Two-panel layout:** `display: grid; grid-template-columns: 1fr 1fr; gap: 2px;`
- **Divider** between panels: a 2px vertical line in `--bg-tertiary` with a centered label `"← Control | Treatment →"`
- **Panel header:** Each panel has a sticky top bar showing the panel label + a metric summary strip (e.g., "Showing 14 servers" vs. "Showing 14 servers • 6 personalized")
- **Sidebar:** Fixed left sidebar within each panel (240px) with category chips — the sidebar is the same in both panels

### Interaction Details
- **Hover on "Why this?" chip** → shows a tooltip with the detailed explanation string
- **Clicking a server card** → opens a Discord-style modal overlay with the full server preview (name, icon, description, member count, a fake "3 mutual friends" or "You were here before" badge, and a Join button)
- **Toggle switch** at the very top: `"Returning User | New User"` — toggling changes the mock user context and re-renders both panels with appropriate signals
- **Animated entrance:** Cards stagger-in on load with `opacity: 0 → 1` + `translateY(8px → 0)` with 50ms delay increments

---

## FIGMA-READY SPEC REQUIREMENTS

In addition to the working React component, output a **`FIGMA_SPEC.md`** file containing:

1. **Component inventory** — every component as a Figma component name (e.g., `ServerCard/Default`, `ServerCard/Personalized`, `ReasonChip/Returning`, `PanelHeader/Control`)
2. **Color styles** — every CSS variable above mapped to a Figma color style name
3. **Text styles** — every typography definition mapped to a Figma text style
4. **Spacing tokens** — padding/margin values used throughout (`4, 8, 12, 16, 24, 32px`)
5. **Auto-layout notes** — for each major section, describe the Figma Auto Layout direction, gap, and padding
6. **Prototype flow notes** — which interactions to wire in Figma's prototype panel (hover states, modal overlay trigger, toggle switch)

---

## STRATEGIC ANNOTATIONS TO INCLUDE IN THE UI

The prototype should include a collapsible **"PM Notes" sidebar panel** (right edge of screen, toggled by a `📋` button) that shows:

```
GROWTH HYPOTHESIS
Returning users shown personalized signals 
convert at 2–3x the rate of generic browse.

KEY METRIC TO TRACK
Server join rate: personalized panel vs. control
(Primary) 7-day retention after join
(Secondary) Time-to-first-message in joined server

SIGNAL SOURCES (DERE Embeddings)
• Game library → interest graph nodes
• Previous server membership → "back" signals  
• Friend graph overlap → social proof signals
• Time-decay weighting → recency-boosted ranking

DORMANT USER INSIGHT
Discord has ~450M registered accounts vs. 
200M MAU. Even 5% reactivation = 22.5M users.
Personalized discovery is the lowest-friction 
reactivation surface available.

SEO CONNECTION
Public server pages + DiscussionForumPosting 
schema = indexed content eligible for Google's 
rich results. Personalization reactivates 
dormant users; structured data acquires new 
ones via organic search. Two-sided engine,
one product surface.
```

---

## STRUCTURED DATA / SEO TEST LAYER

This section represents the **second major prototype within the prototype**: a demonstration that Discord's server pages could be made Google-indexable by adding Schema.org structured data. This is a direct SEO growth lever Discord has not yet implemented.

### The Strategic Argument

Discord's server pages at `discord.com/servers/{slug}` are currently rendered with minimal structured data and zero JSON-LD markup. Google cannot understand what a "server" is, how many members it has, what topics it covers, or that it contains forum-like discussions. Adding `DiscussionForumPosting` and `Organization` schema would:

1. Enable **rich results** in Google Search (discussion threads, member counts, reply counts surfacing in SERPs)
2. Signal to Google's crawler that Discord server pages are **indexable community content** — not just app shells
3. Create an organic acquisition channel for dormant users who search for communities they're interested in
4. Directly parallel what Reddit uses to dominate discussion-format search results

### What to Build: `StructuredDataDemo.jsx`

A standalone tab/panel within the prototype (accessible via a `🔍 SEO Layer` toggle button at the top of the page) that shows:

**Left side — "Current State" (No Structured Data)**

A rendered mock of a Discord server page HTML `<head>` as it exists today — minimal meta tags, no JSON-LD:

```html
<!-- Discord's current <head> for a server page — sparse -->
<title>VALORANT Community | Discord</title>
<meta name="description" content="The largest Valorant community on Discord.">
<meta property="og:title" content="VALORANT Community">
<meta property="og:image" content="https://cdn.discordapp.com/icons/...">
<!-- No structured data. Google sees a generic page. -->
```

Show a mock "Google Search Result Preview" below it — plain blue link, one-line description, no rich features. Label: `"What Google sees today"`.

**Right side — "Proposed State" (With JSON-LD Structured Data)**

Show the same page `<head>` enriched with two stacked JSON-LD blocks:

**Block 1 — Server as an Organization (for the server landing page itself):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VALORANT Community",
  "description": "The largest Valorant community on Discord. Strategy, clips, LFG, coaching.",
  "url": "https://discord.com/servers/valorant-community-123456",
  "logo": "https://cdn.discordapp.com/icons/123456/abc.png",
  "sameAs": ["https://discord.gg/valorant"],
  "memberOf": {
    "@type": "WebSite",
    "name": "Discord",
    "url": "https://discord.com"
  },
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/FollowAction",
    "userInteractionCount": 847200
  },
  "keywords": "valorant, fps, competitive gaming, esports, discord"
}
```

**Block 2 — Forum Thread as DiscussionForumPosting (for any public channel content):**
```json
{
  "@context": "https://schema.org",
  "@type": "DiscussionForumPosting",
  "mainEntityOfPage": "https://discord.com/servers/valorant-community-123456/tips-tricks",
  "headline": "Best crosshair settings for Valorant in 2025",
  "text": "After 500 hours I finally found the crosshair that works. Here's my full breakdown...",
  "url": "https://discord.com/servers/valorant-community-123456/tips-tricks/msg-98765",
  "datePublished": "2025-11-15T14:22:00Z",
  "author": {
    "@type": "Person",
    "name": "apex_tyler",
    "url": "https://discord.com/users/apex_tyler",
    "agentInteractionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WriteAction",
      "userInteractionCount": 312
    }
  },
  "interactionStatistic": {
    "@type": "InteractionCounter",
    "interactionType": "https://schema.org/LikeAction",
    "userInteractionCount": 89
  },
  "comment": [
    {
      "@type": "Comment",
      "text": "This changed my game completely, ty",
      "datePublished": "2025-11-15T15:04:00Z",
      "author": {
        "@type": "Person",
        "name": "kira_shots",
        "agentInteractionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/WriteAction",
          "userInteractionCount": 47
        }
      },
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/LikeAction",
        "userInteractionCount": 12
      }
    },
    {
      "@type": "Comment",
      "text": "Works even better with 1600 DPI, trust me",
      "datePublished": "2025-11-15T15:31:00Z",
      "author": {
        "@type": "Person",
        "name": "ghost_aim",
        "agentInteractionStatistic": {
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/WriteAction",
          "userInteractionCount": 203
        }
      }
    }
  ]
}
```

Show a mock "Google Search Result Preview" below it — a **rich result** card showing:
- Thread title as headline
- Star/discussion icon
- Reply count ("3 replies")
- Author name + post date
- Excerpt from the thread text

Label: `"What Google could see"`. Include a small annotation: `"Reddit uses this exact schema. It drives ~40% of Reddit's organic traffic."`.

### Syntax Highlighting Requirement

Both the "current" and "proposed" code blocks should be **syntax-highlighted** (use a lightweight library like `highlight.js` via CDN, or implement CSS-based token coloring manually). Use a dark theme matching Discord's color palette — `#1E1F22` background, string values in `--accent-green`, keys in `--text-secondary`, brackets in `--text-muted`.

### The "Google Rich Result Simulator" Widget

Below the code comparison, render a **side-by-side Google SERP preview widget** that simulates:

**Left (no schema):**
```
discord.com › servers › valorant-community
VALORANT Community | Discord
The largest Valorant community on Discord. Strategy, clips, LFG, coaching.
```
Plain text, no visual embellishment.

**Right (with schema):**
```
discord.com › servers › valorant-community  💬 Forum
VALORANT Community
847,200 members · Gaming · Esports

Best crosshair settings for Valorant in 2025
apex_tyler · Nov 15, 2025 · 89 👍 · 3 replies
"After 500 hours I finally found the crosshair that works..."

[ + 4 more discussions ]
```

Style the right preview with a subtle Google-search-like aesthetic (white card, `Roboto` font, Google blue `#1a0dab` for the URL/title links, gray meta text) to make the contrast maximally legible. Add a label: `"Rich result: Forum discussions eligible for Google Search carousel"`.

### PM Notes Panel Addition

Add these entries to the PM Notes panel for the SEO layer:

```
STRUCTURED DATA HYPOTHESIS
DiscussionForumPosting schema on public 
server pages would make Discord content 
eligible for Google's Discussions & Forums 
rich results — currently dominated by Reddit.

IMPLEMENTATION REQUIREMENT
Only works for servers with public channels 
enabled (opt-in). ~50K discoverable servers 
qualify today. Even partial rollout unlocks 
significant organic search surface.

PRECEDENT
Reddit's use of DiscussionForumPosting schema 
is a primary driver of its search visibility. 
Discord's architecture is structurally 
identical for public community content.

ROBOTS.TXT CURRENT STATE
discord.com/robots.txt currently disallows 
/channels/ (all messages). Public server 
pages at /servers/ are allowed. Structured 
data on /servers/ is the minimum viable 
SEO intervention — no content policy change 
required.

COMPOUNDING EFFECT
Personalization (reactivate dormant users) + 
Structured Data (acquire new users via search) 
= two-sided growth engine from one product surface.
```

### Add to File Output Structure

```
├── src/
│   ├── components/
│   │   ├── StructuredDataDemo.jsx     # NEW: SEO layer component
│   │   ├── SerpPreview.jsx            # NEW: Google rich result simulator
│   │   └── JsonLdBlock.jsx            # NEW: Syntax-highlighted JSON-LD display
```

---

## FILE OUTPUT STRUCTURE

```
discord-discovery-prototype/
├── src/
│   ├── ServerDiscoveryPrototype.jsx   # Main component
│   ├── mockData.js                    # Full mock dataset
│   ├── components/
│   │   ├── ServerCard.jsx
│   │   ├── ReasonChip.jsx
│   │   ├── PanelHeader.jsx
│   │   ├── CategorySidebar.jsx
│   │   ├── ServerModal.jsx
│   │   ├── PMNotesPanel.jsx
│   │   ├── StructuredDataDemo.jsx     # SEO layer: schema comparison
│   │   ├── SerpPreview.jsx            # Google rich result simulator
│   │   └── JsonLdBlock.jsx            # Syntax-highlighted JSON-LD display
│   └── styles/
│       └── tokens.css                 # CSS variables / design tokens
├── FIGMA_SPEC.md
└── README.md                          # Setup + demo script for interview context
```

---

## QUALITY BAR

The finished prototype should:
- [ ] Run with `npx create-react-app` or Vite with zero config changes
- [ ] Be visually indistinguishable from Discord's real UI at first glance (dark mode, blurple accents, card layout)
- [ ] Make the personalization value immediately legible — someone should understand the A/B hypothesis within 5 seconds of seeing it
- [ ] Have no placeholder text ("Lorem ipsum") anywhere — all content should be realistic Discord server copy
- [ ] Include at least one animated transition that makes the "returning user" signal feel emotionally resonant (e.g., the "↩ You were here before" card should have a subtle warm glow on entrance)
- [ ] The `🔍 SEO Layer` tab should be visually distinct from the main discovery panels — it deliberately breaks out of Discord's dark UI into a light/neutral zone to simulate a "real Google SERP" feel
- [ ] The JSON-LD blocks must be valid, parseable JSON — use actual Schema.org field names, not invented ones
- [ ] The Google SERP preview widget should be pixel-accurate enough to be screenshot-able and dropped into a PM presentation slide
- [ ] Be screenshot/demo-ready for a Staff PM portfolio presentation covering both the personalization hypothesis AND the SEO structured data opportunity

---

## ADDITIONAL INSTRUCTION FOR CLAUDE CODE SPECIFICALLY

When using Claude Code to build this:
1. Start by reading this full prompt before writing a single line of code
2. Create the `mockData.js` file first — get the data right before touching UI
3. Build `ServerCard.jsx` as a standalone component and verify it renders correctly before composing the full layout
4. The two-panel comparison is the **hero of the prototype** — spend 40% of effort here
5. Use `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap')` at the top of your CSS
6. Add a `// TYLER_NOTE:` comment on any line where you made a significant design decision that deviates from the spec, so it's easy to iterate

---

*Prompt authored for Tyler Vick | Staff PM, Growth & SEO portfolio prototype*  
*Research foundation: Discord technical architecture deep-dive + IPO filing analysis, Feb 2026*
