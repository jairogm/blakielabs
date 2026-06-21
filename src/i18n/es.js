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
    line: "© {year} - hecho con dientes y corazón."
  },

  socials: {
    aria: "Enlaces sociales"
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
      body: "Una suite enfocada de productos creados por Blakie para equipos que sí envían: release notes, observabilidad, ops, analítica, conocimiento y entrega a clientes.",
      link: "Ver todos los productos"
    },
    labPreview: [
      { slug: "shipbite", name: "Shipbite", initial: "S", status: "Beta privada", statusClass: "beta", iconClass: "accent" },
      { slug: "tracewell", name: "Tracewell", initial: "T", status: "Prototipo", statusClass: "incubator", iconClass: "quiet" },
      { slug: "kennel", name: "Kennel", initial: "K", status: "Demo en vivo", statusClass: "live", iconClass: "quiet" },
      { slug: "packdesk", name: "Packdesk", initial: "P", status: "Alfa", statusClass: "beta", iconClass: "accent" }
    ],
    stats: [
      { num: "6", label: "PRODUCTOS EN EL LAB" },
      { num: "12+", label: "SISTEMAS DE CLIENTES" },
      { num: "24h", label: "RESPUESTA AL BRIEF" },
      { num: "100%", label: "INGENIEROS SENIOR" }
    ],
    proof: {
      kicker: "LO USAN EQUIPOS QUE SÍ ENVÍAN",
      logosAria: "Logos de clientes",
      clientLogos: ["CargoNest", "Northstar", "CuraGrid", "Voltway", "Fieldkit", "BrightOps"]
    },
    // Testimonios ficticios para la presentación universitaria.
    testimonials: [
      {
        quote: "Blakie convirtió una idea de despacho desordenada en una demo de producto que se sintió lista para producción en semanas.",
        name: "VP de Ingeniería",
        org: "CargoNest Logistics",
        image: "/testimonials/meridian-vp.webp"
      },
      {
        quote: "La arquitectura, el handoff y el criterio de producto se sintieron como si hubiéramos tenido un equipo senior integrado desde el primer día.",
        name: "CTO",
        org: "Northstar Capital",
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
    // Clientes ficticios para la presentación universitaria.
    clients: [
      {
        name: "CargoNest Logistics",
        sector: "LOGÍSTICA",
        tag: "Torre de control",
        desc: "Diseñamos una consola de despacho orientada a eventos que convierte el caos de envíos en estado operativo en vivo.",
        metric: "3.8x",
        metricLabel: "planificación más rápida",
        metric2: "-54%",
        metric2Label: "actualizaciones manuales"
      },
      {
        name: "Northstar Capital",
        sector: "FINTECH",
        tag: "Tiempo real",
        desc: "Modelamos un cockpit de portafolio en tiempo real con posiciones en streaming, bandas de riesgo e historial de eventos auditable.",
        metric: "<100ms",
        metricLabel: "actualización de estado",
        metric2: "99.99%",
        metric2Label: "uptime objetivo"
      },
      {
        name: "CuraGrid Clinics",
        sector: "SALUD",
        tag: "Flujo de pacientes",
        desc: "Mapeamos un portal seguro de intake y triage que enruta pacientes, notas y seguimientos sin deriva de hojas de cálculo.",
        metric: "42%",
        metricLabel: "menos tiempo administrativo",
        metric2: "0",
        metric2Label: "handoffs perdidos"
      },
      {
        name: "Voltway Mobility",
        sector: "MOVILIDAD",
        tag: "Operación de flotas",
        desc: "Prototipamos una capa operativa para carga EV con salud de estaciones, presión de filas y rutas para técnicos de campo.",
        metric: "18k",
        metricLabel: "estaciones modeladas",
        metric2: "31",
        metric2Label: "regiones planificadas"
      }
    ]
  },

  products: [
    {
      slug: "shipbite",
      name: "Shipbite",
      initial: "S",
      status: "Beta privada",
      statusClass: "beta",
      iconClass: "accent",
      desc: "Release notes y changelogs con IA que convierten commits desordenados en updates listos para clientes.",
      cta: "Ver prototipo",
      detail: {
        tagline: "Release notes que suenan a producto, no a diff de git.",
        problem: "Los equipos envían cada semana, pero la comunicación de lanzamientos queda atrapada en commits, tickets de Linear y conversaciones de Slack. Los usuarios no ven el valor y soporte repite las mismas explicaciones.",
        build: [
          "Ingesta de PRs, Linear y Jira que agrupa trabajo en temas claros para clientes",
          "Controles de tono para updates de founders, changelogs SaaS y release notes enterprise",
          "Página de changelog embebible con publicación a Slack, email y webhooks"
        ],
        stack: ["TypeScript", "Astro", "Postgres", "OpenAI", "Resend"]
      }
    },
    {
      slug: "tracewell",
      name: "Tracewell",
      initial: "T",
      status: "Prototipo",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "Error tracking self-hosted para equipos que quieren observabilidad sin entregar sus stack traces.",
      cta: "Solicitar acceso",
      detail: {
        tagline: "Sé dueño de tus errores, stack traces y señal de incidentes.",
        problem: "Las herramientas alojadas se vuelven caras rápido, mandan stack traces sensibles a otra nube y obligan a equipos pequeños a pelear con dashboards ruidosos antes de arreglar el bug real.",
        build: [
          "Deploy single-tenant con retención por proyecto y controles de datos",
          "Fingerprinting que agrupa errores ruidosos sin esconder regresiones",
          "Carga de source maps, tracking de releases y enrutamiento de incidentes a Slack"
        ],
        stack: ["Rust", "ClickHouse", "Astro", "Docker", "Workers"]
      }
    },
    {
      slug: "kennel",
      name: "Kennel",
      initial: "K",
      status: "Demo en vivo",
      statusClass: "live",
      iconClass: "quiet",
      desc: "Un centro de comando para builders indie que tienen demasiadas apps en demasiados proveedores.",
      cta: "Abrir demo",
      detail: {
        tagline: "Cada side project, un cockpit limpio.",
        problem: "Los builders indie reparten proyectos entre Vercel, Fly, Render, Railway y VPS viejos. Los costos se mueven, el uptime se vuelve borroso y las variables de entorno se convierten en arqueología.",
        build: [
          "Inventario de proveedores con salud, estado de deploy, costo y drift de entornos",
          "Mapa de proyectos en una pantalla que marca apps abandonadas, caídas o fuera de presupuesto",
          "Recomendaciones de auto-sleep y checklist de lanzamiento para SaaS pequeños"
        ],
        stack: ["Go", "SvelteKit", "Postgres", "Fly.io", "Vercel"]
      }
    },
    {
      slug: "sniff",
      name: "Sniff",
      initial: "S",
      status: "En diseño",
      statusClass: "incubator",
      iconClass: "accent",
      desc: "Analítica de producto privacy-first para founders que quieren señal sin vigilancia.",
      cta: "Ver concepto",
      detail: {
        tagline: "Funnels y retención sin impuesto de vigilancia.",
        problem: "La mayoría de herramientas de analítica son pesadas, dependen de cookies y traen carga de compliance antes de que un founder sepa qué medir. Los equipos pequeños necesitan señal sin tracking invasivo.",
        build: [
          "Modelo de eventos sin cookies con journeys anónimos y sin tracking entre sitios",
          "Script de tracking menor a 2kb diseñado para marketing y superficies de app rápidas",
          "Dashboards simples para activación, retención, funnels e impacto de releases"
        ],
        stack: ["Elixir", "Phoenix", "ClickHouse", "Astro", "Edge"]
      }
    },
    {
      slug: "boneyard",
      name: "Boneyard",
      initial: "B",
      status: "Incubando",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "Una bóveda de memoria de código para fixes, snippets, decisiones y patrones que tu equipo reaprende.",
      cta: "Unirme a la lista",
      detail: {
        tagline: "Deja de resolver el mismo problema de ingeniería dos veces.",
        problem: "El fix de hace seis meses está enterrado en Slack, un comentario de PR, un gist o la memoria de un ingeniero. Los equipos reaprenden los mismos detalles de implementación.",
        build: [
          "Bóveda semántica para snippets, decisiones de arquitectura, fixes de incidentes y gotchas",
          "Flujos de captura desde editor, navegador y CLI con tagging que no se siente como documentación",
          "Espacios de equipo con control de acceso, estados de revisión y recetas reutilizables"
        ],
        stack: ["Python", "FastAPI", "pgvector", "Tauri", "Astro"]
      }
    },
    {
      slug: "packdesk",
      name: "Packdesk",
      initial: "P",
      status: "Alfa",
      statusClass: "beta",
      iconClass: "quiet",
      desc: "Un portal para retainers senior: briefs, aprobaciones, roadmap, velocidad y recibos de entrega.",
      cta: "Ver alfa",
      detail: {
        tagline: "El sistema operativo para retainers de software de alta confianza.",
        problem: "El trabajo de agencia se dispersa entre llamadas, Slack, facturas y updates de estado. Los clientes necesitan un lugar para ver decisiones, progreso, riesgos y lo que ya salió.",
        build: [
          "Intake de briefs, decision logs, notas semanales de envío y checkpoints de aprobación en un solo espacio",
          "Roadmap conectado a entregables, links de demo, facturas y riesgos abiertos",
          "Recibos de velocidad que muestran qué salió, qué cambió y qué necesita una decisión del founder"
        ],
        stack: ["TypeScript", "Astro", "Postgres", "Stripe", "Resend"]
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
      { initial: "E", name: "Edwin Barraza", role: "Especialista Full-Cycle en Ventas B2B", image: "/team/edwin-barraza.webp", imageAlt: "Retrato de Edwin Barraza" },
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
        price: "$5.5k",
        period: "/ mes",
        features: ["Un ingeniero senior", "~40 hrs / semana", "Updates asíncronos y llamada semanal", "Pausa o cancela cuando quieras"]
      },
      {
        name: "Pack",
        tagline: "Tu equipo de construcción central",
        price: "$9.5k",
        period: "/ mes",
        features: ["Dos ingenieros senior", "~80 hrs / semana combinadas", "Full-stack e infra", "Pausa o escala mes a mes"],
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
