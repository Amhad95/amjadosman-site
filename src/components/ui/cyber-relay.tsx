import React, { useEffect, useRef } from "react";

const W = 60;
const H = 20;

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  amber: "#fbbf24",
  cyan: "#22d3ee",
  green: "#4ade80",
  blue: "#3b82f6",
  violet: "#a78bfa",
};

interface CyberRelayProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

const put = (grid: string[][], x: number, y: number, text: string) => {
  const xx = Math.round(x);
  const yy = Math.round(y);
  if (yy < 0 || yy >= H) return;

  for (let i = 0; i < text.length; i += 1) {
    const targetX = xx + i;
    if (targetX >= 0 && targetX < W) grid[yy][targetX] = text[i];
  }
};

const drawBox = (
  grid: string[][],
  x: number,
  y: number,
  w: number,
  h: number,
  title: string,
  active = false,
  body: string[] = []
) => {
  const tl = active ? "╔" : "┌";
  const tr = active ? "╗" : "┐";
  const bl = active ? "╚" : "└";
  const br = active ? "╝" : "┘";
  const hz = active ? "═" : "─";
  const vt = active ? "║" : "│";

  put(grid, x, y, tl + hz.repeat(w - 2) + tr);
  for (let i = 1; i < h - 1; i += 1) put(grid, x, y + i, vt + " ".repeat(w - 2) + vt);
  put(grid, x, y + h - 1, bl + hz.repeat(w - 2) + br);

  const label = active ? `● ${title} ●` : title;
  put(grid, x + Math.max(1, Math.floor((w - label.length) / 2)), y + 1, label);
  body.forEach((line, i) => put(grid, x + 2, y + 2 + i, line.slice(0, w - 4)));
};

const drawArrow = (
  grid: string[][],
  path: { base: [number, number, string][]; pulse: [number, number][] },
  pulseStep: number,
  pulseChar = "●"
) => {
  for (const [x, y, ch] of path.base) {
    if (x >= 0 && x < W && y >= 0 && y < H) grid[y][x] = ch;
  }
  const point = path.pulse[pulseStep % path.pulse.length];
  if (point) put(grid, point[0], point[1], pulseChar);
};

export const CyberRelay: React.FC<CyberRelayProps> = ({ speed = 1, color = "mint" }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const intervalRef = useRef<number>(0);
  const frameRef = useRef(0);
  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const render = () => {
      const frame = frameRef.current;
      const grid = Array.from({ length: H }, () => Array(W).fill(" "));

      for (let i = 0; i < 20; i += 1) {
        const x = ((i * 11 - Math.floor(frame * (0.6 + (i % 3) * 0.2))) % W + W) % W;
        const y = 1 + ((i * 3) % 3);
        grid[y][x] = i % 5 === 0 ? "·" : "˙";
      }

      const phase = Math.floor(frame / 4) % 6;
      drawBox(grid, 22, 1, 16, 4, "GOAL", phase === 0, ["task / policy"]);
      drawBox(grid, 1, 7, 16, 4, "USER INPUT", phase === 1, ["prompt"]);
      drawBox(grid, 22, 7, 16, 6, "AI AGENT", phase === 2, ["reason", "plan", "act"]);
      drawBox(grid, 43, 5, 15, 4, "TOOLS", phase === 3, ["api / code"]);
      drawBox(grid, 43, 10, 15, 4, "MEMORY", phase === 4, ["state / docs"]);
      drawBox(grid, 22, 15, 16, 4, "OUTPUT", phase === 5, ["answer / action"]);

      const paths = [
        { base: [[29, 5, "│"], [29, 6, "▼"]] as [number, number, string][], pulse: [[29, 5], [29, 6]] as [number, number][] },
        { base: [[17, 8, "─"], [18, 8, "─"], [19, 8, "─"], [20, 8, "─"], [21, 8, "▶"]] as [number, number, string][], pulse: [[17, 8], [18, 8], [19, 8], [20, 8], [21, 8]] as [number, number][] },
        { base: [[38, 8, "─"], [39, 8, "─"], [40, 8, "─"], [41, 8, "─"], [42, 8, "▶"]] as [number, number, string][], pulse: [[38, 8], [39, 8], [40, 8], [41, 8], [42, 8]] as [number, number][] },
        { base: [[42, 9, "◀"], [41, 9, "─"], [40, 9, "─"], [39, 9, "─"], [38, 9, "─"]] as [number, number, string][], pulse: [[42, 9], [41, 9], [40, 9], [39, 9], [38, 9]] as [number, number][] },
        { base: [[38, 11, "─"], [39, 11, "─"], [40, 11, "─"], [41, 11, "─"], [42, 11, "▶"]] as [number, number, string][], pulse: [[38, 11], [39, 11], [40, 11], [41, 11], [42, 11]] as [number, number][] },
        { base: [[42, 12, "◀"], [41, 12, "─"], [40, 12, "─"], [39, 12, "─"], [38, 12, "─"]] as [number, number, string][], pulse: [[42, 12], [41, 12], [40, 12], [39, 12], [38, 12]] as [number, number][] },
        { base: [[29, 13, "│"], [29, 14, "▼"]] as [number, number, string][], pulse: [[29, 13], [29, 14]] as [number, number][] },
      ];

      paths.forEach((path, index) => drawArrow(grid, path, frame % path.pulse.length, index === 3 || index === 5 ? "•" : "●"));
      put(grid, 16, 0, "AI AGENT WORKFLOW");
      put(grid, 18, 19, "observe  →  reason  →  use tools  →  respond");

      pre.textContent = grid.map((row) => row.join("")).join("\n");
    };

    render();
    intervalRef.current = window.setInterval(() => {
      frameRef.current += 1;
      render();
    }, Math.max(60, 100 / Math.max(0.25, speed)));

    return () => window.clearInterval(intervalRef.current);
  }, [speed]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <pre
        ref={preRef}
        className="select-none whitespace-pre font-mono text-[6.2px] font-black leading-[1.04] tracking-[-0.08em] sm:text-[7.2px] md:text-[8.2px] lg:text-[9px]"
        style={{
          color: themeColor,
          textShadow: `0 0 4px ${themeColor}cc, 0 0 12px ${themeColor}73`,
        }}
      />
    </div>
  );
};

export default CyberRelay;
