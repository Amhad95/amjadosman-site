import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { startCheckout } from '@/lib/stripe';

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
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-card border border-ink/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h4 className="font-serif text-lg text-foreground">{item.name}</h4>
            <p className="text-sm text-muted-foreground">{item.startingPrice}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {item.stripePriceId ? (
              <PrimaryButton onClick={() => startCheckout(item.stripePriceId!, 'payment')} textColor="ink">Pay</PrimaryButton>
            ) : item.payHref ? (
              <PrimaryButton href={item.payHref} textColor="ink">Pay</PrimaryButton>
            ) : null}
            <SecondaryButton href={item.bookHref}>Book a call</SecondaryButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceMenuList;
