import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface LineDocumentProps {
  className?: string;
  delay?: number;
}

export const LineDocument = memo<LineDocumentProps>(({ className, delay = 0 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('w-full h-full text-foreground', className)}
      fill="none"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Document outline */}
      <path
        d="M16 8h24l12 12v36H16V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay}ms` }}
      />
      {/* Folded corner */}
      <path
        d="M40 8v12h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 200}ms` }}
      />
      {/* Text lines */}
      <path
        d="M24 28h20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 400}ms` }}
      />
      <path
        d="M24 36h20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 500}ms` }}
      />
      <path
        d="M24 44h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw-line"
        style={{ animationDelay: `${delay + 600}ms` }}
      />
    </svg>
  );
});

LineDocument.displayName = 'LineDocument';

export default LineDocument;
