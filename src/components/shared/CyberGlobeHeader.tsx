import React, { useEffect, useState, useRef } from "react";

const W = 60; 
const H = 32; 
const RAMP = " .:-=+*#";

const COLOR_MAP: Record<string, string> = {
  cyan: "#22d3ee",
  green: "#4ade80",
  amber: "#fbbf24",
  matrix: "#00ff41",
  blue: "#3b82f6",
  mint: "#00FFD9"
};

interface CyberGlobeHeaderProps {
  speed?: number;
  color?: keyof typeof COLOR_MAP;
  showCore?: boolean;
}

export const CyberGlobeHeader: React.FC<CyberGlobeHeaderProps> = ({
  speed = 1,
  color = "cyan",
  showCore = true
}) => {
  const [frame, setFrame] = useState<string[]>([]);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
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
      light.x /= mag; light.y /= mag; light.z /= mag;

      const cubeSize = 12;
      const step = 0.85;

      const drawPoint = (px: number, py: number, pz: number, isEdge = false, isCore = false) => {
        let tx = px * cZ - py * sZ;
        let ty = px * sZ + py * cZ;
        px = tx; py = ty;
        tx = px * cY + pz * sY;
        let tz = -px * sY + pz * cY;
        px = tx; pz = tz;
        ty = py * cX - pz * sX;
        tz = py * sX + pz * cX;
        py = ty; pz = tz;

        const ooz = 1 / (pz + 65);
        const xp = Math.floor(W / 2 + px * ooz * 105); 
        const yp = Math.floor(H / 2 - py * ooz * 65);

        if (xp >= 0 && xp < W && yp >= 0 && yp < H) {
          const idx = xp + yp * W;
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            
            if (isEdge) {
              charBuffer[idx] = "#";
            } else if (isCore) {
              charBuffer[idx] = "•";
            } else {
              const lum = Math.abs(px * light.x + py * light.y + pz * light.z) / cubeSize;
              const lIdx = Math.floor(Math.min(1, lum * 1.5) * (RAMP.length - 1));
              charBuffer[idx] = RAMP[lIdx];
            }
          }
        }
      };

      for (let i = -cubeSize; i <= cubeSize; i += step) {
        for (let j = -cubeSize; j <= cubeSize; j += step) {
          const atEdgeI = Math.abs(Math.abs(i) - cubeSize) < 0.1;
          const atEdgeJ = Math.abs(Math.abs(j) - cubeSize) < 0.1;

          drawPoint(i, cubeSize, j, atEdgeI || atEdgeJ);
          drawPoint(i, -cubeSize, j, atEdgeI || atEdgeJ);
          drawPoint(cubeSize, i, j, atEdgeI || atEdgeJ);
          drawPoint(-cubeSize, i, j, atEdgeI || atEdgeJ);
          drawPoint(i, j, cubeSize, atEdgeI || atEdgeJ);
          drawPoint(i, j, -cubeSize, atEdgeI || atEdgeJ);
        }
      }

      if (showCore) {
        const coreRadius = 4.5 + Math.sin(time * 2) * 0.5;
        for (let phi = 0; phi < Math.PI; phi += 0.4) {
          for (let theta = 0; theta < 2 * Math.PI; theta += 0.4) {
            const cx = coreRadius * Math.sin(phi) * Math.cos(theta);
            const cy = coreRadius * Math.sin(phi) * Math.sin(theta);
            const cz = coreRadius * Math.cos(phi);
            drawPoint(cx, cy, cz, false, true);
          }
        }
      }

      const lines: string[] = [];
      for (let i = 0; i < H; i++) {
        lines.push(charBuffer.slice(i * W, (i + 1) * W).join(""));
      }
      setFrame(lines);
      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed, showCore]);

  const themeColor = COLOR_MAP[color] || COLOR_MAP.cyan;

  return (
    <div className="w-full max-w-full h-[180px] sm:h-[200px] lg:h-[220px] flex items-center justify-center overflow-hidden">
      <pre
        className="text-[4px] leading-[1.0] font-mono select-none whitespace-pre transform scale-[1.35] sm:scale-[1.5] md:scale-[1.65] lg:scale-[1.8] origin-center"
        style={{ 
          color: themeColor,
          textShadow: `0 0 1px ${themeColor}80, 0 0 2px ${themeColor}40`
        }}
      >
        {frame.join("\n")}
      </pre>
    </div>
  );
};

export default CyberGlobeHeader;
