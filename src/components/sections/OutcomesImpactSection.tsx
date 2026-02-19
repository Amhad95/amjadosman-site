import React from 'react';
import { AnimatedIcon } from '@/components/shared/AnimatedIcon';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { Bot, LineChart, ShieldCheck, Sparkles, Users, Workflow, LucideIcon } from 'lucide-react';

interface OutcomeCard {
  title: string;
  description: string;
  whyItMatters: string;
  outputs?: string[];
  icon: LucideIcon;
}

const outcomes: OutcomeCard[] = [
  {
    title: 'Faster delivery cycles',
    description: 'From scope to shipped increments with clear artifacts and decision points.',
    whyItMatters: 'You avoid long stalls between planning and execution.',
    outputs: ['Scope brief', 'Sprint plan', 'Release notes'],
    icon: Workflow,
  },
  {
    title: 'Better customer journeys',
    description: 'Flows and interfaces that reduce friction and increase completion.',
    whyItMatters: 'Customers and teams spend less time getting blocked.',
    outputs: ['Journey map', 'Flow wireframes'],
    icon: Users,
  },
  {
    title: 'Operational clarity',
    description: 'Process, governance, and templates teams can reuse without re-explaining everything.',
    whyItMatters: 'Work keeps moving even when people rotate or grow.',
    outputs: ['SOP starter pack', 'Governance template'],
    icon: Sparkles,
  },
  {
    title: 'AI tools that actually get used',
    description: 'Focused tools with guardrails, adoption hooks, and measurable ROI.',
    whyItMatters: 'Automation supports real workflows instead of becoming shelfware.',
    outputs: ['Prompt workflows', 'Usage dashboard'],
    icon: Bot,
  },
  {
    title: 'Higher-quality decisions',
    description: 'Dashboards, research, and concise briefs that cut through noise.',
    whyItMatters: 'Leads can make calls faster with fewer opinion loops.',
    outputs: ['Decision brief', 'Insights dashboard'],
    icon: LineChart,
  },
  {
    title: 'Reduced delivery risk',
    description: 'Defined scope, registers, and change control without bloated bureaucracy.',
    whyItMatters: 'You protect timelines and budget while staying adaptable.',
    outputs: ['Risk register', 'Change log'],
    icon: ShieldCheck,
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
            Human outcomes across strategy, brand, software, and operations so teams can move with confidence and less friction.
          </p>
        </div>

        <div className="space-y-4">
          {outcomes.map((outcome) => (
            <article
              key={outcome.title}
              className="rounded-2xl bg-gradient-to-br from-card to-muted/35 border border-ink/8 shadow-sm hover:shadow-lg hover:shadow-ink/5 transition-all duration-200"
            >
              <div className="p-6 md:p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-plate-navy flex items-center justify-center">
                      <AnimatedIcon icon={outcome.icon} animation="float" color="mint" size={20} />
                    </div>
                    <h3 className="font-serif text-heading-md text-foreground">{outcome.title}</h3>
                  </div>
                  <p className="text-body-md text-muted-foreground mb-3">{outcome.description}</p>
                  <p className="text-sm text-foreground/85">
                    <span className="font-semibold">Why this matters:</span> {outcome.whyItMatters}
                  </p>
                </div>
                {outcome.outputs && (
                  <div className="lg:col-span-4 rounded-xl border border-border/70 bg-background/65 p-4">
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
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 rounded-2xl border border-border/80 bg-background/70 p-4 md:p-5">
          <p className="text-sm text-foreground/90">
            Every engagement is built to connect external credibility, internal execution, and practical software adoption.
          </p>
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
