import { createServer } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const dist = resolve(root, "dist");
const origin = "https://amjadosman.vercel.app";

const staticPaths = [
  "/", "/services", "/services/brand", "/services/ops", "/services/agents",
  "/software", "/software/crm", "/software/accounting", "/software/inventory", "/software/tasks",
  "/tools", "/tools/sop-builder", "/tools/page-critique", "/tools/brand-audit", "/tools/process-mapper", "/tools/dashboard-builder", "/tools/kpi-audit",
  "/work", "/pricing", "/about", "/book", "/process", "/resources", "/contact", "/privacy", "/terms", "/payment/success", "/payment/cancel",
];

const escapeHtml = (value) => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const pageMeta = (path, article, workCase) => {
  if (article) return { title: `${article.title} | Amjad Osman Resources`, description: article.excerpt };
  if (workCase) return { title: `${workCase.title} | Amjad Osman`, description: workCase.description };
  const known = {
    "/": ["Amjad Osman - Brand, Operations, Software, and AI Systems", "Amjad Osman helps growing teams improve brand, websites, internal operations, and practical AI workflows with clear scope and clean handover."],
    "/services": ["Services | Amjad Osman", "Brand systems, internal operations, and practical automation services for growing teams."],
    "/software": ["Managed software | Amjad Osman", "Focused operational software configured and managed around how teams actually work."],
    "/tools": ["Self-help tools | Amjad Osman", "Structured self-help tools for KPIs, dashboards, processes, SOPs, pages, and brand systems."],
    "/work": ["Work | Amjad Osman", "Selected work across brand, operations, software, strategy, and practical automation."],
    "/resources": ["Resources | Amjad Osman", "Practical notes for teams improving brand, operations, software, and automation."],
    "/pricing": ["Pricing | Amjad Osman", "Contained service packages, fixed starting prices, and managed software options."],
    "/about": ["About | Amjad Osman", "How Amjad Osman approaches brand, operational systems, software, and automation work."],
    "/process": ["Process | Amjad Osman", "A clear process for scoping, building, handing over, and improving practical business systems."],
    "/contact": ["Contact | Amjad Osman", "Start a focused conversation about brand, operations, software, or automation work."],
    "/privacy": ["Privacy | Amjad Osman", "Plain-language privacy information for this website, bookings, tools, and enquiries."],
    "/terms": ["Terms | Amjad Osman", "Plain-language terms for website use, free tools, project conversations, and paid work."],
  };
  const [title, description] = known[path] ?? ["Amjad Osman", "Brand, operations, software, and practical automation systems."];
  return { title, description };
};

const server = await createServer({ server: { middlewareMode: true }, appType: "spa" });
const { render } = await server.ssrLoadModule("/src/entry-server.tsx");
const { fallbackArticles } = await server.ssrLoadModule("/src/lib/fallbackContent.ts");
const { getPublishedWorkCases } = await server.ssrLoadModule("/src/data/workCasesDatabase.ts");
const workCases = getPublishedWorkCases();
const paths = [
  ...staticPaths,
  ...workCases.map((item) => `/work/${item.slug}`),
  ...fallbackArticles.map((item) => `/resources/${item.slug}`),
];
const template = await readFile(resolve(dist, "index.html"), "utf8");

for (const path of [...new Set(paths)]) {
  const article = fallbackArticles.find((item) => path === `/resources/${item.slug}`);
  const workCase = workCases.find((item) => path === `/work/${item.slug}`);
  const meta = pageMeta(path, article, workCase);
  const html = render(path);
  const document = template
    .replace(/<html lang="[^"]+">/, `<html lang="en">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtml(meta.description)}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(meta.title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(meta.description)}">`)
    .replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`)
    .replace(/<\/head>/, `<link rel="canonical" href="${origin}${path === "/" ? "/" : path}"><meta property="og:url" content="${origin}${path}"></head>`);
  const outputPath = path === "/" ? resolve(dist, "index.html") : resolve(dist, path.slice(1), "index.html");
  await mkdir(resolve(outputPath, ".."), { recursive: true });
  await writeFile(outputPath, document);
}

const sitemap = [...new Set(paths)].map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n");
await writeFile(resolve(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
await writeFile(resolve(dist, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`);
await server.close();
console.log(`Prerendered ${new Set(paths).size} routes with metadata and sitemap.`);
