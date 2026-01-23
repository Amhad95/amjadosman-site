import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

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
    <div className={cn('bg-muted rounded-2xl p-6 md:p-8 animate-fade-in-up', className)}>
      <h3 className="font-serif text-heading-md text-foreground mb-6 text-center">
        {headline}
      </h3>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option.anchor)}
            className={cn(
              'group px-5 py-4 rounded-xl',
              'bg-card border border-ink/10',
              'text-sm font-medium text-foreground',
              'hover:border-lavender hover:bg-lavender/5 hover:shadow-lg',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-offset-2',
              'flex items-center justify-center gap-2'
            )}
          >
            {option.label}
            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DecisionHelper;
