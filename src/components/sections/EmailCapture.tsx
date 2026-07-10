import React, { useState } from 'react';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { SecondaryButton } from '@/components/shared/SecondaryButton';
import { useLocale } from '@/lib/locale';

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
  const { locale, isRTL } = useLocale();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('/downloads/self-help-tools-starter-pack.md');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailSchema = z.object({
      email: z
        .string()
        .trim()
        .email({
          message:
            locale === 'ar'
              ? 'يرجى إدخال بريد إلكتروني صالح'
              : 'Please enter a valid email address',
        })
        .max(255),
    });

    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/email-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: result.data.email }),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string; downloadUrl?: string } | null;
      if (!response.ok) throw new Error(payload?.error ?? 'The download could not be prepared.');
      if (payload?.downloadUrl) setDownloadUrl(payload.downloadUrl);
      setIsSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'The download could not be prepared.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className={cn('bg-plate-emerald rounded-[34px] p-8 md:p-12 shadow-[0_22px_56px_-44px_rgba(8,15,32,0.22)]', className)}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className={cn('text-center', isRTL && 'text-right')}>
          <p className="text-mint text-lg font-medium mb-6">{successMessage}</p>
          <div className={cn('flex flex-col sm:flex-row items-center justify-center gap-4')}>
            <a
              href={downloadUrl}
              download
              className="inline-flex h-12 items-center justify-center rounded-lg bg-mint px-5 text-base font-semibold text-plate-emerald transition-colors hover:bg-mint/90 focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-offset-2"
            >{downloadLabel}</a>
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
    <div 
      className={cn('bg-plate-emerald rounded-[34px] p-8 md:p-12 shadow-[0_22px_56px_-44px_rgba(8,15,32,0.22)]', className)}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className={cn('max-w-xl mx-auto text-center', isRTL && 'text-right')}>
        <h3 className="font-serif text-heading-md text-mint mb-3">
          {headline}
        </h3>
        <p className="text-offwhite/80 mb-6">
          {description}
        </p>
        
        <form onSubmit={handleSubmit} className={cn('flex flex-col sm:flex-row gap-3')}>
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={locale === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              className={cn(
                'w-full h-12 px-4 rounded-lg',
                'bg-white/10 text-offwhite placeholder:text-offwhite/50',
                'border border-mint/30 focus:border-mint',
                'focus:outline-none focus:ring-2 focus:ring-mint/50',
                error && 'border-magenta',
                isRTL && 'text-right'
              )}
              aria-label={locale === 'ar' ? 'البريد الإلكتروني' : 'Email address'}
              dir="ltr"
            />
            {error && (
              <p className={cn('mt-2 text-sm text-magenta text-left', isRTL && 'text-right')}>
                {error}
              </p>
            )}
          </div>
          <PrimaryButton type="submit" disabled={isLoading}>
            {isLoading ? (locale === 'ar' ? 'جارٍ الإرسال...' : 'Sending...') : buttonLabel}
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default EmailCapture;
