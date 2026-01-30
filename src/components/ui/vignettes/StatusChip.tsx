import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 'active' | 'qualified' | 'new' | 'inactive' | 'pending' | 'approved' | 'overdue' | 'won' | 'lost';

interface StatusChipProps {
  status: StatusType;
  size?: 'sm' | 'md';
  className?: string;
}

const statusStyles: Record<StatusType, { bg: string; text: string; label: string }> = {
  active: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Active' },
  qualified: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Qualified' },
  new: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'New' },
  inactive: { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Inactive' },
  pending: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Pending' },
  approved: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Approved' },
  overdue: { bg: 'bg-red-100', text: 'text-red-700', label: 'Overdue' },
  won: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Won' },
  lost: { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Lost' },
};

export const StatusChip: React.FC<StatusChipProps> = ({ 
  status, 
  size = 'sm',
  className 
}) => {
  const style = statusStyles[status];
  
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        style.bg,
        style.text,
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs',
        className
      )}
    >
      {style.label}
    </span>
  );
};

export default StatusChip;
