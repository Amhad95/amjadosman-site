import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { ProductSection } from '@/components/sections/ProductSection';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { VignetteContainer } from '@/components/shared/VignetteContainer';
import { InvoiceFlow } from '@/components/ui/vignettes/InvoiceFlow';
import { PaymentDashboard } from '@/components/ui/vignettes/PaymentDashboard';
import { CyberPercentage } from '@/components/ui/cyber-percentage';

const SoftwareAccounting = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline="Accounting workflows configured for clarity, not complexity."
        subheadline="Invoicing, expenses, and basic finance visibility in a clean system. Provisioned with your approval flows, categories, and reporting needs."
        primaryCta={{ label: "Request access", href: "/book?intent=accounting" }}
        secondaryCta={{ label: "Book a Call", href: "/book" }}
        plate="astral"
        rightElement={<CyberPercentage color="mint" speed={0.8} />}
      />

      {/* Who It's For */}
      <ProductSection
        headline="Who it's for"
        bullets={[
          "Teams managing invoices across spreadsheets and email",
          "Finance leads who need cleaner expense tracking",
          "Founders who want basic visibility without learning accounting software",
        ]}
        variant="light"
      />

      {/* Outcomes */}
      <ProductSection
        headline="Outcomes"
        bullets={[
          "Faster invoicing and payment tracking",
          "Cleaner expense capture and approvals",
          "A dashboard that stays readable",
          "Audit-ready records without manual cleanup",
        ]}
        variant="muted"
      />

      {/* Key Workflows */}
      <ProductSection
        headline="Key workflows"
        bullets={[
          "Invoice creation with templates and line items",
          "Payment tracking and status updates",
          "Expense submission and approval workflows",
          "Vendor and client records",
          "Category-based reporting",
          "Role-based access for finance team and approvers",
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
            <VignetteContainer label="Invoice creation flow">
              <InvoiceFlow />
            </VignetteContainer>
            <VignetteContainer label="Payment status dashboard">
              <PaymentDashboard />
            </VignetteContainer>
          </div>
        </div>
      </section>

      {/* Configuration and Onboarding */}
      <ProductSection
        headline="Configured for your team, not just activated"
        bullets={[
          "Approval workflows and signing authority set up",
          "Categories, templates, and numbering configured",
          "Existing data imported into clean structure",
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
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareAccounting;
