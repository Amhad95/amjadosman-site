import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { startCheckout } from '@/lib/stripe';
import { Layers3 } from 'lucide-react';
import { useLocale } from '@/lib/locale';
import { cn } from '@/lib/utils';
import { getUiCopy } from '@/lib/uiCopy';

interface ServiceMenuItem {
  name: string;
  startingPrice: string;
  payHref?: string;
  bookHref: string;
  stripePriceId?: string;
}

interface ServiceMenuListProps {
  items: ServiceMenuItem[];
}

export const ServiceMenuList: React.FC<ServiceMenuListProps> = ({ items }) => {
  const { locale, isRTL } = useLocale();
  const copy = getUiCopy(locale);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-[24px] border border-lavender/16 bg-card p-5 md:p-6 shadow-[0_18px_44px_-40px_rgba(8,15,32,0.14)]"
        >
          <div className={cn('flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between', isRTL && 'text-right')}>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lavender text-offwhite text-xs font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-lavender/24 bg-lavender/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-plate-astral">
                  <Layers3 size={13} />
                  <span>{copy.singleService}</span>
                </div>
              </div>
              <h4 className="font-serif text-xl text-foreground">{item.name}</h4>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end lg:shrink-0">
              <div className="rounded-full border border-ink/10 bg-muted/60 px-4 py-2 text-sm font-semibold text-foreground w-fit">
                {item.startingPrice}
              </div>
              <div className="flex flex-wrap gap-3">
                {item.stripePriceId ? (
                  <PrimaryButton onClick={() => startCheckout(item.stripePriceId!, 'payment')} textColor="ink">{copy.startService}</PrimaryButton>
                ) : item.payHref ? (
                  <PrimaryButton href={item.payHref} textColor="ink">{copy.startService}</PrimaryButton>
                ) : null}
                <SecondaryButton href={item.bookHref}>{copy.bookCallLower}</SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceMenuList;
