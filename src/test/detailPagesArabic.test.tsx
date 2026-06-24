import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { LocaleProvider, LOCALE_STORAGE_KEY } from "@/lib/locale";
import ServicesBrand from "@/pages/services/ServicesBrand";
import ServicesOps from "@/pages/services/ServicesOps";
import ServicesAgents from "@/pages/services/ServicesAgents";
import SoftwareCRM from "@/pages/software/SoftwareCRM";
import SoftwareAccounting from "@/pages/software/SoftwareAccounting";
import SoftwareInventory from "@/pages/software/SoftwareInventory";
import SoftwareTasks from "@/pages/software/SoftwareTasks";

const renderArabic = (ui: React.ReactElement) => {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, "ar");

  return render(
    <MemoryRouter>
      <LocaleProvider>{ui}</LocaleProvider>
    </MemoryRouter>
  );
};

const serviceCases = [
  {
    name: "brand service",
    Page: ServicesBrand,
    required: ["امنح المشترين سبباً أوضح للثقة بك.", "ما الذي يتم تسليمه", "مواد المبيعات"],
  },
  {
    name: "ops service",
    Page: ServicesOps,
    required: ["استبدل الملفات المبعثرة والمعرفة الضمنية بنظام تشغيل أنظف.", "ما الذي يتم تسليمه", "بنية SharePoint"],
  },
  {
    name: "agents service",
    Page: ServicesAgents,
    required: ["أتمت العمل المتكرر دون أن تتخلى عن التحكم.", "ما الذي يتم تسليمه", "طبقة التحكم"],
  },
] as const;

const softwareCases = [
  {
    name: "crm software",
    Page: SoftwareCRM,
    required: ["إدارة علاقات مهيأة للتبني الفعلي.", "كيف يعمل الإعداد", "احجز عرضاً"],
  },
  {
    name: "accounting software",
    Page: SoftwareAccounting,
    required: ["تدفقات مالية مهيأة للوضوح لا للتعقيد.", "كيف يعمل الإعداد", "احجز عرضاً"],
  },
  {
    name: "inventory software",
    Page: SoftwareInventory,
    required: ["تتبّع للمخزون والأصول مع وصول مضبوط.", "كيف يعمل الإعداد", "احجز عرضاً"],
  },
  {
    name: "tasks software",
    Page: SoftwareTasks,
    required: ["إدارة مهام وعمل مهيأة للتسليم.", "كيف يعمل الإعداد", "احجز عرضاً"],
  },
] as const;

describe("Arabic detail pages", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  });

  afterEach(() => {
    cleanup();
  });

  describe.each(serviceCases)("service page localization", ({ Page, required }) => {
    it(`renders Arabic content for ${required[0]}`, () => {
      renderArabic(<Page />);

      required.forEach((text) => {
        expect(screen.getAllByText(text).length).toBeGreaterThan(0);
      });

      expect(screen.queryByText("Ready to scope")).not.toBeInTheDocument();
      expect(screen.queryByText("What gets delivered")).not.toBeInTheDocument();
    });
  });

  describe.each(softwareCases)("software page localization", ({ Page, required }) => {
    it(`renders Arabic content for ${required[0]}`, () => {
      renderArabic(<Page />);

      required.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });

      expect(screen.queryByText("How onboarding works")).not.toBeInTheDocument();
      expect(screen.queryByText("Book a Demo")).not.toBeInTheDocument();
    });
  });
});
