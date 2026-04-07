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
    <footer className="border-t border-offwhite/10 bg-[#373737] text-offwhite">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between gap-12",
            isRTL && "md:flex-row-reverse"
          )}
        >
          <div className={cn("flex flex-col gap-6 max-w-sm", isRTL && "text-right")}>
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
              isRTL && "md:flex-row-reverse text-right"
            )}
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium text-offwhite/40 uppercase tracking-wider">
                {footer.pagesLabel}
              </span>
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
              <span className="text-xs font-medium text-offwhite/40 uppercase tracking-wider">
                {footer.legalLabel}
              </span>
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

        <div className="mt-12 pt-8 border-t border-offwhite/10">
          <p className={cn("text-sm text-offwhite/40", isRTL && "text-right")}>
            © {new Date().getFullYear()} ADSI. {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
