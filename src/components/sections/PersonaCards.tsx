import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { User, Briefcase, Building2 } from 'lucide-react';

interface Persona {
  id: string;
  title: string;
  pain: string;
  payoff: string;
  icon: React.ElementType;
}

interface PersonaCardsProps {
  personas: Persona[];
  className?: string;
  onPersonaSelect?: (index: number) => void;
}

export const PersonaCards: React.FC<PersonaCardsProps> = ({
  personas,
  className,
  onPersonaSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    onPersonaSelect?.(index);
  };

  return (
    <div className={cn('space-y-3', className)}>
      {personas.map((persona, index) => {
        const Icon = persona.icon;
        const isActive = index === activeIndex;

        return (
          <div
            key={persona.id}
            onClick={() => handleSelect(index)}
            className={cn(
              'relative p-5 rounded-xl cursor-pointer',
              'border-2 transition-all duration-300',
              isActive
                ? 'bg-gray-50 border-gray-900 shadow-lg'
                : 'bg-card border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            )}
          >
            {/* Active indicator */}
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-900 rounded-r-full" />
            )}

            <div className="flex items-start gap-4">
              <div
                className={cn(
                  'flex-shrink-0 w-10 h-10 rounded-lg',
                  'flex items-center justify-center',
                  isActive ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                )}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className={cn(
                  'font-semibold mb-1',
                  isActive ? 'text-foreground' : 'text-foreground/80'
                )}>
                  {persona.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="text-red-600 font-medium">Pain:</span> {persona.pain}
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="text-emerald-600 font-medium">Payoff:</span> {persona.payoff}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Default personas for reuse
export const defaultPersonas = {
  crm: [
    {
      id: 'sales-rep',
      title: 'Sales Representative',
      pain: 'Tracking leads across sticky notes and spreadsheets.',
      payoff: 'One clear pipeline with follow-up reminders.',
      icon: User,
    },
    {
      id: 'sales-lead',
      title: 'Sales Manager',
      pain: 'No visibility into team activity or pipeline health.',
      payoff: 'Real-time dashboards and activity logs.',
      icon: Briefcase,
    },
    {
      id: 'ops',
      title: 'Operations Lead',
      pain: 'Client handovers get lost in email threads.',
      payoff: 'Complete contact history in one place.',
      icon: Building2,
    },
  ],
  accounting: [
    {
      id: 'finance',
      title: 'Finance Manager',
      pain: 'Chasing invoices and approvals across chat.',
      payoff: 'Structured invoice flow with status tracking.',
      icon: Briefcase,
    },
    {
      id: 'admin',
      title: 'Admin / Bookkeeper',
      pain: 'Expense receipts scattered in email folders.',
      payoff: 'Clean expense capture and categorization.',
      icon: User,
    },
    {
      id: 'founder',
      title: 'Founder / Owner',
      pain: 'No quick view of cash position or aging.',
      payoff: 'Dashboard with payment status at a glance.',
      icon: Building2,
    },
  ],
  inventory: [
    {
      id: 'warehouse',
      title: 'Warehouse Staff',
      pain: 'Manual counts and paper-based tracking.',
      payoff: 'Digital records with barcode support.',
      icon: User,
    },
    {
      id: 'ops-mgr',
      title: 'Operations Manager',
      pain: 'Stockouts discovered too late.',
      payoff: 'Reorder alerts before items run out.',
      icon: Briefcase,
    },
    {
      id: 'it',
      title: 'IT / Facilities',
      pain: 'No clear record of who has what equipment.',
      payoff: 'Asset register with assignment history.',
      icon: Building2,
    },
  ],
  tasks: [
    {
      id: 'team-member',
      title: 'Team Member',
      pain: 'Tasks assigned in chat get lost.',
      payoff: 'Clear personal task list with deadlines.',
      icon: User,
    },
    {
      id: 'project-lead',
      title: 'Project Lead',
      pain: 'Manually checking in on progress.',
      payoff: 'Board view with real-time status updates.',
      icon: Briefcase,
    },
    {
      id: 'dept-head',
      title: 'Department Head',
      pain: 'No overview of workload across teams.',
      payoff: 'Cross-team visibility and reporting.',
      icon: Building2,
    },
  ],
};

export default PersonaCards;
