import { CareerHighlight, CaseStudy, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Tyler Vickers",
  title: "Senior Product Manager",
  // TODO: Replace with actual hosted image path (e.g., "/headshot.jpg" in your public folder)
  headshot: "/headshot.jpg",
  linkedin: "https://www.linkedin.com/in/tyler-vickers-1128258/",
  email: "tyvick@gmail.com",
  valueProp: "Hey there, welcome! I'm Tyler, a grateful Senior PM privileged to have built and launched features used by millions daily on Twitch and Fire TV. I turn complex data into actionable product strategies and bring technical and non-technical teams together to ship features that drive measurable growth.",
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
      "Analyzed viewing patterns across 1 billion+ clips to understand what drove follows and repeat viewing. Discovered that clips featuring a creator's unique personality traits drove 3x higher follow rates than gameplay-only clips. Also reviewed multiple UXR studies and talked with UXR team members about creators wanting more opportunities to showcase clips that they liked that were created from their livestreams, particularly on their channel page in offline states.",
      "Designed a creator-facing tool allowing streamers to select up to 5 'Featured Clips' that would appear prominently on their channel page. Prioritized simplicity—creators could feature clips in under 30 seconds.",
      "Partnered with the recommendations team to integrate Featured Clips into discovery surfaces beyond channel pages, including the Twitch homepage and game directory pages, multiplying the feature's reach.",
      "Navigated legacy infrastructure constraints by working with engineering to build a scalable clips metadata layer, avoiding a costly full-platform rebuild while unblocking future clips innovation.",
      "Ensured that our feedback loop of new clips distribution appeared on our native mobile apps in a new content row, on the web client on both desktop and mobile web, and across channel pages with new rows in partnership with Viewer Experience product and design partners.
    ],
    challenges: [
      "Infrastructure risk: The clips system was built 6 years earlier and couldn't handle new metadata without risking platform stability. Solution: Worked with engineering to design a parallel metadata layer that could scale independently, buying time for future infrastructure investment.",
      "Resource competition: Recommendations team was prioritizing algorithmic discovery over creator-curated content. Solution: Ran new more data analysis on current clip viewership patterns (showing <10% of clips overall got the necessary viewership to use their proposed signals) and proposed a shared roadmap of new signals and weights to test in subsequent iterations of their net-new clisp recommendations model, securing team buy-in and engineering resources.",
      "Creator adoption: Early testing showed a small but stat significant % of creators struggled to find the full featuring flow within our tools. Solution: Simplified the UI from a 5-step flow to 2 steps and added in-product education, increasing adoption to 40% within one quarter.",
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
    title: "Developing New Customer LIfeycycle Heuristics for Fire TV",
    subtitle: "Building a data-driven customer lifecycle framework to reduce churn and inform strategic targeting.",
    // TODO: Replace with actual Fire TV screenshot/graphic
    heroImage: "/images/project-orbit-hero.jpg",
    company: "Amazon Fire TV",
    role: "Senior Product Manager, Growth",
    duration: "2022-Present",
    tags: ["Customer Lifecycle", "Data Analysis", "Strategy", "AI/ML"],
    overview: "Fire TV had millions of customers but couldn't answer basic questions: Who's about to churn? Which customers should we target with sports content versus kids' content? Why do 30% of new users abandon the device within their first month? I led the development of Project Orbit, a customer lifecycle framework that turned raw engagement data into actionable customer segments, enabling targeted retention campaigns that reduced new user churn by 5% and drove $7M+ in annualized revenue.",
    problem: "Fire TV's growth team operated in the dark. We knew overall engagement was declining but couldn't identify which customers were at risk or why they were leaving. Marketing campaigns targeted all customers generically because we had no way to segment by behavior or content preferences. Meanwhile, we were spending millions on content deals without knowing which genres actually drove retention. The business needed a data-driven framework to move from mass marketing to precision targeting.",
    approach: [
      "Built a 'state machine' customer lifecycle model that classified every Fire TV customer into one of four states based on monthly activity: New (first 30 days), Active (regularly engaged), At-Risk (declining engagement), or Churned (inactive 30+ days). This gave us a common language across teams.",
      "Partnered with data science to connect behavioral data (watch time, content types) with demographic data (household size, location). Discovered that Sports fans who didn't see Sports content in their first week were 40% more likely to churn.",
      "Launched 'warm start' personalized content rows that used viewing signals from a customer's first session to surface relevant content immediately. Sports fans saw Sports highlights—no lengthy onboarding required.",
      "Created a retention playbook for marketing, identifying the top 3 at-risk cohorts each month and prescribing specific campaign tactics (e.g., email reminders for customers who hadn't opened the app in 2 weeks).",
    ],
    challenges: [
      "Data silos: Customer behavior data lived in one system, demographic data in another, and content metadata in a third. Solution: Built a unified data pipeline in collaboration with engineering, creating a single source of truth that updated daily.",
      "Privacy constraints: Couldn't directly connect individual-level demographic data to content viewing. Solution: Worked with legal and privacy teams to design an aggregated, anonymized approach using cohort-level analysis rather than individual profiles.",
      "Organizational inertia: Teams were accustomed to broad campaigns and skeptical of 'yet another framework.' Solution: Ran a pilot with one high-churn cohort (new Sports fans) that delivered 8% churn reduction. Used results to secure executive sponsorship and expand to other cohorts.",
    ],
    results: [
      {
        metric: "5%",
        description: "Reduction in new user churn by targeting at-risk cohorts.",
      },
      {
        metric: "$2M+",
        description: "Potential incremental annualized revenue opportunity from churn reduction.",
      },
      {
        metric: "$7M+",
        description: "Annualized revenue from personalized content row targeting initiatives.",
      },
    ],
  },
  {
    slug: "ad-revenue-protection",
    title: "Protecting $10M+ in Ad Revenue at Twitch",
    subtitle: "Leading cross-functional response to ad fraud while maintaining creator and viewer experience.",
    heroImage: "/images/ad-revenue-hero.jpg",
    company: "Twitch",
    role: "Product Manager, Embeds & Offsite Growth",
    duration: "2022 (Q3-Q4)",
    tags: ["Monetization", "Crisis Management", "Policy", "Cross-Functional Leadership"],
    overview: "Twitch's embedded player—used by millions to watch clips and streams across the web—had become a vector for ad fraud, costing the company over $10M in quarterly ad revenue. I led a cross-functional initiative spanning 7 teams to close the fraud loophole while preserving legitimate use cases and maintaining positive relationships with our developer community. Despite social media backlash and technical challenges, we successfully protected revenue while improving engagement on legitimate sites.",
    problem: "The Twitch embedded player allowed any website to display Twitch content, generating millions in ad revenue. However, the Ads and Monetization team discovered that bad actors were exploiting the open embed system to commit ad fraud—artificially inflating impressions, blocking legitimate ads, or serving content in contexts that violated advertiser agreements. This was costing Twitch $10M+ per quarter in lost or fraudulent ad revenue. We needed to close the fraud vector without breaking legitimate integrations or alienating our developer community.",
    approach: [
      "Analyzed engagement data across all domains using Twitch embeds, identifying high-value legitimate sites versus suspicious domains. Segmented by metrics like click-through rate to Twitch, hours watched, logged-in vs. logged-out viewers, and ad completion rates to build a prioritized outreach list.",
      "Partnered with Developer Advocacy to design a rollout strategy requiring domain authentication—sites would need to register and include domain information in API calls. This closed the fraud loophole while grandfathering in legitimate partners.",
      "Collaborated with backend and frontend engineering teams to implement the domain authentication solution, ensuring it wouldn't break existing integrations for compliant partners while blocking unauthorized use.",
      "Coordinated with Legal to update Terms of Service and embed policies, Marketing to craft external messaging, and Monetization to adjust ad serving rules based on verified domains.",
      "Built a tiered response plan: legitimate high-traffic partners got white-glove support and early migration assistance, while suspicious domains were deprioritized or blocked entirely.",
    ],
    challenges: [
      "Cat-and-mouse dynamics: Ad blockers evolved to circumvent our protections, inadvertently breaking legitimate on-site Twitch experiences. Solution: Created a rapid-response war room with engineering, ads, and product teams to identify and patch issues within hours, not days. Implemented more graceful degradation—allowing playback with house ads rather than blocking entirely.",
      "Social media backlash: Online communities launched coordinated campaigns claiming Twitch was 'killing embeds' and hurting small creators. Solution: Worked with marketing and community teams to clarify the policy rationale, emphasize that legitimate sites were unaffected, and avoid knee-jerk reactions to angry tweets. Pushed back on hasty warning messages that would confuse users, instead advocating for clear, educational communication.",
      "Cross-functional alignment: Seven teams (Product, Engineering, Ads, Legal, Marketing, Developer Advocacy, Trust & Safety) had competing priorities and different risk tolerances. Solution: Established a weekly sync with clear DRIs (directly responsible individuals) for each workstream, and created a shared rollout timeline with explicit dependencies. Used data to drive decisions rather than politics—showing which domains drove legitimate revenue vs. fraud.",
    ],
    results: [
      {
        metric: "$10M+",
        description: "Quarterly ad revenue protected by closing fraud loopholes.",
      },
      {
        metric: "5-25%",
        description: "Increased click-through rate from embeds on verified, high-quality domains.",
      },
      {
        metric: "7 Teams",
        description: "Successfully coordinated across Product, Engineering, Ads, Legal, Marketing, DevRel, and Trust & Safety.",
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
