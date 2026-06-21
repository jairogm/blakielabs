// English dictionary. Non-translatable keys (slug, statusClass, iconClass,
// stack, image, accent, num, price, sticker dims) are shared verbatim with es.js.
export default {
  skipToContent: "Skip to content",

  meta: {
    home: {
      title: "Blakie Labs | Senior Software Studio and Product Lab",
      description:
        "Blakie Labs builds high-performance software for clients and incubates sharp digital products with a senior-only engineering team."
    },
    work: {
      title: "Work | Blakie Labs",
      description:
        "Explore Blakie Labs client systems and product work, from event-driven platforms to privacy-first apps and realtime dashboards."
    },
    about: {
      title: "About | Blakie Labs",
      description:
        "Meet Blakie Labs: a small senior engineering team focused on extreme quality, fast execution, and software built to last."
    },
    whyBlakie: {
      title: "Why Blakie? | Blakie Labs",
      description:
        "The story behind the Blakie Labs name: a rescued dog, a founder who brought her home, and the family that shaped the brand."
    },
    plans: {
      title: "Retainer Plans | Blakie Labs",
      description:
        "Reserve a Blakie Labs senior engineering slot for full-stack architecture, rapid MVP builds, and production software delivery."
    },
    contact: {
      title: "Contact | Blakie Labs",
      description:
        "Send Blakie Labs your product brief, retainer request, or architecture challenge. The team replies within 24 hours."
    }
  },

  nav: {
    links: { work: "Work", about: "About", plans: "Plans", contact: "Contact" },
    cta: "Hire the Lab →",
    homeAria: "Blakie Labs home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
    switcherAria: "Language"
  },

  footer: {
    line: "© {year} - built with teeth."
  },

  newsletter: {
    title: "Follow the lab.",
    body: "New apps, build logs, and the occasional dog photo. No spam, ever.",
    emailLabel: "Email address",
    placeholder: "you@studio.com",
    submit: "Subscribe",
    success: "You're in the pack."
  },

  home: {
    eyebrow: "DUAL-ENGINE DIGITAL STUDIO",
    titleLead: "We build software that ",
    titleAccent: "bites.",
    intro:
      "Blakie Labs is a dual-engine digital studio. We ship high-performance software for global clients and incubate our own suite of digital applications.",
    ctaPrimary: "Hire the Lab",
    ctaPrimaryNote: "[Retainer Plans]",
    ctaGhost: "Explore Our Apps →",
    heroCardAria: "Blakie Labs mark",
    heroCaption: "// blakie.exe - loyal by design",
    modelTitle: "Two engines. One pack.",
    modelSub: "[ THE AGENCY ] x [ THE LAB ]",
    agency: {
      kicker: "01 - THE AGENCY",
      title: "Dedicated velocity, on retainer.",
      body: "High-end monthly engineering retainers. Full-stack architecture, rapid MVPs, and a senior pack shipping production code on your roadmap.",
      points: [
        "Senior-only engineering pack",
        "Full-stack architecture and infra",
        "Rapid MVPs in weeks, not quarters",
        "Pause or scale your slot monthly"
      ],
      link: "View retainer plans"
    },
    lab: {
      kicker: "02 - THE LAB",
      title: "Apps we ship for ourselves.",
      body: "A growing suite of proprietary SaaS, built in the open. Some live, some incubating in the kennel.",
      link: "Browse all products"
    },
    labPreview: [
      { name: "Fetchly", initial: "F", status: "Live", statusClass: "live", iconClass: "accent" },
      { name: "Tracewell", initial: "T", status: "In Beta", statusClass: "beta", iconClass: "quiet" },
      { name: "Kennel", initial: "K", status: "Live", statusClass: "live", iconClass: "quiet" },
      { name: "Sniff", initial: "S", status: "In Beta", statusClass: "beta", iconClass: "accent" }
    ],
    stats: [
      { num: "6", label: "PRODUCTS SHIPPED" },
      { num: "12+", label: "CLIENT SYSTEMS" },
      { num: "24h", label: "BRIEF RESPONSE" },
      { num: "100%", label: "SENIOR ENGINEERS" }
    ],
    proof: {
      kicker: "TRUSTED BY TEAMS THAT SHIP",
      logosAria: "Client logos",
      clientLogos: ["Meridian", "Northwind", "Atlas Health", "Volt", "Halcyon", "Driftwell"]
    },
    testimonials: [
      {
        quote: "Blakie shipped in six weeks what our last vendor could not in a year, and the code is immaculate.",
        name: "VP Engineering",
        org: "Meridian Freight",
        image: "/testimonials/meridian-vp.webp"
      },
      {
        quote: "They treated our product like their own. Zero hand-holding, all signal, every single week.",
        name: "CTO",
        org: "Northwind Capital",
        image: "/testimonials/northwind-cto.webp"
      }
    ]
  },

  work: {
    kicker: "// PORTFOLIO AND PRODUCTS",
    title: "The Work.",
    tablistAria: "Work views",
    tabClients: "Client Systems",
    tabProducts: "Our Products",
    viewCaseStudy: "View case study",
    clients: [
      {
        name: "Meridian Freight",
        sector: "LOGISTICS",
        tag: "Architecture",
        desc: "Rebuilt the dispatch engine from a creaking monolith into an event-driven system.",
        metric: "4x",
        metricLabel: "throughput",
        metric2: "-62%",
        metric2Label: "latency"
      },
      {
        name: "Northwind Capital",
        sector: "FINTECH",
        tag: "Realtime",
        desc: "A realtime trading dashboard streaming portfolio state at sub-100ms.",
        metric: "<100ms",
        metricLabel: "tick-to-render",
        metric2: "99.99%",
        metric2Label: "uptime"
      },
      {
        name: "Atlas Health",
        sector: "HEALTHCARE",
        tag: "Migration",
        desc: "HIPAA-grade patient portal, migrated live with zero downtime over a weekend.",
        metric: "0",
        metricLabel: "downtime",
        metric2: "1.2M",
        metric2Label: "records moved"
      },
      {
        name: "Volt Mobility",
        sector: "MOBILITY",
        tag: "Scale",
        desc: "EV charging network app scaled from prototype to a national rollout.",
        metric: "200k",
        metricLabel: "monthly actives",
        metric2: "38",
        metric2Label: "states live"
      }
    ]
  },

  products: [
    {
      slug: "fetchly",
      name: "Fetchly",
      initial: "F",
      status: "Live",
      statusClass: "live",
      iconClass: "accent",
      desc: "AI changelog and release-note generator. Ships notes your users actually read.",
      cta: "Open app",
      detail: {
        tagline: "Turn raw commits into release notes humans actually want to read.",
        problem: "Teams ship constantly but changelogs rot. Users miss what shipped and support fields the same questions over and over.",
        build: [
          "LLM pipeline that summarizes merged PRs into plain-English notes",
          "One-click publish to a hosted, themeable changelog",
          "Slack and email digests on every release"
        ],
        stack: ["TypeScript", "Next.js", "Postgres", "OpenAI"]
      }
    },
    {
      slug: "tracewell",
      name: "Tracewell",
      initial: "T",
      status: "In Beta",
      statusClass: "beta",
      iconClass: "quiet",
      desc: "Self-hosted error tracking with zero bloat and full data ownership.",
      cta: "Join beta",
      detail: {
        tagline: "Error tracking you actually own: self-hosted, lightweight, yours.",
        problem: "Hosted error tools are pricey, send stack traces to someone else's cloud, and bury signal under noise.",
        build: [
          "Single-binary deploy on your own infra",
          "Smart grouping that collapses duplicate noise",
          "Source-map support with sub-second ingest"
        ],
        stack: ["Rust", "ClickHouse", "Astro", "Docker"]
      }
    },
    {
      slug: "kennel",
      name: "Kennel",
      initial: "K",
      status: "Live",
      statusClass: "live",
      iconClass: "quiet",
      desc: "Deploy and manage all your side projects from a single dashboard.",
      cta: "Open app",
      detail: {
        tagline: "Every side project, one dashboard: deploy, monitor, and forget the YAML.",
        problem: "Indie builders run tiny apps across too many hosts and lose track of what is live, what is costing money, and what is down.",
        build: [
          "Unified deploy panel across providers",
          "Cost and uptime at a glance per project",
          "Auto-sleep for idle apps to cut spend"
        ],
        stack: ["Go", "Svelte", "Postgres", "Fly.io"]
      }
    },
    {
      slug: "sniff",
      name: "Sniff",
      initial: "S",
      status: "In Beta",
      statusClass: "beta",
      iconClass: "accent",
      desc: "Privacy-first product analytics. Cookieless, lightweight, honest.",
      cta: "Join beta",
      detail: {
        tagline: "Product analytics that respect your users: cookieless and honest.",
        problem: "Most analytics are bloated and need a cookie banner. You want the numbers without selling out your users.",
        build: [
          "Cookieless, GDPR-clean event tracking",
          "Sub-2kb script with no performance drag",
          "Funnels and retention without surveillance"
        ],
        stack: ["Elixir", "ClickHouse", "Astro", "Phoenix"]
      }
    },
    {
      slug: "boneyard",
      name: "Boneyard",
      initial: "B",
      status: "In Incubator",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "A code-snippet vault with semantic search across your whole stack.",
      cta: "Get notified",
      detail: {
        tagline: "Your team's code memory: every snippet, semantically searchable.",
        problem: "The fix from six months ago is buried in a thread. Tribal knowledge walks out the door with every departure.",
        build: [
          "Semantic search across snippets and gists",
          "Editor and CLI capture in one keystroke",
          "Team libraries with access control"
        ],
        stack: ["Python", "pgvector", "Astro", "Tauri"]
      }
    },
    {
      slug: "howl",
      name: "Howl",
      initial: "H",
      status: "In Incubator",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "Realtime status pages that load fast, theme cleanly, and embed anywhere.",
      cta: "Get notified",
      detail: {
        tagline: "Status pages that load instantly and feel like part of your product.",
        problem: "Status pages are slow, generic, and live on someone else's subdomain. When things are down, the page has to be clear.",
        build: [
          "Edge-rendered pages that load in under 100ms",
          "Fully themeable and embeddable widget",
          "Auto-incident detection from your monitors"
        ],
        stack: ["TypeScript", "Workers", "Astro", "Durable Objects"]
      }
    }
  ],

  modal: {
    problem: "THE PROBLEM",
    built: "WHAT WE BUILT",
    stack: "STACK",
    closeAria: "Close product case study",
    ctaDefault: "Open app →"
  },

  about: {
    kicker: "// THE MANIFEST",
    title: "Legendary code, or nothing at all.",
    lead1: "We are a small pack of senior engineers who refuse to ship mediocre work. Extreme quality, ruthless agility, and a standing habit of moving out of the comfort zone to build things that outlast their hype cycle.",
    lead2: "No bloated teams. No hand-offs to junior devs. The people you talk to are the people writing the code.",
    ethos: [
      { num: "A1", title: "Extreme quality", body: "We sweat the edge cases nobody sees until they break in production." },
      { num: "A2", title: "Ruthless agility", body: "Small team, no bureaucracy. We move at the speed of a decision." },
      { num: "A3", title: "Out of comfort", body: "We choose hard architecture when it earns its keep over five years." }
    ],
    origin: {
      label: 'ORIGIN - WHY "BLAKIE"',
      headingHtml:
        'Named after our favorite black dog, Blakie Labs embodies <span>loyalty, high speed, and protective execution</span> over the codebases we build.',
      cta: "Learn more →"
    },
    teamTitle: "Meet the pack.",
    teamSub: "[ THE PEOPLE WRITING THE CODE ]",
    team: [
      { initial: "J", name: "Jhon Garces Montes", role: "Founder & CTO", image: "/team/jhon-garces-montes.webp", imageAlt: "Portrait of Jhon Garces Montes", accent: true },
      { initial: "L", name: "Lena Okafor", role: "Staff Full-Stack", image: "/team/lena-okafor.webp", imageAlt: "Portrait of Lena Okafor" },
      { initial: "D", name: "Dane Park", role: "Infra and Platform", image: "/team/dane-park.webp", imageAlt: "Portrait of Dane Park" },
      { initial: "S", name: "Sofia Cruz", role: "Design Engineer", image: "/team/sofia-cruz.webp", imageAlt: "Portrait of Sofia Cruz" }
    ]
  },

  whyBlakie: {
    back: "Back to about",
    kicker: "// ORIGIN STORY",
    title: "Why Blakie?",
    intro: [
      '<strong class="story-highlight">Blakie Labs</strong> was not named in a sterile boardroom. It was named in a moment of compassion.',
      'It began when our founder and CTO, <strong class="story-highlight">Jhon Garces Montes</strong>, noticed his neighbor\'s dog, <strong class="story-highlight">Blakie</strong>, living in difficult conditions. He could not walk away. Jhon rescued Blakie and brought her home, opening the door to a new family and a true second chance.',
      'Blakie quickly found her place beside <strong class="story-highlight">Luna</strong>, a soulful dog, and <strong class="story-highlight">Tom</strong>, a confident cat. Different species, same pack. Since that day, the three have been inseparable: playing, eating, and sleeping side by side.',
      'Blakie Labs is a tribute to that spirit: <strong class="story-highlight">resilience</strong>, <strong class="story-highlight">loyalty</strong>, and the chosen bonds that make us stronger.'
    ],
    storyCopy: {
      tag: "[ RESCUE - FAMILY - LOYALTY ]",
      title: "A name with teeth, heart, and memory.",
      paras: [
        'The brand carries that story because the work we want to do has the same shape: <strong class="story-highlight">protect what matters</strong>, <strong class="story-highlight">move with urgency</strong>, and stay <strong class="story-highlight">loyal</strong> to the people who trust us with important things.',
        '<strong class="story-highlight">Blakie</strong> is not just a mascot. She is a reminder that good systems, like good homes, are built through <strong class="story-highlight">care</strong>, <strong class="story-highlight">consistency</strong>, and the decision to take responsibility when something needs help.'
      ]
    },
    stickerWallAria: "Blakie Labs sticker wall",
    stickerAlts: {
      gears: "Blakie gears sticker",
      exe: "Blakie executable sticker",
      paw: "Black paw sticker"
    },
    gallery: {
      title: "From rescue to pack.",
      sub: "[ MOMENTS THAT BUILT THE NAME ]"
    },
    photoBadge: "PACK MEMORY",
    moments: [
      {
        label: "01",
        title: "The day everything changed",
        caption: "The beginning of Blakie's second chance: a rescue that became a promise to protect what matters.",
        sticker: "/stikers/blakie-code-tag.svg",
        stickerWidth: 218,
        stickerHeight: 155
      },
      {
        label: "02",
        title: "Meeting Luna and Tom",
        caption: "The first chapter of a chosen pack: two dogs, one cat, and a home that made room for all three.",
        sticker: "/stikers/geometric-paw-green.svg",
        stickerWidth: 294,
        stickerHeight: 294
      },
      {
        label: "03",
        title: "The inseparable trio",
        caption: "The rhythm that stayed: playing, eating, and sleeping side by side like they had always belonged together.",
        sticker: "/stikers/blakie-exe.svg",
        stickerWidth: 311,
        stickerHeight: 100
      }
    ],
    prevAria: "Previous story image",
    nextAria: "Next story image",
    dotsAria: "Story image controls",
    showPrefix: "Show ",
    packAria: "The Blakie family pack",
    pets: [
      { name: "Blakie", role: "The rescued one", note: "The namesake of the lab: loyal, alert, and impossible to ignore." },
      { name: "Luna", role: "The companion", note: "The dog who helped turn rescue into routine, play, and belonging." },
      { name: "Tom", role: "The cat", note: "Proof that the pack was never about species. It was about family." }
    ],
    closing: {
      text: "That is the spirit behind the name: a small pack, fiercely loyal, building things with care and bite.",
      cta: "Send us a brief →"
    }
  },

  plans: {
    kicker: "// RETAINER PLANS",
    title: "Reserve a pack slot.",
    intro: "Senior engineering on tap, billed monthly. No SOWs, no change orders, just velocity. Pause or scale anytime.",
    availability: "2 slots open / Q3 2026",
    mostPopular: "MOST POPULAR",
    claimSlot: "Claim this slot →",
    items: [
      {
        name: "Scout",
        tagline: "Part-time senior firepower",
        price: "$8.5k",
        period: "/ month",
        features: ["One senior engineer", "~20 hrs / week", "Async updates and weekly call", "Pause or cancel anytime"]
      },
      {
        name: "Pack",
        tagline: "Your core build team",
        price: "$18k",
        period: "/ month",
        features: ["Two senior engineers", "Full-stack and infra", "Priority Slack and velocity calls", "Pause or scale monthly"],
        popular: true
      },
      {
        name: "Alpha",
        tagline: "Dedicated squad",
        price: "Custom",
        period: "",
        features: ["Full squad and architecture lead", "Dedicated roadmap ownership", "On-call and SLA options", "Quarterly strategy reviews"]
      }
    ],
    howTitle: "How the retainer works.",
    howSub: "[ NO BLACK BOX ]",
    howItWorks: [
      { num: "01", title: "Send the brief", body: "Tell us your idea or roadmap. We reply within 24 hours, no sales maze." },
      { num: "02", title: "Reserve a slot", body: "We lock in your pack slot and kick off in days, not weeks." },
      { num: "03", title: "Ship weekly", body: "Production drops every week. Pause or scale your slot month to month." }
    ],
    faqTitle: "Retainer FAQ.",
    faqSub: "[ THE FINE PRINT ]",
    faqs: [
      { q: "Can I pause my retainer?", a: "Yes. Pause or scale your slot month to month with no lock-in and no penalty. We hold your slot for 30 days when paused." },
      { q: "Who owns the code?", a: "You do, 100%. Everything we write lives in your repos and is yours from day one." },
      { q: "How fast can we start?", a: "Days, not weeks. Once a slot is reserved we kick off with a roadmap call and ship inside the first week." },
      { q: "I only need a one-off build.", a: "Pick Custom Architecture on the intake form and we will scope a fixed engagement instead of a monthly retainer." },
      { q: "Do you sign NDAs?", a: "Always, before the first real conversation if you need it." }
    ]
  },

  contact: {
    kicker: "// RETAINER INTAKE",
    title: "Let's build something worth biting into.",
    intro: "Tell us what you are working on. We reply to every brief within 24 hours.",
    legend: "WHAT BRINGS YOU HERE?",
    choices: [
      { value: "retainer", num: "[01]", label: "Monthly Retainer Partnership" },
      { value: "architecture", num: "[02]", label: "Custom Architecture" },
      { value: "hi", num: "[03]", label: "Just Saying Hi" }
    ],
    fields: {
      name: { label: "NAME", placeholder: "Jane Doe" },
      company: { label: "COMPANY", placeholder: "Acme Inc." },
      email: { label: "EMAIL", placeholder: "jane@acme.com" },
      brief: { label: "THE BRIEF / IDEA", placeholder: "What are you building? What's the timeline?" }
    },
    submit: "Transmit Brief →",
    successTitle: "Brief received. Blakie's on it.",
    successBody: "We will fetch you a reply within 24 hours.",
    sendAnother: "Send another →"
  }
};
