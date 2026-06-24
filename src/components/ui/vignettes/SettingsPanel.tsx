import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ChevronRight, Check } from 'lucide-react';
import { useLocale } from '@/lib/locale';

interface SettingItem {
  label: string;
  label_ar?: string;
  value?: string;
  value_ar?: string;
  type: 'toggle' | 'select' | 'text' | 'list';
  enabled?: boolean;
  items?: string[];
  items_ar?: string[];
}

interface SettingSection {
  title: string;
  title_ar?: string;
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
  const { locale, isRTL } = useLocale();
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
      className={cn('flex h-full bg-white', isRTL && 'flex-row-reverse text-right', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sidebar */}
      <div className={cn('w-36 bg-gray-50 p-2', isRTL ? 'border-l border-gray-200' : 'border-r border-gray-200')}>
        <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wide px-2 mb-2">
          {locale === 'ar' ? 'الإعدادات' : 'Settings'}
        </div>
        {sections.map((section, i) => (
          <button
            key={section.title}
            className={cn(
              'w-full flex items-center justify-between px-2 py-1.5 text-[11px] rounded-md transition-colors',
              isRTL && 'flex-row-reverse',
              i === activeSection
                ? 'bg-white text-gray-900 shadow-sm font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            )}
          >
            {locale === 'ar' ? section.title_ar ?? section.title : section.title}
            <ChevronRight className={cn('w-3 h-3 text-gray-400', isRTL && 'rotate-180')} />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="text-sm font-medium text-gray-900 mb-4">
          {locale === 'ar'
            ? sections[activeSection]?.title_ar ?? sections[activeSection]?.title
            : sections[activeSection]?.title}
        </div>
        <div className="space-y-3">
          {sections[activeSection]?.items.map((item, i) => {
            const toggleKey = `${activeSection}-${i}`;
            const isEnabled = item.type === 'toggle'
              ? (toggleStates[toggleKey] ?? item.enabled ?? false)
              : item.enabled;
            const label = locale === 'ar' ? item.label_ar ?? item.label : item.label;
            const value = locale === 'ar' ? item.value_ar ?? item.value : item.value;
            const listItems = locale === 'ar' ? item.items_ar ?? item.items : item.items;

            return (
              <div key={i} className={cn('flex items-center justify-between py-2 border-b border-gray-100 last:border-0', isRTL && 'flex-row-reverse')}>
                <span className="text-[11px] text-gray-700">{label}</span>
                
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
                      isEnabled
                        ? isRTL
                          ? 'translate-x-0.5'
                          : 'translate-x-4'
                        : isRTL
                          ? 'translate-x-4'
                          : 'translate-x-0.5'
                    )} />
                  </div>
                )}
                
                {item.type === 'select' && (
                  <div className={cn('flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded text-[10px] text-gray-600', isRTL && 'flex-row-reverse')}>
                    {value}
                    <ChevronRight className={cn('w-3 h-3 rotate-90', isRTL && 'rotate-[270deg]')} />
                  </div>
                )}
                
                {item.type === 'text' && (
                  <span className="text-[10px] text-gray-500">{value}</span>
                )}
                
                {item.type === 'list' && listItems && (
                  <div className={cn('flex gap-1', isRTL && 'flex-row-reverse')}>
                    {listItems.slice(0, 3).map((listItem, j) => (
                      <span key={j} className="px-1.5 py-0.5 bg-gray-100 text-[9px] text-gray-600 rounded">
                        {listItem}
                      </span>
                    ))}
                    {listItems.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-gray-100 text-[9px] text-gray-500 rounded">
                        +{listItems.length - 3}
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
    title_ar: 'المسار',
    items: [
      { label: 'Pipeline Stages', label_ar: 'مراحل المسار', type: 'list', items: ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Won'], items_ar: ['عميل أولي', 'مؤهل', 'عرض', 'تفاوض', 'مغلق'] },
      { label: 'Default Currency', label_ar: 'العملة الافتراضية', type: 'select', value: 'EUR €', value_ar: 'EUR €' },
      { label: 'Show Deal Values', label_ar: 'إظهار قيم الصفقات', type: 'toggle', enabled: true },
      { label: 'Require Close Date', label_ar: 'إلزام تاريخ الإغلاق', type: 'toggle', enabled: false },
    ],
  },
  {
    title: 'Custom Fields',
    title_ar: 'حقول مخصصة',
    items: [
      { label: 'Industry', label_ar: 'القطاع', type: 'text', value: 'Dropdown field', value_ar: 'حقل قائمة' },
      { label: 'Company Size', label_ar: 'حجم الشركة', type: 'text', value: 'Number field', value_ar: 'حقل رقمي' },
      { label: 'Lead Source', label_ar: 'مصدر العميل', type: 'text', value: 'Dropdown field', value_ar: 'حقل قائمة' },
    ],
  },
  {
    title: 'Automations',
    title_ar: 'الأتمتة',
    items: [
      { label: 'Auto-assign leads', label_ar: 'توزيع العملاء تلقائياً', type: 'toggle', enabled: true },
      { label: 'Follow-up reminders', label_ar: 'تذكيرات المتابعة', type: 'toggle', enabled: true },
      { label: 'Activity logging', label_ar: 'تسجيل النشاطات', type: 'toggle', enabled: true },
    ],
  },
];

// Accounting settings config
export const accountingSettingsConfig: SettingSection[] = [
  {
    title: 'Categories',
    title_ar: 'الفئات',
    items: [
      { label: 'Expense Categories', label_ar: 'فئات المصروفات', type: 'list', items: ['Travel', 'Office', 'Software', 'Marketing', 'Utilities'], items_ar: ['سفر', 'مكتب', 'برمجيات', 'تسويق', 'مرافق'] },
      { label: 'Default Currency', label_ar: 'العملة الافتراضية', type: 'select', value: 'EUR €', value_ar: 'EUR €' },
      { label: 'Auto-categorize', label_ar: 'تصنيف تلقائي', type: 'toggle', enabled: true },
      { label: 'Require receipts', label_ar: 'إلزام الإيصالات', type: 'toggle', enabled: false },
    ],
  },
  {
    title: 'Invoicing',
    title_ar: 'الفوترة',
    items: [
      { label: 'Invoice Prefix', label_ar: 'بادئة الفاتورة', type: 'text', value: 'INV-', value_ar: 'INV-' },
      { label: 'Payment Terms', label_ar: 'شروط السداد', type: 'select', value: 'Net 30', value_ar: 'صافي 30' },
      { label: 'Auto-numbering', label_ar: 'ترقيم تلقائي', type: 'toggle', enabled: true },
    ],
  },
  {
    title: 'Approvals',
    title_ar: 'الاعتمادات',
    items: [
      { label: 'Require approval over €500', label_ar: 'إلزام الاعتماد فوق €500', type: 'toggle', enabled: true },
      { label: 'Manager sign-off', label_ar: 'اعتماد المدير', type: 'toggle', enabled: true },
      { label: 'Auto-approve recurring', label_ar: 'اعتماد المتكرر تلقائياً', type: 'toggle', enabled: false },
    ],
  },
];

// Inventory settings config
export const inventorySettingsConfig: SettingSection[] = [
  {
    title: 'Locations',
    title_ar: 'المواقع',
    items: [
      { label: 'Warehouses', label_ar: 'المستودعات', type: 'list', items: ['Main', 'Overflow', 'Returns', 'Staging'], items_ar: ['رئيسي', 'إضافي', 'مرتجعات', 'تجهيز'] },
      { label: 'Default Location', label_ar: 'الموقع الافتراضي', type: 'select', value: 'Main', value_ar: 'رئيسي' },
      { label: 'Track sub-locations', label_ar: 'تتبع المواقع الفرعية', type: 'toggle', enabled: true },
      { label: 'Location transfers', label_ar: 'نقل بين المواقع', type: 'toggle', enabled: true },
    ],
  },
  {
    title: 'Thresholds',
    title_ar: 'الحدود',
    items: [
      { label: 'Reorder Point', label_ar: 'نقطة إعادة الطلب', type: 'text', value: '10 units', value_ar: '10 وحدات' },
      { label: 'Low Stock Alert', label_ar: 'تنبيه انخفاض المخزون', type: 'toggle', enabled: true },
      { label: 'Auto-reorder', label_ar: 'إعادة طلب تلقائية', type: 'toggle', enabled: false },
    ],
  },
  {
    title: 'Checkout',
    title_ar: 'التسليم',
    items: [
      { label: 'Require checkout approval', label_ar: 'إلزام اعتماد التسليم', type: 'toggle', enabled: true },
      { label: 'Return reminders', label_ar: 'تذكيرات الإرجاع', type: 'toggle', enabled: true },
      { label: 'Asset depreciation', label_ar: 'استهلاك الأصول', type: 'toggle', enabled: false },
    ],
  },
];

// Tasks settings config
export const tasksSettingsConfig: SettingSection[] = [
  {
    title: 'Projects',
    title_ar: 'المشاريع',
    items: [
      { label: 'Active Projects', label_ar: 'المشاريع النشطة', type: 'list', items: ['Website', 'Marketing', 'Operations', 'Onboarding'], items_ar: ['الموقع', 'التسويق', 'العمليات', 'التهيئة'] },
      { label: 'Default View', label_ar: 'العرض الافتراضي', type: 'select', value: 'Board', value_ar: 'لوحة' },
      { label: 'Show priorities', label_ar: 'إظهار الأولويات', type: 'toggle', enabled: true },
      { label: 'Require due dates', label_ar: 'إلزام المواعيد النهائية', type: 'toggle', enabled: false },
    ],
  },
  {
    title: 'Workflow',
    title_ar: 'سير العمل',
    items: [
      { label: 'Stages', label_ar: 'المراحل', type: 'list', items: ['To Do', 'In Progress', 'Review', 'Done'], items_ar: ['للعمل', 'قيد التنفيذ', 'مراجعة', 'مكتمل'] },
      { label: 'Allow subtasks', label_ar: 'السماح بالمهام الفرعية', type: 'toggle', enabled: true },
      { label: 'Task templates', label_ar: 'قوالب المهام', type: 'toggle', enabled: true },
    ],
  },
  {
    title: 'Automation',
    title_ar: 'الأتمتة',
    items: [
      { label: 'Auto-assign on create', label_ar: 'تعيين تلقائي عند الإنشاء', type: 'toggle', enabled: false },
      { label: 'Due date reminders', label_ar: 'تذكيرات المواعيد النهائية', type: 'toggle', enabled: true },
      { label: 'Recurring tasks', label_ar: 'مهام متكررة', type: 'toggle', enabled: true },
    ],
  },
];

export default SettingsPanel;
