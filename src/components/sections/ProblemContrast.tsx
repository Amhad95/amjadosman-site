import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

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
              'flex flex-col gap-3 p-5 rounded-xl',
              'bg-white border border-gray-200',
              'hover:border-gray-300 hover:shadow-md',
              'transition-all duration-300'
            )}
          >
            {/* Icon */}
            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <Icon className="w-4 h-4 text-gray-600" />
            </div>

            {/* Before */}
            <p className="text-xs text-gray-400 line-through decoration-gray-300">
              {item.before}
            </p>

            {/* Separator */}
            <div className="h-px bg-gray-200" />

            {/* After */}
            <p className="text-sm text-gray-900 font-semibold">
              {item.after}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProblemContrast;
