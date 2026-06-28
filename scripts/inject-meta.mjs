/**
 * Post-build script: generates per-route index.html files with correct meta tags
 * injected into the static HTML so crawlers see unique titles/descriptions
 * without needing to execute JavaScript.
 *
 * Run automatically via `npm run build` (postbuild hook in package.json).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '../dist');

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

const routes = [
  {
    path: 'about',
    title: 'About Tyler Vickers | Staff Product Manager at Discord',
    description: 'Staff Product Manager for Growth at Discord, previously at Amazon Fire TV and Twitch. Learn more about Tyler\'s background, philosophy, and approach to product.',
    canonicalUrl: 'https://tyvick.com/about',
  },
  {
    path: 'contact',
    title: 'Contact Tyler Vickers | Staff Product Manager',
    description: 'Reach out to Tyler Vickers for product strategy conversations, career discussions, or collaboration opportunities.',
    canonicalUrl: 'https://tyvick.com/contact',
  },
  {
    path: 'case-study/featured-clips',
    title: 'Launching Featured Clips on Twitch | Case Study by Tyler Vickers',
    description: 'How I gave Twitch creators editorial control over their best clips, driving 1M+ incremental daily views and a 3% follow rate lift across 350K+ streamers.',
    canonicalUrl: 'https://tyvick.com/case-study/featured-clips',
    ogImage: 'https://tyvick.com/images/featured-clips-hero.jpg',
  },
  {
    path: 'case-study/project-orbit',
    title: 'Developing Customer Lifecycle Heuristics for Fire TV | Case Study by Tyler Vickers',
    description: 'How I built a customer lifecycle state machine for Fire TV that reduced new user churn by 5% and contributed to $7M+ in annualized revenue from personalized content targeting.',
    canonicalUrl: 'https://tyvick.com/case-study/project-orbit',
    ogImage: 'https://tyvick.com/images/project-orbit-hero.jpg',
  },
  {
    path: 'case-study/ad-revenue-protection',
    title: 'Protecting $10M+ in Ad Revenue at Twitch | Case Study by Tyler Vickers',
    description: 'How I led a 7-team cross-functional response to ad fraud in Twitch\'s embedded player, closing the loophole and protecting $10M+ in quarterly ad revenue.',
    canonicalUrl: 'https://tyvick.com/case-study/ad-revenue-protection',
    ogImage: 'https://tyvick.com/images/ad-revenue-hero.jpg',
  },
];

function escapeHtml(str) {
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function injectMeta(html, { title, description, canonicalUrl, ogImage }) {
  const safeDesc = escapeHtml(description);
  const safeTitle = escapeHtml(title);
  const imageUrl = ogImage ?? 'https://tyvick.com/headshot.jpg';

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="title" content=")[^"]*(")/,   `$1${safeTitle}$2`)
    .replace(/(<meta name="description" content=")[^"]*(")/,  `$1${safeDesc}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/,  `$1${safeTitle}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/,  `$1${safeDesc}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/,  `$1${canonicalUrl}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/,  `$1${imageUrl}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/,  `$1${safeTitle}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/,  `$1${safeDesc}$2`)
    .replace(/(<meta name="twitter:url" content=")[^"]*(")/,  `$1${canonicalUrl}$2`)
    .replace(/(<meta name="twitter:image" content=")[^"]*(")/,  `$1${imageUrl}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/,  `$1${canonicalUrl}$2`);
}

for (const route of routes) {
  const outputDir = join(distDir, route.path);
  mkdirSync(outputDir, { recursive: true });
  const html = injectMeta(baseHtml, route);
  writeFileSync(join(outputDir, 'index.html'), html, 'utf-8');
  console.log(`✓ ${route.path}/index.html`);
}

console.log(`\nMeta injection complete — ${routes.length} routes processed.`);
