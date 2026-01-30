import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';

interface ProductHeroProps {
  productName: string;
  productDescriptor: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  asciiComponent: React.ReactNode;
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

export const ProductHero: React.FC<ProductHeroProps> = ({
  productName,
  productDescriptor,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  asciiComponent,
  plate = 'astral',
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
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 md:pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Left: Text content */}
          <div className="max-w-2xl">
            {/* Product Name with TM */}
            <div className="mb-4">
              <span className="text-mint font-semibold text-sm uppercase tracking-wider">
                {productDescriptor}
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <h1 className="font-serif text-poster-xl text-mint">
                {productName}
              </h1>
              <span className="text-mint/70 text-sm align-super">™</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-heading-lg text-offwhite mb-4">
              {headline}
            </h2>

            {/* Subheadline */}
            <p className="text-body-lg text-offwhite/80 max-w-xl mb-8">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href={primaryCta.href} textColor={plate}>
                {primaryCta.label}
              </PrimaryButton>
              <SecondaryButton href={secondaryCta.href} variant="dark">
                {secondaryCta.label}
              </SecondaryButton>
            </div>
          </div>

          {/* Right: ASCII Animation */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              {asciiComponent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
