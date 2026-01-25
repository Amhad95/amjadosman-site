import React from 'react';
import { cn } from '@/lib/utils';

interface LineGearProps {
  className?: string;
  delay?: number;
}

const LineGearComponent: React.FC<LineGearProps> = ({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full text-foreground', className)}
      fill="none"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Outer gear teeth */}
      <path
        d="M32 8v6M32 50v6M8 32h6M50 32h6M15.5 15.5l4.2 4.2M44.3 44.3l4.2 4.2M15.5 48.5l4.2-4.2M44.3 19.7l4.2-4.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* Outer circle */}
      <circle
        cx="32"
        cy="32"
        r="16"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 300}ms` }}
      />
      {/* Inner circle */}
      <circle
        cx="32"
        cy="32"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 500}ms` }}
      />
    </svg>
  );
};

export const LineGear = React.memo(LineGearComponent);
export default LineGear;
