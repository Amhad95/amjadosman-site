import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface CapabilityGridProps {
  capabilities: Capability[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const CapabilityGrid: React.FC<CapabilityGridProps> = ({
  capabilities,
  columns = 3,
  className,
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid grid-cols-1 gap-4', gridCols[columns], className)}>
      {capabilities.map((capability, index) => {
        const Icon = capability.icon;
        return (
          <div
            key={index}
            className={cn(
              'group p-5 rounded-xl',
              'bg-card border border-border',
              'hover:border-primary/30 hover:shadow-md',
              'transition-all duration-300'
            )}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={cn(
                'flex-shrink-0 w-10 h-10 rounded-lg',
                'bg-plate-astral flex items-center justify-center',
                'group-hover:scale-110 transition-transform duration-300'
              )}>
                <Icon className="w-5 h-5 text-mint" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground mb-1">
                  {capability.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CapabilityGrid;
