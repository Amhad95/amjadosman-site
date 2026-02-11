import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
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
  const reducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>(() => {
    const states: Record<string, boolean> = {};
    sections[activeSection]?.items.forEach((item, i) => {
      if (item.type === 'toggle') {
        states[`${activeSection}-${i}`] = item.enabled ?? false;
      }
    });
    return states;
  });

  // Auto-toggle switches one by one
  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const toggleIndices = sections[activeSection]?.items
      .map((item, i) => (item.type === 'toggle' ? i : -1))
      .filter(i => i !== -1) ?? [];
    if (toggleIndices.length === 0) return;

    let cycleIndex = 0;
    const interval = setInterval(() => {
      const itemIndex = toggleIndices[cycleIndex];
      const key = `${activeSection}-${itemIndex}`;
      setToggleStates(prev => ({ ...prev, [key]: !prev[key] }));
      cycleIndex = (cycleIndex + 1) % toggleIndices.length;
    }, 2500);

    return () => clearInterval(interval);
  }, [reducedMotion, isHovered, activeSection, sections]);

  return (
    <div
      className={cn('flex h-full bg-white', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
          {sections[activeSection]?.items.map((item, i) => {
            const toggleKey = `${activeSection}-${i}`;
            const isEnabled = item.type === 'toggle'
              ? (toggleStates[toggleKey] ?? item.enabled ?? false)
              : item.enabled;

            return (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-[11px] text-gray-700">{item.label}</span>
                
                {item.type === 'toggle' && (
                  <div
                    onClick={() => {
                      const key = `${activeSection}-${i}`;
                      setToggleStates(prev => ({ ...prev, [key]: !prev[key] }));
                    }}
                    className={cn(
                      'w-8 h-4 rounded-full relative transition-colors duration-300 cursor-pointer',
                      isEnabled ? 'bg-emerald-500' : 'bg-gray-200'
                    )}
                  >
                    <div className={cn(
                      'absolute top-0.5 w-3 h-3 rounded-full bg-white shadow transition-transform duration-300',
                      isEnabled ? 'translate-x-4' : 'translate-x-0.5'
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
            );
          })}
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

// Accounting settings config
export const accountingSettingsConfig: SettingSection[] = [
  {
    title: 'Categories',
    items: [
      { label: 'Expense Categories', type: 'list', items: ['Travel', 'Office', 'Software', 'Marketing', 'Utilities'] },
      { label: 'Default Currency', type: 'select', value: 'EUR €' },
      { label: 'Auto-categorize', type: 'toggle', enabled: true },
      { label: 'Require receipts', type: 'toggle', enabled: false },
    ],
  },
  {
    title: 'Invoicing',
    items: [
      { label: 'Invoice Prefix', type: 'text', value: 'INV-' },
      { label: 'Payment Terms', type: 'select', value: 'Net 30' },
      { label: 'Auto-numbering', type: 'toggle', enabled: true },
    ],
  },
  {
    title: 'Approvals',
    items: [
      { label: 'Require approval over €500', type: 'toggle', enabled: true },
      { label: 'Manager sign-off', type: 'toggle', enabled: true },
      { label: 'Auto-approve recurring', type: 'toggle', enabled: false },
    ],
  },
];

// Inventory settings config
export const inventorySettingsConfig: SettingSection[] = [
  {
    title: 'Locations',
    items: [
      { label: 'Warehouses', type: 'list', items: ['Main', 'Overflow', 'Returns', 'Staging'] },
      { label: 'Default Location', type: 'select', value: 'Main' },
      { label: 'Track sub-locations', type: 'toggle', enabled: true },
      { label: 'Location transfers', type: 'toggle', enabled: true },
    ],
  },
  {
    title: 'Thresholds',
    items: [
      { label: 'Reorder Point', type: 'text', value: '10 units' },
      { label: 'Low Stock Alert', type: 'toggle', enabled: true },
      { label: 'Auto-reorder', type: 'toggle', enabled: false },
    ],
  },
  {
    title: 'Checkout',
    items: [
      { label: 'Require checkout approval', type: 'toggle', enabled: true },
      { label: 'Return reminders', type: 'toggle', enabled: true },
      { label: 'Asset depreciation', type: 'toggle', enabled: false },
    ],
  },
];

// Tasks settings config
export const tasksSettingsConfig: SettingSection[] = [
  {
    title: 'Projects',
    items: [
      { label: 'Active Projects', type: 'list', items: ['Website', 'Marketing', 'Operations', 'Onboarding'] },
      { label: 'Default View', type: 'select', value: 'Board' },
      { label: 'Show priorities', type: 'toggle', enabled: true },
      { label: 'Require due dates', type: 'toggle', enabled: false },
    ],
  },
  {
    title: 'Workflow',
    items: [
      { label: 'Stages', type: 'list', items: ['To Do', 'In Progress', 'Review', 'Done'] },
      { label: 'Allow subtasks', type: 'toggle', enabled: true },
      { label: 'Task templates', type: 'toggle', enabled: true },
    ],
  },
  {
    title: 'Automation',
    items: [
      { label: 'Auto-assign on create', type: 'toggle', enabled: false },
      { label: 'Due date reminders', type: 'toggle', enabled: true },
      { label: 'Recurring tasks', type: 'toggle', enabled: true },
    ],
  },
];

export default SettingsPanel;
