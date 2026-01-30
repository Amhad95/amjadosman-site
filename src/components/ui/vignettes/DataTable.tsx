import React from 'react';
import { cn } from '@/lib/utils';
import { StatusChip } from './StatusChip';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  width?: string;
}

interface Pagination {
  current: number;
  total: number;
  perPage: number;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  selectedRow?: string;
  onRowClick?: (row: Record<string, any>) => void;
  pagination?: Pagination;
  className?: string;
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  selectedRow,
  onRowClick,
  pagination,
  className,
}) => {
  const renderCell = (row: Record<string, any>, column: Column) => {
    const value = row[column.key];
    
    if (column.key === 'status' && typeof value === 'string') {
      return <StatusChip status={value as any} size="sm" />;
    }
    
    if (column.key === 'owner' && typeof value === 'string') {
      return (
        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-medium text-gray-600">
          {value}
        </div>
      );
    }
    
    return <span className="text-gray-700">{value}</span>;
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="grid bg-gray-50 border-b border-gray-200" style={{ 
          gridTemplateColumns: columns.map(c => c.width || '1fr').join(' ') 
        }}>
          {columns.map((column) => (
            <div
              key={column.key}
              className="px-3 py-2 text-[11px] font-semibold text-gray-600 uppercase tracking-wide"
            >
              {column.label}
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-100">
          {data.map((row, i) => (
            <div
              key={row.id || i}
              onClick={() => onRowClick?.(row)}
              className={cn(
                'grid items-center transition-colors',
                onRowClick && 'cursor-pointer hover:bg-gray-50',
                selectedRow === row.id && 'bg-blue-50 hover:bg-blue-50'
              )}
              style={{ 
                gridTemplateColumns: columns.map(c => c.width || '1fr').join(' ') 
              }}
            >
              {columns.map((column) => (
                <div key={column.key} className="px-3 py-2.5 text-xs">
                  {renderCell(row, column)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-between mt-3 px-1">
          <span className="text-[11px] text-gray-500">
            Showing {((pagination.current - 1) * pagination.perPage) + 1}-
            {Math.min(pagination.current * pagination.perPage, pagination.total)} of {pagination.total}
          </span>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-40" disabled={pagination.current === 1}>
              <ChevronLeft className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-1 rounded hover:bg-gray-100" disabled={pagination.current * pagination.perPage >= pagination.total}>
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
