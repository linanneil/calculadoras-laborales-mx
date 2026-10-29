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
  quickAnswer?: string;
  sections: { title: string; body: string }[];
  formulaCards?: { label: string; formula: string; note: string }[];
  faqs?: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
};

const officialSources = [
  {
    label: "Ley Federal del Trabajo, Cámara de Diputados",
    url: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
  },
  {
    label: "PROFEDET: renuncia y despido",
    url: "https://www.profedet.gob.mx/profedet/prensa/asesoria_despido.html",
  },
  {
    label: "CONASAMI: salarios mínimos 2026",
    url: "https://www.gob.mx/conasami/articulos/incremento-a-los-salarios-minimos-para-2026?idiom=es",
  },
];

const commonFaq = [
  {
    question: "¿Este cálculo sustituye a una asesoría legal?",
    answer:
      "No. Es una estimación educativa con reglas generales de México. Un caso real puede cambiar por contrato, prestaciones superiores, convenios, impuestos o una resolución laboral.",
  },
  {
    question: "¿Los importes ya incluyen impuestos?",
    answer:
      "No necesariamente. La versión inicial muestra importes brutos estimados. Revisa el tratamiento fiscal aplicable antes de tomar una decisión.",
  },
];

const toolFaqs: Record<ToolKind, { question: string; answer: string }[]> = {
  finiquito: [
    {
      question: "¿Cuánto me toca de finiquito si renuncio en México?",
      answer:
        "Depende de tu salario diario, fecha de ingreso, fecha de salida, días pendientes de pago, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. La calculadora separa esos conceptos para obtener una estimación bruta.",
    },
    {
      question: "¿El finiquito incluye liquidación o indemnización?",
      answer:
        "No siempre. El finiquito cubre prestaciones pendientes o proporcionales. La liquidación o indemnización se revisa en escenarios como despido injustificado o acuerdo con indemnización.",
    },
    ...commonFaq,
  ],
  liquidacion: [
    {
      question: "¿Cómo se calcula una liquidación por despido en México?",
      answer:
        "Una estimación común separa indemnización de tres meses, 20 días por año cuando corresponda, prima de antigüedad y finiquito. El resultado depende del salario diario, antigüedad y documentos del caso.",
    },
    {
      question: "¿La liquidación siempre incluye 20 días por año?",
      answer:
        "No en todos los escenarios. Puede depender de la vía legal, del tipo de despido y del acuerdo o resolución aplicable. Por eso conviene revisar este concepto separado del finiquito.",
    },
    ...commonFaq,
  ],
  aguinaldo: [
    {
      question: "¿Tengo derecho a aguinaldo si renuncio antes de diciembre?",
      answer:
        "Si trabajaste parte del año, normalmente se revisa aguinaldo proporcional por los días trabajados. La calculadora usa el mínimo de 15 días salvo que captures una prestación mayor.",
    },
    {
      question: "¿Qué datos necesito para calcular aguinaldo proporcional?",
      answer:
        "Necesitas salario diario, días de aguinaldo que otorga tu empresa y días trabajados dentro del año. En año bisiesto se usa divisor de 366 días.",
    },
    ...commonFaq,
  ],
  vacaciones: [
    {
      question: "¿Qué pasa con mis vacaciones si renuncio?",
      answer:
        "Se revisan vacaciones proporcionales del ciclo actual y prima vacacional. Si tienes vacaciones de ciclos anteriores no disfrutadas, debes agregarlas con soporte documental.",
    },
    {
      question: "¿Cómo se calcula la prima vacacional en el finiquito?",
      answer:
        "La prima vacacional mínima se estima como 25% del importe de vacaciones. Algunas empresas pagan un porcentaje mayor por contrato o política interna.",
    },
    ...commonFaq,
  ],
  sdi: [
    {
      question: "¿Para qué sirve el salario diario integrado?",
      answer:
        "El salario diario integrado ayuda a estimar una base que incluye salario y prestaciones mínimas como aguinaldo, vacaciones y prima vacacional. Es una referencia, no una auditoría formal de nómina.",
    },
    {
      question: "¿El SDI incluye bonos, comisiones o vales?",
      answer:
        "Esta calculadora inicial no incluye variables, bonos, comisiones ni prestaciones superiores. Si esos conceptos aplican, revísalos con recibos de nómina o con el área de nómina.",
    },
    ...commonFaq,
  ],
};

export const pages: SitePage[] = [
  {
    slug: "calculadora-finiquito",
    kind: "tool",
    tool: "finiquito",
    title: "Calculadora de finiquito 2026 México: conceptos y ejemplos",
    description:
      "Calcula un finiquito estimado en México con salario pendiente, aguinaldo proporcional, vacaciones y prima vacacional.",
    h1: "Calculadora de finiquito 2026",
    intro:
      "Estima el finiquito por renuncia o término de relación laboral en México. Ingresa salario diario, fechas y días pendientes para ver el desglose.",
    quickAnswer:
      "El finiquito en México se estima sumando salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. Captura salario diario, fechas reales y días no pagados para obtener un desglose bruto en MXN antes de revisar o firmar un recibo.",
    sections: [
      {
        title: "Qué incluye el finiquito",
        body:
          "El finiquito suele incluir salarios pendientes, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. PROFEDET también menciona la prima de antigüedad cuando proceda, por ejemplo en renuncia con 15 años o más de servicio.",
      },
      {
        title: "Cómo usar la calculadora",
        body:
          "Usa tu salario diario bruto, la fecha de ingreso, la fecha de salida y los días ya trabajados que aún no se pagaron. El resultado se muestra en pesos mexicanos.",
      },
      {
        title: "Limitaciones del estimador",
        body:
          "La herramienta no descuenta ISR, no calcula comisiones variables y asume prestaciones mínimas. Si tienes vacaciones acumuladas de años anteriores, bonos o prestaciones superiores, agrega esos conceptos por separado antes de aceptar un pago.",
      },
    ],
    formulaCards: [
      {
        label: "Salario pendiente",
        formula: "salario diario x días pendientes de pago",
        note: "Solo incluye días ya trabajados que aún no aparecen pagados en nómina.",
      },
      {
        label: "Aguinaldo proporcional",
        formula: "salario diario x 15 x días trabajados en el año / días del año",
        note: "Usa 15 días como mínimo legal; puede ser mayor si tu contrato ofrece más.",
      },
      {
        label: "Vacaciones y prima",
        formula: "vacaciones proporcionales x salario diario + 25% de prima",
        note: "La prima vacacional mínima se estima con 25% sobre vacaciones.",
      },
    ],
    faqs: toolFaqs.finiquito,
    sources: officialSources,
  },
  {
    slug: "calculadora-liquidacion",
    kind: "tool",
    tool: "liquidacion",
    title: "Calculadora de liquidación 2026: despido e indemnización",
    description:
      "Estima liquidación por despido en México con indemnización constitucional, 20 días por año, prima de antigüedad y finiquito.",
    h1: "Calculadora de liquidación por despido",
    intro:
      "Herramienta para estimar una liquidación laboral en México cuando existe despido. Incluye conceptos comunes de indemnización y finiquito.",
    quickAnswer:
      "Una liquidación por despido puede incluir indemnización de tres meses, 20 días por año cuando corresponda, prima de antigüedad y prestaciones pendientes. Usa el resultado como estimación inicial y pide siempre un desglose por concepto.",
    sections: [
      {
        title: "Conceptos estimados",
        body:
          "En un despido, PROFEDET indica que la persona trabajadora puede solicitar reinstalación o indemnización de tres meses, además de prestaciones adeudadas como vacaciones, prima vacacional y aguinaldo. Esta calculadora muestra un escenario estimado con indemnización.",
      },
      {
        title: "Prima de antigüedad",
        body:
          "La estimación usa 12 días por año y aplica un tope de dos salarios mínimos diarios para el salario base de antigüedad.",
      },
      {
        title: "Cuándo pedir asesoría",
        body:
          "Si el patrón argumenta una causa de rescisión, si firmaste documentos bajo presión o si hay salarios caídos, convenio o juicio, no uses solo esta cifra. Toma el resultado como una base para revisar tu caso con PROFEDET o un especialista.",
      },
    ],
    formulaCards: [
      {
        label: "Indemnización constitucional",
        formula: "salario diario x 90 días",
        note: "Se usa en estimaciones de despido injustificado con indemnización.",
      },
      {
        label: "20 días por año",
        formula: "salario diario x 20 x años trabajados",
        note: "El resultado depende de la antigüedad reconocida y del escenario legal.",
      },
      {
        label: "Prima de antigüedad",
        formula: "salario topado x 12 x años trabajados",
        note: "La calculadora aplica un tope de dos salarios mínimos diarios.",
      },
    ],
    faqs: toolFaqs.liquidacion,
    sources: officialSources,
  },
  {
    slug: "calculadora-aguinaldo",
    kind: "tool",
    tool: "aguinaldo",
    title: "Calculadora de aguinaldo 2026 México: proporcional e ISR",
    description:
      "Calcula aguinaldo proporcional en México con base en 15 días mínimos y días trabajados durante el año. Considera la parte exenta de ISR (30 UMA).",
    h1: "Calculadora de aguinaldo proporcional",
    intro:
      "Calcula un aguinaldo estimado con el mínimo legal de 15 días para trabajadores del sector privado en México.",
    quickAnswer:
      "El aguinaldo proporcional se calcula con salario diario, días de aguinaldo y días trabajados dentro del año. Si renuncias o sales antes de diciembre, puedes estimar la parte proporcional con base en los días efectivamente trabajados.",
    sections: [
      {
        title: "Fórmula general",
        body:
          "Aguinaldo proporcional = salario diario x 15 días mínimos x días efectivamente trabajados en el año / días del año. En año bisiesto la calculadora usa 366 días.",
      },
      {
        title: "Cuándo se usa",
        body:
          "Sirve para estimar el aguinaldo al cierre del año o cuando la relación laboral termina antes de diciembre. El artículo 87 de la LFT reconoce pago proporcional para quien no cumplió el año completo.",
      },
    ],
    formulaCards: [
      {
        label: "Aguinaldo anual mínimo",
        formula: "salario diario x 15 días",
        note: "La LFT reconoce 15 días como mínimo para trabajadores del sector privado.",
      },
      {
        label: "Aguinaldo proporcional",
        formula: "salario diario x 15 x días trabajados / días del año",
        note: "En año bisiesto el divisor es 366; en otros años, 365.",
      },
    ],
    faqs: toolFaqs.aguinaldo,
    sources: officialSources,
  },
  {
    slug: "calculadora-vacaciones",
    kind: "tool",
    tool: "vacaciones",
    title: "Calculadora de vacaciones 2026 México y prima vacacional",
    description:
      "Estima vacaciones proporcionales y prima vacacional mínima en México con la tabla vigente de días de vacaciones.",
    h1: "Calculadora de vacaciones proporcionales",
    intro:
      "Calcula vacaciones proporcionales y prima vacacional mínima del 25% según antigüedad.",
    quickAnswer:
      "Las vacaciones proporcionales se estiman con los días de vacaciones que corresponden por antigüedad y los días trabajados del ciclo. La prima vacacional mínima se calcula como 25% del importe de vacaciones, salvo que tu empresa pague más.",
    sections: [
      {
        title: "Días de vacaciones",
        body:
          "La tabla inicia con 12 días el primer año, sube dos días por año hasta el quinto y después aumenta dos días por cada cinco años de servicio.",
      },
      {
        title: "Prima vacacional",
        body:
          "La prima vacacional mínima se estima como 25% del importe de vacaciones.",
      },
      {
        title: "Qué periodo estima",
        body:
          "La calculadora estima vacaciones proporcionales del ciclo de servicio actual. Si tienes días devengados de ciclos anteriores que no se han pagado o disfrutado, revísalos por separado con tus recibos y contrato.",
      },
    ],
    formulaCards: [
      {
        label: "Días proporcionales",
        formula: "días anuales según antigüedad x días del ciclo trabajado / 365",
        note: "La tabla inicia con 12 días el primer año y crece por antigüedad.",
      },
      {
        label: "Importe de vacaciones",
        formula: "días proporcionales x salario diario",
        note: "El salario usado debe corresponder al dato bruto que capturas.",
      },
      {
        label: "Prima vacacional",
        formula: "importe de vacaciones x 25%",
        note: "25% es el mínimo legal; algunas empresas pagan un porcentaje mayor.",
      },
    ],
    faqs: toolFaqs.vacaciones,
    sources: officialSources,
  },
  {
    slug: "calculadora-sueldo-diario-integrado",
    kind: "tool",
    tool: "sdi",
    title: "Calculadora de salario diario integrado (SDI) 2026 México",
    description:
      "Calcula salario diario integrado estimado con aguinaldo, vacaciones y prima vacacional mínima en México.",
    h1: "Calculadora de salario diario integrado",
    intro:
      "Obtén un SDI estimado a partir del salario diario y la antigüedad. Es útil para revisar bases laborales y de seguridad social.",
    quickAnswer:
      "El salario diario integrado estimado suma al salario diario la parte diaria de aguinaldo, vacaciones y prima vacacional mínima. Sirve como referencia rápida, pero no reemplaza una revisión formal de nómina o seguridad social.",
    sections: [
      {
        title: "Factor de integración",
        body:
          "El factor suma salario base, aguinaldo mínimo proporcional diario y la parte diaria de vacaciones con prima vacacional mínima. Es una aproximación común para prestaciones mínimas.",
      },
      {
        title: "Uso práctico",
        body:
          "El resultado es orientativo. Empresas y sistemas de nómina pueden usar prestaciones superiores, variables salariales o reglas de seguridad social adicionales.",
      },
    ],
    formulaCards: [
      {
        label: "Factor básico",
        formula: "1 + aguinaldo diario + vacaciones con prima diaria",
        note: "Es una aproximación con prestaciones mínimas y antigüedad capturada.",
      },
      {
        label: "SDI estimado",
        formula: "salario diario x factor de integración",
        note: "No incluye variables, bonos, comisiones ni prestaciones superiores.",
      },
    ],
    faqs: toolFaqs.sdi,
    sources: officialSources,
  },
  article("finiquito-renuncia-voluntaria", "Finiquito por renuncia voluntaria en México 2026", "Qué revisar cuando renuncias voluntariamente: salario pendiente, aguinaldo, vacaciones y prima vacacional."),
  article("liquidacion-por-despido-injustificado", "Liquidación por despido injustificado en México", "Conceptos frecuentes en una separación por despido y diferencias frente al finiquito."),
  article("calculadora-finiquito-cdmx", "Calculadora de finiquito CDMX 2026", "Guía para estimar finiquito en Ciudad de México usando reglas laborales federales.", "finiquito"),
  article("calculadora-finiquito-puebla", "Calculadora de Finiquito en Puebla 2026", "¿Quieres una estimación de tu finiquito o liquidación en Puebla? Calcula proporcionales según la LFT 2026 de forma fácil, con notas y fuentes oficiales.", "finiquito"),
  article("calculadora-finiquito-edomex", "Calculadora de finiquito Estado de México 2026", "Estimador de finiquito para trabajadores en Edomex con salario diario, fechas y prestaciones proporcionales.", "finiquito"),
  article("calculadora-finiquito-guadalajara", "Calculadora de finiquito Guadalajara 2026", "Calcula una estimación de finiquito en Guadalajara con aguinaldo, vacaciones y prima vacacional proporcional.", "finiquito"),
  article("calculadora-finiquito-monterrey", "Calculadora de finiquito Monterrey 2026", "Herramienta para estimar finiquito en Monterrey usando salario diario bruto y fechas de la relación laboral.", "finiquito"),
  article("calculadora-finiquito-tijuana", "Calculadora de finiquito Tijuana 2026", "Guía y calculadora para estimar finiquito en Tijuana con desglose de prestaciones proporcionales.", "finiquito"),
  article("calculadora-finiquito-veracruz", "Calculadora de finiquito Veracruz 2026", "Estimación orientativa de finiquito en Veracruz para revisar salario pendiente y prestaciones proporcionales.", "finiquito"),
  article("isr-finiquito-mexico", "ISR en finiquito: qué considerar en México", "Puntos básicos sobre impuestos en pagos laborales y por qué esta herramienta muestra estimaciones brutas."),
  article("vacaciones-proporcionales-mexico", "Vacaciones proporcionales en México 2026", "Tabla, fórmula y ejemplo para calcular vacaciones proporcionales y prima vacacional."),
  article("aguinaldo-proporcional-renuncia", "Aguinaldo proporcional por renuncia", "Cómo estimar aguinaldo cuando la relación laboral termina antes de diciembre."),
  article("prima-vacacional-mexico", "Prima vacacional en México: mínimo y ejemplo", "Explicación simple de la prima vacacional mínima del 25% y cómo se calcula."),
  article("salario-diario-integrado-ejemplo", "Salario diario integrado: ejemplo 2026", "Ejemplo práctico de factor de integración con prestaciones mínimas."),
  article("diferencia-finiquito-liquidacion", "Diferencia entre finiquito y liquidación", "Comparación clara entre pagos por término normal, renuncia y despido."),
  article("como-calcular-finiquito-mexico", "Cómo calcular finiquito en México paso a paso", "Guía práctica para revisar salario pendiente, aguinaldo, vacaciones y prima vacacional antes de firmar."),
  article("finiquito-con-salario-variable", "Finiquito con salario variable o comisiones", "Cómo preparar una estimación cuando tu ingreso incluye comisiones, bonos o pagos variables."),
  article("finiquito-menos-de-un-ano", "Finiquito con menos de un año trabajado", "Qué conceptos proporcionales revisar si la relación laboral duró semanas o meses."),
  article("finiquito-un-ano-trabajado", "Finiquito por un año trabajado: ejemplo", "Ejemplo orientativo para entender prestaciones proporcionales al terminar después de un año."),
  article("renuncia-sin-preaviso-finiquito", "Renuncia sin preaviso: ¿afecta el finiquito?", "Puntos importantes sobre renuncia, pagos pendientes y documentos que conviene revisar."),
  article("despido-y-firma-de-renuncia", "Despido y firma de renuncia: qué revisar", "Señales de alerta cuando una empresa pide firmar renuncia después de una separación."),
  article("liquidacion-tres-meses-salario", "Liquidación de tres meses de salario en México", "Explicación de la indemnización constitucional y cómo se diferencia de otros conceptos."),
  article("veinte-dias-por-ano-liquidacion", "20 días por año en liquidación laboral", "Cuándo aparece este concepto en estimaciones de liquidación y por qué debe separarse del finiquito."),
  article("prima-antiguedad-finiquito-liquidacion", "Prima de antigüedad en finiquito y liquidación", "Reglas generales, tope de salario y situaciones frecuentes donde conviene revisarla."),
  article("salario-pendiente-finiquito", "Salario pendiente en el finiquito", "Cómo identificar días trabajados no pagados y separarlos de prestaciones proporcionales."),
  article("recibo-finiquito-que-debe-incluir", "Recibo de finiquito: qué debe incluir", "Lista de conceptos y datos que conviene revisar antes de aceptar un pago final."),
  article("finiquito-trabajador-confianza", "Finiquito para trabajador de confianza", "Puntos de revisión para personal de confianza con prestaciones, bonos o salario variable."),
  article("vacaciones-no-disfrutadas-finiquito", "Vacaciones no disfrutadas en finiquito", "Cómo revisar días pendientes de vacaciones y prima vacacional al terminar la relación laboral."),
  article("aguinaldo-por-dias-trabajados", "Aguinaldo por días trabajados: fórmula", "Fórmula proporcional para estimar aguinaldo cuando no se trabajó todo el año."),
  article("checklist-antes-firmar-finiquito", "Checklist antes de firmar finiquito", "Lista breve de documentos, conceptos y alertas antes de firmar un finiquito o convenio."),
  article("finiquito-por-renuncia-mexico", "Finiquito por renuncia en México 2026", "Qué conceptos revisar si renuncias en México: salario pendiente, aguinaldo, vacaciones y prima vacacional."),
  article("como-calcular-liquidacion-por-despido", "Cómo calcular liquidación por despido en México", "Guía práctica para separar indemnización, prima de antigüedad y prestaciones adeudadas tras un despido."),
  article("cuanto-me-toca-de-finiquito", "Cuánto me toca de finiquito en México", "Datos necesarios para estimar cuanto podría corresponderte de finiquito antes de firmar un recibo."),
  article("finiquito-si-trabaje-6-meses", "Finiquito si trabaje 6 meses en México", "Ejemplo y conceptos proporcionales comunes cuando la relación laboral duró aproximadamente seis meses."),
  article("aguinaldo-si-renuncio-antes-de-diciembre", "Aguinaldo si renuncio antes de diciembre", "Cómo estimar el aguinaldo proporcional cuando sales de la empresa antes del pago anual."),
  article("vacaciones-si-renuncio", "Vacaciones si renuncio: qué pasa con los días pendientes", "Cómo revisar vacaciones proporcionales, vacaciones no disfrutadas y prima vacacional al renunciar."),
  article("me-pueden-obligar-a-firmar-renuncia", "¿Me pueden obligar a firmar renuncia?", "Señales de alerta si te piden firmar una renuncia y qué documentos conviene revisar antes de aceptar."),
  article("que-pasa-si-no-me-pagan-finiquito", "¿Qué pasa si no me pagan finiquito en México?", "Pasos prácticos para documentar el adeudo, pedir desglose y buscar orientación si no recibes tu finiquito."),
  article("prima-vacacional-en-finiquito", "Prima vacacional en finiquito: cómo se calcula", "Explicación de la prima vacacional dentro del finiquito y su relación con vacaciones proporcionales."),
  article("liquidacion-con-salario-minimo", "Liquidación con salario mínimo en México", "Cómo estimar conceptos de liquidación cuando el salario diario se acerca al salario mínimo vigente."),
  legal("about", "Acerca de Calculadoras Laborales MX", "Conoce el objetivo del sitio y el alcance de nuestras herramientas."),
  legal("contact", "Contacto", "Forma de contacto para comentarios, correcciones y solicitudes editoriales."),
  legal("privacy-policy", "Política de privacidad", "Información sobre privacidad, analitica y publicidad futura."),
  legal("terms", "Términos de uso", "Condiciones generales para usar este sitio y sus herramientas."),
  legal("disclaimer", "Aviso legal", "Limitaciones importantes sobre cálculos laborales, legales y fiscales."),
  legal("metodologia", "Metodología de cálculo", "Cómo calculamos estimaciones laborales, qué fuentes usamos y qué limitaciones aplican."),
  legal("politica-editorial", "Política editorial", "Criterios editoriales, actualización de contenido y manejo de correcciones."),
];

export const toolPages = pages.filter((page) => page.kind === "tool");
export const articlePages = pages.filter((page) => page.kind === "article");
export const legalPages = pages.filter((page) => page.kind === "legal");

export const guideGroups = [
  {
    title: "Guías de finiquito",
    description: "Renuncia, salario pendiente, recibo de finiquito y pagos proporcionales.",
    toolSlug: "calculadora-finiquito",
    slugs: [
      "finiquito-renuncia-voluntaria",
      "finiquito-por-renuncia-mexico",
      "cuanto-me-toca-de-finiquito",
      "finiquito-si-trabaje-6-meses",
      "finiquito-menos-de-un-ano",
      "finiquito-un-ano-trabajado",
      "renuncia-sin-preaviso-finiquito",
      "salario-pendiente-finiquito",
      "recibo-finiquito-que-debe-incluir",
      "checklist-antes-firmar-finiquito",
      "que-pasa-si-no-me-pagan-finiquito",
    ],
  },
  {
    title: "Guías de liquidación y despido",
    description: "Despido, indemnización, tres meses, 20 días por año y prima de antigüedad.",
    toolSlug: "calculadora-liquidacion",
    slugs: [
      "liquidacion-por-despido-injustificado",
      "como-calcular-liquidacion-por-despido",
      "despido-y-firma-de-renuncia",
      "me-pueden-obligar-a-firmar-renuncia",
      "liquidacion-tres-meses-salario",
      "veinte-dias-por-ano-liquidacion",
      "prima-antiguedad-finiquito-liquidacion",
      "liquidacion-con-salario-minimo",
      "diferencia-finiquito-liquidacion",
    ],
  },
  {
    title: "Guías de aguinaldo y vacaciones",
    description: "Aguinaldo proporcional, vacaciones pendientes y prima vacacional.",
    toolSlug: "calculadora-aguinaldo",
    slugs: [
      "aguinaldo-proporcional-renuncia",
      "aguinaldo-por-dias-trabajados",
      "aguinaldo-si-renuncio-antes-de-diciembre",
      "vacaciones-proporcionales-mexico",
      "vacaciones-si-renuncio",
      "vacaciones-no-disfrutadas-finiquito",
      "prima-vacacional-mexico",
      "prima-vacacional-en-finiquito",
    ],
  },
  {
    title: "Guías por ciudad y salario",
    description: "Casos prácticos para ubicaciones, salario variable y salario diario integrado.",
    toolSlug: "calculadora-sueldo-diario-integrado",
    slugs: [
      "calculadora-finiquito-cdmx",
      "calculadora-finiquito-puebla",
      "calculadora-finiquito-edomex",
      "calculadora-finiquito-guadalajara",
      "calculadora-finiquito-monterrey",
      "calculadora-finiquito-tijuana",
      "calculadora-finiquito-veracruz",
      "finiquito-con-salario-variable",
      "finiquito-trabajador-confianza",
      "salario-diario-integrado-ejemplo",
      "isr-finiquito-mexico",
      "como-calcular-finiquito-mexico",
    ],
  },
];

export function getPageBySlug(slug: string): SitePage | undefined {
  return pages.find((page) => page.slug === slug);
}

export function getRelatedPages(page: SitePage, limit = 4): SitePage[] {
  const group = guideGroups.find((item) => item.slugs.includes(page.slug) || item.toolSlug === page.slug);
  const matchingToolPage = page.tool ? toolPages.find((item) => item.tool === page.tool && item.slug !== page.slug) : undefined;
  const groupedSlugs = group ? orderedRelatedSlugs(page.slug, group.toolSlug, group.slugs) : [];
  const groupedPages = groupedSlugs.map((slug) => getPageBySlug(slug)).filter((item): item is SitePage => Boolean(item));

  const fallbackPages = [...toolPages, ...articlePages].filter((item) => item.slug !== page.slug);
  const preferredPages = uniquePages([matchingToolPage, ...groupedPages].filter((item): item is SitePage => Boolean(item)));
  return [...preferredPages, ...fallbackPages.filter((item) => !preferredPages.some((preferred) => preferred.slug === item.slug))].slice(0, limit);
}

function orderedRelatedSlugs(currentSlug: string, toolSlug: string, slugs: string[]): string[] {
  const siblings = slugs.filter((slug) => slug !== currentSlug);
  const currentIndex = slugs.indexOf(currentSlug);
  if (currentSlug === toolSlug || currentIndex < 0) return [toolSlug, ...siblings].filter((slug) => slug !== currentSlug);

  const after = slugs.slice(currentIndex + 1);
  const before = slugs.slice(0, currentIndex);
  return [toolSlug, ...after, ...before].filter((slug) => slug !== currentSlug);
}

function uniquePages(items: SitePage[]): SitePage[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

function getArticleSections(slug: string): { title: string; body: string }[] {
  const sections: Record<string, { title: string; body: string }[]> = {
  "finiquito-renuncia-voluntaria": [
    {
      title: "Qué te corresponde al renunciar",
      body:
        "En una renuncia voluntaria normalmente se revisan salarios pendientes, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. La prima de antigüedad puede proceder si tienes 15 años o más de servicio, según la orientación de PROFEDET.",
    },
    {
      title: "Documentos útiles",
      body:
        "Antes de firmar, ten a la mano contrato, recibos de nómina, fecha real de ingreso, fecha de salida, comprobantes de vacaciones tomadas y cualquier acuerdo de prestaciones superiores.",
    },
    {
      title: "Señales de alerta",
      body:
        "No firmes una renuncia fechada de forma incorrecta, un recibo en blanco o una carta que no entiendes. Si hay diferencia importante entre tu estimación y la oferta, pide desglose por concepto.",
    },
  ],
  "liquidacion-por-despido-injustificado": [
    {
      title: "Finiquito no es lo mismo que liquidación",
      body:
        "El finiquito cubre prestaciones adeudadas. La liquidación por despido puede sumar indemnización constitucional, otros conceptos indemnizatorios y prima de antigüedad, dependiendo del caso.",
    },
    {
      title: "Conceptos que conviene separar",
      body:
        "Pide que el cálculo distinga salarios pendientes, aguinaldo, vacaciones, prima vacacional, tres meses de salario, 20 días por año y prima de antigüedad. Separarlos ayuda a detectar omisiones.",
    },
    {
      title: "Cuándo buscar apoyo",
      body:
        "Si la empresa alega una causa de despido, te pide firmar renuncia o no entrega desglose, conviene acudir a PROFEDET o al centro de conciliación correspondiente antes de cerrar el caso.",
    },
  ],
  "calculadora-finiquito-cdmx": [
    {
      title: "La regla laboral es federal",
      body:
        "Para trabajadores del apartado A, la base principal es la Ley Federal del Trabajo. Vivir o trabajar en CDMX no cambia por si solo los días mínimos de aguinaldo, vacaciones o prima vacacional.",
    },
    {
      title: "Datos que debes capturar",
      body:
        "Usa salario diario bruto, fecha de ingreso, fecha de salida y días de sueldo pendientes. Si tu sueldo mensual varía, calcula un promedio razonable o revisa tus recibos de nómina.",
    },
    {
      title: "Diferencias frecuentes",
      body:
        "Las diferencias más comunes vienen de comisiones, bonos, vacaciones no registradas o prestaciones superiores. Esos conceptos deben revisarse con documentos de la relación laboral.",
    },
  ],
  "calculadora-finiquito-puebla": [
    {
      title: "Calculadora de finiquito Puebla: uso recomendado",
      body:
        "Esta calculadora de finiquito Puebla estima salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. Usa reglas laborales federales aplicables en México; Puebla orienta la búsqueda local y posibles trámites, pero no cambia por si sola la fórmula base.",
    },
    {
      title: "Cómo calcular finiquito en Puebla",
      body:
        "Captura tu salario diario bruto, fecha de ingreso, fecha de salida y días ya trabajados que aún no fueron pagados. La herramienta separa cada concepto para que puedas comparar el total con el recibo o propuesta del patrón.",
    },
    {
      title: "Antes de firmar un finiquito en Puebla",
      body:
        "Pide un desglose por escrito antes de firmar. Si el patrón incluye conceptos con nombres distintos, solicita equivalencia clara para identificar salario pendiente, aguinaldo, vacaciones y prima vacacional.",
    },
    {
      title: "Renuncia, despido o liquidación en Puebla",
      body:
        "Si buscas calcular finiquito por renuncia en Puebla, empieza por las prestaciones proporcionales. Si hubo despido o la empresa habla de liquidación, separa el finiquito de posibles conceptos indemnizatorios antes de comparar montos.",
    },
  ],
  "calculadora-finiquito-edomex": [
    {
      title: "Uso para trabajadores en Edomex",
      body:
        "El Estado de México comparte la misma base laboral federal para conceptos mínimos como aguinaldo, vacaciones y prima vacacional. La ubicación ayuda a orientar búsquedas y trámites, pero no cambia por si sola la fórmula base.",
    },
    {
      title: "Datos para una estimación útil",
      body:
        "Captura salario diario bruto, fecha real de ingreso, fecha de salida y días pendientes de pago. Si trabajas cerca de CDMX o cambiaste de centro laboral, usa las fechas y recibos de la relación que estás revisando.",
    },
    {
      title: "Cuándo pedir desglose",
      body:
        "Si la empresa entrega un total único, pide que separe salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. Ese desglose facilita comparar la oferta con la calculadora.",
    },
  ],
  "calculadora-finiquito-guadalajara": [
    {
      title: "Cálculo para Guadalajara",
      body:
        "Para una relación laboral en Guadalajara, la estimación se apoya en reglas federales. Los conceptos mínimos no dependen de la ciudad, pero la página te ayuda a revisar el caso con lenguaje y búsqueda local.",
    },
    {
      title: "Qué revisar en nómina",
      body:
        "Usa recibos recientes para confirmar salario diario, pagos variables y vacaciones tomadas. Si recibías comisiones, bonos o prestaciones superiores, el resultado debe tratarse como una base de comparación, no como cierre definitivo.",
    },
    {
      title: "Antes de firmar",
      body:
        "Compara el finiquito ofrecido con los conceptos separados. Si hay renuncia, convenio o salida por despido, revisa que el documento corresponda al motivo real de terminación.",
    },
  ],
  "calculadora-finiquito-monterrey": [
    {
      title: "Estimación en Monterrey",
      body:
        "La calculadora sirve para trabajadores en Monterrey que necesitan una primera estimación de finiquito. Usa la Ley Federal del Trabajo como referencia general para prestaciones proporcionales.",
    },
    {
      title: "Salario diario y variables",
      body:
        "En empleos con bonos, comisiones, turnos o pagos variables, conviene revisar varios recibos antes de capturar el salario diario. Una captura demasiado baja puede subestimar aguinaldo, vacaciones y prima vacacional.",
    },
    {
      title: "Revisión del pago ofrecido",
      body:
        "Si recursos humanos entrega un monto diferente, pregunta qué conceptos incluyó y cuáles excluyó. Diferencias frecuentes vienen de días pendientes, vacaciones no disfrutadas o prestaciones superiores pactadas.",
    },
  ],
  "calculadora-finiquito-tijuana": [
    {
      title: "Uso para Tijuana",
      body:
        "Esta página ayuda a estimar finiquito para trabajadores en Tijuana con salario en pesos mexicanos. La herramienta no calcula situaciones especiales de moneda, viáticos o pagos fronterizos no documentados.",
    },
    {
      title: "Captura de fechas",
      body:
        "La fecha de ingreso y la fecha de salida determinan aguinaldo y vacaciones proporcionales. Si hubo reingresos, pausas o contratos separados, revisa cuál periodo debe usarse para el pago final.",
    },
    {
      title: "Documentos recomendados",
      body:
        "Ten a la mano contrato, recibos de nómina, control de vacaciones y cualquier acuerdo de prestaciones. Esos documentos ayudan a explicar diferencias entre la estimación y la propuesta del patrón.",
    },
  ],
  "calculadora-finiquito-veracruz": [
    {
      title: "Cálculo orientativo en Veracruz",
      body:
        "Para trabajadores en Veracruz, el finiquito normalmente incluye salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. La calculadora muestra un desglose inicial en MXN.",
    },
    {
      title: "No mezclar conceptos",
      body:
        "Finiquito y liquidación no son lo mismo. Si hubo despido o disputa sobre la salida, separa prestaciones adeudadas de posibles conceptos indemnizatorios antes de aceptar una cifra final.",
    },
    {
      title: "Cómo usar el resultado",
      body:
        "Usa el total como referencia para pedir un recibo detallado. Si el pago es menor, revisa días trabajados no pagados, vacaciones pendientes y si existe alguna prestación superior en contrato o política interna.",
    },
  ],
  "isr-finiquito-mexico": [
    {
      title: "Por qué mostramos importes brutos",
      body:
        "El tratamiento fiscal puede cambiar por concepto, monto, exenciones y forma de pago. Por eso el MVP muestra estimaciones brutas y no promete una retención exacta de ISR.",
    },
    {
      title: "Qué pedir en nómina",
      body:
        "Solicita un recibo o desglose que separe percepciones gravadas, exentas y retenciones. Ese documento es más confiable que un total único sin detalle.",
    },
    {
      title: "Uso recomendado",
      body:
        "Usa la calculadora para revisar si las prestaciones base están completas. Después valida impuestos con el recibo de nómina, contador o área de recursos humanos.",
    },
  ],
  "vacaciones-proporcionales-mexico": [
    {
      title: "Tabla vigente de vacaciones",
      body:
        "Desde la reforma de vacaciones dignas, el primer año inicia con 12 días. La tabla sube dos días por año hasta el quinto y después aumenta dos días por cada cinco años.",
    },
    {
      title: "Fórmula proporcional",
      body:
        "Vacaciones proporcionales = días de vacaciones que corresponden por antigüedad x días del ciclo trabajado / 365. Luego se multiplica por salario diario.",
    },
    {
      title: "Prima vacacional",
      body:
        "La prima vacacional mínima es 25% sobre el importe de vacaciones. Algunas empresas dan una prima mayor; si es tu caso, el pago real puede ser superior.",
    },
  ],
  "aguinaldo-proporcional-renuncia": [
    {
      title: "Derecho proporcional",
      body:
        "La LFT reconoce aguinaldo anual mínimo de 15 días y pago proporcional para quienes no completaron el año de servicios. Esto aplica aunque la relación termine antes de diciembre.",
    },
    {
      title: "Fórmula",
      body:
        "Aguinaldo proporcional = salario diario x 15 x días trabajados en el año / días del año. La calculadora toma como inicio el mayor entre tu fecha de ingreso y el 1 de enero.",
    },
    {
      title: "Errores comunes",
      body:
        "No uses meses completos si trabajaste solo parte del mes. Cuenta días efectivamente trabajados en el año y verifica si tu contrato ofrece más de 15 días.",
    },
  ],
  "prima-vacacional-mexico": [
    {
      title: "Mínimo legal",
      body:
        "La prima vacacional mínima es 25% sobre los salarios que correspondan por vacaciones. Es un concepto separado del pago de los días de vacaciones.",
    },
    {
      title: "Ejemplo rápido",
      body:
        "Si tus vacaciones proporcionales equivalen a $4,000 MXN, la prima mínima sería $1,000 MXN. Con prestaciones superiores, el porcentaje puede ser mayor.",
    },
    {
      title: "Dónde aparece en el finiquito",
      body:
        "Normalmente debe aparecer junto a vacaciones proporcionales. Si el desglose solo muestra un total general, pide que separen vacaciones y prima vacacional.",
    },
  ],
  "salario-diario-integrado-ejemplo": [
    {
      title: "Qué integra el SDI estimado",
      body:
        "Este sitio calcula un factor básico con salario diario, aguinaldo mínimo, vacaciones y prima vacacional mínima. No incluye variables, bonos ni prestaciones superiores.",
    },
    {
      title: "Ejemplo",
      body:
        "Con salario diario de $500 MXN y primer año de antigüedad, el SDI estimado será mayor que $500 porque suma la parte diaria de aguinaldo y vacaciones con prima.",
    },
    {
      title: "Uso responsable",
      body:
        "Toma el resultado como referencia para conversar con nómina. Para efectos de seguridad social o auditoría, revisa el cálculo formal de la empresa.",
    },
  ],
  "diferencia-finiquito-liquidacion": [
    {
      title: "Finiquito",
      body:
        "El finiquito se enfoca en prestaciones ya generadas o proporcionales: salario pendiente, aguinaldo, vacaciones, prima vacacional y otros adeudos contractuales.",
    },
    {
      title: "Liquidación",
      body:
        "La liquidación aparece en escenarios como despido injustificado o separación con indemnización. Puede incluir tres meses, 20 días por año, prima de antigüedad y finiquito.",
    },
    {
      title: "Cómo leer una propuesta",
      body:
        "Si una empresa llama liquidación a todo el pago, pide desglose. El nombre del documento no basta: importan los conceptos incluidos y la causa de terminación.",
    },
  ],
  "como-calcular-finiquito-mexico": [
    {
      title: "Paso 1: separa los datos base",
      body:
        "Anota salario diario bruto, fecha de ingreso, fecha de salida, días trabajados no pagados y vacaciones ya disfrutadas. Sin esos datos, cualquier total será difícil de revisar.",
    },
    {
      title: "Paso 2: calcula conceptos proporcionales",
      body:
        "El finiquito normalmente suma salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. Cada concepto debe aparecer separado para poder detectar diferencias.",
    },
    {
      title: "Paso 3: compara contra documentos",
      body:
        "Contrasta la estimación con recibos de nómina, contrato y políticas internas. Si hay prestaciones superiores, bonos o comisiones, pide que se expliquen en el desglose.",
    },
  ],
  "finiquito-con-salario-variable": [
    {
      title: "Identifica qué parte varía",
      body:
        "Comisiones, bonos, destajos o incentivos pueden hacer que el salario diario base no sea evidente. Reúne recibos recientes y revisa si la empresa usa promedios para prestaciones.",
    },
    {
      title: "No mezcles conceptos",
      body:
        "Un pago variable pendiente no es lo mismo que vacaciones o aguinaldo proporcional. Pide que cada rubro se muestre por separado en el finiquito.",
    },
    {
      title: "Cuándo usar una estimación conservadora",
      body:
        "Si no tienes todos los recibos, calcula primero con salario fijo y después agrega variables documentadas. Así evitas aceptar un total único sin entender qué incluye.",
    },
  ],
  "finiquito-menos-de-un-ano": [
    {
      title: "También hay proporcionales",
      body:
        "Aunque hayas trabajado menos de un año, pueden existir aguinaldo proporcional, vacaciones proporcionales, prima vacacional y salarios pendientes.",
    },
    {
      title: "Fechas exactas",
      body:
        "En relaciones cortas, unos días de diferencia pueden cambiar el resultado. Usa fecha real de ingreso y salida, no solo meses aproximados.",
    },
    {
      title: "Revisa pagos finales",
      body:
        "Confirma si el último periodo de nómina ya fue pagado. Si no lo fue, esos días deben distinguirse de las prestaciones proporcionales.",
    },
  ],
  "finiquito-un-ano-trabajado": [
    {
      title: "Conceptos comunes",
      body:
        "Con un año de servicio, normalmente revisas salario pendiente, aguinaldo proporcional del año en curso, vacaciones proporcionales y prima vacacional.",
    },
    {
      title: "Vacaciones del ciclo",
      body:
        "Si ya cumpliste el primer año, revisa si los 12 días fueron disfrutados, pagados o siguen pendientes. Eso puede cambiar el finiquito.",
    },
    {
      title: "Ejemplo de lectura",
      body:
        "Si el total parece bajo, pregunta cuántos días de vacaciones reconoce la empresa, qué salario diario usó y si el aguinaldo se calculó solo por el año actual.",
    },
  ],
  "renuncia-sin-preaviso-finiquito": [
    {
      title: "El preaviso no borra prestaciones",
      body:
        "Una renuncia sin preaviso no elimina automáticamente salarios pendientes ni prestaciones ya generadas. Aun así, conviene revisar contrato y políticas internas.",
    },
    {
      title: "Documenta la fecha de salida",
      body:
        "Guarda comunicación de renuncia, acuse o cualquier mensaje que confirme el último día trabajado. Esa fecha alimenta los cálculos proporcionales.",
    },
    {
      title: "Evita firmar sin desglose",
      body:
        "Si te presentan un monto único, pide que separen salario pendiente, aguinaldo, vacaciones y prima vacacional antes de firmar.",
    },
  ],
  "despido-y-firma-de-renuncia": [
    {
      title: "La causa importa",
      body:
        "No es lo mismo renunciar que ser despedido. La causa de terminación determina si solo se revisa finiquito o si también puede existir liquidación.",
    },
    {
      title: "No firmes bajo presión",
      body:
        "Si te piden firmar renuncia después de comunicarte una separación, lee con calma y pide copia. Firmar documentos incorrectos puede complicar una reclamación.",
    },
    {
      title: "Pide desglose y tiempo",
      body:
        "Solicita el detalle de conceptos y compara contra una estimación. Si hay dudas relevantes, busca orientación de PROFEDET o la autoridad correspondiente.",
    },
  ],
  "liquidacion-tres-meses-salario": [
    {
      title: "Qué representa",
      body:
        "Los tres meses suelen mencionarse como indemnización constitucional en escenarios de despido injustificado. Deben distinguirse de finiquito y prima de antigüedad.",
    },
    {
      title: "Base de salario",
      body:
        "La estimación depende del salario usado como base. Si tienes salario variable o prestaciones superiores, pide cómo se determinó el salario diario.",
    },
    {
      title: "Uso de la calculadora",
      body:
        "La calculadora de liquidación suma este concepto como parte de una estimación. No sustituye la revisión de la causa de separación ni de documentos firmados.",
    },
  ],
  "veinte-dias-por-ano-liquidacion": [
    {
      title: "Por qué se separa",
      body:
        "El concepto de 20 días por año no debe esconderse dentro de un total general. Separarlo ayuda a comparar la propuesta de la empresa con una estimación.",
    },
    {
      title: "Antigüedad proporcional",
      body:
        "Para estimar años de servicio, usa fechas reales de ingreso y salida. La calculadora aproxima la antigüedad con base diaria.",
    },
    {
      title: "No todos los casos son iguales",
      body:
        "La procedencia del concepto puede depender de la ruta legal o del acuerdo. Si hay conflicto, revisa tu caso con una autoridad o especialista.",
    },
  ],
  "prima-antiguedad-finiquito-liquidacion": [
    {
      title: "Regla general de estimación",
      body:
        "La prima de antigüedad suele estimarse con 12 días por año y un salario base con tope. La calculadora usa dos salarios mínimos diarios como referencia de tope.",
    },
    {
      title: "Cuándo aparece",
      body:
        "Puede aparecer en liquidaciones por despido y en algunos finiquitos, por ejemplo renuncia con 15 años o más de servicio, según orientación pública de PROFEDET.",
    },
    {
      title: "Qué revisar en el recibo",
      body:
        "Verifica salario usado, años reconocidos y tope aplicado. Si no aparece y crees que procede, pide explicación antes de firmar.",
    },
  ],
  "salario-pendiente-finiquito": [
    {
      title: "Qué son días pendientes",
      body:
        "Son días ya trabajados que todavia no se pagaron en nómina. No deben confundirse con vacaciones, aguinaldo ni indemnizaciones.",
    },
    {
      title: "Cómo contarlos",
      body:
        "Identifica el último periodo pagado y el último día trabajado. La diferencia puede capturarse como días pendientes en la calculadora.",
    },
    {
      title: "Pide soporte",
      body:
        "Si la empresa dice que ya pagó esos días, solicita recibo o comprobante. Un finiquito claro debe permitir rastrear cada periodo.",
    },
  ],
  "recibo-finiquito-que-debe-incluir": [
    {
      title: "Datos mínimos",
      body:
        "Revisa nombre, puesto, fecha de ingreso, fecha de salida, salario usado y causa de terminación. Los datos incorrectos pueden afectar el cálculo.",
    },
    {
      title: "Conceptos separados",
      body:
        "Busca salario pendiente, aguinaldo proporcional, vacaciones, prima vacacional y otros adeudos. Un total sin desglose es difícil de verificar.",
    },
    {
      title: "Antes de firmar",
      body:
        "Lee si el documento contiene renuncia, conformidad total o liberación de reclamaciones. Si no entiendes una clausula, pide tiempo para revisarla.",
    },
  ],
  "finiquito-trabajador-confianza": [
    {
      title: "Prestaciones y variables",
      body:
        "Trabajadores de confianza pueden tener bonos, comisiones, auto, vales u otras prestaciones. No todas se capturan en una calculadora básica.",
    },
    {
      title: "Misma base de revisión",
      body:
        "Aun así, conviene separar salario pendiente, aguinaldo, vacaciones y prima vacacional. Después agrega conceptos contractuales adicionales.",
    },
    {
      title: "Documentos relevantes",
      body:
        "Ten a la mano contrato, anexos, políticas de bonos y recibos de nómina. Esos documentos ayudan a saber si hay prestaciones superiores.",
    },
  ],
  "vacaciones-no-disfrutadas-finiquito": [
    {
      title: "Días pendientes",
      body:
        "Si generaste vacaciones y no las disfrutaste, deben revisarse en el finiquito junto con la prima vacacional correspondiente.",
    },
    {
      title: "Ciclos anteriores",
      body:
        "La calculadora estima el ciclo actual. Si tienes vacaciones acumuladas de ciclos anteriores, agregalas con soporte documental.",
    },
    {
      title: "Registro de vacaciones",
      body:
        "Pide el historial de días tomados y saldo pendiente. Las diferencias suelen venir de registros incompletos o aprobaciones informales.",
    },
  ],
  "aguinaldo-por-dias-trabajados": [
    {
      title: "Fórmula proporcional",
      body:
        "Aguinaldo proporcional = salario diario x días de aguinaldo x días trabajados en el año / días del año. El mínimo común es 15 días.",
    },
    {
      title: "Año calendario",
      body:
        "Cuenta los días trabajados dentro del año calendario. Si ingresaste antes del 1 de enero, para ese año se cuenta desde el 1 de enero.",
    },
    {
      title: "Cuándo cambia",
      body:
        "El resultado puede ser mayor si tu contrato ofrece más de 15 días de aguinaldo o si hay reglas internas superiores.",
    },
  ],
  "checklist-antes-firmar-finiquito": [
    {
      title: "Documentos",
      body:
        "Reúne contrato, recibos de nómina, comprobantes de vacaciones, carta de renuncia o aviso de separación y cualquier comunicación relevante.",
    },
    {
      title: "Conceptos",
      body:
        "Confirma salario pendiente, aguinaldo proporcional, vacaciones, prima vacacional, prima de antigüedad cuando proceda y pagos variables documentados.",
    },
    {
      title: "Alertas",
      body:
        "Evita firmar recibos en blanco, fechas incorrectas o textos que no entiendes. Si el monto es relevante, pide desglose y tiempo para revisar.",
    },
  ],
  "finiquito-por-renuncia-mexico": [
    {
      title: "Conceptos base al renunciar",
      body:
        "Cuándo renuncias, el finiquito normalmente se concentra en prestaciones ya generadas: salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. La causa de salida no elimina esos conceptos si ya se devengaron.",
    },
    {
      title: "Datos para estimarlo",
      body:
        "Necesitas salario diario bruto, fecha de ingreso, último día trabajado, días de nómina pendientes y vacaciones ya tomadas. Con esos datos puedes usar la calculadora de finiquito y comparar contra el recibo que te entregue la empresa.",
    },
    {
      title: "Qué revisar antes de firmar",
      body:
        "Pide que el documento separe cada concepto. Si aparece una cantidad única, si las fechas no coinciden o si te piden firmar conformidad sin pago inmediato, conviene detenerse y pedir aclaración por escrito.",
    },
  ],
  "como-calcular-liquidacion-por-despido": [
    {
      title: "Primero identifica el escenario",
      body:
        "La liquidación se revisa cuando existe despido o separación con indemnización. No basta con saber el monto total: importa si la empresa reconoce despido, si ofrece convenio o si intenta presentarlo como renuncia.",
    },
    {
      title: "Separa indemnización y prestaciones",
      body:
        "Una estimación completa puede distinguir tres meses de salario, 20 días por año, prima de antigüedad y finiquito. Separar esos bloques ayuda a detectar si solo te están pagando prestaciones proporcionales.",
    },
    {
      title: "Usa fechas y salario documentados",
      body:
        "Captura fecha real de ingreso y salida, salario diario y prestaciones pendientes. Si el salario tiene comisiones o bonos, reúne recibos antes de aceptar una base diaria que parezca menor.",
    },
  ],
  "cuanto-me-toca-de-finiquito": [
    {
      title: "La respuesta depende de tus datos",
      body:
        "No existe una cantidad universal de finiquito. Dos personas con el mismo salario pueden recibir montos distintos por fechas de ingreso, vacaciones tomadas, días pendientes o prestaciones superiores.",
    },
    {
      title: "Calcula por partes",
      body:
        "Empieza con salario pendiente, después aguinaldo proporcional, vacaciones proporcionales y prima vacacional. Ver cada parte evita que un total aproximado o una regla de meses o quincenas te confunda.",
    },
    {
      title: "Compara con la oferta",
      body:
        "Si la empresa ya te dio un monto, pide desglose y revisa qué salario diario usó. Una diferencia pequeña puede venir de redondeos; una diferencia grande suele requerir revisar fechas, prestaciones o conceptos omitidos.",
    },
  ],
  "finiquito-si-trabaje-6-meses": [
    {
      title: "Seis meses generan proporcionales",
      body:
        "Trabajar seis meses puede generar aguinaldo proporcional, vacaciones proporcionales, prima vacacional y salario pendiente. No necesitas cumplir un año completo para revisar esos conceptos proporcionales.",
    },
    {
      title: "Ejemplo de lectura",
      body:
        "Si trabajaste de enero a junio, el aguinaldo proporcional se estima con los días trabajados dentro del año. Las vacaciones se estiman con base en la parte trabajada del ciclo de servicio y la tabla vigente.",
    },
    {
      title: "Errores frecuentes",
      body:
        "No calcules con seis meses exactos si las fechas reales son distintas. En relaciones cortas, unos días cambian el resultado, sobre todo cuando también hay días pendientes de nómina.",
    },
  ],
  "aguinaldo-si-renuncio-antes-de-diciembre": [
    {
      title: "El aguinaldo puede ser proporcional",
      body:
        "Si la relación termina antes de diciembre, el aguinaldo se revisa de forma proporcional por los días trabajados en el año. La LFT reconoce el derecho proporcional para quien no cumple el año completo.",
    },
    {
      title: "Fórmula práctica",
      body:
        "Usa salario diario x días de aguinaldo x días trabajados en el año / días del año. Si tu contrato ofrece más de 15 días, sustituye ese dato en la estimación.",
    },
    {
      title: "Dónde aparece",
      body:
        "En una renuncia, el aguinaldo proporcional suele formar parte del finiquito. Pide que aparezca separado del salario pendiente y de vacaciones para poder verificarlo.",
    },
  ],
  "vacaciones-si-renuncio": [
    {
      title: "Vacaciones proporcionales",
      body:
        "Al renunciar, revisa si generaste días de vacaciones durante el ciclo actual. Esos días pueden pagarse proporcionalmente junto con la prima vacacional si no fueron disfrutados.",
    },
    {
      title: "Vacaciones ya tomadas",
      body:
        "Si ya disfrutaste vacaciones, la empresa puede descontarlas del saldo pendiente del ciclo. Por eso conviene pedir historial de vacaciones autorizadas y saldo reconocido.",
    },
    {
      title: "Ciclos anteriores",
      body:
        "La calculadora estima el ciclo actual. Si hay vacaciones no disfrutadas de años anteriores, agregalas al analisis con recibos, solicitudes aprobadas o constancias internas.",
    },
  ],
  "me-pueden-obligar-a-firmar-renuncia": [
    {
      title: "Firma solo si entiendes el documento",
      body:
        "Una renuncia debe reflejar una decisión voluntaria. Si te presionan, te niegan copia o te piden firmar documentos en blanco, son señales de alerta que conviene documentar.",
    },
    {
      title: "Diferencia frente al despido",
      body:
        "Firmar renuncia puede cambiar la forma en que se interpreta la terminación. Por eso es importante distinguir si realmente renunciaste o si la empresa comunico un despido.",
    },
    {
      title: "Antes de aceptar",
      body:
        "Pide tiempo para leer, solicita desglose del pago y conserva mensajes o correos sobre la separación. Si hay presión o monto relevante, busca orientación antes de firmar.",
    },
  ],
  "que-pasa-si-no-me-pagan-finiquito": [
    {
      title: "Documenta primero",
      body:
        "Guarda contrato, recibos, fecha de salida, mensajes con la empresa y cualquier promesa de pago. Sin documentos, es más difícil explicar qué conceptos están pendientes.",
    },
    {
      title: "Pide desglose por escrito",
      body:
        "Solicita que la empresa indique salario pendiente, aguinaldo, vacaciones, prima vacacional y fecha estimada de pago. Un mensaje escrito ayuda a ordenar el reclamo.",
    },
    {
      title: "Busca orientación si no hay respuesta",
      body:
        "Si la empresa no responde o el monto no coincide, considera contactar a PROFEDET o la autoridad de conciliación correspondiente. La calculadora sirve para preparar una referencia numérica, no para sustituir el trámite.",
    },
  ],
  "prima-vacacional-en-finiquito": [
    {
      title: "Qué es dentro del finiquito",
      body:
        "La prima vacacional es un pago adicional sobre vacaciones. En un finiquito suele aparecer junto a vacaciones proporcionales o vacaciones pendientes no disfrutadas.",
    },
    {
      title: "Cálculo mínimo",
      body:
        "La prima mínima se estima como 25% del importe de vacaciones. Si tus vacaciones proporcionales equivalen a $2,000 MXN, la prima mínima sería $500 MXN.",
    },
    {
      title: "Cuándo puede ser mayor",
      body:
        "Algunas empresas otorgan una prima superior al mínimo legal. Revisa contrato, recibos anteriores o política interna antes de aceptar que se use solo 25%.",
    },
  ],
  "liquidacion-con-salario-minimo": [
    {
      title: "Usa el salario diario correcto",
      body:
        "Si ganas salario mínimo, confirma si tu salario diario corresponde al mínimo general o a una zona/frontera aplicable. También revisa si recibes prestaciones o pagos variables adicionales.",
    },
    {
      title: "Prima de antigüedad y topes",
      body:
        "La prima de antigüedad se estima con 12 días por año y puede usar un salario topado. Cuando el salario está cerca del mínimo, el tope puede no modificar la base, pero debe revisarse de todos modos.",
    },
    {
      title: "No ignores el finiquito",
      body:
        "Aunque la liquidación incluya indemnización, también deben revisarse salarios pendientes, aguinaldo, vacaciones y prima vacacional. Esos conceptos forman parte del total que conviene comparar.",
    },
  ],
  };

  return (
    sections[slug] ?? [
      {
        title: "Resumen rápido",
        body:
          "Esta guía explica el tema con enfoque práctico para trabajadores en México. Usa las calculadoras relacionadas para obtener una estimación numérica.",
      },
      {
        title: "Puntos que debes revisar",
        body:
          "Confirma salario diario, fecha de ingreso, fecha de salida, días pendientes de pago, prestaciones pactadas y si existen conceptos variables como comisiones o bonos.",
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
      title: "Qué hacemos",
      body:
        "Calculadoras Laborales MX ofrece herramientas gratuitas para estimar prestaciones laborales comunes en México. El objetivo es ayudarte a entender los conceptos antes de revisar una propuesta de pago.",
    },
    {
      title: "Cómo trabajamos",
      body:
        "Las calculadoras usan reglas generales de la Ley Federal del Trabajo, orientación pública de PROFEDET y salarios mínimos publicados por CONASAMI cuando son necesarios para topes estimados.",
    },
    {
      title: "Qué no hacemos",
      body:
        "No damos asesoría legal personalizada, no representamos trabajadores o empresas y no sustituimos la revisión de una autoridad laboral, abogado, contador o área de nómina.",
    },
  ],
  contact: [
    {
      title: "Correcciones y comentarios",
      body:
        "Si encuentras un error de fórmula, contenido o accesibilidad, prepara la página, el dato esperado y la fuente que lo respalda. Eso permite revisar el cambio con mayor precisión.",
    },
    {
      title: "Solicitudes editoriales",
      body:
        "También puedes sugerir nuevas calculadoras o guías. Priorizamos temas con búsquedas claras, reglas verificables y utilidad práctica para trabajadores en México.",
    },
    {
      title: "Casos personales",
      body:
        "No podemos resolver casos individuales desde el sitio. Para conflictos laborales, considera contactar a PROFEDET o la autoridad de conciliación correspondiente.",
    },
  ],
  "privacy-policy": [
    {
      title: "Datos de calculadora",
      body:
        "Los datos que escribes en las calculadoras se procesan en tu navegador. La versión inicial no envía salario, fechas ni resultados a un servidor propio.",
    },
    {
      title: "Analitica y publicidad",
      body:
        "El sitio puede usar herramientas de medición como Google Analytics o servicios similares para entender tráfico, páginas visitadas, dispositivo, país aproximado y rendimiento técnico. También puede integrar Google AdSense u otras redes publicitarias en el futuro. Esos proveedores pueden usar cookies, identificadores o tecnologías similares para medir anuncios, limitar frecuencia, detectar fraude y personalizar o contextualizar publicidad según sus propias políticas.",
    },
    {
      title: "Datos de contacto",
      body:
        "Puedes escribir a service@herramientaslaborales.com para consultas relacionadas con privacidad, correcciones editoriales o funcionamiento del sitio. Si más adelante habilitamos formularios, solo se solicitará la información necesaria para responder el mensaje. No compartiremos datos personales salvo obligación legal.",
    },
    {
      title: "Control de cookies",
      body:
        "Puedes bloquear o borrar cookies desde la configuración de tu navegador. Si se activan anuncios personalizados, los proveedores correspondientes podrán ofrecer mecanismos adicionales para administrar preferencias publicitarias.",
    },
  ],
  terms: [
    {
      title: "Uso permitido",
      body:
        "Puedes usar las herramientas para fines informativos, educativos y de comparación personal. No debes presentar los resultados como dictamen legal, fiscal o contable.",
    },
    {
      title: "Exactitud",
      body:
        "Trabajamos para mantener fórmulas y contenido actualizados, pero pueden existir errores, cambios legales o situaciones particulares que modifiquen el resultado.",
    },
    {
      title: "Responsabilidad",
      body:
        "El usuario decide cómo usar la información. Antes de firmar un convenio, renuncia, finiquito o liquidación, revisa documentos y busca asesoría si el monto es relevante.",
    },
  ],
  disclaimer: [
    {
      title: "Estimaciones, no asesoría",
      body:
        "Las calculadoras muestran aproximaciones basadas en datos que ingresas y reglas generales. No constituyen asesoría legal, fiscal, contable ni laboral personalizada.",
    },
    {
      title: "Conceptos no incluidos",
      body:
        "La versión actual no calcula ISR exacto, salarios caídos, intereses, multas, comisiones variables, bonos, PTU, horas extra ni prestaciones superiores salvo que se indiquen expresamente.",
    },
    {
      title: "Verificación final",
      body:
        "Usa el resultado para pedir un desglose y detectar diferencias. La verificación final debe hacerse con documentos del caso y, si corresponde, con una autoridad o especialista.",
    },
  ],
  metodologia: [
    {
      title: "Base de cálculo",
      body:
        "Las herramientas usan datos capturados por el usuario y reglas generales aplicables en México. Priorizamos conceptos verificables: salario pendiente, aguinaldo proporcional, vacaciones, prima vacacional, indemnización y prima de antigüedad cuando corresponde.",
    },
    {
      title: "Fuentes consultadas",
      body:
        "El contenido se apoya en la Ley Federal del Trabajo publicada por la Cámara de Diputados, orientación pública de PROFEDET y salarios mínimos publicados por CONASAMI cuando se requiere un tope de referencia.",
    },
    {
      title: "Qué no calculamos",
      body:
        "No calculamos ISR exacto, salarios caídos, intereses, multas, PTU, horas extra, comisiones variables no documentadas, prestaciones superiores ni efectos de convenios o resoluciones laborales.",
    },
    {
      title: "Uso recomendado",
      body:
        "Usa los resultados como una primera estimación para pedir desglose y revisar documentos. Si existe conflicto, monto relevante o presión para firmar, busca apoyo de PROFEDET, autoridad laboral o especialista.",
    },
  ],
  "politica-editorial": [
    {
      title: "Objetivo editorial",
      body:
        "Publicamos calculadoras y guías prácticas para que trabajadores en México entiendan conceptos laborales frecuentes antes de revisar un pago o documento.",
    },
    {
      title: "Criterios de publicación",
      body:
        "Priorizamos temas con utilidad práctica, búsquedas claras, fórmulas verificables y fuentes públicas. Evitamos presentar estimaciones como asesorías personalizadas o dictamen legal.",
    },
    {
      title: "Actualizaciones",
      body:
        "Revisamos contenido cuando cambian reglas relevantes, salarios mínimos, criterios oficiales o cuando detectamos errores. Cada página muestra una fecha general de actualización del sitio.",
    },
    {
      title: "Correcciones",
      body:
        "Si detectas un error, escribe a service@herramientaslaborales.com con la página, el dato observado y una fuente que permita verificarlo. Revisaremos correcciones dando prioridad a errores de fórmula, fuente o interpretación.",
    },
  ],
  };

  return (
    sections[slug] ?? [
      {
        title: "Alcance",
        body:
          "Este sitio ofrece información general y cálculos estimados para fines educativos. No presta servicios legales, fiscales, contables ni de representación.",
      },
      {
        title: "Actualizaciones",
        body:
          "Trabajamos para mantener el contenido claro y actualizado. Si detectas un error, puedes reportarlo desde la página de contacto.",
      },
    ]
  );
}

function article(slug: string, h1: string, summary: string, tool?: ToolKind): SitePage {
  const override = getArticleOverride(slug);
  return {
    slug,
    kind: "article",
    tool,
    title: `${h1} | Calculadoras Laborales MX`,
    description: summary,
    h1,
    intro: summary,
    quickAnswer: override.quickAnswer,
    sections: getArticleSections(slug),
    faqs: override.faqs ?? commonFaq,
    sources: officialSources,
  };
}

function getArticleOverride(slug: string): Partial<Pick<SitePage, "quickAnswer" | "faqs">> {
  switch (slug) {
    case "calculadora-finiquito-puebla":
      return {
        quickAnswer:
          "Para calcular finiquito en Puebla, suma salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. Si la salida fue por renuncia, revisa prestaciones proporcionales; si fue despido, separa finiquito y liquidación antes de firmar.",
        faqs: [
          {
            question: "¿Cómo usar la calculadora de finiquito Puebla?",
            answer:
              "Ingresa salario diario bruto, fecha de ingreso, fecha de salida y días pendientes de pago. La calculadora muestra una estimación bruta en MXN separando salario pendiente, aguinaldo, vacaciones y prima vacacional.",
          },
          {
            question: "¿Cómo calcular finiquito por renuncia en Puebla?",
            answer:
              "Usa salario diario, fecha de ingreso, fecha de salida, días pendientes de pago y vacaciones ya tomadas. En una renuncia normalmente revisas salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional.",
          },
          {
            question: "¿El finiquito en Puebla se calcula diferente al resto de México?",
            answer:
              "Para trabajadores del sector privado, los conceptos mínimos se basan en la Ley Federal del Trabajo. Puebla puede importar para orientación o trámite local, pero no cambia por si sola los días mínimos de aguinaldo, vacaciones o prima vacacional.",
          },
          {
            question: "¿Puedo usar esta página como calculadora de liquidación Puebla?",
            answer:
              "Esta página estima finiquito. Si buscas liquidación en Puebla por despido, primero calcula las prestaciones pendientes y después revisa por separado indemnización, prima de antigüedad u otros conceptos que puedan aplicar.",
          },
          {
            question: "¿Qué debo revisar antes de firmar finiquito en Puebla?",
            answer:
              "Revisa que el recibo separe salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. Si hay despido, presión para firmar o falta de desglose, busca orientación antes de aceptar.",
          },
          ...commonFaq,
        ],
      };
    case "finiquito-por-renuncia-mexico":
      return {
        quickAnswer:
          "Si renuncias en México, normalmente revisas salario pendiente, aguinaldo proporcional, vacaciones proporcionales y prima vacacional. La renuncia no elimina prestaciones ya generadas; pide desglose antes de firmar.",
        faqs: [
          {
            question: "¿Tengo derecho a finiquito si renuncio?",
            answer:
              "Si ya generaste salario pendiente, aguinaldo proporcional, vacaciones proporcionales o prima vacacional, esos conceptos pueden formar parte del finiquito aunque la salida sea por renuncia voluntaria.",
          },
          {
            question: "¿Qué pasa si renuncio y no me pagan finiquito?",
            answer:
              "Guarda recibos, contrato, fecha de salida y mensajes con la empresa. Pide un desglose por escrito y compara la respuesta contra una estimación por conceptos antes de aceptar un total cerrado.",
          },
          {
            question: "¿La renuncia voluntaria incluye liquidación?",
            answer:
              "Normalmente la renuncia voluntaria se revisa como finiquito, no como liquidación con indemnización. Si hubo presión, despido o acuerdo especial, conviene revisar el caso antes de firmar.",
          },
          ...commonFaq,
        ],
      };
    case "me-pueden-obligar-a-firmar-renuncia":
      return {
        quickAnswer:
          "No deberías firmar una renuncia si no refleja una decisión voluntaria o si no entiendes el documento. Documenta presiones, pide copia y revisa el pago ofrecido antes de firmar.",
        faqs: [
          {
            question: "¿Qué hago si me quieren obligar a firmar renuncia?",
            answer:
              "No firmes documentos en blanco ni textos que no entiendas. Pide copia, conserva mensajes o correos, anota fechas y solicita que cualquier propuesta de pago venga desglosada por escrito.",
          },
          {
            question: "¿Firmar renuncia cambia mi finiquito o liquidación?",
            answer:
              "Puede cambiar la forma en que se interpreta la salida. Una renuncia suele llevar a finiquito; un despido o convenio con indemnización puede requerir revisar liquidación además de prestaciones pendientes.",
          },
          {
            question: "¿Puedo pedir copia antes de firmar?",
            answer:
              "Sí. Antes de firmar conviene leer con calma, pedir copia del documento y confirmar que fechas, salario, causa de salida y desglose de pago coincidan con tu historial laboral.",
          },
          ...commonFaq,
        ],
      };
    case "que-pasa-si-no-me-pagan-finiquito":
      return {
        quickAnswer:
          "Si no te pagan finiquito, documenta fecha de salida, recibos, contrato y mensajes; pide un desglose por escrito y una fecha de pago. Si no hay respuesta, busca orientación laboral.",
        faqs: [
          {
            question: "¿Cuánto tiempo tiene la empresa para pagar finiquito?",
            answer:
              "Lo más práctico es pedir por escrito una fecha concreta de pago y el desglose de conceptos. Si pasan los días sin respuesta o el monto no coincide, busca orientación laboral con tus documentos a la mano.",
          },
          {
            question: "¿Qué documentos necesito si no me pagan finiquito?",
            answer:
              "Reúne contrato, recibos de nómina, fecha de ingreso, fecha de salida, mensajes de la empresa, comprobantes de vacaciones y cualquier propuesta de pago o recibo que te hayan dado.",
          },
          {
            question: "¿Puedo calcular una referencia antes de reclamar?",
            answer:
              "Sí. Una estimación por salario pendiente, aguinaldo, vacaciones y prima vacacional te ayuda a ordenar el reclamo y detectar si la empresa omitio algun concepto.",
          },
          ...commonFaq,
        ],
      };
    case "diferencia-finiquito-liquidacion":
      return {
        quickAnswer:
          "Finiquito y liquidación no son lo mismo. El finiquito cubre prestaciones pendientes; la liquidación puede incluir indemnización si existe despido o acuerdo con pago indemnizatorio.",
        faqs: [
          {
            question: "¿Me toca finiquito o liquidación si me despiden?",
            answer:
              "En un despido se revisan prestaciones pendientes y, según el caso, posibles conceptos de liquidación o indemnización. Por eso conviene separar finiquito, indemnización y prima de antigüedad.",
          },
          {
            question: "¿La liquidación incluye finiquito?",
            answer:
              "Muchas propuestas de liquidación incluyen también conceptos de finiquito, pero deben aparecer separados. Pide desglose para saber que parte corresponde a prestaciones ya generadas.",
          },
          {
            question: "¿Por qué la empresa dice finiquito si fue despido?",
            answer:
              "A veces se usa finiquito como nombre general del pago final. Lo importante es revisar la causa de salida, el documento que firmas y los conceptos incluidos, no solo el título del recibo.",
          },
          ...commonFaq,
        ],
      };
    case "aguinaldo-si-renuncio-antes-de-diciembre":
      return {
        quickAnswer:
          "Si renuncias antes de diciembre, normalmente revisas aguinaldo proporcional por los días trabajados en el año. Usa salario diario, días de aguinaldo y días trabajados para estimarlo.",
        faqs: [
          {
            question: "¿Tengo aguinaldo si renuncio antes de diciembre?",
            answer:
              "Si trabajaste parte del año, puedes revisar el aguinaldo proporcional dentro del finiquito. No necesitas llegar a diciembre para estimar la parte generada.",
          },
          {
            question: "¿Cómo se calcula el aguinaldo proporcional al renunciar?",
            answer:
              "Una referencia simple es salario diario por días de aguinaldo, multiplicado por días trabajados en el año y dividido entre días del año. Usa los días de aguinaldo de tu contrato si son mayores al mínimo.",
          },
          {
            question: "¿El aguinaldo proporcional va dentro del finiquito?",
            answer:
              "En una renuncia suele revisarse dentro del finiquito, junto con salario pendiente, vacaciones proporcionales y prima vacacional. Pide que aparezca separado para poder verificarlo.",
          },
          ...commonFaq,
        ],
      };
    default:
      return {};
  }
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
