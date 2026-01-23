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
    <div className={cn('bg-ink rounded-2xl p-6 md:p-8', className)}>
      <h3 className="font-serif text-lg text-mint mb-4 text-center">
        {headline}
      </h3>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-offwhite/80"
          >
            <Check size={16} className="text-mint flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncludedStrip;
