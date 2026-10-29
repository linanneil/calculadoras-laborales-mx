import { describe, expect, it } from "vitest";
import { canonicalHomePath, indexHtmlRedirectScript } from "../src/lib/indexRedirect.mjs";
import { getPageBySlug } from "../src/lib/pages";

describe("homepage index.html canonicalization", () => {
  it("maps only the root index.html file to /", () => {
    expect(canonicalHomePath("/index.html")).toBe("/");
    expect(canonicalHomePath("/index.html", "/")).toBe("/");
    expect(canonicalHomePath("/")).toBeNull();
    expect(canonicalHomePath("/calculadora-finiquito/")).toBeNull();
    expect(canonicalHomePath("/calculadora-finiquito/index.html")).toBeNull();
    expect(canonicalHomePath("/guias/index.html")).toBeNull();
    expect(canonicalHomePath("/index.html/")).toBeNull();
  });

  it("respects a project base path without redirecting nested pages", () => {
    expect(canonicalHomePath("/repo/index.html", "/repo/")).toBe("/repo/");
    expect(canonicalHomePath("/repo/", "/repo")).toBeNull();
    expect(canonicalHomePath("/repo/calculadora-aguinaldo/index.html", "/repo")).toBeNull();
  });

  it("emits a replace script that keeps query and hash", () => {
    const script = indexHtmlRedirectScript("/");
    expect(script).toContain('"/index.html"');
    expect(script).toContain('location.pathname!==indexPath');
    expect(script).toContain("location.replace(target+location.search+location.hash)");
    expect(indexHtmlRedirectScript("/repo")).toContain('"/repo/index.html"');
  });
});

describe("spanish public copy", () => {
  it("keeps calculator slugs and the about title suffix", () => {
    expect(getPageBySlug("calculadora-liquidacion")?.tool).toBe("liquidacion");
    expect(getPageBySlug("calculadora-vacaciones")?.slug).toBe("calculadora-vacaciones");
    expect(getPageBySlug("veinte-dias-por-ano-liquidacion")?.slug).toBe("veinte-dias-por-ano-liquidacion");
    expect(getPageBySlug("about")?.title).toBe("Acerca de Calculadoras Laborales MX | Calculadoras Laborales MX");
    expect(getPageBySlug("about")?.h1).toBe("Acerca de Calculadoras Laborales MX");
  });

  it("restores accents on finiquito and vacaciones copy", () => {
    const finiquito = getPageBySlug("calculadora-finiquito");
    const vacaciones = getPageBySlug("calculadora-vacaciones");
    expect(finiquito?.quickAnswer).toContain("México");
    expect(finiquito?.quickAnswer).toContain("días");
    expect(finiquito?.description).not.toMatch(/(?<![\p{L}\p{N}_-])Mexico(?![\p{L}\p{N}_-])/u);
    expect(vacaciones?.title).toMatch(/México/);
    expect(vacaciones?.description).toMatch(/México/);
    expect(vacaciones?.description).toMatch(/días/);
    expect(vacaciones?.intro).toMatch(/mínima/);
    expect(vacaciones?.sections.map((section) => section.body).join(" ")).toMatch(/año/);
    expect(JSON.stringify(vacaciones)).not.toMatch(/(?<![\p{L}\p{N}_-])ano(?![\p{L}\p{N}_-])/u);
    expect(JSON.stringify(finiquito)).toContain("liquidación");
    expect(getPageBySlug("renuncia-sin-preaviso-finiquito")?.h1).toBe("Renuncia sin preaviso: ¿afecta el finiquito?");
    expect(getPageBySlug("que-pasa-si-no-me-pagan-finiquito")?.h1).toBe("¿Qué pasa si no me pagan finiquito en México?");
    const unpaid = getPageBySlug("que-pasa-si-no-me-pagan-finiquito");
    expect(unpaid?.sections.some((section) => section.body.includes("indique"))).toBe(true);
    expect(JSON.stringify(unpaid)).not.toContain("indiqué");
  });
});
