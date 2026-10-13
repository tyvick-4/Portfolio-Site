import React, { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
}

// A muted, looping autoplay video that only starts downloading once it nears the
// viewport, so a large clip below the fold doesn't compete with the hero on load.
const LazyVideo: React.FC<LazyVideoProps> = ({ src, className }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={inView ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
    />
  );
};

export default LazyVideo;
