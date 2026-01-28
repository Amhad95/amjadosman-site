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
import { TaskKanban } from '@/components/ui/vignettes/TaskKanban';
import { ChecklistApproval } from '@/components/ui/vignettes/ChecklistApproval';
import {
  TasksBoardPreview,
  TasksListPreview,
  TasksApprovalsPreview,
  TasksTimelinePreview,
} from '@/components/ui/vignettes/ProductPreviews';
import { CyberGyroscope } from '@/components/ui/cyber-gyroscope';
import { cn } from '@/lib/utils';

const outcomes = [
  {
    headline: 'Clear assignments and deadlines',
    description: 'Every task has an owner, a due date, and a visible status.',
  },
  {
    headline: 'Fewer dropped tasks',
    description: 'Nothing lost in chat threads or scattered spreadsheets.',
  },
  {
    headline: 'Better coordination across teams',
    description: 'Cross-team visibility without micromanagement.',
  },
  {
    headline: 'Visible progress without manual updates',
    description: 'Status boards and reports update as work gets done.',
  },
];

const workflowSteps = [
  {
    id: 'configure',
    title: 'Configure structure',
    description: 'Projects, workflow stages, and templates set up.',
    content: <ConfigurationPreview steps={defaultConfigSteps.tasks} activeStep={0} />,
  },
  {
    id: 'roles',
    title: 'Assign roles and permissions',
    description: 'Team roles, task visibility, and approval flows defined.',
    content: <ConfigurationPreview steps={defaultConfigSteps.tasks} activeStep={1} />,
  },
  {
    id: 'import',
    title: 'Import data',
    description: 'Existing tasks and recurring items imported.',
    content: <ConfigurationPreview steps={defaultConfigSteps.tasks} activeStep={2} />,
  },
  {
    id: 'workflow',
    title: 'Run day-to-day workflow',
    description: 'Assign tasks, track progress, complete deliverables.',
    content: <ConfigurationPreview steps={defaultConfigSteps.tasks} activeStep={3} />,
  },
];

const heroTabs = [
  { id: 'board', label: 'Board', content: <TasksBoardPreview /> },
  { id: 'list', label: 'List', content: <TasksListPreview /> },
  { id: 'approvals', label: 'Approvals', content: <TasksApprovalsPreview /> },
  { id: 'timeline', label: 'Timeline', content: <TasksTimelinePreview /> },
];

const SoftwareTasks = () => {
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
                Task and work management configured for delivery.
              </h1>
              <p className="text-body-lg text-offwhite/80 mb-8">
                Plan work, assign ownership, and keep delivery visible. Provisioned with your project structures, workflows, and team roles.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="/book?intent=tasks" textColor="astral">
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
              personas={defaultPersonas.tasks}
              onPersonaSelect={setActivePersona}
            />
            <div className="bg-plate-astral rounded-xl border border-mint/20 p-6 min-h-[280px]">
              {activePersona === 0 && <TasksListPreview />}
              {activePersona === 1 && <TaskKanban />}
              {activePersona === 2 && <ChecklistApproval />}
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
              <MiniDashboard metrics={defaultMetrics.tasks} />
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
            subheadline="Control who can create, assign, approve, and close—without complexity."
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
              Tasks subscription starts from EUR 500 per month, depending on users and configuration.
            </p>
            <p className="text-muted-foreground mb-6">
              Setup is included in Foundation Build packages or available as a fixed onboarding fee.
            </p>
            <PrimaryButton href="/book?intent=tasks-pricing" textColor="astral">
              Get Tasks pricing
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline="Ready to get started with Tasks?"
        primaryCta={{ label: "Request access", href: "/book?intent=tasks" }}
        secondaryCta={{ label: "Book a call", href: "/book" }}
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareTasks;
