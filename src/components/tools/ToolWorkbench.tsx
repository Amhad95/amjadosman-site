import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  ClipboardCheck,
  FileText,
  Gauge,
  LayoutDashboard,
  Loader2,
  PenLine,
  Route,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { ToolOutputPanel } from "@/components/tools/ToolOutputPanel";
import type { ToolPageKey } from "@/lib/toolPageContent";

type PlateColor = "violet" | "navy" | "emerald" | "blue" | "astral" | "burgundy";

interface ToolWorkbenchProps {
  tool: ToolPageKey;
  title: string;
  description: string;
  eyebrow: string;
  plate: PlateColor;
  submitLabel: string;
  isLoading: boolean;
  output: string;
  onSubmit: (event: React.FormEvent) => void;
  children: React.ReactNode;
  brief: string[];
  inputsSummary: Array<{ label: string; value: string }>;
}

const plateClasses: Record<PlateColor, string> = {
  violet: "bg-plate-violet",
  navy: "bg-plate-navy",
  emerald: "bg-plate-emerald",
  blue: "bg-plate-blue",
  astral: "bg-plate-astral",
  burgundy: "bg-plate-burgundy",
};

const toolNav: Array<{
  key: ToolPageKey;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { key: "kpi-audit", label: "KPI Audit", href: "/tools/kpi-audit", icon: Gauge },
  { key: "dashboard-builder", label: "Dashboard Builder", href: "/tools/dashboard-builder", icon: LayoutDashboard },
  { key: "process-mapper", label: "Process Mapper", href: "/tools/process-mapper", icon: Route },
  { key: "sop-builder", label: "SOP Builder", href: "/tools/sop-builder", icon: ClipboardCheck },
  { key: "page-critique", label: "Page Critique", href: "/tools/page-critique", icon: PenLine },
  { key: "brand-audit", label: "Brand Audit", href: "/tools/brand-audit", icon: BarChart3 },
];

export const ToolWorkbench: React.FC<ToolWorkbenchProps> = ({
  tool,
  title,
  description,
  eyebrow,
  plate,
  submitLabel,
  isLoading,
  output,
  onSubmit,
  children,
  brief,
  inputsSummary,
}) => {
  const { locale, isRTL } = useLocale();
  const completedInputs = inputsSummary.filter((item) => item.value.trim()).length;

  return (
    <section className="bg-background">
      <div className="relative bg-background pt-24 pb-8 md:pt-28 md:pb-12">
        <div className="container mx-auto px-4 md:px-6 pt-6">
          <div
            className={cn(
              "hero-folder-card relative min-h-[300px] px-6 py-9 md:min-h-[335px] md:px-10 md:py-11 lg:px-12",
              plateClasses[plate]
            )}
          >
            <div className={cn("relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end", isRTL && "text-right")}>
              <div className="max-w-4xl">
                <Link
                  to="/tools"
                  className={cn(
                    "mb-7 inline-flex items-center gap-2 rounded-lg border border-offwhite/20 bg-offwhite/10 px-3 py-2 text-sm font-semibold text-offwhite transition-colors hover:bg-offwhite/15",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <ArrowLeft className={cn("h-4 w-4", isRTL && "rotate-180")} />
                  {locale === "ar" ? "العودة إلى الأدوات" : "Back to tools"}
                </Link>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-offwhite/70">{eyebrow}</p>
                <h1 className="font-serif text-poster-lg text-mint md:text-poster-xl">{title}</h1>
                <p className="mt-5 max-w-3xl text-body-lg leading-relaxed text-white/85">{description}</p>
              </div>

              <div className="rounded-xl border border-offwhite/16 bg-ink/20 p-4 text-offwhite shadow-lg backdrop-blur">
                <div className={cn("flex items-center gap-2 text-sm font-semibold", isRTL && "flex-row-reverse")}>
                  <Bot className="h-4 w-4 text-mint" />
                  Hugging Face model cascade
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-lg border border-offwhite/15 bg-offwhite/10 p-3">
                    <div className="text-2xl font-semibold text-mint">{completedInputs}</div>
                    <div className="text-offwhite/72">inputs filled</div>
                  </div>
                  <div className="rounded-lg border border-offwhite/15 bg-offwhite/10 p-3">
                    <div className="text-2xl font-semibold text-mint">8</div>
                    <div className="text-offwhite/72">fallbacks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:px-6 md:py-10">
        <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-xl border border-border bg-card p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Related tools
              </div>
              <nav className="mt-3 space-y-1">
                {toolNav.map((item) => {
                  const Icon = item.icon;
                  const active = item.key === tool;
                  return (
                    <Link
                      key={item.key}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "tool-accent-bg text-white"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                        isRTL && "flex-row-reverse"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Better input
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {brief.map((item) => (
                  <li key={item} className={cn("flex gap-2 leading-relaxed", isRTL && "flex-row-reverse")}>
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 tool-accent-text" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-6">
            <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card shadow-sm">
              <div className={cn("border-b border-border p-5 md:p-6", isRTL && "text-right")}>
                <div className={cn("flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between", isRTL && "lg:flex-row-reverse")}>
                  <div>
                    <div className={cn("flex items-center gap-2 text-sm font-semibold text-foreground", isRTL && "flex-row-reverse")}>
                      <FileText className="h-4 w-4 tool-accent-text" />
                      Working canvas
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Structure the raw context here, then generate a reusable working document.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {inputsSummary.map((item) => (
                      <span
                        key={item.label}
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs font-medium",
                          item.value.trim()
                            ? "tool-accent-border tool-accent-soft tool-accent-text"
                            : "border-border bg-muted text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-0 2xl:grid-cols-[minmax(0,1fr)_300px]">
                <div className="space-y-5 p-5 md:p-6">{children}</div>
                <div className="border-t border-border bg-muted/20 p-5 2xl:border-l 2xl:border-t-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Artifact package
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-foreground">
                    <div className="rounded-lg border tool-accent-border bg-background p-3">Diagnostic scorecard and failure points</div>
                    <div className="rounded-lg border tool-accent-border bg-background p-3">Prioritized implementation table</div>
                    <div className="rounded-lg border tool-accent-border bg-background p-3">Reusable copy, workflow, or metric templates</div>
                  </div>
                </div>
              </div>

              <div className={cn("flex flex-col gap-3 border-t border-border p-5 sm:flex-row sm:items-center sm:justify-between md:p-6", isRTL && "sm:flex-row-reverse")}>
                <div className="text-sm text-muted-foreground">
                  {isLoading ? "Generating through the fallback model stack..." : "No chat thread. One focused tool run, one structured output."}
                </div>
                <PrimaryButton type="submit" disabled={isLoading} className="w-full sm:w-auto">
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isLoading ? "Analyzing..." : submitLabel}
                </PrimaryButton>
              </div>
            </form>

            {(output || isLoading) && <ToolOutputPanel output={output} isStreaming={isLoading} />}

            {!output && !isLoading && (
              <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6">
                <div className="max-w-2xl">
                  <div className="text-sm font-semibold text-foreground">Response workspace</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Results appear here with a section map, action count, table count, Markdown rendering, and copy controls.
                  </p>
                  <div className="mt-4">
                    <SecondaryButton href="/tools" variant="light">Explore other tools</SecondaryButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolWorkbench;
