import { createContext, createElement, useContext, useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface UseRevealOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
  disabled?: boolean;
}

interface RevealTiming {
  rootMargin?: string;
  threshold?: number;
}

const RevealTimingContext = createContext<RevealTiming>({});

export const RevealTimingProvider: FC<RevealTiming & { children: ReactNode }> = ({
  children,
  rootMargin,
  threshold,
}) => {
  const parentTiming = useContext(RevealTimingContext);

  return createElement(
    RevealTimingContext.Provider,
    {
      value: {
        rootMargin: rootMargin ?? parentTiming.rootMargin,
        threshold: threshold ?? parentTiming.threshold,
      },
    },
    children
  );
};

export const useReveal = ({
  once = true,
  rootMargin,
  threshold,
  disabled = false,
}: UseRevealOptions = {}) => {
  const inheritedTiming = useContext(RevealTimingContext);
  const resolvedRootMargin = rootMargin ?? inheritedTiming.rootMargin ?? '0px 0px -12% 0px';
  const resolvedThreshold = threshold ?? inheritedTiming.threshold ?? 0.14;
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
        rootMargin: resolvedRootMargin,
        threshold: resolvedThreshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled, once, reducedMotion, resolvedRootMargin, resolvedThreshold]);

  return { ref, visible, reducedMotion };
};

export default useReveal;
