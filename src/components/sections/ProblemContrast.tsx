import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ContrastItem {
  before: string;
  after: string;
  icon: LucideIcon;
}

interface ProblemContrastProps {
  items: ContrastItem[];
  className?: string;
}

export const ProblemContrast: React.FC<ProblemContrastProps> = ({
  items,
  className,
}) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4', className)}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={cn(
              'group p-5 rounded-xl',
              'bg-card border border-border',
              'hover:border-primary/30 hover:shadow-lg',
              'transition-all duration-300'
            )}
          >
            {/* Icon */}
            <div className={cn(
              'w-10 h-10 rounded-lg mb-4',
              'bg-plate-astral flex items-center justify-center',
              'group-hover:scale-110 transition-transform duration-300'
            )}>
              <Icon className="w-5 h-5 text-mint" />
            </div>

            {/* Before state */}
            <div className="mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">From</span>
              <p className="text-sm text-muted-foreground line-through decoration-red-400/50 mt-1">
                {item.before}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2 mb-3">
              <ArrowRight className="w-4 h-4 text-primary" />
            </div>

            {/* After state */}
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wide">To</span>
              <p className="text-sm text-foreground font-medium mt-1">
                {item.after}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProblemContrast;
