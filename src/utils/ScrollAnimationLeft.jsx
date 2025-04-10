import { useEffect, useRef, useState } from 'react';

const ScrollAnimationLeft = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-100'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationLeft;
