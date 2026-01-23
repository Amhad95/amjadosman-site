import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { siteContent } from '@/lib/content';

const Book = () => {
  const { book } = siteContent;
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <SectionHeader headline={book.hero.headline} subheadline={book.hero.subheadline} variant="poster" />
          <form className="space-y-6 mb-12">
            <div><label className="block text-sm font-medium mb-2">Name</label><input type="text" className="w-full h-12 px-4 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50" required /></div>
            <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" className="w-full h-12 px-4 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50" required /></div>
            <div><label className="block text-sm font-medium mb-2">Company</label><input type="text" className="w-full h-12 px-4 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50" required /></div>
            <div><label className="block text-sm font-medium mb-2">What do you need?</label>
              <select className="w-full h-12 px-4 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50" required>
                <option value="">Select an option</option>
                {book.form.fields.find(f => f.name === 'needs')?.options?.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
              </select>
            </div>
            <div><label className="block text-sm font-medium mb-2">Brief description</label><textarea className="w-full px-4 py-3 rounded-lg border border-ink/20 focus:border-mint focus:ring-2 focus:ring-mint/50" rows={4} /></div>
            <PrimaryButton type="submit">{book.form.submitLabel}</PrimaryButton>
          </form>
          <div className="bg-muted rounded-2xl p-6">
            <h3 className="font-serif text-lg mb-4">{book.nextSteps.headline}</h3>
            <ol className="space-y-2">{book.nextSteps.steps.map((s, i) => <li key={i} className="text-sm text-muted-foreground">{i + 1}. {s}</li>)}</ol>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Book;
