import React from 'react';
import { cn } from '@/lib/utils';

interface Option {
  label: string;
  anchor: string;
}

interface DecisionHelperProps {
  headline: string;
  options: Option[];
  className?: string;
}

export const DecisionHelper: React.FC<DecisionHelperProps> = ({
  headline,
  options,
  className,
}) => {
  const handleClick = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn('bg-muted rounded-2xl p-6 md:p-8', className)}>
      <h3 className="font-serif text-xl text-foreground mb-4 text-center">
        {headline}
      </h3>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option.anchor)}
            className={cn(
              'px-4 py-3 rounded-lg',
              'bg-card border border-ink/10',
              'text-sm font-medium text-foreground',
              'hover:border-lavender hover:bg-lavender/5',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-offset-2'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DecisionHelper;
