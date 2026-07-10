import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { useLocale } from "@/lib/locale";
import type { ResolvedWorkCase } from "@/lib/fallbackContent";
import { cn } from "@/lib/utils";

interface WorkCaseCardProps {
  item: ResolvedWorkCase;
}

const serviceLineLabels: Record<string, string> = {
  brand: "Brand & Growth",
  ops: "Internal Ops",
  agents: "Automation",
  "software-crm": "CRM",
  "software-accounting": "Accounting",
  "software-inventory": "Inventory",
  "software-tasks": "Tasks",
};

export const WorkCaseCard: React.FC<WorkCaseCardProps> = ({ item }) => {
  const { isRTL } = useLocale();
  const serviceTags = (item.service_line_ids ?? [])
    .map((id) => serviceLineLabels[id])
    .filter(Boolean);

  return (
    <div 
      className="media-pop-card group relative bg-card border border-ink/10 rounded-[34px] p-4 md:p-5 flex flex-col hover:border-ink/18 hover:shadow-xl shadow-[0_22px_54px_-42px_rgba(8,15,32,0.18)]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="aspect-video rounded-[26px] bg-muted flex items-center justify-center overflow-hidden">
        {item.thumbnail_url ? (
          <img
            src={item.thumbnail_url}
            alt={item.title}
            className="media-pop-target w-full h-full object-cover"
          />
        ) : (
          <div className="media-pop-target w-full h-full bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center">
            {item.category && (
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                {item.category}
              </span>
            )}
          </div>
        )}
      </div>
      <div className={cn("px-1 pt-6 pb-1 md:px-2 flex flex-col flex-1", isRTL && "text-right")}>

        <h3 className="font-serif text-heading-md text-foreground mb-3 line-clamp-2 min-h-[4rem] transition-colors group-hover:text-lavender">
          <Link to={item.href} className="relative z-10 before:absolute before:inset-0 before:z-0">
            {item.title}
          </Link>
        </h3>
        <p className="text-body-sm text-muted-foreground mb-6 flex-1 line-clamp-2 leading-relaxed">{item.description}</p>
        <div className="mt-auto mb-6 flex flex-wrap gap-2">
          {[item.category, item.partner, item.sector, item.year]
            .filter(Boolean)
            .map((tag) => (
              <span
                key={tag}
                className="bg-muted border border-ink/5 px-2.5 py-1 rounded-full text-xs font-semibold text-muted-foreground whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
        </div>
        {serviceTags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="bg-plate-violet/10 border border-plate-violet/15 px-2.5 py-1 rounded-full text-xs font-semibold text-plate-violet whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <span className="relative z-10">
          <SecondaryButton href={item.href} variant="light">
            {item.cta_label}
          </SecondaryButton>
        </span>
      </div>
    </div>
  );
};

export default WorkCaseCard;
