import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

interface OutcomeCard {
  title: string;
  description: string;
  outputs?: string[];
}

const outcomes: OutcomeCard[] = [
  {
    title: 'Faster delivery cycles',
    description: 'From scope to shipped increments with clear artifacts and decision points.',
    outputs: ['Scope brief', 'Sprint plan', 'Release notes'],
  },
  {
    title: 'Better customer journeys',
    description: 'Flows and interfaces that reduce friction and increase completion.',
    outputs: ['Journey map', 'Flow wireframes'],
  },
  {
    title: 'Operational clarity',
    description: 'Process, governance, and templates teams can reuse without re-explaining everything.',
    outputs: ['SOP starter pack', 'Governance template'],
  },
  {
    title: 'AI tools that actually get used',
    description: 'Focused tools with guardrails, adoption hooks, and measurable ROI.',
    outputs: ['Prompt workflows', 'Usage dashboard'],
  },
  {
    title: 'Higher-quality decisions',
    description: 'Dashboards, research, and concise briefs that cut through noise.',
    outputs: ['Decision brief', 'Insights dashboard'],
  },
  {
    title: 'Reduced delivery risk',
    description: 'Defined scope, registers, and change control without bloated bureaucracy.',
    outputs: ['Risk register', 'Change log'],
  },
];

export const OutcomesImpactSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-muted" aria-labelledby="outcomes-heading">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">Outcomes</p>
          <h2 id="outcomes-heading" className="font-serif text-poster-lg text-foreground mb-4">
            Outcomes that move the needle
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Strategy, design, and AI delivery that turns ambiguous problems into shipped systems, measurable improvements, and fewer operational headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="h-full rounded-2xl border border-border/90 bg-card/85 p-6 md:p-7 transition-colors duration-200 hover:border-ink/25"
            >
              <h3 className="font-serif text-heading-md text-foreground mb-3">{outcome.title}</h3>
              <p className="text-body-md text-muted-foreground mb-4">{outcome.description}</p>
              {outcome.outputs && (
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-2">Typical outputs</p>
                  <ul className="space-y-1.5">
                    {outcome.outputs.map((output) => (
                      <li key={output} className="text-sm text-foreground/85 flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint flex-shrink-0" aria-hidden="true" />
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
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
