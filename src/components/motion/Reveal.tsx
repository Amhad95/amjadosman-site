import React from 'react';
import { cn } from '@/lib/utils';
import { useReveal } from '@/hooks/useReveal';

export type MotionVariant = 'default' | 'subtle' | 'hero';

type RevealElement = 'div' | 'section' | 'article' | 'header' | 'aside' | 'ul';

interface RevealProps {
  as?: RevealElement;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: MotionVariant;
  delay?: number;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
  disabled?: boolean;
}

interface RevealGroupProps extends Omit<RevealProps, 'delay'> {
  stagger?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  as = 'div',
  children,
  className,
  style,
  variant = 'default',
  once,
  rootMargin,
  threshold,
  disabled,
  delay = 0,
}) => {
  const { ref, visible } = useReveal({ once, rootMargin, threshold, disabled });

  return React.createElement(
    as,
    {
      ref,
      className: cn('motion-reveal', `motion-reveal--${variant}`, visible && 'is-visible', className),
      style: {
        ...style,
        '--motion-delay': `${delay}ms`,
      },
    },
    children
  );
};

export const RevealGroup: React.FC<RevealGroupProps> = ({
  as = 'div',
  children,
  className,
  style,
  variant = 'default',
  once,
  rootMargin,
  threshold,
  disabled,
  stagger = 72,
}) => {
  const { ref, visible } = useReveal({ once, rootMargin, threshold, disabled });

  const resolvedChildren = React.Children.map(children, (child, index) => {
    const itemStyle = {
      '--motion-index': index,
    } as React.CSSProperties;

    if (!React.isValidElement(child)) {
      return (
        <div className="motion-reveal-item" style={itemStyle}>
          {child}
        </div>
      );
    }

    const element = child as React.ReactElement<{ className?: string; style?: React.CSSProperties }>;

    return React.cloneElement(element, {
      className: cn(element.props.className, 'motion-reveal-item'),
      style: {
        ...element.props.style,
        ...itemStyle,
      },
    });
  });

  return React.createElement(
    as,
    {
      ref,
      className: cn(
        'motion-reveal-group',
        `motion-reveal-group--${variant}`,
        visible && 'is-visible',
        className
      ),
      style: {
        ...style,
        '--motion-stagger': `${stagger}ms`,
      },
    },
    resolvedChildren
  );
};

export default Reveal;
