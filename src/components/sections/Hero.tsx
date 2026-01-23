import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';

interface HeroProps {
  headline: string;
  subheadline?: string;
  credibilityStrip?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  plate?: PlateColor;
  className?: string;
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
  headline,
  subheadline,
  credibilityStrip,
  primaryCta,
  secondaryCta,
  plate = 'violet',
  className,
}) => {
  return (
    <section
      className={cn(
        'relative min-h-[70vh] md:min-h-[80vh] flex items-end',
        plateClasses[plate],
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 pt-28 md:pt-36 pb-12 md:pb-16 lg:pb-24">
        <div className="max-w-4xl">
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
                <PrimaryButton href={primaryCta.href}>
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
      </div>
    </section>
  );
};

export default Hero;
