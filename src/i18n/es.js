// Spanish (neutral LATAM, informal "tú") dictionary. Structure mirrors en.js exactly.
// Proper nouns (product names, "Blakie Labs", people) and tech-stack tokens stay in English.
export default {
  skipToContent: "Saltar al contenido",

  meta: {
    home: {
      title: "Blakie Labs | Estudio de software senior y laboratorio de productos",
      description:
        "Blakie Labs construye software de alto rendimiento para clientes e incuba productos digitales afilados con un equipo de ingeniería 100% senior."
    },
    work: {
      title: "Trabajo | Blakie Labs",
      description:
        "Explora los sistemas para clientes y los productos de Blakie Labs: desde plataformas orientadas a eventos hasta apps que priorizan la privacidad y dashboards en tiempo real."
    },
    about: {
      title: "Nosotros | Blakie Labs",
      description:
        "Conoce a Blakie Labs: un equipo pequeño de ingeniería senior enfocado en calidad extrema, ejecución rápida y software hecho para durar."
    },
    whyBlakie: {
      title: "¿Por qué Blakie? | Blakie Labs",
      description:
        "La historia detrás del nombre Blakie Labs: una perra rescatada, un fundador que la llevó a casa y la familia que dio forma a la marca."
    },
    plans: {
      title: "Planes de retainer | Blakie Labs",
      description:
        "Reserva un cupo de ingeniería senior de Blakie Labs para arquitectura full-stack, MVPs rápidos y entrega de software en producción."
    },
    contact: {
      title: "Contacto | Blakie Labs",
      description:
        "Envíale a Blakie Labs tu brief de producto, solicitud de retainer o reto de arquitectura. El equipo responde en menos de 24 horas."
    }
  },

  nav: {
    links: { work: "Trabajo", about: "Nosotros", plans: "Planes", contact: "Contacto" },
    cta: "Contrata al Lab →",
    homeAria: "Inicio de Blakie Labs",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    primaryNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    switcherAria: "Idioma"
  },

  footer: {
    line: "© 2026 - hecho con dientes."
  },

  newsletter: {
    title: "Sigue al lab.",
    body: "Apps nuevas, build logs y alguna que otra foto de perro. Cero spam, siempre.",
    emailLabel: "Correo electrónico",
    placeholder: "tu@studio.com",
    submit: "Suscribirme",
    success: "Ya eres parte de la manada."
  },

  home: {
    eyebrow: "ESTUDIO DIGITAL DE DOBLE MOTOR",
    titleLead: "Construimos software que ",
    titleAccent: "muerde.",
    intro:
      "Blakie Labs es un estudio digital de doble motor. Entregamos software de alto rendimiento para clientes globales e incubamos nuestra propia suite de aplicaciones digitales.",
    ctaPrimary: "Contrata al Lab",
    ctaPrimaryNote: "[Planes de retainer]",
    ctaGhost: "Explora nuestras apps →",
    heroCardAria: "Marca de Blakie Labs",
    heroCaption: "// blakie.exe - leal por diseño",
    modelTitle: "Dos motores. Una sola manada.",
    modelSub: "[ LA AGENCIA ] x [ EL LAB ]",
    agency: {
      kicker: "01 - LA AGENCIA",
      title: "Velocidad dedicada, en retainer.",
      body: "Retainers de ingeniería premium, mes a mes. Arquitectura full-stack, MVPs rápidos y una manada senior enviando código de producción sobre tu roadmap.",
      points: [
        "Manada de ingeniería 100% senior",
        "Arquitectura full-stack e infra",
        "MVPs rápidos en semanas, no en trimestres",
        "Pausa o escala tu cupo mes a mes"
      ],
      link: "Ver planes de retainer"
    },
    lab: {
      kicker: "02 - EL LAB",
      title: "Apps que construimos para nosotros.",
      body: "Una suite creciente de SaaS propio, construido en abierto. Algunos en vivo, otros incubando en la perrera.",
      link: "Ver todos los productos"
    },
    labPreview: [
      { name: "Fetchly", initial: "F", status: "En vivo", statusClass: "live", iconClass: "accent" },
      { name: "Tracewell", initial: "T", status: "En beta", statusClass: "beta", iconClass: "quiet" },
      { name: "Kennel", initial: "K", status: "En vivo", statusClass: "live", iconClass: "quiet" },
      { name: "Sniff", initial: "S", status: "En beta", statusClass: "beta", iconClass: "accent" }
    ],
    stats: [
      { num: "6", label: "PRODUCTOS LANZADOS" },
      { num: "12+", label: "SISTEMAS DE CLIENTES" },
      { num: "24h", label: "RESPUESTA AL BRIEF" },
      { num: "100%", label: "INGENIEROS SENIOR" }
    ],
    proof: {
      kicker: "LO USAN EQUIPOS QUE SÍ ENVÍAN",
      logosAria: "Logos de clientes",
      clientLogos: ["Meridian", "Northwind", "Atlas Health", "Volt", "Halcyon", "Driftwell"]
    },
    testimonials: [
      {
        quote: "Blakie entregó en seis semanas lo que nuestro proveedor anterior no logró en un año, y el código es impecable.",
        name: "VP de Ingeniería",
        org: "Meridian Freight",
        image: "/testimonials/meridian-vp.webp"
      },
      {
        quote: "Trataron nuestro producto como si fuera suyo. Cero hand-holding, pura señal, cada semana.",
        name: "CTO",
        org: "Northwind Capital",
        image: "/testimonials/northwind-cto.webp"
      }
    ]
  },

  work: {
    kicker: "// PORTAFOLIO Y PRODUCTOS",
    title: "El trabajo.",
    tablistAria: "Vistas de trabajo",
    tabClients: "Sistemas de clientes",
    tabProducts: "Nuestros productos",
    viewCaseStudy: "Ver caso de estudio",
    clients: [
      {
        name: "Meridian Freight",
        sector: "LOGÍSTICA",
        tag: "Arquitectura",
        desc: "Reconstruimos el motor de despacho de un monolito que crujía a un sistema orientado a eventos.",
        metric: "4x",
        metricLabel: "rendimiento",
        metric2: "-62%",
        metric2Label: "latencia"
      },
      {
        name: "Northwind Capital",
        sector: "FINTECH",
        tag: "Tiempo real",
        desc: "Un dashboard de trading en tiempo real que transmite el estado del portafolio en menos de 100ms.",
        metric: "<100ms",
        metricLabel: "tick a render",
        metric2: "99.99%",
        metric2Label: "disponibilidad"
      },
      {
        name: "Atlas Health",
        sector: "SALUD",
        tag: "Migración",
        desc: "Portal de pacientes de nivel HIPAA, migrado en vivo con cero downtime durante un fin de semana.",
        metric: "0",
        metricLabel: "inactividad",
        metric2: "1.2M",
        metric2Label: "registros migrados"
      },
      {
        name: "Volt Mobility",
        sector: "MOVILIDAD",
        tag: "Escala",
        desc: "App de red de carga para autos eléctricos escalada de prototipo a despliegue nacional.",
        metric: "200k",
        metricLabel: "activos mensuales",
        metric2: "38",
        metric2Label: "estados activos"
      }
    ]
  },

  products: [
    {
      slug: "fetchly",
      name: "Fetchly",
      initial: "F",
      status: "En vivo",
      statusClass: "live",
      iconClass: "accent",
      desc: "Generador de changelogs y notas de versión con IA. Entrega notas que tus usuarios sí leen.",
      cta: "Abrir app",
      detail: {
        tagline: "Convierte commits crudos en notas de versión que los humanos sí quieren leer.",
        problem: "Los equipos lanzan sin parar pero los changelogs se pudren. Los usuarios se pierden lo que salió y soporte responde las mismas preguntas una y otra vez.",
        build: [
          "Pipeline de LLM que resume los PRs fusionados en notas en lenguaje claro",
          "Publicación con un clic a un changelog alojado y personalizable",
          "Resúmenes por Slack y correo en cada release"
        ],
        stack: ["TypeScript", "Next.js", "Postgres", "OpenAI"]
      }
    },
    {
      slug: "tracewell",
      name: "Tracewell",
      initial: "T",
      status: "En beta",
      statusClass: "beta",
      iconClass: "quiet",
      desc: "Error tracking self-hosted, sin bloat y con propiedad total de tus datos.",
      cta: "Únete a la beta",
      detail: {
        tagline: "Error tracking que de verdad es tuyo: self-hosted, ligero, tuyo.",
        problem: "Las herramientas de errores alojadas son caras, mandan tus stack traces a la nube de otro y entierran la señal bajo el ruido.",
        build: [
          "Despliegue en un solo binario sobre tu propia infra",
          "Agrupación inteligente que colapsa el ruido duplicado",
          "Soporte de source maps con ingesta en menos de un segundo"
        ],
        stack: ["Rust", "ClickHouse", "Astro", "Docker"]
      }
    },
    {
      slug: "kennel",
      name: "Kennel",
      initial: "K",
      status: "En vivo",
      statusClass: "live",
      iconClass: "quiet",
      desc: "Despliega y administra todos tus side projects desde un solo dashboard.",
      cta: "Abrir app",
      detail: {
        tagline: "Cada side project, un solo dashboard: despliega, monitorea y olvídate del YAML.",
        problem: "Los builders indie corren apps pequeñas en demasiados hosts y pierden el rastro de qué está en vivo, qué está costando dinero y qué está caído.",
        build: [
          "Panel de despliegue unificado entre proveedores",
          "Costo y disponibilidad de un vistazo por proyecto",
          "Auto-sleep para apps inactivas y recortar gasto"
        ],
        stack: ["Go", "Svelte", "Postgres", "Fly.io"]
      }
    },
    {
      slug: "sniff",
      name: "Sniff",
      initial: "S",
      status: "En beta",
      statusClass: "beta",
      iconClass: "accent",
      desc: "Analítica de producto que prioriza la privacidad. Sin cookies, ligera, honesta.",
      cta: "Únete a la beta",
      detail: {
        tagline: "Analítica de producto que respeta a tus usuarios: sin cookies y honesta.",
        problem: "La mayoría de las analíticas son pesadas y necesitan banner de cookies. Tú quieres los números sin vender a tus usuarios.",
        build: [
          "Tracking de eventos sin cookies y limpio ante el GDPR",
          "Script de menos de 2kb sin lastre de rendimiento",
          "Funnels y retención sin vigilancia"
        ],
        stack: ["Elixir", "ClickHouse", "Astro", "Phoenix"]
      }
    },
    {
      slug: "boneyard",
      name: "Boneyard",
      initial: "B",
      status: "En incubadora",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "Un baúl de snippets de código con búsqueda semántica en todo tu stack.",
      cta: "Avísame",
      detail: {
        tagline: "La memoria de código de tu equipo: cada snippet, con búsqueda semántica.",
        problem: "El fix de hace seis meses está enterrado en un hilo. El conocimiento tribal se va por la puerta con cada salida.",
        build: [
          "Búsqueda semántica entre snippets y gists",
          "Captura desde el editor y la CLI con una sola tecla",
          "Librerías de equipo con control de acceso"
        ],
        stack: ["Python", "pgvector", "Astro", "Tauri"]
      }
    },
    {
      slug: "howl",
      name: "Howl",
      initial: "H",
      status: "En incubadora",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "Status pages en tiempo real que cargan rápido, lucen limpias y se embeben donde sea.",
      cta: "Avísame",
      detail: {
        tagline: "Status pages que cargan al instante y se sienten parte de tu producto.",
        problem: "Las status pages son lentas, genéricas y viven en el subdominio de otro. Cuando algo se cae, la página tiene que ser clara.",
        build: [
          "Páginas renderizadas en el edge que cargan en menos de 100ms",
          "Widget totalmente personalizable y embebible",
          "Detección automática de incidentes desde tus monitores"
        ],
        stack: ["TypeScript", "Workers", "Astro", "Durable Objects"]
      }
    }
  ],

  modal: {
    problem: "EL PROBLEMA",
    built: "LO QUE CONSTRUIMOS",
    stack: "STACK",
    closeAria: "Cerrar caso de estudio del producto",
    ctaDefault: "Abrir app →"
  },

  about: {
    kicker: "// EL MANIFIESTO",
    title: "Código legendario, o nada.",
    lead1: "Somos una pequeña manada de ingenieros senior que se niega a entregar trabajo mediocre. Calidad extrema, agilidad sin piedad y la costumbre constante de salir de la zona de confort para construir cosas que sobreviven a su ciclo de hype.",
    lead2: "Sin equipos inflados. Sin pasarle el trabajo a juniors. Las personas con las que hablas son las que escriben el código.",
    ethos: [
      { num: "A1", title: "Calidad extrema", body: "Sudamos los casos límite que nadie ve hasta que revientan en producción." },
      { num: "A2", title: "Agilidad sin piedad", body: "Equipo pequeño, sin burocracia. Nos movemos a la velocidad de una decisión." },
      { num: "A3", title: "Fuera del confort", body: "Elegimos arquitectura difícil cuando se gana su lugar a lo largo de cinco años." }
    ],
    origin: {
      label: 'ORIGEN - POR QUÉ "BLAKIE"',
      headingHtml:
        'Bautizada en honor a nuestra perra negra favorita, Blakie Labs encarna <span>lealtad, alta velocidad y ejecución protectora</span> sobre las bases de código que construimos.',
      cta: "Conoce más →"
    },
    teamTitle: "Conoce a la manada.",
    teamSub: "[ QUIENES ESCRIBEN EL CÓDIGO ]",
    team: [
      { initial: "J", name: "Jhon Garces Montes", role: "Fundador y CTO", image: "/team/jhon-garces-montes.webp", imageAlt: "Retrato de Jhon Garces Montes", accent: true },
      { initial: "L", name: "Lena Okafor", role: "Staff Full-Stack", image: "/team/lena-okafor.webp", imageAlt: "Retrato de Lena Okafor" },
      { initial: "D", name: "Dane Park", role: "Infra y Plataforma", image: "/team/dane-park.webp", imageAlt: "Retrato de Dane Park" },
      { initial: "S", name: "Sofia Cruz", role: "Ingeniera de Diseño", image: "/team/sofia-cruz.webp", imageAlt: "Retrato de Sofia Cruz" }
    ]
  },

  whyBlakie: {
    back: "Volver a Nosotros",
    kicker: "// HISTORIA DE ORIGEN",
    title: "¿Por qué Blakie?",
    intro: [
      '<strong class="story-highlight">Blakie Labs</strong> no nació en una sala de juntas estéril. Nació en un momento de compasión.',
      'Todo empezó cuando nuestro fundador y CTO, <strong class="story-highlight">Jhon Garces Montes</strong>, notó que la perra de su vecino, <strong class="story-highlight">Blakie</strong>, vivía en condiciones difíciles. No pudo simplemente alejarse. Jhon rescató a Blakie y la llevó a casa, abriéndole la puerta a una nueva familia y a una verdadera segunda oportunidad.',
      'Blakie encontró rápido su lugar junto a <strong class="story-highlight">Luna</strong>, una perra con mucha alma, y <strong class="story-highlight">Tom</strong>, un gato seguro de sí mismo. Distintas especies, la misma manada. Desde ese día, los tres son inseparables: juegan, comen y duermen lado a lado.',
      'Blakie Labs es un tributo a ese espíritu: <strong class="story-highlight">resiliencia</strong>, <strong class="story-highlight">lealtad</strong> y los lazos elegidos que nos hacen más fuertes.'
    ],
    storyCopy: {
      tag: "[ RESCATE - FAMILIA - LEALTAD ]",
      title: "Un nombre con dientes, corazón y memoria.",
      paras: [
        'La marca carga esa historia porque el trabajo que queremos hacer tiene la misma forma: <strong class="story-highlight">proteger lo que importa</strong>, <strong class="story-highlight">movernos con urgencia</strong> y mantenernos <strong class="story-highlight">leales</strong> con quienes nos confían cosas importantes.',
        '<strong class="story-highlight">Blakie</strong> no es solo una mascota. Es un recordatorio de que los buenos sistemas, como los buenos hogares, se construyen con <strong class="story-highlight">cuidado</strong>, <strong class="story-highlight">consistencia</strong> y la decisión de hacerse responsable cuando algo necesita ayuda.'
      ]
    },
    stickerWallAria: "Muro de stickers de Blakie Labs",
    stickerAlts: {
      gears: "Sticker de engranajes de Blakie",
      exe: "Sticker del ejecutable de Blakie",
      paw: "Sticker de pata negra"
    },
    gallery: {
      title: "De rescate a manada.",
      sub: "[ MOMENTOS QUE CONSTRUYERON EL NOMBRE ]"
    },
    photoBadge: "MEMORIA DE LA MANADA",
    moments: [
      {
        label: "01",
        title: "El día en que todo cambió",
        caption: "El comienzo de la segunda oportunidad de Blakie: un rescate que se volvió una promesa de proteger lo que importa.",
        sticker: "/stikers/blakie-code-tag.svg",
        stickerWidth: 218,
        stickerHeight: 155
      },
      {
        label: "02",
        title: "Conocer a Luna y a Tom",
        caption: "El primer capítulo de una manada elegida: dos perros, un gato y un hogar que les hizo espacio a los tres.",
        sticker: "/stikers/geometric-paw-green.svg",
        stickerWidth: 294,
        stickerHeight: 294
      },
      {
        label: "03",
        title: "El trío inseparable",
        caption: "El ritmo que se quedó: jugar, comer y dormir lado a lado como si siempre hubieran pertenecido juntos.",
        sticker: "/stikers/blakie-exe.svg",
        stickerWidth: 311,
        stickerHeight: 100
      }
    ],
    prevAria: "Imagen anterior de la historia",
    nextAria: "Imagen siguiente de la historia",
    dotsAria: "Controles de imágenes de la historia",
    showPrefix: "Mostrar ",
    packAria: "La manada familiar de Blakie",
    pets: [
      { name: "Blakie", role: "La rescatada", note: "La que le da nombre al lab: leal, alerta e imposible de ignorar." },
      { name: "Luna", role: "La compañera", note: "La perra que ayudó a convertir el rescate en rutina, juego y pertenencia." },
      { name: "Tom", role: "El gato", note: "La prueba de que la manada nunca fue cuestión de especie. Era cuestión de familia." }
    ],
    closing: {
      text: "Ese es el espíritu detrás del nombre: una manada pequeña, ferozmente leal, que construye cosas con cuidado y con mordida.",
      cta: "Envíanos un brief →"
    }
  },

  plans: {
    kicker: "// PLANES DE RETAINER",
    title: "Reserva un cupo en la manada.",
    intro: "Ingeniería senior bajo demanda, facturada mes a mes. Sin SOWs, sin change orders, solo velocidad. Pausa o escala cuando quieras.",
    availability: "2 cupos abiertos / Q3 2026",
    mostPopular: "MÁS POPULAR",
    claimSlot: "Reservar este cupo →",
    items: [
      {
        name: "Scout",
        tagline: "Potencia senior a tiempo parcial",
        price: "$8.5k",
        period: "/ mes",
        features: ["Un ingeniero senior", "~20 hrs / semana", "Updates asíncronos y llamada semanal", "Pausa o cancela cuando quieras"]
      },
      {
        name: "Pack",
        tagline: "Tu equipo de construcción central",
        price: "$18k",
        period: "/ mes",
        features: ["Dos ingenieros senior", "Full-stack e infra", "Slack prioritario y llamadas de velocidad", "Pausa o escala mes a mes"],
        popular: true
      },
      {
        name: "Alpha",
        tagline: "Escuadrón dedicado",
        price: "A medida",
        period: "",
        features: ["Escuadrón completo y líder de arquitectura", "Propiedad dedicada del roadmap", "Opciones de on-call y SLA", "Revisiones de estrategia trimestrales"]
      }
    ],
    howTitle: "Cómo funciona el retainer.",
    howSub: "[ SIN CAJA NEGRA ]",
    howItWorks: [
      { num: "01", title: "Envía el brief", body: "Cuéntanos tu idea o roadmap. Respondemos en menos de 24 horas, sin laberinto de ventas." },
      { num: "02", title: "Reserva un cupo", body: "Bloqueamos tu cupo en la manada y arrancamos en días, no en semanas." },
      { num: "03", title: "Entrega semanal", body: "Sale producción cada semana. Pausa o escala tu cupo mes a mes." }
    ],
    faqTitle: "FAQ del retainer.",
    faqSub: "[ LA LETRA PEQUEÑA ]",
    faqs: [
      { q: "¿Puedo pausar mi retainer?", a: "Sí. Pausa o escala tu cupo mes a mes sin permanencia ni penalización. Te guardamos el cupo 30 días cuando lo pausas." },
      { q: "¿De quién es el código?", a: "Tuyo, 100%. Todo lo que escribimos vive en tus repos y es tuyo desde el día uno." },
      { q: "¿Qué tan rápido podemos empezar?", a: "Días, no semanas. Una vez reservado el cupo arrancamos con una llamada de roadmap y entregamos dentro de la primera semana." },
      { q: "Solo necesito un proyecto puntual.", a: "Elige Arquitectura a medida en el formulario y dimensionamos un compromiso fijo en vez de un retainer mensual." },
      { q: "¿Firman NDAs?", a: "Siempre, antes de la primera conversación real si lo necesitas." }
    ]
  },

  contact: {
    kicker: "// INGRESO DE RETAINER",
    title: "Construyamos algo en lo que valga la pena hincar el diente.",
    intro: "Cuéntanos en qué estás trabajando. Respondemos cada brief en menos de 24 horas.",
    legend: "¿QUÉ TE TRAE POR AQUÍ?",
    choices: [
      { value: "retainer", num: "[01]", label: "Alianza de retainer mensual" },
      { value: "architecture", num: "[02]", label: "Arquitectura a medida" },
      { value: "hi", num: "[03]", label: "Solo saludar" }
    ],
    fields: {
      name: { label: "NOMBRE", placeholder: "Juana Pérez" },
      company: { label: "EMPRESA", placeholder: "Acme Inc." },
      email: { label: "CORREO", placeholder: "juana@acme.com" },
      brief: { label: "EL BRIEF / LA IDEA", placeholder: "¿Qué estás construyendo? ¿Cuál es el plazo?" }
    },
    submit: "Transmitir brief →",
    successTitle: "Brief recibido. Blakie ya está en eso.",
    successBody: "Te traemos una respuesta en menos de 24 horas.",
    sendAnother: "Enviar otro →"
  }
};
