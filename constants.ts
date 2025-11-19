import { CareerHighlight, CaseStudy, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Tyler Vickers",
  title: "Senior Product Manager",
  // TODO: Replace with actual hosted image path (e.g., "/headshot.jpg" in your public folder)
  headshot: "/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/tyler-vickers-1128258/",
  email: "tyvick@gmail.com",
  valueProp: "Senior Product Manager who's launched features used by millions daily on Twitch and Fire TV. I turn complex data into actionable product strategies and bring technical and non-technical teams together to ship features that drive measurable growth.",
};

export const CAREER_HIGHLIGHTS: CareerHighlight[] = [
  {
    metric: "$7M+",
    description: "Annualized Revenue",
    details: "Launched personalized content rows for Fire TV, driving engagement and significant revenue.",
  },
  {
    metric: "1M+",
    description: "Daily Clip Plays",
    details: "Increased Twitch clip plays by building recommendation shelves on home and channel pages.",
  },
  {
    metric: "5%",
    description: "New User Churn Reduction",
    details: "Developed a customer lifecycle 'state machine' to identify and target at-risk user cohorts.",
  },
  {
    metric: "$10M+",
    description: "Quarterly Ad Revenue",
    details: "Recovered ad inventory by updating ad policies with 5 cross-functional teams.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "featured-clips",
    title: "Launching Featured Clips on Twitch",
    subtitle: "Empowering creators to showcase their best moments and accelerate audience growth.",
    // TODO: Replace with actual screenshot/video thumbnail
    heroImage: "/images/featured-clips-hero.jpg",
    heroVideo: "/featured_clips_example.webm", // Video takes precedence over image when present
    company: "Twitch",
    role: "Product Manager, Clips",
    duration: "2023",
    tags: ["Creator Economy", "Growth", "Video Streaming", "Frontend"],
    overview: "Twitch creators attract new audiences through viral clips, but had no way to control which clips represented them on their channel pages. New viewers landing on a channel saw random clips—often low-quality or unrepresentative—leading to missed follow opportunities. I led the Clips team to build Featured Clips, giving creators editorial control over their best content and creating new discovery surfaces across Twitch.",
    problem: "When new viewers landed on a creator's channel, they had two options: watch a live stream (which might not represent the creator's best content) or scroll through an unfiltered list of clips. Creators had no control over which clips appeared first, meaning a viewer's first impression might be a low-quality clip from months ago. This hurt both creator growth and Twitch's ability to convert casual viewers into engaged community members. With over 1 billion clips on the platform, we needed a way to surface the best content.",
    approach: [
      "Analyzed viewing patterns across 1 billion+ clips to understand what drove follows and repeat viewing. Discovered that clips featuring a creator's unique personality traits drove 3x higher follow rates than gameplay-only clips.",
      "Designed a creator-facing tool allowing streamers to select up to 5 'Featured Clips' that would appear prominently on their channel page. Prioritized simplicity—creators could feature clips in under 30 seconds.",
      "Partnered with the recommendations team to integrate Featured Clips into discovery surfaces beyond channel pages, including the Twitch homepage and game directory pages, multiplying the feature's reach.",
      "Navigated legacy infrastructure constraints by working with engineering to build a scalable clips metadata layer, avoiding a costly full-platform rebuild while unblocking future clips innovation.",
    ],
    challenges: [
      "Infrastructure risk: The clips system was built 6 years earlier and couldn't handle new metadata without risking platform stability. Solution: Worked with engineering to design a parallel metadata layer that could scale independently, buying time for future infrastructure investment.",
      "Resource competition: Recommendations team was prioritizing algorithmic discovery over creator-curated content. Solution: Ran a 2-week A/B test showing Featured Clips drove 18% higher engagement than algo-only recommendations, securing team buy-in and engineering resources.",
      "Creator adoption: Early testing showed only 15% of creators understood how to use the tool. Solution: Simplified the UI from a 5-step flow to 2 steps and added in-product education, increasing adoption to 40% within one quarter.",
    ],
    results: [
      {
        metric: "1 Million+",
        description: "Incremental daily clip views driven on the platform post-launch.",
      },
      {
        metric: "40%",
        description: "Adoption of the 'Featured Clips' tool by active creators within the first quarter.",
      },
      {
        metric: "3%",
        description: "Growth in follow rate for over 350,000 participating streamers.",
      },
    ],
  },
  {
    slug: "project-orbit",
    title: "Building a Customer Lifecycle Framework for Fire TV Channels",
    subtitle: "Turning raw engagement data into actionable segments that drove $7M+ in incremental revenue.",
    heroImage: "/images/project-orbit-hero.jpg",
    company: "Amazon Fire TV",
    role: "Senior Product Manager, Growth",
    duration: "2023-2024",
    tags: ["Customer Lifecycle", "Data Analysis", "Strategy", "AI/ML", "GenAI"],
    overview: "Fire TV Channels (FTVC) is a free, ad-supported streaming app serving millions of Fire TV customers with news, sports highlights, and creator content—without requiring a subscription. As the business experienced significant growth leading into the 2024 US Presidential Election, we lacked answers to basic questions: Who's about to churn? Which customers prefer sports versus news versus creator content? Why do 30% of new users abandon within their first month? I led development of a customer lifecycle framework that transformed raw engagement data into actionable segments, enabling targeted personalization that drove $7M+ in incremental annualized revenue.",
    problem: "FTVC lacked deep understanding of its customers—both demographically and behaviorally. We knew overall engagement was declining but couldn't identify which customers were at risk or why they were leaving. Marketing campaigns targeted everyone generically because we had no way to segment by behavior or content preference. Our business development and content programming teams operated without data showing which content providers resonated with new versus existing customers. The business needed a data-driven framework to move from mass marketing to precision targeting.",
    approach: [
      "Worked with product and data leads across Business Intelligence to conceptualize and deliver a 'state machine' customer lifecycle model classifying every Fire TV customer into engagement states: New (first 30 days), Engaged (separated into light/moderate/heavy based on visit frequency), At-Risk (declining engagement), or Churned (inactive 30+ days). This created a common language across teams.",
      "Partnered with data science to connect behavioral data (watch time, content types, visit frequency) with demographic data (age, household size, location). Discovered that our most engaged customers were older demographics with different news content expectations compared to younger, newer customers—insights that shaped content strategy.",
      "Leveraged Amazon's proprietary GenAI systems to directly create and launch the SQL queries needed to power data jobs building these new segmentation datasets, accelerating development and enabling rapid iteration on customer definitions.",
      "Used this framework to unlock new experiment opportunities in high-visibility Fire TV home screen placements, now able to assess impact across specific customer cohorts (new vs. engaged) rather than treating all users identically. This enabled more strategic editorial and product decisions with clear profit impact calculations.",
      "Launched 'warm start' personalized content rows using genre-propensity heuristics—new customers seeing content matched to their early viewing signals meant Sports fans got Sports highlights and families saw kids' content immediately, without lengthy onboarding.",
    ],
    challenges: [
      "Data silos: Customer behavior data lived in one system, demographic data in another, and content metadata in a third. Solution: Built a unified data pipeline in collaboration with engineering, creating a single source of truth that updated daily.",
      "Privacy constraints: Couldn't directly connect individual-level demographic data to content viewing. Solution: Worked with legal and privacy teams to design an aggregated, anonymized approach using cohort-level analysis rather than individual profiles.",
      "Organizational inertia: Teams were accustomed to broad campaigns and skeptical of 'yet another framework.' Solution: Ran a pilot with one high-churn cohort (new Sports fans) that delivered 8% churn reduction. Used results to secure executive sponsorship and expand the framework to other cohorts.",
      "High-stakes experimentation: Testing content configurations on home screens used by tens of millions daily required careful profit impact calculations to balance potential risks against learning opportunities. Solution: Used the new segmentation to design experiments targeting specific cohorts, reducing blast radius while maintaining statistical power.",
    ],
    results: [
      {
        metric: "$7M+",
        description: "Incremental annualized revenue from personalized content recommendations activating new customers and improving retention.",
      },
      {
        metric: "8%",
        description: "Churn reduction in pilot cohort (new Sports fans), demonstrating framework effectiveness and securing executive sponsorship.",
      },
      {
        metric: "4 States",
        description: "Customer lifecycle states (New, Engaged, At-Risk, Churned) with engagement sub-tiers, creating common language across teams.",
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Amazon Q CLI & Python" },
      { name: "SQL for Data Analysis" },
      { name: "AI Model Evaluation" },
      { name: "Amazon QuickSight" },
      { name: "Claude/Bolt for Prototyping" },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Customer Empathy & Research" },
      { name: "Cross-Functional Collaboration" },
      { name: "Positive Team Integration" },
      { name: "Stakeholder Communication" },
      { name: "Problem Solving" },
    ]
  },
  {
    title: "Domain Expertise",
    skills: [
      { name: "Creator Economy" },
      { name: "Video Streaming & FAST" },
      { name: "Entertainment Devices" },
      { name: "SEO/AIO Strategies" },
      { name: "Growth & Lifecycle Modeling" },
    ]
  }
];
