import React from 'react';
import { cn } from '@/lib/utils';

interface LineDashboardProps {
  className?: string;
  delay?: number;
}

const LineDashboardComponent: React.FC<LineDashboardProps> = ({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full', className)}
      fill="none"
    >
      {/* Outer frame */}
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      {/* Top bar */}
      <path
        d="M8 18h48"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      {/* Sidebar */}
      <path
        d="M20 18v38"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      {/* Content blocks */}
      <rect
        x="26"
        y="24"
        width="12"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      <rect
        x="42"
        y="24"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      <rect
        x="26"
        y="36"
        width="24"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      {/* Sidebar dots */}
      <circle cx="14" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" />
      <circle cx="14" cy="34" r="2" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" />
      <circle cx="14" cy="42" r="2" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" />
    </svg>
  );
};

export const LineDashboard = React.memo(LineDashboardComponent);
export default LineDashboard;
