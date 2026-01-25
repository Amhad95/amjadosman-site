import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

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
  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6', className)}>
      {tiles.map((tile) => {
        const content = (
          <>
            {/* Image thumbnail */}
            <div className="aspect-[3/2] bg-gradient-to-br from-muted to-muted/50 border-b border-ink/5 flex items-center justify-center overflow-hidden">
              {tile.thumbnail ? (
                <img 
                  src={tile.thumbnail} 
                  alt={tile.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-muted-foreground/50 gap-2">
                  <ImageIcon size={32} strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-wider">Project Preview</span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-3 md:p-4">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {tile.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {tile.description}
              </p>
              {tile.cta && (
                <span className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-lavender transition-colors">
                  {tile.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
              className="group relative bg-card rounded-2xl border border-ink/10 hover:border-ink/20 transition-all duration-200 hover:shadow-lg overflow-hidden"
            >
              {content}
            </Link>
          );
        }

        return (
          <div
            key={tile.title}
            className="group relative bg-card rounded-2xl border border-ink/10 hover:border-ink/20 transition-all duration-200 hover:shadow-lg overflow-hidden"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default ProofTiles;
