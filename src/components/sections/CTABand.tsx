import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

interface CTABandProps {
  headline?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'light' | 'dark';
  className?: string;
}

export const CTABand: React.FC<CTABandProps> = ({
  headline,
  description,
  primaryCta,
  secondaryCta,
  variant = 'light',
  className,
}) => {
  return (
    <section
      className={cn(
        'py-12 md:py-16',
        variant === 'dark' ? 'bg-ink text-offwhite' : 'bg-muted',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            {headline && (
              <h2 className={cn(
                'font-serif text-heading-md mb-2',
                variant === 'dark' ? 'text-mint' : 'text-foreground'
              )}>
                {headline}
              </h2>
            )}
            {description && (
              <p className={cn(
                'text-body-md max-w-xl',
                variant === 'dark' ? 'text-offwhite/70' : 'text-muted-foreground'
              )}>
                {description}
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <PrimaryButton href={primaryCta.href}>
                {primaryCta.label}
              </PrimaryButton>
            )}
            {secondaryCta && (
              <SecondaryButton
                href={secondaryCta.href}
                variant={variant === 'dark' ? 'dark' : 'light'}
              >
                {secondaryCta.label}
              </SecondaryButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
