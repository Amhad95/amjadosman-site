import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, Check } from 'lucide-react';

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
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-200 divide-y divide-gray-100',
        className
      )}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="py-4 px-5">
            {/* Before line */}
            <div className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-gray-400 shrink-0" />
              <span className="text-sm text-gray-400 line-through decoration-gray-300">
                {item.before}
              </span>
            </div>

            {/* After line */}
            <div className="flex items-center justify-between mt-2 pl-6">
              <span className="text-sm text-gray-900 font-medium">
                {item.after}
              </span>
              <Check className="w-4 h-4 text-gray-300 shrink-0" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProblemContrast;
