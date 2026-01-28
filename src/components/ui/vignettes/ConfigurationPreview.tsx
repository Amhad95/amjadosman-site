import React from 'react';
import { cn } from '@/lib/utils';

interface ConfigStep {
  title: string;
  items: string[];
}

interface ConfigurationPreviewProps {
  steps: ConfigStep[];
  activeStep: number;
  className?: string;
}

export const ConfigurationPreview: React.FC<ConfigurationPreviewProps> = ({
  steps,
  activeStep,
  className,
}) => {
  return (
    <div className={cn('w-full h-full flex flex-col', className)}>
      {/* Step header */}
      <div className="text-xs font-semibold text-mint mb-3">
        Step {activeStep + 1}: {steps[activeStep]?.title}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        {steps[activeStep]?.items.map((item, i) => (
          <div
            key={i}
            className={cn(
              'flex items-center gap-2 p-2 rounded-lg bg-ink/30',
              'animate-fade-in',
              i === 0 && 'border border-mint/30'
            )}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={cn(
              'w-5 h-5 rounded flex items-center justify-center text-[10px]',
              i === 0 ? 'bg-mint text-ink' : 'bg-ink/50 text-offwhite/50'
            )}>
              {i + 1}
            </div>
            <span className="text-[11px] text-offwhite">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const defaultConfigSteps = {
  crm: [
    {
      title: 'Configure structure',
      items: ['Set up pipeline stages', 'Define custom fields', 'Configure deal values'],
    },
    {
      title: 'Assign roles and permissions',
      items: ['Create user roles', 'Set visibility rules', 'Define approval chains'],
    },
    {
      title: 'Import data',
      items: ['Map existing contacts', 'Import deal history', 'Validate records'],
    },
    {
      title: 'Run day-to-day workflow',
      items: ['Track deals in pipeline', 'Log activities', 'Generate reports'],
    },
  ],
  accounting: [
    {
      title: 'Configure structure',
      items: ['Set up categories', 'Define invoice templates', 'Configure numbering'],
    },
    {
      title: 'Assign roles and permissions',
      items: ['Create approver roles', 'Set spending limits', 'Define workflows'],
    },
    {
      title: 'Import data',
      items: ['Import client records', 'Migrate vendor data', 'Set opening balances'],
    },
    {
      title: 'Run day-to-day workflow',
      items: ['Create invoices', 'Track payments', 'Manage expenses'],
    },
  ],
  inventory: [
    {
      title: 'Configure structure',
      items: ['Set up locations', 'Define categories', 'Configure thresholds'],
    },
    {
      title: 'Assign roles and permissions',
      items: ['Create warehouse roles', 'Set access levels', 'Define checkout rules'],
    },
    {
      title: 'Import data',
      items: ['Import item records', 'Set stock levels', 'Map asset assignments'],
    },
    {
      title: 'Run day-to-day workflow',
      items: ['Track stock levels', 'Process reorders', 'Manage checkouts'],
    },
  ],
  tasks: [
    {
      title: 'Configure structure',
      items: ['Set up projects', 'Define workflow stages', 'Create templates'],
    },
    {
      title: 'Assign roles and permissions',
      items: ['Create team roles', 'Set task visibility', 'Define approval flows'],
    },
    {
      title: 'Import data',
      items: ['Import existing tasks', 'Set up recurring items', 'Map team members'],
    },
    {
      title: 'Run day-to-day workflow',
      items: ['Assign tasks', 'Track progress', 'Complete deliverables'],
    },
  ],
};

export default ConfigurationPreview;
