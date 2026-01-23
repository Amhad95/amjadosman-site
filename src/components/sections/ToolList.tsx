import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

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

export const ToolList: React.FC<ToolListProps> = ({
  tools,
  variant = 'preview',
  className,
}) => {
  if (variant === 'preview') {
    return (
      <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-6', className)}>
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 border border-ink/10 hover:border-ink/20 transition-all"
          >
            <h3 className="font-serif text-xl text-foreground mb-2">
              {tool.title}
            </h3>
            <p className="text-body-md text-muted-foreground">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('space-y-6', className)} id="tools-list">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl p-6 md:p-8 border border-ink/10"
        >
          <h3 className="font-serif text-heading-md text-foreground mb-4">
            {tool.title}
          </h3>
          
          {tool.outputs && tool.outputs.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2">Outputs</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tool.outputs.map((output, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint flex-shrink-0" />
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {tool.whoFor && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-1">Who it's for</h4>
              <p className="text-sm text-muted-foreground">{tool.whoFor}</p>
            </div>
          )}
          
          {tool.implementLink && (
            <Link
              to={tool.implementLink.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-lavender hover:text-lavender/80 transition-colors"
            >
              {tool.implementLink.label}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToolList;
