import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { CTABand } from '@/components/sections/CTABand';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedIcon } from '@/components/shared/AnimatedIcon';
import { CyberGyroscope } from '@/components/ui/cyber-gyroscope';
import { siteContent } from '@/lib/content';
import { ArrowRight, Palette, Globe, Presentation, FolderTree, FileText, LayoutTemplate, UserPlus, DoorOpen, LayoutDashboard, GitBranch, Wrench, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Icon mapping for service items
const serviceIconMap: Record<string, LucideIcon> = {
  'Brand system': Palette,
  'Website and CMS': Globe,
  'Sales and pitch materials': Presentation,
  'SharePoint': FolderTree,
  'SOP library': FileText,
  'Templates and governance': LayoutTemplate,
  'Onboarding pack': UserPlus,
  'Portals': DoorOpen,
  'Dashboards': LayoutDashboard,
  'Workflow apps': GitBranch,
  'Lightweight internal tools': Wrench,
};

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
        rightElement={<CyberGyroscope speed={0.8} />}
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
                  variant="poster"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {track.items.map((item, index) => {
                    const ItemIcon = serviceIconMap[item.title] || FileText;
                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 border border-ink/8 shadow-sm hover:border-ink/15 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
                      >
                        <div className="mb-4">
                          <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center">
                            <AnimatedIcon 
                              icon={ItemIcon} 
                              animation="float" 
                              color="ink" 
                              size={24} 
                            />
                          </div>
                        </div>
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
                    );
                  })}
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
