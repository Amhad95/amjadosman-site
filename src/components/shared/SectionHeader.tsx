import React from 'react'; 
import { cn } from '@/lib/utils';
import { Reveal, MotionVariant } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  className?: string;
  align?: 'left' | 'center';
  variant?: 'poster' | 'interface';
  motionVariant?: MotionVariant | 'none';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  headline,
  subheadline,
  className,
  align = 'left',
  variant = 'poster',
  motionVariant = variant === 'interface' ? 'subtle' : 'default',
}) => {
  const { isRTL } = useLocale();
  const headerContent = (
    <>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'adsi-section-header font-serif',
          variant === 'poster' ? 'text-poster-lg' : 'text-heading-lg',
          'text-foreground mb-4'
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p className="text-subheadline text-muted-foreground max-w-3xl">
          {subheadline}
        </p>
      )}
    </>
  );

  const headerClassName = cn(
    'mb-8 md:mb-12',
    align === 'center' ? 'text-center' : isRTL && 'text-right',
    className
  );

  if (motionVariant === 'none') {
    return <div className={headerClassName}>{headerContent}</div>;
  }

  return (
    <Reveal className={headerClassName} variant={motionVariant}>
      {headerContent}
    </Reveal>
  );
};

export default SectionHeader;
