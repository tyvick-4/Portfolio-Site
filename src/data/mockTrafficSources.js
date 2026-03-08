// Mock traffic source data for the Referral Quality Intelligence dashboard.
// Each source represents an inbound channel for the VALORANT Community server.
// qualityScore: 1 (very low) → 5 (very high) based on retention + engagement composite.

const mockTrafficSources = [
  {
    id: 'youtube',
    label: 'YouTube (video descriptions)',
    joins30d: 290,
    retention7d: 83,
    avgMessages: 24.0,
    friendsPct: 12,
    qualityScore: 5,
    trend: 'up',
    variant: 'positive',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    joins30d: 480,
    retention7d: 71,
    avgMessages: 18.7,
    friendsPct: 22,
    qualityScore: 4,
    trend: 'stable',
    variant: null,
  },
  {
    id: 'reddit',
    label: 'Reddit (r/valorant)',
    joins30d: 1240,
    retention7d: 68,
    avgMessages: 14.2,
    friendsPct: 18,
    qualityScore: 4,
    trend: 'up',
    variant: null,
  },
  {
    id: 'discovery',
    label: 'Server Discovery (discord.com/servers)',
    joins30d: 3100,
    retention7d: 22,
    avgMessages: 2.1,
    friendsPct: 4,
    qualityScore: 2,
    trend: 'stable',
    variant: 'warning',
  },
  {
    id: 'direct',
    label: 'Direct / Unknown',
    joins30d: 610,
    retention7d: 45,
    avgMessages: 8.3,
    friendsPct: 31,
    qualityScore: 3,
    trend: 'down',
    variant: null,
  },
];

export default mockTrafficSources;
