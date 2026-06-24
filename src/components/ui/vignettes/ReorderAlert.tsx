import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AlertTriangle, Package, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { useLocale } from '@/lib/locale';

interface Alert {
  id: string;
  item: string;
  stock: number;
  threshold: number;
  status: 'new' | 'acknowledged' | 'ordered';
}

const alertsByLocale = {
  en: [
    { id: '1', item: 'Wireless Mouse', stock: 3, threshold: 10, status: 'new' as const },
    { id: '2', item: 'USB-C Cables', stock: 5, threshold: 15, status: 'new' as const },
    { id: '3', item: 'Webcam HD', stock: 2, threshold: 8, status: 'acknowledged' as const },
  ],
  ar: [
    { id: '1', item: 'فأرة لاسلكية', stock: 3, threshold: 10, status: 'new' as const },
    { id: '2', item: 'كوابل USB-C', stock: 5, threshold: 15, status: 'new' as const },
    { id: '3', item: 'كاميرا ويب HD', stock: 2, threshold: 8, status: 'acknowledged' as const },
  ],
} as const;

export const ReorderAlert: React.FC = () => {
  const { locale, isRTL } = useLocale();
  const reducedMotion = useReducedMotion();
  const [alerts, setAlerts] = useState(alertsByLocale[locale]);
  const [newAlertVisible, setNewAlertVisible] = useState(false);

  useEffect(() => {
    setAlerts(alertsByLocale[locale]);
  }, [locale]);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setAlerts((prev) => {
        return prev.map((alert, index) => {
          if (index === 0) {
            const nextStatus = alert.status === 'new' ? 'acknowledged' : 
                               alert.status === 'acknowledged' ? 'ordered' : 'new';
            return { ...alert, status: nextStatus };
          }
          return alert;
        });
      });

      setNewAlertVisible(true);
      setTimeout(() => setNewAlertVisible(false), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ordered':
        return <Check size={10} className="text-emerald-600" />;
      case 'acknowledged':
        return isRTL
          ? <ArrowLeft size={10} className="text-amber-600" />
          : <ArrowRight size={10} className="text-amber-600" />;
      default:
        return <AlertTriangle size={10} className="text-red-600" />;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'ordered':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'acknowledged':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-red-50 text-red-800 border-red-200';
    }
  };

  const getStatusLabel = (status: Alert['status']) =>
    locale === 'ar'
      ? status === 'ordered'
        ? 'تم الطلب'
        : status === 'acknowledged'
          ? 'تمت المراجعة'
          : 'جديد'
      : status;

  return (
    <div className={cn('w-full h-full flex flex-col p-3 gap-3', isRTL && 'text-right')}>
      {/* Header */}
      <div className={cn('flex items-center justify-between', isRTL && 'flex-row-reverse')}>
        <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse')}>
          <Package size={14} className="text-gray-700" />
          <span className="text-xs font-semibold text-gray-900">{locale === 'ar' ? 'تنبيهات إعادة الطلب' : 'Reorder Alerts'}</span>
        </div>
        <div className={cn(
          'flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-medium',
          'transition-all duration-300',
          newAlertVisible 
            ? 'bg-red-100 text-red-700 animate-pulse' 
            : 'bg-gray-100 text-gray-500'
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {alerts.filter(a => a.status === 'new').length} {locale === 'ar' ? 'جديد' : 'new'}
        </div>
      </div>

      {/* Alert Cards */}
      <div className="flex-1 space-y-2 overflow-hidden">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            className={cn(
              'p-2.5 rounded-lg border transition-all duration-500 shadow-sm',
              getStatusStyle(alert.status),
              index === 0 && 'ring-1 ring-offset-1 ring-offset-white ring-current'
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="text-[11px] font-medium">{alert.item}</div>
                <div className="text-[9px] opacity-70">
                  {locale === 'ar' ? `المخزون: ${alert.stock} / الحد الأدنى: ${alert.threshold}` : `Stock: ${alert.stock} / Min: ${alert.threshold}`}
                </div>
              </div>
              <div className={cn('flex items-center gap-1.5', isRTL && 'flex-row-reverse')}>
                {getStatusIcon(alert.status)}
                <span className="text-[8px] uppercase font-semibold">
                  {getStatusLabel(alert.status)}
                </span>
              </div>
            </div>
            {/* Progress bar showing stock level */}
            <div className="mt-2 h-1 bg-black/10 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{ 
                  width: `${(alert.stock / alert.threshold) * 100}%`,
                  backgroundColor: 'currentColor',
                  opacity: 0.4
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReorderAlert;
