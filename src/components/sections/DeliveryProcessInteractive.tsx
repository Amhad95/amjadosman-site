import React, { useMemo, useState } from 'react';
import {
  ChevronDown,
  Code2,
  FileText,
  Lock,
  LucideIcon,
  MessageSquare,
  Monitor,
  Palette,
  Rocket,
  TreePine,
  Workflow,
} from 'lucide-react';
import { AnimatedIcon } from '@/components/shared/AnimatedIcon';
import { MatrixCodeBackground } from '@/components/shared/MatrixCodeBackground';
import { cn } from '@/lib/utils';
import { useLocale } from '@/lib/locale';
import { useSiteContent } from '@/lib/content';

interface DeliveryStep {
  title: string;
  ascii: string;
  summary: string;
  artifacts: string[];
  touchpoints: string;
  icon: LucideIcon;
}

const stepIcons = [Workflow, TreePine, Palette, Code2, Rocket];
const expectationIcons = [MessageSquare, FileText, Lock, Monitor];

export const DeliveryProcessInteractive: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { isRTL } = useLocale();
  const {
    home: { deliveryProcess },
  } = useSiteContent();

  const deliverySteps = useMemo<DeliveryStep[]>(
    () =>
      deliveryProcess.steps.map((step, index) => ({
        ...step,
        icon: stepIcons[index] ?? Workflow,
      })),
    [deliveryProcess.steps]
  );

  const resolvedActiveStep =
    activeStep >= 0 ? Math.min(activeStep, deliverySteps.length - 1) : 0;
  const currentStep = deliverySteps[resolvedActiveStep];

  return (
    <section 
      className="relative overflow-hidden py-10 md:py-14 bg-background" 
      aria-labelledby="delivery-heading"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <MatrixCodeBackground fontSize={18} color="hsla(275, 100%, 50%, 0.12)" speed={0.45} />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="colored-surface-shadow rounded-[34px] bg-plate-navy px-6 py-10 md:px-10 md:py-12 lg:px-12">
        <div className={cn('section-intro-copy mb-10 md:mb-14', isRTL && 'me-auto text-right')}>
          <p className="text-xs uppercase tracking-[0.2em] text-mint/60 font-semibold mb-4">
            {deliveryProcess.eyebrow}
          </p>
          <h2 id="delivery-heading" className="font-serif text-poster-lg text-mint mb-4">
            {deliveryProcess.headline}
          </h2>
          <p className="text-subheadline text-offwhite/70">
            {deliveryProcess.subheadline}
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-gradient-to-r from-plate-navy via-plate-astral to-plate-blue p-[1px]">
          <div className="overflow-hidden rounded-2xl bg-[#373737] px-5 py-4 md:px-6 md:py-5">
            <p className={cn('text-xs uppercase tracking-[0.16em] text-mint/70 font-semibold mb-2', isRTL && 'text-right')}>
              {deliveryProcess.rhythmLabel}
            </p>
            <div className="overflow-hidden">
              <p
                className={cn('font-mono text-mint text-sm whitespace-nowrap', isRTL && 'text-right')}
                style={{
                  display: 'inline-block',
                  animation: 'marquee-scroll 18s linear infinite',
                  animationDirection: isRTL ? 'reverse' : 'normal',
                }}
              >
                {deliveryProcess.marqueeText}
                {deliveryProcess.marqueeText}
                {deliveryProcess.marqueeText}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-ink/40 p-3">
            {deliverySteps.map((step, index) => {
              const isActive = resolvedActiveStep === index;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    'w-full rounded-xl px-4 py-4 mb-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mint/40 focus:ring-offset-2 focus:ring-offset-plate-navy',
                    isActive
                      ? 'border border-mint/45 bg-white/10'
                      : 'border border-transparent hover:bg-white/5',
                    isRTL ? 'text-right' : 'text-left'
                  )}
                  aria-expanded={isActive}
                  aria-controls={`delivery-panel-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mint/10 border border-mint/25 flex items-center justify-center flex-shrink-0">
                      <AnimatedIcon icon={step.icon} color="mint" size={20} animation="pulse" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-lg text-offwhite leading-tight">
                        <span className={cn('text-mint font-mono text-sm font-normal', isRTL ? 'ml-1.5' : 'mr-1.5')}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {step.title}
                      </p>
                      <p className="text-xs text-offwhite/50 mt-0.5">{step.touchpoints}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-ink/40 p-7">
            {deliverySteps.map((step, index) => {
              const isActive = resolvedActiveStep === index;
              return (
                <div
                  id={`delivery-panel-${index}`}
                  key={step.title}
                  className={cn('transition-all duration-300', isActive ? 'block' : 'hidden', isRTL && 'text-right')}
                >
                  <p className="font-mono text-2xl text-mint/50 tracking-widest mb-3 select-none">
                    {step.ascii}
                  </p>
                  <h3 className="font-serif text-heading-md text-offwhite mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-lg text-offwhite/75 mb-6">{step.summary}</p>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-offwhite/50 font-semibold mb-3">
                      {isRTL ? 'المخرجات' : 'Artifacts'}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {step.artifacts.map((artifact) => (
                        <span
                          key={artifact}
                          className="rounded-lg bg-plate-navy text-mint text-sm px-3 py-1.5 border border-white/10"
                        >
                          {artifact}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-mint/20 text-mint text-xs font-semibold px-3 py-1">
                        {step.touchpoints}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden space-y-3">
          {deliverySteps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <article
                key={step.title}
                className={cn(
                  'rounded-2xl border border-white/10 bg-ink/40 overflow-hidden',
                  isRTL && 'text-right'
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                  className={cn(
                    'w-full px-4 py-4 flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-mint/40 focus:ring-inset'
                  )}
                  aria-expanded={isActive}
                  aria-controls={`delivery-mobile-panel-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-mint/10 border border-mint/25 flex items-center justify-center flex-shrink-0">
                      <AnimatedIcon icon={step.icon} color="mint" size={18} animation="pulse" />
                    </div>
                    <div className={cn(isRTL ? 'text-right' : 'text-left')}>
                      <p className="font-serif text-base text-offwhite">
                        <span className={cn('font-mono text-xs text-mint', isRTL ? 'ml-1' : 'mr-1')}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {step.title}
                      </p>
                      <p className="text-xs text-offwhite/50">{step.touchpoints}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 text-offwhite/40 transition-transform duration-200 flex-shrink-0',
                      isActive && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`delivery-mobile-panel-${index}`}
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 border-t border-white/10">
                      <p className="font-mono text-lg text-mint/50 tracking-widest mt-3 mb-2 select-none">
                        {step.ascii}
                      </p>
                      <p className="text-body-lg text-offwhite/75 mb-3">{step.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.artifacts.map((artifact) => (
                          <span
                            key={artifact}
                            className="rounded-lg bg-plate-navy text-mint text-xs px-2.5 py-1.5 border border-white/10"
                          >
                            {artifact}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-ink/40 p-4 md:p-5">
          <p className={cn('text-xs uppercase tracking-[0.16em] text-offwhite/50 font-semibold mb-3', isRTL && 'text-right')}>
            {deliveryProcess.expectationsLabel}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {deliveryProcess.expectations.map((label, index) => {
              const Icon = expectationIcons[index] ?? MessageSquare;
              return (
                <li
                  key={label}
                  className={cn(
                    'rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 flex items-center gap-2 text-sm text-offwhite/90',
                    isRTL && 'text-right'
                  )}
                >
                  <Icon size={14} className="text-mint flex-shrink-0" aria-hidden="true" />
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default DeliveryProcessInteractive;
