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
  size?: 'default' | 'large';
  className?: string;
}

export const CTABand: React.FC<CTABandProps> = ({
  headline,
  description,
  primaryCta,
  secondaryCta,
  variant = 'light',
  size = 'default',
  className,
}) => {
  return (
    <section
      className={cn(
        size === 'large' ? 'py-16 md:py-24' : 'py-12 md:py-16',
        variant === 'dark' ? 'bg-ink text-offwhite' : 'bg-muted',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={cn(
          'flex flex-col gap-6',
          size === 'large' 
            ? 'md:flex-col items-start' 
            : 'md:flex-row md:items-center md:justify-between'
        )}>
          <div className={size === 'large' ? 'max-w-2xl' : ''}>
            {headline && (
              <h2 className={cn(
                'font-serif mb-3',
                size === 'large' ? 'text-heading-lg' : 'text-heading-md',
                variant === 'dark' ? 'text-mint' : 'text-foreground'
              )}>
                {headline}
              </h2>
            )}
            {description && (
              <p className={cn(
                'max-w-xl',
                size === 'large' ? 'text-lg' : 'text-body-md',
                variant === 'dark' ? 'text-offwhite/70' : 'text-muted-foreground'
              )}>
                {description}
              </p>
            )}
          </div>
          
          <div className={cn(
            'flex flex-wrap gap-4',
            size === 'large' && 'mt-4'
          )}>
            {primaryCta && (
              <PrimaryButton href={primaryCta.href} size={size === 'large' ? 'lg' : 'default'}>
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
