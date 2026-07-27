export type Locale = "es" | "ca";

type LocalizedText = Record<Locale, string>;

export type ProjectExample = {
  /** Pon `false` para ocultar temporalmente una tarjeta. */
  visible: boolean;
  /** Ruta de una imagen dentro de /public. Ejemplo: "/projects/stand-modular.webp" */
  image: string | null;
  alt: LocalizedText;
  category: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
};

/*
 * ================================================================
 * ZONA EDITABLE — EJEMPLOS DE TRABAJOS
 * ================================================================
 * 1. Guarda tus imágenes en: /public/projects/
 * 2. Sustituye `image: null` por una ruta como:
 *      image: "/projects/nombre-del-proyecto.webp"
 * 3. Reemplaza los textos de ES y CA.
 * 4. Puedes duplicar una tarjeta completa para añadir más proyectos.
 * 5. Recomendación de imagen: WebP, formato horizontal 4:3 y < 300 KB.
 */
export const projectExamples: ProjectExample[] = [
  {
    visible: true,
    image: null,
    alt: {
      es: "Añade aquí una imagen del primer proyecto",
      ca: "Afegeix aquí una imatge del primer projecte",
    },
    category: {
      es: "Stand · Diseño modular",
      ca: "Estand · Disseny modular",
    },
    title: {
      es: "Nombre del proyecto 01",
      ca: "Nom del projecte 01",
    },
    description: {
      es: "Explica brevemente el reto, la solución técnica y qué decisión ayudó a transportar, montar o reutilizar mejor el diseño.",
      ca: "Explica breument el repte, la solució tècnica i quina decisió va ajudar a transportar, muntar o reutilitzar millor el disseny.",
    },
    tags: ["DWG", "Despiece", "Montaje"],
  },
  {
    visible: true,
    image: null,
    alt: {
      es: "Añade aquí una imagen del segundo proyecto",
      ca: "Afegeix aquí una imatge del segon projecte",
    },
    category: {
      es: "Expositor · Optimización",
      ca: "Expositor · Optimització",
    },
    title: {
      es: "Nombre del proyecto 02",
      ca: "Nom del projecte 02",
    },
    description: {
      es: "Añade el contexto del encargo, los condicionantes de fabricación y el resultado conseguido mediante una documentación clara.",
      ca: "Afegeix el context de l'encàrrec, els condicionants de fabricació i el resultat aconseguit mitjançant una documentació clara.",
    },
    tags: ["DXF", "CNC", "Fabricación"],
  },
  {
    visible: true,
    image: null,
    alt: {
      es: "Añade aquí una imagen del tercer proyecto",
      ca: "Afegeix aquí una imatge del tercer projecte",
    },
    category: {
      es: "Mobiliario · Reutilización",
      ca: "Mobiliari · Reutilització",
    },
    title: {
      es: "Nombre del proyecto 03",
      ca: "Nom del projecte 03",
    },
    description: {
      es: "Describe cómo se resolvieron la modularidad, las uniones, el embalaje o el desmontaje para alargar la vida útil del conjunto.",
      ca: "Descriu com es van resoldre la modularitat, les unions, l'embalatge o el desmuntatge per allargar la vida útil del conjunt.",
    },
    tags: ["Modular", "Reutilizable", "Transporte"],
  },
];

/*
 * ZONA EDITABLE — TEXTOS GENERALES
 * Cambia aquí cualquier texto de la web. Mantén las dos versiones alineadas.
 */
export const siteContent = {
  es: {
    langName: "Castellano",
    nav: {
      services: "Servicios",
      approach: "Enfoque",
      projects: "Trabajos",
      process: "Proceso",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Diseño técnico sostenible · Gavà / Barcelona",
      titleLead: "Diseñar para",
      titleAccent: "fabricar.",
      titleSecond: "Pensar para reutilizar.",
      body: "Desarrollo planos y soluciones modulares para stands, expositores y mobiliario, pensadas desde el inicio para simplificar su transporte, montaje, desmontaje y siguiente vida útil.",
      primaryCta: "Cuéntame tu proyecto",
      secondaryCta: "Ver cómo trabajo",
      availability: "Atención telefónica · L–V · 15:00–20:00",
    },
    blueprint: {
      label: "Sistema modular / 04",
      module: "Módulo repetible",
      transport: "Volumen optimizado",
      assembly: "Montaje claro",
      reuse: "Nueva configuración",
      note: "Diseño pensado como sistema, no como residuo.",
    },
    principles: ["Planos claros", "Menos improvisación", "Más ciclos de uso"],
    services: {
      eyebrow: "Qué hago",
      title: "Del concepto a una solución que se puede fabricar.",
      intro: "Apoyo técnico externo para empresas, talleres y estudios que necesitan convertir una idea en documentación precisa, ordenada y útil en producción.",
      items: [
        {
          number: "01",
          title: "Planos y despieces",
          text: "Planos generales, de fabricación y montaje; acotaciones, despieces y documentación preparada para que cada parte se entienda.",
        },
        {
          number: "02",
          title: "Diseño modular",
          text: "Sistemas que se dividen, transportan, montan y reconfiguran con lógica, reduciendo soluciones de un solo uso.",
        },
        {
          number: "03",
          title: "Archivos para CNC",
          text: "Preparación y revisión de archivos DWG/DXF, piezas y mecanizados para facilitar el paso del plano al taller.",
        },
        {
          number: "04",
          title: "Optimización técnica",
          text: "Revisión de medidas, uniones, material, montaje y volumen de transporte antes de que los problemas lleguen a producción.",
        },
      ],
    },
    sustainability: {
      eyebrow: "Sostenibilidad aplicada",
      title: "Lo sostenible no se añade al final. Se decide en el plano.",
      intro: "Cada medida, unión y módulo puede ayudar a usar mejor los recursos. Por eso la sostenibilidad se traduce en decisiones técnicas concretas y verificables.",
      quote: "Menos volumen. Menos piezas irrepetibles. Más posibilidades de volver a usar lo que ya existe.",
      loop: [
        {
          number: "01",
          title: "Transportar",
          text: "Módulos y despieces que aprovechan mejor el espacio disponible.",
        },
        {
          number: "02",
          title: "Montar",
          text: "Uniones legibles y documentación que reduce la improvisación.",
        },
        {
          number: "03",
          title: "Desmontar",
          text: "Piezas pensadas para separarse sin perder su función.",
        },
        {
          number: "04",
          title: "Reutilizar",
          text: "Sistemas preparados para otra configuración, reparación o reciclado.",
        },
      ],
    },
    projects: {
      eyebrow: "Trabajos seleccionados",
      title: "Aquí irá la evidencia, no solo el discurso.",
      intro: "He dejado preparadas estas fichas para añadir proyectos reales con imagen, contexto, solución técnica y resultado.",
      placeholder: "Añade aquí la imagen",
      placeholderHint: "public/projects/…",
      viewLabel: "Ficha de proyecto",
    },
    commitment: {
      eyebrow: "Compromiso",
      title: "Responsabilidad en cada entrega.",
      body: "Un buen plano no solo dibuja una pieza: evita dudas, anticipa decisiones y cuida el tiempo de las personas que fabrican y montan.",
      points: [
        {
          title: "Alcance claro",
          text: "Definimos qué necesitas, qué vas a recibir y en qué formato antes de empezar.",
        },
        {
          title: "Criterio de producción",
          text: "Las decisiones se toman pensando en taller, transporte y montaje, no solo en la pantalla.",
        },
        {
          title: "Documentación ordenada",
          text: "Archivos, versiones y medidas preparados para que el trabajo pueda continuar sin depender de interpretaciones.",
        },
      ],
    },
    process: {
      eyebrow: "Cómo trabajaremos",
      title: "Un proceso sencillo, trazable y sin sorpresas.",
      steps: [
        {
          number: "01",
          title: "Entender",
          text: "Revisamos el objetivo, el uso, las medidas, los materiales y los condicionantes reales.",
        },
        {
          number: "02",
          title: "Desarrollar",
          text: "Convierto la información en una propuesta técnica modular y fabricable.",
        },
        {
          number: "03",
          title: "Revisar",
          text: "Contrastamos los puntos críticos antes de cerrar los archivos definitivos.",
        },
        {
          number: "04",
          title: "Entregar",
          text: "Recibes documentación clara en PDF, DWG o DXF según las necesidades del proyecto.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Tienes una idea que necesita aterrizar en un plano?",
      body: "Cuéntame qué quieres fabricar, en qué fase está el proyecto y dónde está el principal bloqueo. Te responderé con una forma clara de avanzar.",
      whatsapp: "Escribir por WhatsApp",
      call: "Llamar ahora",
      email: "Enviar un email",
      phoneLabel: "Teléfono y WhatsApp",
      phone: "+34 644 85 98 37",
      hoursLabel: "Atención telefónica",
      hours: "Lunes a viernes · 15:00–20:00",
      afterHours: "Fuera de ese horario respondo por email:",
      emailAddress: "oscar.daganzo@gmail.com",
      locationLabel: "Área de trabajo",
      location: "Gavà · Barcelona · Colaboración remota",
    },
    footer: {
      role: "Diseño técnico sostenible",
      note: "Web ligera, sin rastreadores ni cookies de marketing.",
      backToTop: "Volver arriba",
    },
  },
  ca: {
    langName: "Català",
    nav: {
      services: "Serveis",
      approach: "Enfocament",
      projects: "Treballs",
      process: "Procés",
      contact: "Contacte",
    },
    hero: {
      eyebrow: "Disseny tècnic sostenible · Gavà / Barcelona",
      titleLead: "Dissenyar per",
      titleAccent: "fabricar.",
      titleSecond: "Pensar per reutilitzar.",
      body: "Desenvolupo plànols i solucions modulars per a estands, expositors i mobiliari, pensades des de l'inici per simplificar-ne el transport, el muntatge, el desmuntatge i la següent vida útil.",
      primaryCta: "Explica'm el teu projecte",
      secondaryCta: "Veure com treballo",
      availability: "Atenció telefònica · Dl–Dv · 15:00–20:00",
    },
    blueprint: {
      label: "Sistema modular / 04",
      module: "Mòdul repetible",
      transport: "Volum optimitzat",
      assembly: "Muntatge clar",
      reuse: "Nova configuració",
      note: "Disseny pensat com a sistema, no com a residu.",
    },
    principles: ["Plànols clars", "Menys improvisació", "Més cicles d'ús"],
    services: {
      eyebrow: "Què faig",
      title: "Del concepte a una solució que es pot fabricar.",
      intro: "Suport tècnic extern per a empreses, tallers i estudis que necessiten convertir una idea en documentació precisa, ordenada i útil en producció.",
      items: [
        {
          number: "01",
          title: "Plànols i especejaments",
          text: "Plànols generals, de fabricació i muntatge; acotacions, especejaments i documentació preparada perquè cada part s'entengui.",
        },
        {
          number: "02",
          title: "Disseny modular",
          text: "Sistemes que es divideixen, transporten, munten i reconfiguren amb lògica, reduint solucions d'un sol ús.",
        },
        {
          number: "03",
          title: "Arxius per a CNC",
          text: "Preparació i revisió d'arxius DWG/DXF, peces i mecanitzats per facilitar el pas del plànol al taller.",
        },
        {
          number: "04",
          title: "Optimització tècnica",
          text: "Revisió de mides, unions, material, muntatge i volum de transport abans que els problemes arribin a producció.",
        },
      ],
    },
    sustainability: {
      eyebrow: "Sostenibilitat aplicada",
      title: "La sostenibilitat no s'afegeix al final. Es decideix al plànol.",
      intro: "Cada mida, unió i mòdul pot ajudar a fer un millor ús dels recursos. Per això la sostenibilitat es tradueix en decisions tècniques concretes i verificables.",
      quote: "Menys volum. Menys peces irrepetibles. Més possibilitats de tornar a utilitzar allò que ja existeix.",
      loop: [
        {
          number: "01",
          title: "Transportar",
          text: "Mòduls i especejaments que aprofiten millor l'espai disponible.",
        },
        {
          number: "02",
          title: "Muntar",
          text: "Unions llegibles i documentació que redueix la improvisació.",
        },
        {
          number: "03",
          title: "Desmuntar",
          text: "Peces pensades per separar-se sense perdre la seva funció.",
        },
        {
          number: "04",
          title: "Reutilitzar",
          text: "Sistemes preparats per a una altra configuració, reparació o reciclatge.",
        },
      ],
    },
    projects: {
      eyebrow: "Treballs seleccionats",
      title: "Aquí hi haurà l'evidència, no només el discurs.",
      intro: "He deixat preparades aquestes fitxes per afegir projectes reals amb imatge, context, solució tècnica i resultat.",
      placeholder: "Afegeix aquí la imatge",
      placeholderHint: "public/projects/…",
      viewLabel: "Fitxa de projecte",
    },
    commitment: {
      eyebrow: "Compromís",
      title: "Responsabilitat en cada lliurament.",
      body: "Un bon plànol no només dibuixa una peça: evita dubtes, anticipa decisions i cuida el temps de les persones que fabriquen i munten.",
      points: [
        {
          title: "Abast clar",
          text: "Definim què necessites, què rebràs i en quin format abans de començar.",
        },
        {
          title: "Criteri de producció",
          text: "Les decisions es prenen pensant en taller, transport i muntatge, no només en la pantalla.",
        },
        {
          title: "Documentació ordenada",
          text: "Arxius, versions i mides preparats perquè la feina pugui continuar sense dependre d'interpretacions.",
        },
      ],
    },
    process: {
      eyebrow: "Com treballarem",
      title: "Un procés senzill, traçable i sense sorpreses.",
      steps: [
        {
          number: "01",
          title: "Entendre",
          text: "Revisem l'objectiu, l'ús, les mides, els materials i els condicionants reals.",
        },
        {
          number: "02",
          title: "Desenvolupar",
          text: "Converteixo la informació en una proposta tècnica modular i fabricable.",
        },
        {
          number: "03",
          title: "Revisar",
          text: "Contrastem els punts crítics abans de tancar els arxius definitius.",
        },
        {
          number: "04",
          title: "Lliurar",
          text: "Reps documentació clara en PDF, DWG o DXF segons les necessitats del projecte.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacte",
      title: "Tens una idea que necessita aterrar en un plànol?",
      body: "Explica'm què vols fabricar, en quina fase està el projecte i on és el principal bloqueig. Et respondré amb una manera clara d'avançar.",
      whatsapp: "Escriure per WhatsApp",
      call: "Trucar ara",
      email: "Enviar un email",
      phoneLabel: "Telèfon i WhatsApp",
      phone: "+34 644 85 98 37",
      hoursLabel: "Atenció telefònica",
      hours: "Dilluns a divendres · 15:00–20:00",
      afterHours: "Fora d'aquest horari responc per email:",
      emailAddress: "oscar.daganzo@gmail.com",
      locationLabel: "Àrea de treball",
      location: "Gavà · Barcelona · Col·laboració remota",
    },
    footer: {
      role: "Disseny tècnic sostenible",
      note: "Web lleugera, sense rastrejadors ni galetes de màrqueting.",
      backToTop: "Tornar a dalt",
    },
  },
} as const;
