import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Palette, Globe, Presentation, FolderTree, FileText, UserPlus, LucideIcon } from 'lucide-react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { AnimatedIcon } from '@/components/shared/AnimatedIcon';
import { useLocale } from '@/lib/locale';
import { getUiCopy } from '@/lib/uiCopy';

interface PackageItem {
  title: string;
  whoFor: string;
  startingPrice: string;
  includes: string[];
  icon?: LucideIcon;
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
  plateColor?: 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';
  className?: string;
}

const plateClasses = {
  violet: 'bg-plate-violet',
  navy: 'bg-plate-navy',
  emerald: 'bg-plate-emerald',
  blue: 'bg-plate-blue',
  astral: 'bg-plate-astral',
  burgundy: 'bg-plate-burgundy',
};

// Icon mapping for package items by title keyword
const getPackageIcon = (title: string): LucideIcon => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('brand')) return Palette;
  if (titleLower.includes('website') || titleLower.includes('web')) return Globe;
  if (titleLower.includes('sales') || titleLower.includes('materials')) return Presentation;
  if (titleLower.includes('sharepoint')) return FolderTree;
  if (titleLower.includes('sop')) return FileText;
  if (titleLower.includes('onboarding')) return UserPlus;
  return FileText;
};

export const PricingTable: React.FC<PricingTableProps> = ({
  groups,
  foundation,
  plateColor = 'navy',
  className,
}) => {
  const { locale, isRTL } = useLocale();
  const copy = getUiCopy(locale);

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
            {group.items.map((item, index) => {
              const ItemIcon = item.icon || getPackageIcon(item.title);
              return (
                <div
                  key={index}
                  className={cn(
                    'bg-gradient-to-br from-card to-muted/30 rounded-2xl p-8 border border-ink/8 shadow-sm hover:border-ink/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200',
                    isRTL && 'text-right'
                  )}
                >
                  <div className={cn('flex items-start gap-4 mb-4', isRTL && 'flex-row-reverse')}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${plateClasses[plateColor]} flex items-center justify-center`}>
                      <AnimatedIcon 
                        icon={ItemIcon} 
                        animation="pulse" 
                        color="mint" 
                        size={20} 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl text-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.whoFor}
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-4">
                    {item.startingPrice}
                  </p>
                  <ul className="space-y-2">
                    {item.includes.map((feature, i) => (
                      <li
                        key={i}
                        className={cn('flex items-start gap-2 text-sm text-muted-foreground', isRTL && 'flex-row-reverse')}
                      >
                        <Check size={16} className="text-mint flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {foundation && (
        <section id={foundation.id} className="scroll-mt-24">
          <div className="colored-surface-shadow rounded-[34px] bg-plate-violet p-8 md:p-12">
            <div className={cn('max-w-3xl', isRTL && 'text-right')}>
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
                  <div
                    key={i}
                    className={cn('flex items-center gap-2 text-sm text-offwhite/80', isRTL && 'flex-row-reverse')}
                  >
                    <Check size={16} className="text-mint flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <p className="text-sm text-mint/70 mb-6">{foundation.timeline}</p>
              
              <PrimaryButton href="/book">
                {copy.bookCall}
              </PrimaryButton>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PricingTable;
