import React from "react";
import { cn } from "@/lib/utils";
import { CyberMatrix } from "@/components/ui/cyber-matrix";
import { CyberSpaceImpact } from "@/components/ui/cyber-space-impact";
import { CyberTraffic } from "@/components/ui/cyber-traffic";
import { CyberCircuit } from "@/components/ui/cyber-circuit";
import { CyberMario } from "@/components/ui/cyber-mario";
import { CyberRelay } from "@/components/ui/cyber-relay";
import { RevealGroup } from "@/components/motion/Reveal";

interface ServiceCardItem {
  title: string;
  description: string;
}

interface ServiceCardGridProps {
  items: ServiceCardItem[];
  className?: string;
}

const CARD_CONFIGS: {
  bg: string;
  Animation: React.FC<{ color?: string; speed?: number }>;
}[] = [
  { bg: "bg-plate-violet", Animation: CyberMario },      // Brand and Communications
  { bg: "bg-plate-emerald", Animation: CyberMatrix },    // Web and CMS
  { bg: "bg-plate-blue", Animation: CyberSpaceImpact },  // Digital Apps
  { bg: "bg-plate-burgundy", Animation: CyberTraffic },  // Internal Operations
  { bg: "bg-plate-navy", Animation: CyberCircuit },      // Subscription Software
  { bg: "bg-plate-astral", Animation: CyberRelay },      // AI Agents
];

export const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({
  items,
  className,
}) => {
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

        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl overflow-hidden transition-all duration-200",
              "hover:shadow-xl hover:-translate-y-1",
              config.bg
            )}
          >
            {/* Animation Thumbnail */}
            <div className="aspect-[16/9] relative overflow-hidden border-b border-mint">
              <Animation color="mint" speed={0.8} />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="font-serif text-heading-md font-semibold text-mint mb-3">
                {item.title}
              </h3>
              <p className="text-body-md text-offwhite/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </RevealGroup>
  );
};

export default ServiceCardGrid;
