import React from 'react';
import { PricingZone } from '@/components/sections/PricingZone';
import { RecommendedOfferCard } from '@/components/sections/RecommendedOfferCard';
import { ServiceMenuList } from '@/components/sections/ServiceMenuList';
import { RetainerCard } from '@/components/sections/RetainerCard';
import { ServicePricingTrack } from '@/lib/pricingContent';

interface ServicePricingStackProps {
  track: ServicePricingTrack;
}

export const ServicePricingStack: React.FC<ServicePricingStackProps> = ({ track }) => {
  return (
    <>
      <PricingZone
        headline={track.recommended.headline}
        description={track.recommended.description}
        variant="recommended"
        sequence="01"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {track.recommended.offers.map((offer) => (
            <RecommendedOfferCard
              key={offer.name}
              name={offer.name}
              inclusions={offer.inclusions}
              timeline={offer.timeline}
              price={offer.price}
              payHref={offer.payHref}
              bookHref={offer.bookHref}
              stripePriceId={offer.stripePriceId}
            />
          ))}
        </div>
      </PricingZone>

      <PricingZone
        headline={track.menu.headline}
        description={track.menu.description}
        variant="menu"
        sequence="02"
      >
        <ServiceMenuList items={track.menu.items} />
      </PricingZone>

      <PricingZone
        headline={track.retainer.headline}
        description={track.retainer.description}
        variant="retainer"
        sequence="03"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {track.retainer.tiers.map((tier) => (
            <RetainerCard
              key={tier.tier}
              tier={tier.tier}
              inclusions={tier.inclusions}
              responseTime={tier.responseTime}
              price={tier.price}
              subscribeHref={tier.subscribeHref}
              bookHref={tier.bookHref}
              stripePriceId={tier.stripePriceId}
            />
          ))}
        </div>
      </PricingZone>
    </>
  );
};

export default ServicePricingStack;
