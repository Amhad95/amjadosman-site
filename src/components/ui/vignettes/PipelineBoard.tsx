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

export const PipelineBoard: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [deals, setDeals] = useState(initialDeals);
  const [movingDeal, setMovingDeal] = useState<string | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setDeals((prev) => {
        const newDeals = prev.map(col => [...col]);
        
        // Find a deal to move
        for (let i = 0; i < 2; i++) {
          if (newDeals[i].length > 0) {
            const dealToMove = newDeals[i][0];
            setMovingDeal(dealToMove.id);
            
            setTimeout(() => {
              setDeals((current) => {
                const updated = current.map(col => [...col]);
                const fromCol = updated[i].findIndex(d => d.id === dealToMove.id);
                if (fromCol !== -1) {
                  updated[i].splice(fromCol, 1);
                  updated[i + 1].push(dealToMove);
                }
                return updated;
              });
              setMovingDeal(null);
            }, 300);
            
            break;
          }
        }
        
        return prev;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  // Reset deals periodically
  useEffect(() => {
    if (reducedMotion) return;
    
    const resetInterval = setInterval(() => {
      setDeals(initialDeals);
    }, 16000);

    return () => clearInterval(resetInterval);
  }, [reducedMotion]);

  return (
    <div className="w-full h-full flex gap-2 p-2">
      {columns.map((col, colIndex) => (
        <div key={col} className="flex-1 flex flex-col">
          <div className="text-xs font-semibold text-mint/70 mb-2 text-center">
            {col}
          </div>
          <div className="flex-1 bg-ink/30 rounded-lg p-1.5 space-y-1.5">
            {deals[colIndex].map((deal) => (
              <div
                key={deal.id}
                className={cn(
                  'bg-ink/60 rounded-md p-2 border border-mint/10',
                  'transition-all duration-300',
                  movingDeal === deal.id && 'opacity-50 scale-95'
                )}
              >
                <div className="text-xs font-medium text-offwhite truncate">
                  {deal.name}
                </div>
                <div className="text-[10px] text-mint/80">{deal.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PipelineBoard;
