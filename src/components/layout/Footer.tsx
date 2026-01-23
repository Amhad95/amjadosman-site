import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '@/lib/content';
import logoSvg from '@/assets/logo.svg';
import { PrimaryButton } from '@/components/shared/PrimaryButton';

export const Footer: React.FC = () => {
  const { navigation } = siteContent;

  return (
    <footer className="bg-ink text-offwhite">
      {/* CTA Section */}
      <div className="border-b border-offwhite/10">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="font-serif text-heading-lg text-mint mb-4">
              Ready to build systems that actually work?
            </h2>
            <p className="text-lg text-offwhite/70 mb-8 max-w-xl">
              Book a short call. We will review what you need and share a clear scope, timeline, and cost.
            </p>
            <PrimaryButton href="/book" size="lg">
              Book a Call
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and tagline */}
          <div className="flex flex-col gap-6 max-w-sm">
            <Link to="/" className="inline-block">
              <img
                src={logoSvg}
                alt="Applied Design & Strategy Institute"
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-offwhite/60 text-sm leading-relaxed">
              Design and operating systems for teams that need to move fast without losing control.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-12 gap-y-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium text-offwhite/40 uppercase tracking-wider">Pages</span>
              {navigation.footer.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-offwhite/70 hover:text-mint transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium text-offwhite/40 uppercase tracking-wider">Legal</span>
              {navigation.footer.slice(3).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-offwhite/70 hover:text-mint transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-offwhite/10">
          <p className="text-sm text-offwhite/40">
            © {new Date().getFullYear()} Applied Design and Strategy Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
