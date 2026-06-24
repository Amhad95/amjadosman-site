import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface PageTransitionShellProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const PageTransitionShell: React.FC<PageTransitionShellProps> = ({ children, disabled = false }) => {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const targetId = decodeURIComponent(location.hash.slice(1));
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [location.hash, location.pathname]);

  return (
    <div
      key={`${location.pathname}${location.search}`}
      className={reducedMotion || disabled ? undefined : 'page-transition-shell'}
    >
      {children}
    </div>
  );
};

export default PageTransitionShell;
