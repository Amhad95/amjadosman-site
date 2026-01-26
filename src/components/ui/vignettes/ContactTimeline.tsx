import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { User, Mail, Phone, Calendar } from 'lucide-react';

const activities = [
  { icon: Mail, text: 'Email sent: Proposal follow-up', time: '2h ago' },
  { icon: Phone, text: 'Call completed: 15 min', time: '1d ago' },
  { icon: Calendar, text: 'Meeting scheduled: Demo', time: '3d ago' },
  { icon: Mail, text: 'Email opened: Introduction', time: '5d ago' },
];

export const ContactTimeline: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(reducedMotion ? 4 : 0);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCount(4);
      return;
    }

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= 4) {
          setTimeout(() => setVisibleCount(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="w-full h-full flex gap-4 p-3">
      {/* Contact Card */}
      <div className="w-1/3 bg-ink/40 rounded-lg p-3 border border-mint/10">
        <div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center mb-2">
          <User size={20} className="text-mint" />
        </div>
        <div className="text-sm font-semibold text-offwhite">Sarah Chen</div>
        <div className="text-xs text-mint/70">VP of Operations</div>
        <div className="text-xs text-offwhite/50 mt-1">Acme Corp</div>
        <div className="mt-3 pt-2 border-t border-mint/10">
          <div className="text-[10px] text-mint/60">Deal Value</div>
          <div className="text-sm font-semibold text-mint">$24,000</div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="flex-1 space-y-2 overflow-hidden">
        <div className="text-xs font-semibold text-mint/70 mb-2">Recent Activity</div>
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div
              key={index}
              className={cn(
                'flex items-start gap-2 p-2 rounded-md bg-ink/30 border border-mint/5',
                'transition-all duration-500',
                index < visibleCount 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4'
              )}
            >
              <Icon size={12} className="text-mint mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-offwhite truncate">{activity.text}</div>
                <div className="text-[9px] text-offwhite/40">{activity.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactTimeline;
