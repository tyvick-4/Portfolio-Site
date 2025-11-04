
import { CareerHighlight, CaseStudy, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Tyler Vickers",
  title: "Senior Product Manager",
  headshot: "https://picsum.photos/seed/headshot/400/400",
  linkedin: "https://www.linkedin.com/in/your-profile",
  email: "tyler.vickers.pm@example.com",
  valueProp: "AI-fluent PM with a proven track record launching B2C products used and viewed by millions of viewers and creators. I excel at bridging the gap between non-technical teams and core engineering cohorts.",
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
    heroImage: "https://picsum.photos/seed/twitch/1200/600",
    company: "Twitch",
    role: "Product Manager, Clips",
    duration: "2023",
    tags: ["Creator Economy", "Growth", "Video Streaming", "Frontend"],
    overview: "Twitch creators grow by being discovered via viral clips. However, it was difficult for new viewers to quickly understand a creator's personality from a live stream. I managed the Clips product to provide creators with a tool to curate their best moments, enhancing discoverability and audience growth.",
    problem: "Creators lacked an effective way to showcase their best content on their own channel pages and across Twitch. New viewers landing on a channel had no quick way to gauge the creator's style, leading to missed opportunities for follows and engagement.",
    approach: [
      "Conducted deep-dive data analysis on over 1 billion creator clips to identify viewership patterns and quality signals.",
      "Developed 'Featured Clips,' a mechanism for creators to select and feature their favorite clips on a new, prominent shelf on their channel page.",
      "Collaborated with recommendations teams to integrate Featured Clips into new content rows across Twitch for broader discovery.",
      "Navigated significant technical challenges with outdated clips infrastructure and balanced competing initiatives from other teams to ensure a timely launch.",
    ],
    challenges: [
        "The existing clips infrastructure was outdated, posing risks to stability and scalability for new feature development.",
        "Gaining alignment and resources was difficult due to competing initiatives from recommendations and other technical teams.",
        "Ensuring high adoption required a user-friendly tool that was intuitive for creators of all technical skill levels.",
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
    title: "Developing Project Orbit for Fire TV",
    subtitle: "Building a data-driven customer lifecycle framework to reduce churn and inform strategic targeting.",
    heroImage: "https://picsum.photos/seed/firetv/1200/600",
    company: "Amazon Fire TV",
    role: "Senior Product Manager, Growth",
    duration: "2022-Present",
    tags: ["Customer Lifecycle", "Data Analysis", "Strategy", "AI/ML"],
    overview: "While Fire TV had high-level engagement data, we lacked a deep understanding of customer personas, churn likelihood, or the ability to connect demographic data to behaviors. I initiated 'Project Orbit' to build a new lifecycle approach to better understand and target customer cohorts.",
    problem: "We couldn't effectively target customers for re-engagement or retention campaigns because we had a limited understanding of their journey. Key customer cohorts were churning month-over-month without us knowing why or who they were.",
    approach: [
      "Dived deep into existing customer engagement data to identify patterns and gaps in our understanding.",
      "Led the development of a 'state machine' model to describe any customer's engagement status based on their monthly activity (new, active, churned, resurrected).",
      "This new framework enabled us to precisely identify the key cohort of customers churning month-over-month.",
      "Built mechanisms and targeted campaigns based on these insights to specifically address new user churn.",
      "Utilized genre-propensity heuristics (cold vs. warm start) to launch personalized content rows, like delivering Sports highlights to Sports fans.",
    ],
    challenges: [
        "Data was siloed across different systems, making it difficult to create a unified view of the customer journey.",
        "Connecting demographic data with behavioral data was a technical and privacy-related hurdle that required careful navigation.",
        "Building consensus around a new customer framework required significant stakeholder management across marketing, engineering, and leadership.",
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