import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { PremiumSuiteGrid } from '@/components/sections/PremiumSuiteGrid';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { SetupTimeline } from '@/components/sections/SetupTimeline';
import { CyberGlobeHeader } from '@/components/shared/CyberGlobeHeader';
import { Settings, FileCheck, Users, Headphones } from 'lucide-react';
import { cn } from '@/lib/utils';

const suiteProducts = [
  {
    id: 'crm',
    name: 'CRM',
    oneLiner: 'Manage relationships, pipeline, and follow-up without chaos.',
    outcomes: [
      'Clear pipeline stages',
      'Reliable follow-up',
      'Simple reporting',
    ],
    href: '/software/crm',
  },
  {
    id: 'accounting',
    name: 'Accounting',
    oneLiner: 'Invoicing, expenses, and basic finance visibility in a clean workflow.',
    outcomes: [
      'Faster invoicing',
      'Cleaner expense capture',
      'Readable dashboards',
    ],
    href: '/software/accounting',
  },
  {
    id: 'inventory',
    name: 'Inventory and Assets',
    oneLiner: 'Track items and assets with controlled access and auditability.',
    outcomes: [
      'Know what exists',
      'Reorder alerts',
      'Clear accountability',
    ],
    href: '/software/inventory',
  },
  {
    id: 'tasks',
    name: 'Tasks and Work Management',
    oneLiner: 'Plan work, assign ownership, and keep delivery visible.',
    outcomes: [
      'Clear assignments',
      'Fewer dropped tasks',
      'Better coordination',
    ],
    href: '/software/tasks',
  },
];

const foundationFeatures = [
  {
    icon: Users,
    title: 'Roles and permissions',
    description: 'Team structure, access levels, and approval chains set up from day one.',
  },
  {
    icon: Settings,
    title: 'Templates and workflows',
    description: 'Pipeline stages, document formats, and automation rules configured.',
  },
  {
    icon: FileCheck,
    title: 'Data import',
    description: 'Existing records migrated and validated in clean structure.',
  },
  {
    icon: Headphones,
    title: 'Ongoing admin support',
    description: 'Controlled change requests and admin support included.',
  },
];

const Software = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline="A focused enterprise suite, configured and managed for your team."
        subheadline="Four cloud softwares, provisioned and configured with governance, permissions, templates, data import, training, and ongoing admin support."
        primaryCta={{ label: "Request software access", href: "/book?intent=suite" }}
        secondaryCta={{ label: "Book a call", href: "/book" }}
        plate="astral"
        rightElement={<CyberGlobeHeader color="mint" speed={0.8} />}
      />

      {/* Suite Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            headline="The Suite" 
            subheadline="Four focused products. Each one configured for adoption, not just access."
          />
          <PremiumSuiteGrid products={suiteProducts} />
        </div>
      </section>

      {/* Compare at a Glance */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            headline="Compare at a glance" 
            subheadline="Understand where each product fits in your operations."
          />
          <ComparisonTable className="mt-8" />
        </div>
      </section>

      {/* Configured for Adoption */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Copy + Feature Cards */}
            <div>
              <h2 className="font-serif text-heading-lg text-foreground mb-4">
                Configured for adoption, not just access.
              </h2>
              <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
                Every product in the suite is provisioned with your team structure, workflows, and governance in place.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {foundationFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className={cn(
                        'group p-5 rounded-xl',
                        'bg-card border border-ink/10',
                        'hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5',
                        'transition-all duration-300'
                      )}
                    >
                      <div className={cn(
                        'w-10 h-10 rounded-lg mb-3',
                        'bg-plate-astral text-mint',
                        'flex items-center justify-center',
                        'group-hover:scale-110 transition-transform duration-300'
                      )}>
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Animated Setup Timeline */}
            <div className="bg-muted rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground mb-6">
                Typical setup timeline
              </h3>
              <SetupTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Note */}
      <section className="py-12 md:py-16 bg-muted">
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
        primaryCta={{ label: "Book a call", href: "/book" }}
        variant="dark"
      />
    </Layout>
  );
};

export default Software;
