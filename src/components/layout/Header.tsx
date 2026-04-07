import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSiteContent } from "@/lib/content";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { Logo, getLogoColorScheme } from "@/components/shared/Logo";
import { useLocale } from "@/lib/locale";
import { LanguageToggle } from "./LanguageToggle";

type PlateColor =
  | "violet"
  | "navy"
  | "emerald"
  | "blue"
  | "astral"
  | "burgundy";

const routePlateMap: Record<string, PlateColor> = {
  "/": "violet",
  "/software": "astral",
  "/software/crm": "astral",
  "/software/accounting": "astral",
  "/software/inventory": "astral",
  "/software/tasks": "astral",
  "/services": "navy",
  "/services/brand": "navy",
  "/services/ops": "navy",
  "/services/agents": "navy",
  "/tools": "emerald",
  "/pricing": "navy",
  "/work": "blue",
  "/about": "burgundy",
};

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const { navigation } = useSiteContent();
  const { locale, isRTL } = useLocale();

  const currentPlate = routePlateMap[location.pathname] || "violet";
  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled ? "py-3" : ""
      )}
    >
      <nav
        className={cn(
          "transition-all duration-200",
          isScrolled
            ? "max-w-fit mx-auto px-6 py-2.5 rounded-full bg-ink/60 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/10"
            : "container mx-auto px-4 md:px-6 border-b border-mint/40"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-4",
            isScrolled ? "justify-center gap-6" : "justify-between h-16 md:h-20"
          )}
        >
          {!isScrolled && (
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
              aria-label={locale === "ar" ? "الصفحة الرئيسية لـ ADSI" : "ADSI Home"}
            >
              <Logo
                variant="wordmark"
                colorScheme={getLogoColorScheme(currentPlate)}
                className={cn("scale-[0.94]", isRTL ? "origin-right" : "origin-left")}
              />
            </Link>
          )}

          <div
            className={cn(
              "hidden lg:flex items-center gap-6",
              isScrolled && "justify-center"
            )}
          >
            {navigation.primary.map((item) => {
              if (item.href === "/services") {
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
                        "text-sm font-semibold transition-colors inline-flex items-center gap-1",
                        isServicesActive
                          ? "text-offwhite"
                          : "text-offwhite/70 hover:text-offwhite"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          servicesDropdownOpen && "rotate-180"
                        )}
                      />
                    </Link>

                    {servicesDropdownOpen && (
                      <div
                        className={cn(
                          "absolute top-full mt-2 w-64 bg-ink/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg py-2 z-50 animate-fade-in",
                          isRTL ? "right-0" : "left-0"
                        )}
                      >
                        {navigation.servicesDropdown.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm font-semibold transition-colors",
                              location.pathname === link.href
                                ? "text-offwhite bg-white/5"
                                : "text-offwhite/70 hover:text-offwhite hover:bg-white/5"
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
                    "text-sm font-semibold transition-colors",
                    location.pathname === item.href
                      ? "text-offwhite"
                      : "text-offwhite/70 hover:text-offwhite"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <LanguageToggle />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {!isScrolled && (
              <PrimaryButton href={navigation.cta.href} textColor={currentPlate}>
                {navigation.cta.label}
              </PrimaryButton>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-2 ms-auto">
            <LanguageToggle />
            {!isScrolled && (
              <button
                className="p-2 text-offwhite"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label={
                  mobileMenuOpen
                    ? locale === "ar"
                      ? "إغلاق القائمة"
                      : "Close menu"
                    : locale === "ar"
                      ? "فتح القائمة"
                      : "Open menu"
                }
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {mobileMenuOpen && !isScrolled && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in bg-ink">
            <div className="flex flex-col gap-4">
              {navigation.primary.map((item) => {
                if (item.href === "/services") {
                  return (
                    <div key={item.href}>
                      <button
                        className={cn(
                          "text-base font-medium py-2 transition-colors w-full inline-flex items-center gap-2",
                          isRTL ? "justify-end text-right" : "text-left",
                          isServicesActive
                            ? "text-offwhite"
                            : "text-offwhite/70 hover:text-offwhite"
                        )}
                        onClick={() =>
                          setMobileServicesExpanded((expanded) => !expanded)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-200",
                            mobileServicesExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileServicesExpanded && (
                        <div
                          className={cn(
                            "flex flex-col gap-2 mt-1 animate-fade-in",
                            isRTL ? "pr-4" : "pl-4"
                          )}
                        >
                          {navigation.servicesDropdown.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              className={cn(
                                "text-sm font-medium py-1.5 transition-colors",
                                isRTL && "text-right",
                                location.pathname === link.href
                                  ? "text-offwhite"
                                  : "text-offwhite/70 hover:text-offwhite"
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
                      "text-base font-medium py-2 transition-colors",
                      isRTL && "text-right",
                      location.pathname === item.href
                        ? "text-offwhite"
                        : "text-offwhite/70 hover:text-offwhite"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4">
                <PrimaryButton
                  href={navigation.cta.href}
                  className="w-full"
                  textColor={currentPlate}
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
