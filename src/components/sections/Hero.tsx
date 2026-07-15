import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { useLocale } from '@/lib/locale';

type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';

interface HeroProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  credibilityStrip?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  plate?: PlateColor;
  size?: 'default' | 'compact';
  className?: string;
  rightElement?: React.ReactNode;
  copyAlign?: 'left' | 'center';
}

const plateClasses: Record<PlateColor, string> = {
  violet: 'bg-plate-violet',
  navy: 'bg-plate-navy',
  emerald: 'bg-plate-emerald',
  blue: 'bg-plate-blue',
  astral: 'bg-plate-astral',
  burgundy: 'bg-plate-burgundy',
};

export const Hero: React.FC<HeroProps> = ({
  eyebrow,
  headline,
  subheadline,
  credibilityStrip,
  primaryCta,
  secondaryCta,
  plate = 'violet',
  size = 'default',
  className,
  rightElement,
  copyAlign = 'left',
}) => {
  const { isRTL } = useLocale();
  return (
    <section
      className={cn(
        'relative bg-background',
        size === 'compact' ? 'pt-24 md:pt-28 pb-8 md:pb-12' : 'pt-24 md:pt-28 pb-8 md:pb-12',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <div
          className={cn(
            'hero-folder-card colored-surface-shadow relative flex items-center px-6 md:px-10 lg:px-12',
            size === 'compact'
              ? 'min-h-[200px] md:min-h-[220px] lg:min-h-[235px] py-7 md:py-8'
              : 'min-h-[340px] md:min-h-[360px] lg:min-h-[380px] py-10 md:py-12 lg:py-14',
            plateClasses[plate]
          )}
        >
          <div
            className={cn(
              'relative z-10 flex w-full flex-col lg:items-center lg:justify-between gap-8',
              isRTL ? 'lg:flex-row-reverse text-right' : 'lg:flex-row'
            )}
          >
            {/* Left: Text content */}
            <div className={cn('motion-hero-copy max-w-4xl lg:max-w-2xl', copyAlign === 'center' && 'text-center') }>
              {eyebrow && (
                <p className="text-xs uppercase tracking-[0.22em] text-offwhite/70 font-semibold mb-4 md:mb-5">
                  {eyebrow}
                </p>
              )}

              {/* Headline */}
              <h1 className={cn(
                "font-serif text-mint",
                size === 'compact' ? 'text-poster-lg mb-4 md:mb-5' : 'text-poster-xl mb-6 md:mb-8'
              )}>
                {headline}
              </h1>

              {/* Subheadline */}
              {subheadline && (
                <p className={cn(
                  "text-body-lg text-offwhite/80 max-w-2xl",
                  copyAlign === 'center' && 'mx-auto',
                  size === 'compact' ? 'mb-5 md:mb-6' : 'mb-8 md:mb-10'
                )}>
                  {subheadline}
                </p>
              )}

              {/* CTAs */}
              {(primaryCta || secondaryCta) && (
                <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
                  {primaryCta && (
                    <PrimaryButton href={primaryCta.href} textColor={plate}>
                      {primaryCta.label}
                    </PrimaryButton>
                  )}
                  {secondaryCta && (
                    <SecondaryButton href={secondaryCta.href} variant="dark">
                      {secondaryCta.label}
                    </SecondaryButton>
                  )}
                </div>
              )}

              {/* Credibility Strip */}
              {credibilityStrip && (
                <p className="text-sm text-mint/70 font-medium tracking-wide">
                  {credibilityStrip}
                </p>
              )}
            </div>

            {/* Right: Animation - visible on all screens */}
            {rightElement && (
              <div
                className={cn(
                  'motion-hero-visual w-full lg:w-auto lg:max-w-[460px] lg:flex-shrink-0 flex justify-center mt-8 lg:mt-0 overflow-hidden [&_pre]:!text-[7px] sm:[&_pre]:!text-[8px] md:[&_pre]:!text-[9px] lg:[&_pre]:!text-[10px]',
                  isRTL ? 'lg:justify-start' : 'lg:justify-end'
                )}
              >
                {rightElement}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
