import React, { useRef, useEffect, FC } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const animate = async () => {
      if (sectionRef.current) {
        const scrollReveal = (await import('scrollreveal')).default;
        scrollReveal().reveal(sectionRef.current, {
          origin: 'bottom',
          distance: '20px',
          duration: 500,
          delay: 200,
          rotate: { x: 0, y: 0, z: 0 },
          opacity: 0,
          scale: 1,
          easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
          mobile: true,
          reset: false,
          useDelay: 'always',
          viewFactor: 0.25,
          viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
        });
      }
    };
    animate();
  }, []);

  return (
    <section ref={sectionRef} className="container scroll-section" data-testid="section">
      {children}
    </section>
  );
};

export default ScrollReveal;
