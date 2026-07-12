import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { BottomCTAAsciiObject, type BottomCTAVisualKey } from '@/components/sections/ctaObjects/BottomCTAAsciiObject';
import { useLocale } from '@/lib/locale';
import { MatrixCodeBackground } from '@/components/shared/MatrixCodeBackground';

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
  canvasColor?: string;
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
  canvasColor,
}) => {
  const { isRTL } = useLocale();
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        size === 'large' ? 'py-12 md:py-16' : 'py-10 md:py-14',
        (!className || !className.includes('bg-')) && 'bg-background',
        className
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <MatrixCodeBackground fontSize={18} color={canvasColor || "hsla(275, 100%, 50%, 0.12)"} speed={0.45} />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div
          className={cn(
            'rounded-[34px] px-6 py-10 md:px-10 md:py-12 lg:px-12',
            'flex flex-col gap-8 lg:items-center lg:justify-between',
            variant === 'dark'
              ? 'colored-surface-shadow bg-[hsl(var(--page-cta-bg))] text-offwhite'
              : 'bg-muted text-foreground border border-ink/8 shadow-[0_20px_54px_-44px_rgba(8,15,32,0.16)]',
            isRTL ? 'lg:flex-row' : 'lg:flex-row',
            size === 'large' ? 'lg:gap-16' : 'lg:gap-12'
          )}
        >
          <div className={cn('max-w-2xl', isRTL ? 'text-right' : 'text-left', !visualKey && 'max-w-3xl')}>
            {headline && (
              <h2
                className={cn(
                  'font-serif',
                  size === 'large' ? 'text-poster-xl mb-5' : 'text-poster-lg md:text-poster-xl mb-4',
                  variant === 'dark' ? 'text-offwhite' : 'text-foreground'
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
