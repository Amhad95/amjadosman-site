import React from 'react';
import { cn } from '@/lib/utils';

interface ToolHeaderAnimationProps {
  slug: string;
  className?: string;
}

const Frame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('w-full max-w-[320px] md:max-w-[360px] aspect-[4/3] rounded-2xl border border-white/20 bg-white/[0.06] p-4 backdrop-blur-[1px]', className)}>
    {children}
  </div>
);

const SopAnimation = () => (
  <Frame>
    <div className="h-full rounded-xl border border-white/15 p-3 flex flex-col gap-2 bg-ink/20">
      {[0, 1, 2, 3].map((line) => (
        <div key={line} className="h-2 rounded bg-mint/35 overflow-hidden">
          <span className="block h-full bg-mint/70 animate-[pulse_2.4s_ease-in-out_infinite]" style={{ animationDelay: `${line * 0.25}s`, width: `${88 - line * 14}%` }} />
        </div>
      ))}
      <div className="mt-auto h-8 rounded border border-white/20 px-2 flex items-center">
        <span className="text-[11px] text-mint/80 tracking-wide">SOP v1.0</span>
        <span className="ml-1 h-3 w-px bg-mint animate-[pulse_1.1s_linear_infinite]" />
      </div>
    </div>
  </Frame>
);

const CritiqueAnimation = () => (
  <Frame>
    <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
      <rect x="24" y="30" width="272" height="180" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
      <rect x="42" y="54" width="180" height="14" rx="7" fill="rgba(96,255,228,0.35)" />
      <rect x="42" y="78" width="236" height="8" rx="4" fill="rgba(255,255,255,0.25)" />
      <rect x="42" y="94" width="210" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
      <circle cx="76" cy="142" r="22" fill="none" stroke="rgba(96,255,228,0.7)" strokeWidth="3" className="animate-[pulse_2.4s_ease-in-out_infinite]" />
      <line x1="90" y1="157" x2="108" y2="176" stroke="rgba(96,255,228,0.7)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </Frame>
);

const BrandAnimation = () => (
  <Frame>
    <div className="h-full grid grid-cols-5 gap-2">
      {[0, 1, 2, 3, 4].map((col) => (
        <div key={col} className="rounded-lg bg-white/5 p-1.5 flex flex-col gap-1.5">
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              className="h-3 rounded bg-mint/35 animate-[pulse_2.8s_ease-in-out_infinite]"
              style={{ animationDelay: `${(col + dot) * 0.12}s`, opacity: 0.45 + ((col + dot) % 3) * 0.2 }}
            />
          ))}
        </div>
      ))}
    </div>
  </Frame>
);

const ProcessAnimation = () => (
  <Frame>
    <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={56 + i * 72} cy={120 + (i % 2 === 0 ? -28 : 24)} r="17" fill="rgba(96,255,228,0.16)" stroke="rgba(96,255,228,0.75)" strokeWidth="2" className="animate-[pulse_2.4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <path d="M73 98 C98 88, 126 88, 147 114" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="2" strokeLinecap="round" />
      <path d="M165 132 C184 154, 214 162, 235 146" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </Frame>
);

const DashboardAnimation = () => (
  <Frame>
    <div className="h-full rounded-xl border border-white/15 p-3 bg-ink/20 grid grid-cols-2 gap-2">
      {[42, 70, 56, 86].map((height, index) => (
        <div key={height} className="rounded-lg bg-white/5 px-2 py-2 flex items-end">
          <span className="w-full rounded-sm bg-mint/75 animate-[pulse_2.4s_ease-in-out_infinite]" style={{ height: `${height}%`, animationDelay: `${index * 0.25}s` }} />
        </div>
      ))}
    </div>
  </Frame>
);

const KpiAnimation = () => (
  <Frame>
    <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
      <polyline
        points="26,176 72,154 116,160 162,112 208,124 254,84 294,96"
        fill="none"
        stroke="rgba(96,255,228,0.85)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[72, 162, 254].map((x, idx) => (
        <circle key={x} cx={x} cy={idx === 0 ? 154 : idx === 1 ? 112 : 84} r="8" fill="rgba(96,255,228,0.28)" stroke="rgba(96,255,228,0.9)" className="animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${idx * 0.25}s` }} />
      ))}
      <rect x="26" y="186" width="268" height="16" rx="8" fill="rgba(255,255,255,0.12)" />
    </svg>
  </Frame>
);

const GenericAnimation = () => (
  <Frame>
    <div className="h-full rounded-xl border border-white/15 p-3 bg-ink/20 grid place-items-center">
      <div className="relative h-28 w-28">
        <span className="absolute inset-0 rounded-full border border-mint/50 animate-[spin_8s_linear_infinite]" />
        <span className="absolute inset-4 rounded-full border border-mint/35 animate-[spin_6s_linear_infinite_reverse]" />
        <span className="absolute inset-[34px] rounded-full bg-mint/55 animate-[pulse_2.2s_ease-in-out_infinite]" />
      </div>
    </div>
  </Frame>
);

export const ToolHeaderAnimation: React.FC<ToolHeaderAnimationProps> = ({ slug, className }) => {
  const components: Record<string, React.ReactNode> = {
    'sop-builder': <SopAnimation />,
    'page-critique': <CritiqueAnimation />,
    'brand-audit': <BrandAnimation />,
    'process-mapper': <ProcessAnimation />,
    'dashboard-builder': <DashboardAnimation />,
    'kpi-audit': <KpiAnimation />,
  };

  return <div className={className}>{components[slug] ?? <GenericAnimation />}</div>;
};

export default ToolHeaderAnimation;
