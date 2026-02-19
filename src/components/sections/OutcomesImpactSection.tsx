import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import {
  LineDocument,
  LineBrand,
  LineWebsite,
  LineChart,
  LineDashboard,
  LineGear,
} from '@/components/ui/line-illustrations';

interface OutcomeCard {
  title: string;
  body: string;
  illustration: React.ComponentType<{ className?: string }>;
  hero?: boolean;
}

const outcomes: OutcomeCard[] = [
  {
    title: "You know what you're getting",
    body: 'A one-page brief per engagement — no ambiguity about scope, timeline, or what "done" means.',
    illustration: LineDocument,
    hero: true,
  },
  {
    title: 'Your brand actually holds together',
    body: 'Identity, messaging, and visual standards that don\'t fall apart when a new team member joins.',
    illustration: LineBrand,
  },
  {
    title: 'Your site earns its keep',
    body: 'A web presence that converts visitors into conversations, not just a digital brochure.',
    illustration: LineWebsite,
  },
  {
    title: 'Decisions get made faster',
    body: 'Dashboards and briefs that cut the opinions loop and give leads clarity when it counts.',
    illustration: LineChart,
  },
  {
    title: 'Your team stops re-explaining things',
    body: 'SOPs, governance, and templates that new people can pick up without hand-holding.',
    illustration: LineDashboard,
  },
  {
    title: 'AI tools your team actually uses',
    body: 'Workflows with guardrails and adoption hooks — not automation for its own sake.',
    illustration: LineGear,
  },
];

export const OutcomesImpactSection: React.FC = () => {
  const [hero, ...rest] = outcomes;

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

        {/* Hero card — full width */}
        <OutcomeCardHero card={hero} />

        {/* Remaining 5 cards — 2-col grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((card) => (
            <OutcomeCard key={card.title} card={card} />
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

/* ---- sub-components ---- */

const IllustrationWrapper: React.FC<{ Illustration: React.ComponentType<{ className?: string }> }> = ({ Illustration }) => (
  <div className="flex items-center justify-center h-28 mb-6 text-mint opacity-80">
    <Illustration className="w-full h-full max-w-[120px]" />
  </div>
);

const OutcomeCardHero: React.FC<{ card: OutcomeCard }> = ({ card }) => {
  const { illustration: Illustration, title, body } = card;
  return (
    <article className="rounded-2xl bg-plate-navy border border-white/10 p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center gap-7">
      <div className="flex-shrink-0 flex items-center justify-center w-36 h-36 text-mint opacity-85">
        <Illustration className="w-full h-full" />
      </div>
      <div>
        <h3 className="font-serif text-heading-md text-mint mb-3">{title}</h3>
        <p className="text-subheadline text-offwhite/80">{body}</p>
      </div>
    </article>
  );
};

const OutcomeCard: React.FC<{ card: OutcomeCard }> = ({ card }) => {
  const { illustration: Illustration, title, body } = card;
  return (
    <article className="rounded-2xl bg-plate-navy border border-white/10 p-6 flex flex-col">
      <IllustrationWrapper Illustration={Illustration} />
      <h3 className="font-serif text-heading-md text-mint mb-3 leading-snug">{title}</h3>
      <p className="text-body-md text-offwhite/75 leading-relaxed">{body}</p>
    </article>
  );
};

export default OutcomesImpactSection;
