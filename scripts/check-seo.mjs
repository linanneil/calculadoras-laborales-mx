import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const distDir = new URL("../dist/", import.meta.url).pathname;
const htmlFiles = walk(distDir).filter((file) => file.endsWith(".html"));
const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const rel = relative(distDir, file);
  check(rel, count(html, /<title>[^<]+<\/title>/g) === 1, "missing or duplicate title");
  check(rel, count(html, /<meta name="description" content="[^"]+"/g) === 1, "missing or duplicate meta description");
  check(rel, count(html, /<link rel="canonical" href="https:\/\/herramientaslaborales\.com\/[^"]*"/g) === 1, "missing or invalid canonical");
  check(rel, count(html, /type="application\/ld\+json"/g) >= 2, "missing base JSON-LD");
  check(rel, !html.includes("https://example.com"), "contains example.com");
  check(rel, !html.includes("linanneil.github.io"), "contains old GitHub Pages domain");
}

const sitemap = readFileSync(join(distDir, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
check("sitemap.xml", locs.length === new Set(locs).size, "duplicate sitemap URLs");
check("sitemap.xml", locs.length === htmlFiles.length, `sitemap URL count ${locs.length} does not match HTML page count ${htmlFiles.length}`);
check("sitemap.xml", locs.every((loc) => loc.endsWith("/")), "sitemap URLs should use final trailing-slash URLs");
check("sitemap.xml", count(sitemap, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) === locs.length, "missing lastmod entries");

const robots = readFileSync(join(distDir, "robots.txt"), "utf8");
check("robots.txt", robots.includes("Sitemap: https://herramientaslaborales.com/sitemap.xml"), "missing sitemap reference");

if (failures.length > 0) {
  console.error(failures.map((failure) => `${failure.file}: ${failure.message}`).join("\n"));
  process.exit(1);
}

console.log(`SEO check passed for ${htmlFiles.length} HTML pages and ${locs.length} sitemap URLs.`);

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : path;
  });
}

function count(input, pattern) {
  return [...input.matchAll(pattern)].length;
}

function check(file, condition, message) {
  if (!condition) failures.push({ file, message });
}
