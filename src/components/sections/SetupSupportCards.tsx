import React from 'react';
import { cn } from '@/lib/utils';
import { Settings, Database, GraduationCap } from 'lucide-react';

interface SetupCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const cards: SetupCard[] = [
  {
    icon: Settings,
    title: 'Provision and configuration',
    description: 'Roles, permissions, workflows, and approval chains configured to match your structure.',
  },
  {
    icon: Database,
    title: 'Data import and structure',
    description: 'Existing records migrated cleanly with proper categorization and validation.',
  },
  {
    icon: GraduationCap,
    title: 'Training and ongoing support',
    description: 'Team onboarding, documentation, and controlled admin support for changes.',
  },
];

export const SetupSupportCards: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-6', className)}>
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className={cn(
              'group p-6 rounded-xl',
              'bg-card border border-ink/10',
              'hover:border-mint/30 hover:shadow-lg hover:shadow-mint/5',
              'transition-all duration-300'
            )}
          >
            <div className={cn(
              'w-12 h-12 rounded-xl mb-4',
              'bg-plate-astral text-mint',
              'flex items-center justify-center',
              'group-hover:scale-110',
              'transition-transform duration-300'
            )}>
              <Icon size={24} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              {card.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SetupSupportCards;
