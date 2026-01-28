import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Settings, Users, Database, GraduationCap, Check } from 'lucide-react';

interface TimelineStep {
  week: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: TimelineStep[] = [
  {
    week: 'Week 1',
    title: 'Roles and permissions',
    description: 'Team structure, access levels, and approval workflows configured.',
    icon: Users,
  },
  {
    week: 'Week 2',
    title: 'Templates and workflows',
    description: 'Pipeline stages, document templates, and automation rules set up.',
    icon: Settings,
  },
  {
    week: 'Week 3',
    title: 'Data import',
    description: 'Existing records migrated and validated in clean structure.',
    icon: Database,
  },
  {
    week: 'Week 4',
    title: 'Training and handover',
    description: 'Team onboarding, documentation, and admin support begins.',
    icon: GraduationCap,
  },
];

export const SetupTimeline: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className={cn('relative', className)}>
      {/* Progress line */}
      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-ink/10">
        <div
          className="w-full bg-mint transition-all duration-500 ease-out"
          style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeStep;
          const isComplete = index < activeStep;

          return (
            <div
              key={step.week}
              className={cn(
                'relative flex gap-4 p-4 rounded-xl transition-all duration-300',
                isActive && 'bg-mint/10',
                !isActive && 'hover:bg-muted/50 cursor-pointer'
              )}
              onClick={() => setActiveStep(index)}
            >
              {/* Icon */}
              <div
                className={cn(
                  'relative z-10 flex-shrink-0 w-12 h-12 rounded-full',
                  'flex items-center justify-center',
                  'transition-all duration-300',
                  isComplete && 'bg-mint text-ink',
                  isActive && 'bg-plate-astral text-mint ring-2 ring-mint',
                  !isActive && !isComplete && 'bg-muted text-muted-foreground'
                )}
              >
                {isComplete ? (
                  <Check size={20} />
                ) : (
                  <Icon size={20} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className={cn(
                  'text-xs font-semibold uppercase tracking-wide mb-1',
                  isActive ? 'text-mint' : 'text-muted-foreground'
                )}>
                  {step.week}
                </div>
                <h4 className={cn(
                  'font-semibold mb-1 transition-colors',
                  isActive ? 'text-foreground' : 'text-foreground/80'
                )}>
                  {step.title}
                </h4>
                <p className={cn(
                  'text-sm transition-all duration-300',
                  isActive ? 'text-muted-foreground opacity-100 max-h-20' : 'text-muted-foreground/60 opacity-60 max-h-0 overflow-hidden'
                )}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SetupTimeline;
