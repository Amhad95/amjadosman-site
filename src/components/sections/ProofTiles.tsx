import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { LineTree, LineDocument, LineWebsite, LineBrand } from '@/components/ui/line-illustrations';

interface Tile {
  title: string;
  description: string;
  cta?: string;
  href?: string;
  illustration?: 'tree' | 'document' | 'website' | 'brand';
}

interface ProofTilesProps {
  tiles: Tile[];
  className?: string;
}

const illustrations = {
  tree: LineTree,
  document: LineDocument,
  website: LineWebsite,
  brand: LineBrand,
};

// Default illustration mapping based on index
const defaultIllustrations: ('tree' | 'document' | 'website' | 'brand')[] = [
  'tree',
  'document',
  'website',
  'brand',
];

export const ProofTiles: React.FC<ProofTilesProps> = ({ tiles, className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      {tiles.map((tile, index) => {
        const illustrationType = tile.illustration || defaultIllustrations[index % defaultIllustrations.length];
        const Illustration = illustrations[illustrationType];
        
        return (
          <div
            key={index}
            className="group relative bg-card rounded-2xl border border-ink/10 hover:border-ink/20 transition-all duration-200 hover:shadow-lg overflow-hidden"
          >
            {/* Illustration thumbnail */}
            <div className="aspect-[16/9] bg-muted/30 border-b border-ink/5 flex items-center justify-center p-6">
              <div className="w-20 h-20 text-foreground/70 group-hover:text-foreground transition-colors">
                <Illustration delay={index * 100} />
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
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
          </div>
        );
      })}
    </div>
  );
};

export default ProofTiles;
