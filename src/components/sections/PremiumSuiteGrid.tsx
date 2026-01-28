import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calculator, Package, ListTodo, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SuiteProduct {
  id: string;
  name: string;
  oneLiner: string;
  outcomes: string[];
  href: string;
}

interface PremiumSuiteGridProps {
  products: SuiteProduct[];
  className?: string;
}

const productIconMap: Record<string, LucideIcon> = {
  crm: Users,
  accounting: Calculator,
  inventory: Package,
  tasks: ListTodo,
};

const productGradients: Record<string, string> = {
  crm: 'from-lavender/20 to-lavender/5',
  accounting: 'from-mint/20 to-mint/5',
  inventory: 'from-plate-blue/30 to-plate-blue/10',
  tasks: 'from-magenta/20 to-magenta/5',
};

export const PremiumSuiteGrid: React.FC<PremiumSuiteGridProps> = ({ products, className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      {products.map((product) => {
        const ProductIcon = productIconMap[product.id] || Users;
        const gradient = productGradients[product.id] || 'from-mint/20 to-mint/5';
        
        return (
          <Link
            key={product.id}
            to={product.href}
            className={cn(
              'group relative bg-card rounded-2xl p-6 md:p-8',
              'border-2 border-ink/10 hover:border-mint/40',
              'transition-all duration-300 ease-out',
              'hover:shadow-2xl hover:shadow-mint/10',
              'hover:-translate-y-1',
              'flex flex-col'
            )}
          >
            {/* Gradient overlay on hover */}
            <div className={cn(
              'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300',
              gradient
            )} />
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className={cn(
                  'flex-shrink-0 w-14 h-14 rounded-xl',
                  'bg-plate-astral flex items-center justify-center',
                  'group-hover:scale-110 transition-transform duration-300'
                )}>
                  <ProductIcon size={28} className="text-mint" />
                </div>
                <h3 className="font-serif text-heading-md text-foreground">
                  {product.name}
                </h3>
              </div>
              
              {/* One-liner */}
              <p className="text-body-md text-muted-foreground mb-5">
                {product.oneLiner}
              </p>
              
              {/* Outcome chips */}
              <div className="flex flex-wrap gap-2 mb-6 flex-1">
                {product.outcomes.map((outcome, i) => (
                  <span
                    key={i}
                    className={cn(
                      'inline-flex items-center px-3 py-1.5 rounded-full',
                      'bg-muted text-sm text-foreground/80',
                      'border border-ink/5'
                    )}
                  >
                    {outcome}
                  </span>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className={cn(
                'inline-flex items-center justify-center gap-2',
                'h-12 px-6 rounded-xl',
                'bg-mint text-ink font-semibold text-sm',
                'group-hover:bg-mint group-hover:shadow-lg group-hover:shadow-mint/30',
                'transition-all duration-300'
              )}>
                Explore {product.name}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PremiumSuiteGrid;
