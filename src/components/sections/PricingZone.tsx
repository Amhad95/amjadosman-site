import React from 'react';

interface PricingZoneProps {
  headline: string;
  description?: string;
  children: React.ReactNode;
}

export const PricingZone: React.FC<PricingZoneProps> = ({ headline, description, children }) => {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="font-serif text-heading-md text-foreground mb-2">{headline}</h3>
      {description && (
        <p className="text-body-md text-muted-foreground mb-8">{description}</p>
      )}
      {!description && <div className="mb-8" />}
      {children}
    </div>
  );
};

export default PricingZone;
