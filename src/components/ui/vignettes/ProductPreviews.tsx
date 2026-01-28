import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// CRM Preview Tabs
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
            i === activeColumn ? 'bg-mint/20 text-mint' : 'text-offwhite/50'
          )}>
            {col}
          </div>
          <div className="flex-1 bg-ink/30 rounded p-1.5 space-y-1">
            {cards[i].map((card, j) => (
              <div
                key={card}
                className={cn(
                  'bg-ink/50 rounded px-2 py-1.5 text-[10px] text-offwhite',
                  'border border-transparent transition-all duration-300',
                  i === activeColumn && 'border-mint/30'
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
      <div className="w-12 h-12 rounded-full bg-lavender/30 flex items-center justify-center text-lavender font-bold text-sm">
        JD
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-offwhite mb-1">John Doe</div>
        <div className="text-[10px] text-offwhite/50 mb-2">VP Sales, Acme Inc.</div>
        <div className="space-y-1">
          {['Call scheduled', 'Email sent', 'Meeting completed'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[9px]">
              <div className={cn(
                'w-1.5 h-1.5 rounded-full',
                i === 0 ? 'bg-mint' : 'bg-offwhite/30'
              )} />
              <span className="text-offwhite/70">{item}</span>
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
            'flex items-center gap-3 p-2 rounded-lg bg-ink/30 cursor-pointer',
            'hover:bg-ink/40 transition-colors'
          )}
        >
          <div className={cn(
            'w-4 h-4 rounded border-2 flex items-center justify-center',
            checked[i] ? 'bg-mint border-mint' : 'border-offwhite/30'
          )}>
            {checked[i] && <span className="text-ink text-[10px]">✓</span>}
          </div>
          <span className={cn(
            'text-[11px]',
            checked[i] ? 'text-offwhite/50 line-through' : 'text-offwhite'
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
      <div className="text-[10px] text-offwhite/50 mb-2">Pipeline Value</div>
      <div className="flex-1 flex items-end gap-1">
        {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end">
            <div
              className="bg-mint/60 rounded-t transition-all duration-300 hover:bg-mint"
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[8px] text-offwhite/40 mt-1">
        <span>Mon</span>
        <span>Sun</span>
      </div>
    </div>
  );
};

// Accounting Preview Tabs
export const AccountingInvoicePreview: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-semibold text-mint">INV-2024-047</span>
        <span className="px-2 py-0.5 rounded text-[8px] bg-mint/20 text-mint">Draft</span>
      </div>
      <div className="space-y-2 flex-1">
        {[
          { item: 'Consulting Services', amount: '€2,400' },
          { item: 'Implementation', amount: '€1,200' },
        ].map((line) => (
          <div key={line.item} className="flex justify-between text-[10px]">
            <span className="text-offwhite/70">{line.item}</span>
            <span className="text-offwhite">{line.amount}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-mint/10 pt-2 flex justify-between">
        <span className="text-[10px] font-semibold text-offwhite">Total</span>
        <span className="text-sm font-bold text-mint">€3,600</span>
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
        <div key={exp.desc} className="flex items-center justify-between p-2 bg-ink/30 rounded-lg">
          <span className="text-[10px] text-offwhite">{exp.desc}</span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-offwhite/70">{exp.amount}</span>
            <span className={cn(
              'px-1.5 py-0.5 rounded text-[8px]',
              exp.status === 'approved' ? 'bg-mint/20 text-mint' : 'bg-lavender/20 text-lavender'
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
        <div key={item} className="flex items-center justify-between p-2 bg-ink/30 rounded-lg">
          <span className="text-[10px] text-offwhite">{item}</span>
          <button
            onClick={() => setApproved(approved.includes(i) ? approved.filter(x => x !== i) : [...approved, i])}
            className={cn(
              'px-2 py-1 rounded text-[9px] font-semibold transition-colors',
              approved.includes(i)
                ? 'bg-mint text-ink'
                : 'bg-mint/20 text-mint hover:bg-mint/30'
            )}
          >
            {approved.includes(i) ? 'Approved' : 'Approve'}
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
        { label: 'Revenue', value: '€24.5k', trend: '+12%' },
        { label: 'Pending', value: '€3.2k', trend: '5 invoices' },
        { label: 'Expenses', value: '€8.1k', trend: '-3%' },
        { label: 'Net', value: '€16.4k', trend: '+8%' },
      ].map((stat) => (
        <div key={stat.label} className="bg-ink/30 rounded-lg p-2">
          <div className="text-[8px] text-offwhite/50 uppercase">{stat.label}</div>
          <div className="text-sm font-bold text-offwhite">{stat.value}</div>
          <div className="text-[9px] text-mint">{stat.trend}</div>
        </div>
      ))}
    </div>
  );
};

// Inventory Preview Tabs
export const InventoryItemsPreview: React.FC = () => {
  return (
    <div className="w-full h-full space-y-1.5">
      <div className="flex text-[9px] text-offwhite/50 pb-1 border-b border-mint/10">
        <span className="flex-1">Item</span>
        <span className="w-16 text-center">Stock</span>
        <span className="w-16 text-center">Status</span>
      </div>
      {[
        { name: 'Widget A', stock: 45, status: 'ok' },
        { name: 'Gadget B', stock: 12, status: 'low' },
        { name: 'Part C', stock: 128, status: 'ok' },
      ].map((item) => (
        <div key={item.name} className="flex items-center text-[10px]">
          <span className="flex-1 text-offwhite">{item.name}</span>
          <span className="w-16 text-center text-offwhite/70">{item.stock}</span>
          <span className={cn(
            'w-16 text-center px-1.5 py-0.5 rounded text-[8px]',
            item.status === 'ok' ? 'bg-mint/20 text-mint' : 'bg-magenta/20 text-magenta'
          )}>
            {item.status === 'ok' ? 'In Stock' : 'Low'}
          </span>
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
        <div key={loc.name} className="bg-ink/30 rounded-lg p-2 text-center">
          <div className="text-[10px] text-offwhite mb-1">{loc.name}</div>
          <div className="text-lg font-bold text-mint">{loc.items}</div>
          <div className="text-[8px] text-offwhite/50">items</div>
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
            'p-2 rounded-lg border transition-all duration-300',
            pulse ? 'bg-magenta/20 border-magenta' : 'bg-ink/30 border-magenta/30'
          )}
        >
          <div className="flex justify-between mb-1">
            <span className="text-[10px] text-offwhite">{item.name}</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-magenta/20 text-magenta">
              Reorder
            </span>
          </div>
          <div className="flex items-center gap-2 text-[9px]">
            <span className="text-magenta">{item.current}</span>
            <span className="text-offwhite/30">/</span>
            <span className="text-offwhite/50">{item.threshold} min</span>
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
        <div key={item.asset} className="flex items-center justify-between p-2 bg-ink/30 rounded-lg">
          <div>
            <div className="text-[10px] text-offwhite">{item.asset}</div>
            <div className="text-[8px] text-offwhite/50">{item.assignee}</div>
          </div>
          <div className={cn(
            'w-2 h-2 rounded-full',
            item.status === 'assigned' ? 'bg-mint' : 'bg-lavender'
          )} />
        </div>
      ))}
    </div>
  );
};

// Tasks Preview Tabs
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
            i === highlight ? 'bg-mint/20 text-mint' : 'text-offwhite/50'
          )}>
            {col}
          </div>
          <div className="flex-1 bg-ink/30 rounded p-1 space-y-1">
            {[1, 2].map((_, j) => (
              <div
                key={j}
                className={cn(
                  'h-6 rounded bg-ink/50',
                  'transition-all duration-300',
                  i === highlight && j === 0 && 'ring-1 ring-mint/50'
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
        <div key={item.task} className="flex items-center gap-2 p-2 bg-ink/30 rounded-lg">
          <div className="w-3 h-3 rounded border border-offwhite/30" />
          <span className="flex-1 text-[10px] text-offwhite">{item.task}</span>
          <span className={cn(
            'px-1.5 py-0.5 rounded text-[8px]',
            item.priority === 'high' ? 'bg-magenta/20 text-magenta' :
            item.priority === 'medium' ? 'bg-lavender/20 text-lavender' :
            'bg-mint/20 text-mint'
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
        <div key={item} className="flex items-center justify-between p-2 bg-ink/30 rounded-lg">
          <div className="flex items-center gap-2">
            <div className={cn(
              'w-4 h-4 rounded-full flex items-center justify-center text-[10px]',
              approved.includes(i) ? 'bg-mint text-ink' : 'bg-offwhite/10 text-offwhite/50'
            )}>
              {approved.includes(i) ? '✓' : i + 1}
            </div>
            <span className="text-[10px] text-offwhite">{item}</span>
          </div>
          <button
            onClick={() => setApproved(approved.includes(i) ? approved.filter(x => x !== i) : [...approved, i])}
            className={cn(
              'px-2 py-0.5 rounded text-[8px] font-semibold',
              approved.includes(i) ? 'bg-mint/20 text-mint' : 'bg-lavender/20 text-lavender'
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
      <div className="flex justify-between text-[8px] text-offwhite/50 mb-2">
        <span>This Week</span>
        <span>Next Week</span>
      </div>
      <div className="flex-1 relative">
        {/* Timeline bars */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-mint/20 rounded" style={{ width: '70%' }} />
        <div className="absolute top-5 left-[20%] right-0 h-4 bg-lavender/20 rounded" style={{ width: '50%' }} />
        <div className="absolute top-10 left-[40%] right-0 h-4 bg-plate-blue/30 rounded" style={{ width: '40%' }} />
      </div>
      <div className="flex gap-2 mt-2">
        {['Project A', 'Project B', 'Project C'].map((p, i) => (
          <span key={p} className="text-[8px] text-offwhite/50">{p}</span>
        ))}
      </div>
    </div>
  );
};
