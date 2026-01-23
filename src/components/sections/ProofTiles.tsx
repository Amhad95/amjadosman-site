import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface Tile {
  title: string;
  description: string;
  cta?: string;
  href?: string;
}

interface ProofTilesProps {
  tiles: Tile[];
  className?: string;
}

export const ProofTiles: React.FC<ProofTilesProps> = ({ tiles, className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={cn(
            'group relative bg-card rounded-2xl p-6 md:p-8 border border-ink/10',
            'hover:border-ink/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
            'overflow-hidden animate-fade-in-up',
            `stagger-${Math.min(index + 1, 4)}`
          )}
        >
          {/* Numbered badge */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-mint/20 to-mint/5 flex items-center justify-center">
            <span className="text-xs font-semibold text-mint">{index + 1}</span>
          </div>
          
          {/* Decorative gradient corner */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-lavender/5 to-transparent rounded-br-2xl pointer-events-none" />
          
          <h3 className="font-serif text-xl text-foreground mb-2 pr-10">
            {tile.title}
          </h3>
          <p className="text-body-md text-muted-foreground mb-4">
            {tile.description}
          </p>
          {tile.cta && tile.href && (
            <Link
              to={tile.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-lavender hover:text-lavender/80 transition-colors"
            >
              {tile.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProofTiles;
