import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { useSiteContent } from '@/lib/content';
import { buildMailtoHref } from '@/lib/mailto';
import { useLocale } from '@/lib/locale';
import { KnotAnimation } from '@/components/ui/knot-animation';
import { usePageMeta } from '@/hooks/use-page-meta';
import { cn } from '@/lib/utils';

type SubmissionState = 'idle' | 'submitting' | 'sent' | 'fallback';

const submissionCopy = {
  en: {
    sending: 'Sending…',
    sent: 'Message sent. I’ll reply at the email you provided.',
    fallback: 'Your mail app is opening with the message ready to send.',
  },
  ar: {
    sending: 'جارٍ الإرسال…',
    sent: 'تم إرسال الرسالة. سأرد على البريد الذي أدخلته.',
    fallback: 'سيتم فتح تطبيق البريد مع تجهيز الرسالة لإرسالها.',
  },
  de: {
    sending: 'Wird gesendet…',
    sent: 'Nachricht gesendet. Ich antworte an die angegebene E-Mail-Adresse.',
    fallback: 'Ihre Mail-App wird mit der vorbereiteten Nachricht geöffnet.',
  },
  fr: {
    sending: 'Envoi…',
    sent: 'Message envoyé. Je répondrai à l’adresse indiquée.',
    fallback: 'Votre application mail s’ouvre avec le message prêt à envoyer.',
  },
  bg: {
    sending: 'Изпращане…',
    sent: 'Съобщението е изпратено. Ще отговоря на посочения имейл.',
    fallback: 'Пощенското приложение ще се отвори с готово съобщение.',
  },
} as const;

const Contact = () => {
  const { contact } = useSiteContent();
  const { locale, isRTL } = useLocale();
  const copy = submissionCopy[locale];
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });

  usePageMeta({ title: `${contact.hero.headline} | Amjad Osman`, description: contact.hero.subheadline });

  const handleChange =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState('submitting');

    const subject = `${contact.form.subject} ${formData.name}`;
    const body = [
      contact.form.newMessage,
      '',
      `${contact.form.nameLabel}: ${formData.name}`,
      `${contact.form.emailLabel}: ${formData.email}`,
      '',
      contact.form.messageHeading,
      formData.message,
    ].join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Contact endpoint unavailable');
      setSubmissionState('sent');
    } catch {
      setSubmissionState('fallback');
      window.location.href = buildMailtoHref(contact.directEmail.email, subject, body);
    }
  };

  return (
    <Layout>
      <Hero
        eyebrow={contact.hero.eyebrow}
        headline={contact.hero.headline}
        subheadline={contact.hero.subheadline}
        credibilityStrip={contact.hero.credibilityStrip}
        plate="astral"
        rightElement={<KnotAnimation speedA={0.018} speedB={0.011} />}
      />

      <section className="bg-background py-16 md:py-24" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className={cn('space-y-5', isRTL && 'text-right')}>
              <div className="colored-surface-shadow rounded-[28px] bg-plate-astral p-6 text-offwhite md:p-8">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-offwhite/60">
                  {contact.hero.eyebrow}
                </p>
                <h2 className="font-serif text-heading-lg text-mint">{contact.hero.headline}</h2>
                <p className="mt-4 text-body-md leading-relaxed text-offwhite/80">
                  {contact.hero.subheadline}
                </p>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-mint/80">
                  {contact.hero.credibilityStrip}
                </p>
              </div>

              <div className="rounded-[24px] border border-ink/10 bg-card p-6 shadow-[0_18px_48px_-42px_rgba(8,15,32,0.3)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {contact.directEmail.label}
                </p>
                <a
                  href={`mailto:${contact.directEmail.email}`}
                  className="mt-3 block break-all font-mono text-sm text-plate-astral hover:text-plate-violet hover:underline"
                >
                  {contact.directEmail.email}
                </a>
              </div>
            </aside>

            <form
              className="overflow-hidden rounded-[28px] border border-ink/10 bg-card shadow-[0_18px_48px_-42px_rgba(8,15,32,0.28)]"
              onSubmit={handleSubmit}
            >
              <div className={cn('border-b border-ink/10 bg-muted/35 px-6 py-5 md:px-8', isRTL && 'text-right')}>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {contact.form.submitLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {contact.hero.credibilityStrip}
                </p>
              </div>

              <div className="space-y-5 p-6 md:p-8">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange('website')}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-foreground">
                    {contact.form.fields[0].label}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    dir={isRTL ? 'rtl' : 'ltr'}
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    className="h-12 w-full rounded-xl border border-ink/15 bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-plate-astral focus:ring-2 focus:ring-plate-astral/20"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">
                    {contact.form.fields[1].label}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    dir="ltr"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className="h-12 w-full rounded-xl border border-ink/15 bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-plate-astral focus:ring-2 focus:ring-plate-astral/20"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">
                    {contact.form.fields[2].label}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    dir={isRTL ? 'rtl' : 'ltr'}
                    value={formData.message}
                    onChange={handleChange('message')}
                    className="min-h-[180px] w-full resize-y rounded-xl border border-ink/15 bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-plate-astral focus:ring-2 focus:ring-plate-astral/20"
                    required
                  />
                </div>
              </div>

              <div className={cn('flex flex-col gap-4 border-t border-ink/10 bg-muted/20 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8', isRTL && 'sm:flex-row-reverse')}>
                <PrimaryButton type="submit" disabled={submissionState === 'submitting'} aria-busy={submissionState === 'submitting'}>
                  {submissionState === 'submitting' ? copy.sending : contact.form.submitLabel}
                </PrimaryButton>
                <div className="max-w-sm text-sm leading-relaxed text-muted-foreground" role="status" aria-live="polite">
                  {submissionState === 'sent' && copy.sent}
                  {submissionState === 'fallback' && copy.fallback}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
