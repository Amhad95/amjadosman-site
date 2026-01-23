import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { siteContent } from '@/lib/content';

const Contact = () => {
  const { contact } = siteContent;
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <SectionHeader headline={contact.hero.headline} subheadline={contact.hero.subheadline} variant="poster" />
          <form className="space-y-6 mb-8">
            <div><label className="block text-sm font-medium mb-2">Name</label><input type="text" className="w-full h-12 px-4 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50" required /></div>
            <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" className="w-full h-12 px-4 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50" required /></div>
            <div><label className="block text-sm font-medium mb-2">Message</label><textarea className="w-full px-4 py-3 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50" rows={6} required /></div>
            <PrimaryButton type="submit">{contact.form.submitLabel}</PrimaryButton>
          </form>
          <p className="text-muted-foreground">{contact.directEmail.label}: <a href={`mailto:${contact.directEmail.email}`} className="text-lavender hover:underline">{contact.directEmail.email}</a></p>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
