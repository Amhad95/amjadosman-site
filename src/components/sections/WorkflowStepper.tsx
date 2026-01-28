import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

interface WorkflowStepperProps {
  steps: WorkflowStep[];
  className?: string;
}

export const WorkflowStepper: React.FC<WorkflowStepperProps> = ({ steps, className }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-8', className)}>
      {/* Left: Stepper */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-ink/10" />
        
        <div className="space-y-2">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isComplete = index < activeStep;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={cn(
                  'relative flex gap-4 p-4 rounded-xl cursor-pointer',
                  'transition-all duration-300',
                  isActive && 'bg-mint/10',
                  !isActive && 'hover:bg-muted/50'
                )}
              >
                {/* Step number */}
                <div
                  className={cn(
                    'relative z-10 flex-shrink-0 w-8 h-8 rounded-full',
                    'flex items-center justify-center text-sm font-bold',
                    'transition-all duration-300',
                    isComplete && 'bg-mint text-ink',
                    isActive && 'bg-plate-astral text-mint ring-2 ring-mint',
                    !isActive && !isComplete && 'bg-muted text-muted-foreground'
                  )}
                >
                  {isComplete ? <Check size={16} /> : index + 1}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className={cn(
                    'font-semibold mb-1 transition-colors',
                    isActive ? 'text-foreground' : 'text-foreground/70'
                  )}>
                    {step.title}
                  </h4>
                  <p className={cn(
                    'text-sm text-muted-foreground transition-opacity',
                    isActive ? 'opacity-100' : 'opacity-60'
                  )}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Preview */}
      <div className="relative bg-plate-astral rounded-xl overflow-hidden min-h-[300px]">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={cn(
              'absolute inset-0 p-6',
              'transition-all duration-500 ease-out',
              activeStep === index
                ? 'opacity-100 translate-y-0'
                : index < activeStep
                  ? 'opacity-0 -translate-y-8'
                  : 'opacity-0 translate-y-8'
            )}
          >
            {step.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowStepper;
