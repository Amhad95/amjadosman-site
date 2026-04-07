import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { MessageSquare, Check, Clock, Send, ChevronRight } from 'lucide-react';
import { useLocale } from '@/lib/locale';

interface SupportRequest {
  id: string;
  title: string;
  status: 'new' | 'in-review' | 'approved' | 'shipped';
  time: string;
}

export const SupportRequestVignette: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const { locale, isRTL } = useLocale();
  const initialRequests: SupportRequest[] = locale === 'ar'
    ? [
        { id: '1', title: 'إضافة مرحلة جديدة للمسار', status: 'shipped', time: 'منذ يومين' },
        { id: '2', title: 'تحديث مسار الاعتماد', status: 'approved', time: 'منذ يوم' },
        { id: '3', title: 'صلاحيات مستخدم جديد', status: 'in-review', time: 'منذ 4 ساعات' },
        { id: '4', title: 'إضافة حقل مخصص', status: 'new', time: 'الآن' },
      ]
    : [
        { id: '1', title: 'Add new pipeline stage', status: 'shipped', time: '2d ago' },
        { id: '2', title: 'Update approval workflow', status: 'approved', time: '1d ago' },
        { id: '3', title: 'New user permissions', status: 'in-review', time: '4h ago' },
        { id: '4', title: 'Add custom field', status: 'new', time: 'Just now' },
      ];
  const statusConfig = {
    new: {
      label: locale === 'ar' ? 'جديد' : 'New',
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      iconBg: 'bg-blue-100',
      icon: MessageSquare,
    },
    'in-review': {
      label: locale === 'ar' ? 'قيد المراجعة' : 'In Review',
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      iconBg: 'bg-amber-100',
      icon: Clock,
    },
    approved: {
      label: locale === 'ar' ? 'معتمد' : 'Approved',
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      iconBg: 'bg-emerald-100',
      icon: Check,
    },
    shipped: {
      label: locale === 'ar' ? 'تم التنفيذ' : 'Shipped',
      bg: 'bg-gray-900',
      text: 'text-white',
      iconBg: 'bg-gray-900',
      icon: Send,
    },
  };
  const [requests, setRequests] = useState(initialRequests);
  const [animatingId, setAnimatingId] = useState<string | null>(null);

  useEffect(() => {
    setRequests(initialRequests);
  }, [locale]);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setRequests((prev) => {
        const toUpdate = prev.find(r => r.status !== 'shipped');
        if (!toUpdate) {
          // Reset
          return initialRequests;
        }

        setAnimatingId(toUpdate.id);

        setTimeout(() => {
          setRequests((current) =>
            current.map((r) => {
              if (r.id !== toUpdate.id) return r;
              const statusOrder: SupportRequest['status'][] = ['new', 'in-review', 'approved', 'shipped'];
              const currentIndex = statusOrder.indexOf(r.status);
              return {
                ...r,
                status: statusOrder[Math.min(currentIndex + 1, statusOrder.length - 1)],
              };
            })
          );
          setAnimatingId(null);
        }, 400);

        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className={cn('w-full h-full flex flex-col bg-white', isRTL && 'text-right', className)}>
      {/* Header */}
      <div className={cn('flex items-center justify-between px-3 py-2.5 border-b border-gray-200 bg-gray-50', isRTL && 'flex-row-reverse')}>
        <span className="text-xs font-semibold text-gray-700">
          {locale === 'ar' ? 'طلبات الإدارة' : 'Admin Requests'}
        </span>
        <span className="text-[10px] text-gray-500">
          {locale === 'ar' ? '4 إجمالاً' : '4 total'}
        </span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-hidden p-2 space-y-1.5">
        {requests.map((request) => {
          const config = statusConfig[request.status];
          const Icon = config.icon;
          const isAnimating = animatingId === request.id;

          return (
            <div
              key={request.id}
              className={cn(
                'flex items-center gap-3 p-2.5 rounded-lg',
                'bg-white border border-gray-200',
                'transition-all duration-300',
                isRTL && 'flex-row-reverse',
                isAnimating && 'scale-[1.02] shadow-md border-gray-300'
              )}
            >
              <div className={cn(
                'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
                'transition-all duration-300',
                config.iconBg,
                config.text
              )}>
                <Icon size={12} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-gray-800 truncate">
                  {request.title}
                </div>
                <div className="text-[9px] text-gray-500">{request.time}</div>
              </div>
              <span className={cn(
                'px-2 py-0.5 rounded-full text-[9px] font-semibold',
                'transition-all duration-300',
                config.bg,
                config.text
              )}>
                {config.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportRequestVignette;
