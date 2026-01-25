import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, FileText, Palette, MousePointerClick, LucideIcon } from 'lucide-react';
import { Card, CardTitle } from '@/components/shared/Card';
import { AnimatedIcon } from '@/components/shared/AnimatedIcon';

interface Tool {
  title: string;
  description?: string;
  outputs?: string[];
  whoFor?: string;
  implementLink?: { label: string; href: string };
  icon?: LucideIcon;
}

interface ToolListProps {
  tools: Tool[];
  variant?: 'preview' | 'full';
  className?: string;
}

const defaultToolIcons: LucideIcon[] = [
  FileText,
  Palette,
  MousePointerClick,
];

export const ToolList: React.FC<ToolListProps> = ({
  tools,
  variant = 'preview',
  className,
}) => {
  if (variant === 'preview') {
    return (
      <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8', className)}>
        {tools.map((tool, index) => {
          const ToolIcon = tool.icon || defaultToolIcons[index] || FileText;
          return (
            <Card key={index} variant="elevated">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-plate-emerald flex items-center justify-center">
                  <AnimatedIcon 
                    icon={ToolIcon} 
                    animation="breathe" 
                    color="mint" 
                    size={24} 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle>{tool.title}</CardTitle>
                  <p className="text-body-md text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('space-y-8', className)} id="tools-list">
      {tools.map((tool, index) => {
        const ToolIcon = tool.icon || defaultToolIcons[index] || FileText;
        return (
          <Card key={index} variant="elevated" className="p-8 md:p-10">
            <div className="flex items-start gap-5 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-plate-blue flex items-center justify-center">
                <AnimatedIcon 
                  icon={ToolIcon} 
                  animation="breathe" 
                  color="mint" 
                  size={28} 
                />
              </div>
              <CardTitle accent className="text-heading-md flex-1">
                {tool.title}
              </CardTitle>
            </div>
            
            {tool.outputs && tool.outputs.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Outputs
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tool.outputs.map((output, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-mint to-mint/60 flex-shrink-0" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {tool.whoFor && (
              <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                <h4 className="text-sm font-semibold text-foreground mb-1">Who it's for</h4>
                <p className="text-sm text-muted-foreground">{tool.whoFor}</p>
              </div>
            )}
            
            {tool.implementLink && (
              <Link
                to={tool.implementLink.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-lavender hover:text-lavender/80 transition-colors group"
              >
                {tool.implementLink.label}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default ToolList;
