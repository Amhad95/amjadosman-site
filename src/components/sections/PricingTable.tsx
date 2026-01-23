import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

interface PackageItem {
  title: string;
  whoFor: string;
  startingPrice: string;
  includes: string[];
}

interface PackageGroup {
  id: string;
  title: string;
  description: string;
  items: PackageItem[];
}

interface FoundationPackage {
  id: string;
  title: string;
  description: string;
  whoFor: string;
  startingPrice: string;
  includes: string[];
  timeline: string;
}

interface PricingTableProps {
  groups: PackageGroup[];
  foundation?: FoundationPackage;
  className?: string;
}

export const PricingTable: React.FC<PricingTableProps> = ({
  groups,
  foundation,
  className,
}) => {
  return (
    <div className={cn('space-y-16', className)}>
      {groups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-24">
          <div className="mb-8">
            <h2 className="font-serif text-heading-lg text-foreground mb-2">
              {group.title}
            </h2>
            <p className="text-body-md text-muted-foreground">
              {group.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.items.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-ink/10 hover:border-ink/20 transition-all"
              >
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.whoFor}
                </p>
                <p className="text-lg font-semibold text-foreground mb-4">
                  {item.startingPrice}
                </p>
                <ul className="space-y-2">
                  {item.includes.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-mint flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}

      {foundation && (
        <section id={foundation.id} className="scroll-mt-24">
          <div className="bg-plate-violet rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl">
              <h2 className="font-serif text-heading-lg text-mint mb-2">
                {foundation.title}
              </h2>
              <p className="text-offwhite/80 mb-4">
                {foundation.description}
              </p>
              <p className="text-sm text-mint/70 mb-6">
                {foundation.whoFor}
              </p>
              
              <p className="text-2xl font-semibold text-mint mb-6">
                {foundation.startingPrice}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {foundation.includes.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-offwhite/80">
                    <Check size={16} className="text-mint flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-mint/70 mb-6">{foundation.timeline}</p>
              
              <PrimaryButton href="/book">
                Book a Call
              </PrimaryButton>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PricingTable;
