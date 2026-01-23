import React, { useEffect, useRef } from "react";

/**
 * CyberGyroscope Component
 * A high-tech 3D ASCII animation of a Quantum Gyroscope / Stabilization Core.
 * Features:
 * - Three independent nested gimbal rings rotating on different axes.
 * - Suspended central singularity with pulse effect.
 * - Industrial "Tech" aesthetic with edge highlighting.
 */

const W = 80;
const H = 45;
const RAMP = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  cyan: "#22d3ee",
  green: "#4ade80",
  amber: "#fbbf24",
  matrix: "#00ff41",
  blue: "#3b82f6",
  violet: "#a78bfa",
  red: "#ef4444"
};

interface CyberGyroscopeProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

export const CyberGyroscope: React.FC<CyberGyroscopeProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rotationRef = useRef({ r1: 0, r2: 0, r3: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const render = () => {
      const zBuffer = new Float32Array(W * H).fill(0);
      const charBuffer = new Array(W * H).fill(" ");

      const time = performance.now() * 0.001 * speed;

      // Update Rotations (Gyroscopic motion)
      rotationRef.current.r1 += 0.02 * speed;
      rotationRef.current.r2 -= 0.03 * speed;
      rotationRef.current.r3 += 0.05 * speed;

      const light = { x: 0.5, y: 1, z: -1 };
      const mag = Math.sqrt(light.x ** 2 + light.y ** 2 + light.z ** 2);
      light.x /= mag; light.y /= mag; light.z /= mag;

      const drawPoint = (px: number, py: number, pz: number, charOverride: string | null = null, brightness = 1.0) => {
        const dist = 65;
        const ooz = 1 / (pz + dist);
        const xp = Math.floor(W / 2 + px * ooz * 115);
        const yp = Math.floor(H / 2 - py * ooz * 70);

        if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
          const idx = xp + yp * W;
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;

            if (charOverride) {
              charBuffer[idx] = charOverride;
            } else {
              const lum = Math.abs(px * light.x + py * light.y + pz * light.z) / 20;
              const shimmer = (Math.sin(time * 10 + px) + 1) * 0.1;
              const lIdx = Math.floor(Math.min(1, (lum + shimmer) * brightness) * (RAMP.length - 1));
              charBuffer[idx] = RAMP[lIdx];
            }
          }
        }
      };

      const step = 0.08 / density;

      const rotate3D = (x: number, y: number, z: number, angle: number, axis: 'x' | 'y' | 'z') => {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        if (axis === 'x') return { x: x, y: y * c - z * s, z: y * s + z * c };
        if (axis === 'y') return { x: x * c + z * s, y: y, z: -x * s + z * c };
        if (axis === 'z') return { x: x * c - y * s, y: x * s + y * c, z: z };
        return { x, y, z };
      };

      // 1. Outer Ring
      const r1_rad = 18;
      const r1_thk = 1.2;
      for (let theta = 0; theta < 2 * Math.PI; theta += step) {
        for (let phi = 0; phi < 2 * Math.PI; phi += step * 4) {
          const tx = (r1_rad + r1_thk * Math.cos(phi)) * Math.cos(theta);
          const ty = (r1_rad + r1_thk * Math.cos(phi)) * Math.sin(theta);
          const tz = r1_thk * Math.sin(phi);

          let p = rotate3D(tx, ty, tz, rotationRef.current.r1, 'y');
          p = rotate3D(p.x, p.y, p.z, 0.4, 'z');

          const isMarker = Math.abs(Math.cos(theta * 4)) > 0.95;
          drawPoint(p.x, p.y, p.z, isMarker ? "=" : null);
        }
      }

      // 2. Middle Ring
      const r2_rad = 13;
      const r2_thk = 1.2;
      for (let theta = 0; theta < 2 * Math.PI; theta += step) {
        for (let phi = 0; phi < 2 * Math.PI; phi += step * 4) {
          const tx = (r2_rad + r2_thk * Math.cos(phi)) * Math.cos(theta);
          const ty = (r2_rad + r2_thk * Math.cos(phi)) * Math.sin(theta);
          const tz = r2_thk * Math.sin(phi);

          let p = rotate3D(tx, ty, tz, rotationRef.current.r2, 'x');
          p = rotate3D(p.x, p.y, p.z, 0.4, 'y');

          const isDash = Math.abs(Math.sin(theta * 12)) > 0.5;
          if (isDash) drawPoint(p.x, p.y, p.z, null, 1.2);
        }
      }

      // 3. Inner Ring
      const r3_rad = 8;
      const r3_thk = 1.5;
      for (let theta = 0; theta < 2 * Math.PI; theta += step) {
        for (let phi = 0; phi < 2 * Math.PI; phi += step * 4) {
          const tx = (r3_rad + r3_thk * Math.cos(phi)) * Math.cos(theta);
          const ty = (r3_rad + r3_thk * Math.cos(phi)) * Math.sin(theta);
          const tz = r3_thk * Math.sin(phi);

          let p = rotate3D(tx, ty, tz, rotationRef.current.r3, 'z');
          p = rotate3D(p.x, p.y, p.z, rotationRef.current.r3 * 0.5, 'x');

          drawPoint(p.x, p.y, p.z, null, 0.8);
        }
      }

      // 4. Central Singularity
      const corePulse = 2.5 + Math.sin(time * 8) * 0.5;
      for (let phi = 0; phi < Math.PI; phi += 0.5) {
        for (let theta = 0; theta < 2 * Math.PI; theta += 0.5) {
          const cx = corePulse * Math.sin(phi) * Math.cos(theta);
          const cy = corePulse * Math.sin(phi) * Math.sin(theta);
          const cz = corePulse * Math.cos(phi);
          drawPoint(cx, cy, cz, "@", 2.0);
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

export default CyberGyroscope;
