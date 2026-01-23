import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteContent } from '@/lib/content';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import { Logo } from '@/components/shared/Logo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { navigation } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-offwhite/95 backdrop-blur-sm border-b border-ink/10'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
            aria-label="ADSI Home"
          >
            <Logo 
              variant="wordmark" 
              colorScheme="ink" 
              className="h-6 md:h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.primary.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  location.pathname === item.href
                    ? 'text-ink'
                    : 'text-ink/70 hover:text-ink'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <PrimaryButton href={navigation.cta.href}>
              {navigation.cta.label}
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-ink/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navigation.primary.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'text-base font-medium py-2 transition-colors',
                    location.pathname === item.href
                      ? 'text-ink'
                      : 'text-ink/70 hover:text-ink'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <PrimaryButton
                  href={navigation.cta.href}
                  className="w-full"
                >
                  {navigation.cta.label}
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
