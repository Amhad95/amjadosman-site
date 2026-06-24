import React from 'react';
import { cn } from '@/lib/utils';

interface LineBrandProps {
  className?: string;
  delay?: number;
}

const LineBrandComponent: React.FC<LineBrandProps> = ({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full', className)}
      fill="none"
    >
      {/* Style guide frame */}
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
      />
      {/* Color swatch row */}
      <rect x="14" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" />
      <rect x="26" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" />
      <rect x="38" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" />
      {/* Typography lines */}
      <path d="M14 30h36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-draw-line" />
      <path d="M14 38h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="animate-draw-line" />
      <path d="M14 44h20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="animate-draw-line" />
      {/* Logo placeholder */}
      <circle cx="44" cy="44" r="6" stroke="currentColor" strokeWidth="1.5" className="animate-draw-line" />
    </svg>
  );
};

export const LineBrand = React.memo(LineBrandComponent);
export default LineBrand;
