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
import { MiniDashboard, getDefaultMetrics } from '@/components/ui/vignettes/MiniDashboard';
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
import { useLocale } from '@/lib/locale';
import { getSoftwarePageContent } from '@/lib/softwarePageContent';
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

const SoftwareTasks = () => {
  const { locale } = useLocale();
  const content = getSoftwarePageContent(locale).tasks;

  const [activePersona, setActivePersona] = useState(0);
  const problemIcons = [MessageSquare, Users, ListTodo, Clock];
  const capabilityIcons = [LayoutIcon, Users, CheckSquare, CalendarClock, RotateCcw, BarChart3];
  const previewTabs = [
    { id: 'board', label: content.previewSection.tabLabels[0], content: <TaskBoardRealistic /> },
    { id: 'list', label: content.previewSection.tabLabels[1], content: <TaskListRealistic /> },
    { id: 'approvals', label: content.previewSection.tabLabels[2], content: <ApprovalsFlowRealistic /> },
    { id: 'timeline', label: content.previewSection.tabLabels[3], content: <TimelineRealistic /> },
  ];
  const workflowSteps = [
    {
      id: 'configure',
      title: content.workflowSection.steps[0].title,
      description: content.workflowSection.steps[0].description,
      content: <SettingsPanel sections={tasksSettingsConfig} activeSection={0} />,
    },
    {
      id: 'roles',
      title: content.workflowSection.steps[1].title,
      description: content.workflowSection.steps[1].description,
      content: <SettingsPanel sections={tasksSettingsConfig} activeSection={2} />,
    },
    {
      id: 'import',
      title: content.workflowSection.steps[2].title,
      description: content.workflowSection.steps[2].description,
      content: <ImportMapper mappings={tasksImportMappings} sourceFile="tasks_export.csv" />,
    },
    {
      id: 'workflow',
      title: content.workflowSection.steps[3].title,
      description: content.workflowSection.steps[3].description,
      content: <TaskBoardRealistic />,
    },
  ];

  return (
    <Layout motionLevel="subtle">
      {/* 1. Hero with ASCII Animation */}
      <ProductHero
        productName="Cadence"
        productDescriptor={content.hero.productDescriptor}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCta={{ label: content.hero.primaryCtaLabel, href: '/book?intent=tasks' }}
        secondaryCta={{ label: content.hero.secondaryCtaLabel, href: '#onboarding' }}
        asciiComponent={<CyberGyroscope color="mint" speed={0.8} />}
        plate="astral"
      />

      {/* 2. Product Preview Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline={content.previewSection.headline}
            subheadline={content.previewSection.subheadline}
            align="center"
          />
          <div className="mt-10 max-w-5xl mx-auto">
            <ProductPreviewFrame title={content.previewSection.frameTitle} variant="browser">
              <div className="h-[360px] md:h-[440px]">
                <TabbedProductPreview
                  tabs={previewTabs}
                  searchPlaceholder={content.previewSection.searchPlaceholder}
                  filters={[
                    { label: content.previewSection.filters[0], active: false },
                    { label: content.previewSection.filters[1], active: false },
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
            headline={content.personaSection.headline}
            subheadline={content.personaSection.subheadline}
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
            headline={content.problemSection.headline}
            subheadline={content.problemSection.subheadline}
          />
          <div className="mt-8">
            <ProblemContrast
              items={content.problemSection.items.map((item, index) => ({
                ...item,
                icon: problemIcons[index],
              }))}
            />
          </div>
        </div>
      </section>

      {/* 5. Outcomes */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline={content.outcomesSection.headline}
            subheadline={content.outcomesSection.subheadline}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <OutcomeTiles outcomes={content.outcomesSection.items} />
            </div>
            <ProductPreviewFrame variant="minimal" className="p-4">
              <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wide">
                {content.outcomesSection.snapshotLabel}
              </h4>
              <MiniDashboard metrics={getDefaultMetrics(locale).tasks} />
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 6. Core Capabilities */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline={content.capabilitiesSection.headline}
            subheadline={content.capabilitiesSection.subheadline}
          />
          <div className="mt-8">
            <CapabilityGrid
              capabilities={content.capabilitiesSection.items.map((item, index) => ({
                ...item,
                icon: capabilityIcons[index],
              }))}
              columns={3}
            />
          </div>
        </div>
      </section>

      {/* 7. Workflow Tour */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline={content.workflowSection.headline}
            subheadline={content.workflowSection.subheadline}
          />
          <WorkflowStepper steps={workflowSteps} className="mt-8" />
        </div>
      </section>

      {/* 8. Governance - Roles Matrix */}
      <section id="governance" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline={content.governanceSection.headline}
            subheadline={content.governanceSection.subheadline}
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
            headline={content.onboardingSection.headline}
            subheadline={content.onboardingSection.subheadline}
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
              {content.pricingSection.note}
            </p>
            <p className="text-muted-foreground mb-6">
              {content.pricingSection.setupNote}
            </p>
            <PrimaryButton href="/book?intent=tasks-pricing" textColor="astral">
              {content.pricingSection.ctaLabel}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline={content.finalCta.headline}
        description={content.finalCta.description}
        primaryCta={{ label: content.finalCta.primaryLabel, href: '/book' }}
        secondaryCta={{ label: content.finalCta.secondaryLabel, href: '/pricing' }}
        visualKey="task-gyre"
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareTasks;
