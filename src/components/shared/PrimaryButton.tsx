import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { isExternalHref, resolveBookingHref } from '@/lib/booking';

type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy' | 'ink';

const textColorClasses: Record<PlateColor, string> = {
  violet: 'text-plate-violet',
  navy: 'text-plate-navy',
  emerald: 'text-plate-emerald',
  blue: 'text-plate-blue',
  astral: 'text-plate-astral',
  burgundy: 'text-plate-burgundy',
  ink: 'text-foreground',
};

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  size?: 'default' | 'lg';
  textColor?: PlateColor;
  'aria-busy'?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  className,
  disabled = false,
  size = 'default',
  textColor = 'ink',
  'aria-busy': ariaBusy,
}) => {
  const sizeStyles = size === 'lg'
    ? 'h-14 px-8 text-lg'
    : 'h-12 md:h-[48px] px-5 md:px-6 text-base';

  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'adsi-button',
    size === 'lg' ? 'adsi-button--lg' : 'adsi-button--default',
    sizeStyles,
    'rounded-lg',
    'bg-mint',
    textColorClasses[textColor],
    'font-sans font-semibold',
    'transition-all duration-200 ease-out',
    'hover:bg-mint/90',
    'focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    className
  );

  const resolvedHref = resolveBookingHref(href);

  if (resolvedHref && isExternalHref(resolvedHref)) {
    return (
      <a
        href={resolvedHref}
        target="_blank"
        rel="noreferrer"
        className={baseStyles}
      >
        {children}
      </a>
    );
  }

  if (resolvedHref) {
    return (
      <Link to={resolvedHref} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseStyles}
      disabled={disabled}
      aria-busy={ariaBusy}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
