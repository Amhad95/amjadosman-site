import { createServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(process.cwd());
const dist = resolve(root, "dist");
const origin = "https://amjadosman.vercel.app";

const staticPaths = [
  "/", "/services", "/services/brand", "/services/ops", "/services/agents",
  "/software", "/software/crm", "/software/accounting", "/software/inventory", "/software/tasks",
  "/tools", "/tools/sop-builder", "/tools/page-critique", "/tools/brand-audit", "/tools/process-mapper", "/tools/dashboard-builder", "/tools/kpi-audit",
  "/work", "/pricing", "/about", "/book", "/process", "/resources", "/contact", "/privacy", "/terms", "/payment/success", "/payment/cancel", "/payment/coming-soon",
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
    "/payment/coming-soon": ["Payments opening soon | Amjad Osman", "Online payments are temporarily paused while live payment setup is completed."],
  };
  const [title, description] = known[path] ?? ["Amjad Osman", "Brand, operations, software, and practical automation systems."];
  return { title, description };
};

const absoluteUrl = (value) => {
  if (!value) return `${origin}/social-preview.png`;
  return value.startsWith("http") ? value : `${origin}${value.startsWith("/") ? "" : "/"}${value}`;
};

const pageSchema = (path, meta, article, workCase) => {
  const url = `${origin}${path}`;
  const organization = {
    "@type": "ProfessionalService",
    "@id": `${origin}/#organization`,
    name: "Amjad Osman",
    url: origin,
    description: "Brand, operations, software, and practical AI systems for growing teams.",
    image: `${origin}/social-preview.png`,
  };

  if (article) {
    return {
      "@context": "https://schema.org",
      "@graph": [organization, {
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        datePublished: article.created_at,
        dateModified: article.created_at,
        image: absoluteUrl(article.thumbnail_url),
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Person", name: "Amjad Osman", url: origin },
        publisher: { "@id": `${origin}/#organization` },
      }],
    };
  }

  if (workCase) {
    return {
      "@context": "https://schema.org",
      "@graph": [organization, {
        "@type": "CreativeWork",
        headline: workCase.title,
        description: workCase.description,
        image: absoluteUrl(workCase.thumbnail_url),
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Person", name: "Amjad Osman", url: origin },
        publisher: { "@id": `${origin}/#organization` },
      }],
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organization, {
      "@type": "WebPage",
      name: meta.title,
      description: meta.description,
      url,
      isPartOf: { "@id": `${origin}/#organization` },
    }],
  };
};

const server = await createServer({
  configFile: false,
  mode: "production",
  logLevel: "error",
  appType: "spa",
  plugins: [react()],
  resolve: { alias: { "@": resolve(root, "src") } },
  server: { middlewareMode: true, hmr: false },
});
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

const originalConsoleError = console.error;
console.error = (...args) => {
  if (String(args[0] ?? "").startsWith("Warning: useLayoutEffect does nothing on the server")) return;
  originalConsoleError(...args);
};

for (const path of [...new Set(paths)]) {
  const article = fallbackArticles.find((item) => path === `/resources/${item.slug}`);
  const workCase = workCases.find((item) => path === `/work/${item.slug}`);
  const meta = pageMeta(path, article, workCase);
  const image = absoluteUrl(article?.thumbnail_url ?? workCase?.thumbnail_url ?? null);
  const schema = JSON.stringify(pageSchema(path, meta, article, workCase)).replace(/</g, "\\u003c");
  const html = render(path);
  const document = template
    .replace(/<html lang="[^"]+">/, `<html lang="en">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtml(meta.description)}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(meta.title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(meta.description)}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeHtml(meta.title)}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`)
    .replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${escapeHtml(image)}">`)
    .replace(/<meta property="og:image:secure_url" content="[^"]*">/, `<meta property="og:image:secure_url" content="${escapeHtml(image)}">`)
    .replace(/<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${escapeHtml(image)}">`)
    .replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`)
    .replace(/<\/head>/, `<link rel="canonical" href="${origin}${path === "/" ? "/" : path}"><meta property="og:url" content="${origin}${path}"><script type="application/ld+json">${schema}</script></head>`);
  const outputPath = path === "/" ? resolve(dist, "index.html") : resolve(dist, path.slice(1), "index.html");
  await mkdir(resolve(outputPath, ".."), { recursive: true });
  await writeFile(outputPath, document);
}

console.error = originalConsoleError;

const sitemap = [...new Set(paths)].map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n");
await writeFile(resolve(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap}\n</urlset>\n`);
await writeFile(resolve(dist, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\n`);
await server.close();
console.log(`Prerendered ${new Set(paths).size} routes with metadata and sitemap.`);
