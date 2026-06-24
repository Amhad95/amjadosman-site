import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface UseRevealOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
  disabled?: boolean;
}

export const useReveal = ({
  once = true,
  rootMargin = '0px 0px -12% 0px',
  threshold = 0.14,
  disabled = false,
}: UseRevealOptions = {}) => {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(reducedMotion || disabled);

  useEffect(() => {
    if (reducedMotion || disabled) {
      setVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
          return;
        }

        if (!once) {
          setVisible(false);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled, once, reducedMotion, rootMargin, threshold]);

  return { ref, visible, reducedMotion };
};

export default useReveal;
