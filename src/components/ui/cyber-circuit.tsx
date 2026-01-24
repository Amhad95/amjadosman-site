import React, { useEffect, useRef } from "react";

const W = 60;
const H = 35;

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

interface Signal {
  pathId: number;
  progress: number;
  speed: number;
  val: string;
  dir: number;
}

export const CyberCircuit: React.FC<CyberCircuitProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const signalsRef = useRef<Signal[]>([]);

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const packetCount = Math.floor(18 * density);
    const initialSignals: Signal[] = [];
    for (let i = 0; i < packetCount; i++) {
      initialSignals.push({
        pathId: Math.floor(Math.random() * 12),
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.015,
        val: Math.random() > 0.5 ? "1" : "0",
        dir: Math.random() > 0.5 ? 1 : -1,
      });
    }
    signalsRef.current = initialSignals;
  }, [density]);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const render = () => {
      const charBuffer = new Array(W * H).fill(" ");
      const time = performance.now() * 0.001 * speed;

      const drawChar = (x: number, y: number, char: string) => {
        if (x < 0 || x >= W || y < 0 || y >= H) return;
        const idx = Math.floor(x) + Math.floor(y) * W;
        charBuffer[idx] = char;
      };

      const centerX = Math.floor(W / 2);
      const centerY = Math.floor(H / 2);

      // CPU
      const cpuW = 9;
      const cpuH = 5;
      for (let dy = -cpuH; dy <= cpuH; dy++) {
        for (let dx = -cpuW; dx <= cpuW; dx++) {
          const x = centerX + dx;
          const y = centerY + dy;
          const isBorder = Math.abs(dx) === cpuW || Math.abs(dy) === cpuH;

          if (isBorder) {
            drawChar(x, y, "#");
          } else if (Math.abs(dx) < 5 && Math.abs(dy) < 3) {
            const pulse = Math.sin(time * 8 + dx + dy * 2) > 0.2;
            drawChar(x, y, pulse ? "▓" : "░");
          } else {
            drawChar(x, y, ".");
          }
        }
      }

      const label = "CORE";
      for (let i = 0; i < label.length; i++) {
        drawChar(centerX - 2 + i, centerY, label[i]);
      }

      // Memory Banks
      const memX_L = centerX - 22;
      const memX_R = centerX + 22;
      const memH = 10;
      const memW = 3;

      [memX_L, memX_R].forEach((mx, i) => {
        for (let dy = -memH; dy <= memH; dy++) {
          for (let dx = -memW; dx <= memW; dx++) {
            const isBorder = Math.abs(dx) === memW || Math.abs(dy) === memH;
            if (isBorder) {
              drawChar(mx + dx, centerY + dy, "+");
            } else {
              const isActive = Math.sin(time * 20 + dy) > 0.8 && Math.random() > 0.7;
              drawChar(mx + dx, centerY + dy, isActive ? "=" : " ");
            }
          }
        }
        const memLabel = i === 0 ? "RAM0" : "RAM1";
        for (let k = 0; k < memLabel.length; k++) {
          drawChar(mx - 2 + k, centerY - memH - 1, memLabel[k]);
        }
      });

      // Trace Geometry
      const getTraceCoords = (id: number) => {
        let sx: number, sy: number, ex: number, ey: number;
        if (id < 3) {
          const idx = id;
          const yOff = (idx - 1) * 3;
          sx = centerX - cpuW - 1;
          sy = centerY + yOff;
          ex = memX_L + memW + 1;
          ey = centerY + yOff;
        } else if (id < 6) {
          const idx = id - 3;
          const yOff = (idx - 1) * 3;
          sx = centerX + cpuW + 1;
          sy = centerY + yOff;
          ex = memX_R - memW - 1;
          ey = centerY + yOff;
        } else if (id < 9) {
          const idx = id - 6;
          const xOff = (idx - 1) * 5;
          sx = centerX + xOff;
          sy = centerY - cpuH - 1;
          ex = centerX + xOff;
          ey = 2;
        } else {
          const idx = id - 9;
          const xOff = (idx - 1) * 5;
          sx = centerX + xOff;
          sy = centerY + cpuH + 1;
          ex = centerX + xOff;
          ey = H - 3;
        }
        return { sx, sy, ex, ey };
      };

      const drawLine = (x1: number, y1: number, x2: number, y2: number, char: string) => {
        const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const steps = Math.ceil(dist);
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const x = Math.floor(x1 + (x2 - x1) * t);
          const y = Math.floor(y1 + (y2 - y1) * t);
          drawChar(x, y, char);
        }
      };

      for (let i = 0; i < 12; i++) {
        const { sx, sy, ex, ey } = getTraceCoords(i);
        const isVert = Math.abs(ey - sy) > Math.abs(ex - sx);
        drawLine(sx, sy, ex, ey, isVert ? "|" : "-");
        drawChar(sx, sy, "o");
        drawChar(ex, ey, "o");
      }

      // Moving signals
      signalsRef.current.forEach((sig) => {
        sig.progress += sig.speed * speed;
        if (sig.progress >= 1) {
          sig.progress = 0;
          sig.val = Math.random() > 0.5 ? "1" : "0";
          sig.pathId = Math.floor(Math.random() * 12);
          sig.dir = Math.random() > 0.5 ? 1 : -1;
        }

        const { sx, sy, ex, ey } = getTraceCoords(sig.pathId);
        const t = sig.dir === 1 ? sig.progress : 1 - sig.progress;
        const px = Math.floor(sx + (ex - sx) * t);
        const py = Math.floor(sy + (ey - sy) * t);
        drawChar(px, py, sig.val);
      });

      // I/O Ports
      for (let x = centerX - 8; x <= centerX + 8; x += 5) {
        drawChar(x, 1, "V");
        drawChar(x, H - 2, "A");
      }

      const lines: string[] = [];
      for (let i = 0; i < H; i++) {
        lines.push(charBuffer.slice(i * W, (i + 1) * W).join(""));
      }
      pre.textContent = lines.join("\n");

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, density]);

  return (
    <div className="flex items-center justify-center overflow-hidden w-full h-full">
      <pre
        ref={preRef}
        className="text-[6px] sm:text-[8px] md:text-[9px] leading-[1.0] font-mono select-none whitespace-pre"
        style={{
          color: themeColor,
          textShadow: `0 0 8px ${themeColor}66`,
        }}
      />
    </div>
  );
};

export default CyberCircuit;
