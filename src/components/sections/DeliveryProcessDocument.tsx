import React from 'react';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/locale';

interface DeliveryStep {
  title: string;
  ascii: string;
  summary: string;
  artifacts: string[];
  touchpoints: string;
}

interface DeliveryProcessContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  rhythmLabel: string;
  marqueeText: string;
  expectationsLabel: string;
  steps: DeliveryStep[];
  expectations: string[];
}

interface DeliveryProcessDocumentProps {
  deliveryProcess: DeliveryProcessContent;
}

export const DeliveryProcessDocument: React.FC<DeliveryProcessDocumentProps> = ({
  deliveryProcess,
}) => {
  const { isRTL } = useLocale();
  const featured = deliveryProcess.steps.slice(0, 3);

  return (
    <section
      className="bg-background py-6 md:py-12"
      aria-labelledby="delivery-process-document-heading"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            'min-w-0 grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start',
            isRTL && 'lg:grid-cols-[0.64fr_0.36fr]'
          )}
        >
          <aside className={cn('min-w-0 space-y-5 lg:sticky lg:top-28', isRTL && 'lg:order-2 text-right')}>
            <div className="rounded-[28px] bg-plate-emerald p-6 text-offwhite shadow-[0_22px_56px_-44px_rgba(8,15,32,0.32)]">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-offwhite/60">
                {deliveryProcess.eyebrow}
              </p>
              <h2 id="delivery-process-document-heading" className="font-serif text-heading-md text-mint">
                {deliveryProcess.headline}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-offwhite/78">
                {deliveryProcess.subheadline}
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/10 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-mint/80">
                  {deliveryProcess.expectationsLabel}
                </p>
                <ul className="space-y-2 text-sm leading-relaxed text-offwhite/80">
                  {deliveryProcess.expectations.map((expectation) => (
                    <li key={expectation} className={cn('flex gap-2', isRTL && 'flex-row-reverse')}>
                      <span className="font-mono text-mint" aria-hidden="true">→</span>
                      <span>{expectation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <nav className="rounded-[24px] border border-ink/10 bg-card p-5 shadow-[0_18px_48px_-42px_rgba(8,15,32,0.3)]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {deliveryProcess.rhythmLabel}
              </p>
              <div className="space-y-2">
                {deliveryProcess.steps.map((step, index) => (
                  <a
                    key={step.title}
                    href={`#delivery-step-${index}`}
                    className={cn(
                      'grid grid-cols-[auto_1fr] gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                      isRTL && 'grid-cols-[1fr_auto] text-right'
                    )}
                  >
                    <span className="font-mono text-xs text-foreground/35">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{step.title}</span>
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <div className={cn('min-w-0 space-y-8', isRTL && 'lg:order-1 text-right')}>
            <div className="rounded-[24px] border border-ink/10 bg-card p-5 shadow-[0_18px_48px_-42px_rgba(8,15,32,0.25)]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {deliveryProcess.rhythmLabel}
              </p>
              <p className="overflow-hidden whitespace-nowrap font-mono text-sm text-plate-emerald">
                {deliveryProcess.marqueeText}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {featured.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[24px] border border-ink/10 bg-card p-5 shadow-[0_18px_48px_-42px_rgba(8,15,32,0.25)]"
                >
                  <p className="mb-4 font-mono text-xs text-foreground/35">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mb-3 font-serif text-heading-md text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.summary}</p>
                </article>
              ))}
            </div>

            <div className="space-y-5">
              {deliveryProcess.steps.map((step, index) => (
                <article
                  id={`delivery-step-${index}`}
                  key={step.title}
                  className="scroll-mt-28 rounded-[24px] border border-ink/10 bg-card p-6 shadow-[0_18px_48px_-44px_rgba(8,15,32,0.26)] md:p-8"
                >
                  <div className={cn('mb-5 flex items-start gap-4', isRTL && 'flex-row-reverse')}>
                    <span className="mt-1 rounded-full bg-mint px-3 py-1 font-mono text-xs font-semibold text-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="mb-2 font-mono text-sm tracking-widest text-plate-emerald/70">
                        {step.ascii}
                      </p>
                      <h3 className="font-serif text-heading-md text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-body-md leading-relaxed text-muted-foreground">{step.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {step.artifacts.map((artifact) => (
                      <span
                        key={artifact}
                        className="rounded-xl border border-ink/10 bg-muted/55 px-3 py-2 text-sm text-foreground"
                      >
                        {artifact}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-plate-emerald">
                    {step.touchpoints}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcessDocument;
