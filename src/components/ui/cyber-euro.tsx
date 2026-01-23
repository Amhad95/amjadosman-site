"use client";

import React, { useEffect, useRef } from "react";

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
  gold: "#f59e0b"
};

interface CyberEuroProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

export const CyberEuro: React.FC<CyberEuroProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });
  const requestRef = useRef<number>();

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const render = () => {
      if (!preRef.current) return;

      const zBuffer = new Float32Array(W * H).fill(0);
      const charBuffer = new Array(W * H).fill(" ");
      
      const time = performance.now() * 0.001 * speed;
      
      // Update rotation
      rotationRef.current.y += 0.015 * speed;
      rotationRef.current.x = Math.sin(time * 0.5) * 0.2;
      rotationRef.current.z = Math.cos(time * 0.3) * 0.1;

      const { x: rx, y: ry, z: rz } = rotationRef.current;
      const cX = Math.cos(rx), sX = Math.sin(rx);
      const cY = Math.cos(ry), sY = Math.sin(ry);
      const cZ = Math.cos(rz), sZ = Math.sin(rz);

      const light = { x: 0.5, y: 1, z: -1 };
      const mag = Math.sqrt(light.x ** 2 + light.y ** 2 + light.z ** 2);
      light.x /= mag; light.y /= mag; light.z /= mag;

      const drawPoint = (px: number, py: number, pz: number, isEdge = false) => {
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
        const xp = Math.floor(W / 2 + px * ooz * 105); 
        const yp = Math.floor(H / 2 - py * ooz * 65);

        if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
          const idx = xp + yp * W;
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            
            if (isEdge) {
              charBuffer[idx] = "#";
            } else {
              const lum = Math.abs(px * light.x + py * light.y + pz * light.z) / 15;
              const shimmer = (Math.sin(time * 4 + pz) + 1) * 0.08;
              const lIdx = Math.floor(Math.min(1, lum + shimmer) * (RAMP.length - 1));
              charBuffer[idx] = RAMP[lIdx];
            }
          }
        }
      };

      // Euro Construction Parameters
      const radius = 14;
      const thickness = 3.5;
      const step = 0.5 / density;

      // 1. Draw the "C" Curve
      for (let u = 0.6; u < 5.7; u += step / 10) {
        for (let v = -thickness; v < thickness; v += step) {
          const x = radius * Math.cos(u);
          const y = radius * Math.sin(u);
          const z = v;
          
          const isEdge = Math.abs(v - (thickness - step)) < 0.1 || Math.abs(v + thickness) < 0.1;
          drawPoint(x, y, z, isEdge);
        }
      }

      // 2. Draw the two horizontal bars
      const barThickness = 1.2;
      const barPositionsY = [2.5, -2.5];

      barPositionsY.forEach(barY => {
        for (let bx = -radius - 2; bx < radius - 6; bx += step) {
          for (let bz = -thickness; bz < thickness; bz += step) {
            for (let by = barY - barThickness; by < barY + barThickness; by += step) {
              const isEdge = Math.abs(bz - (thickness - step)) < 0.1 || Math.abs(bz + thickness) < 0.1;
              drawPoint(bx, by, bz, isEdge);
            }
          }
        }
      });

      const lines: string[] = [];
      for (let i = 0; i < H; i++) {
        lines.push(charBuffer.slice(i * W, (i + 1) * W).join(""));
      }
      preRef.current.textContent = lines.join("\n");
      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [speed, density]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <pre
          ref={preRef}
          className="font-mono text-[8px] sm:text-[10px] md:text-[12px] leading-none select-none whitespace-pre"
          style={{
            color: themeColor,
            textShadow: `0 0 8px ${themeColor}90, 0 0 16px ${themeColor}50`
          }}
        />
      </div>
    </div>
  );
};

export default CyberEuro;
