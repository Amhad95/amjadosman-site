import React from 'react';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { useLocale } from '@/lib/locale';

interface ToolInputFormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  submitLabel?: string;
  className?: string;
}

export const ToolInputForm: React.FC<ToolInputFormProps> = ({
  children,
  onSubmit,
  isLoading,
  submitLabel = 'Generate',
  className,
}) => {
  const { locale, isRTL } = useLocale();
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'bg-card border border-border rounded-2xl p-6 md:p-8',
        isRTL && 'text-right',
        className
      )}
    >
      <div className="space-y-5">
        {children}
      </div>
      <div className="mt-6">
        <PrimaryButton
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          {isLoading
            ? locale === 'ar'
              ? 'جارٍ التوليد...'
              : 'Generating...'
            : submitLabel}
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ToolInputForm;
