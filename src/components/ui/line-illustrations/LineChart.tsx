import React from 'react';
import { cn } from '@/lib/utils';

interface LineChartProps {
  className?: string;
  delay?: number;
}

export const LineChart: React.FC<LineChartProps> = ({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full text-foreground', className)}
      fill="none"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Axes */}
      <path
        d="M12 8v44h44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* Bar 1 */}
      <rect
        x="18"
        y="32"
        width="8"
        height="20"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 300}ms` }}
      />
      {/* Bar 2 */}
      <rect
        x="30"
        y="20"
        width="8"
        height="32"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 450}ms` }}
      />
      {/* Bar 3 */}
      <rect
        x="42"
        y="26"
        width="8"
        height="26"
        stroke="currentColor"
        strokeWidth="1.5"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 600}ms` }}
      />
    </svg>
  );
};

export default LineChart;
