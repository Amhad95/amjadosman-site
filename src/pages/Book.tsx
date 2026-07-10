import React, { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { useSiteContent } from '@/lib/content';
import { BOOKING_URL } from '@/lib/booking';
import { useLocale } from '@/lib/locale';
import { usePageMeta } from '@/hooks/use-page-meta';

const Book = () => {
  const { book } = useSiteContent();
  const { locale } = useLocale();
  usePageMeta({ title: `${locale === 'ar' ? 'الحجز' : 'Book a Call'} | Amjad Osman`, description: book.hero.subheadline });

  useEffect(() => {
    window.location.replace(BOOKING_URL);
  }, []);

  return (
    <Layout motionLevel="subtle">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <SectionHeader
            eyebrow={locale === 'ar' ? 'الحجز' : 'Booking'}
            headline={book.hero.headline}
            subheadline={book.hero.subheadline}
            variant="poster"
          />
          <div className="rounded-2xl border border-ink/10 bg-muted p-6 md:p-8">
            <p className="text-sm text-muted-foreground mb-6">
              {book.redirectingMessage}
            </p>
            <PrimaryButton href={BOOKING_URL}>{book.openBookingPage}</PrimaryButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Book;
