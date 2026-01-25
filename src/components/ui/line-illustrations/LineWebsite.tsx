import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface LineWebsiteProps {
  className?: string;
  delay?: number;
}

export const LineWebsite = memo<LineWebsiteProps>(({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full text-foreground', className)}
      fill="none"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Browser frame */}
      <rect
        x="6"
        y="10"
        width="52"
        height="44"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* URL bar */}
      <path
        d="M6 20h52"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 200}ms` }}
      />
      {/* Browser dots */}
      <circle cx="12" cy="15" r="1.5" stroke="currentColor" strokeWidth="1" className="animate-draw-line" style={{ animationDelay: `${delay + 150}ms` }} />
      <circle cx="18" cy="15" r="1.5" stroke="currentColor" strokeWidth="1" className="animate-draw-line" style={{ animationDelay: `${delay + 175}ms` }} />
      <circle cx="24" cy="15" r="1.5" stroke="currentColor" strokeWidth="1" className="animate-draw-line" style={{ animationDelay: `${delay + 200}ms` }} />
      {/* Hero section */}
      <rect
        x="12"
        y="26"
        width="20"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 350}ms` }}
      />
      {/* CTA button */}
      <rect
        x="12"
        y="40"
        width="12"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 450}ms` }}
      />
      {/* Image placeholder */}
      <rect
        x="38"
        y="26"
        width="14"
        height="22"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 500}ms` }}
      />
      {/* Image X */}
      <path
        d="M40 28l10 18M50 28l-10 18"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 600}ms` }}
      />
    </svg>
  );
});

LineWebsite.displayName = 'LineWebsite';

export default LineWebsite;
