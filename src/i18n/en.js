// English dictionary. Non-translatable keys (slug, statusClass, iconClass,
// stack, image, accent, num, price, sticker dims) are shared verbatim with es.js.
export default {
  skipToContent: "Skip to content",

  meta: {
    home: {
      title: "Blakie Labs | Senior Software Studio and Product Lab",
      description:
        "Blakie Labs builds senior-led software systems, incubates early lab products, and opens a small number of founding client slots."
    },
    work: {
      title: "Work | Blakie Labs",
      description:
        "Explore Blakie Labs system concepts and early lab products, from event-driven platforms to privacy-first apps and founder tools."
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

  socials: {
    aria: "Social links"
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
      "Blakie Labs is a new senior-led software studio and product lab. We build serious systems for founding clients while incubating our own suite of digital products.",
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
      body: "Monthly engineering retainers for founding clients. Full-stack architecture, rapid MVPs, and a senior-led pack shipping production code on your roadmap.",
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
      body: "A focused suite of Blakie-built products for teams that ship: release notes, observability, ops, analytics, knowledge, and client delivery.",
      link: "Browse all products"
    },
    labPreview: [
      { slug: "shipbite", name: "Shipbite", initial: "S", status: "In Development", statusClass: "incubator", iconClass: "accent" },
      { slug: "tracewell", name: "Tracewell", initial: "T", status: "Prototype", statusClass: "incubator", iconClass: "quiet" },
      { slug: "kennel", name: "Kennel", initial: "K", status: "Internal Tool", statusClass: "beta", iconClass: "quiet" },
      { slug: "packdesk", name: "Packdesk", initial: "P", status: "In Development", statusClass: "incubator", iconClass: "accent" }
    ],
    stats: [
      { num: "6", label: "PRODUCTS IN THE LAB" },
      { num: "0", label: "FAKE LOGOS" },
      { num: "24h", label: "BRIEF RESPONSE" },
      { num: "2", label: "FOUNDING SLOTS" }
    ],
    proof: {
      kicker: "PROOF OF WORK, NOT BORROWED TRUST",
      label: "FOUNDER NOTE",
      title: "New studio. Real builders.",
      body: "Blakie Labs is early as a studio, so we are not filling the page with fictional client logos or borrowed testimonials. The proof here is the work: lab products in progress, founder-built systems, system concepts, and the way we communicate before, during, and after the build.",
      note: "We are opening a small number of founding client slots. If we earn your trust, it will be through the software we design, ship, and own with you.",
      points: [
        { title: "No fake logos", body: "When client proof appears here, it will be real, permissioned, and referenceable." },
        { title: "Lab products in progress", body: "Our product ideas are labeled honestly: prototype, incubating, internal tool, or in development." },
        { title: "Founding client slots", body: "Early partners get direct access to the core team and help shape the studio's operating rhythm." }
      ]
    }
  },

  work: {
    kicker: "// PROOF OF WORK",
    title: "The Work.",
    tablistAria: "Work views",
    tabClients: "System Concepts",
    tabProducts: "Lab Products",
    viewCaseStudy: "View build notes",
    clients: [
      {
        name: "Dispatch Control Tower",
        sector: "SYSTEM CONCEPT",
        tag: "Logistics Ops",
        desc: "A reference architecture for live shipment state, queue pressure, operator workflows, and event-driven dispatch decisions.",
        points: ["Event-driven state model", "Realtime operations console"]
      },
      {
        name: "Founder Analytics Stack",
        sector: "SYSTEM CONCEPT",
        tag: "Product Signal",
        desc: "A privacy-aware analytics starter for activation, retention, release impact, and founder-level product decisions.",
        points: ["Cookieless event model", "Activation and retention views"]
      },
      {
        name: "Client Delivery Portal",
        sector: "SYSTEM CONCEPT",
        tag: "Retainers",
        desc: "A Packdesk-style workspace for briefs, approvals, decision logs, roadmap visibility, and weekly delivery receipts.",
        points: ["Briefs and approvals", "Roadmap and delivery receipts"]
      },
      {
        name: "AI Release Engine",
        sector: "SYSTEM CONCEPT",
        tag: "Launch Ops",
        desc: "A Shipbite-style pipeline that turns PRs, tickets, and roadmap changes into customer-ready release communication.",
        points: ["PR and ticket ingestion", "Release notes and changelog publishing"]
      }
    ]
  },

  products: [
    {
      slug: "shipbite",
      name: "Shipbite",
      initial: "S",
      status: "In Development",
      statusClass: "incubator",
      iconClass: "accent",
      desc: "AI release notes and changelogs that turn messy commits into customer-ready product updates.",
      cta: "View prototype",
      detail: {
        tagline: "Release notes that sound like product, not a git diff.",
        problem: "Teams ship every week, but launch communication gets trapped in commits, Linear tickets, and Slack threads. Users miss value and support repeats the same explanations.",
        build: [
          "PR, Linear, and Jira ingestion that groups work into customer-facing themes",
          "Tone controls for founder updates, SaaS changelogs, and enterprise release notes",
          "Embeddable changelog page with Slack, email, and webhook publishing"
        ],
        stack: ["TypeScript", "Astro", "Postgres", "OpenAI", "Resend"]
      }
    },
    {
      slug: "tracewell",
      name: "Tracewell",
      initial: "T",
      status: "Prototype",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "Self-hosted error tracking for teams that want observability without surrendering stack traces.",
      cta: "Request access",
      detail: {
        tagline: "Own your errors, stack traces, and incident signal.",
        problem: "Hosted error tools get expensive fast, send sensitive stack traces to another cloud, and make small teams fight noisy dashboards before they can fix the actual bug.",
        build: [
          "Single-tenant deploy with project-level retention and data controls",
          "Fingerprinting that groups noisy errors without hiding regressions",
          "Source-map upload, release tracking, and Slack incident routing"
        ],
        stack: ["Rust", "ClickHouse", "Astro", "Docker", "Workers"]
      }
    },
    {
      slug: "kennel",
      name: "Kennel",
      initial: "K",
      status: "Internal Tool",
      statusClass: "beta",
      iconClass: "quiet",
      desc: "A command center for indie builders running too many apps across too many providers.",
      cta: "Open demo",
      detail: {
        tagline: "Every side project, one clean cockpit.",
        problem: "Indie builders spread projects across Vercel, Fly, Render, Railway, and old VPS boxes. Costs drift, uptime gets blurry, and environment variables become archaeology.",
        build: [
          "Provider inventory with health, deploy status, cost, and environment drift",
          "One-screen project map that flags abandoned, down, or over-budget apps",
          "Auto-sleep recommendations and launch checklist for small SaaS projects"
        ],
        stack: ["Go", "SvelteKit", "Postgres", "Fly.io", "Vercel"]
      }
    },
    {
      slug: "sniff",
      name: "Sniff",
      initial: "S",
      status: "Concept",
      statusClass: "incubator",
      iconClass: "accent",
      desc: "Privacy-first product analytics for founders who want signal without surveillance.",
      cta: "See concept",
      detail: {
        tagline: "Funnels and retention without a surveillance tax.",
        problem: "Most analytics tools are heavy, cookie-dependent, and compliance-heavy before a founder even knows what to measure. Small teams need signal without tracking creep.",
        build: [
          "Cookieless event model with anonymous journeys and no cross-site tracking",
          "Sub-2kb tracking script designed for fast marketing and app surfaces",
          "Simple dashboards for activation, retention, funnels, and release impact"
        ],
        stack: ["Elixir", "Phoenix", "ClickHouse", "Astro", "Edge"]
      }
    },
    {
      slug: "boneyard",
      name: "Boneyard",
      initial: "B",
      status: "Incubating",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "A code memory vault for fixes, snippets, decisions, and patterns your team keeps relearning.",
      cta: "Join waitlist",
      detail: {
        tagline: "Stop solving the same engineering problem twice.",
        problem: "The fix from six months ago is buried in Slack, a PR comment, a gist, or one engineer's memory. Teams keep relearning the same implementation details.",
        build: [
          "Semantic vault for snippets, architectural decisions, incident fixes, and gotchas",
          "Editor, browser, and CLI capture flows with tagging that does not feel like documentation",
          "Team spaces with access control, review states, and reusable implementation recipes"
        ],
        stack: ["Python", "FastAPI", "pgvector", "Tauri", "Astro"]
      }
    },
    {
      slug: "packdesk",
      name: "Packdesk",
      initial: "P",
      status: "In Development",
      statusClass: "incubator",
      iconClass: "quiet",
      desc: "A client portal for senior retainers: briefs, approvals, roadmap, velocity, and delivery receipts.",
      cta: "View alpha",
      detail: {
        tagline: "The operating system for high-trust software retainers.",
        problem: "Agency work gets scattered across calls, Slack threads, invoices, and status updates. Clients need one place to see decisions, progress, risks, and what shipped.",
        build: [
          "Brief intake, decision logs, weekly ship notes, and approval checkpoints in one client space",
          "Roadmap board tied to delivered artifacts, demo links, invoices, and open risks",
          "Velocity receipts that show what shipped, what changed, and what needs a founder decision"
        ],
        stack: ["TypeScript", "Astro", "Postgres", "Stripe", "Resend"]
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
    lead2: "No bloated teams. No black-box handoffs. The people you talk to are close to the work and accountable for the outcome.",
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
    teamSub: "[ THE PEOPLE BEHIND THE LAB ]",
    team: [
      { initial: "J", name: "Jhon Garces Montes", role: "Founder & CTO", image: "/team/jhon-garces-montes.webp", imageAlt: "Portrait of Jhon Garces Montes", accent: true },
      { initial: "L", name: "Lena Okafor", role: "Staff Full-Stack", image: "/team/lena-okafor.webp", imageAlt: "Portrait of Lena Okafor" },
      { initial: "E", name: "Edwin Barraza", role: "Full-Cycle B2B Sales Specialist", image: "/team/edwin-barraza.webp", imageAlt: "Portrait of Edwin Barraza" },
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
        price: "$5.5k",
        period: "/ month",
        features: ["One senior engineer", "~40 hrs / week", "Async updates and weekly call", "Pause or cancel anytime"]
      },
      {
        name: "Pack",
        tagline: "Your core build team",
        price: "$9.5k",
        period: "/ month",
        features: ["Two senior engineers", "~80 hrs / week combined", "Full-stack and infra", "Pause or scale monthly"],
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
