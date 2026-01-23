import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  variant?: 'light' | 'dark';
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  className,
  disabled = false,
  variant = 'light',
}) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'h-12 md:h-[48px] px-5 md:px-6',
    'rounded-lg',
    'bg-transparent',
    'font-sans font-semibold text-base',
    'transition-all duration-200 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-lavender focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variant === 'dark'
      ? 'border border-mint/55 text-mint hover:bg-mint/10'
      : 'border border-ink/20 text-ink hover:bg-ink/5',
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

export default SecondaryButton;
