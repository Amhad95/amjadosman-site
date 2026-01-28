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
import { InventoryList } from '@/components/ui/vignettes/InventoryList';
import { ReorderAlert } from '@/components/ui/vignettes/ReorderAlert';
import {
  InventoryItemsPreview,
  InventoryLocationsPreview,
  InventoryReorderPreview,
  InventoryAssetPreview,
} from '@/components/ui/vignettes/ProductPreviews';
import { CyberPyramid } from '@/components/ui/cyber-pyramid';
import { cn } from '@/lib/utils';

const outcomes = [
  {
    headline: 'Know what exists and where it is',
    description: 'Searchable records with location tracking and category filtering.',
  },
  {
    headline: 'Reorder alerts and basic controls',
    description: 'Threshold-based alerts before items run out.',
  },
  {
    headline: 'Cleaner handovers and accountability',
    description: 'Assignment history for equipment and assets.',
  },
  {
    headline: 'Audit-ready records for assets and stock',
    description: 'Clean documentation for compliance and reporting.',
  },
];

const workflowSteps = [
  {
    id: 'configure',
    title: 'Configure structure',
    description: 'Locations, categories, and thresholds set up.',
    content: <ConfigurationPreview steps={defaultConfigSteps.inventory} activeStep={0} />,
  },
  {
    id: 'roles',
    title: 'Assign roles and permissions',
    description: 'Warehouse roles, access levels, and checkout rules defined.',
    content: <ConfigurationPreview steps={defaultConfigSteps.inventory} activeStep={1} />,
  },
  {
    id: 'import',
    title: 'Import data',
    description: 'Item records and stock levels imported and validated.',
    content: <ConfigurationPreview steps={defaultConfigSteps.inventory} activeStep={2} />,
  },
  {
    id: 'workflow',
    title: 'Run day-to-day workflow',
    description: 'Track stock, process reorders, manage checkouts.',
    content: <ConfigurationPreview steps={defaultConfigSteps.inventory} activeStep={3} />,
  },
];

const heroTabs = [
  { id: 'items', label: 'Items', content: <InventoryItemsPreview /> },
  { id: 'locations', label: 'Locations', content: <InventoryLocationsPreview /> },
  { id: 'reorder', label: 'Reorder', content: <InventoryReorderPreview /> },
  { id: 'assets', label: 'Assets', content: <InventoryAssetPreview /> },
];

const SoftwareInventory = () => {
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
                Inventory and asset tracking with controlled access.
              </h1>
              <p className="text-body-lg text-offwhite/80 mb-8">
                Know what exists, where it is, and who is accountable. Provisioned with your locations, categories, and reorder workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="/book?intent=inventory" textColor="astral">
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
              personas={defaultPersonas.inventory}
              onPersonaSelect={setActivePersona}
            />
            <div className="bg-plate-astral rounded-xl border border-mint/20 p-6 min-h-[280px]">
              {activePersona === 0 && <InventoryList />}
              {activePersona === 1 && <ReorderAlert />}
              {activePersona === 2 && <InventoryAssetPreview />}
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
              <MiniDashboard metrics={defaultMetrics.inventory} />
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
            subheadline="Control who can add, move, checkout, and manage—without complexity."
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
              Inventory subscription starts from EUR 500 per month, depending on users and configuration.
            </p>
            <p className="text-muted-foreground mb-6">
              Setup is included in Foundation Build packages or available as a fixed onboarding fee.
            </p>
            <PrimaryButton href="/book?intent=inventory-pricing" textColor="astral">
              Get Inventory pricing
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        headline="Ready to get started with Inventory?"
        primaryCta={{ label: "Request access", href: "/book?intent=inventory" }}
        secondaryCta={{ label: "Book a call", href: "/book" }}
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareInventory;
