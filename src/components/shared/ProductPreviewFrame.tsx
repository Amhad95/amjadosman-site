import React from 'react';
import { cn } from '@/lib/utils';

interface ProductPreviewFrameProps {
  children: React.ReactNode;
  variant?: 'browser' | 'card' | 'minimal';
  title?: string;
  className?: string;
}

export const ProductPreviewFrame: React.FC<ProductPreviewFrameProps> = ({
  children,
  variant = 'browser',
  title = 'Product Preview',
  className,
}) => {
  if (variant === 'minimal') {
    return (
      <div className={cn(
        'bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden',
        className
      )}>
        {children}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={cn(
        'bg-gray-50 rounded-xl shadow-xl border border-gray-200 p-6 overflow-hidden',
        className
      )}>
        {children}
      </div>
    );
  }

  // Browser variant (default)
  return (
    <div className={cn(
      'bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden',
      className
    )}>
      {/* Browser Chrome */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        
        {/* URL bar */}
        <div className="flex-1 max-w-md">
          <div className="bg-white rounded-md px-3 py-1.5 text-xs text-gray-500 border border-gray-200">
            <span className="text-green-600">●</span>
            <span className="ml-2">{title.toLowerCase().replace(/\s+/g, '')}.adsi.cloud</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-gray-50">
        {children}
      </div>
    </div>
  );
};

export default ProductPreviewFrame;
