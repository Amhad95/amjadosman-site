import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Check } from 'lucide-react';

interface SettingItem {
  label: string;
  value?: string;
  type: 'toggle' | 'select' | 'text' | 'list';
  enabled?: boolean;
  items?: string[];
}

interface SettingSection {
  title: string;
  items: SettingItem[];
}

interface SettingsPanelProps {
  sections: SettingSection[];
  activeSection?: number;
  className?: string;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  sections,
  activeSection = 0,
  className,
}) => {
  return (
    <div className={cn('flex h-full bg-white', className)}>
      {/* Sidebar */}
      <div className="w-36 border-r border-gray-200 bg-gray-50 p-2">
        <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wide px-2 mb-2">
          Settings
        </div>
        {sections.map((section, i) => (
          <button
            key={section.title}
            className={cn(
              'w-full flex items-center justify-between px-2 py-1.5 text-[11px] rounded-md transition-colors',
              i === activeSection
                ? 'bg-white text-gray-900 shadow-sm font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            )}
          >
            {section.title}
            <ChevronRight className="w-3 h-3 text-gray-400" />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="text-sm font-medium text-gray-900 mb-4">
          {sections[activeSection]?.title}
        </div>
        <div className="space-y-3">
          {sections[activeSection]?.items.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <span className="text-[11px] text-gray-700">{item.label}</span>
              
              {item.type === 'toggle' && (
                <div className={cn(
                  'w-8 h-4 rounded-full relative transition-colors',
                  item.enabled ? 'bg-emerald-500' : 'bg-gray-200'
                )}>
                  <div className={cn(
                    'absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform',
                    item.enabled ? 'translate-x-4' : 'translate-x-0.5'
                  )} />
                </div>
              )}
              
              {item.type === 'select' && (
                <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded text-[10px] text-gray-600">
                  {item.value}
                  <ChevronRight className="w-3 h-3 rotate-90" />
                </div>
              )}
              
              {item.type === 'text' && (
                <span className="text-[10px] text-gray-500">{item.value}</span>
              )}
              
              {item.type === 'list' && item.items && (
                <div className="flex gap-1">
                  {item.items.slice(0, 3).map((listItem, j) => (
                    <span key={j} className="px-1.5 py-0.5 bg-gray-100 text-[9px] text-gray-600 rounded">
                      {listItem}
                    </span>
                  ))}
                  {item.items.length > 3 && (
                    <span className="px-1.5 py-0.5 bg-gray-100 text-[9px] text-gray-500 rounded">
                      +{item.items.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Default CRM settings for workflow preview
export const crmSettingsConfig: SettingSection[] = [
  {
    title: 'Pipeline',
    items: [
      { label: 'Pipeline Stages', type: 'list', items: ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Won'] },
      { label: 'Default Currency', type: 'select', value: 'EUR €' },
      { label: 'Show Deal Values', type: 'toggle', enabled: true },
      { label: 'Require Close Date', type: 'toggle', enabled: false },
    ],
  },
  {
    title: 'Custom Fields',
    items: [
      { label: 'Industry', type: 'text', value: 'Dropdown field' },
      { label: 'Company Size', type: 'text', value: 'Number field' },
      { label: 'Lead Source', type: 'text', value: 'Dropdown field' },
    ],
  },
  {
    title: 'Automations',
    items: [
      { label: 'Auto-assign leads', type: 'toggle', enabled: true },
      { label: 'Follow-up reminders', type: 'toggle', enabled: true },
      { label: 'Activity logging', type: 'toggle', enabled: true },
    ],
  },
];

export default SettingsPanel;
