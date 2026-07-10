import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'logmark' | 'wordmark';
  colorScheme?:
    | 'mint-violet'
    | 'mint-navy'
    | 'mint-emerald'
    | 'mint-blue'
    | 'mint-astral'
    | 'mint-burgundy'
    | 'ink'
    | 'offwhite';
  className?: string;
}

export const getColors = (colorScheme: LogoProps['colorScheme']) => {
  switch (colorScheme) {
    case 'mint-violet':
      return { primary: '#00FFD9', secondary: 'hsl(var(--plate-violet))' };
    case 'mint-navy':
      return { primary: '#00FFD9', secondary: 'hsl(var(--plate-navy))' };
    case 'mint-emerald':
      return { primary: '#00FFD9', secondary: 'hsl(var(--plate-emerald))' };
    case 'mint-blue':
      return { primary: '#00FFD9', secondary: 'hsl(var(--plate-blue))' };
    case 'mint-astral':
      return { primary: '#00FFD9', secondary: 'hsl(var(--plate-astral))' };
    case 'mint-burgundy':
      return { primary: '#00FFD9', secondary: 'hsl(var(--plate-burgundy))' };
    case 'offwhite':
      return { primary: 'rgba(246, 244, 239, 0.42)', secondary: '#F6F4EF' };
    case 'ink':
    default:
      return { primary: '#00FFD9', secondary: '#0B0F14' };
  }
};

const Logomark = ({ colorScheme = 'ink', className = '' }: Pick<LogoProps, 'colorScheme' | 'className'>) => {
  const colors = getColors(colorScheme);

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="60" r="58" fill={colors.primary} />
      <circle cx="60" cy="60" r="34" fill={colors.secondary} />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'wordmark',
  colorScheme = 'ink',
  className = '',
}) => {
  if (variant === 'logmark') {
    return (
      <Logomark
        colorScheme={colorScheme}
        className={cn('h-full w-auto', className)}
      />
    );
  }

  const colors = getColors(colorScheme);

  return (
    <span
      className={cn(
        'inline-flex h-11 md:h-12 w-auto items-center gap-2.5',
        className
      )}
      aria-label="Amjad Osman"
    >
      <Logomark colorScheme={colorScheme} className="h-9 md:h-10 w-auto shrink-0" />
      <span 
        className="font-pixelify-sans font-bold text-2xl md:text-3xl leading-none whitespace-nowrap"
        style={{ color: colors.secondary }}
      >
        Amjad Osman
      </span>
    </span>
  );
};

export const getLogoColorScheme = (plate: string): LogoProps['colorScheme'] => {
  switch (plate) {
    case 'violet':
      return 'mint-violet';
    case 'navy':
      return 'mint-navy';
    case 'emerald':
      return 'mint-emerald';
    case 'blue':
      return 'mint-blue';
    case 'astral':
      return 'mint-astral';
    case 'burgundy':
      return 'mint-burgundy';
    default:
      return 'ink';
  }
};

export default Logo;
