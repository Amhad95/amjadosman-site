export type PlateColor =
  | "violet"
  | "navy"
  | "emerald"
  | "blue"
  | "astral"
  | "burgundy";

const routePlateMap: Record<string, PlateColor> = {
  "/": "violet",
  "/software": "astral",
  "/software/crm": "astral",
  "/software/accounting": "astral",
  "/software/inventory": "astral",
  "/software/tasks": "astral",
  "/services": "navy",
  "/services/brand": "navy",
  "/services/ops": "navy",
  "/services/agents": "navy",
  "/tools": "emerald",
  "/tools/sop-builder": "violet",
  "/tools/page-critique": "blue",
  "/tools/brand-audit": "burgundy",
  "/tools/process-mapper": "emerald",
  "/tools/dashboard-builder": "astral",
  "/tools/kpi-audit": "navy",
  "/pricing": "navy",
  "/work": "blue",
  "/about": "burgundy",
  "/process": "emerald",
  "/resources": "emerald",
  "/contact": "astral",
  "/privacy": "navy",
  "/terms": "burgundy",
};

export const getCurrentPlate = (pathname: string): PlateColor => {
  if (routePlateMap[pathname]) {
    return routePlateMap[pathname];
  }

  if (pathname.startsWith("/work/")) {
    return "blue";
  }

  if (pathname.startsWith("/resources/")) {
    return "emerald";
  }

  return "violet";
};
