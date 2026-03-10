# Session Notes — Discord Forum Discovery Prototype
*March 9, 2026 · Tyler Vick · Interview prep for Discord Staff PM (Growth)*

---

## What we built

Two interactive React prototypes on branch `feature/referral-quality-prototype`, plus a blog post draft. Everything is committed and ready to push to GitHub tomorrow.

### Prototype 1 — ⚔️ Forum Channel Discovery (`ForumInvitePrototype.jsx`)

The core narrative prototype. Split-screen view:

**Left — Player view (enriched invite page)**
A mock Discord join page for "Hollow Reach" (indie survival RPG, 3-person studio) showing:
- Game banner with gradient, server icon, member count, online pulse
- "Live from the forums" — three real forum thread previews with channel tags, reaction counts, HOT badges
- Join button + **"View SEO Layer"** toggle

When the SEO Layer is open it reveals:
- Indexed by Google badge + DiscussionForumPosting schema: Active badge + indexed post count
- Top 3 search queries driving server joins (with join counts)
- Three-column retention comparison: 71% (search-referred) vs 24% (Server Discovery) vs 14 joins this week
- **Google SERP rich result preview** — shows exactly how the Forum Channel threads appear in Google Search (the `💬 Forum` badge, member count, thread titles, reply/like counts, author names)

**Right — Admin view (Growth & Activation)**
- North star metric card: 14 externally-referred joins · 71% retained at 7 days · 24% Server Discovery (same period)
- Forum Discovery setup checklist (all four steps checked)
- Top search queries with join counts, sourced from "Growth & Activation › Most Popular Referrers"
- Callout explaining the retention gap (intent vs. browsing)

### Prototype 2 — 📊 Referral Quality Intelligence (`ServerInsightsReferralQuality.jsx`)

Grounded in Discord's actual Server Insights vocabulary (Growth & Activation tab, Most Popular Referrers, New Members, 1-Week Retention, Communicators). Breadcrumb: `Server Insights › Growth & Activation › Referral Quality`.

Panels:
- Admin context banner: explains what "Growth & Activation — extended view" and "Most Popular Referrers" mean
- Data table: 5 traffic sources with new members (30d), share of joins, 1-week retention, communicators (avg msgs), friends-driven %, quality score
- AhrefsPanel: "Organic Search Intelligence" — placeholder for keyword data showing which searches drive referrals to the server
- AIOverviewOpportunity: Three-section panel covering brand citation share (Reddit 21% vs Discord 0%), the fan-out query strategy visualizer, and the topic hub vs. keyword pages comparison (1 Forum Channel = 2,500+ keywords + 473 AI Overview appearances vs 60 keyword pages = 266 keywords, Ahrefs Healthline March 2026)
- Two insight callouts: "The Discovery Paradox" (biggest source is weakest on retention) and "Organic Search Referrals Outperform on Every Quality Signal"

### Blog post draft (`discord-ai-search-blog-draft.md`)

Customer-first strategy post structured around:
1. The indie game server admin persona (two years building, launch hype fades, great content nobody sees)
2. The job to be done: "Turn authentic conversations into durable visibility for my game"
3. Discord's structural superpower (Forum Channels naturally cover AI search fan-out queries)
4. The product bet (guided Forum setup → schema → enriched invite → signal back to admin)
5. North star: externally-referred server joins retained at 7 days

Approximately 760 words. Written to be genuinely interesting to a product audience, not an interview prep artifact.

---

## Key strategic ideas developed

**The core insight**: Discord's Forum Channels already contain the multi-angle community content that AI search (Google AIO, Perplexity, SearchGPT) rewards via fan-out query decomposition. Reddit captures 21% of Google AI Overviews; Discord captures ~0%. The content gap doesn't exist — the infrastructure gap does.

**The customer job**: Server admins at game launch don't need more members, they need durable visibility for the authentic conversations their community is already having. The spike-and-fade pattern isn't a community failure — it's a discovery failure.

**The north star**: Externally-referred server joins retained at 7 days. This aligns admin incentives (healthy community), Discord incentives (sustained engagement), and player incentives (finding somewhere worth staying) into a single metric.

**The superpower**: `DiscussionForumPosting` structured data + public Forum Channel indexability turns what communities already do naturally into a search moat that no single-topic SEO page can replicate. One Forum Channel = 2,500+ keyword surface area.

**The enriched invite loop**: Member finds server via search → lands on invite page showing live forum highlights → joins with context and intent → retains at 3× the rate of Server Discovery joins → admin sees this in Growth & Activation → incentivized to make more Forum content public.

**Retention gap framing**: Search-referred joins (71% 7-day retention) vs Server Discovery joins (24%) isn't just a channel quality story — it's proof that intent-matched discovery produces a qualitatively different member. That's the number that makes admins care.

---

## Discord Insights terminology to use in the interview

These are Discord's actual vocabulary terms (from official documentation). Using them signals platform fluency:

- **Growth & Activation** — the tab name in Server Insights (not "analytics" or "dashboard")
- **New Members** — Discord's exact label (not "joins" or "signups")
- **1-Week Retention** — the specific retention window Discord surfaces
- **Communicators** — members who send at least one message (Discord's term)
- **Most Popular Referrers** — the website/source a member was on before clicking the invite link (this is the organic search signal!)
- **Most Popular Invites** — which specific invite links drove joins
- 500+ member threshold to unlock Insights
- 30% communicator rate = Discord's benchmark for a healthy server
- 120-day data retention for non-partnered servers

---

## Technical stack

- **React 18 + Vite** — both prototypes, same repo
- **lucide-react** — icon library
- **No external data dependencies** — all mock data, self-contained
- **Discord design system** implemented via CSS variables:
  - `#313338` surface, `#2B2D31` elevated, `#1E1F22` deepest
  - `#5865F2` blurple, `#57F287` green, `#ED4245` red, `#F59E0B` amber
  - `#F2F3F5` primary text, `#B5BAC1` secondary, `#80848E` muted
- **DM Sans** font

### Files added/modified this session

```
src/components/ForumInvitePrototype.jsx   ← new, Prototype 1
src/components/AIOverviewOpportunity.jsx  ← new, added to Prototype 2
src/components/SerpPreview.jsx            ← refactored to accept server props
src/components/ServerInsightsReferralQuality.jsx  ← grounded in admin context
src/components/AhrefsPanel.jsx            ← reframed for admin audience
src/components/PMNotesPanel.jsx           ← AI Overview north star section added
src/App.jsx                               ← Prototype 1 swapped to ForumInvitePrototype
discord-ai-search-blog-draft.md          ← blog post draft
SESSION-NOTES.md                          ← this file
```

---

## Tomorrow: push to GitHub

The branch `feature/referral-quality-prototype` has 4 commits ahead of main. To push:

```bash
cd discord-server-discovery-prototype
git push -u origin feature/referral-quality-prototype
```

If the remote isn't configured yet (no `git remote -v` output), add it first:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin feature/referral-quality-prototype
```

Then open a PR or merge to main for a clean deploy.

---

## Blog post: next steps

The draft is at `discord-ai-search-blog-draft.md`. Edit for tone/brevity, then publish to `tyvick.com` via the Portfolio-Site repo. The site is React + TypeScript + Vite — adding a `/writing` page requires:

1. Add `WritingPost` type to `types.ts`
2. Add post to `metadata.json`
3. Create `pages/Writing.tsx` and `pages/Post.tsx`
4. Add `/writing` route to `App.tsx`

Or publish as an unlisted post on a hosted platform if you'd rather not touch the codebase the night before the interview.

---

*Good luck tomorrow. The prototype tells a complete story: customer problem → platform superpower → measurable outcome. Walk them through Prototype 1 (the invite page + SEO layer reveal), then use Prototype 2 to show you know the actual Insights vocabulary. The north star metric and the retention gap are the two numbers worth memorizing.*
