import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { CyberPercentage } from '@/components/ui/cyber-percentage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tracks = [
  {
    title: 'Brand and Growth Systems',
    description: 'Brand, web, and sales materials. Fixed-scope projects and monthly retainers.',
    href: '/services/brand#pricing',
  },
  {
    title: 'Internal Operations Systems',
    description: 'SharePoint, SOPs, templates, and governance. Setup projects and ops maintenance.',
    href: '/services/ops#pricing',
  },
  {
    title: 'AI Agents and Automation',
    description: 'Agent workflows with approvals, logs, and monitoring. Pilots, packs, and managed retainers.',
    href: '/services/agents#pricing',
  },
];

const Pricing = () => {
  return (
    <Layout>
      <Hero
        headline="Pricing by track"
        subheadline="Each track has its own pricing: fixed-scope offers, individual services, and retainers. Pick the track that matches your needs."
        plate="navy"
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        rightElement={<CyberPercentage speed={0.8} />}
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.map((track, i) => (
              <Link
                key={i}
                to={track.href}
                className="bg-card border border-ink/10 rounded-2xl p-8 hover:border-ink/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group flex flex-col"
              >
                <h3 className="font-serif text-heading-md text-foreground mb-3">{track.title}</h3>
                <p className="text-body-md text-muted-foreground mb-6 flex-1">{track.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-lavender group-hover:text-lavender/80 transition-colors">
                  View pricing
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        headline="Not sure which track? Book a short call."
        primaryCta={{ label: 'Book a Call', href: '/book' }}
        secondaryCta={{ label: 'View all services', href: '/services' }}
        variant="dark"
      />
    </Layout>
  );
};

export default Pricing;
