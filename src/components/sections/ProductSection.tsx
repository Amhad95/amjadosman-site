import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionHeader } from '@/components/shared/SectionHeader';

interface ProductSectionProps {
  headline: string;
  subheadline?: string;
  bullets?: string[];
  children?: React.ReactNode;
  variant?: 'light' | 'muted' | 'dark';
  className?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  headline,
  subheadline,
  bullets,
  children,
  variant = 'light',
  className,
}) => {
  const bgClasses = {
    light: 'bg-background',
    muted: 'bg-muted',
    dark: 'bg-plate-astral',
  };

  const textClasses = {
    light: 'text-foreground',
    muted: 'text-foreground',
    dark: 'text-offwhite',
  };

  return (
    <section className={cn('py-16 md:py-24', bgClasses[variant], className)}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader headline={headline} subheadline={subheadline} />
        
        {bullets && bullets.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check size={20} className="text-mint flex-shrink-0 mt-0.5" />
                <span className={cn('text-body-md', textClasses[variant])}>
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default ProductSection;
