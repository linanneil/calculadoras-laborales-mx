import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? "https://herramientaslaborales.com";
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const allowPath = base ? `${base}/` : "/";
  return new Response(`User-agent: *\nAllow: ${allowPath}\n\nSitemap: ${new URL(`${base}/sitemap.xml`, origin).toString()}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
