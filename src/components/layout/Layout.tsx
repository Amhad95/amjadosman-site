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
import { Hero } from '@/components/sections/Hero';
import { ProductHero } from '@/components/sections/ProductHero';

interface LayoutProps {
  children: React.ReactNode;
  motionLevel?: Exclude<MotionVariant, 'hero'>;
}

const flattenPageSections = (children: React.ReactNode): React.ReactNode[] =>
  React.Children.toArray(children).flatMap((child) => {
    if (React.isValidElement(child) && child.type === React.Fragment) {
      return flattenPageSections(child.props.children);
    }

    return [child];
  });

export const Layout: React.FC<LayoutProps> = ({ children, motionLevel = 'default' }) => {
  const pageSections = flattenPageSections(children);
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
        <PageTransitionShell>
          {pageSections.map((child, index) => {
            const isIntroHero =
              React.isValidElement(child) && (child.type === Hero || child.type === ProductHero);

            if (index === 0 && isIntroHero) {
              return child;
            }

            return (
              <Reveal
                key={React.isValidElement(child) && child.key != null ? child.key : `layout-section-${index}`}
                variant={motionLevel}
                className="page-section-reveal"
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
