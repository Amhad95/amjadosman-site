import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ProductHero } from '@/components/sections/ProductHero';
import { ProductPreviewFrame } from '@/components/shared/ProductPreviewFrame';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProblemContrast } from '@/components/sections/ProblemContrast';
import { CapabilityGrid } from '@/components/sections/CapabilityGrid';
import { CTABand } from '@/components/sections/CTABand';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { PersonaCards, defaultPersonas } from '@/components/sections/PersonaCards';
import { OutcomeTiles } from '@/components/sections/OutcomeTiles';
import { WorkflowStepper } from '@/components/sections/WorkflowStepper';
import { RolesPermissionsMatrix } from '@/components/sections/RolesPermissionsMatrix';
import { SetupSupportCards } from '@/components/sections/SetupSupportCards';
import { TabbedProductPreview } from '@/components/ui/vignettes/TabbedProductPreview';
import { MiniDashboard, defaultMetrics } from '@/components/ui/vignettes/MiniDashboard';
import { SupportRequestVignette } from '@/components/ui/vignettes/SupportRequestVignette';
import { SettingsPanel, accountingSettingsConfig } from '@/components/ui/vignettes/SettingsPanel';
import { ImportMapper, accountingImportMappings } from '@/components/ui/vignettes/ImportMapper';
import { InvoiceFlow } from '@/components/ui/vignettes/InvoiceFlow';
import { PaymentDashboard } from '@/components/ui/vignettes/PaymentDashboard';
import {
  InvoiceDashboardRealistic,
  ExpenseTrackerRealistic,
  ApprovalsQueueRealistic,
  FinanceDashboardRealistic,
} from '@/components/ui/vignettes/AccountingPreviews';
import { CyberPercentage } from '@/components/ui/cyber-percentage';
import {
  FileSpreadsheet,
  Calculator,
  Receipt,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  FileText,
  TrendingUp,
} from 'lucide-react';

// Problem contrast items
const problemItems = [
  {
    before: 'Invoices created in Word or Excel',
    after: 'Templated invoices with auto-numbering',
    icon: FileText,
  },
  {
    before: 'Expenses tracked in spreadsheets',
    after: 'Structured submission with category rules',
    icon: FileSpreadsheet,
  },
  {
    before: 'Approvals handled over email',
    after: 'Built-in approval chains with audit trail',
    icon: CheckCircle,
  },
  {
    before: 'No real-time visibility on cash flow',
    after: 'Live dashboards with payment status',
    icon: TrendingUp,
  },
];

// Outcomes
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

// Capabilities
const capabilities = [
  {
    icon: Receipt,
    title: 'Invoicing',
    description: 'Templated invoices with auto-numbering, status tracking, and payment reminders.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Expense tracking',
    description: 'Categorized expenses with receipt uploads and recurring entries.',
  },
  {
    icon: CheckCircle,
    title: 'Approval workflows',
    description: 'Multi-level approval chains with spending limits and escalation rules.',
  },
  {
    icon: BarChart3,
    title: 'Financial dashboards',
    description: 'Revenue, expenses, and cash flow visibility in real time.',
  },
  {
    icon: Calculator,
    title: 'Tax categories',
    description: 'Pre-configured tax rules and category mappings for compliance.',
  },
  {
    icon: Shield,
    title: 'Audit trail',
    description: 'Complete history of every transaction, edit, and approval decision.',
  },
];

// Workflow steps with realistic previews
const workflowSteps = [
  {
    id: 'configure',
    title: 'Configure structure',
    description: 'Categories, invoice templates, and numbering set up.',
    content: <SettingsPanel sections={accountingSettingsConfig} activeSection={0} />,
  },
  {
    id: 'roles',
    title: 'Assign roles and permissions',
    description: 'Approver roles, spending limits, and workflows defined.',
    content: <SettingsPanel sections={accountingSettingsConfig} activeSection={2} />,
  },
  {
    id: 'import',
    title: 'Import data',
    description: 'Client and vendor records migrated with opening balances.',
    content: <ImportMapper mappings={accountingImportMappings} sourceFile="vendors_export.csv" />,
  },
  {
    id: 'workflow',
    title: 'Run day-to-day workflow',
    description: 'Create invoices, track payments, manage expenses.',
    content: <InvoiceDashboardRealistic />,
  },
];

// Hero preview tabs
const heroTabs = [
  { id: 'invoice', label: 'Invoices', content: <InvoiceDashboardRealistic /> },
  { id: 'expenses', label: 'Expenses', content: <ExpenseTrackerRealistic /> },
  { id: 'approvals', label: 'Approvals', content: <ApprovalsQueueRealistic /> },
  { id: 'dashboard', label: 'Dashboard', content: <FinanceDashboardRealistic /> },
];

const SoftwareAccounting = () => {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <Layout>
      {/* 1. Hero with ASCII Animation */}
      <ProductHero
        productName="Ledger"
        productDescriptor="for Accounting"
        headline="Financial workflows configured for clarity, not complexity."
        subheadline="Invoicing, expenses, and basic finance visibility in a clean system. Provisioned with your approval flows, categories, and reporting needs."
        primaryCta={{ label: 'Request access', href: '/book?intent=accounting' }}
        secondaryCta={{ label: 'How onboarding works', href: '#onboarding' }}
        asciiComponent={<CyberPercentage color="mint" speed={0.8} />}
        plate="astral"
      />

      {/* 2. Product Preview Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Ledger in action"
            subheadline="Invoicing, expenses, approvals, and reporting in one place."
            align="center"
          />
          <div className="mt-10 max-w-5xl mx-auto">
            <ProductPreviewFrame title="Ledger Accounting" variant="browser">
              <div className="h-[360px] md:h-[440px]">
                <TabbedProductPreview
                  tabs={heroTabs}
                  searchPlaceholder="Search invoices, expenses..."
                  filters={[
                    { label: 'Status', active: false },
                    { label: 'Category', active: false },
                  ]}
                />
              </div>
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 3. Who It's For - Persona Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Built for teams who manage money"
            subheadline="Whether you're sending invoices, approving expenses, or tracking cash flow."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            <PersonaCards
              personas={defaultPersonas.accounting}
              onPersonaSelect={setActivePersona}
            />
            <ProductPreviewFrame variant="card" className="min-h-[280px]">
              {activePersona === 0 && <InvoiceFlow />}
              {activePersona === 1 && <ExpenseTrackerRealistic />}
              {activePersona === 2 && <PaymentDashboard />}
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 4. Problems It Replaces */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Replace the chaos"
            subheadline="Move from scattered spreadsheets and manual approvals to structured operations."
          />
          <div className="mt-8">
            <ProblemContrast items={problemItems} />
          </div>
        </div>
      </section>

      {/* 5. Outcomes */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="What changes on day one"
            subheadline="Clear, immediate value—not promises."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <OutcomeTiles outcomes={outcomes} />
            </div>
            <ProductPreviewFrame variant="minimal" className="p-4">
              <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wide">
                Activity snapshot
              </h4>
              <MiniDashboard metrics={defaultMetrics.accounting} />
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 6. Core Capabilities */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Core capabilities"
            subheadline="Everything you need, configured and ready."
          />
          <div className="mt-8">
            <CapabilityGrid capabilities={capabilities} columns={3} />
          </div>
        </div>
      </section>

      {/* 7. Workflow Tour */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Your setup journey"
            subheadline="From first login to daily operations in four steps."
          />
          <WorkflowStepper steps={workflowSteps} className="mt-8" />
        </div>
      </section>

      {/* 8. Governance - Roles Matrix */}
      <section id="governance" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Control who does what"
            subheadline="Roles, permissions, and approval chains built in from day one."
          />
          <div className="mt-8 max-w-4xl mx-auto">
            <ProductPreviewFrame variant="card">
              <RolesPermissionsMatrix />
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 9. Setup and Support */}
      <section id="onboarding" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Configured for your team, not just activated"
            subheadline="We handle provisioning, configuration, training, and ongoing admin support."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <SetupSupportCards />
            </div>
            <ProductPreviewFrame variant="minimal" className="h-[280px]">
              <SupportRequestVignette />
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 10. Pricing Note */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl">
            <p className="text-lg text-foreground mb-2">
              Ledger™ for Accounting starts from EUR 500 per month, depending on users and configuration.
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
        headline="Ready to get started with Ledger™?"
        primaryCta={{ label: 'Request access', href: '/book?intent=accounting' }}
        secondaryCta={{ label: 'Book a call', href: '/book' }}
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareAccounting;
