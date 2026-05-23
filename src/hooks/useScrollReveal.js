import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const {
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!triggerOnce) {
        entry.target.classList.remove('visible');
      }
    }, {
      threshold,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  return ref;
};
