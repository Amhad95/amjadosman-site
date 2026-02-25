import React from 'react';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

interface RecommendedOfferCardProps {
  name: string;
  inclusions: string[];
  timeline: string;
  price: string;
  payHref: string;
  bookHref: string;
}

export const RecommendedOfferCard: React.FC<RecommendedOfferCardProps> = ({
  name,
  inclusions,
  timeline,
  price,
  payHref,
  bookHref,
}) => {
  return (
    <div className="bg-card border border-ink/10 rounded-2xl p-8 flex flex-col">
      <h4 className="font-serif text-heading-md text-foreground mb-4">{name}</h4>
      <ul className="space-y-2 mb-6 flex-1">
        {inclusions.map((item, i) => (
          <li key={i} className="text-body-md text-muted-foreground flex items-start gap-2">
            <span className="text-mint mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground mb-1">{timeline}</p>
      <p className="font-serif text-heading-md text-foreground mb-6">{price}</p>
      <div className="flex flex-wrap gap-3">
        <PrimaryButton href={payHref} textColor="ink">Pay and start</PrimaryButton>
        <SecondaryButton href={bookHref}>Book a call</SecondaryButton>
      </div>
    </div>
  );
};

export default RecommendedOfferCard;
