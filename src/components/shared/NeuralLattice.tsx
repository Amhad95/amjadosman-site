import React, { useEffect, useMemo, useRef } from "react";

const DEFAULT_W = 80;
const DEFAULT_H = 45;

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

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

function normalize3(x: number, y: number, z: number): [number, number, number] {
  const m = Math.hypot(x, y, z) || 1;
  return [x / m, y / m, z / m];
}

function rotateXYZ(
  x: number,
  y: number,
  z: number,
  cX: number,
  sX: number,
  cY: number,
  sY: number,
  cZ: number,
  sZ: number
): [number, number, number] {
  let tx = x * cZ - y * sZ;
  let ty = x * sZ + y * cZ;
  let tz = z;
  const tx2 = tx * cY + tz * sY;
  const tz2 = -tx * sY + tz * cY;
  tx = tx2;
  tz = tz2;
  const ty2 = ty * cX - tz * sX;
  const tz3 = ty * sX + tz * cX;
  ty = ty2;
  tz = tz3;
  return [tx, ty, tz];
}

interface NeuralLatticeProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
  width?: number;
  height?: number;
}

export const NeuralLattice: React.FC<NeuralLatticeProps> = ({
  speed = 1,
  color = "mint",
  density = 1.2,
  width = DEFAULT_W,
  height = DEFAULT_H,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const rotRef = useRef({ x: 0, y: 0, z: 0 });

  const settingsRef = useRef({
    speed: 1,
    density: 1.2,
    width: DEFAULT_W,
    height: DEFAULT_H,
  });

  useEffect(() => {
    settingsRef.current.speed = clamp(Number(speed) || 1, 0.1, 6);
  }, [speed]);

  useEffect(() => {
    settingsRef.current.density = clamp(Number(density) || 1.2, 0.5, 3);
  }, [density]);

  useEffect(() => {
    settingsRef.current.width = clamp(Number(width) || DEFAULT_W, 40, 180);
    settingsRef.current.height = clamp(Number(height) || DEFAULT_H, 20, 120);
  }, [width, height]);

  const themeColor = useMemo(() => {
    return COLOR_MAP[color] || COLOR_MAP.mint;
  }, [color]);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const [lx, ly, lz] = normalize3(0, 1, -1);

    const render = () => {
      const { speed: spd, density: dens, width: W, height: H } = settingsRef.current;

      const zBuffer = new Float32Array(W * H);
      zBuffer.fill(-Infinity);
      const charBuffer = new Array(W * H);
      charBuffer.fill(" ");

      const time = performance.now() * 0.001 * spd;

      rotRef.current.y += 0.012 * spd;
      rotRef.current.x += 0.008 * spd;
      rotRef.current.z += 0.005 * spd;

      const { x: rx, y: ry, z: rz } = rotRef.current;
      const cX = Math.cos(rx), sX = Math.sin(rx);
      const cY = Math.cos(ry), sY = Math.sin(ry);
      const cZ = Math.cos(rz), sZ = Math.sin(rz);

      const rampLast = RAMP.length - 1;

      const plot = (
        x: number,
        y: number,
        z: number,
        nx: number,
        ny: number,
        nz: number,
        charOverride: string | null = null,
        glow = false
      ) => {
        const [rxp, ryp, rzp] = rotateXYZ(x, y, z, cX, sX, cY, sY, cZ, sZ);
        const [rnx, rny, rnz] = rotateXYZ(nx, ny, nz, cX, sX, cY, sY, cZ, sZ);

        const zCam = rzp + 60;
        if (zCam <= 0.001) return;

        const ooz = 1 / zCam;
        const xp = (W / 2 + rxp * ooz * 110) | 0;
        const yp = (H / 2 - ryp * ooz * 70) | 0;

        if (xp < 0 || xp >= W || yp < 0 || yp >= H) return;

        const idx = xp + yp * W;
        if (ooz <= zBuffer[idx]) return;
        zBuffer[idx] = ooz;

        if (charOverride) {
          charBuffer[idx] = charOverride;
          return;
        }

        let lum = rnx * lx + rny * ly + rnz * lz;
        lum = clamp(lum, 0, 1);

        const shimmer = glow ? (Math.sin(time * 4) + 1) * 0.06 : 0;
        const lIdx = (clamp(lum + shimmer, 0, 1) * rampLast) | 0;
        charBuffer[idx] = RAMP[lIdx];
      };

      // Torus lattice
      const ringRadius = 14;
      const tubeRadius = 5;
      const thetaStep = 0.08 / dens;
      const phiStep = 0.15 / dens;
      const latticePeriod = Math.PI / 4;
      const latticeEps = 0.04;

      for (let theta = 0; theta < Math.PI * 2; theta += thetaStep) {
        const cT = Math.cos(theta);
        const sT = Math.sin(theta);

        for (let phi = 0; phi < Math.PI * 2; phi += phiStep) {
          const cP = Math.cos(phi);
          const sP = Math.sin(phi);

          const latticeA = Math.abs(theta % latticePeriod) < latticeEps;
          const latticeB = Math.abs(phi % latticePeriod) < latticeEps;
          const isLattice = latticeA || latticeB;
          if (!isLattice) continue;

          const r = ringRadius + tubeRadius * cP;
          const x = r * cT;
          const y = r * sT;
          const z = tubeRadius * sP;

          const nx = cP * cT;
          const ny = cP * sT;
          const nz = sP;

          const isNode = latticeA && latticeB;
          plot(x, y, z, nx, ny, nz, isNode ? "#" : null, false);
        }
      }

      // Pulsing core sphere
      const coreRadius = 3 + Math.sin(time * 3) * 0.8;
      for (let p = 0; p <= Math.PI; p += 0.3) {
        const sP = Math.sin(p);
        const cP = Math.cos(p);

        for (let t = 0; t < Math.PI * 2; t += 0.3) {
          const cT = Math.cos(t);
          const sT = Math.sin(t);

          const cx = coreRadius * sP * cT;
          const cy = coreRadius * sP * sT;
          const cz = coreRadius * cP;

          const [nx, ny, nz] = normalize3(cx, cy, cz);
          plot(cx, cy, cz, nx, ny, nz, "•", true);
        }
      }

      const out = new Array(H);
      for (let i = 0; i < H; i++) {
        out[i] = charBuffer.slice(i * W, (i + 1) * W).join("");
      }
      pre.textContent = out.join("\n");

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

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

export default NeuralLattice;
