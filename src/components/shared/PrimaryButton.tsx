import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  className,
  disabled = false,
}) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'h-12 md:h-[48px] px-5 md:px-6',
    'rounded-lg',
    'bg-mint text-ink',
    'font-sans font-semibold text-base',
    'transition-all duration-200 ease-out',
    'hover:bg-mint/90',
    'focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <Link to={href} className={baseStyles}>
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
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
