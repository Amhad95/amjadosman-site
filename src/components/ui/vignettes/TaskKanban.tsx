import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Circle, Clock, CheckCircle2 } from 'lucide-react';
import { useLocale } from '@/lib/locale';

interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
}

const tasksByLocale = {
  en: [
    [
      { id: '1', title: 'Update documentation', assignee: 'JD', priority: 'medium' as const },
      { id: '2', title: 'Review pull request', assignee: 'SK', priority: 'high' as const },
    ],
    [
      { id: '3', title: 'Deploy staging build', assignee: 'MR', priority: 'high' as const },
    ],
    [
      { id: '4', title: 'Fix login bug', assignee: 'AL', priority: 'low' as const },
    ],
  ],
  ar: [
    [
      { id: '1', title: 'تحديث التوثيق', assignee: 'JD', priority: 'medium' as const },
      { id: '2', title: 'مراجعة طلب السحب', assignee: 'SK', priority: 'high' as const },
    ],
    [
      { id: '3', title: 'نشر نسخة المعاينة', assignee: 'MR', priority: 'high' as const },
    ],
    [
      { id: '4', title: 'إصلاح خطأ تسجيل الدخول', assignee: 'AL', priority: 'low' as const },
    ],
  ],
} as const;

const columnsByLocale = {
  en: [
    { name: 'To Do', icon: Circle },
    { name: 'In Progress', icon: Clock },
    { name: 'Done', icon: CheckCircle2 },
  ],
  ar: [
    { name: 'للعمل', icon: Circle },
    { name: 'قيد التنفيذ', icon: Clock },
    { name: 'مكتمل', icon: CheckCircle2 },
  ],
} as const;

export const TaskKanban: React.FC = () => {
  const { locale, isRTL } = useLocale();
  const reducedMotion = useReducedMotion();
  const [tasks, setTasks] = useState(tasksByLocale[locale]);
  const [movingTask, setMovingTask] = useState<string | null>(null);
  const columns = columnsByLocale[locale];

  useEffect(() => {
    setTasks(tasksByLocale[locale]);
  }, [locale]);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      for (let i = 0; i < 2; i++) {
        if (tasks[i].length > 0) {
          const taskToMove = tasks[i][0];
          setMovingTask(taskToMove.id);

          setTimeout(() => {
            setTasks((current) => {
              const updated = current.map(col => [...col]);
              const fromCol = updated[i].findIndex(t => t.id === taskToMove.id);
              if (fromCol !== -1) {
                updated[i].splice(fromCol, 1);
                updated[i + 1].push(taskToMove);
              }
              return updated;
            });
            setMovingTask(null);
          }, 400);

          break;
        }
      }
    }, 3500);

    const resetInterval = setInterval(() => {
      setTasks(tasksByLocale[locale]);
    }, 14000);

    return () => {
      clearInterval(interval);
      clearInterval(resetInterval);
    };
  }, [locale, reducedMotion, tasks]);

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className={cn('w-full h-full flex gap-2 p-2', isRTL && 'flex-row-reverse')}>
      {(isRTL ? [...columns].reverse() : columns).map((col, renderIndex) => {
        const colIndex = isRTL ? columns.length - 1 - renderIndex : renderIndex;
        const Icon = col.icon;
        return (
          <div key={col.name} className="flex-1 flex flex-col min-w-0">
            <div className={cn('flex items-center gap-1.5 mb-2 px-1', isRTL && 'flex-row-reverse')}>
              <Icon size={11} className="text-gray-500" />
              <span className="text-[10px] font-semibold text-gray-700">{col.name}</span>
              <span className={cn('text-[9px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full', isRTL ? 'mr-auto' : 'ml-auto')}>
                {tasks[colIndex].length}
              </span>
            </div>
            <div className="flex-1 bg-gray-50 rounded-lg p-1.5 space-y-1.5 overflow-hidden">
              {tasks[colIndex].map((task) => (
                <div
                  key={task.id}
                  className={cn(
                    'bg-white rounded-md p-2 border border-gray-200 shadow-sm',
                    'transition-all duration-400',
                    movingTask === task.id && cn('opacity-50 scale-95', isRTL ? '-translate-x-2' : 'translate-x-2')
                  )}
                >
                  <div className="text-[10px] font-medium text-gray-800 mb-1 truncate">
                    {task.title}
                  </div>
                  <div className={cn('flex items-center justify-between', isRTL && 'flex-row-reverse')}>
                    <span className={cn(
                      'text-[8px] px-1 py-0.5 rounded-full uppercase font-semibold',
                      getPriorityStyle(task.priority)
                    )}>
                      {locale === 'ar'
                        ? task.priority === 'high'
                          ? 'عالٍ'
                          : task.priority === 'medium'
                            ? 'متوسط'
                            : 'منخفض'
                        : task.priority}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-gray-600">{task.assignee}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskKanban;
