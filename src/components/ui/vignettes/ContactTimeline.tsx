import React from 'react';
import { User, Mail, Phone, Calendar } from 'lucide-react';

const activities = [
  { icon: Mail, text: 'Email sent: Proposal follow-up', time: '2h ago' },
  { icon: Phone, text: 'Call completed: 15 min', time: '1d ago' },
  { icon: Calendar, text: 'Meeting scheduled: Demo', time: '3d ago' },
  { icon: Mail, text: 'Email opened: Introduction', time: '5d ago' },
];

export const ContactTimeline: React.FC = () => {
  return (
    <div className="w-full h-full flex gap-3 p-3">
      {/* Contact Card */}
      <div className="w-1/3 bg-white rounded-lg p-3 border border-gray-200">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
          <span className="text-sm font-semibold text-gray-600">SC</span>
        </div>
        <div className="text-sm font-semibold text-gray-900">Sarah Chen</div>
        <div className="text-xs text-gray-500">VP of Operations</div>
        <div className="text-xs text-gray-400 mt-0.5">Acme Corp</div>
        <div className="mt-3 pt-2 border-t border-gray-100">
          <div className="text-[10px] text-gray-400 uppercase tracking-wide">Deal Value</div>
          <div className="text-sm font-bold text-gray-900">$24,000</div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="flex-1 space-y-1.5 overflow-hidden">
        <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Recent Activity</div>
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-2 p-2 rounded-md bg-gray-50 border border-gray-100"
            >
              <Icon size={12} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-gray-700 truncate">{activity.text}</div>
                <div className="text-[9px] text-gray-400">{activity.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactTimeline;
