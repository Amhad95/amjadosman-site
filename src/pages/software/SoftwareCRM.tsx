import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { ProductSection } from '@/components/sections/ProductSection';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { VignetteContainer } from '@/components/shared/VignetteContainer';
import { PipelineBoard } from '@/components/ui/vignettes/PipelineBoard';
import { ContactTimeline } from '@/components/ui/vignettes/ContactTimeline';
import { CyberHeart } from '@/components/ui/cyber-heart';

const SoftwareCRM = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline="CRM configured for how your team actually sells."
        subheadline="A clean relationship management system provisioned with your pipeline stages, roles, and follow-up workflows. Not a platform you figure out alone."
        primaryCta={{ label: "Request access", href: "/book?intent=crm" }}
        secondaryCta={{ label: "Book a Call", href: "/book" }}
        plate="astral"
        rightElement={<CyberHeart color="mint" speed={1} />}
      />

      {/* Who It's For */}
      <ProductSection
        headline="Who it's for"
        bullets={[
          "Teams tracking relationships across spreadsheets and inboxes",
          "Sales leaders who need visibility without manual reporting",
          "Operations teams managing client onboarding and renewals",
        ]}
        variant="light"
      />

      {/* Outcomes */}
      <ProductSection
        headline="Outcomes"
        bullets={[
          "Clear pipeline stages and ownership",
          "Reliable follow-up and activity tracking",
          "Simple reporting for decisions",
          "Clean handover when roles change",
        ]}
        variant="muted"
      />

      {/* Key Workflows */}
      <ProductSection
        headline="Key workflows"
        bullets={[
          "Contact and company records with linked history",
          "Pipeline board with stage automation",
          "Task and reminder management",
          "Email templates and activity logging",
          "Reporting dashboards",
          "Role-based access and permissions",
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
            <VignetteContainer label="Pipeline board with deal progression">
              <PipelineBoard />
            </VignetteContainer>
            <VignetteContainer label="Contact profile with activity timeline">
              <ContactTimeline />
            </VignetteContainer>
          </div>
        </div>
      </section>

      {/* Configuration and Onboarding */}
      <ProductSection
        headline="Configured for your team, not just activated"
        bullets={[
          "Roles and permissions set up for your structure",
          "Pipeline stages and custom fields configured",
          "Data imported from your current tools",
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
              CRM subscription starts from EUR 500 per month, depending on users and configuration.
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
        headline="Ready to get started with CRM?"
        primaryCta={{ label: "Request access", href: "/book?intent=crm" }}
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareCRM;
