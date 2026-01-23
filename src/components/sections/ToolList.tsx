import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight, FileText, BarChart3, Layout } from 'lucide-react';
import { Card, CardTitle, CardIcon } from '@/components/shared/Card';

interface Tool {
  title: string;
  description?: string;
  outputs?: string[];
  whoFor?: string;
  implementLink?: { label: string; href: string };
}

interface ToolListProps {
  tools: Tool[];
  variant?: 'preview' | 'full';
  className?: string;
}

const toolIcons = [FileText, BarChart3, Layout];

export const ToolList: React.FC<ToolListProps> = ({
  tools,
  variant = 'preview',
  className,
}) => {
  if (variant === 'preview') {
    return (
      <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8', className)}>
        {tools.map((tool, index) => {
          const IconComponent = toolIcons[index % toolIcons.length];
          return (
            <Card key={index} variant="elevated" staggerIndex={index}>
              <CardIcon>
                <IconComponent size={28} className="text-mint" />
              </CardIcon>
              <CardTitle>{tool.title}</CardTitle>
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </Card>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('space-y-8', className)} id="tools-list">
      {tools.map((tool, index) => {
        const IconComponent = toolIcons[index % toolIcons.length];
        return (
          <Card key={index} variant="elevated" className="p-8 md:p-10" staggerIndex={index}>
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex w-16 h-16 rounded-xl bg-gradient-to-br from-mint/20 to-lavender/10 items-center justify-center flex-shrink-0">
                <IconComponent size={32} className="text-mint" />
              </div>
              <div className="flex-1">
                <CardTitle accent className="text-heading-md mb-6">
                  {tool.title}
                </CardTitle>
                
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
                  <div className="mb-6 p-4 bg-muted/50 rounded-xl border border-ink/5">
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
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default ToolList;
