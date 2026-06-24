import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

interface TrackFeatureBlockProps {
  id: string;
  label: string;
  headline: string;
  explainer: string;
  whenFits: string[];
  deliverables: { title: string; description: string }[];
  deliveryOptions: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  variant?: 'light' | 'muted';
}

export const TrackFeatureBlock: React.FC<TrackFeatureBlockProps> = ({
  id,
  label,
  headline,
  explainer,
  whenFits,
  deliverables,
  deliveryOptions,
  primaryCta,
  secondaryCta,
  variant = 'light',
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 scroll-mt-24',
        variant === 'muted' ? 'bg-muted' : 'bg-background'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
          {label}
        </p>

        {/* Headline */}
        <h2 className="font-serif text-poster-lg text-foreground mb-4">
          {headline}
        </h2>

        {/* Explainer */}
        <p className="text-subheadline text-muted-foreground max-w-3xl mb-12">
          {explainer}
        </p>

        {/* When this track fits */}
        <div className="mb-12">
          <h3 className="font-serif text-heading-md text-foreground mb-6">
            When this track fits
          </h3>
          <ul className="space-y-3">
            {whenFits.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-mint flex-shrink-0 mt-0.5" />
                <span className="text-body-md text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="mb-12">
          <h3 className="font-serif text-heading-md text-foreground mb-6">
            {deliverables.length > 4 ? 'Use cases we implement' : 'What we deliver'}
          </h3>
          <div className={cn(
            'grid gap-6',
            deliverables.length > 4
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-' + Math.min(deliverables.length, 4)
          )}>
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="bg-card border border-ink/10 rounded-2xl p-6"
              >
                <h4 className="font-serif text-lg text-foreground mb-2">
                  {d.title}
                </h4>
                <p className="text-body-md text-muted-foreground">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery options */}
        <div className="mb-12">
          <h3 className="font-serif text-heading-md text-foreground mb-4">
            How it's delivered
          </h3>
          <div className="flex flex-wrap gap-3">
            {deliveryOptions.map((opt, i) => (
              <span
                key={i}
                className="bg-muted border border-ink/8 rounded-full px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {opt}
              </span>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4">
          <PrimaryButton href={primaryCta.href} textColor="ink">
            {primaryCta.label}
          </PrimaryButton>
          <SecondaryButton href={secondaryCta.href}>
            {secondaryCta.label}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default TrackFeatureBlock;
