import React, { useEffect, useMemo, useRef } from 'react';
import { cn } from '@/lib/utils';

const W = 70;
const H = 34;
const TAU = Math.PI * 2;

const COLOR_MAP = {
  mint: '#00FFD9',
  cyan: '#22d3ee',
  green: '#4ade80',
  amber: '#fbbf24',
  blue: '#3b82f6',
  violet: '#a78bfa',
} as const;

export type BottomCTAVisualKey =
  | 'signal-core'
  | 'north-star'
  | 'tri-axis-hub'
  | 'glyph-bloom'
  | 'stack-cube'
  | 'orbit-relay'
  | 'value-axis'
  | 'proof-monolith'
  | 'case-prism'
  | 'archive-beacon'
  | 'insight-lens'
  | 'flow-gyre'
  | 'logic-knot'
  | 'palette-halo'
  | 'metric-spine'
  | 'signal-needle'
  | 'focus-lens'
  | 'route-prism'
  | 'document-totem'
  | 'suite-core'
  | 'relation-core'
  | 'stock-prism'
  | 'ledger-torus'
  | 'task-gyre';

interface BottomCTAAsciiObjectProps {
  visualKey: BottomCTAVisualKey;
  className?: string;
  speed?: number;
  color?: keyof typeof COLOR_MAP;
}

type Renderer = (ctx: AsciiContext, time: number) => void;

interface AsciiContext {
  plot: (x: number, y: number, char?: string, priority?: number) => void;
  line: (x1: number, y1: number, x2: number, y2: number, char?: string, priority?: number) => void;
  circle: (cx: number, cy: number, r: number, char?: string, priority?: number, start?: number, end?: number) => void;
  ellipse: (
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    rot?: number,
    char?: string,
    priority?: number,
    start?: number,
    end?: number
  ) => void;
  poly: (points: Array<{ x: number; y: number }>, char?: string, priority?: number, closed?: boolean) => void;
  spiral: (
    cx: number,
    cy: number,
    startR: number,
    endR: number,
    turns: number,
    rot?: number,
    char?: string,
    priority?: number
  ) => void;
  text: (x: number, y: number, value: string, priority?: number) => void;
  toString: () => string;
}

function createAsciiContext(): AsciiContext {
  const chars = new Array(W * H).fill(' ');
  const priorities = new Array(W * H).fill(-1);

  const plot = (x: number, y: number, char = '.', priority = 1) => {
    const px = Math.round(x);
    const py = Math.round(y);
    if (px < 0 || px >= W || py < 0 || py >= H) return;
    const idx = px + py * W;
    if (priority < priorities[idx]) return;
    priorities[idx] = priority;
    chars[idx] = char;
  };

  const line = (x1: number, y1: number, x2: number, y2: number, char = '-', priority = 1) => {
    const steps = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) * 2 + 1;
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      plot(x1 + (x2 - x1) * t, y1 + (y2 - y1) * t, char, priority);
    }
  };

  const circle = (cx: number, cy: number, r: number, char = 'o', priority = 1, start = 0, end = TAU) => {
    const steps = Math.max(24, Math.floor(r * 20));
    for (let i = 0; i <= steps; i += 1) {
      const t = start + ((end - start) * i) / steps;
      plot(cx + Math.cos(t) * r, cy + Math.sin(t) * r, char, priority);
    }
  };

  const ellipse = (
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    rot = 0,
    char = 'o',
    priority = 1,
    start = 0,
    end = TAU
  ) => {
    const steps = Math.max(28, Math.floor(Math.max(rx, ry) * 20));
    const c = Math.cos(rot);
    const s = Math.sin(rot);
    for (let i = 0; i <= steps; i += 1) {
      const t = start + ((end - start) * i) / steps;
      const ex = Math.cos(t) * rx;
      const ey = Math.sin(t) * ry;
      plot(cx + ex * c - ey * s, cy + ex * s + ey * c, char, priority);
    }
  };

  const poly = (points: Array<{ x: number; y: number }>, char = '-', priority = 1, closed = true) => {
    for (let i = 0; i < points.length - 1; i += 1) {
      line(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y, char, priority);
    }
    if (closed && points.length > 2) {
      line(points[points.length - 1].x, points[points.length - 1].y, points[0].x, points[0].y, char, priority);
    }
  };

  const spiral = (cx: number, cy: number, startR: number, endR: number, turns: number, rot = 0, char = '.', priority = 1) => {
    const steps = Math.max(40, Math.floor(turns * 72));
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      const a = rot + TAU * turns * t;
      const r = startR + (endR - startR) * t;
      plot(cx + Math.cos(a) * r, cy + Math.sin(a) * r, char, priority);
    }
  };

  const text = (x: number, y: number, value: string, priority = 1) => {
    value.split('').forEach((char, index) => plot(x + index, y, char, priority));
  };

  const toString = () => {
    const lines: string[] = [];
    for (let y = 0; y < H; y += 1) {
      lines.push(chars.slice(y * W, (y + 1) * W).join(''));
    }
    return lines.join('\n');
  };

  return { plot, line, circle, ellipse, poly, spiral, text, toString };
}

function pointOnCircle(cx: number, cy: number, radius: number, angle: number) {
  return { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
}

function drawIsoCube(ctx: AsciiContext, cx: number, cy: number, size: number, depth: number, char = '#', priority = 2) {
  const front = [
    { x: cx - size, y: cy - size },
    { x: cx + size, y: cy - size },
    { x: cx + size, y: cy + size },
    { x: cx - size, y: cy + size },
  ];
  const back = front.map((point) => ({ x: point.x + depth, y: point.y - depth * 0.7 }));
  ctx.poly(front, char, priority);
  ctx.poly(back, char, priority - 1);
  for (let i = 0; i < front.length; i += 1) {
    ctx.line(front[i].x, front[i].y, back[i].x, back[i].y, char, priority - 1);
  }
}

function drawPrism(ctx: AsciiContext, cx: number, cy: number, size: number, depth: number, char = '#', priority = 2) {
  const front = [
    { x: cx, y: cy - size },
    { x: cx + size, y: cy + size * 0.75 },
    { x: cx - size, y: cy + size * 0.75 },
  ];
  const back = front.map((point) => ({ x: point.x + depth, y: point.y - depth * 0.6 }));
  ctx.poly(front, char, priority);
  ctx.poly(back, char, priority - 1);
  for (let i = 0; i < front.length; i += 1) {
    ctx.line(front[i].x, front[i].y, back[i].x, back[i].y, char, priority - 1);
  }
}

function drawDiamond(ctx: AsciiContext, cx: number, cy: number, width: number, height: number, char = '#', priority = 2) {
  ctx.poly(
    [
      { x: cx, y: cy - height },
      { x: cx + width, y: cy },
      { x: cx, y: cy + height },
      { x: cx - width, y: cy },
    ],
    char,
    priority
  );
}

function drawStar(ctx: AsciiContext, cx: number, cy: number, outer: number, inner: number, points: number, rot: number, char = '*', priority = 2) {
  const vertices: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < points * 2; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = rot + (TAU * i) / (points * 2);
    vertices.push(pointOnCircle(cx, cy, radius, angle));
  }
  ctx.poly(vertices, char, priority);
}

const renderSignalCore: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.circle(cx, cy, 4.5 + Math.sin(time * 2.2) * 0.5, 'o', 4);
  ctx.circle(cx, cy, 8.5, '.', 1, time * 0.5, time * 0.5 + Math.PI * 1.4);
  ctx.circle(cx, cy, 11.5, ':', 1, time * -0.4, time * -0.4 + Math.PI * 1.25);
  ctx.circle(cx, cy, 14.5, '+', 1, time * 0.35, time * 0.35 + Math.PI * 1.5);
  for (let i = 0; i < 4; i += 1) {
    const angle = time * 0.8 + (TAU * i) / 4;
    const node = pointOnCircle(cx, cy, 14.5, angle);
    ctx.plot(node.x, node.y, '@', 5);
    ctx.line(cx, cy, node.x, node.y, '.', 0);
  }
  ctx.text(cx - 1, cy, ':::', 6);
};

const renderNorthStar: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  drawStar(ctx, cx, cy, 10.5, 3.5, 4, Math.PI / 4 + Math.sin(time * 0.7) * 0.08, '#', 4);
  drawStar(ctx, cx, cy, 6.5, 2.2, 4, time * -0.5, '+', 3);
  ctx.circle(cx, cy, 13.5, '.', 1);
  for (let i = 0; i < 8; i += 1) {
    const angle = time * 0.6 + (TAU * i) / 8;
    const node = pointOnCircle(cx, cy, 13.5, angle);
    ctx.plot(node.x, node.y, '*', 5);
  }
};

const renderTriAxisHub: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.ellipse(cx, cy, 14, 5.2, time * 0.3, 'o', 2);
  ctx.ellipse(cx, cy, 11.5, 4.2, time * -0.45 + 1.1, ':', 2);
  ctx.ellipse(cx, cy, 9.8, 3.8, time * 0.55 - 0.8, '.', 2);
  drawDiamond(ctx, cx, cy, 4.5, 4.5, '#', 4);
  ctx.line(cx - 15, cy, cx + 15, cy, '.', 0);
  ctx.line(cx, cy - 10, cx, cy + 10, '.', 0);
};

const renderGlyphBloom: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  for (let i = 0; i < 6; i += 1) {
    const angle = time * 0.45 + (TAU * i) / 6;
    const petal = pointOnCircle(cx, cy, 6.5, angle);
    ctx.ellipse(petal.x, petal.y, 5.2, 2.2, angle, 'o', 2);
  }
  drawStar(ctx, cx, cy, 4.2, 1.8, 6, -time * 0.7, '*', 4);
  ctx.circle(cx, cy, 10.5, '.', 1);
};

const renderStackCube: Renderer = (ctx, time) => {
  drawIsoCube(ctx, 31, 21 + Math.sin(time * 0.9) * 0.8, 5, 4, '#', 4);
  drawIsoCube(ctx, 35, 16 + Math.sin(time * 1.1 + 0.7) * 0.5, 4.2, 3.5, ':', 3);
  drawIsoCube(ctx, 39, 11 + Math.sin(time * 0.8 + 1.4) * 0.6, 3.4, 3, '+', 2);
  ctx.circle(35, 17, 12.5, '.', 0, Math.PI * 0.12, Math.PI * 0.88);
};

const renderOrbitRelay: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.ellipse(cx, cy, 14.5, 6.2, time * 0.4, 'o', 2);
  ctx.ellipse(cx, cy, 10.5, 10.5, time * -0.22, '.', 1, Math.PI * 0.2, Math.PI * 1.8);
  drawDiamond(ctx, cx, cy, 4.5, 4.5, '#', 4);
  for (let i = 0; i < 4; i += 1) {
    const angle = time * 0.75 + (TAU * i) / 4;
    const node = pointOnCircle(cx, cy, i % 2 === 0 ? 14.5 : 10.5, angle);
    ctx.plot(node.x, node.y, '@', 5);
    ctx.line(cx, cy, node.x, node.y, '.', 0);
  }
};

const renderValueAxis: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.line(cx, 6, cx, 28, '|', 2);
  ctx.circle(cx, cy, 9, 'o', 2, Math.PI * 0.1, Math.PI * 1.9);
  ctx.ellipse(cx, cy, 12.5, 4.2, Math.PI / 2, '.', 1, time * 0.4, time * 0.4 + Math.PI);
  ctx.line(cx - 10, cy + 5, cx + 10, cy - 5, '/', 1);
  ctx.plot(cx, cy - 9 - Math.sin(time * 1.4) * 3, '@', 5);
  ctx.text(cx - 2, cy + 1, '===', 4);
};

const renderProofMonolith: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 18;
  ctx.poly(
    [
      { x: cx - 5, y: cy + 9 },
      { x: cx + 4, y: cy + 9 },
      { x: cx + 7, y: cy - 8 },
      { x: cx - 3, y: cy - 10 },
    ],
    '#',
    4
  );
  for (let i = 0; i < 5; i += 1) {
    const y = cy - 6 + i * 3 + Math.sin(time * 1.3 + i) * 0.4;
    ctx.line(cx - 3, y, cx + 5, y - 1, '.', 2);
  }
  ctx.circle(cx, cy - 12.5, 2.5 + Math.sin(time * 2) * 0.3, 'o', 3);
  ctx.ellipse(cx, cy + 1, 13, 5.5, Math.PI / 2, '.', 0);
};

const renderCasePrism: Renderer = (ctx, time) => {
  drawPrism(ctx, 34, 17, 7, 5 + Math.sin(time * 0.8), '#', 4);
  ctx.line(29, 20, 43, 14 + Math.sin(time * 1.4) * 1.4, '.', 2);
  ctx.circle(34, 17, 12.8, ':', 1, time * 0.3, time * 0.3 + Math.PI * 1.15);
};

const renderArchiveBeacon: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.line(cx, 7, cx, 27, '|', 2);
  [-8, -3, 2, 7].forEach((offset, index) => {
    ctx.ellipse(cx, cy + offset, 9 + index * 0.7, 2.8, 0, index % 2 === 0 ? 'o' : ':', 2);
  });
  ctx.circle(cx, cy - 12.5, 2.2 + Math.sin(time * 1.6) * 0.4, '*', 4);
  ctx.circle(cx, cy + 12.5, 1.8 + Math.cos(time * 1.3) * 0.3, '+', 3);
};

const renderInsightLens: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.ellipse(cx, cy, 14, 6.2, 0, 'o', 3, Math.PI * 0.1, Math.PI * 0.9);
  ctx.ellipse(cx, cy, 14, 6.2, 0, 'o', 3, Math.PI * 1.1, Math.PI * 1.9);
  ctx.circle(cx, cy, 4.4 + Math.sin(time * 1.5) * 0.3, '#', 4);
  ctx.circle(cx, cy, 8.2, '.', 1);
  const focus = pointOnCircle(cx, cy, 11.5, time * 0.75);
  ctx.plot(focus.x, focus.y, '@', 5);
};

const renderFlowGyre: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.spiral(cx, cy, 1.5, 13, 2.4, time * 0.4, 'o', 2);
  ctx.spiral(cx, cy, 1.5, 10, 2, time * -0.55 + Math.PI, ':', 2);
  ctx.circle(cx, cy, 3.2, '#', 4);
  for (let i = 0; i < 3; i += 1) {
    const node = pointOnCircle(cx, cy, 6 + i * 3.2, time * 0.8 + i * 1.7);
    ctx.plot(node.x, node.y, '*', 5);
  }
};

const renderLogicKnot: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  for (let i = 0; i < 220; i += 1) {
    const t = (i / 220) * TAU;
    const x = Math.sin(t + time * 0.45) * 11 + Math.sin((t + time * 0.2) * 3) * 2.5;
    const y = Math.sin(t * 2 + time * 0.35) * 6;
    ctx.plot(cx + x, cy + y, i % 5 === 0 ? '#' : 'o', 2);
  }
  ctx.circle(cx, cy, 4.2, '.', 1);
};

const renderPaletteHalo: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.circle(cx, cy, 11.5, 'o', 2);
  for (let i = 0; i < 6; i += 1) {
    const angle = (TAU * i) / 6 + time * 0.35;
    const petal = pointOnCircle(cx, cy, 7.2, angle);
    ctx.ellipse(petal.x, petal.y, 3.8, 1.5, angle, ':', 2);
  }
  ctx.circle(cx, cy, 3.2 + Math.sin(time * 2.1) * 0.4, '#', 4);
};

const renderMetricSpine: Renderer = (ctx, time) => {
  const cx = 35;
  ctx.line(cx, 5, cx, 29, '|', 3);
  for (let i = 0; i < 5; i += 1) {
    const y = 8 + i * 5;
    const width = 4 + (i % 2) * 2;
    ctx.line(cx - width, y, cx - 1, y, i % 2 === 0 ? '=' : '-', 2);
    ctx.line(cx + 1, y, cx + width, y, i % 2 === 0 ? '=' : '-', 2);
  }
  const y = 17 + Math.sin(time * 1.7) * 8;
  ctx.plot(cx + 6, y, '@', 5);
  ctx.line(cx, y, cx + 6, y, '.', 1);
};

const renderSignalNeedle: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.circle(cx, cy, 12, 'o', 2, Math.PI * 0.15, Math.PI * 1.85);
  ctx.circle(cx, cy, 8.5, '.', 1);
  const angle = -Math.PI / 2 + Math.sin(time * 0.9) * 1.1;
  const tip = pointOnCircle(cx, cy, 10.5, angle);
  const tail = pointOnCircle(cx, cy, 4.5, angle + Math.PI);
  ctx.line(tail.x, tail.y, tip.x, tip.y, '#', 4);
  ctx.plot(tip.x, tip.y, '@', 5);
  ctx.circle(cx, cy, 2.2, '+', 3);
};

const renderFocusLens: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  drawDiamond(ctx, cx, cy, 11, 11, 'o', 2);
  for (let i = 0; i < 3; i += 1) {
    const rot = time * 0.4 + i * (TAU / 3);
    const p1 = pointOnCircle(cx, cy, 7.2, rot);
    const p2 = pointOnCircle(cx, cy, 3.2, rot + 0.8);
    const p3 = pointOnCircle(cx, cy, 7.2, rot + 1.6);
    ctx.poly([p1, p2, p3], i === 1 ? ':' : '#', 3);
  }
  ctx.circle(cx, cy, 2.4, '@', 5);
};

const renderRoutePrism: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  drawDiamond(ctx, cx, cy, 12, 9, '#', 3);
  drawPrism(ctx, cx, cy, 6.5, 3.8, '.', 1);
  const route = [
    { x: 28, y: 20 },
    { x: 31, y: 15 },
    { x: 37, y: 18 },
    { x: 42, y: 13 },
  ];
  ctx.poly(route, 'o', 4, false);
  const idx = Math.floor(((Math.sin(time) + 1) / 2) * (route.length - 1));
  ctx.plot(route[idx].x, route[idx].y, '@', 5);
};

const renderDocumentTotem: Renderer = (ctx, time) => {
  const cx = 35;
  const offsets = [-8, 0, 8];
  offsets.forEach((offset, index) => {
    const tilt = Math.sin(time * 0.8 + index) * 1.2;
    ctx.poly(
      [
        { x: cx - 8 + tilt, y: 17 + offset - 3 },
        { x: cx + 6 + tilt, y: 17 + offset - 4 },
        { x: cx + 8 + tilt, y: 17 + offset + 3 },
        { x: cx - 6 + tilt, y: 17 + offset + 4 },
      ],
      index === 1 ? '#' : ':',
      3 - index * 0.2
    );
    ctx.line(cx - 2 + tilt, 17 + offset - 1, cx + 4 + tilt, 17 + offset - 2, '.', 2);
    ctx.line(cx - 2 + tilt, 17 + offset + 1, cx + 2 + tilt, 17 + offset, '.', 2);
  });
  ctx.line(cx, 5, cx, 29, '|', 1);
};

const renderSuiteCore: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  drawIsoCube(ctx, cx, cy, 5.5, 4.5, '#', 4);
  ctx.circle(cx, cy, 7.8, '.', 1);
  [0, 1, 2, 3].forEach((i) => {
    const angle = time * 0.6 + (TAU * i) / 4 + Math.PI / 4;
    const node = pointOnCircle(cx, cy, 14, angle);
    ctx.plot(node.x, node.y, '@', 5);
    ctx.line(cx, cy, node.x, node.y, '.', 0);
  });
};

const renderRelationCore: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.circle(cx - 4, cy, 7.5, 'o', 3);
  ctx.circle(cx + 4, cy, 7.5, 'o', 3);
  ctx.ellipse(cx, cy, 11.5, 4.5, Math.sin(time * 0.5) * 0.2, '.', 1);
  ctx.line(cx - 4, cy, cx + 4, cy, '#', 4);
  const nodeA = pointOnCircle(cx - 4, cy, 7.5, time * 0.8);
  const nodeB = pointOnCircle(cx + 4, cy, 7.5, time * -0.8 + Math.PI);
  ctx.plot(nodeA.x, nodeA.y, '@', 5);
  ctx.plot(nodeB.x, nodeB.y, '@', 5);
};

const renderStockPrism: Renderer = (ctx, time) => {
  drawIsoCube(ctx, 35, 17, 6, 4.5, '#', 4);
  for (let i = -5; i <= 5; i += 2.5) {
    ctx.line(29, 17 + i, 41, 17 + i - 4, ':', 2);
  }
  [0, 1, 2].forEach((i) => {
    const angle = time * 0.7 + i * 2.1;
    const node = pointOnCircle(35, 17, 13.5, angle);
    ctx.plot(node.x, node.y, '*', 5);
  });
};

const renderLedgerTorus: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.ellipse(cx, cy, 14, 6.8, time * 0.35, 'o', 3);
  ctx.ellipse(cx, cy, 10, 4.4, time * 0.35, '.', 2);
  for (let i = 0; i < 10; i += 1) {
    const angle = time * 0.35 + (TAU * i) / 10;
    const outer = pointOnCircle(cx, cy, 14, angle);
    const inner = pointOnCircle(cx, cy, 10, angle);
    ctx.line(inner.x, inner.y, outer.x, outer.y, ':', 1);
  }
  const bead = pointOnCircle(cx, cy, 12, time * 1.1);
  ctx.plot(bead.x, bead.y, '@', 5);
};

const renderTaskGyre: Renderer = (ctx, time) => {
  const cx = 35;
  const cy = 17;
  ctx.circle(cx, cy, 11.5, 'o', 2);
  for (let i = 0; i < 5; i += 1) {
    const angle = time * 0.5 + (TAU * i) / 5;
    const tip = pointOnCircle(cx, cy, 10.5, angle);
    const left = pointOnCircle(cx, cy, 4.2, angle - 0.35);
    const right = pointOnCircle(cx, cy, 4.2, angle + 0.35);
    ctx.poly([left, tip, right], i % 2 === 0 ? '#' : ':', 3);
  }
  ctx.circle(cx, cy, 3, '@', 4);
  const orbit = pointOnCircle(cx, cy, 15, time * -0.8);
  ctx.plot(orbit.x, orbit.y, '*', 5);
};

const RENDERERS: Record<BottomCTAVisualKey, Renderer> = {
  'signal-core': renderSignalCore,
  'north-star': renderNorthStar,
  'tri-axis-hub': renderTriAxisHub,
  'glyph-bloom': renderGlyphBloom,
  'stack-cube': renderStackCube,
  'orbit-relay': renderOrbitRelay,
  'value-axis': renderValueAxis,
  'proof-monolith': renderProofMonolith,
  'case-prism': renderCasePrism,
  'archive-beacon': renderArchiveBeacon,
  'insight-lens': renderInsightLens,
  'flow-gyre': renderFlowGyre,
  'logic-knot': renderLogicKnot,
  'palette-halo': renderPaletteHalo,
  'metric-spine': renderMetricSpine,
  'signal-needle': renderSignalNeedle,
  'focus-lens': renderFocusLens,
  'route-prism': renderRoutePrism,
  'document-totem': renderDocumentTotem,
  'suite-core': renderSuiteCore,
  'relation-core': renderRelationCore,
  'stock-prism': renderStockPrism,
  'ledger-torus': renderLedgerTorus,
  'task-gyre': renderTaskGyre,
};

export const BottomCTAAsciiObject: React.FC<BottomCTAAsciiObjectProps> = ({
  visualKey,
  className,
  speed = 1,
  color = 'mint',
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const frameRef = useRef<number>(0);
  const themeColor = useMemo(() => COLOR_MAP[color] ?? COLOR_MAP.mint, [color]);

  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return undefined;

    const renderer = RENDERERS[visualKey];

    const render = () => {
      const ctx = createAsciiContext();
      const time = performance.now() * 0.001 * speed;
      renderer(ctx, time);
      pre.textContent = ctx.toString();
      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameRef.current);
  }, [speed, visualKey]);

  return (
    <div className={cn('flex h-[220px] w-full items-center justify-center md:h-[250px]', className)}>
      <pre
        ref={preRef}
        className="font-mono text-[7px] leading-[0.9] whitespace-pre select-none sm:text-[8px] md:text-[9px]"
        style={{
          color: themeColor,
          textShadow: `0 0 8px ${themeColor}80, 0 0 18px ${themeColor}40`,
        }}
      />
    </div>
  );
};

export default BottomCTAAsciiObject;
