import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { CyberMatrix } from "@/components/ui/cyber-matrix";
import { CyberSpaceImpact } from "@/components/ui/cyber-space-impact";
import { CyberTraffic } from "@/components/ui/cyber-traffic";
import { CyberCircuit } from "@/components/ui/cyber-circuit";
import { CyberMario } from "@/components/ui/cyber-mario";
import { CyberRelay } from "@/components/ui/cyber-relay";
import { RevealGroup } from "@/components/motion/Reveal";
import { useLocale } from "@/lib/locale";
import { getUiCopy } from "@/lib/uiCopy";

interface ServiceCardItem {
  title: string;
  description: string;
  href?: string;
}

interface ServiceCardGridProps {
  items: ServiceCardItem[];
  className?: string;
}

const CARD_CONFIGS: {
  bg: string;
  Animation: React.FC<{ color?: string; speed?: number }>;
  href: string;
}[] = [
  { bg: "bg-plate-violet", Animation: CyberMario, href: "/services/brand" },
  { bg: "bg-plate-emerald", Animation: CyberMatrix, href: "/software" },
  { bg: "bg-plate-blue", Animation: CyberSpaceImpact, href: "/software" },
  { bg: "bg-plate-burgundy", Animation: CyberTraffic, href: "/services/ops" },
  { bg: "bg-plate-navy", Animation: CyberCircuit, href: "/software" },
  { bg: "bg-plate-astral", Animation: CyberRelay, href: "/services/agents" },
];

export const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({
  items,
  className,
}) => {
  const { locale, isRTL } = useLocale();
  const copy = getUiCopy(locale);

  return (
    <RevealGroup
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
        className
      )}
      stagger={86}
    >
      {items.map((item, index) => {
        const config = CARD_CONFIGS[index % CARD_CONFIGS.length];
        const Animation = config.Animation;
        const href = item.href || config.href;

        return (
          <div
            key={index}
            className={cn(
              "media-pop-card relative group h-full rounded-[34px] bg-card border border-ink/10 p-4 md:p-5 flex flex-col",
              "shadow-[0_22px_54px_-42px_rgba(8,15,32,0.18)] hover:border-ink/18 hover:shadow-xl"
            )}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {/* Animation Thumbnail */}
            <div className={cn("aspect-[16/9] relative overflow-hidden rounded-[26px]", config.bg)}>
              <div className="media-pop-target absolute inset-0 pointer-events-none">
                <Animation color="mint" speed={0.8} />
              </div>
            </div>

            {/* Content */}
            <div className="px-1 pt-6 pb-1 md:px-2 md:pt-7 flex flex-1 flex-col">
              <h3 className="font-serif text-heading-md font-semibold text-foreground mb-3 transition-colors group-hover:text-lavender">
                <Link to={href} className="relative z-10 before:absolute before:inset-0 before:z-0">
                  {item.title}
                </Link>
              </h3>
              <p className="text-body-md text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>
              <span
                className={cn(
                  "mt-auto inline-flex self-start items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-lavender relative z-10"
                )}
              >
                {copy.learnMore}
                <ArrowRight
                  size={16}
                  className={cn(
                    "transition-transform",
                    isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  )}
                />
              </span>
            </div>
          </div>
        );
      })}
    </RevealGroup>
  );
};

export default ServiceCardGrid;
