import React, { useRef, useEffect, FC, useState } from 'react';
import { scrollRevealConfig } from '../../utils/configs';
import { classNames } from '../../utils/helpers';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  origin?: string;
  className?: string;
  disableAnimation?: boolean;
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, delay, origin, className, disableAnimation }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [show, setShow] = useState(disableAnimation);

  useEffect(() => {
    if (disableAnimation) {
      setShow(true);
    } else {
      const animate = async () => {
        if (sectionRef.current) {
          const scrollReveal = (await import('scrollreveal')).default;
          setShow(true);
          scrollReveal().reveal(sectionRef.current, { ...scrollRevealConfig, delay: delay || scrollRevealConfig.delay, origin: origin || scrollRevealConfig.origin });
        }
      };
      animate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, origin]);

  return (
    <section ref={sectionRef} className={classNames(show ? '' : 'hidden', 'scroll-section', className ? className : '')} data-testid="section">
      {children}
    </section>
  );
};

export default ScrollReveal;
