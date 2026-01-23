import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardTitle, CardDescription, CardIcon } from '@/components/shared/Card';
import { LucideIcon } from 'lucide-react';

interface CardItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  featured?: boolean;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'elevated' | 'glass';
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  items,
  columns = 3,
  variant = 'default',
  className,
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 md:gap-8',
        gridCols[columns],
        className
      )}
    >
      {items.map((item, index) => (
        <Card key={index} variant={variant} featured={item.featured}>
          {item.icon && (
            <CardIcon>
              <item.icon size={24} />
            </CardIcon>
          )}
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
