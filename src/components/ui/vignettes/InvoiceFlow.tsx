import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { FileText, User, Send, Check } from 'lucide-react';

const steps = [
  { icon: FileText, label: 'Create', desc: 'Add line items' },
  { icon: User, label: 'Review', desc: 'Verify details' },
  { icon: Send, label: 'Send', desc: 'Email to client' },
  { icon: Check, label: 'Paid', desc: 'Payment received' },
];

export const InvoiceFlow: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setCurrentStep(3);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="w-full h-full flex flex-col justify-center p-4">
      {/* Invoice Preview */}
      <div className="bg-ink/40 rounded-lg p-3 border border-mint/10 mb-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <div className="text-xs font-semibold text-offwhite">Invoice #1042</div>
            <div className="text-[10px] text-offwhite/50">Acme Corp</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-mint">$8,500.00</div>
            <div className={cn(
              'text-[9px] px-1.5 py-0.5 rounded',
              currentStep >= 3 ? 'bg-mint/20 text-mint' : 'bg-lavender/20 text-lavender'
            )}>
              {currentStep >= 3 ? 'Paid' : currentStep >= 2 ? 'Sent' : 'Draft'}
            </div>
          </div>
        </div>
        <div className="space-y-1">
          {['Web Development', 'Design System', 'Training'].map((item, i) => (
            <div key={i} className="flex justify-between text-[10px]">
              <span className="text-offwhite/60">{item}</span>
              <span className="text-offwhite/80">${(2000 + i * 1500).toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-between px-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center',
                    'transition-all duration-300',
                    isActive ? 'bg-mint text-ink' : 'bg-ink/40 text-offwhite/40',
                    isCurrent && 'ring-2 ring-mint/50 ring-offset-2 ring-offset-plate-astral'
                  )}
                >
                  <Icon size={14} />
                </div>
                <div className={cn(
                  'text-[9px] mt-1 transition-colors duration-300',
                  isActive ? 'text-mint' : 'text-offwhite/40'
                )}>
                  {step.label}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'flex-1 h-0.5 mx-1 transition-colors duration-300',
                    index < currentStep ? 'bg-mint' : 'bg-ink/40'
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default InvoiceFlow;
