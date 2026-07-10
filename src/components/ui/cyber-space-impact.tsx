import React, { useEffect, useMemo, useRef } from "react";

const W = 64;
const H = 20;

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  nokia: "#43a047",
  amber: "#fbbf24",
  cyan: "#22d3ee",
  matrix: "#00ff41",
};

interface CyberSpaceImpactProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

interface Star {
  x: number;
  y: number;
  speed: number;
  ch: string;
}

const ship = ["   ▲▲", "◀████▶", "   ▼▼"];

const enemies = [
  { x: 60, y: 4, kind: "◀▓●▓▶", phase: 0 },
  { x: 78, y: 13, kind: "◀▒◆▒▶", phase: 7 },
  { x: 94, y: 8, kind: "◀▓▼▓▶", phase: 14 },
];

const boomFrames = ["   ", " ✹ ", "╲█╱", "━█━", "╱█╲", " ✹ ", "   "];

const put = (grid: string[][], x: number, y: number, text: string) => {
  if (y < 0 || y >= H) return;

  for (let i = 0; i < text.length; i += 1) {
    const xx = x + i;
    if (xx >= 0 && xx < W) {
      grid[y][xx] = text[i];
    }
  }
};

export const CyberSpaceImpact: React.FC<CyberSpaceImpactProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const tickRef = useRef(0);
  const lastFrameRef = useRef(0);

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: Math.round(90 * density) }, (_, i) => ({
        x: Math.floor(Math.random() * W),
        y: Math.floor(Math.random() * H),
        speed: 1 + (i % 3),
        ch: i % 7 === 0 ? "+" : i % 4 === 0 ? "." : "·",
      })),
    [density]
  );

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const draw = () => {
      const t = tickRef.current;
      const grid = Array.from({ length: H }, () => Array(W).fill(" "));

      for (const star of stars) {
        const x = ((star.x - Math.floor(t / star.speed)) % W + W) % W;
        grid[star.y][x] = star.ch;
      }

      const moonX = W - 12 - Math.floor((t * 0.22) % (W + 12));
      put(grid, moonX, 1, "     .-.");
      put(grid, moonX, 2, "   .'   '.");
      put(grid, moonX, 3, "  /  .-.  \\");
      put(grid, moonX, 4, "  | (   ) |");
      put(grid, moonX, 5, "  \\  '-'  /");
      put(grid, moonX, 6, "   '.   .'");
      put(grid, moonX, 7, "     '-'");

      const sy = 9 + Math.round(Math.sin(t / 7) * 2);
      ship.forEach((line, i) => put(grid, 3, sy + i, line));
      put(grid, 0, sy + 1, t % 4 < 2 ? "≋≋" : "◁◁");

      for (let b = 0; b < 5; b += 1) {
        const bx = 12 + ((t * 2 + b * 16) % (W - 12));
        const by = sy + 1 + Math.round(Math.sin((t + b * 5) / 9));
        put(grid, bx, by, b % 2 === 0 ? "━━" : "▰▰");
      }

      for (const enemy of enemies) {
        const ex = W - ((t + enemy.phase) % 96);
        const ey = enemy.y + Math.round(Math.sin((t + enemy.phase) / 8) * 2);
        put(grid, ex, ey, enemy.kind);
        put(grid, ex - ((t + enemy.phase) % 18), ey, "✹");
      }

      const boomX = 49 - Math.floor((t % 80) / 3);
      const boomY = 6 + Math.round(Math.sin(t / 11) * 4);
      const frame = Math.floor((t % 28) / 4);
      put(grid, boomX, boomY, boomFrames[frame]);

      pre.textContent = grid.map((row) => row.join("")).join("\n");
    };

    const loop = (now: number) => {
      const frameMs = Math.max(34, 70 / Math.max(0.25, speed));
      if (now - lastFrameRef.current >= frameMs) {
        draw();
        tickRef.current += 2;
        lastFrameRef.current = now;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    draw();
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, stars]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <pre
        ref={preRef}
        className="select-none whitespace-pre font-mono text-[7.4px] font-black leading-[1.04] tracking-[-0.1em] sm:text-[8.6px] md:text-[9.8px] lg:text-[10.8px]"
        style={{
          color: themeColor,
          textShadow: `0 0 4px ${themeColor}cc, 0 0 12px ${themeColor}73`,
        }}
      />
    </div>
  );
};

export default CyberSpaceImpact;
