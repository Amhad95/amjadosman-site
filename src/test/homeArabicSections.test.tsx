import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Shield } from "lucide-react";
import Index from "@/pages/Index";
import { LocaleProvider, LOCALE_STORAGE_KEY } from "@/lib/locale";
import { OutcomeTiles } from "@/components/sections/OutcomeTiles";
import { CapabilityGrid } from "@/components/sections/CapabilityGrid";

const renderArabic = (ui: React.ReactElement) => {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, "ar");

  return render(
    <MemoryRouter>
      <LocaleProvider>{ui}</LocaleProvider>
    </MemoryRouter>
  );
};

describe("Arabic homepage sections", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  });

  afterEach(() => {
    cleanup();
  });

  it("renders localized outcomes and delivery sections without the old English leak strings", () => {
    renderArabic(<Index />);

    expect(screen.getByText("ما الذي ينتج فعلاً عن العمل معنا")).toBeInTheDocument();
    expect(screen.getByText("احجز فحص ملاءمة لمدة 20 دقيقة")).toBeInTheDocument();
    expect(screen.getByText("تسليم منظم واجتماعات أقل")).toBeInTheDocument();
    expect(screen.getByText("ما الذي يمكن توقعه")).toBeInTheDocument();
    expect(screen.getAllByText("المواءمة").length).toBeGreaterThan(0);

    expect(screen.queryByText("Structured delivery, fewer meetings")).not.toBeInTheDocument();
    expect(screen.queryByText("What you can expect")).not.toBeInTheDocument();
    expect(screen.queryByText("Delivery rhythm")).not.toBeInTheDocument();

    const alignButtons = screen.getAllByRole("button", { name: /المواءمة/ });
    expect(alignButtons.some((button) => button.className.includes("text-right"))).toBe(true);
    expect(document.documentElement.dir).toBe("rtl");
  }, 20000);

  it("applies RTL card layout hooks to shared outcome and capability tiles in Arabic mode", () => {
    const { container } = renderArabic(
      <>
        <OutcomeTiles
          outcomes={[
            {
              headline: "نتيجة أوضح",
              description: "وصف مختصر يشرح النتيجة.",
            },
          ]}
        />
        <CapabilityGrid
          capabilities={[
            {
              icon: Shield,
              title: "صلاحيات حسب الدور",
              description: "وصف مختصر لقدرة أساسية.",
            },
          ]}
        />
      </>
    );

    expect(screen.getByText("نتيجة أوضح")).toBeInTheDocument();
    expect(screen.getByText("صلاحيات حسب الدور")).toBeInTheDocument();
    expect(container.querySelectorAll(".flex-row-reverse").length).toBeGreaterThan(1);
  });
});
