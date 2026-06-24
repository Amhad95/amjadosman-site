import React, { useEffect, useMemo, useRef } from "react";

const W = 80;
const H = 45;
const RAMP =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

const COLOR_MAP: Record<string, string> = {
  cyan: "#22d3ee",
  green: "#4ade80",
  amber: "#fbbf24",
  matrix: "#00ff41",
  blue: "#3b82f6",
  violet: "#a78bfa",
  mint: "#00FFD9",
};

interface CyberGlobeHeaderProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  showCore?: boolean;
}

export const CyberGlobeHeader: React.FC<CyberGlobeHeaderProps> = ({
  speed = 1,
  color = "mint",
  showCore = true,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });

  const themeColor = useMemo(() => {
    return COLOR_MAP[color] || COLOR_MAP.mint;
  }, [color]);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const render = () => {
      const zBuffer = new Float32Array(W * H).fill(0);
      const charBuffer = new Array(W * H).fill(" ");

      const time = performance.now() * 0.001 * speed;
      rotationRef.current.y += 0.015 * speed;
      rotationRef.current.x += 0.01 * speed;
      rotationRef.current.z += 0.005 * speed;

      const { x: rx, y: ry, z: rz } = rotationRef.current;
      const cX = Math.cos(rx), sX = Math.sin(rx);
      const cY = Math.cos(ry), sY = Math.sin(ry);
      const cZ = Math.cos(rz), sZ = Math.sin(rz);

      const light = { x: 0.5, y: 1, z: -1 };
      const mag = Math.sqrt(light.x ** 2 + light.y ** 2 + light.z ** 2);
      light.x /= mag;
      light.y /= mag;
      light.z /= mag;

      const cubeSize = 12;
      const step = 0.8;

      const drawPoint = (px: number, py: number, pz: number, charOverride: string | null = null, isCore = false) => {
        // Rotations
        let tx = px * cZ - py * sZ;
        let ty = px * sZ + py * cZ;
        px = tx;
        py = ty;
        tx = px * cY + pz * sY;
        let tz = -px * sY + pz * cY;
        px = tx;
        pz = tz;
        ty = py * cX - pz * sX;
        tz = py * sX + pz * cX;
        py = ty;
        pz = tz;

        // Projection
        const ooz = 1 / (pz + 65);
        const xp = Math.floor(W / 2 + px * ooz * 105);
        const yp = Math.floor(H / 2 - py * ooz * 65);

        if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
          const idx = xp + yp * W;
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            if (charOverride) {
              charBuffer[idx] = charOverride;
            } else {
              const lum = Math.abs(px * light.x + py * light.y + pz * light.z) / 10;
              const lIdx = Math.floor(Math.min(1, lum) * (RAMP.length - 1));
              charBuffer[idx] = isCore ? "•" : RAMP[lIdx];
            }
          }
        }
      };

      // Draw cube
      for (let i = -cubeSize; i <= cubeSize; i += step) {
        for (let j = -cubeSize; j <= cubeSize; j += step) {
          if (Math.abs(i) === cubeSize || Math.abs(j) === cubeSize) {
            drawPoint(i, cubeSize, j);
            drawPoint(i, -cubeSize, j);
          }
          drawPoint(cubeSize, i, j);
          drawPoint(-cubeSize, i, j);
        }
      }

      // Draw core
      if (showCore) {
        const coreRadius = 4.5 + Math.sin(time * 2) * 0.5;
        for (let phi = 0; phi < Math.PI; phi += 0.3) {
          for (let theta = 0; theta < 2 * Math.PI; theta += 0.3) {
            const cx = coreRadius * Math.sin(phi) * Math.cos(theta);
            const cy = coreRadius * Math.sin(phi) * Math.sin(theta);
            const cz = coreRadius * Math.cos(phi);
            drawPoint(cx, cy, cz, null, true);
          }
        }
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
  }, [speed, showCore]);

  return (
    <div className="flex items-center justify-center">
      <pre
        ref={preRef}
        className="text-[8px] sm:text-[10px] md:text-[12px] leading-[1.0] font-mono select-none whitespace-pre"
        style={{
          color: themeColor,
          textShadow: `0 0 8px ${themeColor}90, 0 0 16px ${themeColor}50`,
        }}
      />
    </div>
  );
};

export default CyberGlobeHeader;
