import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransitionShell } from '@/components/motion/PageTransitionShell';
import { Reveal, MotionVariant } from '@/components/motion/Reveal';
import { useSiteContent } from '@/lib/content';
import { useLocale } from '@/lib/locale';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  motionLevel?: Exclude<MotionVariant, 'hero'>;
}

export const Layout: React.FC<LayoutProps> = ({ children, motionLevel = 'default' }) => {
  const pageSections = React.Children.toArray(children);
  const { common } = useSiteContent();
  const { isRTL } = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className={cn(
          "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:z-50 focus:bg-mint focus:text-foreground focus:px-4 focus:py-2 focus:rounded-lg",
          isRTL ? "focus:right-4" : "focus:left-4"
        )}
      >
        {common.skipToContent}
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <PageTransitionShell>
          {pageSections.map((child, index) => {
            if (index === 0) {
              return child;
            }

            return (
              <Reveal
                key={React.isValidElement(child) && child.key != null ? child.key : `layout-section-${index}`}
                variant={motionLevel}
              >
                {child}
              </Reveal>
            );
          })}
        </PageTransitionShell>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
