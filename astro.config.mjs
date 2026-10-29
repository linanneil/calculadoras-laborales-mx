// @ts-check
import { defineConfig } from 'astro/config';
import { canonicalHomePath } from './src/lib/indexRedirect.mjs';

/**
 * Responde 301 en `astro dev` y `astro preview` cuando la ruta es `/index.html`.
 * El sitio publicado en GitHub Pages no puede variar el estado HTTP de ese
 * archivo respecto de `/`; allí el script de la portada hace el mismo salto.
 * @returns {import('vite').Plugin}
 */
function redirectIndexHtml() {
  /** @type {import('connect').NextHandleFunction} */
  const handler = (req, res, next) => {
    const raw = req.url ?? "/";
    const queryAt = raw.indexOf("?");
    const path = queryAt === -1 ? raw : raw.slice(0, queryAt);
    const search = queryAt === -1 ? "" : raw.slice(queryAt);
    const target = canonicalHomePath(path, process.env.BASE_PATH || "/");
    if (!target) {
      next();
      return;
    }
    res.statusCode = 301;
    res.setHeader("Location", `${target}${search}`);
    res.end();
  };

  return {
    name: "redirect-index-html",
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://herramientaslaborales.com',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [redirectIndexHtml()],
  },
});
