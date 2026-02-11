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
import { SettingsPanel, tasksSettingsConfig } from '@/components/ui/vignettes/SettingsPanel';
import { ImportMapper, tasksImportMappings } from '@/components/ui/vignettes/ImportMapper';
import { TaskKanban } from '@/components/ui/vignettes/TaskKanban';
import { ChecklistApproval } from '@/components/ui/vignettes/ChecklistApproval';
import {
  TaskBoardRealistic,
  TaskListRealistic,
  ApprovalsFlowRealistic,
  TimelineRealistic,
} from '@/components/ui/vignettes/TasksPreviews';
import { CyberGyroscope } from '@/components/ui/cyber-gyroscope';
import {
  Layout as LayoutIcon,
  Users,
  CheckSquare,
  CalendarClock,
  RotateCcw,
  BarChart3,
  Shield,
  MessageSquare,
  ListTodo,
  Clock,
} from 'lucide-react';

// Problem contrast items
const problemItems = [
  {
    before: 'Tasks tracked in chat threads',
    after: 'Structured task boards with deadlines and owners',
    icon: MessageSquare,
  },
  {
    before: 'No clear ownership or accountability',
    after: 'Every task assigned with visible status',
    icon: Users,
  },
  {
    before: 'Progress reported manually in meetings',
    after: 'Real-time boards and dashboards',
    icon: ListTodo,
  },
  {
    before: 'Recurring work falls through the cracks',
    after: 'Automated recurring tasks with reminders',
    icon: Clock,
  },
];

// Outcomes
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

// Capabilities
const capabilities = [
  {
    icon: LayoutIcon,
    title: 'Kanban boards',
    description: 'Visual boards with drag-and-drop stages and swimlanes.',
  },
  {
    icon: Users,
    title: 'Task assignments',
    description: 'Assign owners, watchers, and due dates with notifications.',
  },
  {
    icon: CheckSquare,
    title: 'Approval workflows',
    description: 'Built-in review and sign-off steps for deliverables.',
  },
  {
    icon: CalendarClock,
    title: 'Project timelines',
    description: 'Gantt-style views with milestones and dependencies.',
  },
  {
    icon: RotateCcw,
    title: 'Recurring tasks',
    description: 'Automated task creation on schedules with templates.',
  },
  {
    icon: BarChart3,
    title: 'Progress dashboards',
    description: 'Completion rates, overdue items, and team workload views.',
  },
];

// Workflow steps
const workflowSteps = [
  {
    id: 'configure',
    title: 'Configure structure',
    description: 'Projects, workflow stages, and templates set up.',
    content: <SettingsPanel sections={tasksSettingsConfig} activeSection={0} />,
  },
  {
    id: 'roles',
    title: 'Assign roles and permissions',
    description: 'Team roles, task visibility, and approval flows defined.',
    content: <SettingsPanel sections={tasksSettingsConfig} activeSection={2} />,
  },
  {
    id: 'import',
    title: 'Import data',
    description: 'Existing tasks and recurring items imported.',
    content: <ImportMapper mappings={tasksImportMappings} sourceFile="tasks_export.csv" />,
  },
  {
    id: 'workflow',
    title: 'Run day-to-day workflow',
    description: 'Assign tasks, track progress, complete deliverables.',
    content: <TaskBoardRealistic />,
  },
];

// Hero preview tabs
const heroTabs = [
  { id: 'board', label: 'Board', content: <TaskBoardRealistic /> },
  { id: 'list', label: 'List', content: <TaskListRealistic /> },
  { id: 'approvals', label: 'Approvals', content: <ApprovalsFlowRealistic /> },
  { id: 'timeline', label: 'Timeline', content: <TimelineRealistic /> },
];

const SoftwareTasks = () => {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <Layout>
      {/* 1. Hero with ASCII Animation */}
      <ProductHero
        productName="Cadence"
        productDescriptor="for Tasks"
        headline="Task and work management configured for delivery."
        subheadline="Plan work, assign ownership, and keep delivery visible. Provisioned with your project structures, workflows, and team roles."
        primaryCta={{ label: 'Request access', href: '/book?intent=tasks' }}
        secondaryCta={{ label: 'How onboarding works', href: '#onboarding' }}
        asciiComponent={<CyberGyroscope color="mint" speed={0.8} />}
        plate="astral"
      />

      {/* 2. Product Preview Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Cadence in action"
            subheadline="Boards, lists, approvals, and timelines in one workspace."
            align="center"
          />
          <div className="mt-10 max-w-5xl mx-auto">
            <ProductPreviewFrame title="Cadence Tasks" variant="browser">
              <div className="h-[360px] md:h-[440px]">
                <TabbedProductPreview
                  tabs={heroTabs}
                  searchPlaceholder="Search tasks, projects..."
                  filters={[
                    { label: 'Project', active: false },
                    { label: 'Assignee', active: false },
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
            headline="Built for teams who deliver"
            subheadline="Whether you're managing projects, coordinating teams, or tracking approvals."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            <PersonaCards
              personas={defaultPersonas.tasks}
              onPersonaSelect={setActivePersona}
            />
            <ProductPreviewFrame variant="card" className="min-h-[280px]">
              {activePersona === 0 && <TaskListRealistic />}
              {activePersona === 1 && <TaskKanban />}
              {activePersona === 2 && <ChecklistApproval />}
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 4. Problems It Replaces */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Replace the chaos"
            subheadline="Move from scattered threads and manual tracking to structured task management."
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
              <MiniDashboard metrics={defaultMetrics.tasks} />
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
              Cadence™ for Tasks starts from EUR 500 per month, depending on users and configuration.
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
        headline="Ready to get started with Cadence™?"
        primaryCta={{ label: 'Request access', href: '/book?intent=tasks' }}
        secondaryCta={{ label: 'Book a call', href: '/book' }}
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareTasks;
