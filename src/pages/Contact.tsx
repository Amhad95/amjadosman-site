import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { useSiteContent } from '@/lib/content';
import { buildMailtoHref } from '@/lib/mailto';
import { useLocale } from '@/lib/locale';
import { KnotAnimation } from '@/components/ui/knot-animation';

const Contact = () => {
  const { contact } = useSiteContent();
  const { isRTL } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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

    window.location.href = buildMailtoHref(contact.directEmail.email, subject, body);
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <form className="space-y-6 mb-8" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">{contact.form.fields[0].label}</label>
              <input
                dir={isRTL ? 'rtl' : 'ltr'}
                type="text"
                value={formData.name}
                onChange={handleChange('name')}
                className="w-full h-12 px-4 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{contact.form.fields[1].label}</label>
              <input
                dir="ltr"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                className="w-full h-12 px-4 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{contact.form.fields[2].label}</label>
              <textarea
                dir={isRTL ? 'rtl' : 'ltr'}
                value={formData.message}
                onChange={handleChange('message')}
                className="w-full px-4 py-3 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50"
                rows={6}
                required
              />
            </div>
            <PrimaryButton type="submit">{contact.form.submitLabel}</PrimaryButton>
          </form>
          <p className="text-muted-foreground">
            {contact.directEmail.label}:{' '}
            <a href={`mailto:${contact.directEmail.email}`} className="text-lavender hover:underline">
              {contact.directEmail.email}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
