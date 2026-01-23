import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardTitle, CardDescription } from '@/components/shared/Card';

interface CardItem {
  title: string;
  description: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  items,
  columns = 3,
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
        'grid grid-cols-1 gap-6',
        gridCols[columns],
        className
      )}
    >
      {items.map((item, index) => (
        <Card key={index}>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
