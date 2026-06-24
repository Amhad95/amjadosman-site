import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { RevealGroup } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';

interface Tile {
  title: string;
  description: string;
  thumbnail?: string | null;
  cta?: string;
  href?: string;
}

interface ProofTilesProps {
  tiles: Tile[];
  className?: string;
}

export const ProofTiles: React.FC<ProofTilesProps> = ({ tiles, className }) => {
  const { locale, isRTL } = useLocale();
  return (
    <RevealGroup
      className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6', className)}
      stagger={74}
    >
      {tiles.map((tile) => {
        const content = (
          <>
            {/* Image thumbnail */}
            <div className="aspect-[3/2] rounded-[26px] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
              {tile.thumbnail ? (
                <img 
                  src={tile.thumbnail} 
                  alt={tile.title}
                  className="media-pop-target w-full h-full object-cover"
                />
              ) : (
                <div className="media-pop-target flex flex-col items-center justify-center text-muted-foreground/50 gap-2">
                  <ImageIcon size={32} strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-wider">
                    {locale === 'ar' ? 'معاينة المشروع' : 'Project Preview'}
                  </span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className={cn('px-1 pt-5 pb-1 md:px-2 flex flex-1 flex-col', isRTL && 'text-right')}>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {tile.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                {tile.description}
              </p>
              {tile.cta && (
                <span className={cn('mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-lavender transition-colors', isRTL && 'flex-row-reverse')}>
                  {tile.cta}
                  <ArrowRight size={16} className={cn('transition-transform', isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1')} />
                </span>
              )}
            </div>
          </>
        );

        if (tile.href) {
          return (
            <Link
              key={tile.title}
              to={tile.href}
              className="media-pop-card group relative bg-card rounded-[34px] border border-ink/10 p-4 md:p-5 hover:border-ink/18 hover:shadow-xl shadow-[0_22px_54px_-42px_rgba(8,15,32,0.18)] flex h-full flex-col"
            >
              {content}
            </Link>
          );
        }

        return (
          <div
            key={tile.title}
            className="media-pop-card group relative bg-card rounded-[34px] border border-ink/10 p-4 md:p-5 hover:border-ink/18 hover:shadow-xl shadow-[0_22px_54px_-42px_rgba(8,15,32,0.18)] flex h-full flex-col"
          >
            {content}
          </div>
        );
      })}
    </RevealGroup>
  );
};

export default ProofTiles;
