import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { TrackFeatureBlock } from '@/components/sections/TrackFeatureBlock';
import { Steps } from '@/components/sections/Steps';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CyberGyroscope } from '@/components/ui/cyber-gyroscope';

const Services = () => {
  return (
    <Layout>
      <Hero
        headline="Services organized by track, so buyers can self-select fast."
        subheadline="Pick the track that matches your bottleneck. Each track has clear deliverables, pricing, and a direct checkout option."
        primaryCta={{ label: 'Explore tracks', href: '#track-a' }}
        secondaryCta={{ label: 'Book a call', href: '/book' }}
        plate="navy"
        rightElement={<CyberGyroscope speed={0.8} />}
      />

      {/* Track A */}
      <TrackFeatureBlock
        id="track-a"
        label="Track A"
        headline="Brand and Growth Systems"
        explainer="External credibility and conversion foundations, built cleanly and maintained lightly."
        whenFits={[
          'Your public presence does not match your real capability.',
          'Your website looks fine but does not convert.',
          'Decks, proposals, and marketing materials are inconsistent across teams.',
        ]}
        deliverables={[
          { title: 'Brand system', description: 'Identity, guidelines, templates.' },
          { title: 'Website and CMS', description: 'Structure, content model, conversion pages.' },
          { title: 'Sales materials', description: 'Deck system, proposal templates, case study format.' },
        ]}
        deliveryOptions={['Fixed-scope projects', 'Monthly stewardship retainers']}
        primaryCta={{ label: 'See Track A details', href: '/services/brand' }}
        secondaryCta={{ label: 'View Track A pricing', href: '/services/brand#pricing' }}
        variant="light"
      />

      {/* Track B */}
      <TrackFeatureBlock
        id="track-b"
        label="Track B"
        headline="Internal Operations Systems"
        explainer="SharePoint, SOPs, templates, and governance that reduce operational drag."
        whenFits={[
          'Teams lose time to file chaos and unclear ownership.',
          'Processes live in people\'s heads.',
          'Onboarding depends on handholding.',
        ]}
        deliverables={[
          { title: 'SharePoint architecture', description: 'Site and library structure with permissions model.' },
          { title: 'SOP library', description: 'Operational templates and documented procedures.' },
          { title: 'Forms and workflows', description: 'Request workflows with approvals.' },
          { title: 'Onboarding and governance', description: 'Onboarding library and governance documentation.' },
        ]}
        deliveryOptions={['Setup projects', 'Ops maintenance retainers']}
        primaryCta={{ label: 'See Track B details', href: '/services/ops' }}
        secondaryCta={{ label: 'View Track B pricing', href: '/services/ops#pricing' }}
        variant="muted"
      />

      {/* Track C */}
      <TrackFeatureBlock
        id="track-c"
        label="Track C"
        headline="AI Agents and Automation"
        explainer="Practical agent workflows for real teams, with approvals, auditability, and safe failure modes."
        whenFits={[
          'High-volume repetitive work across support, sales ops, finance ops, HR ops.',
          'Knowledge scattered across docs and threads.',
          'Manual routing, triage, summarization, and drafting consumes staff time.',
        ]}
        deliverables={[
          { title: 'Customer support automation', description: 'Triage, draft replies, escalation.' },
          { title: 'Sales ops automation', description: 'Lead intake, enrichment, follow-ups, meeting prep.' },
          { title: 'Marketing ops automation', description: 'Briefs, repurposing, reporting summaries.' },
          { title: 'Finance ops automation', description: 'Intake, categorization, approval routing.' },
          { title: 'HR ops automation', description: 'Onboarding flows, policy Q&A, internal requests.' },
          { title: 'Knowledge and search', description: 'Permission-aware answers from internal docs.' },
        ]}
        deliveryOptions={['Human approvals where needed', 'Role-based access', 'Audit trail and logs']}
        primaryCta={{ label: 'See Track C details', href: '/services/agents' }}
        secondaryCta={{ label: 'View Track C pricing', href: '/services/agents#pricing' }}
        variant="light"
      />

      {/* How engagement works */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            headline="How engagement works"
            variant="poster"
          />
          <Steps
            steps={[
              { title: 'Pick a track', description: 'Choose the track that matches your bottleneck.' },
              { title: 'Choose a project or retainer', description: 'Fixed-scope delivery or ongoing support.' },
              { title: 'Pay via Stripe or book a call', description: 'Start immediately or discuss scope first.' },
              { title: 'Kickoff and delivery', description: 'Structured delivery with async updates.' },
              { title: 'Optional monthly support', description: 'Continue with a retainer if needed.' },
            ]}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Services;
