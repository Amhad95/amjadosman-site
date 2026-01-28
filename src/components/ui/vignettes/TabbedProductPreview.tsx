import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

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
}

export const TabbedProductPreview: React.FC<TabbedProductPreviewProps> = ({
  tabs,
  className,
  autoRotate = true,
  rotateInterval = 4000,
}) => {
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
      className={cn('flex flex-col h-full', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tab bar */}
      <div className="flex gap-1 p-1 bg-ink/40 rounded-t-xl">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={cn(
              'flex-1 px-3 py-2 text-xs font-semibold rounded-lg',
              'transition-all duration-200',
              activeTab === index
                ? 'bg-mint text-ink'
                : 'text-offwhite/70 hover:text-offwhite hover:bg-ink/40'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="flex-1 relative bg-ink/20 rounded-b-xl overflow-hidden">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={cn(
              'absolute inset-0 p-4',
              'transition-all duration-300 ease-out',
              activeTab === index
                ? 'opacity-100 translate-x-0'
                : index < activeTab
                  ? 'opacity-0 -translate-x-4'
                  : 'opacity-0 translate-x-4'
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
