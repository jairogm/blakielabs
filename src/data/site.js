export const agencyPoints = [
  "Senior-only engineering pack",
  "Full-stack architecture and infra",
  "Rapid MVPs in weeks, not quarters",
  "Pause or scale your slot monthly"
];

export const labPreview = [
  { name: "Fetchly", initial: "F", status: "Live", statusClass: "live", iconClass: "accent" },
  { name: "Tracewell", initial: "T", status: "In Beta", statusClass: "beta", iconClass: "quiet" },
  { name: "Kennel", initial: "K", status: "Live", statusClass: "live", iconClass: "quiet" },
  { name: "Sniff", initial: "S", status: "In Beta", statusClass: "beta", iconClass: "accent" }
];

export const stats = [
  { num: "6", label: "PRODUCTS SHIPPED" },
  { num: "12+", label: "CLIENT SYSTEMS" },
  { num: "24h", label: "BRIEF RESPONSE" },
  { num: "100%", label: "SENIOR ENGINEERS" }
];

export const clients = [
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
];

export const products = [
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
];

export const plans = [
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
];

export const howItWorks = [
  { num: "01", title: "Send the brief", body: "Tell us your idea or roadmap. We reply within 24 hours, no sales maze." },
  { num: "02", title: "Reserve a slot", body: "We lock in your pack slot and kick off in days, not weeks." },
  { num: "03", title: "Ship weekly", body: "Production drops every week. Pause or scale your slot month to month." }
];

export const ethos = [
  { num: "A1", title: "Extreme quality", body: "We sweat the edge cases nobody sees until they break in production." },
  { num: "A2", title: "Ruthless agility", body: "Small team, no bureaucracy. We move at the speed of a decision." },
  { num: "A3", title: "Out of comfort", body: "We choose hard architecture when it earns its keep over five years." }
];

export const team = [
  { initial: "M", name: "Marco Vidal", role: "Founder / Principal Eng", accent: true },
  { initial: "L", name: "Lena Okafor", role: "Staff Full-Stack" },
  { initial: "D", name: "Dane Park", role: "Infra and Platform" },
  { initial: "S", name: "Sofia Cruz", role: "Design Engineer" }
];

export const testimonials = [
  { quote: "Blakie shipped in six weeks what our last vendor could not in a year, and the code is immaculate.", name: "VP Engineering", org: "Meridian Freight" },
  { quote: "They treated our product like their own. Zero hand-holding, all signal, every single week.", name: "CTO", org: "Northwind Capital" }
];

export const clientLogos = ["Meridian", "Northwind", "Atlas Health", "Volt", "Halcyon", "Driftwell"];

export const faqs = [
  { q: "Can I pause my retainer?", a: "Yes. Pause or scale your slot month to month with no lock-in and no penalty. We hold your slot for 30 days when paused." },
  { q: "Who owns the code?", a: "You do, 100%. Everything we write lives in your repos and is yours from day one." },
  { q: "How fast can we start?", a: "Days, not weeks. Once a slot is reserved we kick off with a roadmap call and ship inside the first week." },
  { q: "I only need a one-off build.", a: "Pick Custom Architecture on the intake form and we will scope a fixed engagement instead of a monthly retainer." },
  { q: "Do you sign NDAs?", a: "Always, before the first real conversation if you need it." }
];
