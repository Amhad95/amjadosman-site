import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const source = await readFile(resolve(root, "src/lib/fallbackContent.ts"), "utf8");
const projectCases = JSON.parse(await readFile(resolve(root, "src/data/projects.json"), "utf8"));
const locales = ["ar", "de", "fr", "bg"];
const errors = [];

const articleStart = source.indexOf("export const fallbackArticles");
const articleEnd = source.indexOf("interface LegacyProjectCase", articleStart);
const articleSource = source.slice(articleStart, articleEnd);
const slugMatches = [...articleSource.matchAll(/^    slug: "([^"]+)",$/gm)];
const articleSlugs = new Set();

const hasField = (record, field) => new RegExp(`^    ${field}:`, "m").test(record);

for (let index = 0; index < slugMatches.length; index += 1) {
  const match = slugMatches[index];
  const slug = match[1];
  const recordStart = articleSource.lastIndexOf("  {", match.index);
  const recordEnd = index + 1 < slugMatches.length ? slugMatches[index + 1].index : articleSource.length;
  const record = articleSource.slice(recordStart, recordEnd);

  if (articleSlugs.has(slug)) errors.push(`Duplicate insight slug: ${slug}`);
  articleSlugs.add(slug);
  ["title", "excerpt", "category", "body", "thumbnail_url", "created_at"].forEach((field) => {
    if (!hasField(record, field)) errors.push(`Insight ${slug} is missing ${field}`);
  });
  locales.forEach((locale) => {
    ["title", "excerpt", "category"].forEach((field) => {
      if (!hasField(record, `${field}_${locale}`)) errors.push(`Insight ${slug} is missing ${field}_${locale}`);
    });
    const translatedBody = new RegExp(`editorialBodies${locale[0].toUpperCase()}${locale.slice(1)}: Record<string, string>[\\s\\S]*?${slug}`).test(source)
      || hasField(record, `body_${locale}`);
    if (!translatedBody) errors.push(`Insight ${slug} is missing body_${locale}`);
  });
}

const caseSlugs = new Set();
for (const project of projectCases) {
  if (!project.slug) errors.push("A case study is missing a slug");
  if (caseSlugs.has(project.slug)) errors.push(`Duplicate case-study slug: ${project.slug}`);
  caseSlugs.add(project.slug);
  ["title", "content", "category"].forEach((field) => {
    if (!project[field]) errors.push(`Case study ${project.slug} is missing ${field}`);
  });
}

if (errors.length) {
  errors.forEach((error) => console.error(`Error: ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Content check passed: ${articleSlugs.size} insights and ${caseSlugs.size} case studies are publication-ready.`);
}
