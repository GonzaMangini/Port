import { useRef, useEffect, useState } from "react";

export function useScrollSlideIn<T extends HTMLElement>(direction: 'left' | 'right' = 'left') {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getAnimationClasses = () => {
    if (!isVisible) {
      return direction === 'left' 
        ? 'opacity-0 -translate-x-20' 
        : 'opacity-0 translate-x-20';
    }
    return 'opacity-100 translate-x-0';
  };

  return [ref, getAnimationClasses()] as const;
}
