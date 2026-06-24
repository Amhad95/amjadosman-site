import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface MatrixCodeBackgroundProps {
  className?: string;
  fontSize?: number;
  color?: string;
  characters?: string;
  fadeOpacity?: number;
  speed?: number;
}

export const MatrixCodeBackground: React.FC<MatrixCodeBackgroundProps> = ({
  className,
  fontSize = 20,
  color = 'hsla(275, 100%, 50%, 0.2)',
  characters = '01',
  fadeOpacity = 0.08,
  speed = 0.7,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = characters.split('');
    let drops: number[] = [];
    let width = 0;
    let height = 0;
    let intervalId = 0;

    const resizeCanvas = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const columnCount = Math.ceil(width / fontSize);
      drops = Array.from({ length: columnCount }, () => Math.random() * -100);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      ctx.font = `600 ${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let column = 0; column < drops.length; column += 1) {
        for (let row = 0; row < Math.ceil(height / (fontSize * 5)); row += 1) {
          if (Math.random() > 0.28) continue;
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = column * fontSize + (fontSize / 2);
          const y = row * fontSize * 5;
          ctx.fillText(char, x, y);
          ctx.fillText(char, x, y); // Draw twice for clarity
        }
      }
    };

    const draw = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = color;
      ctx.font = `600 ${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let column = 0; column < drops.length; column += 1) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = column * fontSize + (fontSize / 2);
        const y = drops[column] * fontSize;

        ctx.fillText(char, x, y);
        ctx.fillText(char, x, y); // Draw twice for clarity against the fading background

        if (y > height && Math.random() > 0.975) {
          drops[column] = 0;
        }

        drops[column]++; // Increment exactly by 1 cell to prevent overlapping blur
      }
    };

    resizeCanvas();

    const observer = new ResizeObserver(() => {
      resizeCanvas();
      if (reducedMotion) drawStatic();
    });
    observer.observe(parent);

    if (reducedMotion) {
      drawStatic();
    } else {
      intervalId = window.setInterval(draw, Math.max(40, 70 / speed));
    }

    return () => {
      window.clearInterval(intervalId);
      observer.disconnect();
    };
  }, [characters, color, fadeOpacity, fontSize, reducedMotion, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn('absolute inset-0 z-0 h-full w-full pointer-events-none', className)}
    />
  );
};

export default MatrixCodeBackground;
