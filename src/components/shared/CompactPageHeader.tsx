import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';

interface CompactPageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  plate?: PlateColor;
  rightElement?: React.ReactNode;
  className?: string;
}

const plateClasses: Record<PlateColor, string> = {
  violet: 'bg-plate-violet',
  navy: 'bg-plate-navy',
  emerald: 'bg-plate-emerald',
  blue: 'bg-plate-blue',
  astral: 'bg-plate-astral',
  burgundy: 'bg-plate-burgundy',
};

export const CompactPageHeader: React.FC<CompactPageHeaderProps> = ({
  eyebrow,
  title,
  description,
  cta,
  plate = 'violet',
  rightElement,
  className,
}) => {
  return (
    <section className={cn('relative min-h-[38vh] md:min-h-[46vh] flex items-end', plateClasses[plate], className)}>
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-10 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          <div className="lg:col-span-7 max-w-3xl">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.2em] text-mint/80 font-semibold mb-4">{eyebrow}</p>
            )}
            <h1 className="font-serif text-heading-lg md:text-poster-lg text-mint mb-4">{title}</h1>
            {description && <p className="text-body-lg text-offwhite/80 max-w-2xl">{description}</p>}
            {cta && (
              <div className="mt-6">
                <PrimaryButton href={cta.href} textColor={plate}>
                  {cta.label}
                </PrimaryButton>
              </div>
            )}
          </div>
          {rightElement && <div className="lg:col-span-5 flex justify-start lg:justify-end">{rightElement}</div>}
        </div>
      </div>
    </section>
  );
};

export default CompactPageHeader;
