import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { Locale } from '@/lib/locale';
import { useLocale } from '@/lib/locale';

interface Metric {
  label: string;
  value: number;
  suffix?: string;
  trend: 'up' | 'down' | 'neutral';
}

interface MiniDashboardProps {
  metrics: Metric[];
  className?: string;
}

export const MiniDashboard: React.FC<MiniDashboardProps> = ({ metrics, className }) => {
  const reducedMotion = useReducedMotion();
  const { isRTL } = useLocale();
  const [displayedMetrics, setDisplayedMetrics] = useState(metrics);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      const indexToUpdate = Math.floor(Math.random() * metrics.length);
      setAnimatingIndex(indexToUpdate);

      setTimeout(() => {
        setDisplayedMetrics((prev) =>
          prev.map((metric, i) => {
            if (i !== indexToUpdate) return metric;
            const variance = Math.floor(Math.random() * 5) - 2;
            return {
              ...metric,
              value: Math.max(0, metric.value + variance),
              trend: variance > 0 ? 'up' : variance < 0 ? 'down' : 'neutral',
            };
          })
        );
        setAnimatingIndex(null);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [reducedMotion, metrics.length]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={10} className="text-emerald-600" />;
      case 'down':
        return <TrendingDown size={10} className="text-red-500" />;
      default:
        return <Minus size={10} className="text-gray-400" />;
    }
  };

  return (
    <div className={cn('grid grid-cols-2 gap-2', className)}>
      {displayedMetrics.map((metric, index) => (
        <div
          key={metric.label}
          className={cn(
            'bg-white rounded-lg p-3 border border-gray-200 shadow-sm',
            'transition-all duration-300',
            animatingIndex === index && 'scale-105 border-gray-300 shadow-md'
          )}
        >
          <div className={cn('flex items-center justify-between mb-1', isRTL && 'flex-row-reverse')}>
            <span className="text-[9px] uppercase tracking-wide text-gray-500 font-medium">
              {metric.label}
            </span>
            {getTrendIcon(metric.trend)}
          </div>
          <div className={cn('text-lg font-bold text-gray-900', isRTL && 'text-right')}>
            {metric.value}{metric.suffix || ''}
          </div>
        </div>
      ))}
    </div>
  );
};

const defaultMetricsEn = {
  crm: [
    { label: 'Open Deals', value: 24, trend: 'up' as const },
    { label: 'This Month', value: 12, trend: 'up' as const },
    { label: 'Follow-ups', value: 8, trend: 'neutral' as const },
    { label: 'Close Rate', value: 34, suffix: '%', trend: 'up' as const },
  ],
  accounting: [
    { label: 'Pending', value: 7, trend: 'down' as const },
    { label: 'Paid', value: 42, trend: 'up' as const },
    { label: 'Overdue', value: 3, trend: 'down' as const },
    { label: 'This Week', value: 18, trend: 'up' as const },
  ],
  inventory: [
    { label: 'Items', value: 156, trend: 'neutral' as const },
    { label: 'Low Stock', value: 4, trend: 'down' as const },
    { label: 'On Order', value: 12, trend: 'up' as const },
    { label: 'Locations', value: 3, trend: 'neutral' as const },
  ],
  tasks: [
    { label: 'Active', value: 18, trend: 'neutral' as const },
    { label: 'Completed', value: 47, trend: 'up' as const },
    { label: 'Overdue', value: 2, trend: 'down' as const },
    { label: 'This Week', value: 23, trend: 'up' as const },
  ],
};

const defaultMetricsAr: typeof defaultMetricsEn = {
  crm: [
    { label: 'صفقات مفتوحة', value: 24, trend: 'up' as const },
    { label: 'هذا الشهر', value: 12, trend: 'up' as const },
    { label: 'متابعات', value: 8, trend: 'neutral' as const },
    { label: 'نسبة الإغلاق', value: 34, suffix: '%', trend: 'up' as const },
  ],
  accounting: [
    { label: 'معلّق', value: 7, trend: 'down' as const },
    { label: 'مدفوع', value: 42, trend: 'up' as const },
    { label: 'متأخر', value: 3, trend: 'down' as const },
    { label: 'هذا الأسبوع', value: 18, trend: 'up' as const },
  ],
  inventory: [
    { label: 'عناصر', value: 156, trend: 'neutral' as const },
    { label: 'مخزون منخفض', value: 4, trend: 'down' as const },
    { label: 'قيد الطلب', value: 12, trend: 'up' as const },
    { label: 'مواقع', value: 3, trend: 'neutral' as const },
  ],
  tasks: [
    { label: 'نشطة', value: 18, trend: 'neutral' as const },
    { label: 'مكتملة', value: 47, trend: 'up' as const },
    { label: 'متأخرة', value: 2, trend: 'down' as const },
    { label: 'هذا الأسبوع', value: 23, trend: 'up' as const },
  ],
};

export const getDefaultMetrics = (locale: Locale) =>
  locale === 'ar' ? defaultMetricsAr : defaultMetricsEn;

export const defaultMetrics = defaultMetricsEn;

export default MiniDashboard;
