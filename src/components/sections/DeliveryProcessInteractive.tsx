import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface DeliveryStep {
  title: string;
  summary: string;
  artifacts: string[];
  touchpoints: string;
}

const deliverySteps: DeliveryStep[] = [
  {
    title: 'Align',
    summary: 'Scope, success metrics, constraints, and risks are locked before delivery starts.',
    artifacts: ['One-page brief', 'Success metrics', 'Risks and assumptions'],
    touchpoints: '1 kickoff',
  },
  {
    title: 'Map',
    summary: 'Research findings and flow mapping create a shared model for design and implementation.',
    artifacts: ['Journey map or flow map', 'Requirements set', 'Prioritization list'],
    touchpoints: '1 review',
  },
  {
    title: 'Design',
    summary: 'UX and interface decisions are validated early with async feedback loops.',
    artifacts: ['Clickable prototype', 'Design specifications', 'Content outlines'],
    touchpoints: 'Async reviews + 1 checkpoint',
  },
  {
    title: 'Build',
    summary: 'Implementation moves in working increments with integration and QA built in.',
    artifacts: ['Working increments', 'QA notes', 'Release plan'],
    touchpoints: 'Weekly 20-min checkpoint (only if needed)',
  },
  {
    title: 'Launch and Iterate',
    summary: 'Launch with handover, training, and a practical backlog for continuous improvements.',
    artifacts: ['Handover pack', 'Tracking plan', 'Iteration backlog'],
    touchpoints: '1 handover',
  },
];

const expectationItems = [
  'Weekly async update',
  'Decision log',
  'Scope control',
  'Working demos over slide decks',
];

export const DeliveryProcessInteractive: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-background" aria-labelledby="delivery-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">Delivery</p>
          <h2 id="delivery-heading" className="font-serif text-poster-lg text-foreground mb-4">
            Structured delivery, fewer meetings
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Clear artifacts, async updates, and focused checkpoints. You get momentum without calendar chaos.
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-2xl border border-border bg-card/80 p-3">
            {deliverySteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={cn(
                    'w-full text-left rounded-xl px-4 py-4 mb-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-offset-2',
                    isActive ? 'bg-muted border border-border' : 'border border-transparent hover:bg-muted/65'
                  )}
                  aria-expanded={isActive}
                  aria-controls={`delivery-panel-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors',
                        isActive ? 'bg-mint text-ink' : 'bg-muted text-muted-foreground'
                      )}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{step.title}</p>
                      <p className="text-sm text-muted-foreground">{step.touchpoints}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-border bg-card/80 p-7">
            {deliverySteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  id={`delivery-panel-${index}`}
                  key={step.title}
                  className={cn(
                    'transition-all duration-300',
                    isActive ? 'opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-2'
                  )}
                >
                  <h3 className="font-serif text-heading-md text-foreground mb-3">{step.title}</h3>
                  <p className="text-body-md text-muted-foreground mb-5">{step.summary}</p>
                  <div className="rounded-xl bg-muted/65 border border-border/80 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-3">Artifacts</p>
                    <ul className="space-y-2 mb-4">
                      {step.artifacts.map((artifact) => (
                        <li key={artifact} className="text-sm text-foreground/90 flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint flex-shrink-0" aria-hidden="true" />
                          <span>{artifact}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Touchpoints:</span> {step.touchpoints}
                    </p>
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
              <article key={step.title} className="rounded-2xl border border-border bg-card/80 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveStep(isActive ? -1 : index)}
                  className="w-full px-4 py-4 text-left flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-inset"
                  aria-expanded={isActive}
                  aria-controls={`delivery-mobile-panel-${index}`}
                >
                  <div>
                    <p className="font-semibold text-foreground">{index + 1}. {step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.touchpoints}</p>
                  </div>
                  <ChevronDown
                    className={cn('h-4 w-4 text-muted-foreground transition-transform duration-200', isActive && 'rotate-180')}
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
                    <div className="px-4 pb-4 border-t border-border/70">
                      <p className="text-sm text-muted-foreground mt-3 mb-3">{step.summary}</p>
                      <ul className="space-y-2 mb-3">
                        {step.artifacts.map((artifact) => (
                          <li key={artifact} className="text-sm text-foreground/90 flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint flex-shrink-0" aria-hidden="true" />
                            <span>{artifact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-muted/50 p-4 md:p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-3">What you can expect</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {expectationItems.map((item) => (
              <li key={item} className="rounded-lg border border-border bg-card/80 px-3 py-2 text-sm text-foreground/90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcessInteractive;
