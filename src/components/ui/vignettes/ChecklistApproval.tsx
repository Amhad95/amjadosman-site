import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { CheckSquare, Square, Clock, User } from 'lucide-react';
import { useLocale } from '@/lib/locale';

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  assignee: string;
}

const itemsByLocale = {
  en: [
    { id: '1', text: 'Complete requirements document', completed: true, assignee: 'Sarah' },
    { id: '2', text: 'Review with stakeholders', completed: true, assignee: 'Mike' },
    { id: '3', text: 'Update timeline estimates', completed: false, assignee: 'Alex' },
    { id: '4', text: 'Send for final approval', completed: false, assignee: 'Sarah' },
    { id: '5', text: 'Schedule kickoff meeting', completed: false, assignee: 'Team' },
  ],
  ar: [
    { id: '1', text: 'إكمال وثيقة المتطلبات', completed: true, assignee: 'سارة' },
    { id: '2', text: 'المراجعة مع أصحاب المصلحة', completed: true, assignee: 'مايك' },
    { id: '3', text: 'تحديث تقديرات الجدول الزمني', completed: false, assignee: 'أليكس' },
    { id: '4', text: 'الإرسال للاعتماد النهائي', completed: false, assignee: 'سارة' },
    { id: '5', text: 'جدولة اجتماع الإطلاق', completed: false, assignee: 'الفريق' },
  ],
} as const;

export const ChecklistApproval: React.FC = () => {
  const { locale, isRTL } = useLocale();
  const reducedMotion = useReducedMotion();
  const [items, setItems] = useState(
    itemsByLocale[locale as keyof typeof itemsByLocale] || itemsByLocale.en
  );
  const [currentToggle, setCurrentToggle] = useState<string | null>(null);

  useEffect(() => {
    setItems(itemsByLocale[locale as keyof typeof itemsByLocale] || itemsByLocale.en);
  }, [locale]);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setItems((prev) => {
        const uncompleted = prev.filter(i => !i.completed);
        if (uncompleted.length > 0) {
          const toComplete = uncompleted[0];
          setCurrentToggle(toComplete.id);
          
          setTimeout(() => {
            setItems((current) => 
              current.map(item => 
                item.id === toComplete.id 
                  ? { ...item, completed: true }
                  : item
              )
            );
            setCurrentToggle(null);
          }, 500);
        } else {
          setItems(itemsByLocale[locale as keyof typeof itemsByLocale] || itemsByLocale.en);
        }
        return prev;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [locale, reducedMotion]);

  const completedCount = items.filter(i => i.completed).length;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className={cn('w-full h-full flex flex-col p-3 gap-3', isRTL && 'text-right')}>
      {/* Header */}
      <div className={cn('flex items-center justify-between', isRTL && 'flex-row-reverse')}>
        <div>
          <div className="text-xs font-semibold text-gray-900">{locale === 'ar' ? 'قائمة إطلاق المشروع' : 'Project Launch Checklist'}</div>
          <div className={cn('text-[10px] text-gray-500 flex items-center gap-1', isRTL && 'flex-row-reverse justify-end')}>
            <Clock size={10} />
            {locale === 'ar' ? 'الاستحقاق خلال 3 أيام' : 'Due in 3 days'}
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{completedCount}/{items.length}</div>
          <div className="text-[9px] text-gray-500">{locale === 'ar' ? 'مكتمل' : 'completed'}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Checklist Items */}
      <div className="flex-1 space-y-1.5 overflow-hidden">
        {items.map((item) => {
          const isToggling = currentToggle === item.id;
          return (
            <div
              key={item.id}
              className={cn(
                'flex items-center gap-2 p-2 rounded-lg transition-all duration-300',
                isRTL && 'flex-row-reverse text-right',
                'border shadow-sm',
                item.completed 
                  ? 'bg-emerald-50 border-emerald-200' 
                  : 'bg-white border-gray-200',
                isToggling && 'scale-[1.02] ring-2 ring-emerald-300'
              )}
            >
              <div className="transition-transform duration-300">
                {item.completed ? (
                  <CheckSquare size={14} className="text-emerald-600" />
                ) : (
                  <Square size={14} className="text-gray-400" />
                )}
              </div>
              <span className={cn(
                'flex-1 text-[11px] transition-all duration-300',
                item.completed 
                  ? 'text-gray-400 line-through' 
                  : 'text-gray-800'
              )}>
                {item.text}
              </span>
              <div className={cn('flex items-center gap-1 text-[9px] text-gray-400', isRTL && 'flex-row-reverse')}>
                <User size={9} />
                {item.assignee}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChecklistApproval;
