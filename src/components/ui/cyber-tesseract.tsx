import React, { useEffect, useRef } from "react";

/**
 * CyberTesseract Component
 * A high-tech 4D ASCII animation of a Hypercube (Tesseract).
 * Features:
 * - True 4D rotation projected into 3D space.
 * - "Inside-out" geometric folding effect.
 * - Vertex highlighting and volumetric edges.
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

interface CyberTesseractProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

export const CyberTesseract: React.FC<CyberTesseractProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rotationRef = useRef({ xw: 0, yw: 0, zw: 0, xy: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const render = () => {
      const zBuffer = new Float32Array(W * H).fill(0);
      const charBuffer = new Array(W * H).fill(" ");

      const time = performance.now() * 0.001 * speed;

      // Update Rotations
      rotationRef.current.xw += 0.015 * speed;
      rotationRef.current.zw += 0.01 * speed;
      rotationRef.current.xy += 0.005 * speed;

      const light = { x: 0.5, y: 1, z: -1 };
      const mag = Math.sqrt(light.x ** 2 + light.y ** 2 + light.z ** 2);
      light.x /= mag; light.y /= mag; light.z /= mag;

      const drawPoint = (px: number, py: number, pz: number, charOverride: string | null = null, brightness = 1.0) => {
        const dist = 60;
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
              const lum = Math.abs(px * light.x + py * light.y + pz * light.z) / 10;
              const shimmer = (Math.sin(time * 8 + pz) + 1) * 0.1;
              const lIdx = Math.floor(Math.min(1, (lum + shimmer) * brightness) * (RAMP.length - 1));
              charBuffer[idx] = RAMP[lIdx];
            }
          }
        }
      };

      // 4D Rotation Helpers
      const rotate4D = (x: number, y: number, z: number, w: number, axis: 'xw' | 'yw' | 'zw' | 'xy', theta: number) => {
        const c = Math.cos(theta);
        const s = Math.sin(theta);

        if (axis === 'xw') return { x: x * c - w * s, y, z, w: x * s + w * c };
        if (axis === 'yw') return { x, y: y * c - w * s, z, w: y * s + w * c };
        if (axis === 'zw') return { x, y, z: z * c - w * s, w: z * s + w * c };
        if (axis === 'xy') return { x: x * c - y * s, y: x * s + y * c, z, w };
        return { x, y, z, w };
      };

      // Define Tesseract Vertices (16 vertices)
      const vertices: { x: number; y: number; z: number; w: number }[] = [];
      for (let i = 0; i < 16; i++) {
        vertices.push({
          x: (i & 1) ? 1 : -1,
          y: (i & 2) ? 1 : -1,
          z: (i & 4) ? 1 : -1,
          w: (i & 8) ? 1 : -1
        });
      }

      // Define Edges
      const edges: [number, number][] = [];
      for (let i = 0; i < 16; i++) {
        for (let j = i + 1; j < 16; j++) {
          let diff = 0;
          if (vertices[i].x !== vertices[j].x) diff++;
          if (vertices[i].y !== vertices[j].y) diff++;
          if (vertices[i].z !== vertices[j].z) diff++;
          if (vertices[i].w !== vertices[j].w) diff++;
          if (diff === 1) edges.push([i, j]);
        }
      }

      // Render Edges
      const scale = 14;
      const steps = 25 * density;

      edges.forEach(([idxA, idxB]) => {
        const vA = vertices[idxA];
        const vB = vertices[idxB];

        for (let t = 0; t <= 1; t += 1 / steps) {
          let ix = vA.x + (vB.x - vA.x) * t;
          let iy = vA.y + (vB.y - vA.y) * t;
          let iz = vA.z + (vB.z - vA.z) * t;
          let iw = vA.w + (vB.w - vA.w) * t;

          let r = { x: ix, y: iy, z: iz, w: iw };
          r = rotate4D(r.x, r.y, r.z, r.w, 'xw', rotationRef.current.xw);
          r = rotate4D(r.x, r.y, r.z, r.w, 'zw', rotationRef.current.zw);
          r = rotate4D(r.x, r.y, r.z, r.w, 'xy', rotationRef.current.xy);

          const wDist = 2.5;
          const wFactor = 1 / (wDist - r.w);

          const projX = r.x * wFactor * scale;
          const projY = r.y * wFactor * scale;
          const projZ = r.z * wFactor * scale;

          const isVertex = (t < 0.05 || t > 0.95);

          if (isVertex) {
            drawPoint(projX, projY, projZ, "#");
          } else {
            drawPoint(projX, projY, projZ, null, 1.2);
          }
        }
      });

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

export default CyberTesseract;
