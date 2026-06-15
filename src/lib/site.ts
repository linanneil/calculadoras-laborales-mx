export const SITE = {
  name: "Calculadoras Laborales MX",
  description:
    "Herramientas gratuitas para estimar finiquito, liquidacion, aguinaldo, vacaciones y salario diario integrado en Mexico.",
  url: import.meta.env.SITE || "https://herramientaslaborales.com",
  locale: "es-MX",
  author: "Calculadoras Laborales MX",
};

export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string): string {
  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!BASE_PATH) return normalized;
  return normalized === "/" ? `${BASE_PATH}/` : `${BASE_PATH}${normalized}`;
}

export const formatMxn = (value: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

export const updatedDate = "15 de junio de 2026";
