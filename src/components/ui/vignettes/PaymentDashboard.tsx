import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const invoices = [
  { id: 'INV-1041', client: 'TechStart', amount: '$4,200', status: 'paid' },
  { id: 'INV-1042', client: 'GlobalFin', amount: '$12,000', status: 'pending' },
  { id: 'INV-1043', client: 'RetailMax', amount: '$6,800', status: 'overdue' },
];

export const PaymentDashboard: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [statuses, setStatuses] = useState(invoices.map(i => i.status));
  const [progress, setProgress] = useState(45);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setStatuses((prev) => {
        const newStatuses = [...prev];
        const index = Math.floor(Math.random() * newStatuses.length);
        if (newStatuses[index] === 'overdue') {
          newStatuses[index] = 'pending';
        } else if (newStatuses[index] === 'pending') {
          newStatuses[index] = 'paid';
        } else {
          newStatuses[index] = 'pending';
        }
        return newStatuses;
      });

      setProgress((prev) => {
        const newVal = prev + Math.random() * 15 - 5;
        return Math.max(30, Math.min(85, newVal));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-100 text-emerald-700';
      case 'pending':
        return 'bg-amber-100 text-amber-700';
      case 'overdue':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-3 gap-3">
      {/* Summary Cards */}
      <div className="flex gap-2">
        <div className="flex-1 bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
          <div className="text-[10px] text-gray-500">Revenue</div>
          <div className="text-sm font-bold text-gray-900">$23,000</div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
          <div className="text-[10px] text-gray-500">Outstanding</div>
          <div className="text-sm font-bold text-gray-900">$18,800</div>
        </div>
        <div className="flex-1 bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
          <div className="text-[10px] text-gray-500">Collection</div>
          <div className="flex items-center gap-1">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] text-emerald-600 font-medium">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Invoice List */}
      <div className="flex-1 bg-white rounded-lg overflow-hidden border border-gray-200">
        <div className="grid grid-cols-4 text-[9px] text-gray-500 font-medium p-2 border-b border-gray-200 bg-gray-50">
          <span>Invoice</span>
          <span>Client</span>
          <span className="text-right">Amount</span>
          <span className="text-center">Status</span>
        </div>
        {invoices.map((inv, index) => (
          <div 
            key={inv.id} 
            className="grid grid-cols-4 text-[10px] p-2 border-b border-gray-100 items-center"
          >
            <span className="text-gray-900 font-medium">{inv.id}</span>
            <span className="text-gray-600">{inv.client}</span>
            <span className="text-gray-900 text-right font-medium">{inv.amount}</span>
            <div className="flex justify-center">
              <span className={cn(
                'px-1.5 py-0.5 rounded-full text-[8px] capitalize font-medium transition-all duration-300',
                getStatusStyle(statuses[index])
              )}>
                {statuses[index]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentDashboard;
