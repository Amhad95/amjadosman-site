import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { CheckSquare, Square, Clock, User } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
  assignee: string;
}

const initialItems: ChecklistItem[] = [
  { id: '1', text: 'Complete requirements document', completed: true, assignee: 'Sarah' },
  { id: '2', text: 'Review with stakeholders', completed: true, assignee: 'Mike' },
  { id: '3', text: 'Update timeline estimates', completed: false, assignee: 'Alex' },
  { id: '4', text: 'Send for final approval', completed: false, assignee: 'Sarah' },
  { id: '5', text: 'Schedule kickoff meeting', completed: false, assignee: 'Team' },
];

export const ChecklistApproval: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [items, setItems] = useState(initialItems);
  const [currentToggle, setCurrentToggle] = useState<string | null>(null);

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
          setItems(initialItems);
        }
        return prev;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  const completedCount = items.filter(i => i.completed).length;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className="w-full h-full flex flex-col p-3 gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold text-gray-900">Project Launch Checklist</div>
          <div className="text-[10px] text-gray-500 flex items-center gap-1">
            <Clock size={10} />
            Due in 3 days
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">{completedCount}/{items.length}</div>
          <div className="text-[9px] text-gray-500">completed</div>
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
              <div className="flex items-center gap-1 text-[9px] text-gray-400">
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
