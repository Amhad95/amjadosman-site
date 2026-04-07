import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { Reveal, RevealGroup } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';
import { useSiteContent } from '@/lib/content';
import { cn } from '@/lib/utils';

export const OutcomesImpactSection: React.FC = () => {
  const { isRTL } = useLocale();
  const {
    home: { outcomesImpact },
  } = useSiteContent();

  return (
    <section className="py-16 md:py-24 bg-muted" aria-labelledby="outcomes-heading">
      <div className="container mx-auto px-4 md:px-6">

        <Reveal className={cn('max-w-3xl mb-10 md:mb-14', isRTL && 'text-right')}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
            {outcomesImpact.eyebrow}
          </p>
          <h2 id="outcomes-heading" className="font-serif text-poster-lg text-foreground mb-4">
            {outcomesImpact.headline}
          </h2>
          <p className="text-subheadline text-muted-foreground">
            {outcomesImpact.subheadline}
          </p>
        </Reveal>

        <RevealGroup className="divide-y divide-foreground/8" stagger={78}>
          {outcomesImpact.items.map((outcome, index) => (
            <div
              key={outcome.title}
              className="group grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-3 md:gap-10 py-7 md:py-8 hover:bg-foreground/[0.02] transition-colors duration-150 -mx-4 px-4 md:-mx-6 md:px-6"
              dir={isRTL ? 'rtl' : undefined}
            >
              <div
                className={cn(
                  'flex items-start gap-4',
                  isRTL && 'w-full text-right'
                )}
              >
                <span className="font-mono text-base text-foreground/40 mt-1 flex-shrink-0 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3
                  className={cn(
                    'font-serif text-heading-md text-foreground leading-snug',
                    isRTL && 'flex-1 text-right'
                  )}
                  dir={isRTL ? 'rtl' : undefined}
                >
                  {outcome.title}
                </h3>
              </div>
              <p
                className={cn(
                  'text-body-lg text-muted-foreground leading-relaxed md:pt-0.5',
                  isRTL ? 'md:text-right pr-8 md:pr-0' : 'pl-8 md:pl-0'
                )}
                dir={isRTL ? 'rtl' : undefined}
              >
                {outcome.body}
              </p>
            </div>
          ))}
        </RevealGroup>

        <Reveal
          className={cn(
            'mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:items-center',
            isRTL && 'sm:flex-row-reverse'
          )}
          variant="subtle"
        >
          <PrimaryButton href={outcomesImpact.primaryCta.href}>
            {outcomesImpact.primaryCta.label}
          </PrimaryButton>
          <SecondaryButton href={outcomesImpact.secondaryCta.href}>
            {outcomesImpact.secondaryCta.label}
          </SecondaryButton>
        </Reveal>
      </div>
    </section>
  );
};

export default OutcomesImpactSection;
