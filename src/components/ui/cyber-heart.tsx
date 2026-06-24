import React, { useEffect, useRef } from "react";

/**
 * CyberHeart Component
 * A high-tech 3D ASCII animation of a Heart.
 * Features:
 * - Parametric "Heart of Revolution" geometry.
 * - Real-time "Heartbeat" scale modulation.
 * - Volumetric lattice rendering.
 * - Dynamic shimmer tied to the pulse.
 */

const W = 80;
const H = 45;
const RAMP = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  red: "#ef4444",
  pink: "#ec4899",
  cyan: "#22d3ee",
  green: "#4ade80",
  amber: "#fbbf24",
  matrix: "#00ff41",
  blue: "#3b82f6",
  violet: "#a78bfa"
};

interface CyberHeartProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

export const CyberHeart: React.FC<CyberHeartProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const render = () => {
      const zBuffer = new Float32Array(W * H).fill(0);
      const charBuffer = new Array(W * H).fill(" ");

      const time = performance.now() * 0.001 * speed;

      // Update Rotation
      rotationRef.current.y += 0.015 * speed;
      rotationRef.current.z = Math.sin(time * 0.5) * 0.05;

      const { x: rx, y: ry, z: rz } = rotationRef.current;
      const cX = Math.cos(rx), sX = Math.sin(rx);
      const cY = Math.cos(ry), sY = Math.sin(ry);
      const cZ = Math.cos(rz), sZ = Math.sin(rz);

      const light = { x: 0.5, y: 1, z: -1 };
      const mag = Math.sqrt(light.x ** 2 + light.y ** 2 + light.z ** 2);
      light.x /= mag; light.y /= mag; light.z /= mag;

      // Heartbeat Logic
      const beat = Math.pow(Math.sin(time * 3), 6) * 0.15;
      const baseScale = 0.8 + beat;

      const drawPoint = (px: number, py: number, pz: number, charOverride: string | null = null, intensity = 1.0) => {
        // Rotate Z
        let tx = px * cZ - py * sZ;
        let ty = px * sZ + py * cZ;
        px = tx; py = ty;
        // Rotate Y
        tx = px * cY + pz * sY;
        let tz = -px * sY + pz * cY;
        px = tx; pz = tz;
        // Rotate X
        ty = py * cX - pz * sX;
        tz = py * sX + pz * cX;
        py = ty; pz = tz;

        const dist = 60;
        const ooz = 1 / (pz + dist);
        const xp = Math.floor(W / 2 + px * ooz * 110);
        const yp = Math.floor(H / 2 - py * ooz * 65);

        if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
          const idx = xp + yp * W;
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;

            if (charOverride) {
              charBuffer[idx] = charOverride;
            } else {
              const lum = Math.abs(px * light.x + py * light.y + pz * light.z) / 15;
              const pulseGlow = beat * 10;
              const shimmer = (Math.sin(time * 10 + py) + 1) * 0.1;
              const lIdx = Math.floor(Math.min(1, (lum + shimmer + pulseGlow) * intensity) * (RAMP.length - 1));
              charBuffer[idx] = RAMP[lIdx];
            }
          }
        }
      };

      const tStep = 0.1 / density;
      const pStep = 0.15 / density;

      for (let t = 0; t <= Math.PI; t += tStep) {
        const rProfile = 16 * Math.pow(Math.sin(t), 3);
        const yProfile = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        const y = (yProfile + 2) * baseScale;

        const isLatLine = Math.abs((t * 10) % 2) < 0.3;

        for (let p = 0; p < 2 * Math.PI; p += pStep) {
          const isLongLine = Math.abs((p * 10) % 2) < 0.3;

          if (isLatLine || isLongLine) {
            const x = rProfile * Math.sin(p) * baseScale;
            const z = rProfile * Math.cos(p) * baseScale;

            const isNode = isLatLine && isLongLine;
            drawPoint(x, y, z, isNode ? "+" : null, isNode ? 1.5 : 0.8);
          }
        }
      }

      // Internal "Core"
      const coreScale = baseScale * 0.4;
      for (let t = 0; t <= Math.PI; t += 0.3) {
        const rProfile = 16 * Math.pow(Math.sin(t), 3);
        const yProfile = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        const y = (yProfile + 2) * coreScale;

        for (let p = 0; p < 2 * Math.PI; p += 0.3) {
          const x = rProfile * Math.sin(p) * coreScale;
          const z = rProfile * Math.cos(p) * coreScale;
          drawPoint(x, y, z, "♥", 2.0);
        }
      }

      const lines: string[] = [];
      for (let i = 0; i < H; i++) {
        lines.push(charBuffer.slice(i * W, (i + 1) * W).join(""));
      }

      if (preRef.current) {
        preRef.current.textContent = lines.join("\n");
      }

      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed, density]);

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  return (
    <div className="flex items-center justify-center">
      <pre
        ref={preRef}
        className="text-[8px] sm:text-[10px] md:text-[12px] leading-[0.8] font-mono select-none whitespace-pre"
        style={{
          color: themeColor,
          textShadow: `0 0 8px ${themeColor}90, 0 0 16px ${themeColor}50`,
        }}
      />
    </div>
  );
};

export default CyberHeart;
