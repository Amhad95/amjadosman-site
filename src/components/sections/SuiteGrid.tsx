import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, Calculator, Package, ListTodo, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedIcon } from '@/components/shared/AnimatedIcon';

interface SuiteProduct {
  id: string;
  name: string;
  oneLiner: string;
  outcomes: string[];
  cta: {
    label: string;
    href: string;
  };
}

interface SuiteGridProps {
  products: SuiteProduct[];
  className?: string;
}

const productIconMap: Record<string, LucideIcon> = {
  crm: Users,
  accounting: Calculator,
  inventory: Package,
  tasks: ListTodo,
};

export const SuiteGrid: React.FC<SuiteGridProps> = ({ products, className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', className)}>
      {products.map((product) => {
        const ProductIcon = productIconMap[product.id] || Users;
        return (
          <div
            key={product.id}
            className="bg-card rounded-2xl p-6 md:p-8 border border-ink/10 flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-plate-astral flex items-center justify-center">
                <AnimatedIcon
                  icon={ProductIcon}
                  animation="breathe"
                  color="mint"
                  size={24}
                />
              </div>
              <h3 className="font-serif text-xl text-foreground pt-2">
                {product.name}
              </h3>
            </div>
            
            <p className="text-body-md text-muted-foreground mb-4">
              {product.oneLiner}
            </p>
            
            <ul className="space-y-2 mb-6 flex-1">
              {product.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check size={16} className="text-mint flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
            
            <Link
              to={product.cta.href}
              className="inline-flex items-center justify-center h-10 px-5 rounded-lg bg-mint/10 text-mint font-semibold text-sm transition-colors hover:bg-mint/20"
            >
              {product.cta.label}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SuiteGrid;
