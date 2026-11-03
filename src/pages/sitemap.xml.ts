import type { APIRoute } from "astro";
import { pages } from "../lib/pages";
import { updatedIsoDate } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? "https://herramientaslaborales.com";
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const entries = [
    { slug: "", lastmod: updatedIsoDate },
    { slug: "guias", lastmod: updatedIsoDate },
    ...pages.map((page) => ({ slug: page.slug, lastmod: page.updatedIso ?? updatedIsoDate })),
  ];
  const urls = entries
    .map(
      ({ slug, lastmod }) => `  <url>
    <loc>${new URL(slug ? `${base}/${slug}/` : `${base}/`, origin).toString()}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${slug ? "0.8" : "1.0"}</priority>
  </url>`,
    )
    .join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
