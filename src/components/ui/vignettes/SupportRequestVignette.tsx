import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { MessageSquare, Check, Clock, Send } from 'lucide-react';

interface SupportRequest {
  id: string;
  title: string;
  status: 'new' | 'in-review' | 'approved' | 'shipped';
  time: string;
}

const initialRequests: SupportRequest[] = [
  { id: '1', title: 'Add new pipeline stage', status: 'shipped', time: '2d ago' },
  { id: '2', title: 'Update approval workflow', status: 'approved', time: '1d ago' },
  { id: '3', title: 'New user permissions', status: 'in-review', time: '4h ago' },
  { id: '4', title: 'Add custom field', status: 'new', time: 'Just now' },
];

const statusConfig = {
  new: { label: 'New', color: 'bg-lavender/20 text-lavender', icon: MessageSquare },
  'in-review': { label: 'In Review', color: 'bg-plate-blue/30 text-plate-blue', icon: Clock },
  approved: { label: 'Approved', color: 'bg-mint/20 text-mint', icon: Check },
  shipped: { label: 'Shipped', color: 'bg-mint text-ink', icon: Send },
};

export const SupportRequestVignette: React.FC<{ className?: string }> = ({ className }) => {
  const reducedMotion = useReducedMotion();
  const [requests, setRequests] = useState(initialRequests);
  const [animatingId, setAnimatingId] = useState<string | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setRequests((prev) => {
        const toUpdate = prev.find(r => r.status !== 'shipped');
        if (!toUpdate) {
          // Reset
          return initialRequests;
        }

        setAnimatingId(toUpdate.id);

        setTimeout(() => {
          setRequests((current) =>
            current.map((r) => {
              if (r.id !== toUpdate.id) return r;
              const statusOrder: SupportRequest['status'][] = ['new', 'in-review', 'approved', 'shipped'];
              const currentIndex = statusOrder.indexOf(r.status);
              return {
                ...r,
                status: statusOrder[Math.min(currentIndex + 1, statusOrder.length - 1)],
              };
            })
          );
          setAnimatingId(null);
        }, 400);

        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className={cn('w-full h-full flex flex-col', className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-mint/10">
        <span className="text-xs font-semibold text-mint">Admin Requests</span>
        <span className="text-[10px] text-offwhite/50">4 total</span>
      </div>

      {/* List */}
      <div className="flex-1 overflow-hidden p-2 space-y-2">
        {requests.map((request) => {
          const config = statusConfig[request.status];
          const Icon = config.icon;
          const isAnimating = animatingId === request.id;

          return (
            <div
              key={request.id}
              className={cn(
                'flex items-center gap-3 p-2 rounded-lg',
                'bg-ink/30 border border-mint/10',
                'transition-all duration-400',
                isAnimating && 'scale-[1.02] shadow-lg shadow-mint/20'
              )}
            >
              <div className={cn(
                'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
                'transition-all duration-300',
                config.color
              )}>
                <Icon size={12} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-offwhite truncate">
                  {request.title}
                </div>
                <div className="text-[9px] text-offwhite/50">{request.time}</div>
              </div>
              <span className={cn(
                'px-2 py-0.5 rounded-full text-[9px] font-semibold',
                'transition-all duration-300',
                config.color
              )}>
                {config.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportRequestVignette;
