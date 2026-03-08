// Ahrefs MCP data placeholder.
// Default export is null — real data is injected at runtime via the Ahrefs MCP connector.
// To populate: replace `null` with live data from the MCP tool, or pass the `ahrefsData` prop
// directly to <ServerInsightsReferralQuality ahrefsData={...} /> in App.jsx.

// Expected shape of the Ahrefs data object when populated:
export const AHREFS_DATA_SHAPE = {
  domain: 'discord.com',
  domainRating: 0,                   // 0–100 DR score
  organicTrafficEstimate: 0,         // estimated monthly organic visits
  topOrganicKeywords: [
    // { keyword: string, position: number, volume: number, url: string, difficulty: number }
  ],
  topPages: [
    // { url: string, traffic: number, topKeyword: string }
  ],
};

// Swap this null for real Ahrefs MCP data when available.
const mockAhrefsData = null;

export default mockAhrefsData;
