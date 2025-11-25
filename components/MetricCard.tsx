import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface MetricCardProps {
  metric: string;
  description: string;
  details?: string;
  index: number;
  variant?: 'default' | 'compact';
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  metric, 
  description, 
  details, 
  index,
  variant = 'default' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Gradient colors for each card
  const gradientColors = [
    'from-amber-500/10 to-orange-600/5',
    'from-orange-500/10 to-amber-600/5',
    'from-yellow-500/10 to-amber-600/5',
    'from-amber-600/10 to-yellow-500/5',
  ];

  const accentColors = [
    'text-amber-400',
    'text-orange-400', 
    'text-yellow-400',
    'text-amber-500',
  ];

  const borderColors = [
    'border-amber-500/20',
    'border-orange-500/20',
    'border-yellow-500/20',
    'border-amber-600/20',
  ];

  const glowColors = [
    'shadow-amber-500/10',
    'shadow-orange-500/10',
    'shadow-yellow-500/10',
    'shadow-amber-600/10',
  ];

  const colorIndex = index % 4;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="group relative"
    >
      <div className={`
        relative overflow-hidden
        bg-gradient-to-br ${gradientColors[colorIndex]}
        backdrop-blur-sm
        border ${borderColors[colorIndex]}
        rounded-2xl
        ${variant === 'default' ? 'p-8' : 'p-6'}
        transition-all duration-500
        hover:scale-[1.02]
        hover:shadow-2xl ${glowColors[colorIndex]}
        hover:border-opacity-40
      `}>
        {/* Animated gradient overlay on hover */}
        <div className={`
          absolute inset-0 
          bg-gradient-to-br ${gradientColors[colorIndex]}
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        `} />
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        <div className="relative z-10">
          {/* Metric Number */}
          <motion.p 
            className={`
              ${variant === 'default' ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'} 
              font-extrabold 
              ${accentColors[colorIndex]}
              mb-3
              tracking-tight
              leading-none
            `}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1 + 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            {metric}
          </motion.p>
          
          {/* Description */}
          <p className={`
            ${variant === 'default' ? 'text-xl' : 'text-lg'} 
            text-slate-200 
            mb-2
            leading-relaxed
            tracking-normal
          `}>
            {description}
          </p>
          
          {/* Details (optional) */}
          {details && (
            <p className="text-slate-400 text-sm md:text-base leading-relaxed tracking-wide">
              {details}
            </p>
          )}
        </div>

        {/* Corner accent */}
        <div className={`
          absolute top-0 right-0 w-20 h-20 
          bg-gradient-to-br ${gradientColors[colorIndex]}
          opacity-50 blur-2xl
          group-hover:opacity-75
          transition-opacity duration-500
        `} />
      </div>
    </motion.div>
  );
};

export default MetricCard;
