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
          className="group relative bg-card rounded-2xl p-6 md:p-8 border border-ink/10 hover:border-ink/20 transition-all duration-200 hover:shadow-lg"
        >
          <h3 className="font-serif text-xl text-foreground mb-2">
            {tile.title}
          </h3>
          <p className="text-body-md text-muted-foreground mb-4">
            {tile.description}
          </p>
          {tile.cta && tile.href && (
            <Link
              to={tile.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-lavender transition-colors"
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
