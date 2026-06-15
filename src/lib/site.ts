export const SITE = {
  name: "Calculadoras Laborales MX",
  description:
    "Herramientas gratuitas para estimar finiquito, liquidacion, aguinaldo, vacaciones y salario diario integrado en Mexico.",
  url: "https://example.com",
  locale: "es-MX",
  author: "Calculadoras Laborales MX",
};

export const formatMxn = (value: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

export const updatedDate = "15 de junio de 2026";
