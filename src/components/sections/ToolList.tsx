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
import { RevealGroup } from '@/components/motion/Reveal';
import { useLocale } from '@/lib/locale';

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

// Alternating colors for visual variety
const alternatingColors: ('emerald' | 'violet')[] = ['emerald', 'violet'];

export const ToolList: React.FC<ToolListProps> = ({
  tools,
  variant = 'preview',
  plateColor,
  className,
}) => {
  const { locale } = useLocale();
  const tryLabel = {
    en: 'Try this tool',
    ar: 'جرّب الأداة',
    de: 'Tool testen',
    fr: 'Essayer l’outil',
    bg: 'Пробвайте инструмента',
  }[locale];

  // Preview variant: compact tool-directory grid for the homepage.
  if (variant === 'preview') {
    return (
      <RevealGroup
        className={cn('grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-5', className)}
        stagger={76}
      >
        {tools.slice(0, 6).map((tool, index) => {
          const illustrationType = tool.illustration || defaultIllustrations[index % defaultIllustrations.length];
          const Illustration = illustrations[illustrationType];
          const cardColor = plateColor || alternatingColors[index % 2];
          
          return (
            <Link
              key={tool.title}
              to={tool.href || '/tools'}
              className="media-pop-card group relative flex h-full flex-col rounded-[30px] border border-ink/10 bg-card p-3 shadow-[0_20px_48px_-40px_rgba(8,15,32,0.18)] hover:border-ink/18 hover:shadow-xl md:p-4"
            >
              {/* Illustration thumbnail */}
              <div className={cn(
                "aspect-square rounded-[22px] flex items-center justify-center p-3 overflow-hidden",
                plateClasses[cardColor]
              )}>
              <div className="media-pop-target h-20 w-20 text-mint md:h-24 md:w-24">
                  <Illustration delay={index * 100} />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground md:text-xl">
                  {tool.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-xs text-muted-foreground md:text-sm">
                  {tool.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors group-hover:text-lavender md:text-sm">
                  {tryLabel}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          );
        })}
      </RevealGroup>
    );
  }

  // Full variant: responsive grid for Tools page (like iLovePDF)
  return (
    <RevealGroup
      className={cn('grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6', className)}
      id="tools-list"
      stagger={58}
      variant="subtle"
    >
      {tools.map((tool, index) => {
        const illustrationType = tool.illustration || defaultIllustrations[index % defaultIllustrations.length];
        const Illustration = illustrations[illustrationType];
        const cardColor = plateColor || alternatingColors[index % 2];
        
        return (
          <Link
            key={tool.title}
            to={tool.href || '#'}
            className="media-pop-card group relative bg-card rounded-[30px] border border-ink/10 p-3 md:p-4 hover:border-ink/18 hover:shadow-xl shadow-[0_20px_48px_-40px_rgba(8,15,32,0.18)] flex flex-col"
          >
            {/* Illustration thumbnail */}
            <div className={cn(
              "aspect-square rounded-[22px] flex items-center justify-center p-4 overflow-hidden",
              plateClasses[cardColor]
            )}>
              <div className="media-pop-target w-20 h-20 md:w-24 md:h-24 text-mint">
                <Illustration delay={index * 80} />
              </div>
            </div>
            
            {/* Content */}
            <div className="px-1 pt-4 pb-1 flex-1 flex flex-col">
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                {tool.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                {tool.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-foreground group-hover:text-lavender transition-colors">
                {tryLabel}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        );
      })}
    </RevealGroup>
  );
};

export default ToolList;
