import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  icon: LucideIcon;
  animation?: 'float' | 'pulse' | 'breathe' | 'glow' | 'none';
  color?: 'ink' | 'mint' | 'lavender' | 'muted';
  size?: number;
  className?: string;
}

const AnimatedIconComponent: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  animation = 'float',
  color = 'ink',
  size = 24,
  className,
}) => {
  const colorClasses = {
    ink: 'text-foreground',
    mint: 'text-mint',
    lavender: 'text-lavender',
    muted: 'text-muted-foreground',
  };

  const animationClasses = {
    float: 'animate-icon-float',
    pulse: 'animate-icon-pulse',
    breathe: 'animate-icon-breathe',
    glow: 'animate-icon-glow',
    none: '',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        colorClasses[color],
        animationClasses[animation],
        className
      )}
    >
      <Icon size={size} strokeWidth={1.5} />
    </div>
  );
};

export const AnimatedIcon = React.memo(AnimatedIconComponent);
export default AnimatedIcon;
