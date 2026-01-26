import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { ProductSection } from '@/components/sections/ProductSection';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { VignetteContainer } from '@/components/shared/VignetteContainer';
import { TaskKanban } from '@/components/ui/vignettes/TaskKanban';
import { ChecklistApproval } from '@/components/ui/vignettes/ChecklistApproval';
import { CyberGyroscope } from '@/components/ui/cyber-gyroscope';

const SoftwareTasks = () => {
  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline="Task and work management configured for delivery."
        subheadline="Plan work, assign ownership, and keep delivery visible. Provisioned with your project structures, workflows, and team roles."
        primaryCta={{ label: "Request access", href: "/book?intent=tasks" }}
        secondaryCta={{ label: "Book a Call", href: "/book" }}
        plate="astral"
        rightElement={<CyberGyroscope color="mint" speed={0.8} />}
      />

      {/* Who It's For */}
      <ProductSection
        headline="Who it's for"
        bullets={[
          "Teams tracking work across chat threads and spreadsheets",
          "Project leads who need visibility without micromanaging",
          "Operations teams coordinating across departments",
        ]}
        variant="light"
      />

      {/* Outcomes */}
      <ProductSection
        headline="Outcomes"
        bullets={[
          "Clear assignments and deadlines",
          "Fewer dropped tasks",
          "Better coordination across teams",
          "Visible progress without manual updates",
        ]}
        variant="muted"
      />

      {/* Key Workflows */}
      <ProductSection
        headline="Key workflows"
        bullets={[
          "Task boards with customizable stages",
          "Checklists and subtask management",
          "Assignment with due dates and priorities",
          "Project grouping and filtering",
          "Approval workflows for deliverables",
          "Role-based views for teams and managers",
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
            <VignetteContainer label="Task board with status progression">
              <TaskKanban />
            </VignetteContainer>
            <VignetteContainer label="Checklist with approvals">
              <ChecklistApproval />
            </VignetteContainer>
          </div>
        </div>
      </section>

      {/* Configuration and Onboarding */}
      <ProductSection
        headline="Configured for your team, not just activated"
        bullets={[
          "Project structures and workflow stages set up",
          "Roles and permissions configured for your teams",
          "Templates and checklists created for recurring work",
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
        variant="dark"
      />
    </Layout>
  );
};

export default SoftwareTasks;
