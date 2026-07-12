import React, { useId, useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { Reveal, RevealGroup } from '@/components/motion/Reveal';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/locale';
import { getUiCopy } from '@/lib/uiCopy';

interface ServiceDeliveryStep {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ServiceDeliverySectionProps {
  eyebrow?: string;
  headline?: string;
  subheadline: string;
  steps: ServiceDeliveryStep[];
  className?: string;
}

export const ServiceDeliverySection: React.FC<ServiceDeliverySectionProps> = ({
  eyebrow = 'Delivery',
  headline = 'How the work runs',
  subheadline,
  steps,
  className,
}) => {
  const headingId = useId();
  const [activeStep, setActiveStep] = useState(0);
  const { locale, isRTL } = useLocale();
  const copy = getUiCopy(locale);
  const deliveryRhythm = locale === 'ar' ? 'النطاق -> التنفيذ -> التسليم' : locale === 'de' ? 'Umfang -> Umsetzung -> Übergabe' : locale === 'fr' ? 'cadrage -> réalisation -> passation' : locale === 'bg' ? 'обхват -> изработка -> предаване' : 'scope -> build -> handover';
  const resolvedEyebrow = locale === 'ar' && eyebrow === 'Delivery' ? 'التسليم' : eyebrow;
  const resolvedHeadline =
    locale === 'ar' && headline === 'How the work runs' ? 'كيف يسير العمل' : headline;
  const stageLabel = copy.stage;
  const progressAriaLabel = copy.deliveryProgress;

  const resolvedActiveStep =
    steps.length > 0 ? Math.min(activeStep, steps.length - 1) : 0;
  const currentStep = steps[resolvedActiveStep];
  const CurrentIcon = currentStep?.icon;

  return (
    <section
      aria-labelledby={headingId}
      className={cn('bg-background py-10 text-offwhite md:py-14', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="colored-surface-shadow rounded-[34px] bg-plate-violet px-6 py-10 md:px-10 md:py-12 lg:px-12">
        <Reveal className={cn('section-intro-copy', isRTL && 'me-auto text-right')} variant="subtle">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-offwhite/55">
            {resolvedEyebrow}
          </p>
          <h2 id={headingId} className="mb-4 font-serif text-poster-lg text-mint">
            {resolvedHeadline}
          </h2>
          <p className="text-subheadline text-offwhite/80">
            {subheadline}
          </p>
        </Reveal>
        <p className={cn('mt-5 mb-8 font-mono text-sm font-medium uppercase tracking-[0.18em] text-mint/72 md:mb-10', isRTL && 'text-right')}>
          {deliveryRhythm}
        </p>

        <div className="hidden lg:grid lg:grid-cols-[0.84fr_1.16fr] lg:gap-8">
          <Reveal className="relative" variant="subtle" once>
            <div className="rounded-[24px] border border-white/12 bg-white/5 p-2 backdrop-blur-xl shadow-2xl shadow-black/20">
              <RevealGroup
                as="div"
                className="relative"
                variant="subtle"
                stagger={52}
                once
              >
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === resolvedActiveStep;

                  return (
                    <button
                      key={`${step.title}-${index}`}
                      type="button"
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      'grid w-full grid-cols-[auto_auto_1fr] items-center gap-4 border-b border-white/10 px-4 py-4 transition-colors duration-200 last:border-b-0',
                      isRTL && 'text-right',
                      isActive
                        ? 'rounded-2xl border-2 border-mint/55 bg-black/10'
                        : 'hover:bg-black/5'
                    )}
                    aria-pressed={isActive}
                    aria-controls="service-delivery-panel"
                    >
                      <span
                        className={cn(
                          'self-start font-mono text-sm transition-colors duration-200',
                          isRTL ? 'border-r-2 pr-4' : 'border-l-2 pl-4',
                          isActive ? 'border-mint text-mint' : 'border-transparent text-offwhite/40'
                        )}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div
                        className={cn(
                          'mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border transition-colors duration-200',
                          isActive
                            ? 'border-mint/55 bg-black/10 text-mint'
                            : 'border-white/10 bg-black/10 text-offwhite/66'
                        )}
                        aria-hidden="true"
                      >
                        {Icon ? <Icon size={16} strokeWidth={1.8} /> : null}
                      </div>

                      <div className={cn('min-w-0', isRTL ? 'pl-4' : 'pr-4')}>
                        <p
                          className={cn(
                            'font-serif text-lg leading-tight transition-colors duration-200',
                            isActive ? 'text-mint' : 'text-offwhite'
                          )}
                        >
                          {step.title}
                        </p>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-offwhite/48">
                          {stageLabel} {String(index + 1).padStart(2, '0')}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </RevealGroup>
            </div>
          </Reveal>

          <Reveal className="self-start" variant="subtle" once>
            <div
              id="service-delivery-panel"
              className="rounded-[28px] border border-white/12 bg-white/5 p-2 backdrop-blur-xl shadow-2xl shadow-black/20"
            >
              <div className="relative rounded-[22px] border-2 border-mint/55 bg-black/10 p-6 md:p-7">
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-5 font-serif text-6xl leading-none text-mint/12',
                    isRTL ? 'left-6' : 'right-6'
                  )}
                >
                  {String(resolvedActiveStep + 1).padStart(2, '0')}
                </span>

                <div className={cn('flex flex-wrap items-center gap-3', isRTL && 'flex-row-reverse justify-end')}>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-mint/78">
                    {stageLabel} {String(resolvedActiveStep + 1).padStart(2, '0')} {copy.of} {String(steps.length).padStart(2, '0')}
                  </p>
                  {CurrentIcon ? (
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-mint/55 bg-black/10 text-mint">
                      <CurrentIcon size={15} strokeWidth={1.8} />
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-5 max-w-2xl font-serif text-heading-lg text-mint">
                  {currentStep?.title}
                </h3>
                <p className="mt-4 max-w-2xl text-body-lg text-offwhite/80">
                  {currentStep?.description}
                </p>

                <div className={cn('mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4', isRTL && 'flex-row-reverse')}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-offwhite/52">
                    {deliveryRhythm}
                  </p>
                  <div className="flex items-center gap-2" aria-label={progressAriaLabel}>
                    {steps.map((step, index) => (
                      <span
                        key={`${step.title}-marker-${index}`}
                        className={cn(
                          'h-2 w-2 rounded-full border border-white/18 transition-colors duration-200',
                          index === resolvedActiveStep ? 'bg-mint border-mint' : 'bg-transparent'
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative lg:hidden" variant="subtle" once>
          <div className="rounded-[24px] border border-white/12 bg-white/5 p-2 backdrop-blur-xl shadow-2xl shadow-black/20">
            <RevealGroup
              as="div"
              className="relative"
              variant="subtle"
              stagger={48}
              once
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === resolvedActiveStep;

                return (
                  <div key={`${step.title}-${index}`} className="border-b border-white/10 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={cn(
                        'grid w-full grid-cols-[auto_auto_1fr_auto] items-center gap-3 px-4 py-4 transition-colors duration-200',
                        isRTL && 'text-right',
                        isActive
                          ? 'rounded-2xl border-2 border-mint/55 bg-black/10'
                          : 'hover:bg-black/5'
                      )}
                      aria-expanded={isActive}
                      aria-controls={`service-delivery-mobile-panel-${index}`}
                    >
                      <span
                        className={cn(
                          'font-mono text-sm transition-colors duration-200',
                          isRTL ? 'border-r-2 pr-4' : 'border-l-2 pl-4',
                          isActive ? 'border-mint text-mint' : 'border-transparent text-offwhite/40'
                        )}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div
                        className={cn(
                          'flex h-8 w-8 items-center justify-center rounded-lg border transition-colors duration-200',
                          isActive
                            ? 'border-mint/55 bg-black/10 text-mint'
                            : 'border-white/10 bg-black/10 text-offwhite/66'
                        )}
                        aria-hidden="true"
                      >
                        {Icon ? <Icon size={15} strokeWidth={1.8} /> : null}
                      </div>

                      <div className={cn('min-w-0', isRTL ? 'pl-2' : 'pr-2')}>
                        <p
                          className={cn(
                            'font-serif text-lg leading-tight transition-colors duration-200',
                            isActive ? 'text-mint' : 'text-offwhite'
                          )}
                        >
                          {step.title}
                        </p>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-offwhite/48">
                          {stageLabel} {String(index + 1).padStart(2, '0')}
                        </p>
                      </div>

                      <ChevronDown
                        className={cn(
                          'h-4 w-4 text-offwhite/45 transition-transform duration-200',
                          isRTL ? 'ml-1' : 'mr-1',
                          isActive && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      id={`service-delivery-mobile-panel-${index}`}
                      className={cn(
                        'grid transition-all duration-300 ease-out',
                        isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="rounded-b-2xl border-x-2 border-b-2 border-mint/55 bg-black/10 px-4 pb-4 pt-4">
                          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-mint/75">
                            {stageLabel} {String(index + 1).padStart(2, '0')} {copy.of} {String(steps.length).padStart(2, '0')}
                          </p>
                          <p className="mt-3 text-body-md text-offwhite/80">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </RevealGroup>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ServiceDeliverySection;
