import React, { useEffect, useRef } from "react";

const W = 80;
const H = 40;
const PI = Math.PI;

const RAMP = ".,-~:;=!*#$@";

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  cyan: "#22d3ee",
  green: "#4ade80",
  amber: "#fbbf24",
  blue: "#3b82f6",
  violet: "#a78bfa",
};

type Vec3 = { x: number; y: number; z: number };

const vadd = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
const vmul = (v: Vec3, s: number): Vec3 => ({ x: v.x * s, y: v.y * s, z: v.z * s });
const vdot = (a: Vec3, b: Vec3): number => a.x * b.x + a.y * b.y + a.z * b.z;
const vnorm = (v: Vec3): Vec3 => {
  const r = Math.sqrt(vdot(v, v));
  return r > 0 ? vmul(v, 1.0 / r) : v;
};
const cross = (a: Vec3, b: Vec3): Vec3 => ({
  x: a.y * b.z - a.z * b.y,
  y: a.z * b.x - a.x * b.z,
  z: a.x * b.y - a.y * b.x,
});

interface KnotAnimationProps {
  color?: keyof typeof COLOR_MAP;
  speedA?: number;
  speedB?: number;
}

export const KnotAnimation: React.FC<KnotAnimationProps> = ({
  color = "mint",
  speedA = 0.04,
  speedB = 0.02,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const rotationRef = useRef({ A: 0, B: 0 });

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const render = () => {
      const screen: string[] = Array(W * H).fill(" ");
      const zbuf: number[] = Array(W * H).fill(0);

      const light = vnorm({ x: -1, y: 1, z: -1 });

      rotationRef.current.A += speedA;
      rotationRef.current.B += speedB;

      const { A, B } = rotationRef.current;
      const cA = Math.cos(A), sA = Math.sin(A);
      const cB = Math.cos(B), sB = Math.sin(B);

      // Draw trefoil knot
      for (let u = 0; u < 2 * PI; u += 0.06) {
        const cu = u, cu2 = 2 * cu, cu3 = 3 * cu;

        // Trefoil knot curve
        const C: Vec3 = {
          x: Math.sin(cu) + 2 * Math.sin(cu2),
          y: Math.cos(cu) - 2 * Math.cos(cu2),
          z: -Math.sin(cu3),
        };

        // Tangent vector
        const T = vnorm({
          x: Math.cos(cu) + 4 * Math.cos(cu2),
          y: -Math.sin(cu) + 4 * Math.sin(cu2),
          z: -3 * Math.cos(cu3),
        });

        // Build local frame
        const up = Math.abs(vdot(T, { x: 0, y: 1, z: 0 })) < 0.99
          ? { x: 0, y: 1, z: 0 }
          : { x: 1, y: 0, z: 0 };
        const N = vnorm(cross(T, up));
        const Bn = cross(T, N);

        const R = 0.3; // Tube radius

        // Draw tube cross-section
        for (let v = 0; v < 2 * PI; v += 0.2) {
          const cv = Math.cos(v), sv = Math.sin(v);
          const offs = vadd(vmul(N, cv * R), vmul(Bn, sv * R));
          const p = vadd(C, offs);

          // Rotate around X axis
          const x1 = p.x;
          const y1 = p.y * cA - p.z * sA;
          const z1 = p.y * sA + p.z * cA;

          // Rotate around Y axis
          const x2 = x1 * cB + z1 * sB;
          const y2 = y1;
          const z2 = -x1 * sB + z1 * cB + 5.0;

          // Project
          const invz = 1.0 / z2;
          const px = Math.floor(W / 2 + 40 * x2 * invz);
          const py = Math.floor(H / 2 - 20 * y2 * invz);

          if (px >= 0 && px < W && py >= 0 && py < H) {
            const idx = px + py * W;
            if (invz > zbuf[idx]) {
              zbuf[idx] = invz;

              // Transform normal
              const n = vnorm(offs);
              const nx1 = n.x;
              const ny1 = n.y * cA - n.z * sA;
              const nz1 = n.y * sA + n.z * cA;

              const nx2 = nx1 * cB + nz1 * sB;
              const ny2 = ny1;
              const nz2 = -nx1 * sB + nz1 * cB;

              const nr = { x: nx2, y: ny2, z: nz2 };
              const lum = Math.max(0, vdot(nr, light));
              const ci = Math.floor(lum * (RAMP.length - 1));
              screen[idx] = RAMP[ci];
            }
          }
        }
      }

      // Build output
      const lines: string[] = [];
      for (let y = 0; y < H; y++) {
        lines.push(screen.slice(y * W, (y + 1) * W).join(""));
      }
      pre.textContent = lines.join("\n");

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speedA, speedB]);

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

export default KnotAnimation;
