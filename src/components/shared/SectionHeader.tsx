import React from 'react'; 
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  className?: string;
  align?: 'left' | 'center';
  variant?: 'poster' | 'interface';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  headline,
  subheadline,
  className,
  align = 'left',
  variant = 'poster',
}) => {
  return (
    <div
      className={cn(
        'mb-8 md:mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'adsi-section-header font-serif',
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
