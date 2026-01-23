import React from 'react';

interface LogoProps {
  variant?: 'logmark' | 'wordmark';
  colorScheme?: 'mint-lavender' | 'mint-blue' | 'magenta' | 'ink' | 'offwhite';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'wordmark',
  colorScheme = 'ink',
  className = '',
}) => {
  const getColors = () => {
    switch (colorScheme) {
      case 'mint-lavender':
        return { primary: '#00FFD9', secondary: '#AD68E9' };
      case 'mint-blue':
        return { primary: '#00FFD9', secondary: '#015AE8' };
      case 'magenta':
        return { primary: '#BE0347', secondary: '#BE0347' };
      case 'offwhite':
        return { primary: '#F6F4EF', secondary: '#F6F4EF' };
      case 'ink':
      default:
        return { primary: '#0B0F14', secondary: '#0B0F14' };
    }
  };

  const colors = getColors();

  if (variant === 'logmark') {
    return (
      <svg
        viewBox="0 0 359.74 359.74"
        className={className}
        aria-label="ADSI Logo"
      >
        <rect fill={colors.primary} width="359.74" height="359.74" />
        <path
          fill={colors.secondary}
          d="M0,211.26V0h211.26v79.22L79.22,211.26H0ZM158.45,52.82H52.82v105.63l105.63-105.63Z"
        />
        <polygon
          fill={colors.secondary}
          points="359.47 121.21 359.47 201.84 278.84 201.84 237.23 243.44 237.23 243.45 120.95 359.74 0 359.74 0 279.1 80.63 279.1 238.52 121.21 359.47 121.21"
        />
      </svg>
    );
  }

  // Wordmark - simplified version with ADSI text
  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      aria-label="ADSI"
    >
      <text
        x="0"
        y="30"
        fill={colors.primary}
        fontFamily="Instrument Serif, Georgia, serif"
        fontSize="32"
        fontWeight="400"
      >
        ADSI
      </text>
    </svg>
  );
};

// Helper to determine color scheme based on plate
export const getLogoColorScheme = (plate: string): LogoProps['colorScheme'] => {
  switch (plate) {
    case 'violet':
    case 'astral':
    case 'emerald':
      return 'mint-lavender';
    case 'navy':
    case 'blue':
      return 'mint-blue';
    case 'burgundy':
      return 'magenta';
    default:
      return 'ink';
  }
};

export default Logo;
