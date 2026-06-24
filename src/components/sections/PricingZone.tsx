import React from 'react';
import { cn } from '@/lib/utils';
import { Compass, Layers3, Repeat2 } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';

type PricingZoneVariant = 'recommended' | 'menu' | 'retainer';

interface PricingZoneProps {
  headline: string;
  description?: string;
  children: React.ReactNode;
  variant?: PricingZoneVariant;
  sequence?: string;
}

const zoneStyles: Record<
  PricingZoneVariant,
  {
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    shell: string;
    badge: string;
    number: string;
  }
> = {
  recommended: {
    label: 'Fixed-scope packages',
    icon: Compass,
    shell: 'border-ink/12 bg-card',
    badge: 'border-ink/12 bg-muted/55 text-foreground',
    number: 'bg-ink text-offwhite',
  },
  menu: {
    label: 'Single-service menu',
    icon: Layers3,
    shell: 'border-lavender/18 bg-card',
    badge: 'border-lavender/24 bg-lavender/10 text-plate-astral',
    number: 'bg-lavender text-offwhite',
  },
  retainer: {
    label: 'Ongoing support',
    icon: Repeat2,
    shell: 'border-ink/12 bg-card',
    badge: 'border-ink/12 bg-ink/5 text-foreground',
    number: 'bg-ink text-offwhite',
  },
};

export const PricingZone: React.FC<PricingZoneProps> = ({
  headline,
  description,
  children,
  variant = 'recommended',
  sequence = '01',
}) => {
  const { locale, isRTL } = useLocale();
  const localizedZoneStyles = {
    recommended: locale === 'ar' ? 'باقات بنطاق ثابت' : 'Fixed-scope packages',
    menu: locale === 'ar' ? 'خدمات منفردة' : 'Single-service menu',
    retainer: locale === 'ar' ? 'دعم مستمر' : 'Ongoing support',
  };
  const style = zoneStyles[variant];
  const Icon = style.icon;

  return (
    <Reveal className={cn('mb-10 last:mb-0 rounded-[30px] border p-6 md:p-8 lg:p-10 shadow-[0_26px_60px_-42px_rgba(8,15,32,0.16)]', style.shell, isRTL && 'text-right')}>
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-semibold', style.number)}>
              {sequence}
            </div>
            <div className={cn('inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em]', style.badge)}>
              <Icon size={14} />
              <span>{localizedZoneStyles[variant]}</span>
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="font-serif text-heading-md text-foreground mb-2">{headline}</h3>
            {description && (
              <p className="text-body-md text-muted-foreground">{description}</p>
            )}
          </div>
        </div>

        <div className="min-w-0">
          {children}
        </div>
      </div>
    </Reveal>
  );
};

export default PricingZone;
