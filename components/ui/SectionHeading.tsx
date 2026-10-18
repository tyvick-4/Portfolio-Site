import React from 'react';
import { motion } from 'motion/react';

/** Centered section title + muted subtitle, revealed once on scroll. */
const SectionHeading: React.FC<{ title: string; subtitle?: string; className?: string }> = ({ title, subtitle, className = 'mb-16' }) => (
  <motion.div
    className={`text-center ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <h2>{title}</h2>
    {subtitle && <p className="text-body-lg text-muted mt-3">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
