import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { AppTopBar } from './AppTopBar';
import { useLocale } from '@/lib/locale';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabbedProductPreviewProps {
  tabs: Tab[];
  className?: string;
  autoRotate?: boolean;
  rotateInterval?: number;
  searchPlaceholder?: string;
  filters?: { label: string; active?: boolean }[];
}

export const TabbedProductPreview: React.FC<TabbedProductPreviewProps> = ({
  tabs,
  className,
  autoRotate = true,
  rotateInterval = 4000,
  searchPlaceholder = 'Search...',
  filters = [],
}) => {
  const { isRTL } = useLocale();
  const reducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion || !autoRotate || isHovered) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [reducedMotion, autoRotate, rotateInterval, tabs.length, isHovered]);

  return (
    <div
      className={cn('flex flex-col h-full bg-white', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* App Top Bar */}
      <AppTopBar
        searchPlaceholder={searchPlaceholder}
        filters={filters}
        showUser={true}
        userInitials="JD"
      />

      {/* Tab bar - neutral with underline indicator */}
      <div className={cn('flex border-b border-gray-200 bg-white', isRTL && 'flex-row-reverse')}>
        {(isRTL ? [...tabs].reverse() : tabs).map((tab, renderIndex) => {
          const index = isRTL ? tabs.length - 1 - renderIndex : renderIndex;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                'flex-1 px-4 py-2.5 text-xs font-medium',
                'transition-all duration-200 relative',
                activeTab === index
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              )}
            >
              {tab.label}
              {/* Active indicator */}
              <div
                className={cn(
                  'absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-200',
                  activeTab === index ? 'bg-gray-900' : 'bg-transparent'
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Content area - neutral white background */}
      <div className="flex-1 relative bg-gray-50 overflow-hidden">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={cn(
              'absolute inset-0',
              'transition-all duration-300 ease-out',
              activeTab === index
                ? 'opacity-100 translate-x-0'
                : index < activeTab
                  ? cn('opacity-0 pointer-events-none', isRTL ? 'translate-x-4' : '-translate-x-4')
                  : cn('opacity-0 pointer-events-none', isRTL ? '-translate-x-4' : 'translate-x-4')
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedProductPreview;
