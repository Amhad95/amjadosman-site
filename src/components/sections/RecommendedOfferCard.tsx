import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { startCheckout } from '@/lib/stripe';
import { Check, Clock3, Sparkles } from 'lucide-react';
import { useLocale } from '@/lib/locale';
import { cn } from '@/lib/utils';

interface RecommendedOfferCardProps {
  name: string;
  inclusions: string[];
  timeline: string;
  price: string;
  payHref: string;
  bookHref: string;
  stripePriceId?: string;
}

export const RecommendedOfferCard: React.FC<RecommendedOfferCardProps> = ({
  name,
  inclusions,
  timeline,
  price,
  payHref,
  bookHref,
  stripePriceId,
}) => {
  const { locale, isRTL } = useLocale();
  const handlePay = () => {
    if (stripePriceId) {
      startCheckout(stripePriceId, 'payment');
    }
  };

  return (
    <div className={cn('h-full rounded-[28px] border border-ink/12 bg-card p-6 md:p-7 shadow-[0_24px_54px_-42px_rgba(8,15,32,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-ink/22 flex flex-col', isRTL && 'text-right')}>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-muted/55 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground mb-4">
            <Sparkles size={13} />
            <span>{locale === 'ar' ? 'باقة بداية' : 'Starter package'}</span>
          </div>
          <h4 className="font-serif text-heading-md text-foreground">{name}</h4>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <div className="rounded-full border border-ink/12 bg-muted/55 px-4 py-2 text-sm font-semibold text-foreground">
            {price}
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-muted/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Clock3 size={14} className="text-foreground/70" />
            <span>{timeline}</span>
          </div>
        </div>
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {inclusions.map((item, i) => (
          <li key={i} className="flex items-start gap-3 rounded-2xl border border-ink/8 bg-muted/35 px-4 py-3 text-body-md text-muted-foreground">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/8 text-foreground">
              <Check size={12} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-ink/8 pt-5">
        <div className="flex flex-wrap gap-3">
          {stripePriceId ? (
            <PrimaryButton onClick={handlePay} textColor="ink">{locale === 'ar' ? 'ابدأ هذه الباقة' : 'Start this package'}</PrimaryButton>
          ) : (
            <PrimaryButton href={payHref} textColor="ink">{locale === 'ar' ? 'ابدأ هذه الباقة' : 'Start this package'}</PrimaryButton>
          )}
          <SecondaryButton href={bookHref}>{locale === 'ar' ? 'ناقشها معنا' : 'Talk it through'}</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default RecommendedOfferCard;
