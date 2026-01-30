import React from 'react';
import { cn } from '@/lib/utils';
import { Search, Settings, ChevronDown } from 'lucide-react';

interface Filter {
  label: string;
  active?: boolean;
}

interface AppTopBarProps {
  searchPlaceholder?: string;
  filters?: Filter[];
  showUser?: boolean;
  userInitials?: string;
  onFilterClick?: (label: string) => void;
  className?: string;
}

export const AppTopBar: React.FC<AppTopBarProps> = ({
  searchPlaceholder = 'Search...',
  filters = [],
  showUser = true,
  userInitials = 'JD',
  onFilterClick,
  className,
}) => {
  return (
    <div className={cn(
      'flex items-center justify-between gap-3 px-4 py-2 bg-gray-50 border-b border-gray-200',
      className
    )}>
      {/* Search */}
      <div className="flex-1 max-w-xs">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400"
            readOnly
          />
        </div>
      </div>

      {/* Filters */}
      {filters.length > 0 && (
        <div className="flex items-center gap-1">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => onFilterClick?.(filter.label)}
              className={cn(
                'flex items-center gap-1 px-2.5 py-1.5 text-[11px] rounded-md transition-colors',
                filter.active
                  ? 'bg-gray-900 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              )}
            >
              {filter.label}
              <ChevronDown className="w-3 h-3" />
            </button>
          ))}
        </div>
      )}

      {/* User avatar & settings */}
      <div className="flex items-center gap-2">
        {showUser && (
          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-medium text-gray-600">
            {userInitials}
          </div>
        )}
        <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors">
          <Settings className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default AppTopBar;
