import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { BottomCTAAsciiObject, type BottomCTAVisualKey } from '@/components/sections/ctaObjects/BottomCTAAsciiObject';
import { useLocale } from '@/lib/locale';

type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy' | 'ink';

interface CTABandProps {
  headline?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visualKey?: BottomCTAVisualKey;
  variant?: 'light' | 'dark';
  size?: 'default' | 'large';
  className?: string;
  plateColor?: PlateColor;
}

export const CTABand: React.FC<CTABandProps> = ({
  headline,
  description,
  primaryCta,
  secondaryCta,
  visualKey,
  variant = 'light',
  size = 'default',
  className,
  plateColor,
}) => {
  const { isRTL } = useLocale();
  return (
    <section
      className={cn(
        size === 'large' ? 'py-16 md:py-20' : 'py-14 md:py-16',
        variant === 'dark' ? 'bg-[#373737] text-offwhite' : 'bg-muted',
        'overflow-hidden',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            'flex flex-col gap-8 lg:items-center lg:justify-between',
            isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row',
            size === 'large' ? 'lg:gap-16' : 'lg:gap-12'
          )}
        >
          <div className={cn('max-w-2xl', isRTL ? 'text-right' : 'text-left', !visualKey && 'max-w-3xl')}>
            {headline && (
              <h2
                className={cn(
                  'font-serif',
                  size === 'large' ? 'text-poster-xl mb-5' : 'text-poster-lg md:text-poster-xl mb-4',
                  variant === 'dark' ? 'text-mint' : 'text-foreground'
                )}
              >
                {headline}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  'max-w-2xl',
                  size === 'large' ? 'text-body-lg' : 'text-body-lg',
                  variant === 'dark' ? 'text-offwhite/80' : 'text-muted-foreground'
                )}
              >
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryCta && (
                  <PrimaryButton
                    href={primaryCta.href}
                    size={size === 'large' ? 'lg' : 'default'}
                    textColor={plateColor}
                  >
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
            )}
          </div>

          {visualKey && (
            <div className={cn('w-full lg:w-auto lg:flex-shrink-0 flex', isRTL ? 'justify-end lg:justify-start' : 'justify-start lg:justify-end')}>
              <div
                className={cn(
                  'w-full',
                  size === 'large' ? 'max-w-[340px] sm:max-w-[380px] lg:max-w-[440px]' : 'max-w-[320px] sm:max-w-[360px] lg:max-w-[420px]'
                )}
              >
                <BottomCTAAsciiObject visualKey={visualKey} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABand;
