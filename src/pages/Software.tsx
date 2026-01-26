import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SuiteGrid } from '@/components/sections/SuiteGrid';
import { CyberGlobeHeader } from '@/components/shared/CyberGlobeHeader';
import { Check } from 'lucide-react';

const suiteProducts = [
  {
    id: 'crm',
    name: 'CRM',
    oneLiner: 'Manage relationships, pipeline, and follow-up without chaos.',
    outcomes: [
      'Clear pipeline stages and ownership',
      'Reliable follow-up and activity tracking',
      'Simple reporting for decisions',
    ],
    cta: { label: 'View CRM', href: '/software/crm' },
  },
  {
    id: 'accounting',
    name: 'Accounting',
    oneLiner: 'Invoicing, expenses, and basic finance visibility in a clean workflow.',
    outcomes: [
      'Faster invoicing and payment tracking',
      'Cleaner expense capture and approvals',
      'A dashboard that stays readable',
    ],
    cta: { label: 'View Accounting', href: '/software/accounting' },
  },
  {
    id: 'inventory',
    name: 'Inventory and Assets',
    oneLiner: 'Track items and assets with controlled access and auditability.',
    outcomes: [
      'Know what exists and where it is',
      'Reorder alerts and basic controls',
      'Cleaner handovers and accountability',
    ],
    cta: { label: 'View Inventory', href: '/software/inventory' },
  },
  {
    id: 'tasks',
    name: 'Tasks and Work Management',
    oneLiner: 'Plan work, assign ownership, and keep delivery visible.',
    outcomes: [
      'Clear assignments and deadlines',
      'Fewer dropped tasks',
      'Better coordination across teams',
    ],
    cta: { label: 'View Work Management', href: '/software/tasks' },
  },
];

const foundationBullets = [
  'Roles, permissions, and governance configured from day one',
  'Templates, workflows, and approval steps set up to match how you operate',
  'Data imported into a clean structure',
  'Onboarding, documentation, and admin handover included',
  'Ongoing admin support with controlled change requests',
];

const Software = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline="A focused suite of enterprise software, configured and managed for your team."
        subheadline="ADSI provides a small set of high-usage cloud business softwares. Each one is provisioned, configured, and supported for you with governance, permissions, and clean onboarding."
        primaryCta={{ label: "Request software access", href: "/book?intent=suite" }}
        secondaryCta={{ label: "Book a Call", href: "/book" }}
        plate="astral"
        rightElement={<CyberGlobeHeader color="mint" speed={0.8} />}
      />

      {/* Suite Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="The Suite" />
          <SuiteGrid products={suiteProducts} />
        </div>
      </section>

      {/* Shared Foundation */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Configured for adoption, not just access." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {foundationBullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check size={20} className="text-mint flex-shrink-0 mt-0.5" />
                <span className="text-body-md text-foreground">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Note */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            We start with four core products and expand into industry-specific systems over time.
          </p>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 md:py-24 bg-plate-astral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl">
            <p className="text-lg text-mint mb-2">
              Software subscription starts from EUR 500 per month per product, depending on users and configuration.
            </p>
            <p className="text-offwhite/70 mb-6">
              Setup is included in some packages or offered as a fixed onboarding fee.
            </p>
            <PrimaryButton href="/book?intent=suite-pricing" textColor="astral">
              Get suite pricing
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline="Ready to get started?"
        primaryCta={{ label: "Book a Call", href: "/book" }}
        variant="dark"
      />
    </Layout>
  );
};

export default Software;
