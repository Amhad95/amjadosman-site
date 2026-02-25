import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { startCheckout } from '@/lib/stripe';

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
  const handleSubscribe = () => {
    if (stripePriceId) {
      startCheckout(stripePriceId, 'subscription');
    }
  };

  return (
    <div className="bg-card border border-ink/10 rounded-2xl p-8 flex flex-col">
      <h4 className="font-serif text-heading-md text-foreground mb-4">{tier}</h4>
      <ul className="space-y-2 mb-4 flex-1">
        {inclusions.map((item, i) => (
          <li key={i} className="text-body-md text-muted-foreground flex items-start gap-2">
            <span className="text-mint mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground mb-1">{responseTime}</p>
      <p className="font-serif text-heading-md text-foreground mb-6">{price}</p>
      <div className="flex flex-wrap gap-3">
        {stripePriceId ? (
          <PrimaryButton onClick={handleSubscribe} textColor="ink">Subscribe</PrimaryButton>
        ) : (
          <PrimaryButton href={subscribeHref} textColor="ink">Subscribe</PrimaryButton>
        )}
        <SecondaryButton href={bookHref}>Book a call</SecondaryButton>
      </div>
    </div>
  );
};

export default RetainerCard;
