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
import { SettingsPanel, inventorySettingsConfig } from '@/components/ui/vignettes/SettingsPanel';
import { ImportMapper, inventoryImportMappings } from '@/components/ui/vignettes/ImportMapper';
import { InventoryList } from '@/components/ui/vignettes/InventoryList';
import { ReorderAlert } from '@/components/ui/vignettes/ReorderAlert';
import {
  InventoryItemsPreview,
  InventoryLocationsPreview,
  InventoryReorderPreview,
  InventoryAssetPreview,
} from '@/components/ui/vignettes/ProductPreviews';
import { CyberPyramid } from '@/components/ui/cyber-pyramid';
import {
  Package,
  MapPin,
  AlertTriangle,
  Clipboard,
  RotateCcw,
  Shield,
  FileSpreadsheet,
  Search,
  BarChart3,
  Box,
} from 'lucide-react';

// Problem contrast items
const problemItems = [
  {
    before: 'Stock counted manually on paper',
    after: 'Real-time stock levels with location tracking',
    icon: FileSpreadsheet,
  },
  {
    before: 'Reorders triggered by guesswork',
    after: 'Threshold-based alerts before items run out',
    icon: AlertTriangle,
  },
  {
    before: 'No record of who has what equipment',
    after: 'Full checkout history with return tracking',
    icon: Clipboard,
  },
  {
    before: 'Audit prep takes days of cleanup',
    after: 'Always-current records ready for review',
    icon: Search,
  },
];

// Outcomes
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

// Capabilities
const capabilities = [
  {
    icon: Package,
    title: 'Item tracking',
    description: 'SKU-based catalog with quantities, costs, and category management.',
  },
  {
    icon: MapPin,
    title: 'Location management',
    description: 'Multi-warehouse tracking with sub-locations and transfer workflows.',
  },
  {
    icon: AlertTriangle,
    title: 'Reorder alerts',
    description: 'Configurable thresholds with notifications and suggested quantities.',
  },
  {
    icon: Box,
    title: 'Asset tracking',
    description: 'Equipment lifecycle from procurement to depreciation and disposal.',
  },
  {
    icon: RotateCcw,
    title: 'Checkout and return',
    description: 'Track who has what with checkout approval and return reminders.',
  },
  {
    icon: Shield,
    title: 'Audit trail',
    description: 'Complete history of every movement, adjustment, and transfer.',
  },
];

// Workflow steps
const workflowSteps = [
  {
    id: 'configure',
    title: 'Configure structure',
    description: 'Locations, categories, and thresholds set up.',
    content: <SettingsPanel sections={inventorySettingsConfig} activeSection={0} />,
  },
  {
    id: 'roles',
    title: 'Assign roles and permissions',
    description: 'Warehouse roles, access levels, and checkout rules defined.',
    content: <SettingsPanel sections={inventorySettingsConfig} activeSection={2} />,
  },
  {
    id: 'import',
    title: 'Import data',
    description: 'Item records and stock levels imported and validated.',
    content: <ImportMapper mappings={inventoryImportMappings} sourceFile="inventory_export.csv" />,
  },
  {
    id: 'workflow',
    title: 'Run day-to-day workflow',
    description: 'Track stock, process reorders, manage checkouts.',
    content: <InventoryItemsPreview />,
  },
];

// Hero preview tabs
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
      {/* 1. Hero with ASCII Animation */}
      <ProductHero
        productName="Stockroom"
        productDescriptor="for Inventory"
        headline="Inventory and asset tracking with controlled access."
        subheadline="Know what exists, where it is, and who is accountable. Provisioned with your locations, categories, and reorder workflows."
        primaryCta={{ label: 'Request access', href: '/book?intent=inventory' }}
        secondaryCta={{ label: 'How onboarding works', href: '#onboarding' }}
        asciiComponent={<CyberPyramid color="mint" speed={0.8} />}
        plate="astral"
      />

      {/* 2. Product Preview Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Stockroom in action"
            subheadline="Items, locations, reorder alerts, and asset tracking."
            align="center"
          />
          <div className="mt-10 max-w-5xl mx-auto">
            <ProductPreviewFrame title="Stockroom Inventory" variant="browser">
              <div className="h-[360px] md:h-[440px]">
                <TabbedProductPreview
                  tabs={heroTabs}
                  searchPlaceholder="Search items, locations..."
                  filters={[
                    { label: 'Location', active: false },
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
            headline="Built for teams who track and manage"
            subheadline="Whether you're counting stock, managing equipment, or running audits."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            <PersonaCards
              personas={defaultPersonas.inventory}
              onPersonaSelect={setActivePersona}
            />
            <ProductPreviewFrame variant="card" className="min-h-[280px]">
              {activePersona === 0 && <InventoryList />}
              {activePersona === 1 && <ReorderAlert />}
              {activePersona === 2 && <InventoryAssetPreview />}
            </ProductPreviewFrame>
          </div>
        </div>
      </section>

      {/* 4. Problems It Replaces */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="Replace the chaos"
            subheadline="Move from manual counts and missing records to structured inventory operations."
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
              <MiniDashboard metrics={defaultMetrics.inventory} />
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
              Stockroom™ for Inventory starts from EUR 500 per month, depending on users and configuration.
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
        headline="Ready to get started with Stockroom™?"
        primaryCta={{ label: 'Request access', href: '/book?intent=inventory' }}
        secondaryCta={{ label: 'Book a call', href: '/book' }}
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareInventory;
