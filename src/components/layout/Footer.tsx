import React from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "@/lib/content";
import { Logo } from "@/components/shared/Logo";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export const Footer: React.FC = () => {
  const { navigation, footer } = useSiteContent();
  const { isRTL } = useLocale();

  return (
    <footer className="site-footer-shell pt-8 pb-6 md:pt-12 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "rounded-[34px] bg-[hsl(var(--page-footer-bg))] text-offwhite px-6 py-10 md:px-10 md:py-12",
            "flex flex-col gap-10",
            "colored-surface-shadow",
            isRTL && "text-right"
          )}
        >
          <div className={cn("flex flex-col md:flex-row justify-between gap-12", isRTL && "md:flex-row-reverse")}>
            <div className="flex flex-col gap-6 max-w-sm">
              <Link to="/" className="inline-block">
                <Logo
                  variant="wordmark"
                  colorScheme="offwhite"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-offwhite/60 text-sm leading-relaxed">{footer.tagline}</p>
            </div>

            <nav
              className={cn(
                "flex flex-wrap gap-x-12 gap-y-4",
                isRTL && "md:flex-row-reverse"
              )}
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium text-offwhite/40 uppercase tracking-wider">
                  {footer.pagesLabel}
                </span>
                {navigation.footer.slice(0, 4).map((item) => (
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
                <span className="text-xs font-medium text-offwhite/40 uppercase tracking-wider">
                  {footer.legalLabel}
                </span>
                {navigation.footer.slice(4).map((item) => (
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

          <div className="pt-8 border-t border-offwhite/10">
            <p className={cn("text-sm text-offwhite/40", isRTL && "text-right")}>
              © {new Date().getFullYear()} Amjad Osman. {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
