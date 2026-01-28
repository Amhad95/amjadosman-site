import React from 'react';
import { cn } from '@/lib/utils';

interface ComparisonRow {
  category: string;
  crm: string;
  accounting: string;
  inventory: string;
  tasks: string;
}

const comparisonData: ComparisonRow[] = [
  {
    category: 'Primary users',
    crm: 'Sales, Account Managers',
    accounting: 'Finance, Operations',
    inventory: 'Warehouse, Ops, IT',
    tasks: 'All teams, Project leads',
  },
  {
    category: 'Core workflow',
    crm: 'Pipeline and follow-up',
    accounting: 'Invoices and expenses',
    inventory: 'Stock and asset tracking',
    tasks: 'Assignment and delivery',
  },
  {
    category: 'Typical setup items',
    crm: 'Stages, fields, templates',
    accounting: 'Categories, approvals',
    inventory: 'Locations, thresholds',
    tasks: 'Workflows, checklists',
  },
  {
    category: 'Reporting',
    crm: 'Pipeline value, activity',
    accounting: 'Cash flow, aging',
    inventory: 'Stock levels, reorders',
    tasks: 'Completion, workload',
  },
];

const products = ['CRM', 'Accounting', 'Inventory', 'Tasks'];

export const ComparisonTable: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('w-full overflow-x-auto', className)}>
      <div className="min-w-[700px]">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Feature
          </div>
          {products.map((product) => (
            <div
              key={product}
              className={cn(
                'text-center py-3 px-4 rounded-xl',
                'bg-plate-astral text-mint font-serif text-lg'
              )}
            >
              {product}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {comparisonData.map((row, index) => (
            <div
              key={row.category}
              className={cn(
                'grid grid-cols-5 gap-4 py-4 px-4 rounded-xl',
                'transition-colors duration-200',
                index % 2 === 0 ? 'bg-muted/50' : 'bg-card',
                'hover:bg-muted'
              )}
            >
              <div className="text-sm font-semibold text-foreground">
                {row.category}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {row.crm}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {row.accounting}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {row.inventory}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {row.tasks}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
