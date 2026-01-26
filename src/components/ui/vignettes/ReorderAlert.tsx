import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AlertTriangle, Package, ArrowRight, Check } from 'lucide-react';

interface Alert {
  id: string;
  item: string;
  stock: number;
  threshold: number;
  status: 'new' | 'acknowledged' | 'ordered';
}

const initialAlerts: Alert[] = [
  { id: '1', item: 'Wireless Mouse', stock: 3, threshold: 10, status: 'new' },
  { id: '2', item: 'USB-C Cables', stock: 5, threshold: 15, status: 'new' },
  { id: '3', item: 'Webcam HD', stock: 2, threshold: 8, status: 'acknowledged' },
];

export const ReorderAlert: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [alerts, setAlerts] = useState(initialAlerts);
  const [newAlertVisible, setNewAlertVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const interval = setInterval(() => {
      // Cycle through states
      setAlerts((prev) => {
        return prev.map((alert, index) => {
          if (index === 0) {
            const nextStatus = alert.status === 'new' ? 'acknowledged' : 
                               alert.status === 'acknowledged' ? 'ordered' : 'new';
            return { ...alert, status: nextStatus };
          }
          return alert;
        });
      });

      // Flash new alert indicator
      setNewAlertVisible(true);
      setTimeout(() => setNewAlertVisible(false), 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ordered':
        return <Check size={10} className="text-mint" />;
      case 'acknowledged':
        return <ArrowRight size={10} className="text-lavender" />;
      default:
        return <AlertTriangle size={10} className="text-red-400" />;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'ordered':
        return 'bg-mint/20 text-mint border-mint/30';
      case 'acknowledged':
        return 'bg-lavender/20 text-lavender border-lavender/30';
      default:
        return 'bg-red-500/20 text-red-400 border-red-500/30';
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-3 gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package size={14} className="text-mint" />
          <span className="text-xs font-semibold text-offwhite">Reorder Alerts</span>
        </div>
        <div className={cn(
          'flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px]',
          'transition-all duration-300',
          newAlertVisible 
            ? 'bg-red-500/30 text-red-400 animate-pulse' 
            : 'bg-ink/40 text-offwhite/60'
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {alerts.filter(a => a.status === 'new').length} new
        </div>
      </div>

      {/* Alert Cards */}
      <div className="flex-1 space-y-2 overflow-hidden">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            className={cn(
              'p-2.5 rounded-lg border transition-all duration-500',
              getStatusStyle(alert.status),
              index === 0 && 'ring-1 ring-offset-1 ring-offset-plate-astral ring-current'
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="text-[11px] font-medium">{alert.item}</div>
                <div className="text-[9px] opacity-70">
                  Stock: {alert.stock} / Min: {alert.threshold}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {getStatusIcon(alert.status)}
                <span className="text-[8px] uppercase font-semibold">
                  {alert.status}
                </span>
              </div>
            </div>
            {/* Progress bar showing stock level */}
            <div className="mt-2 h-1 bg-black/20 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{ 
                  width: `${(alert.stock / alert.threshold) * 100}%`,
                  backgroundColor: 'currentColor',
                  opacity: 0.6
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReorderAlert;
