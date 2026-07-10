import React from "react";
import { Mail, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale";
import { legalPageCopy, pickLocaleCopy } from "@/lib/pageCopy";

export interface LegalSection {
  title: string;
  body: string[];
  bullets?: string[];
}

interface LegalDocumentProps {
  lastUpdatedLabel: string;
  lastUpdated: string;
  sections: LegalSection[];
  scopeText: string;
  tone: "privacy" | "terms";
}

export const LegalDocument: React.FC<LegalDocumentProps> = ({
  lastUpdatedLabel,
  lastUpdated,
  sections,
  scopeText,
  tone,
}) => {
  const { locale, isRTL } = useLocale();
  const copy = pickLocaleCopy(legalPageCopy, locale);
  const featured = sections.slice(0, 3);
  const remaining = sections.slice(3);
  const plate = tone === "privacy" ? "bg-plate-navy" : "bg-plate-burgundy";

  return (
    <section className="bg-background py-6 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start",
            isRTL && "lg:grid-cols-[0.64fr_0.36fr]"
          )}
        >
          <aside
            className={cn(
              "lg:sticky lg:top-28 space-y-5",
              isRTL && "lg:order-2 text-right"
            )}
          >
            <div className={cn("rounded-[28px] p-6 text-offwhite shadow-[0_22px_56px_-44px_rgba(8,15,32,0.32)]", plate)}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-offwhite/60">
                {copy.overview}
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className={cn("mb-2 flex items-center gap-2 text-mint", isRTL && "flex-row-reverse")}>
                    <Sparkles size={16} />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {copy.effective}
                    </span>
                  </div>
                  <p className="font-serif text-2xl text-mint">{lastUpdated}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className={cn("mb-2 flex items-center gap-2 text-mint", isRTL && "flex-row-reverse")}>
                    <ShieldCheck size={16} />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {copy.scope}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-offwhite/78">{scopeText}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className={cn("mb-2 flex items-center gap-2 text-mint", isRTL && "flex-row-reverse")}>
                    <Mail size={16} />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                      {copy.contact}
                    </span>
                  </div>
                  <a className="text-sm font-semibold text-offwhite hover:text-mint" href={`mailto:${copy.contactValue}`}>
                    {copy.contactValue}
                  </a>
                </div>
              </div>
            </div>

            <nav className="rounded-[24px] border border-ink/10 bg-card p-5 shadow-[0_18px_48px_-42px_rgba(8,15,32,0.3)]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {copy.sections}
              </p>
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#legal-${index}`}
                    className={cn(
                      "grid grid-cols-[auto_1fr] gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                      isRTL && "grid-cols-[1fr_auto] text-right"
                    )}
                  >
                    <span className="font-mono text-xs text-foreground/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <div className={cn("space-y-8", isRTL && "lg:order-1 text-right")}>
            <div className="grid gap-4 md:grid-cols-3">
              {featured.map((section, index) => (
                <article
                  key={section.title}
                  className="rounded-[24px] border border-ink/10 bg-card p-5 shadow-[0_18px_48px_-42px_rgba(8,15,32,0.25)]"
                >
                  <p className="mb-4 font-mono text-xs text-foreground/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mb-3 font-serif text-heading-md text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {section.body[0]}
                  </p>
                </article>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              {lastUpdatedLabel}: {lastUpdated}
            </p>

            <div className="space-y-5">
              {sections.map((section, index) => (
                <section
                  id={`legal-${index}`}
                  key={section.title}
                  className="scroll-mt-28 rounded-[24px] border border-ink/10 bg-card p-6 md:p-8 shadow-[0_18px_48px_-44px_rgba(8,15,32,0.26)]"
                >
                  <div className={cn("mb-5 flex items-start gap-4", isRTL && "flex-row-reverse")}>
                    <span className="mt-1 rounded-full bg-mint px-3 py-1 font-mono text-xs font-semibold text-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-serif text-heading-md text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-body-md leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="grid gap-3 pt-2 md:grid-cols-2">
                        {section.bullets.map((item) => (
                          <li
                            key={item}
                            className={cn(
                              "rounded-2xl border border-ink/10 bg-muted/55 px-4 py-3 text-sm leading-relaxed text-foreground",
                              isRTL && "text-right"
                            )}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDocument;
