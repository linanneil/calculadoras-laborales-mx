import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const distDir = new URL("../dist/", import.meta.url).pathname;
const htmlFiles = walk(distDir).filter((file) => file.endsWith(".html"));
const failures = [];
const unaccented = /(?<![\p{L}\p{N}_-])(Mexico|liquidacion|Liquidacion|calculo|calculos|dias|ano|anos|informacion|antiguedad|indemnizacion|nomina|pagina|guia|guias)(?![\p{L}\p{N}_-])/gu;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const rel = relative(distDir, file);
  check(rel, count(html, /<title>[^<]+<\/title>/g) === 1, "missing or duplicate title");
  check(rel, count(html, /<meta name="description" content="[^"]+"/g) === 1, "missing or duplicate meta description");
  check(rel, count(html, /<link rel="canonical" href="https:\/\/herramientaslaborales\.com\/[^"]*"/g) === 1, "missing or invalid canonical");
  check(rel, count(html, /type="application\/ld\+json"/g) >= 2, "missing base JSON-LD");
  check(rel, !html.includes("https://example.com"), "contains example.com");
  check(rel, !html.includes("linanneil.github.io"), "contains old GitHub Pages domain");
  check(rel, !html.includes('href="/index.html"') && !html.includes("href='/index.html'"), "links to /index.html");

  for (const match of html.matchAll(/href="([^"]*calculadora-[^"]*)"/g)) {
    const path = match[1].split(/[?#]/)[0];
    check(rel, path.endsWith("/"), `calculator link missing trailing slash: ${match[1]}`);
  }

  const text = visibleText(html);
  const broken = text.match(unaccented);
  check(rel, !broken, `missing Spanish accents: ${(broken ?? []).slice(0, 8).join(", ")}`);
}

const home = readFileSync(join(distDir, "index.html"), "utf8");
check("index.html", /<h1[^>]*>Calcula pagos laborales en minutos<\/h1>/.test(home), "homepage h1 missing");
check("index.html", home.includes("<title>Calculadoras Laborales MX | Calculadoras laborales para México</title>"), "homepage title suffix changed");
check("index.html", home.includes('property="og:site_name" content="Calculadoras Laborales MX"'), "og:site_name changed");
check("index.html", home.includes('"/index.html"') && home.includes("location.replace(target+location.search+location.hash)"), "missing /index.html canonical script");
check("index.html", home.includes('<link rel="canonical" href="https://herramientaslaborales.com/"'), "homepage canonical is not /");

const about = readFileSync(join(distDir, "about/index.html"), "utf8");
check("about/index.html", about.includes("<title>Acerca de Calculadoras Laborales MX | Calculadoras Laborales MX</title>"), "about title suffix changed");

const finiquito = visibleText(readFileSync(join(distDir, "calculadora-finiquito/index.html"), "utf8"));
const vacaciones = visibleText(readFileSync(join(distDir, "calculadora-vacaciones/index.html"), "utf8"));
for (const word of ["México", "días", "liquidación", "cálculo"]) {
  check("calculadora-finiquito/index.html", finiquito.includes(word), `finiquito missing ${word}`);
}
for (const word of ["México", "días", "año"]) {
  check("calculadora-vacaciones/index.html", vacaciones.includes(word), `vacaciones missing ${word}`);
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

/**
 * Texto visible y JSON-LD, sin href ni el id interno de cada calculadora.
 * @param {string} html
 * @returns {string}
 */
function visibleText(html) {
  return html
    .replace(/<script(?![^>]*application\/ld\+json)[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/\s(?:href|src|data-tool)="[^"]*"/gi, " ")
    .replace(/https?:\/\/[^\s"<]+/g, " ");
}
