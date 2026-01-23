import React, { useState } from 'react';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
});

interface EmailCaptureProps {
  headline: string;
  description: string;
  buttonLabel: string;
  successMessage: string;
  downloadLabel: string;
  followUpCta?: { label: string; href: string };
  className?: string;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
  headline,
  description,
  buttonLabel,
  successMessage,
  downloadLabel,
  followUpCta,
  className,
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={cn('bg-plate-emerald rounded-2xl p-8 md:p-12', className)}>
        <div className="text-center">
          <p className="text-mint text-lg font-medium mb-6">{successMessage}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton href="#">
              {downloadLabel}
            </PrimaryButton>
            {followUpCta && (
              <SecondaryButton href={followUpCta.href} variant="dark">
                {followUpCta.label}
              </SecondaryButton>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('bg-plate-emerald rounded-2xl p-8 md:p-12', className)}>
      <div className="max-w-xl mx-auto text-center">
        <h3 className="font-serif text-heading-md text-mint mb-3">
          {headline}
        </h3>
        <p className="text-offwhite/80 mb-6">
          {description}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={cn(
                'w-full h-12 px-4 rounded-lg',
                'bg-white/10 text-offwhite placeholder:text-offwhite/50',
                'border border-mint/30 focus:border-mint',
                'focus:outline-none focus:ring-2 focus:ring-mint/50',
                error && 'border-magenta'
              )}
              aria-label="Email address"
            />
            {error && (
              <p className="mt-2 text-sm text-magenta text-left">{error}</p>
            )}
          </div>
          <PrimaryButton type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : buttonLabel}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default EmailCapture;
