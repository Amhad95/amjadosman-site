import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PricingZone } from '@/components/sections/PricingZone';
import { RecommendedOfferCard } from '@/components/sections/RecommendedOfferCard';
import { ServiceMenuList } from '@/components/sections/ServiceMenuList';
import { RetainerCard } from '@/components/sections/RetainerCard';
import { Steps } from '@/components/sections/Steps';
import { CTABand } from '@/components/sections/CTABand';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { CheckCircle, Shield } from 'lucide-react';
import { STRIPE_PRICES } from '@/lib/stripe';

const outcomes = [
  { title: 'Less manual triage and repetitive drafting.', body: 'Agents handle intake, categorization, and first-draft responses.' },
  { title: 'Cleaner routing with human approvals.', body: 'Workflows that escalate properly instead of failing silently.' },
  { title: 'Knowledge answers with permission boundaries.', body: 'Staff get answers from internal docs without access leakage.' },
  { title: 'Operational visibility with logs and audit trails.', body: 'Every agent action is logged and reviewable.' },
];

const useCases = [
  {
    title: 'Customer Support Automation',
    outcome: 'Reduce response time and manual triage.',
    workflows: ['Ticket classification and priority routing', 'Draft reply generation with context', 'Escalation to human agents for complex cases'],
    control: 'Human approval on outbound replies. Escalation paths for edge cases.',
  },
  {
    title: 'Sales and CRM Operations',
    outcome: 'Automate intake and prep so reps focus on selling.',
    workflows: ['Lead intake and enrichment', 'Follow-up sequence triggers', 'Meeting prep summaries from CRM data'],
    control: 'Rep approval before outbound. Data enrichment logged.',
  },
  {
    title: 'Marketing Operations',
    outcome: 'Reduce manual reporting and content assembly.',
    workflows: ['Brief generation from campaign data', 'Content repurposing across channels', 'Reporting summary generation'],
    control: 'Human review on published content. Automated drafts only.',
  },
  {
    title: 'Finance Ops and Admin',
    outcome: 'Faster intake and cleaner categorization.',
    workflows: ['Invoice intake and categorization', 'Expense approval routing', 'Report generation from financial data'],
    control: 'Approval required for all financial actions. Audit trail mandatory.',
  },
  {
    title: 'HR and People Ops',
    outcome: 'Reduce repetitive HR requests and onboarding friction.',
    workflows: ['Onboarding workflow automation', 'Policy Q&A from internal docs', 'Internal request routing and tracking'],
    control: 'Sensitive data handled with role-based access. Escalation for edge cases.',
  },
  {
    title: 'Knowledge and Search',
    outcome: 'Permission-aware answers from your internal documentation.',
    workflows: ['Natural language search across docs', 'Context-aware answers with source citations', 'Access-controlled responses based on user role'],
    control: 'Permission boundaries enforced. No cross-team data leakage.',
  },
];

const controls = [
  'Human-in-the-loop approvals',
  'Role-based permissions',
  'Audit logs and monitoring',
  'Safe failure modes and escalation paths',
];

const implementation = [
  'Agent logic selected per use case for reliability and cost efficiency',
  'Workflow orchestration via established automation platforms',
  'Secure connectors with scoped access to internal systems',
  'Internal agent runbooks, guardrails, and rollback procedures',
];

const faqs = [
  { q: 'Do agents replace our staff?', a: 'No. Agents handle repetitive, high-volume tasks. Staff focus on judgment calls, relationships, and exceptions.' },
  { q: 'How do you ensure data security?', a: 'Role-based access, audit logs, and permission boundaries. No agent accesses data beyond its defined scope.' },
  { q: 'What happens when an agent fails?', a: 'Safe failure modes escalate to humans. Every failure is logged for review and tuning.' },
  { q: 'Can we start with one use case?', a: 'Yes. The Agent Pilot is designed for exactly this. Pick one use case, validate it, then expand.' },
  { q: 'What platforms do you use?', a: 'We select tools based on the use case — typically a combination of language model APIs for agent reasoning, workflow orchestration platforms, and secure connectors for your existing systems. We prioritize reliability and auditability over novelty.' },
  { q: 'How long until we see results?', a: 'Agent Pilot delivers a working workflow in 10-15 business days. Value is visible within the first week of operation.' },
  { q: 'Do you monitor agents after deployment?', a: 'Yes, via retainer tiers. Monitoring includes performance review, prompt tuning, and workflow adjustments.' },
];

const ServicesAgents = () => {
  return (
    <Layout>
      <Hero
        headline="AI Agents and Automation"
        subheadline="Agent workflows implemented with approvals, logs, and clear boundaries. Built for real teams."
        primaryCta={{ label: 'Pay and start', href: '#pricing' }}
        secondaryCta={{ label: 'Book a call', href: '/book' }}
        plate="navy"
      />

      {/* Outcomes */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="What this track covers" variant="poster" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((o, i) => (
              <div key={i} className="bg-card border border-ink/10 rounded-2xl p-8">
                <h3 className="font-serif text-lg text-foreground mb-2">{o.title}</h3>
                <p className="text-body-md text-muted-foreground">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Use cases we implement" variant="poster" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-card border border-ink/10 rounded-2xl p-8">
                <h3 className="font-serif text-lg text-foreground mb-2">{uc.title}</h3>
                <p className="text-body-md text-muted-foreground mb-4">{uc.outcome}</p>
                <ul className="space-y-2 mb-4">
                  {uc.workflows.map((w, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-mint mt-0.5">•</span>
                      {w}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground border-t border-ink/8 pt-3">
                  <Shield size={12} className="inline mr-1 text-mint" />
                  {uc.control}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controls and governance */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Controls and governance" variant="poster" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {controls.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-mint flex-shrink-0 mt-0.5" />
                <span className="text-body-md text-foreground">{c}</span>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-heading-md text-foreground mb-4">How it's implemented</h3>
          <ul className="space-y-2">
            {implementation.map((item, i) => (
              <li key={i} className="text-body-md text-muted-foreground flex items-start gap-2">
                <span className="text-mint mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-muted scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Pricing" variant="poster" />

          <PricingZone headline="Recommended starting points" description="Controlled-scope agent implementations.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecommendedOfferCard
                name="Agent Pilot"
                inclusions={['One use case', 'Controlled scope', 'Approval workflows', 'Monitoring setup']}
                timeline="10-15 business days"
                price="Starting from EUR 4,000"
                payHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.agent_pilot}
              />
              <RecommendedOfferCard
                name="Agent Workflow Pack"
                inclusions={['2-3 use cases', 'Cross-workflow orchestration', 'Governance setup', 'Team training']}
                timeline="3-5 weeks"
                price="Starting from EUR 8,000"
                payHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.agent_pack}
              />
              <RecommendedOfferCard
                name="Knowledge Agent Setup"
                inclusions={['Permission-aware search', 'Source citation', 'Role-based access', 'Monitoring dashboard']}
                timeline="2-4 weeks"
                price="Starting from EUR 5,000"
                payHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.knowledge_agent}
              />
            </div>
          </PricingZone>

          <PricingZone headline="Pick individual services" description="Individual agent workflows available separately.">
            <ServiceMenuList
              items={[
                { name: 'Workflow triage agent', startingPrice: 'Starting from EUR 2,500', bookHref: '/book', stripePriceId: STRIPE_PRICES.triage_agent },
                { name: 'Report summarization workflow', startingPrice: 'Starting from EUR 2,000', bookHref: '/book', stripePriceId: STRIPE_PRICES.report_summarization },
                { name: 'Intake and routing workflow', startingPrice: 'Starting from EUR 2,000', bookHref: '/book', stripePriceId: STRIPE_PRICES.intake_routing },
              ]}
            />
          </PricingZone>

          <PricingZone headline="Managed Agent Retainers" description="Ongoing monitoring, tuning, and support for deployed agents.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RetainerCard
                tier="Monitoring Lite"
                inclusions={['Performance monitoring', 'Monthly review', 'Bug fixes']}
                responseTime="Response within 3 business days"
                price="EUR 1,000/mo"
                subscribeHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.agents_retainer_lite}
              />
              <RetainerCard
                tier="Standard"
                inclusions={['Monitoring and tuning', 'Prompt adjustments', 'Workflow changes', 'Priority support']}
                responseTime="Response within 1 business day"
                price="EUR 2,000/mo"
                subscribeHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.agents_retainer_standard}
              />
              <RetainerCard
                tier="Priority"
                inclusions={['Full management', 'New workflow builds', 'Strategy sessions', 'Same-day response']}
                responseTime="Same-day response"
                price="EUR 3,500/mo"
                subscribeHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.agents_retainer_priority}
              />
            </div>
          </PricingZone>
        </div>
      </section>

      {/* How we deliver */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="How we deliver" variant="poster" />
          <Steps
            steps={[
              { title: 'Discovery', description: 'Map workflows and identify automation candidates.' },
              { title: 'Design', description: 'Define agent logic, approval gates, and failure modes.' },
              { title: 'Build', description: 'Implement and test in a controlled environment.' },
              { title: 'Deploy', description: 'Go live with monitoring and human-in-the-loop safeguards.' },
              { title: 'Monitor', description: 'Ongoing tuning, logging review, and performance optimization.' },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <SectionHeader headline="Frequently asked questions" variant="poster" />
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="font-serif text-lg text-foreground">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-body-md text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTABand
        headline="Ready to automate your operations?"
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View all services', href: '/services' }}
        variant="dark"
      />
    </Layout>
  );
};

export default ServicesAgents;
