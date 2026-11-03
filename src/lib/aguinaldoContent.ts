import type { PageFaq, PageSection } from "./pages";
import { pagePath } from "./site";

/**
 * Convierte HTML editorial a texto plano para consumidores que no renderizan `html`.
 * @param html Fragmento HTML estático de la página.
 * @returns Texto sin etiquetas, con espacios colapsados.
 */
function htmlToPlain(html: string): string {
  return html
    .replace(/<li>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Arma una sección con HTML visible y el mismo texto en `body`.
 * @param title Encabezado h2 de la sección.
 * @param html Cuerpo HTML estático.
 * @returns Sección lista para la plantilla.
 */
function section(title: string, html: string): PageSection {
  return { title, body: htmlToPlain(html), html };
}

export const AGUINALDO_DESCRIPTION =
  "Calcula tu aguinaldo 2026: mínimo de 15 días (art. 87 LFT), parte proporcional, ejemplos y parte exenta de ISR (30 UMA = $3,519.30).";

export const AGUINALDO_QUICK_ANSWER =
  "En México, el aguinaldo mínimo equivale a 15 días de salario y debe pagarse antes del 20 de diciembre (a más tardar el 19), según el artículo 87 de la Ley Federal del Trabajo (LFT). Si no trabajaste el año completo, te corresponde la parte proporcional: salario diario × días de aguinaldo × días trabajados ÷ 365. En Calculadoras Laborales MX la calculadora estima ese monto bruto con 15 días, a partir del salario diario y las fechas, y puedes contrastarlo con la parte exenta de ISR (hasta 30 UMA = $3,519.30 en 2026).";

export const AGUINALDO_QUICK_ANSWER_HTML = `<p>En México, el aguinaldo mínimo equivale a <strong>15 días de salario</strong> y debe pagarse <strong>antes del 20 de diciembre</strong> (a más tardar el 19), según el artículo 87 de la Ley Federal del Trabajo (LFT). Si no trabajaste el año completo, te corresponde la parte proporcional: salario diario × días de aguinaldo × días trabajados ÷ 365. En <strong>Calculadoras Laborales MX</strong> la calculadora estima ese monto bruto con 15 días, a partir del salario diario y las fechas, y puedes contrastarlo con la parte <strong>exenta de ISR</strong> (hasta <strong>30 UMA = $3,519.30 en 2026</strong>).</p>`;

export const AGUINALDO_DISCLAIMER =
  "Estimación informativa de Calculadoras Laborales MX. Hechos fiscales y laborales de esta página re-verificados el 3 de noviembre de 2026. No sustituye asesoría legal, fiscal o contable.";

const daysGuide = pagePath("aguinaldo-por-dias-trabajados");
const finiquito = pagePath("calculadora-finiquito");
const sdi = pagePath("calculadora-sueldo-diario-integrado");
const resignation = pagePath("aguinaldo-si-renuncio-antes-de-diciembre");

/**
 * Secciones de la calculadora de aguinaldo.
 * Los 5 pasos, las fórmulas y los ejemplos de ISR describen el widget real:
 * salario diario, fecha de ingreso, fecha de salida, 15 días fijos y resultado bruto.
 * @returns Secciones en el orden editorial aprobado.
 */
export function aguinaldoSections(): PageSection[] {
  return [
    section(
      "Cómo usar la calculadora de aguinaldo (paso a paso)",
      `<p>La calculadora de esta página estima el aguinaldo bruto con el mínimo legal de 15 días. Usa importes brutos y fechas reales. El resultado no descuenta ISR: la comparación con la exención está en los ejemplos de abajo.</p>
<ol class="steps">
  <li><strong>Captura tu salario diario bruto</strong> en el campo «Salario diario bruto».
    <ul>
      <li>Si te pagan por mes: sueldo mensual ÷ 30 (art. 89 LFT).</li>
      <li>Si te pagan por semana: sueldo semanal ÷ 7.</li>
      <li>Ejemplo: $15,000 mensuales → $15,000 ÷ 30 = <strong>$500 diarios</strong>.</li>
    </ul>
  </li>
  <li><strong>La herramienta aplica 15 días de aguinaldo.</strong> No incluye un campo para capturar 20, 30 u otro número, y esta pantalla no tiene un campo para días de aguinaldo distintos de 15. Si tu contrato o contrato colectivo da más de 15, toma el resultado y multiplícalo por (días de tu empresa ÷ 15). Nunca estimes con menos de 15.</li>
  <li><strong>Indica la fecha de ingreso y la fecha de salida o cálculo.</strong> Escribe «Fecha de ingreso» y «Fecha de salida o cálculo». El importe usa los días inclusivos del año calendario de la fecha de salida: desde el 1 de enero de ese año, o desde tu ingreso si fue después, hasta esa fecha. <strong>2026 no es bisiesto</strong>, así que el divisor es <strong>365</strong>. En año bisiesto la calculadora usa 366. La leyenda «días considerados» cuenta el lapso inclusivo entre las dos fechas, aunque abarque años anteriores; el monto de «Aguinaldo proporcional» solo usa el tramo de ese año.</li>
  <li><strong>Pulsa «Calcular estimación»</strong> y revisa el desglose bruto. Sustituye el salario y las fechas de ejemplo. El formulario solo pide esos datos. Verás el total y la partida «Aguinaldo proporcional».</li>
  <li><strong>Compara el bruto con la exención de ISR</strong> (abajo). Hasta 30 UMA puede quedar exento; el excedente se trata como salario gravable en nómina. La calculadora no muestra el impuesto.</li>
</ol>
<blockquote>
  <p><strong>Fórmula de la calculadora:</strong> Aguinaldo = salario diario × 15 × (días del año de la fecha de salida ÷ días de ese año).</p>
  <p><strong>Año completo:</strong> Aguinaldo = salario diario × 15.</p>
  <p>La fórmula legal, si la empresa otorga más días, es salario diario × días de aguinaldo × (días trabajados ÷ 365). Esta pantalla fija los días de aguinaldo en 15.</p>
</blockquote>
<p>Para más casos de días parciales, consulta también <a href="${daysGuide}">aguinaldo por días trabajados</a>.</p>`,
    ),
    section(
      "¿Qué dice la ley sobre el aguinaldo?",
      `<p>El artículo 87 de la LFT establece:</p>
<ol>
  <li><strong>Monto mínimo:</strong> las personas trabajadoras tienen derecho a un aguinaldo anual «equivalente a quince días de salario, por lo menos».</li>
  <li><strong>Pago proporcional:</strong> quienes no cumplieron el año de servicios, «independientemente de que se encuentren laborando o no en la fecha de liquidación del aguinaldo», tienen derecho a la parte proporcional según el tiempo trabajado.</li>
</ol>
<p>La fecha límite de pago es <strong>antes del 20 de diciembre</strong>. Si renuncias o te despiden antes, el aguinaldo proporcional debe incluirse en tu <a href="${finiquito}">finiquito</a>.</p>
<p>Esta página aplica a trabajadores del <strong>apartado A</strong> (sector privado). Los trabajadores al servicio del Estado se rigen por otra ley.</p>`,
    ),
    section(
      "Ejemplo 1: año completo + ISR (Calculadoras Laborales MX)",
      `<ul>
  <li>Sueldo mensual: $15,000 → salario diario: <strong>$500</strong></li>
  <li>Días de aguinaldo que aplica la calculadora: <strong>15</strong></li>
  <li>Periodo: año completo 2026</li>
</ul>
<p><strong>Cálculo bruto:</strong> $500 × 15 = <strong>$7,500.00</strong></p>
<p>En la calculadora captura salario diario bruto <strong>500</strong>, fecha de ingreso <strong>2026-01-01</strong> y fecha de salida <strong>2026-12-31</strong>. Pulsa «Calcular estimación». El total y la partida «Aguinaldo proporcional» deben mostrar <strong>$7,500.00</strong> (365 días considerados).</p>
<p><strong>ISR (estimación educativa, no es una línea del resultado):</strong></p>
<div class="table-wrap">
<table>
  <thead>
    <tr><th scope="col">Concepto</th><th scope="col">Monto</th></tr>
  </thead>
  <tbody>
    <tr><td>Aguinaldo bruto</td><td>$7,500.00</td></tr>
    <tr><td>Exento (30 UMA 2026)</td><td>$3,519.30</td></tr>
    <tr><td>Gravable</td><td>$3,980.70</td></tr>
  </tbody>
</table>
</div>
<p>El impuesto exacto sobre la parte gravable depende de tu tarifa y de cómo tu nómina acumule el ingreso; revisa tu CFDI. Calculadoras Laborales MX muestra la base bruta; no sustituye el cálculo fiscal de tu patrón o contador.</p>`,
    ),
    section(
      "Ejemplo 2: proporcional con salario mínimo + ISR",
      `<ul>
  <li>Salario mínimo general 2026: <strong>$315.04 diarios</strong> (resolución CONASAMI / DOF). Zona Libre de la Frontera Norte: $440.87. La calculadora no tiene un selector de zona: captura el salario diario que te corresponda.</li>
  <li>Días de aguinaldo: 15, fijos en la herramienta</li>
  <li>Periodo: 1 de enero al 31 de julio de 2026 → <strong>212</strong> días inclusivos</li>
</ul>
<p><strong>Cálculo:</strong></p>
<ol>
  <li>$315.04 × 15 = $4,725.60 (año completo)</li>
  <li>212 ÷ 365 ≈ 0.5808219</li>
  <li>$4,725.60 × 0.5808219 ≈ <strong>$2,744.73 brutos</strong></li>
</ol>
<p>En la calculadora: salario diario bruto <strong>315.04</strong>, ingreso <strong>2026-01-01</strong>, salida <strong>2026-07-31</strong>. El bruto debe acercarse a <strong>$2,744.73</strong>.</p>
<p>Como $2,744.73 &lt; $3,519.30, <strong>toda la gratificación cabe en la exención de 30 UMA</strong> en este ejemplo (si se otorga en forma general conforme al art. 93, fr. XIV, LISR). El neto en recibo aún puede verse afectado por otros conceptos de la nómina. Esa comparación no aparece en el desglose de la calculadora.</p>`,
    ),
    section(
      "Ejemplo 3: cómo leer la proporción en la calculadora",
      `<p>Supón salario diario $400, 15 días de aguinaldo y 90 días trabajados en 2026:</p>
<ol>
  <li>Año completo: $400 × 15 = $6,000</li>
  <li>Proporción: 90 ÷ 365 ≈ 0.246575</li>
  <li>Resultado: $6,000 × 0.246575 ≈ <strong>$1,479.45 brutos</strong></li>
  <li>ISR: $1,479.45 &lt; $3,519.30 → en este escenario base el bruto suele quedar dentro de la exención. La pantalla no calcula ese impuesto.</li>
</ol>
<p>En la calculadora captura salario diario bruto <strong>400</strong>, fecha de ingreso <strong>2026-01-01</strong> y fecha de salida <strong>2026-03-31</strong> (90 días inclusivos: enero, febrero y marzo de 2026). No hay un campo para escribir «15» ni «90»: la herramienta ya multiplica por 15 y cuenta los días de las fechas. El desglose debe acercarse a <strong>$1,479.45</strong>.</p>`,
    ),
    section(
      "¿Qué salario se usa?",
      `<p>Se usa el <strong>salario diario</strong> (cuota diaria) del campo «Salario diario bruto», no el <a href="${sdi}">salario diario integrado</a> (SDI). El SDI se usa para otras bases (por ejemplo IMSS o ciertas indemnizaciones).</p>
<p>Si tu salario es variable (comisiones, destajo), el art. 89 LFT apunta al promedio de lo percibido en los 30 días efectivamente trabajados antes de que nazca el derecho. Usa importes brutos. La calculadora no promedia variables: captura tú ese promedio en el salario diario.</p>`,
    ),
    section(
      "¿Qué cuenta como día trabajado?",
      `<p>La calculadora no resta incapacidades, permisos sin goce ni faltas. Cuenta días de calendario entre las fechas y, para el importe, solo los del año de la fecha de salida.</p>
<p>En la práctica de la relación laboral suele contarse el tiempo dentro del año:</p>
<ul>
  <li><strong>Vacaciones y días de descanso</strong> normalmente se cuentan.</li>
  <li><strong>Incapacidades, permisos sin goce y faltas</strong> pueden tratarse distinto según el caso; pide a la empresa el desglose y conserva tus CFDI.</li>
</ul>`,
    ),
    section(
      "¿Cuánto aguinaldo está exento de ISR en 2026?",
      `<p>El aguinaldo o gratificación general está <strong>exento de ISR hasta el equivalente de 30 días de UMA</strong>:</p>
<ul>
  <li>UMA diaria 2026: <strong>$117.31</strong> (INEGI, DOF 09-01-2026; vigente desde el <strong>1 de febrero de 2026</strong>)</li>
  <li><strong>30 × $117.31 = $3,519.30</strong></li>
</ul>
<p>Fundamento: art. 93, fracción XIV, LISR («salario mínimo general … elevado a 30 días»), leído vía el decreto de desindexación del salario mínimo (DOF 27-01-2016, art. tercero transitorio) como referencia a la <strong>UMA</strong>, práctica que aplica el SAT.</p>
<p>La exención aplica a gratificaciones otorgadas <strong>en forma general</strong>; el excedente se grava como salario. El neto final depende de tu nómina. La calculadora se detiene en el bruto.</p>`,
    ),
    section(
      "¿Qué hacer si no me pagan el aguinaldo?",
      `<ol>
  <li>Compara tu recibo con el resultado de Calculadoras Laborales MX.</li>
  <li>Pide por escrito el desglose.</li>
  <li>Si no hay pago antes del 20 de diciembre, oriéntate con la PROFEDET (competencia federal) o la autoridad laboral de tu estado; la LFT prevé conciliación previa.</li>
</ol>
<p>No firmes recibos por montos que no recibiste (art. 33 LFT).</p>`,
    ),
  ];
}

export const aguinaldoFormulaCards = [
  {
    label: "Lo que calcula esta página",
    formula: "salario diario × 15 × días del año de la fecha de salida ÷ días de ese año",
    note: "15 días fijos. No hay campo para otra prestación. Los días salen de las fechas: del 1 de enero (o del ingreso, si es posterior) a la fecha de salida, inclusive. En 2026 el divisor es 365; en bisiesto, 366.",
  },
  {
    label: "Año completo",
    formula: "salario diario × 15",
    note: "Ocurre cuando las fechas cubren del 1 de enero al 31 de diciembre del mismo año. En 2026 ese resultado es el salario diario por 15.",
  },
];

export const aguinaldoFaqs: PageFaq[] = [
  {
    question: "¿Cómo se calcula el aguinaldo proporcional con la calculadora?",
    answer:
      "Captura el salario diario bruto y las fechas de ingreso y de salida. La herramienta aplica salario diario × 15 × (días del año de la fecha de salida ÷ 365) en 2026. No pide los días de aguinaldo: usa 15. Luego compara el bruto con los $3,519.30 de exención de ISR (30 UMA).",
  },
  {
    question: "¿Me toca aguinaldo si renuncio antes de diciembre?",
    answer:
      "Sí, la parte proporcional (art. 87 LFT), y debe incluirse en tu finiquito. Más detalle en la guía Aguinaldo si renuncio antes de diciembre.",
    answerHtml: `Sí, la parte proporcional (art. 87 LFT), y debe incluirse en tu finiquito. Más detalle en <a href="${resignation}">aguinaldo si renuncio antes de diciembre</a>.`,
  },
  {
    question: "¿Cuánto aguinaldo está libre de ISR en 2026?",
    answer:
      "Hasta 30 UMA = $3,519.30 cuando la gratificación se otorga en forma general (art. 93, fr. XIV, LISR, con la UMA de INEGI para 2026: $117.31 diarios). El excedente se grava; el impuesto exacto lo determina tu nómina. Esta calculadora no calcula el ISR.",
  },
  {
    question: "¿Me pueden pagar menos de 15 días?",
    answer:
      "No. Quince días es el mínimo legal. Las condiciones no pueden ser inferiores a la LFT (arts. 5 y 56). La calculadora usa ese mínimo y no permite capturar una cifra menor.",
  },
  {
    question: "¿Esta calculadora sustituye una asesoría legal o fiscal?",
    answer:
      "No. Es una estimación informativa de Calculadoras Laborales MX con la prestación mínima de 15 días y un resultado bruto. Tu caso puede cambiar por contrato, prestaciones superiores o impuestos.",
  },
];

export const aguinaldoSources = [
  {
    label: "Ley Federal del Trabajo, texto vigente, arts. 5, 33, 56, 87 y 89",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
  },
  {
    label: "Ley del ISR, art. 93, fracción XIV (SAT)",
    url: "https://wwwmat.sat.gob.mx/articulo/15199/articulo-93",
  },
  {
    label: "Decreto de desindexación del salario mínimo, DOF 27-01-2016",
    url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5423663&fecha=27/01/2016",
  },
  {
    label: "Resolución CONASAMI salarios mínimos 2026 (DOF)",
    url: "https://dof.gob.mx/nota_detalle_popup.php?codigo=5775534",
  },
  {
    label: "INEGI, UMA 2026 (DOF 09-01-2026): diario $117.31",
    url: "https://dof.gob.mx/nota_detalle.php?codigo=5778072&fecha=09/01/2026",
  },
  {
    label: "PROFEDET: renuncia y despido",
    url: "https://www.profedet.gob.mx/profedet/prensa/asesoria_despido.html",
  },
];
