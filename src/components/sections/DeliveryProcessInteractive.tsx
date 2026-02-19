import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  ChevronDown, Code2, Palette, Rocket, TreePine, Workflow,
  MessageSquare, FileText, Lock, Monitor, LucideIcon,
} from 'lucide-react';
import { AnimatedIcon } from '@/components/shared/AnimatedIcon';

interface DeliveryStep {
  title: string;
  ascii: string;
  summary: string;
  artifacts: string[];
  touchpoints: string;
  icon: LucideIcon;
}

const deliverySteps: DeliveryStep[] = [
  {
    title: 'Align',
    ascii: '[ ALIGN ]',
    summary: 'Scope, success metrics, constraints, and risks are locked before delivery starts.',
    artifacts: ['One-page brief', 'Success metrics', 'Risks & assumptions'],
    touchpoints: '1 kickoff',
    icon: Workflow,
  },
  {
    title: 'Map',
    ascii: '[ MAP ]',
    summary: 'Research findings and flow mapping create a shared model for design and implementation.',
    artifacts: ['Journey / flow map', 'Requirements set', 'Prioritisation list'],
    touchpoints: '1 review',
    icon: TreePine,
  },
  {
    title: 'Design',
    ascii: '[ DESIGN ]',
    summary: 'UX and interface decisions are validated early with async feedback loops.',
    artifacts: ['Clickable prototype', 'Design specs', 'Content outlines'],
    touchpoints: 'Async reviews + 1 checkpoint',
    icon: Palette,
  },
  {
    title: 'Build',
    ascii: '[ BUILD ]',
    summary: 'Implementation moves in working increments with integration and QA built in.',
    artifacts: ['Working increments', 'QA notes', 'Release plan'],
    touchpoints: 'Weekly 20-min checkpoint (only if needed)',
    icon: Code2,
  },
  {
    title: 'Launch',
    ascii: '[ LAUNCH ]',
    summary: 'Launch with handover, training, and a practical backlog for continuous improvements.',
    artifacts: ['Handover pack', 'Tracking plan', 'Iteration backlog'],
    touchpoints: '1 handover',
    icon: Rocket,
  },
];

const expectationItems = [
  { label: 'Weekly async update', icon: MessageSquare },
  { label: 'Decision log', icon: FileText },
  { label: 'Scope control', icon: Lock },
  { label: 'Working demos over slides', icon: Monitor },
];

const MARQUEE_TEXT = '[ intake ] → [ map ] → [ design ] → [ build ] → [ launch ] → [ iterate ] → ';

export const DeliveryProcessInteractive: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-plate-navy" aria-labelledby="delivery-heading">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-mint/60 font-semibold mb-4">Delivery</p>
          <h2 id="delivery-heading" className="font-serif text-poster-lg text-mint mb-4">
            Structured delivery, fewer meetings
          </h2>
          <p className="text-subheadline text-offwhite/70">
            Clear artifacts, async updates, and focused checkpoints. You get momentum without calendar chaos.
          </p>
        </div>

        {/* Animated terminal banner */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-plate-navy via-plate-astral to-plate-blue p-[1px]">
          <div className="rounded-2xl bg-ink px-5 py-4 md:px-6 md:py-5 overflow-hidden">
            <p className="text-xs uppercase tracking-[0.16em] text-mint/70 font-semibold mb-2">Delivery rhythm</p>
            <div className="overflow-hidden">
              <p
                className="font-mono text-mint text-sm whitespace-nowrap"
                style={{
                  display: 'inline-block',
                  animation: 'marquee-scroll 18s linear infinite',
                }}
              >
                {MARQUEE_TEXT}{MARQUEE_TEXT}{MARQUEE_TEXT}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">

          {/* Step nav */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-ink/40 p-3">
            {deliverySteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    'w-full text-left rounded-xl px-4 py-4 mb-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mint/40 focus:ring-offset-2 focus:ring-offset-plate-navy',
                    isActive
                      ? 'bg-white/10 border-l-2 border-mint pl-3'
                      : 'border border-transparent hover:bg-white/5'
                  )}
                  aria-expanded={isActive}
                  aria-controls={`delivery-panel-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-mint/10 border border-mint/25 flex items-center justify-center flex-shrink-0">
                      <AnimatedIcon icon={step.icon} color="mint" size={20} animation="pulse" />
                    </div>
                    <div>
                      <p className="font-serif text-lg text-offwhite leading-tight">
                        <span className="text-mint mr-1.5 font-mono text-sm font-normal">{String(index + 1).padStart(2, '0')}</span>
                        {step.title}
                      </p>
                      <p className="text-xs text-offwhite/50 mt-0.5">{step.touchpoints}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step detail */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-ink/40 p-7">
            {deliverySteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  id={`delivery-panel-${index}`}
                  key={step.title}
                  className={cn('transition-all duration-300', isActive ? 'block' : 'hidden')}
                >
                  <p className="font-mono text-2xl text-mint/50 tracking-widest mb-3 select-none">{step.ascii}</p>
                  <h3 className="font-serif text-heading-md text-offwhite mb-3">{step.title}</h3>
                  <p className="text-body-lg text-offwhite/75 mb-6">{step.summary}</p>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-offwhite/50 font-semibold mb-3">Artifacts</p>
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

        {/* Mobile accordion */}
        <div className="lg:hidden space-y-3">
          {deliverySteps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-ink/40 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                  className="w-full px-4 py-4 text-left flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-mint/40 focus:ring-inset"
                  aria-expanded={isActive}
                  aria-controls={`delivery-mobile-panel-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-mint/10 border border-mint/25 flex items-center justify-center flex-shrink-0">
                      <AnimatedIcon icon={step.icon} color="mint" size={18} animation="pulse" />
                    </div>
                    <div>
                      <p className="font-serif text-base text-offwhite">
                        <span className="font-mono text-xs text-mint mr-1">{String(index + 1).padStart(2, '0')}</span>
                        {step.title}
                      </p>
                      <p className="text-xs text-offwhite/50">{step.touchpoints}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn('h-4 w-4 text-offwhite/40 transition-transform duration-200 flex-shrink-0', isActive && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`delivery-mobile-panel-${index}`}
                  className={cn('grid transition-all duration-300 ease-out', isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 border-t border-white/10">
                      <p className="font-mono text-lg text-mint/50 tracking-widest mt-3 mb-2 select-none">{step.ascii}</p>
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

        {/* Footer strip */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-ink/40 p-4 md:p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-offwhite/50 font-semibold mb-3">What you can expect</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {expectationItems.map(({ label, icon: Icon }) => (
              <li key={label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 flex items-center gap-2 text-sm text-offwhite/90">
                <Icon size={14} className="text-mint flex-shrink-0" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Marquee keyframe */}
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
