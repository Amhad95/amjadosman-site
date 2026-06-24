import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { PageTransitionShell } from '@/components/motion/PageTransitionShell';
import { Reveal, MotionVariant } from '@/components/motion/Reveal';
import { useSiteContent } from '@/lib/content';
import { useLocale } from '@/lib/locale';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';
import { getCurrentPlate } from '@/lib/pagePlate';

interface LayoutProps {
  children: React.ReactNode;
  motionLevel?: Exclude<MotionVariant, 'hero'> | 'none';
}

export const Layout: React.FC<LayoutProps> = ({ children, motionLevel = 'default' }) => {
  const pageSections = React.Children.toArray(children);
  const { common } = useSiteContent();
  const { isRTL } = useLocale();
  const location = useLocation();
  const currentPlate = getCurrentPlate(location.pathname);

  return (
    <div className={cn("min-h-screen flex flex-col", `theme-plate-${currentPlate}`)}>
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
        <PageTransitionShell disabled={motionLevel === 'none'}>
          {pageSections.map((child, index) => {
            if (index === 0) {
              return child;
            }

            if (motionLevel === 'none') {
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
