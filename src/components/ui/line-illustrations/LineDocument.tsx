import React from 'react';
import { cn } from '@/lib/utils';

interface LineDocumentProps {
  className?: string;
  delay?: number;
}

const LineDocumentComponent: React.FC<LineDocumentProps> = ({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full', className)}
      fill="none"
    >
      {/* Document outline */}
      <path
        d="M16 8h24l12 12v36H16V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw-line"
      />
      {/* Folded corner */}
      <path
        d="M40 8v12h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw-line"
      />
      {/* Text lines */}
      <path
        d="M24 28h20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
      />
      <path
        d="M24 36h20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
      />
      <path
        d="M24 44h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
      />
    </svg>
  );
};

export const LineDocument = React.memo(LineDocumentComponent);
export default LineDocument;
