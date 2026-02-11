import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Deal {
  id: string;
  name: string;
  value: string;
}

const initialDeals: Deal[][] = [
  [
    { id: '1', name: 'Acme Corp', value: '$12,000' },
    { id: '2', name: 'TechStart', value: '$8,500' },
  ],
  [
    { id: '3', name: 'GlobalFin', value: '$24,000' },
  ],
  [
    { id: '4', name: 'RetailMax', value: '$15,000' },
  ],
];

const columns = ['Qualified', 'Proposal', 'Closed'];

// Flatten all deals into an ordered list for cycling
const allDeals = initialDeals.flatMap((col, colIndex) =>
  col.map((deal) => ({ ...deal, colIndex }))
);

export const PipelineBoard: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [deals] = useState(initialDeals);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || isHovered) return;
    let index = 0;
    const interval = setInterval(() => {
      setHighlightedId(allDeals[index].id);
      index = (index + 1) % allDeals.length;
    }, 2000);
    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  return (
    <div
      className="w-full h-full flex gap-2 p-3 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {columns.map((col, colIndex) => (
        <div key={col} className="flex-1 flex flex-col">
          <div className="text-xs font-semibold text-gray-600 mb-2 text-center">
            {col}
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-1.5 space-y-1.5 border border-gray-200">
            {deals[colIndex].map((deal) => (
              <div
                key={deal.id}
                className={cn(
                  'bg-white rounded-md p-2 border border-gray-200 shadow-sm',
                  'transition-all duration-300 cursor-pointer',
                  highlightedId === deal.id
                    ? 'scale-[1.04] shadow-md border-gray-300'
                    : 'hover:shadow-md'
                )}
              >
                <div className="text-xs font-medium text-gray-800 truncate">
                  {deal.name}
                </div>
                <div className="text-[10px] text-gray-500">{deal.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PipelineBoard;
