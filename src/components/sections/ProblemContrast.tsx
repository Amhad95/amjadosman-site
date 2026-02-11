import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, LucideIcon } from 'lucide-react';

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
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-3', className)}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className={cn(
              'group flex items-center gap-4 p-4 rounded-xl',
              'bg-gradient-to-r from-gray-50 to-white',
              'border border-gray-200',
              'hover:border-gray-300 hover:shadow-md',
              'transition-all duration-300'
            )}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Icon className="w-4 h-4 text-gray-600" />
            </div>

            {/* Before */}
            <p className="flex-1 text-sm text-gray-400 line-through decoration-gray-300">
              {item.before}
            </p>

            {/* Chevron */}
            <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />

            {/* After */}
            <div className="flex-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <p className="text-sm text-gray-900 font-medium">
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
