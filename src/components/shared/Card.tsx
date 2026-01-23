import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
}) => {
  return (
    <div
      className={cn(
        'bg-card rounded-2xl p-6 md:p-8',
        'border border-ink/10',
        hover && 'transition-all duration-200 hover:border-ink/20 hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
  <h3 className={cn('font-serif text-heading-md text-foreground mb-2', className)}>
    {children}
  </h3>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => (
  <p className={cn('text-body-md text-muted-foreground', className)}>
    {children}
  </p>
);

export default Card;
