import React from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export type OutcomeMotionVariant =
  | 'brand-impression'
  | 'brand-positioning'
  | 'brand-sales'
  | 'brand-system'
  | 'ops-files'
  | 'ops-processes'
  | 'ops-onboarding'
  | 'ops-handoffs'
  | 'agents-admin'
  | 'agents-handoffs'
  | 'agents-knowledge'
  | 'agents-safety';

type OutcomeMotionTone = 'brand' | 'ops' | 'agents';

interface OutcomeMotionCardProps {
  title: string;
  body: string;
  variant: OutcomeMotionVariant;
  tone: OutcomeMotionTone;
  sequence: number;
  className?: string;
}

interface VisualProps {
  animate: boolean;
}

const toneStyles: Record<
  OutcomeMotionTone,
  {
    label: string;
    surface: string;
    halo: string;
    haloSecondary: string;
  }
> = {
  brand: {
    label: 'Brand signal',
    surface: 'bg-[linear-gradient(135deg,rgba(7,34,93,0.98),rgba(15,18,33,0.94))]',
    halo: 'bg-mint/20',
    haloSecondary: 'bg-lavender/18',
  },
  ops: {
    label: 'Ops signal',
    surface: 'bg-[linear-gradient(135deg,rgba(62,26,124,0.98),rgba(14,22,46,0.94))]',
    halo: 'bg-lavender/20',
    haloSecondary: 'bg-mint/14',
  },
  agents: {
    label: 'Automation signal',
    surface: 'bg-[linear-gradient(135deg,rgba(5,73,58,0.98),rgba(9,20,24,0.95))]',
    halo: 'bg-mint/22',
    haloSecondary: 'bg-white/10',
  },
};

const IllustrationFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg viewBox="0 0 320 180" className="h-full w-full" fill="none" aria-hidden="true">
    {children}
  </svg>
);

const BrandImpressionVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <g className="text-mint/18">
      <rect x="22" y="26" width="164" height="112" rx="24" fill="currentColor" />
      <rect x="196" y="48" width="88" height="64" rx="18" fill="currentColor" />
    </g>

    <g className={cn('text-white/80', animate && 'outcome-float-y')} style={animate ? { animationDelay: '-1.2s' } : undefined}>
      <rect x="52" y="44" width="122" height="86" rx="18" stroke="currentColor" strokeWidth="1.35" />
      <path d="M68 62h58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M68 78h42" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M68 92h86" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M68 104h58" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </g>

    <g className={cn('text-mint', animate && 'outcome-float-y-soft')} style={animate ? { animationDelay: '-2.4s' } : undefined}>
      <rect x="168" y="34" width="102" height="74" rx="18" stroke="currentColor" strokeWidth="1.4" />
      <rect x="184" y="50" width="52" height="28" rx="12" fill="currentColor" opacity="0.14" />
      <circle cx="244" cy="64" r="12" fill="currentColor" opacity="0.18" />
      <path d="M184 88h66" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </g>

    <rect
      x="88"
      y="38"
      width="14"
      height="98"
      rx="7"
      className={cn('text-mint/22', animate && 'outcome-scan-y')}
      fill="currentColor"
    />

    <circle
      cx="254"
      cy="126"
      r="13"
      className={cn('text-mint/28', animate && 'outcome-pulse-soft')}
      fill="currentColor"
      style={animate ? { animationDelay: '-1s' } : undefined}
    />
  </IllustrationFrame>
);

const BrandPositioningVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <g className="text-lavender/20">
      <rect x="28" y="34" width="78" height="42" rx="16" fill="currentColor" />
      <rect x="214" y="56" width="78" height="42" rx="16" fill="currentColor" />
      <rect x="42" y="114" width="94" height="38" rx="16" fill="currentColor" />
    </g>

    <path
      d="M106 55h42M184 76h30M136 132h24M148 58l12 22M184 76l-24 16M136 132l24-24"
      className={cn('text-white/55', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      style={animate ? { animationDelay: '-0.8s' } : undefined}
    />

    <g className="text-white/80">
      <rect x="36" y="42" width="58" height="26" rx="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="224" y="64" width="58" height="26" rx="12" stroke="currentColor" strokeWidth="1.2" />
      <rect x="52" y="121" width="74" height="24" rx="12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M48 55h34M236 77h30M64 133h38" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </g>

    <g className="text-mint">
      <circle cx="160" cy="84" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <circle cx="160" cy="84" r="14" fill="currentColor" opacity="0.14" />
      <circle
        cx="160"
        cy="84"
        r="8"
        className={cn(animate && 'outcome-pulse-soft')}
        fill="currentColor"
        opacity="0.9"
      />
      <g className={cn(animate && 'outcome-rotate-slow')} style={animate ? { animationDuration: '10s' } : undefined}>
        <circle cx="160" cy="84" r="46" stroke="currentColor" strokeWidth="1.2" opacity="0.32" />
        <circle cx="206" cy="84" r="5.5" fill="currentColor" />
      </g>
    </g>
  </IllustrationFrame>
);

const BrandSalesVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <path
      d="M40 130h240"
      className={cn('text-white/58', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />

    <g className={cn('text-white/78', animate && 'outcome-float-y')} style={animate ? { animationDelay: '-0.6s' } : undefined}>
      <rect x="48" y="48" width="70" height="74" rx="16" stroke="currentColor" strokeWidth="1.3" />
      <path d="M62 64h34M62 78h24M62 92h40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </g>

    <g className={cn('text-mint', animate && 'outcome-float-y-soft')} style={animate ? { animationDelay: '-1.6s' } : undefined}>
      <rect x="124" y="34" width="82" height="88" rx="18" stroke="currentColor" strokeWidth="1.4" />
      <rect x="140" y="52" width="44" height="26" rx="12" fill="currentColor" opacity="0.14" />
      <path d="M140 88h50M140 100h34" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </g>

    <g className={cn('text-white/72', animate && 'outcome-float-y')} style={animate ? { animationDelay: '-2.2s' } : undefined}>
      <rect x="214" y="54" width="58" height="68" rx="16" stroke="currentColor" strokeWidth="1.3" />
      <path d="M226 70h24M226 84h32M226 98h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    <rect
      x="126"
      y="34"
      width="14"
      height="88"
      rx="7"
      className={cn('text-mint/18', animate && 'outcome-scan-y')}
      fill="currentColor"
      style={animate ? { animationDelay: '-0.7s' } : undefined}
    />
  </IllustrationFrame>
);

const BrandSystemVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <path
      d="M86 58h44M190 58h44M86 122h44M190 122h44M130 58v64M190 58v64"
      className={cn('text-lavender/58', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />

    {[
      { x: 58, y: 36, delay: '-0.3s' },
      { x: 202, y: 36, delay: '-1.2s' },
      { x: 58, y: 100, delay: '-2s' },
      { x: 202, y: 100, delay: '-2.8s' },
    ].map((node) => (
      <g
        key={`${node.x}-${node.y}`}
        className={cn('text-white/82', animate && 'outcome-float-y-soft')}
        style={animate ? { animationDelay: node.delay } : undefined}
      >
        <rect x={node.x} y={node.y} width="56" height="44" rx="16" stroke="currentColor" strokeWidth="1.25" />
        <path d={`M${node.x + 14} ${node.y + 18}h28M${node.x + 14} ${node.y + 28}h18`} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    ))}

    <g className="text-mint">
      <g className={cn(animate && 'outcome-rotate-slow')} style={animate ? { animationDuration: '11s' } : undefined}>
        <circle cx="160" cy="90" r="26" stroke="currentColor" strokeWidth="1.4" opacity="0.36" />
        <path d="M160 60l4 8-8 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <circle cx="160" cy="90" r="8" fill="currentColor" className={cn(animate && 'outcome-pulse-soft')} />
    </g>
  </IllustrationFrame>
);

const OpsFilesVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <g className={cn('text-white/78', animate && 'outcome-float-x')} style={animate ? { animationDelay: '-0.5s' } : undefined}>
      <rect x="42" y="46" width="56" height="34" rx="12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M52 60h26M52 70h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    <g className={cn('text-white/68', animate && 'outcome-float-x')} style={animate ? { animationDelay: '-1.4s' } : undefined}>
      <rect x="58" y="84" width="64" height="38" rx="12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M70 98h32M70 108h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    <g className={cn('text-white/58', animate && 'outcome-float-x')} style={animate ? { animationDelay: '-2.2s' } : undefined}>
      <rect x="36" y="124" width="52" height="26" rx="12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M46 136h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    <path
      d="M126 64h36M122 102h42M90 136h78"
      className={cn('text-lavender', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
    />

    <g className="text-mint">
      <rect x="186" y="42" width="96" height="100" rx="22" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />
      <rect x="202" y="58" width="28" height="24" rx="10" fill="currentColor" opacity="0.12" />
      <rect x="238" y="58" width="28" height="24" rx="10" fill="currentColor" opacity="0.12" />
      <rect x="202" y="92" width="28" height="24" rx="10" fill="currentColor" opacity="0.12" />
      <rect x="238" y="92" width="28" height="24" rx="10" fill="currentColor" opacity="0.12" />
      <rect
        x="194"
        y="42"
        width="14"
        height="100"
        rx="7"
        className={cn(animate && 'outcome-scan-y')}
        fill="currentColor"
        opacity="0.16"
      />
    </g>
  </IllustrationFrame>
);

const OpsProcessesVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <path
      d="M54 92h212"
      className={cn('text-white/34', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />

    {[
      { x: 62, label: '01', delay: '-0.2s' },
      { x: 126, label: '02', delay: '-1.2s' },
      { x: 190, label: '03', delay: '-2.2s' },
      { x: 254, label: '04', delay: '-3.2s' },
    ].map((step) => (
      <g key={step.label} className="text-white/82">
        <circle
          cx={step.x}
          cy="92"
          r="16"
          className={cn(animate && 'outcome-pulse-soft')}
          style={animate ? { animationDelay: step.delay } : undefined}
          fill="currentColor"
          opacity="0.12"
        />
        <circle cx={step.x} cy="92" r="16" stroke="currentColor" strokeWidth="1.2" />
        <text x={step.x} y="96" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.85">
          {step.label}
        </text>
      </g>
    ))}

    <rect
      x="44"
      y="82"
      width="42"
      height="20"
      rx="10"
      className={cn('text-mint/20', animate && 'outcome-scan-x')}
      fill="currentColor"
    />

    <g className="text-lavender/70">
      <rect x="40" y="40" width="52" height="18" rx="9" fill="currentColor" />
      <rect x="110" y="126" width="56" height="18" rx="9" fill="currentColor" />
      <rect x="176" y="40" width="62" height="18" rx="9" fill="currentColor" />
      <rect x="242" y="126" width="34" height="18" rx="9" fill="currentColor" />
    </g>
  </IllustrationFrame>
);

const OpsOnboardingVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <path
      d="M48 132h48v-24h48V84h48V60h64"
      className={cn('text-white/60', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {[
      { x: 56, y: 104, w: 52, h: 30, delay: '-0.4s', color: 'text-white/76' },
      { x: 112, y: 80, w: 58, h: 30, delay: '-1.2s', color: 'text-white/68' },
      { x: 176, y: 56, w: 62, h: 30, delay: '-2s', color: 'text-white/82' },
    ].map((panel) => (
      <g
        key={`${panel.x}-${panel.y}`}
        className={cn(panel.color, animate && 'outcome-float-y-soft')}
        style={animate ? { animationDelay: panel.delay } : undefined}
      >
        <rect x={panel.x} y={panel.y} width={panel.w} height={panel.h} rx="12" stroke="currentColor" strokeWidth="1.2" />
        <path d={`M${panel.x + 12} ${panel.y + 13}h${panel.w - 24}M${panel.x + 12} ${panel.y + 21}h${panel.w - 34}`} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    ))}

    <g className={cn('text-mint', animate && 'outcome-packet-diagonal-up')} style={animate ? { animationDelay: '-0.8s' } : undefined}>
      <circle cx="60" cy="132" r="7" fill="currentColor" />
      <circle cx="60" cy="132" r="13" stroke="currentColor" strokeWidth="1.2" opacity="0.22" />
    </g>

    <circle cx="272" cy="60" r="16" className={cn('text-mint/24', animate && 'outcome-pulse-soft')} fill="currentColor" />
    <path d="M264 60h16M272 52v16" className="text-mint" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </IllustrationFrame>
);

const OpsHandoffsVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <g className="text-white/80">
      <rect x="42" y="58" width="62" height="58" rx="16" stroke="currentColor" strokeWidth="1.2" />
      <rect x="130" y="58" width="62" height="58" rx="16" stroke="currentColor" strokeWidth="1.2" />
      <rect x="218" y="58" width="62" height="58" rx="16" stroke="currentColor" strokeWidth="1.2" />
      <path d="M56 78h34M144 78h34M232 78h34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M56 92h22M144 92h22M232 92h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    <path
      d="M104 87h26M192 87h26"
      className={cn('text-lavender', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />

    <g className={cn('text-mint', animate && 'outcome-packet-right')} style={animate ? { animationDelay: '-0.2s' } : undefined}>
      <circle cx="104" cy="87" r="6" fill="currentColor" />
    </g>
    <g className={cn('text-mint', animate && 'outcome-packet-right')} style={animate ? { animationDelay: '-2.1s' } : undefined}>
      <circle cx="192" cy="87" r="6" fill="currentColor" />
    </g>
  </IllustrationFrame>
);

const AgentsAdminVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <g className="text-white/75">
      <rect x="36" y="46" width="98" height="88" rx="18" stroke="currentColor" strokeWidth="1.25" />
      <path d="M54 64h48M54 80h62M54 96h54M54 112h44" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </g>

    <g className="text-mint">
      <rect x="182" y="56" width="100" height="70" rx="18" stroke="currentColor" strokeWidth="1.35" />
      <rect x="198" y="74" width="60" height="22" rx="11" fill="currentColor" opacity="0.16" />
      <path d="M198 108h42" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="260" cy="108" r="10" className={cn(animate && 'outcome-pulse-soft')} fill="currentColor" opacity="0.18" />
      <path d="M256 108l3 3 6-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <path
      d="M134 90h48"
      className={cn('text-white/58', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />

    <rect
      x="176"
      y="56"
      width="12"
      height="70"
      rx="6"
      className={cn('text-mint/18', animate && 'outcome-scan-y')}
      fill="currentColor"
      style={animate ? { animationDelay: '-1.1s' } : undefined}
    />
  </IllustrationFrame>
);

const AgentsHandoffsVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <g className="text-white/76">
      <rect x="48" y="68" width="52" height="44" rx="14" stroke="currentColor" strokeWidth="1.2" />
      <rect x="218" y="40" width="56" height="40" rx="14" stroke="currentColor" strokeWidth="1.2" />
      <rect x="218" y="102" width="56" height="40" rx="14" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="160" cy="90" r="20" stroke="currentColor" strokeWidth="1.25" />
      <path d="M60 84h26M230 56h30M230 118h30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    <path
      d="M100 90h40M180 78l38-18M180 102l38 18"
      className={cn('text-white/62', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="160" cy="90" r="8" className={cn('text-mint', animate && 'outcome-pulse-soft')} fill="currentColor" />

    <g className={cn('text-mint', animate && 'outcome-packet-diagonal-up')} style={animate ? { animationDelay: '-0.5s' } : undefined}>
      <circle cx="180" cy="78" r="5.5" fill="currentColor" />
    </g>
    <g className={cn('text-mint', animate && 'outcome-packet-diagonal-down')} style={animate ? { animationDelay: '-1.7s' } : undefined}>
      <circle cx="180" cy="102" r="5.5" fill="currentColor" />
    </g>
  </IllustrationFrame>
);

const AgentsKnowledgeVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <g className="text-white/80">
      <rect x="46" y="34" width="148" height="28" rx="14" stroke="currentColor" strokeWidth="1.25" />
      <path d="M62 48h70" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="170" cy="48" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M176 54l7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </g>

    <g className="text-white/64">
      <rect x="58" y="88" width="64" height="20" rx="10" fill="currentColor" />
      <rect x="70" y="114" width="72" height="20" rx="10" fill="currentColor" />
      <rect x="82" y="140" width="80" height="16" rx="8" fill="currentColor" />
    </g>

    <path
      d="M194 48h26l18 38h38"
      className={cn('text-mint', animate && 'outcome-draw-route')}
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <g className="text-mint">
      <rect x="220" y="70" width="68" height="46" rx="16" stroke="currentColor" strokeWidth="1.25" />
      <path d="M236 88h28M236 98h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="214" cy="48" r="10" className={cn(animate && 'outcome-pulse-soft')} fill="currentColor" opacity="0.18" />
    </g>

    <rect
      x="126"
      y="34"
      width="18"
      height="28"
      rx="9"
      className={cn('text-mint/18', animate && 'outcome-scan-x')}
      fill="currentColor"
    />
  </IllustrationFrame>
);

const AgentsSafetyVisual: React.FC<VisualProps> = ({ animate }) => (
  <IllustrationFrame>
    <g className="text-white/78">
      <path
        d="M160 42l40 14v34c0 24-16 42-40 50-24-8-40-26-40-50V56l40-14z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path d="M146 88l10 10 18-22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <g className="text-mint">
      <g className={cn(animate && 'outcome-rotate-slow')} style={animate ? { animationDuration: '12s' } : undefined}>
        <circle cx="160" cy="84" r="56" stroke="currentColor" strokeWidth="1.1" opacity="0.25" />
        <circle cx="216" cy="84" r="5" fill="currentColor" />
      </g>
      <circle cx="160" cy="84" r="10" className={cn(animate && 'outcome-pulse-soft')} fill="currentColor" opacity="0.18" />
    </g>

    {[
      { cx: 104, cy: 84, delay: '-0.5s' },
      { cx: 190, cy: 40, delay: '-1.6s' },
      { cx: 214, cy: 132, delay: '-2.8s' },
    ].map((checkpoint) => (
      <circle
        key={`${checkpoint.cx}-${checkpoint.cy}`}
        cx={checkpoint.cx}
        cy={checkpoint.cy}
        r="7"
        className={cn('text-mint', animate && 'outcome-pulse-soft')}
        style={animate ? { animationDelay: checkpoint.delay } : undefined}
        fill="currentColor"
      />
    ))}

    <path d="M88 142h52M88 154h76" className="text-white/56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </IllustrationFrame>
);

const visualMap: Record<OutcomeMotionVariant, React.FC<VisualProps>> = {
  'brand-impression': BrandImpressionVisual,
  'brand-positioning': BrandPositioningVisual,
  'brand-sales': BrandSalesVisual,
  'brand-system': BrandSystemVisual,
  'ops-files': OpsFilesVisual,
  'ops-processes': OpsProcessesVisual,
  'ops-onboarding': OpsOnboardingVisual,
  'ops-handoffs': OpsHandoffsVisual,
  'agents-admin': AgentsAdminVisual,
  'agents-handoffs': AgentsHandoffsVisual,
  'agents-knowledge': AgentsKnowledgeVisual,
  'agents-safety': AgentsSafetyVisual,
};

const OutcomeMotionCardComponent: React.FC<OutcomeMotionCardProps> = ({
  title,
  body,
  variant,
  tone,
  sequence,
  className,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Visual = visualMap[variant];
  const theme = toneStyles[tone];

  return (
    <div
      className={cn(
        'media-pop-card outcome-motion-card group rounded-[28px] border border-ink/10 bg-card p-4 md:p-5 shadow-[0_24px_50px_-34px_rgba(8,15,32,0.28)] hover:border-ink/18 hover:shadow-[0_26px_60px_-32px_rgba(8,15,32,0.34)]',
        className
      )}
    >
      <div className={cn('outcome-motion relative mb-6 h-44 overflow-hidden rounded-[22px] border border-white/10', theme.surface)}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className={cn('absolute -left-10 top-0 h-24 w-24 rounded-full blur-3xl', theme.halo)} />
        <div className={cn('absolute right-0 top-12 h-28 w-28 rounded-full blur-3xl', theme.haloSecondary)} />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-offwhite/55">
          <span>{theme.label}</span>
          <span>{String(sequence).padStart(2, '0')}</span>
        </div>

        <div className="media-pop-target relative h-full w-full px-3 pb-3 pt-9">
          <Visual animate={!prefersReducedMotion} />
        </div>
      </div>

      <h3 className="font-serif text-heading-md text-foreground mb-3">{title}</h3>
      <p className="text-body-md text-muted-foreground">{body}</p>
    </div>
  );
};

export const OutcomeMotionCard = React.memo(OutcomeMotionCardComponent);
export default OutcomeMotionCard;
