import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { CyberHeart } from '@/components/ui/cyber-heart';
import { siteContent } from '@/lib/content';
import { Check } from 'lucide-react';

const About = () => {
  const { about } = siteContent;
  return (
    <Layout>
      <Hero
        headline={about.hero.headline}
        subheadline={about.hero.subheadline}
        plate="burgundy"
        rightElement={<CyberHeart speed={0.8} />}
      />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <p className="text-body-lg text-foreground mb-8">{about.content.intro}</p>
          <ul className="space-y-3 mb-8">
            {about.content.approach.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={20} className="text-mint flex-shrink-0 mt-0.5" />
                <span className="text-body-md text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-body-md text-muted-foreground">{about.content.focus}</p>
        </div>
      </section>
      <CTABand primaryCta={about.cta} variant="dark" />
    </Layout>
  );
};
export default About;
