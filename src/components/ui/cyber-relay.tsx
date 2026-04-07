import React, { useEffect, useRef } from "react";

const W = 60;
const H = 35;

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

interface Packet {
  pathId: number;
  progress: number;
  velocity: number;
  char: string;
}

type Point = { x: number; y: number };

const PATHS: Point[][] = [
  [
    { x: 14, y: 7 },
    { x: 20, y: 7 },
    { x: 20, y: 17 },
    { x: 24, y: 17 },
  ],
  [
    { x: 36, y: 15 },
    { x: 40, y: 15 },
    { x: 40, y: 7 },
    { x: 45, y: 7 },
  ],
  [
    { x: 30, y: 21 },
    { x: 30, y: 24 },
    { x: 30, y: 27 },
  ],
  [
    { x: 45, y: 7 },
    { x: 49, y: 7 },
    { x: 49, y: 17 },
    { x: 36, y: 17 },
  ],
  [
    { x: 30, y: 27 },
    { x: 30, y: 24 },
    { x: 36, y: 24 },
    { x: 36, y: 19 },
  ],
];

const pathLengths = PATHS.map((points) => {
  let total = 0;
  for (let i = 0; i < points.length - 1; i += 1) {
    total += Math.hypot(points[i + 1].x - points[i].x, points[i + 1].y - points[i].y);
  }
  return total;
});

function pointAlongPath(points: Point[], progress: number): Point {
  const clamped = Math.max(0, Math.min(0.999, progress));
  const target = pathLengths[PATHS.indexOf(points)] * clamped;
  let walked = 0;

  for (let i = 0; i < points.length - 1; i += 1) {
    const from = points[i];
    const to = points[i + 1];
    const length = Math.hypot(to.x - from.x, to.y - from.y);

    if (walked + length >= target) {
      const local = (target - walked) / length;
      return {
        x: from.x + (to.x - from.x) * local,
        y: from.y + (to.y - from.y) * local,
      };
    }

    walked += length;
  }

  return points[points.length - 1];
}

export const CyberRelay: React.FC<CyberRelayProps> = ({
  speed = 1,
  color = "mint",
  density = 1,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const packetsRef = useRef<Packet[]>([]);

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const packetCount = Math.max(8, Math.floor(10 * density));
    packetsRef.current = Array.from({ length: packetCount }, (_, index) => ({
      pathId: index % PATHS.length,
      progress: Math.random(),
      velocity: 0.004 + Math.random() * 0.008,
      char: index % 3 === 0 ? "@" : index % 3 === 1 ? "*" : "o",
    }));
  }, [density]);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return undefined;

    const drawChar = (buffer: string[], x: number, y: number, char: string) => {
      if (x < 0 || x >= W || y < 0 || y >= H) return;
      buffer[Math.floor(x) + Math.floor(y) * W] = char;
    };

    const drawText = (buffer: string[], x: number, y: number, text: string) => {
      text.split("").forEach((char, index) => drawChar(buffer, x + index, y, char));
    };

    const drawLine = (buffer: string[], from: Point, to: Point, char: string) => {
      const steps = Math.max(Math.abs(to.x - from.x), Math.abs(to.y - from.y)) * 2 + 1;
      for (let i = 0; i <= steps; i += 1) {
        const t = i / steps;
        drawChar(
          buffer,
          from.x + (to.x - from.x) * t,
          from.y + (to.y - from.y) * t,
          char
        );
      }
    };

    const drawBox = (buffer: string[], x: number, y: number, width: number, height: number) => {
      for (let dx = 0; dx < width; dx += 1) {
        drawChar(buffer, x + dx, y, dx === 0 || dx === width - 1 ? "+" : "-");
        drawChar(buffer, x + dx, y + height - 1, dx === 0 || dx === width - 1 ? "+" : "-");
      }
      for (let dy = 1; dy < height - 1; dy += 1) {
        drawChar(buffer, x, y + dy, "|");
        drawChar(buffer, x + width - 1, y + dy, "|");
      }
    };

    const render = () => {
      const buffer = new Array(W * H).fill(" ");
      const time = performance.now() * 0.001 * speed;

      for (let y = 0; y < H; y += 6) {
        for (let x = (y / 3) % 2; x < W; x += 8) {
          drawChar(buffer, x, y, ".");
        }
      }

      drawBox(buffer, 4, 4, 11, 6);
      drawText(buffer, 7, 6, "KNOW");
      drawText(buffer, 6, 8, "DOCS");

      drawBox(buffer, 45, 4, 11, 6);
      drawText(buffer, 47, 6, "CHECK");
      drawText(buffer, 47, 8, "HUMAN");

      drawBox(buffer, 19, 27, 23, 5);
      drawText(buffer, 27, 29, "FLOW");

      drawBox(buffer, 24, 13, 12, 9);
      drawText(buffer, 27, 16, "AGENT");
      drawText(buffer, 27, 18, "CORE");

      PATHS.forEach((points, index) => {
        for (let i = 0; i < points.length - 1; i += 1) {
          drawLine(buffer, points[i], points[i + 1], index % 2 === 0 ? "=" : "-");
        }
        points.forEach((point) => drawChar(buffer, point.x, point.y, "o"));
      });

      for (let i = 0; i < 4; i += 1) {
        const x = 27 + i * 2;
        const pulseChar = Math.sin(time * 3 + i) > 0 ? ":" : ".";
        drawChar(buffer, x, 14, pulseChar);
        drawChar(buffer, x, 20, pulseChar);
      }

      ["IN", "OK", "RUN"].forEach((label, index) => {
        drawText(buffer, 9 + index * 19, 2, label);
      });

      packetsRef.current.forEach((packet, index) => {
        packet.progress += packet.velocity * speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.pathId = (packet.pathId + 1 + (index % 2)) % PATHS.length;
          packet.char = packet.char === "@" ? "*" : packet.char === "*" ? "o" : "@";
        }

        const point = pointAlongPath(PATHS[packet.pathId], packet.progress);
        drawChar(buffer, point.x, point.y, packet.char);
      });

      const status = Math.sin(time * 2.4) > 0 ? "LIVE" : "SYNC";
      drawText(buffer, 26, 24, status);

      const lines: string[] = [];
      for (let y = 0; y < H; y += 1) {
        lines.push(buffer.slice(y * W, (y + 1) * W).join(""));
      }

      pre.textContent = lines.join("\n");
      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <pre
        ref={preRef}
        className="text-[6px] leading-[1.0] font-mono select-none whitespace-pre sm:text-[8px] md:text-[9px]"
        style={{
          color: themeColor,
          textShadow: `0 0 8px ${themeColor}66`,
        }}
      />
    </div>
  );
};

export default CyberRelay;
