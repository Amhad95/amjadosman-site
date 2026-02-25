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

const outcomes = [
  { title: 'Findability and permissions that make sense.', body: 'Files organized with clear ownership and access rules.' },
  { title: 'Processes documented with ownership.', body: 'SOPs that people follow because they are clear and accessible.' },
  { title: 'Faster onboarding with less dependence on individuals.', body: 'New hires productive without shadowing for weeks.' },
  { title: 'Controlled requests and approvals.', body: 'Workflows that route properly instead of email chains.' },
];

const serviceGroups = [
  {
    title: 'SharePoint Architecture',
    items: ['Site and library structure', 'Permissions and roles', 'Naming conventions and governance rules'],
  },
  {
    title: 'SOPs and Templates',
    items: ['SOP library', 'Forms and templates', 'Approval workflows'],
  },
  {
    title: 'Onboarding System',
    items: ['Onboarding checklists', 'Team guides', 'Knowledge base structure'],
  },
];

const faqs = [
  { q: 'Do you work with our existing SharePoint?', a: 'Yes. We audit your current setup and restructure or build on top of it depending on what makes sense.' },
  { q: 'How many SOPs are included?', a: 'Depends on the package. The SOP Library Pack typically covers 15-25 procedures. Individual SOPs are also available.' },
  { q: 'Can you train our team?', a: 'Yes. Handover includes documentation and training sessions. Ongoing training is available via retainer.' },
  { q: 'What if we use Google Workspace instead?', a: 'We can adapt the approach. The principles of structure, governance, and documentation apply regardless of platform.' },
  { q: 'How long does a SharePoint setup take?', a: 'Typically 2-3 weeks for core architecture. Complex multi-site setups take longer.' },
  { q: 'Do retainers cover new SOP creation?', a: 'Standard and Priority tiers include new SOP creation. Lite covers updates to existing SOPs.' },
];

const ServicesOps = () => {
  return (
    <Layout>
      <Hero
        headline="Internal Operations Systems"
        subheadline="SharePoint, SOPs, templates, and governance that reduce operational drag."
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

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Services in this track" variant="poster" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceGroups.map((group, i) => (
              <div key={i}>
                <h3 className="font-serif text-heading-md text-foreground mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="text-body-md text-muted-foreground flex items-start gap-2">
                      <span className="text-mint mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Pricing" variant="poster" />

          <PricingZone headline="Recommended starting points" description="Common entry offers with fixed scope and timeline.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecommendedOfferCard
                name="Ops Audit"
                inclusions={['Current state assessment', 'Gap analysis', 'Recommendations report']}
                timeline="5-7 business days"
                price="Starting from EUR 4,000"
                payHref="/book"
                bookHref="/book"
              />
              <RecommendedOfferCard
                name="SharePoint Setup"
                inclusions={['Site architecture', 'Document libraries', 'Permissions model', 'Governance rules']}
                timeline="2-3 weeks"
                price="Starting from EUR 10,000"
                payHref="/book"
                bookHref="/book"
              />
              <RecommendedOfferCard
                name="SOP Library Pack"
                inclusions={['15-25 SOPs documented', 'Role mapping', 'QA checklists', 'Update workflow']}
                timeline="2-3 weeks"
                price="Starting from EUR 6,000"
                payHref="/book"
                bookHref="/book"
              />
            </div>
          </PricingZone>

          <PricingZone headline="Pick individual services" description="Available separately at project-based pricing.">
            <ServiceMenuList
              items={[
                { name: 'Permissions overhaul', startingPrice: 'Starting from EUR 3,000', payHref: '/book', bookHref: '/book' },
                { name: 'SOP creation (per SOP)', startingPrice: 'Starting from EUR 500', payHref: '/book', bookHref: '/book' },
                { name: 'Template library setup', startingPrice: 'Starting from EUR 2,500', payHref: '/book', bookHref: '/book' },
              ]}
            />
          </PricingZone>

          <PricingZone headline="Retainers" description="Monthly operations maintenance.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RetainerCard
                tier="Ops Maintenance Lite"
                inclusions={['SOP updates', 'Minor SharePoint changes', 'Monthly review']}
                responseTime="Response within 3 business days"
                price="EUR 1,500/mo"
                subscribeHref="/book"
                bookHref="/book"
              />
              <RetainerCard
                tier="Standard"
                inclusions={['SOP creation and updates', 'SharePoint changes', 'New workflows', 'Priority support']}
                responseTime="Response within 1 business day"
                price="EUR 3,000/mo"
                subscribeHref="/book"
                bookHref="/book"
              />
              <RetainerCard
                tier="Priority"
                inclusions={['Unlimited changes', 'New system builds', 'Training sessions', 'Same-day response']}
                responseTime="Same-day response"
                price="EUR 5,000/mo"
                subscribeHref="/book"
                bookHref="/book"
              />
            </div>
          </PricingZone>
        </div>
      </section>

      {/* How we deliver */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="How we deliver" variant="poster" />
          <Steps
            steps={[
              { title: 'Audit', description: 'Review current systems and identify gaps.' },
              { title: 'Architecture', description: 'Design structure, permissions, and governance.' },
              { title: 'Build', description: 'Implement in structured sprints with async updates.' },
              { title: 'Handover', description: 'Documentation, training, and knowledge transfer.' },
              { title: 'Optional retainer', description: 'Ongoing maintenance and support.' },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
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
        headline="Ready to fix your operations infrastructure?"
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View all services', href: '/services' }}
        variant="dark"
      />
    </Layout>
  );
};

export default ServicesOps;
