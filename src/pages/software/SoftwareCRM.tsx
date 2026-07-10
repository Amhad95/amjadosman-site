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
import { SettingsPanel, crmSettingsConfig } from '@/components/ui/vignettes/SettingsPanel';
import { ImportMapper, crmImportMappings } from '@/components/ui/vignettes/ImportMapper';
import {
  PipelineBoardRealistic,
  ContactsTableRealistic,
  TasksListRealistic,
  MiniReportsRealistic,
} from '@/components/ui/vignettes/CRMPreviews';
import { PipelineBoard } from '@/components/ui/vignettes/PipelineBoard';
import { ContactTimeline } from '@/components/ui/vignettes/ContactTimeline';
import { CyberHeart } from '@/components/ui/cyber-heart';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';
import { getSoftwarePageContent, getSoftwareSectionEyebrows } from '@/lib/softwarePageContent';
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
} from 'lucide-react';

const SoftwareCRM = () => {
  const { locale } = useLocale();
  const content = getSoftwarePageContent(locale).crm;
  usePageMeta({ title: `${content.hero.headline} | Amjad Osman`, description: content.hero.subheadline });
  const sectionEyebrows = getSoftwareSectionEyebrows(locale);

  const [activePersona, setActivePersona] = useState(0);
  const problemIcons = [FileSpreadsheet, MessageSquare, Target, Users];
  const capabilityIcons = [GitBranch, Users, Clock, BarChart3, Mail, Shield];
  const previewTabs = [
    { id: 'pipeline', label: content.previewSection.tabLabels[0], content: <PipelineBoardRealistic /> },
    { id: 'contacts', label: content.previewSection.tabLabels[1], content: <ContactsTableRealistic /> },
    { id: 'tasks', label: content.previewSection.tabLabels[2], content: <TasksListRealistic /> },
    { id: 'reports', label: content.previewSection.tabLabels[3], content: <MiniReportsRealistic /> },
  ];
  const workflowSteps = [
    {
      id: 'configure',
      title: content.workflowSection.steps[0].title,
      description: content.workflowSection.steps[0].description,
      content: <SettingsPanel sections={crmSettingsConfig} activeSection={0} />,
    },
    {
      id: 'roles',
      title: content.workflowSection.steps[1].title,
      description: content.workflowSection.steps[1].description,
      content: <SettingsPanel sections={crmSettingsConfig} activeSection={2} />,
    },
    {
      id: 'import',
      title: content.workflowSection.steps[2].title,
      description: content.workflowSection.steps[2].description,
      content: <ImportMapper mappings={crmImportMappings} />,
    },
    {
      id: 'workflow',
      title: content.workflowSection.steps[3].title,
      description: content.workflowSection.steps[3].description,
      content: <PipelineBoardRealistic />,
    },
  ];

  return (
    <Layout motionLevel="subtle">
      {/* 1. Hero with ASCII Animation */}
      <ProductHero
        productName="Meridian"
        productDescriptor={content.hero.productDescriptor}
        headline={content.hero.headline}
        subheadline={content.hero.subheadline}
        primaryCta={{ label: content.hero.primaryCtaLabel, href: '/book?intent=crm' }}
        secondaryCta={{ label: content.hero.secondaryCtaLabel, href: '#onboarding' }}
        asciiComponent={<CyberHeart color="mint" speed={0.8} />}
        plate="astral"
      />

      {/* 2. Product Preview Section - Realistic UI */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={sectionEyebrows.preview}
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
            eyebrow={sectionEyebrows.personas}
            headline={content.personaSection.headline}
            subheadline={content.personaSection.subheadline}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            <PersonaCards
              personas={defaultPersonas.crm}
              onPersonaSelect={setActivePersona}
            />
            <ProductPreviewFrame variant="card" className="min-h-[280px]">
              {activePersona === 0 && <PipelineBoard />}
              {activePersona === 1 && <MiniReportsRealistic />}
              {activePersona === 2 && <ContactTimeline />}
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 4. Problems It Replaces */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={sectionEyebrows.problems}
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
            eyebrow={sectionEyebrows.outcomes}
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
              <MiniDashboard metrics={getDefaultMetrics(locale).crm} />
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 6. Core Capabilities */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={sectionEyebrows.capabilities}
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

      {/* 7. Workflow Tour - Stepper with Realistic Previews */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow={sectionEyebrows.workflow}
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
            eyebrow={sectionEyebrows.governance}
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
            eyebrow={sectionEyebrows.onboarding}
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
            <PrimaryButton href="/book?intent=crm-pricing" textColor="astral">
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
        visualKey="relation-core"
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareCRM;
