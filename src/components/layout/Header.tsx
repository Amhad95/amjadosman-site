import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSiteContent } from "@/lib/content";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { Logo, getLogoColorScheme, getColors } from "@/components/shared/Logo";
import { useLocale } from "@/lib/locale";
import { LanguageDropdown } from "./LanguageDropdown";
import { getCurrentPlate } from "@/lib/pagePlate";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileResourcesExpanded, setMobileResourcesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const resourcesDropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const isScrolledRef = useRef(false);
  const scrollFrameRef = useRef<number | null>(null);
  const location = useLocation();
  const { navigation } = useSiteContent();
  const { locale, isRTL } = useLocale();

  const currentPlate = getCurrentPlate(location.pathname);
  const colorScheme = getLogoColorScheme(currentPlate);
  const colors = getColors(colorScheme);
  const isServicesActive = location.pathname.startsWith("/services");
  const isResourcesActive =
    location.pathname.startsWith("/resources") || location.pathname.startsWith("/tools");

  useEffect(() => {
    const updateScrolledState = () => {
      scrollFrameRef.current = null;
      const nextIsScrolled = window.scrollY > 24;

      if (nextIsScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextIsScrolled;
        setIsScrolled(nextIsScrolled);
      }
    };

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = window.requestAnimationFrame(updateScrolledState);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrolledState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesExpanded(false);
    setMobileResourcesExpanded(false);
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

  const handleResourcesDropdownEnter = () => {
    clearTimeout(resourcesDropdownTimeout.current);
    setResourcesDropdownOpen(true);
  };

  const handleResourcesDropdownLeave = () => {
    resourcesDropdownTimeout.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300 ease-out will-change-[padding]",
        isScrolled ? "py-3" : ""
      )}
    >
      <nav
        className={cn(
          "transition-[background-color,border-color,box-shadow,backdrop-filter,padding,border-radius] duration-300 ease-out will-change-[background-color,box-shadow,backdrop-filter]",
          isScrolled
            ? "max-w-fit mx-auto px-6 py-2.5 rounded-full bg-ink/60 backdrop-blur-xl border border-white/15 shadow-lg shadow-black/10"
            : "container mx-auto px-4 md:px-6 border-b border-ink/10"
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
              aria-label={locale === "ar" ? "الصفحة الرئيسية لأمجد عثمان" : "Amjad Osman Home"}
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
                        "text-sm transition-all duration-200 inline-flex items-center gap-1",
                        isServicesActive ? "font-bold" : "font-medium",
                        isScrolled
                          ? isServicesActive
                            ? "text-offwhite"
                            : "text-offwhite/70 hover:text-offwhite"
                          : isServicesActive
                            ? "opacity-100"
                            : "opacity-70 hover:opacity-100"
                      )}
                      style={!isScrolled ? { color: colors.secondary } : undefined}
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
                              "block px-4 py-2.5 text-sm transition-colors",
                              location.pathname === link.href ? "font-bold" : "font-medium",
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

              if (item.href === "/resources") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    ref={resourcesDropdownRef}
                    onMouseEnter={handleResourcesDropdownEnter}
                    onMouseLeave={handleResourcesDropdownLeave}
                  >
                    <Link
                      to="/tools"
                      className={cn(
                        "text-sm transition-all duration-200 inline-flex items-center gap-1",
                        isResourcesActive ? "font-bold" : "font-medium",
                        isScrolled
                          ? isResourcesActive
                            ? "text-offwhite"
                            : "text-offwhite/70 hover:text-offwhite"
                          : isResourcesActive
                            ? "opacity-100"
                            : "opacity-70 hover:opacity-100"
                      )}
                      style={!isScrolled ? { color: colors.secondary } : undefined}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          resourcesDropdownOpen && "rotate-180"
                        )}
                      />
                    </Link>

                    {resourcesDropdownOpen && (
                      <div
                        className={cn(
                          "absolute top-full mt-2 w-56 bg-ink/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg py-2 z-50 animate-fade-in",
                          isRTL ? "right-0" : "left-0"
                        )}
                      >
                        {navigation.resourcesDropdown.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors",
                              location.pathname === link.href ? "font-bold" : "font-medium",
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
                    "text-sm transition-all duration-200",
                    location.pathname === item.href ? "font-bold" : "font-medium",
                    isScrolled
                      ? location.pathname === item.href
                        ? "text-offwhite"
                        : "text-offwhite/70 hover:text-offwhite"
                      : location.pathname === item.href
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                  )}
                  style={!isScrolled ? { color: colors.secondary } : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <LanguageDropdown
              isScrolled={isScrolled}
              triggerStyle={{ color: colors.secondary }}
            />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {!isScrolled && (
              <PrimaryButton href={navigation.cta.href} textColor={currentPlate}>
                {navigation.cta.label}
              </PrimaryButton>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-2 ms-auto">
            <button
              className={cn(
                "rounded-full p-2 transition-all",
                isScrolled
                  ? "text-offwhite/90 hover:bg-white/5 hover:text-offwhite"
                  : "opacity-80 hover:opacity-100"
              )}
              style={!isScrolled ? { color: colors.secondary } : undefined}
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
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <LanguageDropdown
              isScrolled={isScrolled}
              triggerStyle={{ color: colors.secondary }}
            />
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className={cn(
              "lg:hidden animate-fade-in bg-[hsl(var(--page-footer-bg))]",
              isScrolled
                ? "fixed left-4 right-4 top-16 rounded-2xl border border-white/10 px-5 py-4 shadow-2xl shadow-black/20"
                : "px-4 py-4 border-t border-white/10"
            )}
          >
            <div className="flex flex-col gap-4">
              {navigation.primary.map((item) => {
                if (item.href === "/services") {
                  return (
                    <div key={item.href}>
                      <button
                        className={cn(
                          "text-base px-3 py-2 transition-colors w-full inline-flex items-center gap-2 rounded-lg",
                          isServicesActive ? "font-bold" : "font-medium",
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
                                "text-sm px-3 py-1.5 transition-colors rounded-lg",
                                location.pathname === link.href ? "font-bold" : "font-medium",
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

                if (item.href === "/resources") {
                  return (
                    <div key={item.href}>
                      <button
                        className={cn(
                          "text-base px-3 py-2 transition-colors w-full inline-flex items-center gap-2 rounded-lg",
                          isResourcesActive ? "font-bold" : "font-medium",
                          isRTL ? "justify-end text-right" : "text-left",
                          isResourcesActive
                            ? "text-offwhite"
                            : "text-offwhite/70 hover:text-offwhite"
                        )}
                        onClick={() =>
                          setMobileResourcesExpanded((expanded) => !expanded)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-200",
                            mobileResourcesExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileResourcesExpanded && (
                        <div
                          className={cn(
                            "flex flex-col gap-2 mt-1 animate-fade-in",
                            isRTL ? "pr-4" : "pl-4"
                          )}
                        >
                          {navigation.resourcesDropdown.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              className={cn(
                                "text-sm px-3 py-1.5 transition-colors rounded-lg",
                                location.pathname === link.href ? "font-bold" : "font-medium",
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
                      "text-base px-3 py-2 transition-colors rounded-lg",
                      location.pathname === item.href ? "font-bold" : "font-medium",
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
