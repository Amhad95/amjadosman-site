import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { Reveal, RevealGroup } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';
import { useSiteContent } from '@/lib/content';
import { cn } from '@/lib/utils';

const OUTCOME_ASCII = ['[✓]', 'o─o', '▁▃▆↗', '<↻>', '»»', '{*}'] as const;
const OUTCOME_ASCII_MOTION = [
  'outcome-float-y-soft',
  'outcome-float-x',
  'outcome-float-y',
  'outcome-rotate-slow',
  'outcome-float-x',
  'outcome-pulse-soft',
] as const;

export const OutcomesImpactSection: React.FC = () => {
  const { isRTL } = useLocale();
  const {
    home: { outcomesImpact },
  } = useSiteContent();

  return (
    <section
      id="outcomes"
      className="scroll-mt-32 bg-[hsl(var(--section-coral))] py-16 md:py-24"
      aria-labelledby="outcomes-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <Reveal className={cn('max-w-5xl', isRTL && 'me-auto text-right')}>
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground/65">
            {outcomesImpact.eyebrow}
          </p>
          <h2 id="outcomes-heading" className="mb-5 font-serif text-poster-lg text-foreground">
            {outcomesImpact.headline}
          </h2>
          <p className="max-w-3xl text-subheadline text-muted-foreground">
            {outcomesImpact.subheadline}
          </p>
        </Reveal>

        <RevealGroup
          className="mt-10 divide-y divide-foreground/20 border-y border-foreground/20 md:mt-12"
          stagger={64}
        >
          {outcomesImpact.items.map((outcome, index) => {
            const titleWords = outcome.title.trim().split(/\s+/);
            const finalWord = titleWords.pop() ?? outcome.title;
            const leadingWords = titleWords.join(' ');

            return (
              <article
                key={outcome.title}
                className={cn(
                  'outcome-motion outcome-motion-card grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 gap-y-4 py-7 md:grid-cols-[3.5rem_minmax(0,1.35fr)_minmax(0,1fr)] md:items-start md:gap-x-8 md:py-8',
                  isRTL && 'text-right'
                )}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <span className="pt-1 font-mono text-sm text-foreground/45" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="font-serif text-heading-md font-normal leading-snug text-foreground">
                  {leadingWords ? `${leadingWords} ` : null}
                  <span className="inline-flex whitespace-nowrap items-baseline">
                    <span>{finalWord}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'ms-[0.26em] inline-block font-mono text-[0.78em] leading-none tracking-normal text-plate-violet md:text-[0.82em]',
                        OUTCOME_ASCII_MOTION[index]
                      )}
                      style={{ animationDelay: `${index * -0.43}s` }}
                    >
                      {OUTCOME_ASCII[index]}
                    </span>
                  </span>
                </h3>

                <p className="col-start-2 text-body-lg leading-relaxed text-muted-foreground md:col-start-3 md:pt-0.5">
                  {outcome.body}
                </p>
              </article>
            );
          })}
        </RevealGroup>

        <Reveal
          className={cn(
            'mt-10 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-12',
            isRTL && 'sm:flex-row-reverse sm:justify-end'
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
