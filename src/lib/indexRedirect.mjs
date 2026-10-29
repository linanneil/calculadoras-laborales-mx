/**
 * Normaliza `base` de Astro a una ruta con barra final.
 * `/` se conserva; un base vacío también se trata como la raíz.
 * @param {string} base
 * @returns {string}
 */
export function normalizeBase(base) {
  if (!base || base === "/") return "/";
  const withSlash = base.endsWith("/") ? base : `${base}/`;
  return withSlash.startsWith("/") ? withSlash : `/${withSlash}`;
}

/**
 * Ruta canónica si la petición abrió la portada como archivo `index.html`.
 * Devuelve `null` para `/` y para cualquier `index.html` anidado, para no
 * crear otra redirección encima de las barras finales que GitHub Pages ya resuelve.
 * @param {string} pathname
 * @param {string} [base]
 * @returns {string | null}
 */
export function canonicalHomePath(pathname, base = "/") {
  const normalized = normalizeBase(base);
  if (pathname !== `${normalized}index.html`) return null;
  return normalized;
}

/**
 * Script en línea que envía `/index.html` a `/` antes de pintar la portada.
 * GitHub Pages sirve ambas URLs con el mismo archivo, así que la
 * canonicalización permanente de ese duplicado ocurre en el navegador
 * y no altera la respuesta de `/`.
 * @param {string} [base]
 * @returns {string}
 */
export function indexHtmlRedirectScript(base = "/") {
  const normalized = normalizeBase(base);
  const indexPath = `${normalized}index.html`;
  return `(function(){var indexPath=${JSON.stringify(indexPath)};var target=${JSON.stringify(normalized)};if(location.pathname!==indexPath)return;location.replace(target+location.search+location.hash);})();`;
}
