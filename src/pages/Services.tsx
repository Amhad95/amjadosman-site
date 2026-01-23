import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { siteContent } from '@/lib/content';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { services } = siteContent;

  return (
    <Layout>
      {/* Hero */}
      <Hero
        headline={services.hero.headline}
        subheadline={services.hero.subheadline}
        primaryCta={services.hero.primaryCta}
        plate="navy"
      />

      {/* Service Tracks */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {services.tracks.map((track) => (
              <div key={track.id} id={track.id} className="scroll-mt-24">
                <SectionHeader
                  headline={track.title}
                  subheadline={track.description}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {track.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-2xl p-6 border border-ink/10 hover:border-ink/20 transition-all group"
                    >
                      <h3 className="font-serif text-lg text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <Link
                        to={`/pricing#${track.id}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-lavender hover:text-lavender/80 transition-colors"
                      >
                        View pricing
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CTABand
        primaryCta={services.ctaBand.primaryCta}
        secondaryCta={services.ctaBand.secondaryCta}
        variant="dark"
      />
    </Layout>
  );
};

export default Services;
