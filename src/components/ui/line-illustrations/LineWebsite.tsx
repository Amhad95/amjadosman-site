import React from 'react';
import { cn } from '@/lib/utils';

interface LineWebsiteProps {
  className?: string;
  delay?: number;
}

const LineWebsiteComponent: React.FC<LineWebsiteProps> = ({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full', className)}
      fill="none"
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
      />
      {/* URL bar */}
      <path
        d="M6 20h52"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      {/* Browser dots */}
      <circle cx="12" cy="15" r="1.5" stroke="currentColor" strokeWidth="1" className="animate-draw-line" />
      <circle cx="18" cy="15" r="1.5" stroke="currentColor" strokeWidth="1" className="animate-draw-line" />
      <circle cx="24" cy="15" r="1.5" stroke="currentColor" strokeWidth="1" className="animate-draw-line" />
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
      />
      {/* Image X */}
      <path
        d="M40 28l10 18M50 28l-10 18"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="animate-draw-line"
      />
    </svg>
  );
};

export const LineWebsite = React.memo(LineWebsiteComponent);
export default LineWebsite;
