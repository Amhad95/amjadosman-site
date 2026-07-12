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
  rowStagger?: number;
  columnStagger?: number;
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
  rowStagger = 150,
  columnStagger = 46,
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

  React.useEffect(() => {
    const group = ref.current;
    if (!group) return;

    const measureRows = () => {
      const items = Array.from(group.children).filter((child) =>
        child.classList.contains('motion-reveal-item')
      ) as HTMLElement[];
      const rowTops: number[] = [];

      items.forEach((item) => {
        const top = Math.round(item.getBoundingClientRect().top);
        let rowIndex = rowTops.findIndex((rowTop) => Math.abs(rowTop - top) <= 2);

        if (rowIndex === -1) {
          rowTops.push(top);
          rowIndex = rowTops.length - 1;
        }

        const columnIndex = items
          .slice(0, items.indexOf(item))
          .filter((previousItem) => Math.abs(Math.round(previousItem.getBoundingClientRect().top) - top) <= 2)
          .length;

        item.style.setProperty('--motion-row', String(rowIndex));
        item.style.setProperty('--motion-column', String(columnIndex));
      });
    };

    const frame = window.requestAnimationFrame(measureRows);
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measureRows);
    observer?.observe(group);

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [ref, resolvedChildren.length]);

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
        '--motion-row-stagger': `${rowStagger}ms`,
        '--motion-column-stagger': `${columnStagger}ms`,
      },
    },
    resolvedChildren
  );
};

export default Reveal;
