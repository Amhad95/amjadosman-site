import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  featured?: boolean;
  variant?: 'default' | 'elevated' | 'glass';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  featured = false,
  variant = 'default',
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-200';
  
  const variantStyles = {
    default: cn(
      'bg-gradient-to-br from-card to-muted/30',
      'border border-ink/8',
      'shadow-sm',
      hover && 'hover:border-ink/20 hover:shadow-lg hover:shadow-ink/5 hover:-translate-y-0.5'
    ),
    elevated: cn(
      'bg-card',
      'border border-ink/10',
      'shadow-md shadow-ink/5',
      hover && 'hover:shadow-xl hover:shadow-ink/10 hover:-translate-y-1'
    ),
    glass: cn(
      'bg-white/80 backdrop-blur-sm',
      'border border-white/20',
      hover && 'hover:bg-white/90'
    ),
  };

  const featuredStyles = featured && 'border-l-4 border-l-mint relative overflow-hidden';

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        featuredStyles,
        'p-8 md:p-10',
        className
      )}
    >
      {featured && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mint/10 to-transparent pointer-events-none" />
      )}
      <div className="relative">{children}</div>
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className, accent = false }) => (
  <h3 className={cn(
    'font-serif text-heading-md text-foreground mb-3',
    accent && 'pb-3 border-b border-mint/30',
    className
  )}>
    {children}
  </h3>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => (
  <p className={cn('text-body-md text-muted-foreground leading-relaxed', className)}>
    {children}
  </p>
);

interface CardIconProps {
  children: React.ReactNode;
  className?: string;
}

export const CardIcon: React.FC<CardIconProps> = ({ children, className }) => (
  <div className={cn(
    'w-12 h-12 rounded-xl bg-gradient-to-br from-mint/20 to-mint/5 flex items-center justify-center mb-4',
    'text-foreground',
    className
  )}>
    {children}
  </div>
);

export default Card;
