import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TrendingUp, TrendingDown, DollarSign, Receipt, CreditCard, FileText, Check, X } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/locale';

// ============ INVOICE DASHBOARD ============

const getInvoiceData = (locale: Locale) => [
  { id: 'INV-1041', client: 'Acme Corp', amount: '$12,400', status: 'paid' as const, due: locale === 'ar' ? '15 يناير' : 'Jan 15' },
  { id: 'INV-1042', client: 'TechStart Ltd', amount: '$8,750', status: 'pending' as const, due: locale === 'ar' ? '01 فبراير' : 'Feb 01' },
  { id: 'INV-1043', client: 'GlobalFin Inc', amount: '$24,000', status: 'overdue' as const, due: locale === 'ar' ? '28 يناير' : 'Jan 28' },
  { id: 'INV-1044', client: 'RetailMax', amount: '$6,200', status: 'paid' as const, due: locale === 'ar' ? '20 يناير' : 'Jan 20' },
  { id: 'INV-1045', client: 'DataFlow Systems', amount: '$15,800', status: 'draft' as const, due: locale === 'ar' ? '10 فبراير' : 'Feb 10' },
  { id: 'INV-1046', client: 'Bright Solutions', amount: '$3,900', status: 'pending' as const, due: locale === 'ar' ? '05 فبراير' : 'Feb 05' },
];

const getInvoiceStatusStyles = (locale: Locale) => ({
  paid: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: locale === 'ar' ? 'مدفوعة' : 'Paid' },
  pending: { bg: 'bg-amber-100', text: 'text-amber-700', label: locale === 'ar' ? 'معلقة' : 'Pending' },
  overdue: { bg: 'bg-red-100', text: 'text-red-700', label: locale === 'ar' ? 'متأخرة' : 'Overdue' },
  draft: { bg: 'bg-gray-100', text: 'text-gray-600', label: locale === 'ar' ? 'مسودة' : 'Draft' },
});

export const InvoiceDashboardRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { locale, isRTL } = useLocale();
  const invoiceData = getInvoiceData(locale);
  const invoiceStatusStyles = getInvoiceStatusStyles(locale);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    let index = 0;
    const interval = setInterval(() => {
      setSelectedRow(invoiceData[index].id);
      index = (index + 1) % invoiceData.length;
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  const outstanding = '$30,450';
  const overdueCount = 1;

  return (
    <div
      className={cn('h-full flex flex-col p-3', isRTL && 'text-right', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Table header */}
      <div className="grid grid-cols-[1fr_1.2fr_0.8fr_0.7fr_0.7fr] gap-2 px-2 pb-2 border-b border-gray-200">
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{locale === 'ar' ? 'الفاتورة' : 'Invoice'}</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{locale === 'ar' ? 'العميل' : 'Client'}</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{locale === 'ar' ? 'المبلغ' : 'Amount'}</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{locale === 'ar' ? 'الحالة' : 'Status'}</span>
        <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">{locale === 'ar' ? 'الاستحقاق' : 'Due'}</span>
      </div>

      {/* Rows */}
      <div className="flex-1 overflow-y-auto space-y-0.5 mt-1">
        {invoiceData.map((inv) => {
          const st = invoiceStatusStyles[inv.status];
          return (
            <div
              key={inv.id}
              onClick={() => setSelectedRow(inv.id)}
              className={cn(
                'grid grid-cols-[1fr_1.2fr_0.8fr_0.7fr_0.7fr] gap-2 px-2 py-2 rounded-md cursor-pointer',
                'transition-all duration-200 hover:bg-gray-50',
                selectedRow === inv.id ? 'bg-gray-50 border border-gray-200' : 'border border-transparent'
              )}
            >
              <span className="text-[11px] font-medium text-gray-900">{inv.id}</span>
              <span className="text-[11px] text-gray-700">{inv.client}</span>
              <span className="text-[11px] font-semibold text-gray-900">{inv.amount}</span>
              <span className={cn('inline-flex items-center px-2 py-0.5 text-[9px] font-medium rounded-full w-fit', st.bg, st.text)}>
                {st.label}
              </span>
              <span className="text-[10px] text-gray-500">{inv.due}</span>
            </div>
          );
        })}
      </div>

      {/* Summary bar */}
      <div className={cn('flex items-center justify-between pt-2 mt-1 border-t border-gray-200', isRTL && 'flex-row-reverse')}>
        <span className="text-[10px] text-gray-500">
          {locale === 'ar' ? 'المعلّق:' : 'Outstanding:'} <span className="font-semibold text-gray-900">{outstanding}</span>
        </span>
        <span className="text-[10px] text-red-600 font-medium">
          {locale === 'ar' ? `${overdueCount} متأخرة` : `${overdueCount} overdue`}
        </span>
      </div>
    </div>
  );
};

// ============ EXPENSE TRACKER ============

const getExpenseData = (locale: Locale) => [
  { id: 'e1', desc: locale === 'ar' ? 'رحلة إلى ميونخ' : 'Flight to Munich', date: locale === 'ar' ? '22 يناير' : 'Jan 22', amount: '$840', category: 'Travel', status: 'approved' as const },
  { id: 'e2', desc: locale === 'ar' ? 'رخصة Figma السنوية' : 'Figma annual license', date: locale === 'ar' ? '18 يناير' : 'Jan 18', amount: '$180', category: 'Software', status: 'approved' as const },
  { id: 'e3', desc: locale === 'ar' ? 'غداء الفريق - مراجعة الربع الرابع' : 'Team lunch — Q4 review', date: locale === 'ar' ? '25 يناير' : 'Jan 25', amount: '$320', category: 'Office', status: 'pending' as const },
  { id: 'e4', desc: locale === 'ar' ? 'استشارة قانونية' : 'Legal consultation', date: locale === 'ar' ? '28 يناير' : 'Jan 28', amount: '$1,200', category: 'Services', status: 'pending' as const },
  { id: 'e5', desc: locale === 'ar' ? 'شاشات مكتب (3x)' : 'Desk monitors (x3)', date: locale === 'ar' ? '30 يناير' : 'Jan 30', amount: '$2,100', category: 'Office', status: 'pending' as const },
];

const categoryStyles: Record<string, string> = {
  Travel: 'bg-blue-100 text-blue-700',
  Software: 'bg-purple-100 text-purple-700',
  Office: 'bg-gray-100 text-gray-600',
  Services: 'bg-amber-100 text-amber-700',
};

export const ExpenseTrackerRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [highlightedRow, setHighlightedRow] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');
  const [isHovered, setIsHovered] = useState(false);
  const { locale, isRTL } = useLocale();
  const expenseData = getExpenseData(locale);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    let index = 0;
    const interval = setInterval(() => {
      setHighlightedRow(expenseData[index].id);
      index = (index + 1) % expenseData.length;
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  const filtered = filter === 'all' ? expenseData : expenseData.filter(e => e.status === filter);

  return (
    <div
      className={cn('h-full flex flex-col p-3', isRTL && 'text-right', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Filter toggle */}
      <div className={cn('flex items-center gap-1 mb-3', isRTL && 'flex-row-reverse')}>
        {(['all', 'pending', 'approved'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-3 py-1.5 text-[11px] font-medium rounded-md transition-colors capitalize',
              filter === f ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            )}
          >
            {locale === 'ar'
              ? f === 'all'
                ? 'الكل'
                : f === 'pending'
                  ? 'معلقة'
                  : 'معتمدة'
              : f}
          </button>
        ))}
      </div>

      {/* Rows */}
      <div className="flex-1 space-y-1.5 overflow-y-auto">
        {filtered.map((exp) => (
          <div
            key={exp.id}
            onClick={() => setHighlightedRow(exp.id)}
            className={cn(
              'flex items-center gap-3 p-2.5 bg-white rounded-lg border',
              isRTL && 'flex-row-reverse',
              'transition-all duration-200 hover:border-gray-300 cursor-pointer',
              highlightedRow === exp.id ? 'border-gray-300 bg-gray-50' : 'border-gray-200'
            )}
          >
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-gray-900">{exp.desc}</div>
              <div className="text-[9px] text-gray-400 mt-0.5">{exp.date}</div>
            </div>
            <span className={cn('px-2 py-0.5 text-[9px] font-medium rounded-full', categoryStyles[exp.category])}>
              {locale === 'ar'
                ? exp.category === 'Travel'
                  ? 'سفر'
                  : exp.category === 'Software'
                    ? 'برمجيات'
                    : exp.category === 'Office'
                      ? 'مكتب'
                      : 'خدمات'
                : exp.category}
            </span>
            <span className={cn('text-[11px] font-semibold text-gray-900 w-16', isRTL ? 'text-left' : 'text-right')}>{exp.amount}</span>
            <span className={cn(
              'px-2 py-0.5 text-[9px] font-medium rounded-full',
              exp.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            )}>
              {exp.status === 'approved'
                ? locale === 'ar'
                  ? 'معتمدة'
                  : 'Approved'
                : locale === 'ar'
                  ? 'معلقة'
                  : 'Pending'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ APPROVALS QUEUE ============

const getApprovalItems = (locale: Locale) => [
  { id: 'a1', type: 'expense', desc: locale === 'ar' ? 'غداء الفريق - مراجعة الربع الرابع' : 'Team lunch — Q4 review', requester: 'SK', amount: '$320', submitted: locale === 'ar' ? 'منذ ساعتين' : '2h ago', status: 'pending' as const },
  { id: 'a2', type: 'invoice', desc: locale === 'ar' ? 'دفعة مورد - DesignCo' : 'Vendor payment — DesignCo', requester: 'JD', amount: '$4,500', submitted: locale === 'ar' ? 'منذ 5 ساعات' : '5h ago', status: 'pending' as const },
  { id: 'a3', type: 'expense', desc: locale === 'ar' ? 'شاشات مكتب (3x)' : 'Desk monitors (x3)', requester: 'MR', amount: '$2,100', submitted: locale === 'ar' ? 'منذ يوم' : '1d ago', status: 'pending' as const },
  { id: 'a4', type: 'expense', desc: locale === 'ar' ? 'عشاء عميل' : 'Client dinner', requester: 'JD', amount: '$185', submitted: locale === 'ar' ? 'منذ يومين' : '2d ago', status: 'approved' as const },
];

export const ApprovalsQueueRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const { locale, isRTL } = useLocale();
  const approvalItems = getApprovalItems(locale);
  const [items, setItems] = useState(approvalItems);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setItems(approvalItems);
  }, [approvalItems]);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const pendingIds = approvalItems.filter(i => i.status === 'pending').map(i => i.id);
    let index = 0;
    const interval = setInterval(() => {
      if (index < pendingIds.length) {
        setItems(prev => prev.map(i =>
          i.id === pendingIds[index] ? { ...i, status: 'approved' as const } : i
        ));
        index++;
      } else {
        setItems(approvalItems);
        index = 0;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  const handleApprove = (id: string) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, status: 'approved' as const } : i));
  };

  return (
    <div
      className={cn('h-full flex flex-col p-3', isRTL && 'text-right', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-xs font-medium text-gray-700 mb-3">{locale === 'ar' ? 'اعتمادات معلقة' : 'Pending Approvals'}</div>
      <div className="flex-1 space-y-1.5 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              'flex items-center gap-3 p-2.5 bg-white rounded-lg border border-gray-200',
              isRTL && 'flex-row-reverse',
              'transition-all duration-300',
              item.status === 'approved' && 'opacity-60'
            )}
          >
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              {item.type === 'expense' ? (
                <Receipt className="w-3.5 h-3.5 text-gray-500" />
              ) : (
                <FileText className="w-3.5 h-3.5 text-gray-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-medium text-gray-900">{item.desc}</div>
              <div className={cn('flex items-center gap-2 mt-0.5', isRTL && 'flex-row-reverse')}>
                <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[8px] font-medium text-gray-500">
                  {item.requester}
                </div>
                <span className="text-[9px] text-gray-400">{item.submitted}</span>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-gray-900">{item.amount}</span>
            {item.status === 'pending' ? (
              <div className={cn('flex items-center gap-1', isRTL && 'flex-row-reverse')}>
                <button
                  onClick={() => handleApprove(item.id)}
                  className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center hover:bg-emerald-200 transition-colors"
                >
                  <Check className="w-3 h-3 text-emerald-700" />
                </button>
                <button className="w-6 h-6 rounded-md bg-red-100 flex items-center justify-center hover:bg-red-200 transition-colors">
                  <X className="w-3 h-3 text-red-700" />
                </button>
              </div>
            ) : (
              <span className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-emerald-100 text-emerald-700">
                {locale === 'ar' ? 'معتمدة' : 'Approved'}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ FINANCE DASHBOARD ============

const getFinanceKPIs = (locale: Locale) => [
  { label: locale === 'ar' ? 'الإيرادات' : 'Revenue', value: '$84.2k', trend: 'up' as const, change: '+8%', icon: DollarSign },
  { label: locale === 'ar' ? 'المصروفات' : 'Expenses', value: '$52.1k', trend: 'up' as const, change: '+3%', icon: CreditCard },
  { label: locale === 'ar' ? 'صافي الدخل' : 'Net Income', value: '$32.1k', trend: 'up' as const, change: '+15%', icon: TrendingUp },
  { label: locale === 'ar' ? 'المعلّق' : 'Outstanding', value: '$30.5k', trend: 'down' as const, change: '-12%', icon: Receipt },
];

const baseChartData = [42, 55, 38, 62, 48, 72, 58, 80, 65, 75, 70, 85];

export const FinanceDashboardRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [barHeights, setBarHeights] = useState<number[]>(reducedMotion ? baseChartData : baseChartData.map(() => 0));
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { locale, isRTL } = useLocale();
  const financeKPIs = getFinanceKPIs(locale);

  useEffect(() => {
    if (reducedMotion) { setBarHeights(baseChartData); return; }
    const timer = setTimeout(() => { setBarHeights(baseChartData); setMounted(true); }, 300);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !mounted || isHovered) return;
    const interval = setInterval(() => {
      setBarHeights(prev => prev.map(v => {
        const delta = Math.floor(Math.random() * 16) - 8;
        return Math.max(15, Math.min(95, v + delta));
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion, mounted, isHovered]);

  return (
    <div
      className={cn('h-full flex flex-col p-3', isRTL && 'text-right', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Time range toggle */}
      <div className={cn('flex items-center justify-between mb-3', isRTL && 'flex-row-reverse')}>
        <span className="text-xs font-medium text-gray-700">{locale === 'ar' ? 'نظرة عامة' : 'Overview'}</span>
        <div className={cn('flex items-center gap-0.5 bg-gray-100 rounded-md p-0.5', isRTL && 'flex-row-reverse')}>
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={cn(
                'px-2 py-1 text-[10px] font-medium rounded transition-colors',
                timeRange === range ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {financeKPIs.map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-lg border border-gray-200 p-2">
            <div className="flex items-center justify-between mb-1">
              <kpi.icon className="w-3.5 h-3.5 text-gray-400" />
              {kpi.trend === 'up' ? (
                <TrendingUp className="w-3 h-3 text-emerald-500" />
              ) : (
                <TrendingDown className="w-3 h-3 text-emerald-500" />
              )}
            </div>
            <div className="text-lg font-bold text-gray-900">{kpi.value}</div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-gray-500">{kpi.label}</span>
              <span className="text-[9px] font-medium text-emerald-600">{kpi.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-3">
        <div className="text-[10px] font-medium text-gray-500 mb-2">
          {locale === 'ar' ? 'الإيرادات مقابل المصروفات' : 'Revenue vs Expenses'}
        </div>
        <div className="h-full flex items-end gap-1">
          {barHeights.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-gray-200 rounded-t transition-all duration-700 ease-out hover:bg-gray-900"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
