import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface MetricCardProps {
  metric: string;
  description: string;
  details?: string;
  index: number;
  variant?: 'default' | 'compact';
}

// Numeral colors cycle through the design-system StatCard's accent set.
const ACCENTS = ['var(--amber-400)', '#fb923c', '#facc15', 'var(--amber-500)'];

/** Design-system StatCard: big display-face numeral, description, optional detail. */
const MetricCard: React.FC<MetricCardProps> = ({
  metric,
  description,
  details,
  index,
  variant = 'default'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className={`
        h-full bg-surface border border-accent-border rounded-xl shadow-card
        ${variant === 'default' ? 'p-8' : 'p-6'}
        transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent
      `}
    >
      <motion.p
        className={`
          font-display font-bold leading-none tracking-tight mb-3 tabular-nums lining-nums
          ${variant === 'default' ? 'text-[clamp(2.75rem,6vw,3.5rem)]' : 'text-[clamp(2.25rem,5vw,2.75rem)]'}
        `}
        style={{ color: ACCENTS[index % ACCENTS.length] }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.09 + 0.2,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
      >
        {metric}
      </motion.p>
      <p className="text-body font-medium text-ink mb-1.5">{description}</p>
      {details && <p className="text-small text-muted">{details}</p>}
    </motion.div>
  );
};

export default MetricCard;
