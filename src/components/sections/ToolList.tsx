import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import {
  LineDocument,
  LineChart,
  LineBrand,
  LineWebsite,
  LineGear,
  LineDashboard,
  LineTree,
} from '@/components/ui/line-illustrations';

interface Tool {
  title: string;
  description?: string;
  illustration?: 'document' | 'chart' | 'brand' | 'website' | 'gear' | 'dashboard' | 'tree';
  href?: string;
}

interface ToolListProps {
  tools: Tool[];
  variant?: 'preview' | 'full';
  plateColor?: 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';
  className?: string;
}

const illustrations = {
  document: LineDocument,
  chart: LineChart,
  brand: LineBrand,
  website: LineWebsite,
  gear: LineGear,
  dashboard: LineDashboard,
  tree: LineTree,
};

// Default illustration mapping based on index
const defaultIllustrations: (keyof typeof illustrations)[] = [
  'document',
  'brand',
  'website',
  'tree',
  'dashboard',
  'chart',
];

const plateClasses = {
  violet: 'bg-plate-violet',
  navy: 'bg-plate-navy',
  emerald: 'bg-plate-emerald',
  blue: 'bg-plate-blue',
  astral: 'bg-plate-astral',
  burgundy: 'bg-plate-burgundy',
};

export const ToolList: React.FC<ToolListProps> = ({
  tools,
  variant = 'preview',
  plateColor = 'violet',
  className,
}) => {
  // Preview variant: compact 3-column grid for homepage
  if (variant === 'preview') {
    return (
      <div className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6', className)}>
        {tools.slice(0, 3).map((tool, index) => {
          const illustrationType = tool.illustration || defaultIllustrations[index % defaultIllustrations.length];
          const Illustration = illustrations[illustrationType];
          
          return (
            <Link
              key={tool.title}
              to={tool.href || '/tools'}
              className="group relative bg-card rounded-2xl border border-ink/10 hover:border-ink/20 transition-all duration-200 hover:shadow-lg overflow-hidden"
            >
              {/* Illustration thumbnail */}
              <div className={cn(
                "aspect-[4/3] border-b border-ink/5 flex items-center justify-center p-6",
                plateClasses[plateColor]
              )}>
                <div className="w-16 h-16 text-mint">
                  <Illustration delay={index * 100} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:text-lavender transition-colors">
                  Try this tool
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }

  // Full variant: responsive grid for Tools page (like iLovePDF)
  return (
    <div className={cn('grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6', className)} id="tools-list">
      {tools.map((tool, index) => {
        const illustrationType = tool.illustration || defaultIllustrations[index % defaultIllustrations.length];
        const Illustration = illustrations[illustrationType];
        
        return (
          <Link
            key={tool.title}
            to={tool.href || '#'}
            className="group relative bg-card rounded-2xl border border-ink/10 hover:border-ink/20 transition-all duration-200 hover:shadow-lg overflow-hidden flex flex-col"
          >
            {/* Illustration thumbnail */}
            <div className={cn(
              "aspect-square border-b border-ink/5 flex items-center justify-center p-6",
              plateClasses[plateColor]
            )}>
              <div className="w-14 h-14 md:w-16 md:h-16 text-mint">
                <Illustration delay={index * 80} />
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-serif text-base md:text-lg text-foreground mb-2">
                {tool.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-3 flex-1">
                {tool.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-ink group-hover:text-lavender transition-colors">
                Try this tool
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ToolList;
