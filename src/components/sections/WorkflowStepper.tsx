import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { ProductPreviewFrame } from '@/components/shared/ProductPreviewFrame';
import { useLocale } from '@/lib/locale';

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
  const { locale, isRTL } = useLocale();

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-8', className)}>
      {/* Left: Stepper */}
      <div className="relative">
        {/* Vertical line */}
        <div className={cn('absolute top-8 bottom-8 w-0.5 bg-gray-200', isRTL ? 'right-4' : 'left-4')} />
        
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
                  isRTL && 'flex-row-reverse text-right',
                  'transition-all duration-300',
                  isActive && 'bg-gray-100',
                  !isActive && 'hover:bg-gray-50'
                )}
              >
                {/* Step number */}
                <div
                  className={cn(
                    'relative z-10 flex-shrink-0 w-8 h-8 rounded-full',
                    'flex items-center justify-center text-sm font-bold',
                    'transition-all duration-300',
                    isComplete && 'bg-gray-900 text-white',
                    isActive && 'bg-white text-gray-900 ring-2 ring-gray-900 shadow-sm',
                    !isActive && !isComplete && 'bg-gray-200 text-gray-500'
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

      {/* Right: Preview in neutral frame */}
      <ProductPreviewFrame
        variant="browser"
        title={locale === 'ar' ? 'الإعداد' : 'Configuration'}
      >
        <div className="relative min-h-[300px]">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={cn(
                'absolute inset-0',
                'transition-all duration-500 ease-out',
                activeStep === index
                  ? 'opacity-100 translate-y-0'
                  : index < activeStep
                    ? 'opacity-0 -translate-y-8 pointer-events-none'
                    : 'opacity-0 translate-y-8 pointer-events-none'
              )}
            >
              {step.content}
            </div>
          ))}
        </div>
      </ProductPreviewFrame>
    </div>
  );
};

export default WorkflowStepper;
