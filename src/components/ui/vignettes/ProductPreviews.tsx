import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// ============ CRM Preview Tabs (legacy – kept for backward compat) ============

export const CRMPipelinePreview: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [activeColumn, setActiveColumn] = useState(1);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setActiveColumn((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const columns = ['Lead', 'Qualified', 'Proposal', 'Won'];
  const cards = [
    ['Acme Inc.', 'TechCorp'],
    ['GlobalFin', 'StartupX'],
    ['RetailMax'],
    ['MegaCo', 'DataFlow'],
  ];

  return (
    <div className="w-full h-full flex gap-2">
      {columns.map((col, i) => (
        <div key={col} className="flex-1 flex flex-col">
          <div className={cn(
            'text-[10px] font-semibold text-center mb-2 py-1 rounded',
            'transition-all duration-300',
            i === activeColumn ? 'bg-gray-200 text-gray-900' : 'text-gray-500'
          )}>
            {col}
          </div>
          <div className="flex-1 bg-gray-50 rounded p-1.5 space-y-1">
            {cards[i].map((card) => (
              <div
                key={card}
                className={cn(
                  'bg-white rounded px-2 py-1.5 text-[10px] text-gray-800 shadow-sm',
                  'border transition-all duration-300',
                  i === activeColumn ? 'border-gray-300' : 'border-gray-100'
                )}
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const CRMContactPreview: React.FC = () => {
  return (
    <div className="w-full h-full flex gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm">
        JD
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-gray-900 mb-1">John Doe</div>
        <div className="text-[10px] text-gray-500 mb-2">VP Sales, Acme Inc.</div>
        <div className="space-y-1">
          {['Call scheduled', 'Email sent', 'Meeting completed'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[9px]">
              <div className={cn(
                'w-1.5 h-1.5 rounded-full',
                i === 0 ? 'bg-emerald-400' : 'bg-gray-300'
              )} />
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CRMTasksPreview: React.FC = () => {
  const [checked, setChecked] = useState([true, false, false]);

  return (
    <div className="w-full h-full space-y-2">
      {['Follow up with Acme', 'Send proposal', 'Schedule demo'].map((task, i) => (
        <div
          key={task}
          onClick={() => {
            const newChecked = [...checked];
            newChecked[i] = !newChecked[i];
            setChecked(newChecked);
          }}
          className={cn(
            'flex items-center gap-3 p-2 rounded-lg bg-white border border-gray-200 cursor-pointer',
            'hover:bg-gray-50 transition-colors'
          )}
        >
          <div className={cn(
            'w-4 h-4 rounded border-2 flex items-center justify-center',
            checked[i] ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'
          )}>
            {checked[i] && <span className="text-white text-[10px]">✓</span>}
          </div>
          <span className={cn(
            'text-[11px]',
            checked[i] ? 'text-gray-400 line-through' : 'text-gray-800'
          )}>
            {task}
          </span>
        </div>
      ))}
    </div>
  );
};

export const CRMReportsPreview: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-[10px] text-gray-500 mb-2">Pipeline Value</div>
      <div className="flex-1 flex items-end gap-1">
        {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end">
            <div
              className="bg-gray-300 rounded-t transition-all duration-300 hover:bg-gray-900"
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[8px] text-gray-400 mt-1">
        <span>Mon</span>
        <span>Sun</span>
      </div>
    </div>
  );
};

// ============ Accounting Preview Tabs ============

export const AccountingInvoicePreview: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-semibold text-gray-900">INV-2024-047</span>
        <span className="px-2 py-0.5 rounded-full text-[8px] font-medium bg-amber-100 text-amber-700">Draft</span>
      </div>
      <div className="space-y-2 flex-1">
        {[
          { item: 'Consulting Services', amount: '€2,400' },
          { item: 'Implementation', amount: '€1,200' },
        ].map((line) => (
          <div key={line.item} className="flex justify-between text-[10px]">
            <span className="text-gray-600">{line.item}</span>
            <span className="text-gray-900 font-medium">{line.amount}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-2 flex justify-between">
        <span className="text-[10px] font-semibold text-gray-700">Total</span>
        <span className="text-sm font-bold text-gray-900">€3,600</span>
      </div>
    </div>
  );
};

export const AccountingExpensesPreview: React.FC = () => {
  return (
    <div className="w-full h-full space-y-2">
      {[
        { desc: 'Office supplies', amount: '€85', status: 'approved' },
        { desc: 'Travel - Berlin', amount: '€340', status: 'pending' },
        { desc: 'Software license', amount: '€120', status: 'approved' },
      ].map((exp) => (
        <div key={exp.desc} className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <span className="text-[10px] text-gray-800">{exp.desc}</span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-600 font-medium">{exp.amount}</span>
            <span className={cn(
              'px-1.5 py-0.5 rounded-full text-[8px] font-medium',
              exp.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            )}>
              {exp.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const AccountingApprovalsPreview: React.FC = () => {
  const [approved, setApproved] = useState<number[]>([]);

  return (
    <div className="w-full h-full space-y-2">
      {['Invoice #045', 'Expense claim', 'PO Request'].map((item, i) => (
        <div key={item} className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <span className="text-[10px] text-gray-800">{item}</span>
          <button
            onClick={() => setApproved(approved.includes(i) ? approved.filter(x => x !== i) : [...approved, i])}
            className={cn(
              'px-2 py-1 rounded text-[9px] font-semibold transition-colors',
              approved.includes(i)
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            )}
          >
            {approved.includes(i) ? 'Approved ✓' : 'Approve'}
          </button>
        </div>
      ))}
    </div>
  );
};

export const AccountingDashboardPreview: React.FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-2">
      {[
        { label: 'Revenue', value: '€24.5k', trend: '+12%', positive: true },
        { label: 'Pending', value: '€3.2k', trend: '5 invoices', positive: false },
        { label: 'Expenses', value: '€8.1k', trend: '-3%', positive: true },
        { label: 'Net', value: '€16.4k', trend: '+8%', positive: true },
      ].map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
          <div className="text-[8px] text-gray-500 uppercase font-medium">{stat.label}</div>
          <div className="text-sm font-bold text-gray-900">{stat.value}</div>
          <div className={cn('text-[9px] font-medium', stat.positive ? 'text-emerald-600' : 'text-gray-500')}>{stat.trend}</div>
        </div>
      ))}
    </div>
  );
};

// ============ Inventory Preview Tabs ============

export const InventoryItemsPreview: React.FC = () => {
  return (
    <div className="w-full h-full space-y-1.5">
      <div className="flex text-[9px] text-gray-500 font-medium pb-1 border-b border-gray-200">
        <span className="flex-1">Item</span>
        <span className="w-16 text-center">Stock</span>
        <span className="w-16 text-center">Status</span>
      </div>
      {[
        { name: 'Widget A', stock: 45, status: 'ok' },
        { name: 'Gadget B', stock: 12, status: 'low' },
        { name: 'Part C', stock: 128, status: 'ok' },
      ].map((item) => (
        <div key={item.name} className="flex items-center text-[10px] py-1">
          <span className="flex-1 text-gray-800 font-medium">{item.name}</span>
          <span className="w-16 text-center text-gray-600">{item.stock}</span>
          <div className="w-16 flex justify-center">
            <span className={cn(
              'px-1.5 py-0.5 rounded-full text-[8px] font-medium',
              item.status === 'ok' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
            )}>
              {item.status === 'ok' ? 'In Stock' : 'Low'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InventoryLocationsPreview: React.FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-2">
      {[
        { name: 'Warehouse A', items: 234 },
        { name: 'Warehouse B', items: 156 },
        { name: 'Office', items: 42 },
      ].map((loc) => (
        <div key={loc.name} className="bg-white rounded-lg p-2 text-center border border-gray-200 shadow-sm">
          <div className="text-[10px] text-gray-600 mb-1">{loc.name}</div>
          <div className="text-lg font-bold text-gray-900">{loc.items}</div>
          <div className="text-[8px] text-gray-400">items</div>
        </div>
      ))}
    </div>
  );
};

export const InventoryReorderPreview: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 500);
    }, 2000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="w-full h-full space-y-2">
      {[
        { name: 'Gadget B', current: 12, threshold: 20 },
        { name: 'Supply D', current: 5, threshold: 15 },
      ].map((item) => (
        <div
          key={item.name}
          className={cn(
            'p-2 rounded-lg border transition-all duration-300 bg-white shadow-sm',
            pulse ? 'border-red-300 bg-red-50' : 'border-gray-200'
          )}
        >
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-gray-800 font-medium">{item.name}</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">
              Reorder
            </span>
          </div>
          <div className="flex items-center gap-2 text-[9px]">
            <span className="text-red-600 font-semibold">{item.current}</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500">{item.threshold} min</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InventoryAssetPreview: React.FC = () => {
  return (
    <div className="w-full h-full space-y-2">
      {[
        { asset: 'MacBook Pro #12', assignee: 'John D.', status: 'assigned' },
        { asset: 'Monitor #08', assignee: 'Unassigned', status: 'available' },
        { asset: 'Chair #45', assignee: 'Jane S.', status: 'assigned' },
      ].map((item) => (
        <div key={item.asset} className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div>
            <div className="text-[10px] text-gray-800 font-medium">{item.asset}</div>
            <div className="text-[8px] text-gray-500">{item.assignee}</div>
          </div>
          <div className={cn(
            'w-2 h-2 rounded-full',
            item.status === 'assigned' ? 'bg-emerald-400' : 'bg-blue-400'
          )} />
        </div>
      ))}
    </div>
  );
};

// ============ Tasks Preview Tabs ============

export const TasksBoardPreview: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setHighlight((prev) => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const columns = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="w-full h-full flex gap-2">
      {columns.map((col, i) => (
        <div key={col} className="flex-1 flex flex-col">
          <div className={cn(
            'text-[9px] font-semibold text-center py-1 rounded mb-1',
            'transition-all duration-300',
            i === highlight ? 'bg-gray-200 text-gray-900' : 'text-gray-500'
          )}>
            {col}
          </div>
          <div className="flex-1 bg-gray-50 rounded p-1 space-y-1">
            {[1, 2].map((_, j) => (
              <div
                key={j}
                className={cn(
                  'h-6 rounded bg-white border shadow-sm',
                  'transition-all duration-300',
                  i === highlight && j === 0 ? 'border-gray-300' : 'border-gray-100'
                )}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const TasksListPreview: React.FC = () => {
  return (
    <div className="w-full h-full space-y-1.5">
      {[
        { task: 'Review proposal', due: 'Today', priority: 'high' },
        { task: 'Update docs', due: 'Tomorrow', priority: 'medium' },
        { task: 'Send report', due: 'Friday', priority: 'low' },
      ].map((item) => (
        <div key={item.task} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div className="w-3 h-3 rounded border-2 border-gray-300" />
          <span className="flex-1 text-[10px] text-gray-800">{item.task}</span>
          <span className={cn(
            'px-1.5 py-0.5 rounded-full text-[8px] font-medium',
            item.priority === 'high' ? 'bg-red-100 text-red-700' :
            item.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
            'bg-gray-100 text-gray-600'
          )}>
            {item.due}
          </span>
        </div>
      ))}
    </div>
  );
};

export const TasksApprovalsPreview: React.FC = () => {
  const [approved, setApproved] = useState<number[]>([0]);

  return (
    <div className="w-full h-full space-y-2">
      {['Design review', 'Budget sign-off', 'Launch approval'].map((item, i) => (
        <div key={item} className="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <div className={cn(
              'w-4 h-4 rounded-full flex items-center justify-center text-[10px]',
              approved.includes(i) ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'
            )}>
              {approved.includes(i) ? '✓' : i + 1}
            </div>
            <span className="text-[10px] text-gray-800">{item}</span>
          </div>
          <button
            onClick={() => setApproved(approved.includes(i) ? approved.filter(x => x !== i) : [...approved, i])}
            className={cn(
              'px-2 py-0.5 rounded-full text-[8px] font-semibold',
              approved.includes(i) ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            )}
          >
            {approved.includes(i) ? 'Done' : 'Pending'}
          </button>
        </div>
      ))}
    </div>
  );
};

export const TasksTimelinePreview: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between text-[8px] text-gray-500 mb-2">
        <span>This Week</span>
        <span>Next Week</span>
      </div>
      <div className="flex-1 relative">
        <div className="absolute top-0 left-0 h-4 bg-gray-900/80 rounded" style={{ width: '70%' }} />
        <div className="absolute top-5 left-[20%] h-4 bg-gray-400 rounded" style={{ width: '50%' }} />
        <div className="absolute top-10 left-[40%] h-4 bg-gray-300 rounded" style={{ width: '40%' }} />
      </div>
      <div className="flex gap-2 mt-2">
        {['Project A', 'Project B', 'Project C'].map((p) => (
          <span key={p} className="text-[8px] text-gray-500">{p}</span>
        ))}
      </div>
    </div>
  );
};
