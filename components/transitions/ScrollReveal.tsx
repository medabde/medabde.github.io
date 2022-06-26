import React, { useRef, useEffect, FC } from 'react';
import { scrollRevealConfig } from '../../utils/configs';

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const animate = async () => {
      if (sectionRef.current) {
        const scrollReveal = (await import('scrollreveal')).default;
        scrollReveal().reveal(sectionRef.current, scrollRevealConfig);
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
