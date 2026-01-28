import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { PersonaCards, defaultPersonas } from '@/components/sections/PersonaCards';
import { OutcomeTiles } from '@/components/sections/OutcomeTiles';
import { WorkflowStepper } from '@/components/sections/WorkflowStepper';
import { RolesPermissionsMatrix } from '@/components/sections/RolesPermissionsMatrix';
import { SetupSupportCards } from '@/components/sections/SetupSupportCards';
import { TabbedProductPreview } from '@/components/ui/vignettes/TabbedProductPreview';
import { MiniDashboard, defaultMetrics } from '@/components/ui/vignettes/MiniDashboard';
import { SupportRequestVignette } from '@/components/ui/vignettes/SupportRequestVignette';
import { ConfigurationPreview, defaultConfigSteps } from '@/components/ui/vignettes/ConfigurationPreview';
import { InvoiceFlow } from '@/components/ui/vignettes/InvoiceFlow';
import { PaymentDashboard } from '@/components/ui/vignettes/PaymentDashboard';
import {
  AccountingInvoicePreview,
  AccountingExpensesPreview,
  AccountingApprovalsPreview,
  AccountingDashboardPreview,
} from '@/components/ui/vignettes/ProductPreviews';
import { CyberPercentage } from '@/components/ui/cyber-percentage';
import { cn } from '@/lib/utils';

const outcomes = [
  {
    headline: 'Faster invoicing and payment tracking',
    description: 'Create, send, and track invoices with templates and status updates.',
  },
  {
    headline: 'Cleaner expense capture and approvals',
    description: 'Structured expense submission with category rules and approval chains.',
  },
  {
    headline: 'A dashboard that stays readable',
    description: 'Key metrics without the complexity of full accounting software.',
  },
  {
    headline: 'Audit-ready records without manual cleanup',
    description: 'Clean categorization and proper documentation from day one.',
  },
];

const workflowSteps = [
  {
    id: 'configure',
    title: 'Configure structure',
    description: 'Categories, invoice templates, and numbering set up.',
    content: <ConfigurationPreview steps={defaultConfigSteps.accounting} activeStep={0} />,
  },
  {
    id: 'roles',
    title: 'Assign roles and permissions',
    description: 'Approver roles, spending limits, and workflows defined.',
    content: <ConfigurationPreview steps={defaultConfigSteps.accounting} activeStep={1} />,
  },
  {
    id: 'import',
    title: 'Import data',
    description: 'Client and vendor records migrated with opening balances.',
    content: <ConfigurationPreview steps={defaultConfigSteps.accounting} activeStep={2} />,
  },
  {
    id: 'workflow',
    title: 'Run day-to-day workflow',
    description: 'Create invoices, track payments, manage expenses.',
    content: <ConfigurationPreview steps={defaultConfigSteps.accounting} activeStep={3} />,
  },
];

const heroTabs = [
  { id: 'invoice', label: 'Invoice', content: <AccountingInvoicePreview /> },
  { id: 'expenses', label: 'Expenses', content: <AccountingExpensesPreview /> },
  { id: 'approvals', label: 'Approvals', content: <AccountingApprovalsPreview /> },
  { id: 'dashboard', label: 'Dashboard', content: <AccountingDashboardPreview /> },
];

const SoftwareAccounting = () => {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <Layout>
      {/* Hero with Tabbed Preview */}
      <section className="bg-plate-astral min-h-[80vh] flex items-end">
        <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 md:pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <h1 className="font-serif text-poster-xl text-mint mb-6">
                Accounting workflows configured for clarity, not complexity.
              </h1>
              <p className="text-body-lg text-offwhite/80 mb-8">
                Invoicing, expenses, and basic finance visibility in a clean system. Provisioned with your approval flows, categories, and reporting needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="/book?intent=accounting" textColor="astral">
                  Request access
                </PrimaryButton>
                <a
                  href="/book"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg border border-mint/30 text-mint font-semibold hover:bg-mint/10 transition-colors"
                >
                  Book a call
                </a>
              </div>
            </div>

            {/* Right: Tabbed Preview */}
            <div className="bg-ink/30 rounded-xl border border-mint/20 h-[280px] md:h-[320px]">
              <TabbedProductPreview tabs={heroTabs} />
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For - Persona Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Who it's for" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <PersonaCards
              personas={defaultPersonas.accounting}
              onPersonaSelect={setActivePersona}
            />
            <div className="bg-plate-astral rounded-xl border border-mint/20 p-6 min-h-[280px]">
              {activePersona === 0 && <InvoiceFlow />}
              {activePersona === 1 && <AccountingExpensesPreview />}
              {activePersona === 2 && <PaymentDashboard />}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes - Tiles + Mini Dashboard */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader headline="Outcomes" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <OutcomeTiles outcomes={outcomes} />
            </div>
            <div className="bg-plate-astral rounded-xl border border-mint/20 p-4">
              <h4 className="text-xs font-semibold text-mint mb-4 uppercase tracking-wide">
                Live Metrics Preview
              </h4>
              <MiniDashboard metrics={defaultMetrics.accounting} />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Tour - Stepper */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            headline="How it works" 
            subheadline="From configuration to daily operations—a clear path to adoption."
          />
          <WorkflowStepper steps={workflowSteps} className="mt-8" />
        </div>
      </section>

      {/* Governance - Roles Matrix */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            headline="Governance built in" 
            subheadline="Control who can create, approve, export, and manage—without complexity."
          />
          <RolesPermissionsMatrix className="mt-8 max-w-4xl" />
        </div>
      </section>

      {/* Setup and Support */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            headline="Configured for your team, not just activated" 
            subheadline="Setup, onboarding, and ongoing support included."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <SetupSupportCards />
            </div>
            <div className="bg-plate-astral rounded-xl border border-mint/20 h-[280px]">
              <SupportRequestVignette />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl">
            <p className="text-lg text-foreground mb-2">
              Accounting subscription starts from EUR 500 per month, depending on users and configuration.
            </p>
            <p className="text-muted-foreground mb-6">
              Setup is included in Foundation Build packages or available as a fixed onboarding fee.
            </p>
            <PrimaryButton href="/book?intent=accounting-pricing" textColor="astral">
              Get Accounting pricing
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline="Ready to get started with Accounting?"
        primaryCta={{ label: "Request access", href: "/book?intent=accounting" }}
        secondaryCta={{ label: "Book a call", href: "/book" }}
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareAccounting;
