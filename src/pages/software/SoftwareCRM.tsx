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
import { ConfigurationPreview, defaultConfigSteps } from '@/components/ui/vignettes/ConfigurationPreview';
import { PipelineBoard } from '@/components/ui/vignettes/PipelineBoard';
import { ContactTimeline } from '@/components/ui/vignettes/ContactTimeline';
import {
  CRMPipelinePreview,
  CRMContactPreview,
  CRMTasksPreview,
  CRMReportsPreview,
} from '@/components/ui/vignettes/ProductPreviews';
import { CyberHeart } from '@/components/ui/cyber-heart';
import {
  Users,
  FileSpreadsheet,
  MessageSquare,
  Target,
  GitBranch,
  Clock,
  Shield,
  BarChart3,
  Mail,
  Calendar,
  Filter,
  Bell,
} from 'lucide-react';

// Problem contrast items
const problemItems = [
  {
    before: 'Deals tracked in spreadsheets',
    after: 'Visual pipeline with clear stages',
    icon: FileSpreadsheet,
  },
  {
    before: 'Follow-ups lost in email',
    after: 'Automated task reminders',
    icon: MessageSquare,
  },
  {
    before: 'No visibility on team activity',
    after: 'Real-time dashboards and reports',
    icon: Target,
  },
  {
    before: 'Handovers lose context',
    after: 'Full history travels with contacts',
    icon: Users,
  },
];

// Outcomes
const outcomes = [
  {
    headline: 'Clear pipeline stages and ownership',
    description: 'Every deal has a stage, an owner, and a clear next action.',
  },
  {
    headline: 'Reliable follow-up and activity tracking',
    description: 'No more lost threads—every interaction logged automatically.',
  },
  {
    headline: 'Simple reporting for decisions',
    description: 'Dashboards that show pipeline value and team activity.',
  },
  {
    headline: 'Clean handover when roles change',
    description: 'Complete history travels with contacts and deals.',
  },
];

// Capabilities
const capabilities = [
  {
    icon: GitBranch,
    title: 'Pipeline management',
    description: 'Visual kanban boards with customizable stages and deal values.',
  },
  {
    icon: Users,
    title: 'Contact management',
    description: 'Unified profiles with interaction history and linked deals.',
  },
  {
    icon: Clock,
    title: 'Task automation',
    description: 'Scheduled follow-ups, reminders, and activity logging.',
  },
  {
    icon: BarChart3,
    title: 'Reporting dashboards',
    description: 'Pipeline value, conversion rates, and team performance.',
  },
  {
    icon: Mail,
    title: 'Email integration',
    description: 'Log communications and sync with your email client.',
  },
  {
    icon: Shield,
    title: 'Role-based access',
    description: 'Control who sees, edits, and approves at each level.',
  },
];

// Workflow steps
const workflowSteps = [
  {
    id: 'configure',
    title: 'Configure structure',
    description: 'Pipeline stages, custom fields, and deal values set up.',
    content: <ConfigurationPreview steps={defaultConfigSteps.crm} activeStep={0} />,
  },
  {
    id: 'roles',
    title: 'Assign roles and permissions',
    description: 'Team visibility rules and approval chains defined.',
    content: <ConfigurationPreview steps={defaultConfigSteps.crm} activeStep={1} />,
  },
  {
    id: 'import',
    title: 'Import data',
    description: 'Existing contacts and deals migrated cleanly.',
    content: <ConfigurationPreview steps={defaultConfigSteps.crm} activeStep={2} />,
  },
  {
    id: 'workflow',
    title: 'Run day-to-day workflow',
    description: 'Track deals, log activities, generate reports.',
    content: <ConfigurationPreview steps={defaultConfigSteps.crm} activeStep={3} />,
  },
];

// Hero preview tabs
const heroTabs = [
  { id: 'pipeline', label: 'Pipeline', content: <CRMPipelinePreview /> },
  { id: 'contact', label: 'Contact', content: <CRMContactPreview /> },
  { id: 'tasks', label: 'Tasks', content: <CRMTasksPreview /> },
  { id: 'reports', label: 'Reports', content: <CRMReportsPreview /> },
];

const SoftwareCRM = () => {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <Layout>
      {/* 1. Hero with ASCII Animation */}
      <ProductHero
        productName="Meridian"
        productDescriptor="for CRM"
        headline="Relationship management configured for adoption."
        subheadline="A clean CRM system provisioned with your pipeline stages, roles, and follow-up workflows. Configuration and ongoing admin support included."
        primaryCta={{ label: 'Request access', href: '/book?intent=crm' }}
        secondaryCta={{ label: 'How onboarding works', href: '#onboarding' }}
        asciiComponent={<CyberHeart color="mint" speed={0.8} />}
        plate="astral"
      />

      {/* 2. Product Preview Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="See the product"
            subheadline="Pipeline tracking, contact management, task automation, and reporting in one clean interface."
            align="center"
          />
          <div className="mt-10 max-w-5xl mx-auto">
            <ProductPreviewFrame title="Meridian CRM" variant="browser">
              <div className="h-[320px] md:h-[400px]">
                <TabbedProductPreview tabs={heroTabs} />
              </div>
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 3. Who It's For - Persona Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Built for teams who sell"
            subheadline="Whether you're tracking deals, managing accounts, or coordinating handovers."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            <PersonaCards
              personas={defaultPersonas.crm}
              onPersonaSelect={setActivePersona}
            />
            <ProductPreviewFrame variant="card" className="min-h-[280px]">
              {activePersona === 0 && <PipelineBoard />}
              {activePersona === 1 && <CRMReportsPreview />}
              {activePersona === 2 && <ContactTimeline />}
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 4. Problems It Replaces */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Replace the chaos"
            subheadline="Move from scattered tools and manual tracking to structured operations."
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
            headline="Outcomes"
            subheadline="Measurable improvements from day one."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <OutcomeTiles outcomes={outcomes} />
            </div>
            <ProductPreviewFrame variant="minimal" className="p-4">
              <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wide">
                Live Metrics Preview
              </h4>
              <MiniDashboard metrics={defaultMetrics.crm} />
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 6. Core Capabilities */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="What you can do"
            subheadline="Core features configured for your team."
          />
          <div className="mt-8">
            <CapabilityGrid capabilities={capabilities} columns={3} />
          </div>
        </div>
      </section>

      {/* 7. Workflow Tour - Stepper */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="From configuration to operations"
            subheadline="A clear path from setup to daily use."
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
          <div className="mt-8 max-w-4xl">
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
              Meridian™ for CRM starts from EUR 500 per month, depending on users and configuration.
            </p>
            <p className="text-muted-foreground mb-6">
              Setup is included in Foundation Build packages or available as a fixed onboarding fee.
            </p>
            <PrimaryButton href="/book?intent=crm-pricing" textColor="astral">
              Get CRM pricing
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline="Ready to get started with Meridian™?"
        primaryCta={{ label: 'Request access', href: '/book?intent=crm' }}
        secondaryCta={{ label: 'Book a call', href: '/book' }}
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareCRM;
