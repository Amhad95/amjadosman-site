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
      // Find a task to move forward
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

    // Reset periodically
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
        return 'bg-red-500/20 text-red-400';
      case 'medium':
        return 'bg-lavender/20 text-lavender';
      default:
        return 'bg-mint/20 text-mint';
    }
  };

  return (
    <div className="w-full h-full flex gap-2 p-2">
      {columns.map((col, colIndex) => {
        const Icon = col.icon;
        return (
          <div key={col.name} className="flex-1 flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 mb-2 px-1">
              <Icon size={11} className="text-mint/70" />
              <span className="text-[10px] font-semibold text-mint/70">{col.name}</span>
              <span className="text-[9px] text-offwhite/40 ml-auto">
                {tasks[colIndex].length}
              </span>
            </div>
            <div className="flex-1 bg-ink/30 rounded-lg p-1.5 space-y-1.5 overflow-hidden">
              {tasks[colIndex].map((task) => (
                <div
                  key={task.id}
                  className={cn(
                    'bg-ink/60 rounded-md p-2 border border-mint/10',
                    'transition-all duration-400',
                    movingTask === task.id && 'opacity-50 scale-95 translate-x-2'
                  )}
                >
                  <div className="text-[10px] font-medium text-offwhite mb-1 truncate">
                    {task.title}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      'text-[8px] px-1 py-0.5 rounded uppercase font-semibold',
                      getPriorityStyle(task.priority)
                    )}>
                      {task.priority}
                    </span>
                    <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-mint">{task.assignee}</span>
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
