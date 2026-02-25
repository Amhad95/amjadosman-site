import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteContent } from '@/lib/content';
import { PrimaryButton } from '@/components/shared/PrimaryButton';
import logoSvg from '@/assets/logo.svg';

type PlateColor = 'violet' | 'navy' | 'emerald' | 'blue' | 'astral' | 'burgundy';

const routePlateMap: Record<string, PlateColor> = {
  '/': 'violet',
  '/software': 'astral',
  '/software/crm': 'astral',
  '/software/accounting': 'astral',
  '/software/inventory': 'astral',
  '/software/tasks': 'astral',
  '/services': 'navy',
  '/services/brand': 'navy',
  '/services/ops': 'navy',
  '/services/agents': 'navy',
  '/tools': 'emerald',
  '/pricing': 'navy',
  '/work': 'blue',
  '/about': 'burgundy',
};

const servicesDropdownLinks = [
  { label: 'Services Overview', href: '/services' },
  { label: 'Brand and Growth Systems', href: '/services/brand' },
  { label: 'Internal Operations Systems', href: '/services/ops' },
  { label: 'AI Agents and Automation', href: '/services/agents' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const { navigation } = siteContent;

  const currentPlate = routePlateMap[location.pathname] || 'violet';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesExpanded(false);
  }, [location.pathname]);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        isScrolled ? 'py-3' : ''
      )}
    >
      <nav
        className={cn(
          'transition-all duration-200',
          isScrolled
            ? 'max-w-fit mx-auto px-6 py-2.5 rounded-full bg-ink/60 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/10'
            : 'container mx-auto px-4 md:px-6 border-b border-mint/40'
        )}
      >
        <div
          className={cn(
            'flex items-center',
            isScrolled ? 'justify-center gap-6' : 'justify-between h-16 md:h-20'
          )}
        >
          {/* Logo - hide when scrolled */}
          {!isScrolled && (
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
              aria-label="ADSI Home"
            >
              <img
                src={logoSvg}
                alt="Applied Design & Strategy Institute"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          )}

          {/* Desktop Navigation */}
          <div
            className={cn(
              'hidden lg:flex items-center gap-6',
              isScrolled && 'justify-center'
            )}
          >
            {navigation.primary.map((item) => {
              // Services gets a dropdown
              if (item.href === '/services') {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      to="/services"
                      className={cn(
                        'text-sm font-semibold transition-colors inline-flex items-center gap-1',
                        isServicesActive
                          ? 'text-offwhite'
                          : 'text-offwhite/70 hover:text-offwhite'
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          servicesDropdownOpen && 'rotate-180'
                        )}
                      />
                    </Link>

                    {/* Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-ink/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                        {servicesDropdownLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm font-semibold transition-colors',
                              location.pathname === link.href
                                ? 'text-offwhite bg-white/5'
                                : 'text-offwhite/70 hover:text-offwhite hover:bg-white/5'
                            )}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'text-sm font-semibold transition-colors',
                    location.pathname === item.href
                      ? 'text-offwhite'
                      : 'text-offwhite/70 hover:text-offwhite'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button - hide when scrolled */}
          {!isScrolled && (
            <div className="hidden lg:block">
              <PrimaryButton href={navigation.cta.href} textColor={currentPlate}>
                {navigation.cta.label}
              </PrimaryButton>
            </div>
          )}

          {/* Mobile Menu Button - hide when scrolled */}
          {!isScrolled && (
            <button
              className="lg:hidden p-2 -mr-2 text-offwhite"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && !isScrolled && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in bg-ink">
            <div className="flex flex-col gap-4">
              {navigation.primary.map((item) => {
                if (item.href === '/services') {
                  return (
                    <div key={item.href}>
                      <button
                        className={cn(
                          'text-base font-medium py-2 transition-colors w-full text-left inline-flex items-center gap-2',
                          isServicesActive
                            ? 'text-offwhite'
                            : 'text-offwhite/70 hover:text-offwhite'
                        )}
                        onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            'transition-transform duration-200',
                            mobileServicesExpanded && 'rotate-180'
                          )}
                        />
                      </button>
                      {mobileServicesExpanded && (
                        <div className="flex flex-col gap-2 pl-4 mt-1 animate-fade-in">
                          {servicesDropdownLinks.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              className={cn(
                                'text-sm font-medium py-1.5 transition-colors',
                                location.pathname === link.href
                                  ? 'text-offwhite'
                                  : 'text-offwhite/70 hover:text-offwhite'
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'text-base font-medium py-2 transition-colors',
                      location.pathname === item.href
                        ? 'text-offwhite'
                        : 'text-offwhite/70 hover:text-offwhite'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4">
                <PrimaryButton href={navigation.cta.href} className="w-full" textColor={currentPlate}>
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
