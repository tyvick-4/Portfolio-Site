import React from 'react';
import { motion } from 'motion/react';
import type { RecentContribution } from '../types';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

/** Recent Contributions link card. Same anatomy as the Featured Work card (surface, hairline,
    shadow-card, radius-xl, full-bleed media) but lighter: media on the left, h3 title,
    mono source/date eyebrow, tags, and a ghost button out to the external post. */
const ContributionCard: React.FC<{ item: RecentContribution; index: number }> = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="grid grid-cols-1 md:grid-cols-[minmax(0,460px)_1fr] bg-surface rounded-xl overflow-hidden shadow-card border border-line hover:border-line-strong transition-colors duration-500 group"
  >
    <div className="relative aspect-[5/2] md:aspect-auto md:min-h-[300px] overflow-hidden bg-surface-2">
      {item.image ? (
        <picture>
          <source srcSet={item.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
          <img
            src={item.image}
            alt={item.imageAlt ?? ''}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </picture>
      ) : (
        // No image yet: the design system's radial glow motif with the source label.
        <div className="absolute inset-0 flex items-center justify-center bg-[image:var(--glow-radial)]" aria-hidden="true">
          <span className="eyebrow text-faint">{item.source}</span>
        </div>
      )}
    </div>
    <div className="p-6 md:p-11 flex flex-col justify-center gap-4">
      <p className="eyebrow text-accent">
        {item.source} <span aria-hidden="true">·</span> <time dateTime={item.datePublished}>{item.date}</time>
      </p>
      <h3 className="text-h3">{item.title}</h3>
      <p className="text-small text-muted">{item.summary}</p>
      <ul className="flex flex-wrap gap-2" aria-label="Topics">
        {item.tags.map((tag) => (
          <li key={tag}><Badge>{tag}</Badge></li>
        ))}
      </ul>
      <div className="pt-1">
        <Button href={item.href} target="_blank" rel="noopener noreferrer" variant="ghost">
          {item.ctaLabel}
          <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </Button>
      </div>
    </div>
  </motion.article>
);

export default ContributionCard;
