import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  headline: string;
  subheadline?: string;
  className?: string;
  align?: 'left' | 'center';
  variant?: 'poster' | 'interface';
  accentLine?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  headline,
  subheadline,
  className,
  align = 'left',
  variant = 'poster',
  accentLine = false,
}) => {
  return (
    <div
      className={cn(
        'mb-8 md:mb-12 animate-fade-in-up',
        align === 'center' && 'text-center',
        className
      )}
    >
      {accentLine && (
        <div className={cn(
          "w-16 h-1 bg-gradient-to-r from-mint to-lavender rounded-full mb-6",
          align === 'center' && 'mx-auto'
        )} />
      )}
      <h2
        className={cn(
          'font-serif',
          variant === 'poster' ? 'text-poster-lg' : 'text-heading-lg',
          'text-foreground mb-4'
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p className="text-body-lg text-muted-foreground max-w-3xl">
          {subheadline}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
