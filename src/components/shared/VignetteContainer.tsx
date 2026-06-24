import React from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface VignetteContainerProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

export const VignetteContainer: React.FC<VignetteContainerProps> = ({
  children,
  label,
  className,
  aspectRatio = '16:9',
}) => {
  const reducedMotion = useReducedMotion();

  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
  };

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-xl',
          'bg-plate-astral border border-mint/20',
          aspectClasses[aspectRatio]
        )}
        data-reduced-motion={reducedMotion}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {children}
        </div>
      </div>
      {label && (
        <p className="text-sm text-muted-foreground text-center">{label}</p>
      )}
    </div>
  );
};

export default VignetteContainer;
