import React, { useEffect, useRef } from "react";

const W = 50;
const H = 18;

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  amber: "#fbbf24",
  cyan: "#22d3ee",
  green: "#4ade80",
  matrix: "#00ff41",
  blue: "#3b82f6",
  violet: "#a78bfa",
};

interface CyberTrafficProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

const playerCar = ["  ▄▄▄▄▄▄▄   ", "▄█▀█████▀█▄ ", "▀◉▀▀▀▀▀◉▀  "];
const rivalCar = [" ▄▄▄▄▄  ", "█▀███▀█>", "▀◉▀▀◉▀ "];

const put = (grid: string[][], x: number, y: number, text: string) => {
  const xx = Math.round(x);
  const yy = Math.round(y);
  if (yy < 0 || yy >= H) return;

  for (let i = 0; i < text.length; i += 1) {
    const targetX = xx + i;
    if (targetX >= 0 && targetX < W) {
      grid[yy][targetX] = text[i];
    }
  }
};

const drawSprite = (grid: string[][], sprite: string[], x: number, y: number) => {
  sprite.forEach((line, index) => put(grid, x, y + index, line));
};

const loopX = (frame: number, spriteWidth: number, speed: number, phase: number, gap: number) => {
  const travelRange = W + spriteWidth + gap;
  const travel = (frame * speed + phase) % travelRange;
  return W - travel;
};

const drawRoad = (grid: string[][], frame: number) => {
  for (let i = 0; i < 16; i += 1) {
    const x = ((i * 13 - Math.floor(frame * (0.7 + (i % 3) * 0.25))) % W + W) % W;
    const y = 1 + ((i * 5) % 4);
    grid[y][x] = i % 6 === 0 ? "╶" : "·";
  }

  put(grid, 0, 5, "▔".repeat(W));

  for (let y = 6; y <= 16; y += 1) {
    for (let x = 0; x < W; x += 1) {
      grid[y][x] = y % 2 === 0 ? "░" : "▒";
    }
  }

  for (let x = 0; x < W; x += 1) {
    const topDash = (x + frame * 2) % 12;
    const bottomDash = (x + frame * 2 + 5) % 12;
    grid[9][x] = topDash < 5 ? "═" : " ";
    grid[13][x] = bottomDash < 5 ? "═" : " ";
    grid[17][x] = x % 2 === 0 ? "▀" : "▄";
  }
};

export const CyberTraffic: React.FC<CyberTrafficProps> = ({
  speed = 1,
  color = "mint",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const intervalRef = useRef<number>(0);
  const frameRef = useRef(0);
  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  const fitToWidth = () => {
    const container = containerRef.current;
    const pre = preRef.current;
    if (!container || !pre || !pre.textContent) return;

    const availableWidth = Math.max(1, container.clientWidth - 8);
    pre.style.fontSize = "10px";
    const measuredWidth = pre.scrollWidth;
    if (measuredWidth <= 0) return;

    const nextSize = Math.max(6, Math.min(24, (availableWidth / measuredWidth) * 10));
    pre.style.fontSize = `${nextSize}px`;
  };

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const render = () => {
      const frame = frameRef.current;
      const grid = Array.from({ length: H }, () => Array(W).fill(" "));

      drawRoad(grid, frame);

      const topX = loopX(frame, rivalCar[1].length, 1, 0, 28);
      const middleX = loopX(frame, rivalCar[1].length, 1, 38, 32);

      drawSprite(grid, rivalCar, topX, 6);
      drawSprite(grid, rivalCar, middleX, 10);

      const playerBob = Math.floor(frame / 5) % 2 === 0 ? 0 : -1;
      const playerY = 14 + playerBob;
      drawSprite(grid, playerCar, 4, playerY);

      put(grid, 0, playerY + 1, frame % 4 < 2 ? "≋≋" : "▒▒");
      put(grid, 1, playerY + 2, "━━");

      pre.textContent = grid.map((row) => row.join("")).join("\n");
    };

    render();
    fitToWidth();
    intervalRef.current = window.setInterval(() => {
      frameRef.current += 2;
      render();
    }, Math.max(30, 55 / Math.max(0.25, speed)));

    return () => window.clearInterval(intervalRef.current);
  }, [speed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => fitToWidth());
    resizeObserver.observe(container);
    requestAnimationFrame(fitToWidth);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex h-full w-full items-end justify-center overflow-hidden px-1">
      <pre
        ref={preRef}
        className="select-none whitespace-pre font-mono font-black leading-[1.04] tracking-[-0.1em]"
        style={{
          color: themeColor,
          textShadow: `0 0 4px ${themeColor}cc, 0 0 12px ${themeColor}73`,
        }}
      />
    </div>
  );
};

export default CyberTraffic;
