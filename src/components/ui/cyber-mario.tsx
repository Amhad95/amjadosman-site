import React, { useEffect, useRef } from "react";

const W = 64;
const H = 20;
const groundY = 16;
const runnerX = 15;
const baseY = groundY - 5;
const cycleLen = 64;

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  mario: "#ef4444",
  nokia: "#43a047",
  amber: "#fbbf24",
  cyan: "#22d3ee",
};

interface CyberMarioProps {
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
    if (targetX >= 0 && targetX < W) {
      grid[yy][targetX] = text[i];
    }
  }
};

const heroFrame = (jumping: boolean, step: number) => {
  if (jumping) {
    return [" ▄██▄ ", " ████ ", "▐████▌", " ▟██▙ ", "▟▘  ▝▙"];
  }

  if (step % 2 === 0) {
    return [" ▄██▄ ", " ████ ", "▐████▌", " ▟██▙ ", "▟▘  ▜ "];
  }

  return [" ▄██▄ ", " ████ ", "▐████▌", " ▟██▙ ", " ▛  ▝▙"];
};

const drawPipe = (grid: string[][], x: number, height: number) => {
  const topY = groundY - height;
  put(grid, x - 1, topY, "▟█████▙");
  put(grid, x - 1, topY + 1, "███████");

  for (let y = topY + 2; y < groundY; y += 1) {
    put(grid, x, y, "█████");
  }
};

const drawGoomba = (grid: string[][], x: number) => {
  put(grid, x, groundY - 2, "▄██▄");
  put(grid, x, groundY - 1, "▟▙▟▙");
};

const drawCloud = (grid: string[][], x: number, y: number) => {
  put(grid, x, y, "  ▄▄▄  ");
  put(grid, x, y + 1, "▟█████▙");
  put(grid, x, y + 2, " ▔▔▔▔▔ ");
};

export const CyberMario: React.FC<CyberMarioProps> = ({
  speed = 1,
  color = "mint",
}) => {
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

      const local = frame % cycleLen;
      const jumping = local >= 8 && local <= 35;
      let jumpLift = 0;

      if (jumping) {
        const u = (local - 8) / 27;
        jumpLift = Math.round(Math.sin(u * Math.PI) * 8);
      }

      const runnerY = baseY - jumpLift;

      for (let i = 0; i < 30; i += 1) {
        const x = ((i * 17 - Math.floor(frame / (2 + (i % 4)))) % W + W) % W;
        const y = 1 + ((i * 7) % 9);
        grid[y][x] = i % 6 === 0 ? "+" : "·";
      }

      drawCloud(grid, ((8 - Math.floor(frame / 9)) % (W + 18) + W + 18) % (W + 18) - 10, 2);
      drawCloud(grid, ((39 - Math.floor(frame / 12)) % (W + 18) + W + 18) % (W + 18) - 10, 4);

      const pipeX = runnerX + 30 - local;
      const goombaX = runnerX + 58 - local;
      const platformX = runnerX + 86 - local;

      put(grid, ((24 - Math.floor(frame * 0.45)) % 96 + 96) % 96, 2, "▣▣▣");
      put(grid, ((31 - Math.floor(frame * 0.45)) % 96 + 96) % 96, 2, "▣?▣");
      put(grid, ((38 - Math.floor(frame * 0.45)) % 96 + 96) % 96, 2, "▣▣▣");

      const coinSpark = Math.floor(frame / 5) % 2 === 0 ? "●" : "◍";
      put(grid, runnerX + 9, 8, coinSpark);
      put(grid, runnerX + 13, 6, coinSpark);
      put(grid, runnerX + 17, 8, coinSpark);

      if (pipeX > -8 && pipeX < W + 8) {
        drawPipe(grid, pipeX, 3);
      }

      if (goombaX > -6 && goombaX < W + 6) {
        drawGoomba(grid, goombaX);
      }

      if (platformX > -12 && platformX < W + 8) {
        put(grid, platformX, groundY - 4, "▛▀▀▀▀▀▜");
        put(grid, platformX, groundY - 3, "███████");
      }

      for (let x = 0; x < W; x += 1) {
        grid[groundY][x] = "▀";
        grid[groundY + 1][x] = x % 2 === 0 ? "▓" : "▒";
        grid[groundY + 2][x] = x % 3 === 0 ? "█" : "▓";
      }

      for (let x = 0; x < W; x += 5) {
        const xx = ((x - Math.floor(frame * 0.8)) % W + W) % W;
        grid[groundY][xx] = "▄";
      }

      const sprite = heroFrame(jumping, Math.floor(frame / 5));
      sprite.forEach((line, i) => put(grid, runnerX, runnerY + i, line));

      if (jumping) {
        put(grid, runnerX - 4, runnerY + 3, "⋱⋱");
        put(grid, runnerX + 7, runnerY + 1, "⋰");
      } else {
        put(grid, runnerX - 4, runnerY + 4, "▒▒");
      }

      pre.textContent = grid.map((row) => row.join("") + " ").join("\n");
    };

    render();
    intervalRef.current = window.setInterval(() => {
      frameRef.current += 2;
      render();
    }, Math.max(26, 32 / Math.max(0.25, speed)));

    return () => window.clearInterval(intervalRef.current);
  }, [speed]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <pre
        ref={preRef}
        className="select-none whitespace-pre font-mono text-[7.6px] font-black leading-[1.04] tracking-[-0.1em] sm:text-[8.8px] md:text-[10px] lg:text-[11px]"
        style={{
          color: themeColor,
          textShadow: `0 0 4px ${themeColor}cc, 0 0 12px ${themeColor}73`,
        }}
      />
    </div>
  );
};

export default CyberMario;
