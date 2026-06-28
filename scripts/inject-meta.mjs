/**
 * Post-build script: generates per-route index.html files with correct meta tags
 * and static JSON-LD injected so crawlers see unique titles, descriptions, and
 * structured data without needing to execute JavaScript.
 *
 * Run automatically via `npm run build` (postbuild hook in package.json).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '../dist');

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

const PERSON_REF = { '@id': 'https://tyvick.com/#person' };
const WEBSITE_REF = { '@id': 'https://tyvick.com/#website' };

const caseStudies = [
  {
    path: 'case-study/featured-clips',
    title: 'Launching Featured Clips on Twitch | Case Study by Tyler Vickers',
    description: 'How I gave Twitch creators editorial control over their best clips, driving 1M+ incremental daily views and a 3% follow rate lift across 350K+ streamers.',
    canonicalUrl: 'https://tyvick.com/case-study/featured-clips',
    ogImage: 'https://tyvick.com/images/featured-clips-hero.jpg',
    articleHeadline: 'Launching Featured Clips on Twitch',
    articleAbout: 'Creator tools, clip discovery, and audience growth on Twitch.',
    company: 'Twitch',
    tags: ['Creator Economy', 'Growth', 'Video Streaming', 'Frontend'],
    datePublished: '2023-12-01',
    dateModified: '2026-06-01',
    breadcrumb: 'Launching Featured Clips on Twitch',
  },
  {
    path: 'case-study/project-orbit',
    title: 'Developing Customer Lifecycle Heuristics for Fire TV | Case Study by Tyler Vickers',
    description: 'How I built a customer lifecycle state machine for Fire TV that reduced new user churn by 5% and contributed to $7M+ in annualized revenue from personalized content targeting.',
    canonicalUrl: 'https://tyvick.com/case-study/project-orbit',
    ogImage: 'https://tyvick.com/images/project-orbit-hero.jpg',
    articleHeadline: 'Developing New Customer Lifecycle Heuristics for Fire TV',
    articleAbout: 'Customer lifecycle modeling, churn reduction, and personalized content targeting for Amazon Fire TV.',
    company: 'Amazon Fire TV',
    tags: ['Customer Lifecycle', 'Data Analysis', 'Strategy', 'AI/ML'],
    datePublished: '2024-04-01',
    dateModified: '2026-06-01',
    breadcrumb: 'Developing Customer Lifecycle Heuristics for Fire TV',
  },
  {
    path: 'case-study/ad-revenue-protection',
    title: 'Protecting $10M+ in Ad Revenue at Twitch | Case Study by Tyler Vickers',
    description: 'How I led a 7-team cross-functional response to ad fraud in Twitch\'s embedded player, closing the loophole and protecting $10M+ in quarterly ad revenue.',
    canonicalUrl: 'https://tyvick.com/case-study/ad-revenue-protection',
    ogImage: 'https://tyvick.com/images/ad-revenue-hero.jpg',
    articleHeadline: 'Protecting $10M+ in Ad Revenue at Twitch',
    articleAbout: 'Ad fraud prevention, embed policy, and cross-functional crisis response at Twitch.',
    company: 'Twitch',
    tags: ['Monetization', 'Crisis Management', 'Policy', 'Cross-Functional Leadership'],
    datePublished: '2023-06-01',
    dateModified: '2026-06-01',
    breadcrumb: 'Protecting $10M+ in Ad Revenue at Twitch',
  },
];

const simpleRoutes = [
  {
    path: 'about',
    title: 'About Tyler Vickers | Staff Product Manager at Discord',
    description: "Staff Product Manager for Growth at Discord, previously at Amazon Fire TV and Twitch. Learn more about Tyler's background, philosophy, and approach to product.",
    canonicalUrl: 'https://tyvick.com/about',
  },
  {
    path: 'contact',
    title: 'Contact Tyler Vickers | Staff Product Manager',
    description: 'Reach out to Tyler Vickers for product strategy conversations, career discussions, or collaboration opportunities.',
    canonicalUrl: 'https://tyvick.com/contact',
  },
];

function escapeHtml(str) {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function buildArticleJsonLd(study) {
  const graph = [
    {
      '@type': 'Article',
      '@id': `${study.canonicalUrl}/#article`,
      headline: study.articleHeadline,
      description: study.description,
      image: study.ogImage,
      url: study.canonicalUrl,
      datePublished: study.datePublished,
      dateModified: study.dateModified,
      author: PERSON_REF,
      publisher: PERSON_REF,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': study.canonicalUrl,
      },
      keywords: [study.company, ...study.tags].join(', '),
      about: {
        '@type': 'Thing',
        name: `${study.articleHeadline} at ${study.company}`,
        description: study.articleAbout,
      },
      isPartOf: WEBSITE_REF,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tyvick.com/' },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://tyvick.com/#work' },
        { '@type': 'ListItem', position: 3, name: study.breadcrumb, item: study.canonicalUrl },
      ],
    },
    PERSON_REF,
    WEBSITE_REF,
  ];

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

function injectMeta(html, route) {
  const { title, description, canonicalUrl, ogImage } = route;
  const safeDesc = escapeHtml(description);
  const safeTitle = escapeHtml(title);
  const imageUrl = ogImage ?? 'https://tyvick.com/headshot.jpg';

  let result = html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="title" content=")[^"]*(")/,              `$1${safeTitle}$2`)
    .replace(/(<meta name="description" content=")[^"]*(")/,        `$1${safeDesc}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/,       `$1${safeTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/,  `$1${safeDesc}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/,         `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/,       `$1${imageUrl}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/,      `$1${safeTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/,`$1${safeDesc}$2`)
    .replace(/(<meta name="twitter:url" content=")[^"]*(")/,        `$1${canonicalUrl}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/,      `$1${imageUrl}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/,              `$1${canonicalUrl}$2`);

  // Inject Article + Breadcrumb JSON-LD for case study routes
  if (route.articleHeadline) {
    const articleJsonLd = `\n    <script type="application/ld+json">\n    ${buildArticleJsonLd(route)}\n    </script>`;
    result = result.replace('</head>', `${articleJsonLd}\n  </head>`);
  }

  return result;
}

const allRoutes = [...simpleRoutes, ...caseStudies];

for (const route of allRoutes) {
  const outputDir = join(distDir, route.path);
  mkdirSync(outputDir, { recursive: true });
  const html = injectMeta(baseHtml, route);
  writeFileSync(join(outputDir, 'index.html'), html, 'utf-8');
  console.log(`✓ ${route.path}/index.html`);
}

console.log(`\nMeta injection complete — ${allRoutes.length} routes processed.`);
