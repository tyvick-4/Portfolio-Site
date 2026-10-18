import React from 'react';

/** Design-system Badge: small mono pill for case-study tags. */
const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-flex items-center font-mono text-label tracking-normal text-accent bg-surface border border-line rounded-full px-3.5 py-1 ${className}`}>
    {children}
  </span>
);

export default Badge;
