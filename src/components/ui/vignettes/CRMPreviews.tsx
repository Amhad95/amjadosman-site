import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { StatusChip } from './StatusChip';
import { DataTable } from './DataTable';
import { DetailDrawer } from './DetailDrawer';
import { TrendingUp, TrendingDown, Users, Target, DollarSign, Clock, Check } from 'lucide-react';

// ============ PIPELINE BOARD ============

interface DealCard {
  id: string;
  company: string;
  value: string;
  owner: string;
  lastActivity: string;
  isActive: boolean;
}

interface PipelineColumn {
  id: string;
  label: string;
  count: number;
  deals: DealCard[];
}

const pipelineData: PipelineColumn[] = [
  {
    id: 'lead',
    label: 'Lead',
    count: 4,
    deals: [
      { id: '1', company: 'Nexus Systems', value: '$18,000', owner: 'JD', lastActivity: '2h ago', isActive: true },
      { id: '2', company: 'Bright Solutions', value: '$12,500', owner: 'SK', lastActivity: '1d ago', isActive: false },
    ],
  },
  {
    id: 'qualified',
    label: 'Qualified',
    count: 3,
    deals: [
      { id: '3', company: 'Apex Industries', value: '$45,000', owner: 'JD', lastActivity: '5h ago', isActive: true },
      { id: '4', company: 'TechCorp Global', value: '$28,000', owner: 'MR', lastActivity: '3d ago', isActive: false },
    ],
  },
  {
    id: 'proposal',
    label: 'Proposal',
    count: 2,
    deals: [
      { id: '5', company: 'DataFlow Inc', value: '$52,000', owner: 'SK', lastActivity: '1d ago', isActive: true },
    ],
  },
  {
    id: 'negotiation',
    label: 'Negotiation',
    count: 2,
    deals: [
      { id: '6', company: 'RetailMax', value: '$38,000', owner: 'JD', lastActivity: '4h ago', isActive: true },
    ],
  },
  {
    id: 'won',
    label: 'Won',
    count: 5,
    deals: [
      { id: '7', company: 'GlobalFin Ltd', value: '$65,000', owner: 'MR', lastActivity: '1w ago', isActive: false },
    ],
  },
];

export const PipelineBoardRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [highlightedColumn, setHighlightedColumn] = useState<string | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    
    const columns = ['lead', 'qualified', 'proposal', 'negotiation'];
    let index = 0;
    
    const interval = setInterval(() => {
      setHighlightedColumn(columns[index]);
      index = (index + 1) % columns.length;
    }, 2500);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className={cn('flex gap-2 p-3 h-full overflow-x-auto', className)}>
      {pipelineData.map((column) => (
        <div
          key={column.id}
          className={cn(
            'flex-1 min-w-[140px] flex flex-col rounded-lg transition-all duration-300',
            highlightedColumn === column.id ? 'bg-gray-100' : 'bg-gray-50'
          )}
        >
          {/* Column header */}
          <div className="flex items-center justify-between px-2 py-2 border-b border-gray-200">
            <span className="text-[11px] font-semibold text-gray-700">{column.label}</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-gray-200 text-gray-600 rounded-full">
              {column.count}
            </span>
          </div>

          {/* Cards */}
          <div className="flex-1 p-1.5 space-y-1.5 overflow-y-auto">
            {column.deals.map((deal) => (
              <div
                key={deal.id}
                className={cn(
                  'bg-white rounded-md p-2 border shadow-sm cursor-pointer',
                  'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
                  deal.isActive ? 'border-gray-200' : 'border-gray-100'
                )}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-[11px] font-medium text-gray-900 leading-tight">
                    {deal.company}
                  </span>
                  <div className={cn(
                    'w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1',
                    deal.isActive ? 'bg-emerald-400' : 'bg-gray-300'
                  )} />
                </div>
                <div className="text-[11px] font-semibold text-gray-700 mb-1.5">
                  {deal.value}
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[9px] font-medium text-gray-500">
                    {deal.owner}
                  </div>
                  <span className="text-[9px] text-gray-400">{deal.lastActivity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ============ CONTACTS TABLE ============

const contactsData = [
  { id: '1', name: 'Sarah Johnson', company: 'Acme Corp', status: 'active', lastContact: '2 days ago', owner: 'JD' },
  { id: '2', name: 'Michael Chen', company: 'TechStart', status: 'qualified', lastContact: '1 week ago', owner: 'SK' },
  { id: '3', name: 'Emily Williams', company: 'GlobalFin', status: 'new', lastContact: 'Today', owner: 'JD' },
  { id: '4', name: 'James Martinez', company: 'RetailMax', status: 'active', lastContact: '3 days ago', owner: 'MR' },
  { id: '5', name: 'Lisa Thompson', company: 'DataFlow', status: 'inactive', lastContact: '2 weeks ago', owner: 'SK' },
];

const contactColumns = [
  { key: 'name', label: 'Name', width: '1.5fr' },
  { key: 'company', label: 'Company', width: '1fr' },
  { key: 'status', label: 'Status', width: '0.8fr' },
  { key: 'lastContact', label: 'Last Contact', width: '1fr' },
  { key: 'owner', label: 'Owner', width: '0.5fr' },
];

export const ContactsTableRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleRowClick = (row: Record<string, any>) => {
    setSelectedContact(row.id);
    setDrawerOpen(true);
  };

  const selectedData = contactsData.find(c => c.id === selectedContact);

  return (
    <div className={cn('relative h-full p-3 overflow-hidden', className)}>
      <DataTable
        columns={contactColumns}
        data={contactsData}
        selectedRow={selectedContact || undefined}
        onRowClick={handleRowClick}
        pagination={{ current: 1, total: 47, perPage: 10 }}
      />

      <DetailDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        contact={selectedData ? {
          name: selectedData.name,
          company: selectedData.company,
          role: 'VP Sales',
          email: `${selectedData.name.toLowerCase().replace(' ', '.')}@${selectedData.company.toLowerCase().replace(' ', '')}.com`,
          phone: '+1 (555) 123-4567',
          tags: ['Enterprise', 'Priority'],
        } : undefined}
        activities={[
          { type: 'email', description: 'Sent proposal follow-up', time: '2 hours ago' },
          { type: 'call', description: 'Discovery call completed', time: 'Yesterday' },
          { type: 'meeting', description: 'Initial meeting scheduled', time: '3 days ago' },
        ]}
      />
    </div>
  );
};

// ============ TASKS LIST ============

interface Task {
  id: string;
  title: string;
  dueDate: string;
  dueStatus: 'overdue' | 'today' | 'upcoming';
  priority: 'high' | 'medium' | 'low';
  assignee: string;
  completed: boolean;
}

const tasksData: Task[] = [
  { id: '1', title: 'Follow up with Acme Corp', dueDate: 'Yesterday', dueStatus: 'overdue', priority: 'high', assignee: 'JD', completed: false },
  { id: '2', title: 'Send proposal to TechStart', dueDate: 'Today', dueStatus: 'today', priority: 'high', assignee: 'SK', completed: false },
  { id: '3', title: 'Schedule demo with GlobalFin', dueDate: 'Tomorrow', dueStatus: 'upcoming', priority: 'medium', assignee: 'JD', completed: false },
  { id: '4', title: 'Update CRM contacts', dueDate: 'Friday', dueStatus: 'upcoming', priority: 'low', assignee: 'MR', completed: true },
];

const priorityStyles = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-gray-100 text-gray-600',
};

const dueDateStyles = {
  overdue: 'text-red-600',
  today: 'text-amber-600',
  upcoming: 'text-gray-500',
};

export const TasksListRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [tasks, setTasks] = useState(tasksData);
  const [filter, setFilter] = useState<'my' | 'team'>('my');

  const toggleComplete = (id: string) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div className={cn('h-full flex flex-col p-3', className)}>
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
              'transition-all duration-200 hover:border-gray-300',
              task.completed && 'opacity-60'
            )}
          >
            <button
              onClick={() => toggleComplete(task.id)}
              className={cn(
                'w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0',
                'transition-all duration-200',
                task.completed 
                  ? 'bg-emerald-500 border-emerald-500' 
                  : 'border-gray-300 hover:border-gray-400'
              )}
            >
              {task.completed && <Check className="w-2.5 h-2.5 text-white" />}
            </button>
            
            <div className="flex-1 min-w-0">
              <span className={cn(
                'text-xs text-gray-800',
                task.completed && 'line-through text-gray-500'
              )}>
                {task.title}
              </span>
            </div>

            <span className={cn(
              'text-[10px] font-medium',
              dueDateStyles[task.dueStatus]
            )}>
              {task.dueDate}
            </span>

            <span className={cn(
              'px-2 py-0.5 text-[9px] font-medium rounded-full',
              priorityStyles[task.priority]
            )}>
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

// ============ MINI REPORTS ============

interface KPICard {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  change: string;
  icon: React.ElementType;
}

const kpiData: KPICard[] = [
  { label: 'Open Deals', value: '24', trend: 'up', change: '+3', icon: Target },
  { label: 'Won This Month', value: '8', trend: 'up', change: '+2', icon: DollarSign },
  { label: 'Pipeline Value', value: '$182k', trend: 'up', change: '+12%', icon: TrendingUp },
  { label: 'Avg. Close Time', value: '18d', trend: 'down', change: '-2d', icon: Clock },
];

const chartData = [35, 48, 42, 58, 52, 68, 72, 65, 78, 82, 75, 88];

export const MiniReportsRealistic: React.FC<{ className?: string }> = ({ className }) => {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  return (
    <div className={cn('h-full flex flex-col p-3', className)}>
      {/* Time range toggle */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-gray-700">Dashboard</span>
        <div className="flex items-center gap-0.5 bg-gray-100 rounded-md p-0.5">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={cn(
                'px-2 py-1 text-[10px] font-medium rounded transition-colors',
                timeRange === range 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {kpiData.map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-lg border border-gray-200 p-2">
            <div className="flex items-center justify-between mb-1">
              <kpi.icon className="w-3.5 h-3.5 text-gray-400" />
              {kpi.trend === 'up' ? (
                <TrendingUp className="w-3 h-3 text-emerald-500" />
              ) : kpi.trend === 'down' ? (
                <TrendingDown className="w-3 h-3 text-emerald-500" />
              ) : null}
            </div>
            <div className="text-lg font-bold text-gray-900">{kpi.value}</div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-gray-500">{kpi.label}</span>
              <span className={cn(
                'text-[9px] font-medium',
                kpi.trend === 'up' ? 'text-emerald-600' : 
                kpi.trend === 'down' ? 'text-emerald-600' : 'text-gray-500'
              )}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-3">
        <div className="text-[10px] font-medium text-gray-500 mb-2">Pipeline Value Trend</div>
        <div className="h-full flex items-end gap-1">
          {chartData.map((value, i) => (
            <div
              key={i}
              className="flex-1 bg-gray-200 rounded-t transition-all duration-200 hover:bg-gray-900"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default {
  PipelineBoardRealistic,
  ContactsTableRealistic,
  TasksListRealistic,
  MiniReportsRealistic,
};
