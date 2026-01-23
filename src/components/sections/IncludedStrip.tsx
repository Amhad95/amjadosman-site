import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface IncludedStripProps {
  headline: string;
  items: string[];
  className?: string;
}

export const IncludedStrip: React.FC<IncludedStripProps> = ({
  headline,
  items,
  className,
}) => {
  return (
    <div className={cn('bg-ink rounded-2xl p-6 md:p-8 animate-fade-in-up', className)}>
      <h3 className="font-serif text-heading-md text-mint mb-6 text-center">
        {headline}
      </h3>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex items-center gap-2 text-sm text-offwhite/80',
              'animate-fade-in-up',
              `stagger-${Math.min(index + 1, 5)}`
            )}
          >
            <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0">
              <Check size={12} className="text-mint" />
            </div>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncludedStrip;
