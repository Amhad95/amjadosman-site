import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BookingProvider } from '@/contexts/BookingContext';
import { BookingModal } from '@/components/shared/BookingModal';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-mint focus:text-ink focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <BookingModal />
      </div>
    </BookingProvider>
  );
};

export default Layout;
