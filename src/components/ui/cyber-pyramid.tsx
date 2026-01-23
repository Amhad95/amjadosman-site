import React, { useEffect, useRef } from "react";

/**
 * CyberPyramid Component
 * A high-tech 3D ASCII animation of a Pyramid.
 * Features:
 * - Volumetric triangular face rendering.
 * - Sharp edge detection for geometric clarity.
 * - Pulse-shimmer lighting and Z-depth occlusion.
 * - Isolated square projection.
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
  violet: "#a78bfa"
};

interface CyberPyramidProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

export const CyberPyramid: React.FC<CyberPyramidProps> = ({
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

      // Update rotation
      rotationRef.current.y += 0.015 * speed;
      rotationRef.current.x = 0.2 + Math.sin(time * 0.3) * 0.1; // Gentle tilt
      rotationRef.current.z = Math.cos(time * 0.2) * 0.05;

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

        const dist = 65;
        const ooz = 1 / (pz + dist);
        const xp = Math.floor(W / 2 + px * ooz * 110);
        const yp = Math.floor(H / 2 - py * ooz * 65);

        if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
          const idx = xp + yp * W;
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;

            if (isEdge) {
              charBuffer[idx] = "#";
            } else {
              const lum = Math.abs(px * light.x + py * light.y + pz * light.z) / 15;
              const shimmer = (Math.sin(time * 5 + pz) + 1) * 0.08;
              const lIdx = Math.floor(Math.min(1, lum + shimmer) * (RAMP.length - 1));
              charBuffer[idx] = RAMP[lIdx];
            }
          }
        }
      };

      const size = 15;
      const step = 0.6 / density;

      // 1. Draw Side Faces (Triangles)
      // 4 sides meeting at apex (0, size, 0)
      const apex = { x: 0, y: size, z: 0 };
      const baseCorners = [
        { x: -size, y: -size, z: -size },
        { x: size, y: -size, z: -size },
        { x: size, y: -size, z: size },
        { x: -size, y: -size, z: size }
      ];

      for (let i = 0; i < 4; i++) {
        const c1 = baseCorners[i];
        const c2 = baseCorners[(i + 1) % 4];

        // Sample triangle (apex, c1, c2)
        for (let a = 0; a <= 1; a += step / 10) {
          for (let b = 0; b <= 1 - a; b += step / 10) {
            const c = 1 - a - b;
            const px = a * apex.x + b * c1.x + c * c2.x;
            const py = a * apex.y + b * c1.y + c * c2.y;
            const pz = a * apex.z + b * c1.z + c * c2.z;

            // Edge highlighting: check if we are near the boundaries of the triangle
            const isEdge = a > 0.95 || b > 0.98 || c > 0.98;
            drawPoint(px, py, pz, isEdge);
          }
        }
      }

      // 2. Draw Square Base
      for (let i = -size; i <= size; i += step) {
        for (let j = -size; j <= size; j += step) {
          const isEdge = Math.abs(i) > size - 0.5 || Math.abs(j) > size - 0.5;
          drawPoint(i, -size, j, isEdge);
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

export default CyberPyramid;
