import React from 'react';
import { cn } from '@/lib/utils';
import { AnimatedIcon } from '@/components/shared/AnimatedIcon';
import { ClipboardCheck, LayoutGrid, Hammer, FileCheck, Shield, LucideIcon } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface StepsProps {
  steps: Step[];
  className?: string;
}

const defaultStepIcons: LucideIcon[] = [
  ClipboardCheck,
  LayoutGrid,
  Hammer,
  FileCheck,
  Shield,
];

export const Steps: React.FC<StepsProps> = ({ steps, className }) => {
  return (
    <div className={cn('relative', className)}>
      {/* Desktop horizontal layout */}
      <div className="hidden lg:flex gap-4">
        {steps.map((step, index) => {
          const StepIcon = step.icon || defaultStepIcons[index] || FileCheck;
          return (
            <div key={index} className="flex-1 relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+32px)] right-0 h-px bg-ink/20" />
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Icon with animation */}
                <div className="mb-2">
                  <AnimatedIcon 
                    icon={StepIcon} 
                    animation="float" 
                    color="ink" 
                    size={28} 
                  />
                </div>
                
                {/* Number circle */}
                <div className="w-12 h-12 rounded-full bg-mint text-ink flex items-center justify-center font-semibold text-lg mb-4">
                  {index + 1}
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet vertical layout */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => {
          const StepIcon = step.icon || defaultStepIcons[index] || FileCheck;
          return (
            <div key={index} className="flex gap-4">
              {/* Icon, Number and line */}
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  <AnimatedIcon 
                    icon={StepIcon} 
                    animation="float" 
                    color="ink" 
                    size={20} 
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-mint text-ink flex items-center justify-center font-semibold text-base flex-shrink-0">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-ink/20 mt-2" />
                )}
              </div>
              
              {/* Content */}
              <div className="pb-6 pt-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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

export default Steps;
