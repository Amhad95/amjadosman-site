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
  const introCopyClassName = [
    'section-intro-copy',
    align === 'center' ? 'mx-auto text-center' : isRTL ? 'me-auto text-right' : 'text-left',
  ].join(' ');
  const headerContent = (
    <div className={introCopyClassName}>
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
        <p className="text-subheadline text-muted-foreground">
          {subheadline}
        </p>
      )}
    </div>
  );

  const headerClassName = cn(
    'mb-8 md:mb-12',
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
