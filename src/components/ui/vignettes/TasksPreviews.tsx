import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Check, Clock, User } from 'lucide-react';

// ============ TASK BOARD (Kanban) ============

interface TaskCard {
  id: string;
  title: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
  due: string;
}

interface BoardColumn {
  id: string;
  label: string;
  count: number;
  tasks: TaskCard[];
}

const priorityStyles = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-gray-100 text-gray-600',
};

const boardData: BoardColumn[] = [
  {
    id: 'backlog', label: 'Backlog', count: 5,
    tasks: [
      { id: 't1', title: 'Update API documentation', assignee: 'JD', priority: 'low', due: 'Feb 15' },
      { id: 't2', title: 'Design review: settings page', assignee: 'SK', priority: 'medium', due: 'Feb 10' },
    ],
  },
  {
    id: 'progress', label: 'In Progress', count: 3,
    tasks: [
      { id: 't3', title: 'Build user dashboard', assignee: 'MR', priority: 'high', due: 'Feb 05' },
      { id: 't4', title: 'Fix login redirect bug', assignee: 'JD', priority: 'high', due: 'Today' },
    ],
  },
  {
    id: 'review', label: 'Review', count: 2,
    tasks: [
      { id: 't5', title: 'Onboarding flow v2', assignee: 'SK', priority: 'medium', due: 'Feb 08' },
    ],
  },
  {
    id: 'done', label: 'Done', count: 8,
    tasks: [
      { id: 't6', title: 'Deploy staging environment', assignee: 'MR', priority: 'low', due: 'Jan 30' },
    ],
  },
];

export const TaskBoardRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [highlightedColumn, setHighlightedColumn] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const columns = ['backlog', 'progress', 'review', 'done'];
    let index = 0;
    const interval = setInterval(() => {
      setHighlightedColumn(columns[index]);
      index = (index + 1) % columns.length;
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  return (
    <div
      className={cn('flex gap-2 p-3 h-full overflow-x-auto', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {boardData.map((column) => (
        <div
          key={column.id}
          className={cn(
            'flex-1 min-w-[140px] flex flex-col rounded-lg transition-all duration-300',
            highlightedColumn === column.id ? 'bg-gray-100' : 'bg-gray-50'
          )}
        >
          <div className="flex items-center justify-between px-2 py-2 border-b border-gray-200">
            <span className="text-[11px] font-semibold text-gray-700">{column.label}</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-gray-200 text-gray-600 rounded-full">
              {column.count}
            </span>
          </div>
          <div className="flex-1 p-1.5 space-y-1.5 overflow-y-auto">
            {column.tasks.map((task) => (
              <div
                key={task.id}
                className={cn(
                  'bg-white rounded-md p-2 border shadow-sm cursor-pointer',
                  'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
                  'border-gray-100'
                )}
              >
                <div className="text-[11px] font-medium text-gray-900 leading-tight mb-1.5">
                  {task.title}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[9px] font-medium text-gray-500">
                      {task.assignee}
                    </div>
                    <span className={cn('px-1.5 py-0.5 text-[8px] font-medium rounded-full', priorityStyles[task.priority])}>
                      {task.priority}
                    </span>
                  </div>
                  <span className={cn(
                    'text-[9px]',
                    task.due === 'Today' ? 'text-amber-600 font-medium' : 'text-gray-400'
                  )}>
                    {task.due}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ============ TASK LIST ============

const taskListData = [
  { id: 'tl1', title: 'Follow up with Acme Corp', assignee: 'JD', due: 'Yesterday', dueStatus: 'overdue' as const, priority: 'high' as const, completed: false },
  { id: 'tl2', title: 'Send proposal to TechStart', assignee: 'SK', due: 'Today', dueStatus: 'today' as const, priority: 'high' as const, completed: false },
  { id: 'tl3', title: 'Schedule demo with GlobalFin', assignee: 'JD', due: 'Tomorrow', dueStatus: 'upcoming' as const, priority: 'medium' as const, completed: false },
  { id: 'tl4', title: 'Update project timeline', assignee: 'MR', due: 'Friday', dueStatus: 'upcoming' as const, priority: 'low' as const, completed: true },
  { id: 'tl5', title: 'Review design mockups', assignee: 'SK', due: 'Thursday', dueStatus: 'upcoming' as const, priority: 'medium' as const, completed: false },
];

const dueDateStyles = {
  overdue: 'text-red-600',
  today: 'text-amber-600',
  upcoming: 'text-gray-500',
};

export const TaskListRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [tasks, setTasks] = useState(taskListData);
  const [filter, setFilter] = useState<'my' | 'team'>('my');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const uncheckedIds = taskListData.filter(t => !t.completed).map(t => t.id);
    let index = 0;
    const interval = setInterval(() => {
      if (index < uncheckedIds.length) {
        setTasks(prev => prev.map(t =>
          t.id === uncheckedIds[index] ? { ...t, completed: true } : t
        ));
        index++;
      } else {
        setTasks(taskListData);
        index = 0;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  const toggleComplete = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div
      className={cn('h-full flex flex-col p-3', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Toggle */}
      <div className="flex items-center gap-1 mb-3">
        <button
          onClick={() => setFilter('my')}
          className={cn(
            'px-3 py-1.5 text-[11px] font-medium rounded-md transition-colors',
            filter === 'my' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          My Tasks
        </button>
        <button
          onClick={() => setFilter('team')}
          className={cn(
            'px-3 py-1.5 text-[11px] font-medium rounded-md transition-colors',
            filter === 'team' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          )}
        >
          Team
        </button>
      </div>

      {/* Tasks */}
      <div className="flex-1 space-y-1.5 overflow-y-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              'flex items-center gap-3 p-2.5 bg-white rounded-lg border border-gray-200',
              'transition-all duration-300 hover:border-gray-300',
              task.completed && 'opacity-60'
            )}
          >
            <button
              onClick={() => toggleComplete(task.id)}
              className={cn(
                'w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0',
                'transition-all duration-300',
                task.completed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 hover:border-gray-400'
              )}
            >
              {task.completed && <Check className="w-2.5 h-2.5 text-white" />}
            </button>

            <div className="flex-1 min-w-0">
              <span className={cn(
                'text-xs text-gray-800 transition-all duration-300',
                task.completed && 'line-through text-gray-500'
              )}>
                {task.title}
              </span>
            </div>

            <span className={cn('text-[10px] font-medium', dueDateStyles[task.dueStatus])}>
              {task.due}
            </span>

            <span className={cn('px-2 py-0.5 text-[9px] font-medium rounded-full', priorityStyles[task.priority])}>
              {task.priority}
            </span>

            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[9px] font-medium text-gray-500">
              {task.assignee}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ APPROVALS FLOW ============

const approvalSteps = [
  { id: 'as1', reviewer: 'JD', title: 'Technical Review', status: 'approved' as const, timestamp: 'Jan 28, 10:15 AM' },
  { id: 'as2', reviewer: 'SK', title: 'Design Review', status: 'approved' as const, timestamp: 'Jan 29, 2:30 PM' },
  { id: 'as3', reviewer: 'MR', title: 'Manager Approval', status: 'pending' as const, timestamp: '—' },
  { id: 'as4', reviewer: 'AL', title: 'Final Sign-off', status: 'waiting' as const, timestamp: '—' },
];

const stepStatusStyles = {
  approved: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Approved' },
  pending: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Pending' },
  waiting: { bg: 'bg-gray-100', text: 'text-gray-500', label: 'Waiting' },
};

export const ApprovalsFlowRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [steps, setSteps] = useState(approvalSteps);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    const pendingIds = approvalSteps.filter(s => s.status !== 'approved').map(s => s.id);
    let index = 0;
    const interval = setInterval(() => {
      if (index < pendingIds.length) {
        setSteps(prev => prev.map(s =>
          s.id === pendingIds[index] ? { ...s, status: 'approved' as const, timestamp: 'Just now' } : s
        ));
        index++;
      } else {
        setSteps(approvalSteps);
        index = 0;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  return (
    <div
      className={cn('h-full flex flex-col p-3', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-xs font-medium text-gray-700 mb-1">Approval Chain</div>
      <div className="text-[10px] text-gray-500 mb-4">Project: Dashboard v2 Release</div>

      <div className="flex-1 space-y-0">
        {steps.map((step, i) => {
          const st = stepStatusStyles[step.status];
          return (
            <div key={step.id} className="flex gap-3">
              {/* Vertical line + dot */}
              <div className="flex flex-col items-center">
                <div className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border-2',
                  step.status === 'approved' ? 'bg-emerald-500 border-emerald-500' : step.status === 'pending' ? 'border-amber-400 bg-white' : 'border-gray-200 bg-white'
                )}>
                  {step.status === 'approved' ? (
                    <Check className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <span className="text-[9px] font-medium text-gray-500">{i + 1}</span>
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div className={cn(
                    'w-0.5 flex-1 min-h-[20px]',
                    step.status === 'approved' ? 'bg-emerald-300' : 'bg-gray-200'
                  )} />
                )}
              </div>

              {/* Content */}
              <div className="pb-4 flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[9px] font-medium text-gray-500">
                    {step.reviewer}
                  </div>
                  <span className="text-[11px] font-medium text-gray-900">{step.title}</span>
                  <span className={cn('px-2 py-0.5 text-[9px] font-medium rounded-full ml-auto', st.bg, st.text)}>
                    {st.label}
                  </span>
                </div>
                <span className="text-[9px] text-gray-400 ml-7">{step.timestamp}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============ TIMELINE (Gantt) ============

const timelineProjects = [
  { id: 'p1', name: 'Dashboard v2', progress: 75, start: 0, width: 65, assignee: 'JD', color: 'bg-blue-400' },
  { id: 'p2', name: 'API Migration', progress: 40, start: 15, width: 50, assignee: 'SK', color: 'bg-emerald-400' },
  { id: 'p3', name: 'Mobile App', progress: 20, start: 30, width: 70, assignee: 'MR', color: 'bg-amber-400' },
  { id: 'p4', name: 'Security Audit', progress: 90, start: 5, width: 35, assignee: 'AL', color: 'bg-purple-400' },
];

const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'];

export const TimelineRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [animatedWidths, setAnimatedWidths] = useState<number[]>(
    reducedMotion ? timelineProjects.map(p => p.width) : timelineProjects.map(() => 0)
  );
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setTimeout(() => {
      setAnimatedWidths(timelineProjects.map(p => p.width));
    }, 300);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <div
      className={cn('h-full flex flex-col p-3', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Week headers */}
      <div className="flex items-center mb-3 pl-[120px]">
        {weeks.map((w) => (
          <div key={w} className="flex-1 text-center text-[9px] font-medium text-gray-400 border-l border-gray-100 first:border-l-0">
            {w}
          </div>
        ))}
      </div>

      {/* Project rows */}
      <div className="flex-1 space-y-3">
        {timelineProjects.map((project, i) => (
          <div key={project.id} className="flex items-center gap-3">
            {/* Label */}
            <div className="w-[108px] flex-shrink-0">
              <div className="text-[11px] font-medium text-gray-900">{project.name}</div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[8px] font-medium text-gray-500">
                  {project.assignee}
                </div>
                <span className="text-[9px] text-gray-400">{project.progress}%</span>
              </div>
            </div>

            {/* Bar area */}
            <div className="flex-1 relative h-8 bg-gray-50 rounded">
              <div
                className={cn(
                  'absolute top-1 bottom-1 rounded transition-all duration-700 ease-out',
                  project.color
                )}
                style={{
                  left: `${project.start}%`,
                  width: `${animatedWidths[i]}%`,
                  opacity: 0.7,
                }}
              />
              {/* Progress overlay */}
              <div
                className={cn(
                  'absolute top-1 bottom-1 rounded transition-all duration-700 ease-out',
                  project.color
                )}
                style={{
                  left: `${project.start}%`,
                  width: `${(animatedWidths[i] * project.progress) / 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
