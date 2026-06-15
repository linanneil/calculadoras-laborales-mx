export type PageKind = "tool" | "article" | "legal";
export type ToolKind = "finiquito" | "liquidacion" | "aguinaldo" | "vacaciones" | "sdi";

export type SitePage = {
  slug: string;
  kind: PageKind;
  tool?: ToolKind;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
  faqs?: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
};

const officialSources = [
  {
    label: "Ley Federal del Trabajo, Camara de Diputados",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
  },
  {
    label: "PROFEDET: renuncia y despido",
    url: "https://www.profedet.gob.mx/profedet/prensa/asesoria_despido.html",
  },
  {
    label: "CONASAMI: salarios minimos 2026",
    url: "https://www.gob.mx/conasami/articulos/incremento-a-los-salarios-minimos-para-2026?idiom=es",
  },
];

const commonFaq = [
  {
    question: "Este calculo sustituye a una asesoria legal?",
    answer:
      "No. Es una estimacion educativa con reglas generales de Mexico. Un caso real puede cambiar por contrato, prestaciones superiores, convenios, impuestos o una resolucion laboral.",
  },
  {
    question: "Los importes ya incluyen impuestos?",
    answer:
      "No necesariamente. La version inicial muestra importes brutos estimados. Revisa el tratamiento fiscal aplicable antes de tomar una decision.",
  },
];

export const pages: SitePage[] = [
  {
    slug: "calculadora-finiquito",
    kind: "tool",
    tool: "finiquito",
    title: "Calculadora de finiquito 2026 Mexico | Estimador gratis",
    description:
      "Calcula un finiquito estimado en Mexico con salario pendiente, aguinaldo proporcional, vacaciones y prima vacacional.",
    h1: "Calculadora de finiquito 2026",
    intro:
      "Estima el finiquito por renuncia o termino de relacion laboral en Mexico. Ingresa salario diario, fechas y dias pendientes para ver el desglose.",
    sections: [
      {
        title: "Que incluye el finiquito",
        body:
          "El finiquito suele incluir salarios pendientes, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. PROFEDET tambien menciona la prima de antiguedad cuando proceda, por ejemplo en renuncia con 15 anos o mas de servicio.",
      },
      {
        title: "Como usar la calculadora",
        body:
          "Usa tu salario diario bruto, la fecha de ingreso, la fecha de salida y los dias ya trabajados que aun no se pagaron. El resultado se muestra en pesos mexicanos.",
      },
      {
        title: "Limitaciones del estimador",
        body:
          "La herramienta no descuenta ISR, no calcula comisiones variables y asume prestaciones minimas. Si tienes vacaciones acumuladas de anos anteriores, bonos o prestaciones superiores, agrega esos conceptos por separado antes de aceptar un pago.",
      },
    ],
    faqs: commonFaq,
    sources: officialSources,
  },
  {
    slug: "calculadora-liquidacion",
    kind: "tool",
    tool: "liquidacion",
    title: "Calculadora de liquidacion 2026 Mexico | Despido e indemnizacion",
    description:
      "Estima liquidacion por despido en Mexico con indemnizacion constitucional, 20 dias por ano, prima de antiguedad y finiquito.",
    h1: "Calculadora de liquidacion por despido",
    intro:
      "Herramienta para estimar una liquidacion laboral en Mexico cuando existe despido. Incluye conceptos comunes de indemnizacion y finiquito.",
    sections: [
      {
        title: "Conceptos estimados",
        body:
          "En un despido, PROFEDET indica que la persona trabajadora puede solicitar reinstalacion o indemnizacion de tres meses, ademas de prestaciones adeudadas como vacaciones, prima vacacional y aguinaldo. Esta calculadora muestra un escenario estimado con indemnizacion.",
      },
      {
        title: "Prima de antiguedad",
        body:
          "La estimacion usa 12 dias por ano y aplica un tope de dos salarios minimos diarios para el salario base de antiguedad.",
      },
      {
        title: "Cuando pedir asesoria",
        body:
          "Si el patron argumenta una causa de rescision, si firmaste documentos bajo presion o si hay salarios caidos, convenio o juicio, no uses solo esta cifra. Toma el resultado como una base para revisar tu caso con PROFEDET o un especialista.",
      },
    ],
    faqs: commonFaq,
    sources: officialSources,
  },
  {
    slug: "calculadora-aguinaldo",
    kind: "tool",
    tool: "aguinaldo",
    title: "Calculadora de aguinaldo proporcional 2026 Mexico",
    description:
      "Calcula aguinaldo proporcional en Mexico con base en 15 dias minimos y dias trabajados durante el ano.",
    h1: "Calculadora de aguinaldo proporcional",
    intro:
      "Calcula un aguinaldo estimado con el minimo legal de 15 dias para trabajadores del sector privado en Mexico.",
    sections: [
      {
        title: "Formula general",
        body:
          "Aguinaldo proporcional = salario diario x 15 dias minimos x dias efectivamente trabajados en el ano / dias del ano. En ano bisiesto la calculadora usa 366 dias.",
      },
      {
        title: "Cuando se usa",
        body:
          "Sirve para estimar el aguinaldo al cierre del ano o cuando la relacion laboral termina antes de diciembre. El articulo 87 de la LFT reconoce pago proporcional para quien no cumplio el ano completo.",
      },
    ],
    faqs: commonFaq,
    sources: officialSources,
  },
  {
    slug: "calculadora-vacaciones",
    kind: "tool",
    tool: "vacaciones",
    title: "Calculadora de vacaciones proporcionales 2026 Mexico",
    description:
      "Estima vacaciones proporcionales y prima vacacional minima en Mexico con la tabla vigente de dias de vacaciones.",
    h1: "Calculadora de vacaciones proporcionales",
    intro:
      "Calcula vacaciones proporcionales y prima vacacional minima del 25% segun antiguedad.",
    sections: [
      {
        title: "Dias de vacaciones",
        body:
          "La tabla inicia con 12 dias el primer ano, sube dos dias por ano hasta el quinto y despues aumenta dos dias por cada cinco anos de servicio.",
      },
      {
        title: "Prima vacacional",
        body:
          "La prima vacacional minima se estima como 25% del importe de vacaciones.",
      },
      {
        title: "Que periodo estima",
        body:
          "La calculadora estima vacaciones proporcionales del ciclo de servicio actual. Si tienes dias devengados de ciclos anteriores que no se han pagado o disfrutado, revisalos por separado con tus recibos y contrato.",
      },
    ],
    faqs: commonFaq,
    sources: officialSources,
  },
  {
    slug: "calculadora-sueldo-diario-integrado",
    kind: "tool",
    tool: "sdi",
    title: "Calculadora de salario diario integrado 2026 Mexico",
    description:
      "Calcula salario diario integrado estimado con aguinaldo, vacaciones y prima vacacional minima en Mexico.",
    h1: "Calculadora de salario diario integrado",
    intro:
      "Obtén un SDI estimado a partir del salario diario y la antiguedad. Es util para revisar bases laborales y de seguridad social.",
    sections: [
      {
        title: "Factor de integracion",
        body:
          "El factor suma salario base, aguinaldo minimo proporcional diario y la parte diaria de vacaciones con prima vacacional minima. Es una aproximacion comun para prestaciones minimas.",
      },
      {
        title: "Uso practico",
        body:
          "El resultado es orientativo. Empresas y sistemas de nomina pueden usar prestaciones superiores, variables salariales o reglas de seguridad social adicionales.",
      },
    ],
    faqs: commonFaq,
    sources: officialSources,
  },
  article("finiquito-renuncia-voluntaria", "Finiquito por renuncia voluntaria en Mexico 2026", "Que revisar cuando renuncias voluntariamente: salario pendiente, aguinaldo, vacaciones y prima vacacional."),
  article("liquidacion-por-despido-injustificado", "Liquidacion por despido injustificado en Mexico", "Conceptos frecuentes en una separacion por despido y diferencias frente al finiquito."),
  article("calculadora-finiquito-cdmx", "Calculadora de finiquito CDMX 2026", "Guia para estimar finiquito en Ciudad de Mexico usando reglas laborales federales."),
  article("calculadora-finiquito-puebla", "Calculadora de finiquito Puebla 2026", "Como estimar finiquito en Puebla con salario diario, fechas y prestaciones proporcionales."),
  article("isr-finiquito-mexico", "ISR en finiquito: que considerar en Mexico", "Puntos basicos sobre impuestos en pagos laborales y por que esta herramienta muestra estimaciones brutas."),
  article("vacaciones-proporcionales-mexico", "Vacaciones proporcionales en Mexico 2026", "Tabla, formula y ejemplo para calcular vacaciones proporcionales y prima vacacional."),
  article("aguinaldo-proporcional-renuncia", "Aguinaldo proporcional por renuncia", "Como estimar aguinaldo cuando la relacion laboral termina antes de diciembre."),
  article("prima-vacacional-mexico", "Prima vacacional en Mexico: minimo y ejemplo", "Explicacion simple de la prima vacacional minima del 25% y como se calcula."),
  article("salario-diario-integrado-ejemplo", "Salario diario integrado: ejemplo 2026", "Ejemplo practico de factor de integracion con prestaciones minimas."),
  article("diferencia-finiquito-liquidacion", "Diferencia entre finiquito y liquidacion", "Comparacion clara entre pagos por termino normal, renuncia y despido."),
  legal("about", "Acerca de Calculadoras Laborales MX", "Conoce el objetivo del sitio y el alcance de nuestras herramientas."),
  legal("contact", "Contacto", "Forma de contacto para comentarios, correcciones y solicitudes editoriales."),
  legal("privacy-policy", "Politica de privacidad", "Informacion sobre privacidad, analitica y publicidad futura."),
  legal("terms", "Terminos de uso", "Condiciones generales para usar este sitio y sus herramientas."),
  legal("disclaimer", "Aviso legal", "Limitaciones importantes sobre calculos laborales, legales y fiscales."),
];

export const toolPages = pages.filter((page) => page.kind === "tool");
export const articlePages = pages.filter((page) => page.kind === "article");
export const legalPages = pages.filter((page) => page.kind === "legal");

function getArticleSections(slug: string): { title: string; body: string }[] {
  const sections: Record<string, { title: string; body: string }[]> = {
  "finiquito-renuncia-voluntaria": [
    {
      title: "Que te corresponde al renunciar",
      body:
        "En una renuncia voluntaria normalmente se revisan salarios pendientes, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. La prima de antiguedad puede proceder si tienes 15 anos o mas de servicio, segun la orientacion de PROFEDET.",
    },
    {
      title: "Documentos utiles",
      body:
        "Antes de firmar, ten a la mano contrato, recibos de nomina, fecha real de ingreso, fecha de salida, comprobantes de vacaciones tomadas y cualquier acuerdo de prestaciones superiores.",
    },
    {
      title: "Senales de alerta",
      body:
        "No firmes una renuncia fechada de forma incorrecta, un recibo en blanco o una carta que no entiendes. Si hay diferencia importante entre tu estimacion y la oferta, pide desglose por concepto.",
    },
  ],
  "liquidacion-por-despido-injustificado": [
    {
      title: "Finiquito no es lo mismo que liquidacion",
      body:
        "El finiquito cubre prestaciones adeudadas. La liquidacion por despido puede sumar indemnizacion constitucional, otros conceptos indemnizatorios y prima de antiguedad, dependiendo del caso.",
    },
    {
      title: "Conceptos que conviene separar",
      body:
        "Pide que el calculo distinga salarios pendientes, aguinaldo, vacaciones, prima vacacional, tres meses de salario, 20 dias por ano y prima de antiguedad. Separarlos ayuda a detectar omisiones.",
    },
    {
      title: "Cuando buscar apoyo",
      body:
        "Si la empresa alega una causa de despido, te pide firmar renuncia o no entrega desglose, conviene acudir a PROFEDET o al centro de conciliacion correspondiente antes de cerrar el caso.",
    },
  ],
  "calculadora-finiquito-cdmx": [
    {
      title: "La regla laboral es federal",
      body:
        "Para trabajadores del apartado A, la base principal es la Ley Federal del Trabajo. Vivir o trabajar en CDMX no cambia por si solo los dias minimos de aguinaldo, vacaciones o prima vacacional.",
    },
    {
      title: "Datos que debes capturar",
      body:
        "Usa salario diario bruto, fecha de ingreso, fecha de salida y dias de sueldo pendientes. Si tu sueldo mensual varia, calcula un promedio razonable o revisa tus recibos de nomina.",
    },
    {
      title: "Diferencias frecuentes",
      body:
        "Las diferencias mas comunes vienen de comisiones, bonos, vacaciones no registradas o prestaciones superiores. Esos conceptos deben revisarse con documentos de la relacion laboral.",
    },
  ],
  "calculadora-finiquito-puebla": [
    {
      title: "Uso para trabajadores en Puebla",
      body:
        "La estimacion usa reglas laborales federales aplicables en Mexico. Puebla puede importar para la oficina o autoridad local, pero los conceptos minimos se calculan con la LFT.",
    },
    {
      title: "Ejemplo de revision",
      body:
        "Si saliste el 15 de junio, captura esa fecha como salida y agrega solo los dias ya trabajados que aun no fueron pagados. La herramienta separa aguinaldo, vacaciones y prima vacacional.",
    },
    {
      title: "Antes de aceptar el pago",
      body:
        "Compara el monto ofrecido con el desglose. Si el patron incluye conceptos con nombres distintos, pide equivalencia clara antes de firmar finiquito o convenio.",
    },
  ],
  "isr-finiquito-mexico": [
    {
      title: "Por que mostramos importes brutos",
      body:
        "El tratamiento fiscal puede cambiar por concepto, monto, exenciones y forma de pago. Por eso el MVP muestra estimaciones brutas y no promete una retencion exacta de ISR.",
    },
    {
      title: "Que pedir en nomina",
      body:
        "Solicita un recibo o desglose que separe percepciones gravadas, exentas y retenciones. Ese documento es mas confiable que un total unico sin detalle.",
    },
    {
      title: "Uso recomendado",
      body:
        "Usa la calculadora para revisar si las prestaciones base estan completas. Despues valida impuestos con el recibo de nomina, contador o area de recursos humanos.",
    },
  ],
  "vacaciones-proporcionales-mexico": [
    {
      title: "Tabla vigente de vacaciones",
      body:
        "Desde la reforma de vacaciones dignas, el primer ano inicia con 12 dias. La tabla sube dos dias por ano hasta el quinto y despues aumenta dos dias por cada cinco anos.",
    },
    {
      title: "Formula proporcional",
      body:
        "Vacaciones proporcionales = dias de vacaciones que corresponden por antiguedad x dias del ciclo trabajado / 365. Luego se multiplica por salario diario.",
    },
    {
      title: "Prima vacacional",
      body:
        "La prima vacacional minima es 25% sobre el importe de vacaciones. Algunas empresas dan una prima mayor; si es tu caso, el pago real puede ser superior.",
    },
  ],
  "aguinaldo-proporcional-renuncia": [
    {
      title: "Derecho proporcional",
      body:
        "La LFT reconoce aguinaldo anual minimo de 15 dias y pago proporcional para quienes no completaron el ano de servicios. Esto aplica aunque la relacion termine antes de diciembre.",
    },
    {
      title: "Formula",
      body:
        "Aguinaldo proporcional = salario diario x 15 x dias trabajados en el ano / dias del ano. La calculadora toma como inicio el mayor entre tu fecha de ingreso y el 1 de enero.",
    },
    {
      title: "Errores comunes",
      body:
        "No uses meses completos si trabajaste solo parte del mes. Cuenta dias efectivamente trabajados en el ano y verifica si tu contrato ofrece mas de 15 dias.",
    },
  ],
  "prima-vacacional-mexico": [
    {
      title: "Minimo legal",
      body:
        "La prima vacacional minima es 25% sobre los salarios que correspondan por vacaciones. Es un concepto separado del pago de los dias de vacaciones.",
    },
    {
      title: "Ejemplo rapido",
      body:
        "Si tus vacaciones proporcionales equivalen a $4,000 MXN, la prima minima seria $1,000 MXN. Con prestaciones superiores, el porcentaje puede ser mayor.",
    },
    {
      title: "Donde aparece en el finiquito",
      body:
        "Normalmente debe aparecer junto a vacaciones proporcionales. Si el desglose solo muestra un total general, pide que separen vacaciones y prima vacacional.",
    },
  ],
  "salario-diario-integrado-ejemplo": [
    {
      title: "Que integra el SDI estimado",
      body:
        "Este sitio calcula un factor basico con salario diario, aguinaldo minimo, vacaciones y prima vacacional minima. No incluye variables, bonos ni prestaciones superiores.",
    },
    {
      title: "Ejemplo",
      body:
        "Con salario diario de $500 MXN y primer ano de antiguedad, el SDI estimado sera mayor que $500 porque suma la parte diaria de aguinaldo y vacaciones con prima.",
    },
    {
      title: "Uso responsable",
      body:
        "Toma el resultado como referencia para conversar con nomina. Para efectos de seguridad social o auditoria, revisa el calculo formal de la empresa.",
    },
  ],
  "diferencia-finiquito-liquidacion": [
    {
      title: "Finiquito",
      body:
        "El finiquito se enfoca en prestaciones ya generadas o proporcionales: salario pendiente, aguinaldo, vacaciones, prima vacacional y otros adeudos contractuales.",
    },
    {
      title: "Liquidacion",
      body:
        "La liquidacion aparece en escenarios como despido injustificado o separacion con indemnizacion. Puede incluir tres meses, 20 dias por ano, prima de antiguedad y finiquito.",
    },
    {
      title: "Como leer una propuesta",
      body:
        "Si una empresa llama liquidacion a todo el pago, pide desglose. El nombre del documento no basta: importan los conceptos incluidos y la causa de terminacion.",
    },
  ],
  };

  return (
    sections[slug] ?? [
      {
        title: "Resumen rapido",
        body:
          "Esta guia explica el tema con enfoque practico para trabajadores en Mexico. Usa las calculadoras relacionadas para obtener una estimacion numerica.",
      },
      {
        title: "Puntos que debes revisar",
        body:
          "Confirma salario diario, fecha de ingreso, fecha de salida, dias pendientes de pago, prestaciones pactadas y si existen conceptos variables como comisiones o bonos.",
      },
      {
        title: "Siguiente paso",
        body:
          "Guarda tus recibos, contrato y comunicaciones relevantes. Si hay conflicto o dudas importantes, consulta a una autoridad laboral o a un especialista.",
      },
    ]
  );
}

function getLegalSections(slug: string): { title: string; body: string }[] {
  const sections: Record<string, { title: string; body: string }[]> = {
  about: [
    {
      title: "Que hacemos",
      body:
        "Calculadoras Laborales MX ofrece herramientas gratuitas para estimar prestaciones laborales comunes en Mexico. El objetivo es ayudarte a entender los conceptos antes de revisar una propuesta de pago.",
    },
    {
      title: "Como trabajamos",
      body:
        "Las calculadoras usan reglas generales de la Ley Federal del Trabajo, orientacion publica de PROFEDET y salarios minimos publicados por CONASAMI cuando son necesarios para topes estimados.",
    },
    {
      title: "Que no hacemos",
      body:
        "No damos asesoria legal personalizada, no representamos trabajadores o empresas y no sustituimos la revision de una autoridad laboral, abogado, contador o area de nomina.",
    },
  ],
  contact: [
    {
      title: "Correcciones y comentarios",
      body:
        "Si encuentras un error de formula, contenido o accesibilidad, prepara la pagina, el dato esperado y la fuente que lo respalda. Eso permite revisar el cambio con mayor precision.",
    },
    {
      title: "Solicitudes editoriales",
      body:
        "Tambien puedes sugerir nuevas calculadoras o guias. Priorizamos temas con busquedas claras, reglas verificables y utilidad practica para trabajadores en Mexico.",
    },
    {
      title: "Casos personales",
      body:
        "No podemos resolver casos individuales desde el sitio. Para conflictos laborales, considera contactar a PROFEDET o la autoridad de conciliacion correspondiente.",
    },
  ],
  "privacy-policy": [
    {
      title: "Datos de calculadora",
      body:
        "Los datos que escribes en las calculadoras se procesan en tu navegador. La version inicial no envia salario, fechas ni resultados a un servidor propio.",
    },
    {
      title: "Analitica y publicidad",
      body:
        "El sitio esta preparado para integrar analitica y publicidad en el futuro. Si se activan, se actualizara esta politica para describir proveedores, cookies y controles disponibles.",
    },
    {
      title: "Datos de contacto",
      body:
        "Si mas adelante habilitamos formularios, solo se solicitara la informacion necesaria para responder el mensaje. No compartiremos datos personales salvo obligacion legal.",
    },
  ],
  terms: [
    {
      title: "Uso permitido",
      body:
        "Puedes usar las herramientas para fines informativos, educativos y de comparacion personal. No debes presentar los resultados como dictamen legal, fiscal o contable.",
    },
    {
      title: "Exactitud",
      body:
        "Trabajamos para mantener formulas y contenido actualizados, pero pueden existir errores, cambios legales o situaciones particulares que modifiquen el resultado.",
    },
    {
      title: "Responsabilidad",
      body:
        "El usuario decide como usar la informacion. Antes de firmar un convenio, renuncia, finiquito o liquidacion, revisa documentos y busca asesoria si el monto es relevante.",
    },
  ],
  disclaimer: [
    {
      title: "Estimaciones, no asesoria",
      body:
        "Las calculadoras muestran aproximaciones basadas en datos que ingresas y reglas generales. No constituyen asesoria legal, fiscal, contable ni laboral personalizada.",
    },
    {
      title: "Conceptos no incluidos",
      body:
        "La version actual no calcula ISR exacto, salarios caidos, intereses, multas, comisiones variables, bonos, PTU, horas extra ni prestaciones superiores salvo que se indiquen expresamente.",
    },
    {
      title: "Verificacion final",
      body:
        "Usa el resultado para pedir un desglose y detectar diferencias. La verificacion final debe hacerse con documentos del caso y, si corresponde, con una autoridad o especialista.",
    },
  ],
  };

  return (
    sections[slug] ?? [
      {
        title: "Alcance",
        body:
          "Este sitio ofrece informacion general y calculos estimados para fines educativos. No presta servicios legales, fiscales, contables ni de representacion.",
      },
      {
        title: "Actualizaciones",
        body:
          "Trabajamos para mantener el contenido claro y actualizado. Si detectas un error, puedes reportarlo desde la pagina de contacto.",
      },
    ]
  );
}

function article(slug: string, h1: string, summary: string): SitePage {
  return {
    slug,
    kind: "article",
    title: `${h1} | Calculadoras Laborales MX`,
    description: summary,
    h1,
    intro: summary,
    sections: getArticleSections(slug),
    faqs: commonFaq,
    sources: officialSources,
  };
}

function legal(slug: string, h1: string, intro: string): SitePage {
  return {
    slug,
    kind: "legal",
    title: `${h1} | Calculadoras Laborales MX`,
    description: intro,
    h1,
    intro,
    sections: getLegalSections(slug),
  };
}
