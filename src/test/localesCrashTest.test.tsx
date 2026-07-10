import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocaleProvider, LOCALE_STORAGE_KEY, Locale } from "@/lib/locale";

import Index from "@/pages/Index";
import Pricing from "@/pages/Pricing";
import Terms from "@/pages/Terms";
import Work from "@/pages/Work";
import Book from "@/pages/Book";
import Contact from "@/pages/Contact";
import Tools from "@/pages/Tools";
import Services from "@/pages/Services";
import Software from "@/pages/Software";
import Resources from "@/pages/Resources";
import Privacy from "@/pages/Privacy";
import Process from "@/pages/Process";
import About from "@/pages/About";

import SoftwareCRM from "@/pages/software/SoftwareCRM";
import SoftwareAccounting from "@/pages/software/SoftwareAccounting";
import SoftwareTasks from "@/pages/software/SoftwareTasks";
import SoftwareInventory from "@/pages/software/SoftwareInventory";

import ServicesBrand from "@/pages/services/ServicesBrand";
import ServicesAgents from "@/pages/services/ServicesAgents";
import ServicesOps from "@/pages/services/ServicesOps";

import DashboardBuilder from "@/pages/tools/DashboardBuilder";
import KpiAudit from "@/pages/tools/KpiAudit";
import PageCritique from "@/pages/tools/PageCritique";
import BrandAudit from "@/pages/tools/BrandAudit";
import ProcessMapper from "@/pages/tools/ProcessMapper";
import SopBuilder from "@/pages/tools/SopBuilder";

const PAGES = {
  Index,
  Pricing,
  Terms,
  Work,
  Book,
  Contact,
  Tools,
  Services,
  Software,
  Resources,
  Privacy,
  Process,
  About,
  SoftwareCRM,
  SoftwareAccounting,
  SoftwareTasks,
  SoftwareInventory,
  ServicesBrand,
  ServicesAgents,
  ServicesOps,
  DashboardBuilder,
  KpiAudit,
  PageCritique,
  BrandAudit,
  ProcessMapper,
  SopBuilder,
};

const LOCALES: Locale[] = ["en", "ar", "de", "fr", "bg"];

describe("Comprehensive Localization Rendering Test", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  });

  afterEach(() => {
    cleanup();
  });

  Object.entries(PAGES).forEach(([name, PageComponent]) => {
    describe(`Page: ${name}`, () => {
      LOCALES.forEach((locale) => {
        it(`renders successfully in locale: ${locale}`, () => {
          const queryClient = new QueryClient({
            defaultOptions: {
              queries: {
                retry: false,
              },
            },
          });

          window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
          render(
            <QueryClientProvider client={queryClient}>
              <MemoryRouter>
                <LocaleProvider>
                  <PageComponent />
                </LocaleProvider>
              </MemoryRouter>
            </QueryClientProvider>
          );
        });
      });
    });
  });
});
