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
  className?: string;
  rightElement?: React.ReactNode;
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
  className,
  rightElement,
}) => {
  const { isRTL } = useLocale();
  return (
    <section
      className={cn(
        'relative min-h-[70vh] md:min-h-[80vh] flex items-end',
        plateClasses[plate],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 md:pb-16 lg:pb-24">
        <div
          className={cn(
            'flex flex-col lg:items-center lg:justify-between gap-8',
            isRTL ? 'lg:flex-row-reverse text-right' : 'lg:flex-row'
          )}
        >
          {/* Left: Text content */}
          <div className="motion-hero-copy max-w-4xl lg:max-w-2xl">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.22em] text-offwhite/70 font-semibold mb-4 md:mb-5">
                {eyebrow}
              </p>
            )}

            {/* Headline */}
            <h1 className="font-serif text-poster-xl text-mint mb-6 md:mb-8">
              {headline}
            </h1>

            {/* Subheadline */}
            {subheadline && (
              <p className="text-body-lg text-offwhite/80 max-w-2xl mb-8 md:mb-10">
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
                'motion-hero-visual w-full lg:w-auto lg:flex-shrink-0 flex justify-center mt-8 lg:mt-0',
                isRTL ? 'lg:justify-start' : 'lg:justify-end'
              )}
            >
              {rightElement}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
