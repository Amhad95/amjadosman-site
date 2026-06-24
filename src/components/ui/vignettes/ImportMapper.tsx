import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Check, ArrowLeft, ArrowRight, FileSpreadsheet, AlertCircle } from 'lucide-react';
import { useLocale } from '@/lib/locale';

interface Mapping {
  source: string;
  target: string;
  target_ar?: string;
  matched?: boolean;
}

interface ImportMapperProps {
  sourceFile?: string;
  mappings: Mapping[];
  className?: string;
}

export const ImportMapper: React.FC<ImportMapperProps> = ({
  sourceFile = 'contacts_export.csv',
  mappings: initialMappings,
  className,
}) => {
  const { locale, isRTL } = useLocale();
  const reducedMotion = useReducedMotion();
  const [mappings, setMappings] = useState(initialMappings);
  const [isHovered, setIsHovered] = useState(false);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Auto-match unmatched fields, then reset
  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const unmatchedIndices = initialMappings
      .map((m, i) => (!m.matched ? i : -1))
      .filter(i => i !== -1);
    if (unmatchedIndices.length === 0) return;

    let phase: 'waiting' | 'matched' = 'waiting';
    const interval = setInterval(() => {
      if (phase === 'waiting') {
        setMappings(prev =>
          prev.map((m, i) =>
            unmatchedIndices.includes(i)
              ? { ...m, matched: true, target: m.target || 'Notes', target_ar: m.target_ar || 'ملاحظات' }
              : m
          )
        );
        phase = 'matched';
      } else {
        setMappings(initialMappings);
        phase = 'waiting';
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [reducedMotion, isHovered, initialMappings]);

  const matchedCount = mappings.filter(m => m.matched).length;
  const totalCount = mappings.length;

  return (
    <div
      className={cn('h-full flex flex-col bg-white', isRTL && 'text-right', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className={cn('flex items-center justify-between p-3 border-b border-gray-200 bg-gray-50', isRTL && 'flex-row-reverse')}>
        <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
          <FileSpreadsheet className="w-4 h-4 text-gray-500" />
          <span className="text-xs font-medium text-gray-700">{sourceFile}</span>
        </div>
        <div className={cn('flex items-center gap-1.5', isRTL && 'flex-row-reverse')}>
          <div className={cn(
            'w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-300',
            matchedCount === totalCount ? 'bg-emerald-100' : 'bg-amber-100'
          )}>
            {matchedCount === totalCount ? (
              <Check className="w-2.5 h-2.5 text-emerald-600" />
            ) : (
              <AlertCircle className="w-2.5 h-2.5 text-amber-600" />
            )}
          </div>
          <span className="text-[10px] text-gray-500">
            {locale === 'ar'
              ? `${matchedCount}/${totalCount} حقول تمت مطابقتها`
              : `${matchedCount}/${totalCount} fields mapped`}
          </span>
        </div>
      </div>

      {/* Mapping table */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-[1fr,auto,1fr] gap-2 text-[10px]">
          {/* Header row */}
          <div className="font-semibold text-gray-500 uppercase tracking-wide pb-2">
            {locale === 'ar' ? 'العمود المصدر' : 'Source Column'}
          </div>
          <div />
          <div className="font-semibold text-gray-500 uppercase tracking-wide pb-2">
            {locale === 'ar' ? 'الحقل الهدف' : 'Target Field'}
          </div>

          {/* Mappings */}
          {mappings.map((mapping, i) => (
            <React.Fragment key={i}>
              <div className={cn(
                'px-2 py-1.5 rounded border transition-all duration-300',
                mapping.matched
                  ? 'bg-gray-50 border-gray-200 text-gray-700'
                  : 'bg-amber-50 border-amber-200 text-amber-700'
              )}>
                {mapping.source}
              </div>
              <div className="flex items-center justify-center">
                <ArrowIcon
                  className={cn(
                  'w-3 h-3 transition-colors duration-300',
                  mapping.matched ? 'text-emerald-500' : 'text-gray-300'
                  )}
                />
              </div>
              <div className={cn(
                'px-2 py-1.5 rounded border transition-all duration-300',
                mapping.matched
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-gray-50 border-gray-200 text-gray-400'
              )}>
                {locale === 'ar'
                  ? (mapping.target_ar ?? mapping.target ?? '— اختر حقلاً —')
                  : mapping.target || '— Select field —'}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={cn('p-3 border-t border-gray-200 bg-gray-50 flex justify-between items-center', isRTL && 'flex-row-reverse')}>
        <span className="text-[10px] text-gray-500">
          {locale === 'ar' ? '234 سجلاً جاهزاً للاستيراد' : '234 records ready to import'}
        </span>
        <button className="px-3 py-1.5 bg-gray-900 text-white text-[10px] font-medium rounded-md hover:bg-gray-800 transition-colors">
          {locale === 'ar' ? 'بدء الاستيراد' : 'Start Import'}
        </button>
      </div>
    </div>
  );
};

// Default CRM import mappings
export const crmImportMappings: Mapping[] = [
  { source: 'full_name', target: 'Contact Name', target_ar: 'اسم جهة الاتصال', matched: true },
  { source: 'company', target: 'Company', target_ar: 'الشركة', matched: true },
  { source: 'email_address', target: 'Email', target_ar: 'البريد الإلكتروني', matched: true },
  { source: 'phone', target: 'Phone', target_ar: 'الهاتف', matched: true },
  { source: 'deal_stage', target: 'Pipeline Stage', target_ar: 'مرحلة المسار', matched: true },
  { source: 'deal_value', target: 'Deal Value', target_ar: 'قيمة الصفقة', matched: true },
  { source: 'notes', target: 'Notes', target_ar: 'ملاحظات', matched: false },
];

// Accounting import mappings
export const accountingImportMappings: Mapping[] = [
  { source: 'vendor_name', target: 'Vendor', target_ar: 'المورّد', matched: true },
  { source: 'invoice_number', target: 'Invoice #', target_ar: 'رقم الفاتورة', matched: true },
  { source: 'amount', target: 'Amount', target_ar: 'المبلغ', matched: true },
  { source: 'category', target: 'Category', target_ar: 'الفئة', matched: true },
  { source: 'due_date', target: 'Due Date', target_ar: 'تاريخ الاستحقاق', matched: true },
  { source: 'payment_status', target: 'Status', target_ar: 'الحالة', matched: true },
  { source: 'ref_code', target: '', matched: false },
];

// Inventory import mappings
export const inventoryImportMappings: Mapping[] = [
  { source: 'sku', target: 'SKU', matched: true },
  { source: 'item_name', target: 'Item Name', target_ar: 'اسم العنصر', matched: true },
  { source: 'quantity', target: 'Quantity', target_ar: 'الكمية', matched: true },
  { source: 'location', target: 'Location', target_ar: 'الموقع', matched: true },
  { source: 'reorder_point', target: 'Reorder Point', target_ar: 'نقطة إعادة الطلب', matched: true },
  { source: 'unit_cost', target: 'Unit Cost', target_ar: 'تكلفة الوحدة', matched: true },
  { source: 'supplier_ref', target: '', matched: false },
];

// Tasks import mappings
export const tasksImportMappings: Mapping[] = [
  { source: 'task_title', target: 'Task Name', target_ar: 'اسم المهمة', matched: true },
  { source: 'assignee', target: 'Assignee', target_ar: 'المسؤول', matched: true },
  { source: 'due_date', target: 'Due Date', target_ar: 'تاريخ الاستحقاق', matched: true },
  { source: 'project', target: 'Project', target_ar: 'المشروع', matched: true },
  { source: 'priority', target: 'Priority', target_ar: 'الأولوية', matched: true },
  { source: 'status', target: 'Status', target_ar: 'الحالة', matched: true },
  { source: 'tags', target: '', matched: false },
];

export default ImportMapper;
