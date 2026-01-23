import React, { useEffect, useRef } from "react";

const W = 80;
const H = 40;

const MINT = "#00FFD9";

// ASCII symbols per face
const faceSymbol = ['@', '#', '$', '*'];

// Scale factor
const SCALE = 2;
const DESIRED_DIST = 4.5;

// 5 vertices: apex + 4 base corners
const V: [number, number, number][] = [
  [0.0, SCALE, 0.0],
  [-SCALE, -SCALE, -SCALE],
  [SCALE, -SCALE, -SCALE],
  [SCALE, -SCALE, SCALE],
  [-SCALE, -SCALE, SCALE]
];

// Triangle faces
const F: [number, number, number][] = [
  [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1]
];

const DU = 0.015;
const DV = 0.015;

const EDGE_LIST = [
  [0,1],[0,2],[0,3],[0,4],
  [1,2],[2,3],[3,4],[4,1]
];

const sub3 = (a: number[], b: number[]): number[] => [
  a[0] - b[0], a[1] - b[1], a[2] - b[2]
];

const cross3 = (a: number[], b: number[]): number[] => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0]
];

const norm3 = (v: number[]): number[] => {
  const r = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  return r > 0 ? [v[0] / r, v[1] / r, v[2] / r] : v;
};

interface PyramidAnimationProps {
  wireframe?: boolean;
  speed?: number;
  axis?: 'x' | 'y' | 'z';
  edges?: boolean;
}

export const PyramidAnimation: React.FC<PyramidAnimationProps> = ({
  wireframe = false,
  speed = 0.03,
  axis = 'y',
  edges = true
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const thetaRef = useRef(0);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    // Precompute face normals
    const fnorm: number[][] = [];
    for (let f = 0; f < 4; f++) {
      const e1 = sub3(V[F[f][1]], V[F[f][0]]);
      const e2 = sub3(V[F[f][2]], V[F[f][0]]);
      fnorm.push(norm3(cross3(e1, e2)));
    }

    const light = norm3([0.0, 1.0, -1.0]);

    // Compute model centroid
    const centroidModel = [0, 0, 0];
    for (let i = 0; i < 5; ++i) {
      centroidModel[0] += V[i][0];
      centroidModel[1] += V[i][1];
      centroidModel[2] += V[i][2];
    }
    centroidModel[0] *= 0.2;
    centroidModel[1] *= 0.2;
    centroidModel[2] *= 0.2;

    const X_SCALE = 36.0;
    const Y_SCALE = 18.0;
    const Y_OFFSET = -4;

    const render = () => {
      const screen: string[] = Array(W * H).fill(' ');
      const zBuf: number[] = Array(W * H).fill(0);
      const lumBuf: number[] = Array(W * H).fill(0);
      const faceBuf: number[] = Array(W * H).fill(-1);

      thetaRef.current += speed;
      const theta = thetaRef.current;

      const c = Math.cos(theta);
      const s = Math.sin(theta);

      // Rotate centroid and compute offset
      const cz = -centroidModel[0] * s + centroidModel[2] * c;
      const offset = DESIRED_DIST - cz;

      const rotate = (x: number, y: number, z: number): [number, number, number] => {
        if (axis === 'y') return [x * c + z * s, y, -x * s + z * c];
        if (axis === 'x') return [x, y * c - z * s, y * s + z * c];
        return [x * c - y * s, x * s + y * c, z];
      };

      // Draw filled faces
      if (!wireframe) {
        for (let f = 0; f < 4; f++) {
          for (let u = 0; u <= 1.0; u += DU) {
            for (let v = 0; u + v <= 1.0; v += DV) {
              const w = 1.0 - u - v;
              const x = w * V[F[f][0]][0] + u * V[F[f][1]][0] + v * V[F[f][2]][0];
              const y = w * V[F[f][0]][1] + u * V[F[f][1]][1] + v * V[F[f][2]][1];
              const z = w * V[F[f][0]][2] + u * V[F[f][1]][2] + v * V[F[f][2]][2];

              const [x2, y2, z2] = rotate(x, y, z);
              const z2t = z2 + offset;
              if (z2t <= 0) continue;

              const invz = 1.0 / z2t;
              const px = Math.floor(W / 2 + X_SCALE * x2 * invz);
              const py = Math.floor(H / 2 - Y_SCALE * y2 * invz + Y_OFFSET);

              if (px < 0 || px >= W || py < 0 || py >= H) continue;
              const idx = px + py * W;
              if (invz <= zBuf[idx]) continue;

              zBuf[idx] = invz;
              faceBuf[idx] = f;

              // Rotate normal for lighting
              const [nx, ny, nz] = rotate(fnorm[f][0], fnorm[f][1], fnorm[f][2]);
              const L = Math.max(0, nx * light[0] + ny * light[1] + nz * light[2]);
              lumBuf[idx] = L;
            }
          }
        }
      }

      // Draw edges
      if (edges) {
        for (const [a, b] of EDGE_LIST) {
          const [x0, y0, z0] = V[a];
          const [x1, y1, z1] = V[b];
          for (let t = 0; t <= 1.0; t += 0.002) {
            const x = x0 + (x1 - x0) * t;
            const y = y0 + (y1 - y0) * t;
            const z = z0 + (z1 - z0) * t;

            const [x2, y2, z2] = rotate(x, y, z);
            const z2t = z2 + offset;
            if (z2t <= 0) continue;

            const invz = 1.0 / z2t;
            const px = Math.floor(W / 2 + X_SCALE * x2 * invz);
            const py = Math.floor(H / 2 - Y_SCALE * y2 * invz + Y_OFFSET);

            if (px < 0 || px >= W || py < 0 || py >= H) continue;
            const idx = px + py * W;

            if (invz > zBuf[idx]) {
              zBuf[idx] = invz + 1e-6;
              faceBuf[idx] = -2;
            }
          }
        }
      }

      // Build output with character shading
      const ramp = " .-:=+*#@";
      for (let i = 0; i < W * H; i++) {
        const f = faceBuf[i];
        if (f === -2) {
          screen[i] = '+';
        } else if (f >= 0) {
          const L = lumBuf[i];
          const ci = Math.floor(L * (ramp.length - 1));
          screen[i] = ramp[Math.min(ci, ramp.length - 1)];
        }
      }

      const lines: string[] = [];
      for (let y = 0; y < H; y++) {
        lines.push(screen.slice(y * W, (y + 1) * W).join(""));
      }
      pre.textContent = lines.join("\n");

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, axis, wireframe, edges]);

  return (
    <div className="flex items-center justify-center">
      <pre
        ref={preRef}
        className="text-[8px] sm:text-[10px] md:text-[12px] leading-[1.0] font-mono select-none whitespace-pre"
        style={{
          color: MINT,
          textShadow: `0 0 8px ${MINT}90, 0 0 16px ${MINT}50`,
        }}
      />
    </div>
  );
};

export default PyramidAnimation;
