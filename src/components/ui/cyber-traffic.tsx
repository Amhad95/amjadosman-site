import React, { useEffect, useRef } from "react";

const W = 60;
const H = 35;
const RAMP = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

const COLOR_MAP: Record<string, string> = {
  mint: "#00FFD9",
  amber: "#fbbf24",
  cyan: "#22d3ee",
  green: "#4ade80",
  matrix: "#00ff41",
  blue: "#3b82f6",
  violet: "#a78bfa",
};

interface CyberTrafficProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  density?: number;
}

interface Car {
  lane: number;
  z: number;
  speed: number;
  type: "truck" | "car";
}

export const CyberTraffic: React.FC<CyberTrafficProps> = ({
  speed = 1,
  color = "mint",
  density = 1.0,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const rafRef = useRef<number>(0);
  const carsRef = useRef<Car[]>([]);
  const lanes = [-8, -3, 3, 8];

  const themeColor = COLOR_MAP[color] || COLOR_MAP.mint;

  useEffect(() => {
    const initialCars: Car[] = [];
    for (let i = 0; i < 8; i++) {
      initialCars.push({
        lane: Math.floor(Math.random() * 4),
        z: Math.random() * 60 + 10,
        speed: 0.2 + Math.random() * 0.4,
        type: Math.random() > 0.6 ? "truck" : "car",
      });
    }
    carsRef.current = initialCars;
  }, []);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;

    const render = () => {
      const zBuffer = new Float32Array(W * H).fill(0);
      const charBuffer = new Array(W * H).fill(" ");
      const time = performance.now() * 0.001 * speed;

      const drawPoint = (
        px: number,
        py: number,
        pz: number,
        charOverride: string | null = null,
        brightness = 1.0
      ) => {
        const camY = 5;
        const camZ = -4;
        const relX = px;
        const relY = py - camY;
        const relZ = pz - camZ;

        if (relZ < 1) return;

        const fov = 50;
        const ooz = 1 / relZ;
        const xp = Math.floor(W / 2 + relX * ooz * fov * 1.5);
        const yp = Math.floor(H / 2 - relY * ooz * fov);

        if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
          const idx = xp + yp * W;
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            if (charOverride) {
              charBuffer[idx] = charOverride;
            } else {
              const fog = Math.max(0, 1 - relZ / 80);
              const lIdx = Math.floor(fog * brightness * (RAMP.length - 1));
              charBuffer[idx] = RAMP[lIdx];
            }
          }
        }
      };

      const roadW = 12;
      const segmentLen = 12;
      const scrollZ = (time * 25) % segmentLen;

      for (let z = 5; z < 70; z += segmentLen) {
        const drawZ = z - scrollZ;
        if (drawZ < 2) continue;
        for (let x = -roadW; x <= roadW; x += 0.8) {
          drawPoint(x, 0, drawZ, "-");
        }
      }

      for (let x = -roadW; x <= roadW; x += 5.5) {
        for (let z = 5; z < 70; z += 1.5) {
          const isEdge = Math.abs(x) > roadW - 1;
          if (!isEdge && Math.sin(z * 0.5 - time * 5) < -0.5) continue;
          drawPoint(x, 0, z, isEdge ? "|" : ":");
        }
      }

      carsRef.current.forEach((car) => {
        car.z += car.speed;
        if (car.z > 65) {
          car.z = 5;
          car.lane = Math.floor(Math.random() * 4);
          car.type = Math.random() > 0.7 ? "truck" : "car";
          car.speed = 0.2 + Math.random() * 0.4;
        }

        const laneX = lanes[car.lane];
        const carW = 1.8;
        const carH = car.type === "truck" ? 2.5 : 1.0;
        const carL = car.type === "truck" ? 5.0 : 3.0;
        const yPos = 0.2;
        const step = 0.7 / density;

        for (let dx = -carW / 2; dx <= carW / 2; dx += step) {
          for (let dy = 0; dy <= carH; dy += step) {
            for (let dz = 0; dz <= carL; dz += step * 1.5) {
              const px = laneX + dx;
              const py = yPos + dy;
              const pz = car.z + dz;

              const isBack = dz < step;
              const isTop = dy > carH - step;
              const isSide = Math.abs(dx) > carW / 2 - step;

              if (isBack || isTop || isSide) {
                let char = "8";
                if (isBack) char = "#";
                if (isTop) char = "=";
                drawPoint(px, py, pz, char);
              }
            }
          }
        }
      });

      const gantryDist = 35;
      const gantryScroll = (time * 25) % gantryDist;

      for (let z = 15; z < 80; z += gantryDist) {
        const gz = z - gantryScroll;
        if (gz < 2) continue;
        for (let y = 0; y < 7; y += 0.8) {
          drawPoint(-roadW - 1.5, y, gz, "H");
          drawPoint(roadW + 1.5, y, gz, "H");
        }
        for (let x = -roadW - 1.5; x <= roadW + 1.5; x += 0.5) {
          drawPoint(x, 7, gz, "/");
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
  }, [speed, density]);

  return (
    <div className="flex items-center justify-center overflow-hidden w-full h-full">
      <pre
        ref={preRef}
        className="text-[6px] sm:text-[8px] md:text-[9px] leading-[1.0] font-mono select-none whitespace-pre"
        style={{
          color: themeColor,
          textShadow: `0 0 8px ${themeColor}66`,
        }}
      />
    </div>
  );
};

export default CyberTraffic;
