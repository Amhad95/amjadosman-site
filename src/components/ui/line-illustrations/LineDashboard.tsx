import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface LineDashboardProps {
  className?: string;
  delay?: number;
}

export const LineDashboard = memo<LineDashboardProps>(({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full text-foreground', className)}
      fill="none"
      style={{ animationDelay: `${delay}ms` }}
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
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* Top bar */}
      <path
        d="M8 18h48"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 200}ms` }}
      />
      {/* Sidebar */}
      <path
        d="M20 18v38"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 300}ms` }}
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
        style={{ animationDelay: `${delay + 450}ms` }}
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
        style={{ animationDelay: `${delay + 500}ms` }}
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
        style={{ animationDelay: `${delay + 600}ms` }}
      />
      {/* Sidebar dots */}
      <circle cx="14" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" style={{ animationDelay: `${delay + 400}ms` }} />
      <circle cx="14" cy="34" r="2" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" style={{ animationDelay: `${delay + 450}ms` }} />
      <circle cx="14" cy="42" r="2" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" style={{ animationDelay: `${delay + 500}ms` }} />
    </svg>
  );
});

LineDashboard.displayName = 'LineDashboard';

export default LineDashboard;
