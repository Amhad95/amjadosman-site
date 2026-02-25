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
import { STRIPE_PRICES } from '@/lib/stripe';

const outcomes = [
  { title: 'Credibility that matches your capability.', body: 'Your brand communicates the quality your team actually delivers.' },
  { title: 'A website that supports conversion, not just presence.', body: 'Pages structured for action, not just information.' },
  { title: 'Consistent materials across the organization.', body: 'Decks, proposals, and collateral follow one system.' },
  { title: 'A content structure your team can maintain.', body: 'CMS and templates designed for internal updates without designer dependency.' },
];

const serviceGroups = [
  { title: 'Brand System', items: ['Identity and guidelines', 'Document and deck templates', 'Brand asset organization'] },
  { title: 'Website and CMS', items: ['Site architecture and copy structure', 'CMS model and publishing flow', 'Conversion landing pages'] },
  { title: 'Sales Materials', items: ['Pitch deck system', 'Proposal template system', 'Case study template system'] },
];

const faqs = [
  { q: 'How long does a brand system take?', a: 'Typically 10-15 business days for the core system. Complex multi-brand systems take longer.' },
  { q: 'Can we start with just the website?', a: 'Yes. Each service is available individually. We recommend having brand guidelines first, but it is not required.' },
  { q: 'Do you build on a specific CMS?', a: 'We recommend platforms suited to your team size and technical capability. Most projects use modern headless or managed CMS platforms.' },
  { q: 'What is included in a retainer?', a: 'Monthly updates, content changes, design tweaks, and priority access. Exact scope depends on the tier.' },
  { q: 'Can we bring our own brand guidelines?', a: 'Yes. We can work with existing guidelines or audit and refine them as part of the engagement.' },
  { q: 'Do you handle copywriting?', a: 'We provide content structure, messaging framework, and page copy direction. Full copywriting can be included or handled by your team.' },
];

const ServicesBrand = () => {
  return (
    <Layout>
      <Hero
        headline="Brand and Growth Systems"
        subheadline="Brand, web, and sales materials built as a system. Easy to maintain after launch."
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
                name="Brand System Sprint"
                inclusions={['Identity and guidelines', 'Template pack', 'Brand asset library']}
                timeline="10-15 business days"
                price="Starting from EUR 3,500"
                payHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.brand_sprint}
              />
              <RecommendedOfferCard
                name="Website and CMS Build"
                inclusions={['Site architecture', 'CMS setup', 'Conversion pages', 'SEO foundation']}
                timeline="2-4 weeks"
                price="Starting from EUR 5,000"
                payHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.web_build}
              />
              <RecommendedOfferCard
                name="Sales Materials Kit"
                inclusions={['Pitch deck system', 'Proposal templates', 'Case study format']}
                timeline="7-12 business days"
                price="Starting from EUR 2,500"
                payHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.sales_kit}
              />
            </div>
          </PricingZone>

          <PricingZone headline="Pick individual services" description="Available separately at project-based pricing.">
            <ServiceMenuList
              items={[
                { name: 'Landing page conversion pass', startingPrice: 'Starting from EUR 1,500', bookHref: '/book', stripePriceId: STRIPE_PRICES.landing_page },
                { name: 'Brand template pack', startingPrice: 'Starting from EUR 1,200', bookHref: '/book', stripePriceId: STRIPE_PRICES.brand_template },
                { name: 'Pitch deck rebuild', startingPrice: 'Starting from EUR 2,000', bookHref: '/book', stripePriceId: STRIPE_PRICES.pitch_deck },
              ]}
            />
          </PricingZone>

          <PricingZone headline="Retainers" description="Monthly brand and web stewardship.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RetainerCard
                tier="Lite"
                inclusions={['Minor content updates', 'Design tweaks', 'Monthly check-in']}
                responseTime="Response within 3 business days"
                price="EUR 800/mo"
                subscribeHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.brand_retainer_lite}
              />
              <RetainerCard
                tier="Standard"
                inclusions={['Content updates', 'Design changes', 'New page builds', 'Priority support']}
                responseTime="Response within 1 business day"
                price="EUR 1,500/mo"
                subscribeHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.brand_retainer_standard}
              />
              <RetainerCard
                tier="Priority"
                inclusions={['Unlimited changes', 'Strategy sessions', 'Dedicated support', 'Same-day response']}
                responseTime="Same-day response"
                price="EUR 2,500/mo"
                subscribeHref="/book"
                bookHref="/book"
                stripePriceId={STRIPE_PRICES.brand_retainer_priority}
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
              { title: 'Intake', description: 'Brief call to understand needs and confirm scope.' },
              { title: 'Architecture', description: 'Brand strategy, site map, and content model.' },
              { title: 'Build', description: 'Design and development in structured sprints.' },
              { title: 'Handover', description: 'Documentation, training, and clean file transfer.' },
              { title: 'Optional retainer', description: 'Monthly support if you want ongoing coverage.' },
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
        headline="Ready to build your brand system?"
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View all services', href: '/services' }}
        variant="dark"
      />
    </Layout>
  );
};

export default ServicesBrand;
