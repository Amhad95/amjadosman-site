import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface LineTreeProps {
  className?: string;
  delay?: number;
}

export const LineTree = memo<LineTreeProps>(({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full text-foreground', className)}
      fill="none"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Root folder */}
      <path
        d="M8 12h12l4 4h24v4H8V12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* Trunk line */}
      <path
        d="M16 20v36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 200}ms` }}
      />
      {/* Branch 1 */}
      <path
        d="M16 28h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 300}ms` }}
      />
      <rect
        x="26"
        y="24"
        width="24"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 350}ms` }}
      />
      {/* Branch 2 */}
      <path
        d="M16 40h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 450}ms` }}
      />
      <rect
        x="26"
        y="36"
        width="20"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 500}ms` }}
      />
      {/* Branch 3 */}
      <path
        d="M16 52h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 600}ms` }}
      />
      <rect
        x="26"
        y="48"
        width="16"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 650}ms` }}
      />
    </svg>
  );
});

LineTree.displayName = 'LineTree';

export default LineTree;
