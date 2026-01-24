import React, { useEffect, useRef } from "react";

const W = 60;
const H = 35;

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

interface Tile {
  type: string;
  height: number;
  entity?: string | null;
}

interface Cloud {
  x: number;
  y: number;
  speed: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

interface GameState {
  tick: number;
  cameraX: number;
  player: {
    x: number;
    y: number;
    dy: number;
    grounded: boolean;
    state: string;
  };
  terrain: Tile[];
  clouds: Cloud[];
  particles: Particle[];
}

export const CyberMario: React.FC<CyberMarioProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef<GameState>({
    tick: 0,
    cameraX: 0,
    player: { x: 12, y: 0, dy: 0, grounded: true, state: "run" },
    terrain: [],
    clouds: [],
    particles: [],
  });

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const terrain: Tile[] = [];
    for (let i = 0; i < W + 15; i++) {
      terrain.push({ type: "ground", height: 4 });
    }
    stateRef.current.terrain = terrain;

    for (let i = 0; i < 8; i++) {
      stateRef.current.clouds.push({
        x: Math.random() * W,
        y: Math.random() * (H / 2),
        speed: 0.1 + Math.random() * 0.2,
      });
    }
  }, []);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const update = () => {
      const state = stateRef.current;
      const timeScale = speed;

      state.tick++;
      state.cameraX += 0.5 * timeScale;

      if (state.cameraX > 1) {
        state.cameraX -= 1;
        state.terrain.shift();

        const lastBlock = state.terrain[state.terrain.length - 1];
        let nextType = "ground";
        let nextHeight = 4;
        let entity: string | null = null;

        const r = Math.random();
        if (lastBlock.type === "pit") {
          nextType = "ground";
        } else if (r < 0.05) {
          nextType = "pit";
          nextHeight = -10;
        } else if (r < 0.08) {
          nextType = "pipe";
          nextHeight = 7;
        } else if (r < 0.15) {
          entity = "brick";
        } else if (r < 0.2) {
          entity = "enemy";
        }
        state.terrain.push({ type: nextType, height: nextHeight, entity });
      }

      const p = state.player;
      p.dy -= 0.15 * timeScale;
      p.y += p.dy * timeScale;

      const currentTile = state.terrain[12];
      const nextTile = state.terrain[16];

      if (p.grounded) {
        let shouldJump = false;
        if (nextTile?.type === "pit") shouldJump = true;
        if (nextTile?.type === "pipe") shouldJump = true;
        if (nextTile?.entity === "enemy") shouldJump = true;
        if (nextTile?.entity === "brick" && Math.random() > 0.5) shouldJump = true;

        if (shouldJump) {
          p.dy = 1.8;
          p.grounded = false;
          p.state = "jump";
        }
      }

      const floorY = currentTile?.type === "pit" ? -10 : (currentTile?.height || 4);
      if (p.y <= floorY) {
        p.y = floorY;
        p.dy = 0;
        p.grounded = true;
        p.state = "run";
      } else {
        p.grounded = false;
      }

      state.particles.forEach((pt) => {
        pt.x -= 0.5 * timeScale;
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.vy -= 0.1;
        pt.life--;
      });
      state.particles = state.particles.filter((pt) => pt.life > 0);

      state.clouds.forEach((c) => {
        c.x -= c.speed * timeScale;
        if (c.x < -10) {
          c.x = W + 10;
          c.y = Math.random() * (H / 2);
        }
      });
    };

    const draw = () => {
      const state = stateRef.current;
      const charBuffer = new Array(W * H).fill(" ");

      const drawChar = (x: number, y: number, char: string) => {
        if (x < 0 || x >= W || y < 0 || y >= H) return;
        const screenY = H - 1 - Math.floor(y);
        if (screenY < 0 || screenY >= H) return;
        const idx = Math.floor(x) + screenY * W;
        charBuffer[idx] = char;
      };

      state.clouds.forEach((c) => {
        const cx = Math.floor(c.x);
        const cy = Math.floor(c.y) + 12;
        drawChar(cx, cy, "(");
        drawChar(cx + 1, cy + 1, "_");
        drawChar(cx + 2, cy + 1, "_");
        drawChar(cx + 3, cy, ")");
      });

      state.terrain.forEach((tile, i) => {
        if (tile.type !== "pit") {
          for (let y = 0; y < tile.height; y++) {
            let char = y === tile.height - 1 ? "=" : "#";
            if (tile.type === "pipe") char = y === tile.height - 1 ? "T" : "|";
            drawChar(i, y, char);
          }
        }

        if (tile.entity === "brick") {
          drawChar(i, 13, "[");
          drawChar(i + 1, 13, "?");
          drawChar(i + 2, 13, "]");
        }

        if (tile.entity === "enemy") {
          const ey = tile.height;
          const frame = Math.floor(state.tick / 10) % 2;
          drawChar(i, ey, frame ? "/" : "\\");
          drawChar(i + 1, ey, frame ? "\\" : "/");
          drawChar(i, ey + 1, "o");
          drawChar(i + 1, ey + 1, "o");
        }
      });

      const px = Math.floor(state.player.x);
      const py = Math.floor(state.player.y);
      const isJump = state.player.state === "jump";

      drawChar(px, py + 4, "m");
      drawChar(px + 1, py + 4, "m");
      drawChar(px + 2, py + 4, "m");
      drawChar(px, py + 3, "C");
      drawChar(px + 1, py + 3, "(");
      drawChar(px + 2, py + 3, "o");
      drawChar(px + 3, py + 3, ")");

      if (isJump) {
        drawChar(px - 1, py + 2, "/");
        drawChar(px + 3, py + 2, "\\");
      } else {
        drawChar(px - 1, py + 2, "\\");
        drawChar(px + 3, py + 2, "/");
      }
      drawChar(px, py + 2, "|");
      drawChar(px + 1, py + 2, "|");
      drawChar(px + 2, py + 2, "|");

      if (isJump) {
        drawChar(px, py + 1, "`");
        drawChar(px + 2, py + 1, "'");
      } else {
        const runFrame = Math.floor(state.tick / 5) % 2;
        drawChar(px, py + 1, runFrame ? "/" : "|");
        drawChar(px + 2, py + 1, runFrame ? "\\" : "|");
      }

      state.particles.forEach((pt) => drawChar(pt.x, pt.y, "#"));

      const lines: string[] = [];
      for (let i = 0; i < H; i++) {
        lines.push(charBuffer.slice(i * W, (i + 1) * W).join(""));
      }
      pre.textContent = lines.join("\n");
    };

    const loop = () => {
      update();
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, density]);

  return (
    <div className="flex items-center justify-center overflow-hidden w-full h-full">
      <pre
        ref={preRef}
        className="text-[6px] sm:text-[8px] md:text-[9px] leading-[1.0] font-mono select-none whitespace-pre"
        style={{
          color: themeColor,
          textShadow: `0 0 5px ${themeColor}66`,
        }}
      />
    </div>
  );
};

export default CyberMario;
