import React, { useEffect, useRef } from "react";

const W = 58;
const H = 23;

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  matrix: "#00ff41",
  cyan: "#22d3ee",
  green: "#4ade80",
  amber: "#fbbf24",
  blue: "#3b82f6",
  violet: "#a78bfa",
};

interface CyberCircuitProps {
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

const box = (grid: string[][], x: number, y: number, w: number, h: number, title: string, lines: string[] = []) => {
  put(grid, x, y, "╭" + "─".repeat(w - 2) + "╮");
  for (let r = 1; r < h - 1; r += 1) put(grid, x, y + r, "│" + " ".repeat(w - 2) + "│");
  put(grid, x, y + h - 1, "╰" + "─".repeat(w - 2) + "╯");

  put(grid, x + Math.max(1, Math.floor((w - title.length) / 2)), y + 1, title);
  lines.forEach((line, index) => put(grid, x + Math.max(1, Math.floor((w - line.length) / 2)), y + 3 + index, line));
};

const hline = (grid: string[][], x1: number, x2: number, y: number, ch = "═") => {
  const a = Math.min(x1, x2);
  const b = Math.max(x1, x2);
  for (let x = a; x <= b; x += 1) if (x >= 0 && x < W && y >= 0 && y < H) grid[y][x] = ch;
};

const vline = (grid: string[][], x: number, y1: number, y2: number, ch = "║") => {
  const a = Math.min(y1, y2);
  const b = Math.max(y1, y2);
  for (let y = a; y <= b; y += 1) if (x >= 0 && x < W && y >= 0 && y < H) grid[y][x] = ch;
};

const pulseH = (grid: string[][], frame: number, x1: number, x2: number, y: number, phase: number, period: number, ch = "●") => {
  const a = Math.min(x1, x2);
  const b = Math.max(x1, x2);
  const len = b - a + 1;
  const t = (frame + phase) % period;
  const idx = Math.floor((t / period) * len);
  const x = x1 <= x2 ? a + idx : b - idx;
  put(grid, x, y, ch);
};

const pulseV = (grid: string[][], frame: number, x: number, y1: number, y2: number, phase: number, period: number, ch = "●") => {
  const a = Math.min(y1, y2);
  const b = Math.max(y1, y2);
  const len = b - a + 1;
  const t = (frame + phase) % period;
  const idx = Math.floor((t / period) * len);
  const y = y1 <= y2 ? a + idx : b - idx;
  put(grid, x, y, ch);
};

export const CyberCircuit: React.FC<CyberCircuitProps> = ({ speed = 1, color = "mint" }) => {
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

      for (let i = 0; i < 18; i += 1) {
        const x = ((i * 19 - Math.floor(frame * (0.35 + (i % 3) * 0.14))) % W + W) % W;
        const y = 1 + ((i * 7) % (H - 2));
        grid[y][x] = i % 6 === 0 ? "·" : " ";
      }

      box(grid, 2, 2, 13, 5, "SALES", ["orders"]);
      box(grid, 2, 9, 13, 5, "STOCK", ["items"]);
      box(grid, 2, 16, 13, 5, "HR", ["payroll"]);
      box(grid, 22, 7, 15, 8, "ERP CORE", ["workflow", "rules"]);
      box(grid, 43, 2, 13, 5, "FINANCE", ["ledger"]);
      box(grid, 43, 9, 13, 5, "CRM", ["clients"]);
      box(grid, 43, 16, 13, 5, "REPORTS", ["KPIs"]);
      box(grid, 23, 18, 13, 4, "DATABASE", ["records"]);

      hline(grid, 15, 21, 4);
      put(grid, 20, 4, "▶");
      hline(grid, 15, 21, 11);
      put(grid, 20, 11, "▶");
      hline(grid, 15, 21, 18);
      put(grid, 20, 18, "▶");
      hline(grid, 37, 42, 4);
      put(grid, 41, 4, "▶");
      hline(grid, 37, 42, 11);
      put(grid, 41, 11, "▶");
      hline(grid, 37, 42, 18);
      put(grid, 41, 18, "▶");

      vline(grid, 29, 15, 17);
      put(grid, 29, 17, "▼");
      vline(grid, 35, 15, 17);
      put(grid, 35, 15, "▲");

      put(grid, 26, 10, "VALIDATE");
      put(grid, 29, 11, "↓");
      put(grid, 27, 12, "POST");
      put(grid, 29, 13, "↓");
      put(grid, 26, 14, "SYNC");

      pulseH(grid, frame, 15, 21, 4, 0, 26, "●");
      pulseH(grid, frame, 15, 21, 11, 8, 26, "●");
      pulseH(grid, frame, 15, 21, 18, 16, 26, "●");
      pulseH(grid, frame, 37, 42, 4, 5, 24, "◆");
      pulseH(grid, frame, 37, 42, 11, 13, 24, "◆");
      pulseH(grid, frame, 37, 42, 18, 21, 24, "◆");
      pulseV(grid, frame, 29, 15, 17, 4, 22, "●");
      pulseV(grid, frame, 35, 17, 15, 14, 22, "◆");

      put(grid, 32, 11, ["◌", "●", "◍", "●"][frame % 4]);
      put(grid, 28, 20, frame % 6 < 3 ? "▰▰▰" : "▱▰▱");

      pre.textContent = grid.map((row) => row.join("")).join("\n");
    };

    render();
    intervalRef.current = window.setInterval(() => {
      frameRef.current += 1;
      render();
    }, Math.max(50, 72 / Math.max(0.25, speed)));

    return () => window.clearInterval(intervalRef.current);
  }, [speed]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <pre
        ref={preRef}
        className="select-none whitespace-pre font-mono text-[5.4px] font-black leading-[1.02] tracking-[-0.09em] sm:text-[6.3px] md:text-[7.2px] lg:text-[7.9px]"
        style={{
          color: themeColor,
          textShadow: `0 0 4px ${themeColor}cc, 0 0 12px ${themeColor}73`,
        }}
      />
    </div>
  );
};

export default CyberCircuit;
