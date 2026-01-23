import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '@/lib/content';

export const Footer: React.FC = () => {
  const { navigation } = siteContent;

  return (
    <footer className="bg-ink text-offwhite py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="font-serif text-2xl text-mint hover:opacity-80 transition-opacity"
            >
              ADSI
            </Link>
            <p className="text-offwhite/70 text-sm max-w-xs">
              Design and operating systems for teams that need to move fast without losing control.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navigation.footer.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-offwhite/70 hover:text-mint transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-offwhite/10">
          <p className="text-sm text-offwhite/50">
            © {new Date().getFullYear()} Applied Design and Strategy Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
