import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

const outcomes = [
  {
    title: "You know exactly what you're getting",
    body: 'A one-page brief per engagement — no ambiguity about scope, timeline, or what "done" means.',
  },
  {
    title: 'Your brand holds together under pressure',
    body: "Identity, messaging, and visual standards that don't fall apart when a new team member joins.",
  },
  {
    title: 'Your site earns its keep',
    body: 'A web presence that converts visitors into conversations, not just a digital brochure.',
  },
  {
    title: 'Your team stops re-explaining things',
    body: 'SOPs, governance, and templates that new people can pick up without hand-holding.',
  },
  {
    title: 'Decisions get made faster',
    body: 'Dashboards and briefs that cut the opinions loop and give leads clarity when it counts.',
  },
  {
    title: 'AI tools your team actually uses',
    body: 'Workflows with guardrails and adoption hooks — not automation for its own sake.',
  },
];

export const OutcomesImpactSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-muted" aria-labelledby="outcomes-heading">
      <div className="container mx-auto px-4 md:px-6">

        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">Outcomes</p>
          <h2 id="outcomes-heading" className="font-serif text-poster-lg text-foreground mb-4">
            What working together actually produces
          </h2>
          <p className="text-subheadline text-muted-foreground">
            Six things clients consistently walk away with — regardless of whether the engagement is brand, operations, web, or AI.
          </p>
        </div>

        <div className="divide-y divide-foreground/8">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className="group grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-3 md:gap-10 py-7 md:py-8 hover:bg-foreground/[0.02] transition-colors duration-150 -mx-4 px-4 md:-mx-6 md:px-6"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-foreground/30 mt-1.5 flex-shrink-0 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-heading-md text-foreground leading-snug">
                  {outcome.title}
                </h3>
              </div>
              <p className="text-body-md text-muted-foreground leading-relaxed md:pt-0.5 pl-8 md:pl-0">
                {outcome.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:items-center">
          <PrimaryButton href="/book">Book a 20-minute fit check</PrimaryButton>
          <SecondaryButton href="/work">See case studies</SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default OutcomesImpactSection;
