import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Circle, Clock, CheckCircle2 } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
}

const initialTasks: Task[][] = [
  [
    { id: '1', title: 'Update documentation', assignee: 'JD', priority: 'medium' },
    { id: '2', title: 'Review pull request', assignee: 'SK', priority: 'high' },
  ],
  [
    { id: '3', title: 'Deploy staging build', assignee: 'MR', priority: 'high' },
  ],
  [
    { id: '4', title: 'Fix login bug', assignee: 'AL', priority: 'low' },
  ],
];

const columns = [
  { name: 'To Do', icon: Circle },
  { name: 'In Progress', icon: Clock },
  { name: 'Done', icon: CheckCircle2 },
];

export const TaskKanban: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [tasks, setTasks] = useState(initialTasks);
  const [movingTask, setMovingTask] = useState<string | null>(null);

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
      setTasks(initialTasks);
    }, 14000);

    return () => {
      clearInterval(interval);
      clearInterval(resetInterval);
    };
  }, [reducedMotion, tasks]);

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
    <div className="w-full h-full flex gap-2 p-2">
      {columns.map((col, colIndex) => {
        const Icon = col.icon;
        return (
          <div key={col.name} className="flex-1 flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 mb-2 px-1">
              <Icon size={11} className="text-gray-500" />
              <span className="text-[10px] font-semibold text-gray-700">{col.name}</span>
              <span className="text-[9px] text-gray-400 ml-auto bg-gray-100 px-1.5 py-0.5 rounded-full">
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
                    movingTask === task.id && 'opacity-50 scale-95 translate-x-2'
                  )}
                >
                  <div className="text-[10px] font-medium text-gray-800 mb-1 truncate">
                    {task.title}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      'text-[8px] px-1 py-0.5 rounded-full uppercase font-semibold',
                      getPriorityStyle(task.priority)
                    )}>
                      {task.priority}
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
