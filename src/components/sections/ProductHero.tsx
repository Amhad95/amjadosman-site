import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { useLocale } from '@/lib/locale';

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
  const { locale, isRTL } = useLocale();
  const credibilityStrip = {
    en: 'Clear setup. Practical workflows. Clean handover. Ongoing admin support if useful.',
    ar: 'إعداد واضح. سير عمل عملي. تسليم نظيف. دعم إداري عند الحاجة.',
    de: 'Klare Einrichtung. Praktische Workflows. Saubere Übergabe. Laufende Administration, wenn sinnvoll.',
    fr: 'Configuration claire. Flux de travail pratiques. Transition propre. Support admin si utile.',
    bg: 'Ясна настройка. Практични работни процеси. Чисто предаване. Текуща админ поддръжка, ако е полезна.',
  }[locale];

  return (
    <section
      className={cn(
        'relative bg-background pt-24 md:pt-28 pb-8 md:pb-12',
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6 pt-6">
        <div
          className={cn(
            'hero-folder-card relative min-h-[440px] md:min-h-[500px] lg:min-h-[560px] px-6 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14 flex items-center',
            plateClasses[plate]
          )}
        >
          <div
            className={cn(
              'relative z-10 flex w-full flex-col lg:items-center lg:justify-between gap-8 lg:gap-12',
              isRTL ? 'lg:flex-row-reverse text-right' : 'lg:flex-row'
            )}
          >
            {/* Left: Text content */}
            <div className="motion-hero-copy max-w-4xl lg:max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-offwhite/70 font-semibold mb-4 md:mb-5">
                {productDescriptor}
              </p>
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
              <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
                <PrimaryButton href={primaryCta.href} textColor={plate}>
                  {primaryCta.label}
                </PrimaryButton>
                <SecondaryButton href={secondaryCta.href} variant="dark">
                  {secondaryCta.label}
                </SecondaryButton>
              </div>

              <p className="text-sm text-mint/70 font-medium tracking-wide">
                {credibilityStrip}
              </p>
            </div>

            {/* Right: ASCII Animation */}
            <div
              className={cn(
                'motion-hero-visual w-full lg:w-auto lg:max-w-[460px] lg:flex-shrink-0 flex justify-center mt-8 lg:mt-0 overflow-hidden [&_pre]:!text-[7px] sm:[&_pre]:!text-[8px] md:[&_pre]:!text-[9px] lg:[&_pre]:!text-[10px]',
                isRTL ? 'lg:justify-start' : 'lg:justify-end'
              )}
            >
              {asciiComponent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
