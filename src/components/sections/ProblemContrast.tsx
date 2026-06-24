import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon, Check } from 'lucide-react';
import { useLocale } from '@/lib/locale';

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
  const { isRTL } = useLocale();
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-200',
        className
      )}
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="bg-white p-6 flex flex-col gap-4">
            {/* Icon + Before */}
            <div className={cn('flex items-start gap-3', isRTL && 'flex-row-reverse text-right')}>
              <Icon className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-500 line-through decoration-gray-400">
                {item.before}
              </p>
            </div>

            {/* After */}
            <div className={cn('flex items-start gap-3', isRTL ? 'pr-8 flex-row-reverse text-right' : 'pl-8')}>
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-foreground font-semibold">
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
