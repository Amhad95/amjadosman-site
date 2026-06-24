import React from 'react';
import { cn } from '@/lib/utils';
import { X, Mail, Phone, Building2, Calendar, Tag } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useLocale } from '@/lib/locale';

interface Activity {
  type: 'email' | 'call' | 'meeting' | 'note';
  description: string;
  time: string;
}

interface DetailDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  contact?: {
    name: string;
    company: string;
    role: string;
    email: string;
    phone: string;
    tags: string[];
  };
  activities?: Activity[];
  className?: string;
}

const activityIcons = {
  email: Mail,
  call: Phone,
  meeting: Calendar,
  note: Tag,
};

export const DetailDrawer: React.FC<DetailDrawerProps> = ({
  isOpen,
  onClose,
  contact,
  activities = [],
  className,
}) => {
  const reducedMotion = useReducedMotion();
  const { locale, isRTL } = useLocale();

  if (!isOpen || !contact) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'absolute inset-0 bg-black/10 z-10',
          !reducedMotion && 'transition-opacity duration-200'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'absolute top-0 bottom-0 w-64 bg-white z-20 overflow-y-auto',
          isRTL ? 'left-0 border-r border-gray-200' : 'right-0 border-l border-gray-200',
          !reducedMotion && 'transition-transform duration-200',
          isOpen ? 'translate-x-0' : isRTL ? '-translate-x-full' : 'translate-x-full',
          className
        )}
      >
        {/* Header */}
        <div className={cn('flex items-center justify-between p-3 border-b border-gray-100', isRTL && 'flex-row-reverse')}>
          <div className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse text-right')}>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
              {contact.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">{contact.name}</div>
              <div className="text-[10px] text-gray-500">{contact.company}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Contact Info */}
        <div className="p-3 border-b border-gray-100 space-y-2">
          <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">
            {locale === 'ar' ? 'بيانات التواصل' : 'Contact Info'}
          </div>
          <div className="space-y-1.5">
            <div className={cn('flex items-center gap-2 text-[11px]', isRTL && 'flex-row-reverse text-right')}>
              <Building2 className="w-3 h-3 text-gray-400" />
              <span className="text-gray-600">{contact.role}</span>
            </div>
            <div className={cn('flex items-center gap-2 text-[11px]', isRTL && 'flex-row-reverse text-right')}>
              <Mail className="w-3 h-3 text-gray-400" />
              <span className="text-gray-600">{contact.email}</span>
            </div>
            <div className={cn('flex items-center gap-2 text-[11px]', isRTL && 'flex-row-reverse text-right')}>
              <Phone className="w-3 h-3 text-gray-400" />
              <span className="text-gray-600">{contact.phone}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        {contact.tags.length > 0 && (
          <div className="p-3 border-b border-gray-100">
            <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide mb-2">
              {locale === 'ar' ? 'الوسوم' : 'Tags'}
            </div>
            <div className={cn('flex flex-wrap gap-1', isRTL && 'justify-end')}>
              {contact.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Activity Timeline */}
        {activities.length > 0 && (
          <div className="p-3">
            <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide mb-2">
              {locale === 'ar' ? 'آخر النشاطات' : 'Recent Activity'}
            </div>
            <div className="space-y-2">
              {activities.map((activity, i) => {
                const Icon = activityIcons[activity.type];
                return (
                  <div key={i} className={cn('flex gap-2', isRTL && 'flex-row-reverse text-right')}>
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon className="w-2.5 h-2.5 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-gray-700">{activity.description}</div>
                      <div className="text-[10px] text-gray-400">{activity.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailDrawer;
