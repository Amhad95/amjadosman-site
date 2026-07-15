import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { CheckoutButton } from '@/components/shared/CheckoutButton';
import { Check, Repeat2, TimerReset } from 'lucide-react';
import { useLocale } from '@/lib/locale';
import { cn } from '@/lib/utils';
import { getUiCopy } from '@/lib/uiCopy';

interface RetainerCardProps {
  tier: string;
  inclusions: string[];
  responseTime: string;
  price: string;
  subscribeHref: string;
  bookHref: string;
  stripePriceId?: string;
}

export const RetainerCard: React.FC<RetainerCardProps> = ({
  tier,
  inclusions,
  responseTime,
  price,
  subscribeHref,
  bookHref,
  stripePriceId,
}) => {
  const { locale, isRTL } = useLocale();
  const copy = getUiCopy(locale);
  return (
    <div className={cn('h-full rounded-[28px] border border-ink/12 bg-card p-6 md:p-7 shadow-[0_22px_52px_-42px_rgba(8,15,32,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 flex flex-col', isRTL && 'text-right')}>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-ink/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground mb-4">
            <Repeat2 size={13} />
            <span>{copy.retainer}</span>
          </div>
          <h4 className="font-serif text-heading-md text-foreground">{tier}</h4>
        </div>

        <div className="rounded-full border border-ink/12 bg-muted/55 px-4 py-2 text-sm font-semibold text-foreground">
          {price}
        </div>
      </div>

      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-muted/45 px-3 py-1.5 text-xs font-medium text-muted-foreground mb-6">
        <TimerReset size={14} className="text-lavender" />
        <span>{responseTime}</span>
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {inclusions.map((item, i) => (
          <li key={i} className="flex items-start gap-3 rounded-2xl border border-ink/8 bg-muted/25 px-4 py-3 text-body-md text-muted-foreground">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lavender/14 text-plate-astral">
              <Check size={12} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-ink/8 pt-5">
        <div className="flex flex-wrap gap-3">
          {stripePriceId ? (
            <CheckoutButton priceId={stripePriceId} mode="subscription" serviceName={tier} textColor="ink">{copy.startRetainer}</CheckoutButton>
          ) : (
            <PrimaryButton href={subscribeHref} textColor="ink">{copy.startRetainer}</PrimaryButton>
          )}
          <SecondaryButton href={bookHref}>{copy.talkItThrough}</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default RetainerCard;
