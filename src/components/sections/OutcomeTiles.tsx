import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, Clock, Shield, Target } from 'lucide-react';

interface Outcome {
  headline: string;
  description: string;
  icon?: React.ElementType;
}

interface OutcomeTilesProps {
  outcomes: Outcome[];
  className?: string;
}

const defaultIcons = [TrendingUp, Clock, Shield, Target];

export const OutcomeTiles: React.FC<OutcomeTilesProps> = ({ outcomes, className }) => {
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-4', className)}>
      {outcomes.map((outcome, index) => {
        const Icon = outcome.icon || defaultIcons[index % defaultIcons.length];
        
        return (
          <div
            key={index}
            className={cn(
              'group p-5 rounded-xl',
              'bg-card border border-ink/10',
              'hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5',
              'transition-all duration-300'
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                'flex-shrink-0 w-10 h-10 rounded-lg',
                'bg-mint/10 text-mint',
                'flex items-center justify-center',
                'group-hover:bg-mint group-hover:text-ink',
                'transition-colors duration-300'
              )}>
                <Icon size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {outcome.headline}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OutcomeTiles;
