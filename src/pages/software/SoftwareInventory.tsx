import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { ProductSection } from '@/components/sections/ProductSection';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { VignetteContainer } from '@/components/shared/VignetteContainer';
import { InventoryList } from '@/components/ui/vignettes/InventoryList';
import { ReorderAlert } from '@/components/ui/vignettes/ReorderAlert';
import { CyberPyramid } from '@/components/ui/cyber-pyramid';

const SoftwareInventory = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline="Inventory and asset tracking with controlled access."
        subheadline="Know what exists, where it is, and who is accountable. Provisioned with your locations, categories, and reorder workflows."
        primaryCta={{ label: "Request access", href: "/book?intent=inventory" }}
        secondaryCta={{ label: "Book a Call", href: "/book" }}
        plate="astral"
        rightElement={<CyberPyramid color="mint" speed={0.8} />}
      />

      {/* Who It's For */}
      <ProductSection
        headline="Who it's for"
        bullets={[
          "Teams tracking stock across spreadsheets and memory",
          "Operations managers who need visibility across locations",
          "IT and facilities teams managing asset assignments",
        ]}
        variant="light"
      />

      {/* Outcomes */}
      <ProductSection
        headline="Outcomes"
        bullets={[
          "Know what exists and where it is",
          "Reorder alerts and basic controls",
          "Cleaner handovers and accountability",
          "Audit-ready records for assets and stock",
        ]}
        variant="muted"
      />

      {/* Key Workflows */}
      <ProductSection
        headline="Key workflows"
        bullets={[
          "Item and asset records with location tracking",
          "Stock level monitoring with reorder alerts",
          "Assignment and checkout workflows",
          "Barcode and QR code support",
          "Location and category filtering",
          "Role-based access for warehouse and admin staff",
        ]}
        variant="light"
      />

      {/* Animated UI Vignettes */}
      <section className="py-16 md:py-24 bg-plate-astral">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-poster-lg text-offwhite mb-8 md:mb-12">
            See it in action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VignetteContainer label="Inventory list with filtering">
              <InventoryList />
            </VignetteContainer>
            <VignetteContainer label="Reorder alerts and status">
              <ReorderAlert />
            </VignetteContainer>
          </div>
        </div>
      </section>

      {/* Configuration and Onboarding */}
      <ProductSection
        headline="Configured for your team, not just activated"
        bullets={[
          "Locations, categories, and thresholds set up",
          "Access roles configured for staff and managers",
          "Existing inventory imported into clean structure",
          "Onboarding, training, and documentation included",
          "Ongoing admin support with controlled change requests",
        ]}
        variant="light"
      />

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
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareInventory;
