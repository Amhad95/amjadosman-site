import React, { useEffect, useRef } from "react";

const W = 60;
const H = 35;

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

interface Bullet {
  x: number;
  y: number;
  active: boolean;
}

interface Enemy {
  x: number;
  y: number;
  hp: number;
  type: "heavy" | "squid" | "rock";
  active: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

interface Star {
  x: number;
  y: number;
  speed: number;
}

interface GameState {
  playerY: number;
  playerDir: number;
  bullets: Bullet[];
  enemies: Enemy[];
  particles: Particle[];
  stars: Star[];
  tick: number;
}

export const CyberSpaceImpact: React.FC<CyberSpaceImpactProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef<GameState>({
    playerY: H / 2,
    playerDir: 1,
    bullets: [],
    enemies: [],
    particles: [],
    stars: [],
    tick: 0,
  });

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const initialStars: Star[] = [];
    for (let i = 0; i < 40; i++) {
      initialStars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        speed: 0.1 + Math.random() * 0.4,
      });
    }
    stateRef.current.stars = initialStars;
  }, []);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const update = () => {
      const state = stateRef.current;
      const timeScale = speed;

      state.tick++;

      const targetY = state.enemies.length > 0 ? state.enemies[0].y : H / 2;
      const diff = targetY - state.playerY;
      state.playerY += Math.sign(diff) * 0.2 * timeScale;
      state.playerY = Math.max(2, Math.min(H - 3, state.playerY));

      if (state.tick % Math.floor(10 / speed) === 0) {
        state.bullets.push({ x: 12, y: Math.floor(state.playerY), active: true });
      }

      state.bullets.forEach((b) => {
        b.x += 1.5 * timeScale;
        if (b.x > W) b.active = false;
      });
      state.bullets = state.bullets.filter((b) => b.active);

      if (Math.random() < 0.05 * density) {
        const type = Math.random();
        state.enemies.push({
          x: W,
          y: Math.floor(Math.random() * (H - 4) + 2),
          hp: type > 0.8 ? 3 : 1,
          type: type > 0.8 ? "heavy" : type > 0.4 ? "squid" : "rock",
          active: true,
        });
      }

      state.enemies.forEach((e) => {
        e.x -= (e.type === "heavy" ? 0.2 : 0.5) * timeScale;
        if (e.x < 0) e.active = false;
      });

      state.bullets.forEach((b) => {
        state.enemies.forEach((e) => {
          if (b.active && e.active) {
            if (Math.abs(b.x - e.x) < 2 && Math.abs(b.y - e.y) < 2) {
              b.active = false;
              e.hp--;
              if (e.hp <= 0) {
                e.active = false;
                for (let i = 0; i < 6; i++) {
                  state.particles.push({
                    x: e.x,
                    y: e.y,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1.0,
                  });
                }
              }
            }
          }
        });
      });
      state.enemies = state.enemies.filter((e) => e.active);

      state.particles.forEach((p) => {
        p.x += p.vx * timeScale;
        p.y += p.vy * timeScale;
        p.life -= 0.05 * timeScale;
      });
      state.particles = state.particles.filter((p) => p.life > 0);

      state.stars.forEach((s) => {
        s.x -= s.speed * timeScale;
        if (s.x < 0) {
          s.x = W;
          s.y = Math.random() * H;
        }
      });
    };

    const draw = () => {
      const state = stateRef.current;
      const charBuffer = new Array(W * H).fill(" ");

      const drawChar = (x: number, y: number, char: string) => {
        if (x < 0 || x >= W || y < 0 || y >= H) return;
        const idx = Math.floor(x) + Math.floor(y) * W;
        charBuffer[idx] = char;
      };

      state.stars.forEach((s) => drawChar(s.x, s.y, "."));

      const py = Math.floor(state.playerY);
      const px = 7;

      drawChar(px + 1, py - 1, "/");
      drawChar(px + 2, py - 1, "#");
      drawChar(px, py, "[");
      drawChar(px + 1, py, "#");
      drawChar(px + 2, py, "#");
      drawChar(px + 3, py, "#");
      drawChar(px + 4, py, ">");
      drawChar(px + 1, py + 1, "\\");
      drawChar(px + 2, py + 1, "#");
      if (Math.random() > 0.5) drawChar(px - 1, py, "=");

      state.enemies.forEach((e) => {
        const ex = Math.floor(e.x);
        const ey = Math.floor(e.y);
        if (e.type === "squid") {
          drawChar(ex, ey, "<");
          drawChar(ex + 1, ey, "O");
          drawChar(ex + 2, ey, ">");
        } else if (e.type === "heavy") {
          drawChar(ex, ey, "[");
          drawChar(ex + 1, ey, "X");
          drawChar(ex + 2, ey, "]");
        } else {
          drawChar(ex, ey, "*");
        }
      });

      state.bullets.forEach((b) => {
        drawChar(b.x, b.y, "=");
        drawChar(b.x + 1, b.y, ">");
      });

      state.particles.forEach((p) => {
        drawChar(p.x, p.y, p.life > 0.5 ? "#" : ".");
      });

      for (let x = 0; x < W; x++) {
        drawChar(x, 0, "=");
        drawChar(x, H - 1, "=");
      }

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

export default CyberSpaceImpact;
