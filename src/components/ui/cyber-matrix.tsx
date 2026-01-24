import React, { useEffect, useRef } from "react";

const W = 60;
const H = 35;
const ASCII_CHARS = "010101XYZ<>*+=-:;[]{}";

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  matrix: "#00ff41",
  cyan: "#22d3ee",
  green: "#4ade80",
  amber: "#fbbf24",
  blue: "#3b82f6",
  violet: "#a78bfa",
};

interface CyberMatrixProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

interface Column {
  y: number;
  speed: number;
  chars: string[];
}

export const CyberMatrix: React.FC<CyberMatrixProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const columnsRef = useRef<Column[]>([]);

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    columnsRef.current = Array.from({ length: W }, () => ({
      y: Math.random() * H - H,
      speed: 0.2 + Math.random() * 0.5,
      chars: Array.from(
        { length: H },
        () => ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)]
      ),
    }));
  }, []);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const render = () => {
      const charBuffer = new Array(W * H).fill(" ");

      columnsRef.current.forEach((col, x) => {
        col.y += col.speed * speed;

        if (col.y > H && Math.random() > 0.95) {
          col.y = -Math.random() * 10;
          col.speed = 0.2 + Math.random() * 0.5;
        }

        for (let y = 0; y < H; y++) {
          const idx = x + y * W;
          const dist = col.y - y;
          const trailLength = 20 / density;

          if (dist > 0 && dist < trailLength) {
            const intensity = 1 - dist / trailLength;

            if (Math.random() > 0.98) {
              col.chars[y] =
                ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];
            }

            if (dist < 1.5) {
              charBuffer[idx] = "█";
            } else if (dist < 3) {
              charBuffer[idx] = "#";
            } else if (intensity > 0.6) {
              charBuffer[idx] = col.chars[y];
            } else if (intensity > 0.3) {
              charBuffer[idx] = ":";
            } else {
              charBuffer[idx] = ".";
            }
          }
        }
      });

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
          textShadow: `0 0 8px ${themeColor}90, 0 0 16px ${themeColor}50`,
        }}
      />
    </div>
  );
};

export default CyberMatrix;
