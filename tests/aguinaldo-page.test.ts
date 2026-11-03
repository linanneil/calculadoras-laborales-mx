import { describe, expect, it } from "vitest";
import { calculateAguinaldo } from "../src/lib/labor";
import { getPageBySlug } from "../src/lib/pages";
import { buildStructuredData } from "../src/lib/seo";
import { formatMxn } from "../src/lib/site";

describe("aguinaldo page copy", () => {
  const page = getPageBySlug("calculadora-aguinaldo");
  const visible = [
    page?.intro,
    page?.quickAnswer,
    page?.quickAnswerHtml,
    page?.description,
    page?.disclaimer,
    ...(page?.sections.flatMap((section) => [section.title, section.html, section.body]) ?? []),
    ...(page?.faqs?.flatMap((faq) => [faq.question, faq.answer, faq.answerHtml]) ?? []),
    ...(page?.formulaCards?.flatMap((card) => [card.label, card.formula, card.note]) ?? []),
  ].join("\n");

  it("keeps the approved title, description and brand", () => {
    expect(page?.title).toBe("Calculadora de aguinaldo 2026 México: proporcional e ISR");
    expect(page?.description).toBe(
      "Calcula tu aguinaldo 2026: mínimo de 15 días (art. 87 LFT), parte proporcional, ejemplos y parte exenta de ISR (30 UMA = $3,519.30).",
    );
    expect(page?.h1).toBe("Calculadora de aguinaldo proporcional");
    expect(visible).toContain("Calculadoras Laborales MX");
  });

  it("describes the real widget fields and a fixed 15-day factor", () => {
    expect(visible).toContain("Salario diario bruto");
    expect(visible).toContain("Fecha de ingreso");
    expect(visible).toContain("Fecha de salida o cálculo");
    expect(visible).toContain("Calcular estimación");
    expect(visible).toContain("no tiene un campo para días de aguinaldo distintos de 15");
    expect(visible).not.toContain("salvo que captures una prestación mayor");
    const steps = page?.sections[0]?.html ?? "";
    for (const step of [
      "Captura tu salario diario bruto",
      "La herramienta aplica 15 días de aguinaldo",
      "Indica la fecha de ingreso y la fecha de salida o cálculo",
      "Pulsa «Calcular estimación»",
      "Compara el bruto con la exención de ISR",
    ]) {
      expect(steps).toContain(step);
    }
  });

  it("keeps UMA figures and example totals aligned with the calculator", () => {
    const fullYear = calculateAguinaldo({
      dailySalary: 500,
      startDate: "2026-01-01",
      endDate: "2026-12-31",
    });
    const minimumWage = calculateAguinaldo({
      dailySalary: 315.04,
      startDate: "2026-01-01",
      endDate: "2026-07-31",
    });
    const shortPeriod = calculateAguinaldo({
      dailySalary: 400,
      startDate: "2026-01-01",
      endDate: "2026-03-31",
    });

    expect(fullYear.total).toBeCloseTo(7500, 2);
    expect(minimumWage.total).toBeCloseTo(2744.73, 2);
    expect(shortPeriod.total).toBeCloseTo(1479.45, 2);
    expect(minimumWage.daysWorked).toBe(212);
    expect(shortPeriod.daysWorked).toBe(90);
    expect(formatMxn(fullYear.total)).toBe("$7,500.00");
    expect(formatMxn(minimumWage.total)).toBe("$2,744.73");
    expect(formatMxn(shortPeriod.total)).toBe("$1,479.45");
    expect(visible).toContain("$117.31");
    expect(visible).toContain("$3,519.30");
    expect(visible).toContain("$3,980.70");
    expect(visible).toContain("$7,500.00");
    expect(visible).toContain("$2,744.73");
    expect(visible).toContain("$1,479.45");
  });

  it("publishes five FAQs, official sources and the 3 Nov 2026 review", () => {
    expect(page?.faqs).toHaveLength(5);
    expect(page?.sources?.map((source) => source.url)).toEqual(
      expect.arrayContaining([
        "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
        "https://dof.gob.mx/nota_detalle.php?codigo=5778072&fecha=09/01/2026",
      ]),
    );
    expect(page?.updatedIso).toBe("2026-11-03");
    expect(page?.disclaimer).toContain("3 de noviembre de 2026");
    expect(page?.faqs?.[1]?.answerHtml).toContain("/aguinaldo-si-renuncio-antes-de-diciembre/");
    const schemas = buildStructuredData({
      title: page?.title ?? "",
      description: page?.description ?? "",
      canonical: "https://herramientaslaborales.com/calculadora-aguinaldo/",
      slug: "calculadora-aguinaldo",
      page,
    });
    expect(schemas.find((schema) => schema["@type"] === "WebApplication")?.dateModified).toBe("2026-11-03");
  });
});
