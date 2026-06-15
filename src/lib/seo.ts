import { SITE, updatedIsoDate } from "./site";
import type { SitePage } from "./pages";

export type JsonLd = Record<string, unknown>;

type SchemaInput = {
  title: string;
  description: string;
  canonical: string;
  slug: string;
  page?: SitePage;
};

export function buildStructuredData({ title, description, canonical, slug, page }: SchemaInput): JsonLd[] {
  const homeUrl = new URL("/", SITE.url).toString();
  const schemas: JsonLd[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: homeUrl,
      inLanguage: SITE.locale,
      description: SITE.description,
      publisher: publisherSchema(),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems(title, canonical, slug),
    },
  ];

  if (page?.kind === "tool") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: page.h1,
      url: canonical,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      inLanguage: SITE.locale,
      isAccessibleForFree: true,
      description,
      publisher: publisherSchema(),
      dateModified: updatedIsoDate,
    });
  }

  if (page?.kind === "article") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      description,
      url: canonical,
      mainEntityOfPage: canonical,
      inLanguage: SITE.locale,
      author: publisherSchema(),
      publisher: publisherSchema(),
      datePublished: updatedIsoDate,
      dateModified: updatedIsoDate,
    });
  }

  return schemas;
}

function publisherSchema(): JsonLd {
  return {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  };
}

function breadcrumbItems(title: string, canonical: string, slug: string): JsonLd[] {
  const items: JsonLd[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: new URL("/", SITE.url).toString(),
    },
  ];

  if (slug) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: title.replace(/\s+\|\s+Calculadoras Laborales MX$/, ""),
      item: canonical,
    });
  }

  return items;
}
