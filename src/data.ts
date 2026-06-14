import { Project, Service, Testimonial, ProcessStep } from "./types";

export const TRUSTED_COMPANIES = [
  { name: "Acme Corp", icon: "Flame" },
  { name: "SentryOS", icon: "Shield" },
  { name: "LinearTech", icon: "Layers" },
  { name: "VercelLabs", icon: "Triangle" },
  { name: "StripeWave", icon: "CreditCard" },
  { name: "FramerCloud", icon: "Boxes" },
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Next-gen web applications engineered for speed, scalability, and premium interaction design. Powered by modern frameworks and edge performance techniques.",
    iconName: "Globe",
    features: [
      "Headless CMS Integrations",
      "Real-time Data Syncing",
      "Search Engine Optimization Expertly Pre-rendered",
      "PWA & Responsive Adaptations",
      "Ultra-low latency Edge hosting"
    ],
    techStack: ["React", "TypeScript", "Next.js", "TailwindCSS", "Node.js", "GraphQL"],
    deliveryTime: "4 - 8 weeks",
    status: "popular"
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Multi-platform native iOS & Android applications with fluid gestures, offline state recovery, and deep native systems integration.",
    iconName: "Smartphone",
    features: [
      "Offline-first State Architecture",
      "Biometric Authorization Integration",
      "Custom Graphic Render Engines",
      "Universal Push Notification Pipelines",
      "App Store Optimization ready"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase Admin", "Supabase"],
    deliveryTime: "6 - 12 weeks",
    status: "available"
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description: "Unlock high efficiency by integrating custom Large Language Models, cognitive workflows, agentic processing, and automated smart content curation into your product.",
    iconName: "Bot",
    features: [
      "Agentic Workflow Engineering",
      "Custom Vector Database Integration",
      "Retrieval Augmented Generation (RAG)",
      "Automated Business Data Extraction",
      "Fine-tuned Small Language Models"
    ],
    techStack: ["Gemini Pro", "LangChain", "Vector Databases", "Python", "FastAPI", "OpenAI"],
    deliveryTime: "3 - 6 weeks",
    status: "new"
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Interactive visual designs focused on flawless styling, clear micro-interactions, accessibility patterns, and converting visits into loyal customers.",
    iconName: "Figma",
    features: [
      "Interactive High-Fidelity Prototypes",
      "Comprehensive Component Design Systems",
      "In-depth User Journey Audits",
      "Advanced Typography & Grid layouts",
      "Brand Expression Collateral"
    ],
    techStack: ["Figma", "Framer", "Adobe CC", "Principle", "Tailwind CSS", "Canvas"],
    deliveryTime: "2 - 4 weeks",
    status: "available"
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure",
    description: "Reliable, self-healing, and auto-scaling multi-region architectures, designed for peak performance and strict visual observability metrics.",
    iconName: "Cloud",
    features: [
      "IaC with Terraform / CloudFormation",
      "Serverless Cluster Orchestration",
      "CI/CD Zero-downtime pipelines",
      "Advanced SOC2 standard hardening",
      "Kubernetes & Docker container grids"
    ],
    techStack: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    deliveryTime: "4 - 6 weeks",
    status: "available"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "apex-analytics",
    title: "Apex FinTech Analytics Platform",
    client: "Apex Capital Partners",
    category: "Web Application",
    description: "A fast, fully-interactive multi-layered financial dashboard tracking $2.4B+ in transactions with latency-free charts, smart alerts, and instant reconciliation panels.",
    challenge: "Apex Capital needed to combine over 20 global real-time financial feeds into a single unified interface. Existing queries took up to 35 seconds to load, frustrating fund managers and stalling critical trade executions.",
    solution: "We built an optimized React SPA relying on specialized viewport virtualization and a server-side websocket bridge. Charts were rendered on lightweight vector canvases with background-calculated query maps.",
    results: [
      "Dashboard latency dropped from 35s to under 180ms",
      "Fund manager transaction rate increased by 28%",
      "Engineered full offline resilience with Local Storage snapshots"
    ],
    metrics: [
      { label: "Query Speedup", value: "99.5%" },
      { label: "Active Investors", value: "140k+" },
      { label: "Daily Volume", value: "$420M+" }
    ],
    tags: ["React", "TypeScript", "D3.js", "WebSockets", "TailwindCSS"],
    mockupType: "dashboard",
    colorTheme: "indigo"
  },
  {
    id: "nova-ai",
    title: "Nova AI Agentic Customer Ops",
    client: "Nova Retail Group",
    category: "AI Automation",
    description: "An AI-powered service orchestrator integrating Gemini Pro. It resolves up to 74% of complex tier-1 retail complaints automatically while scheduling local courier fixes on the fly.",
    challenge: "Nova Retail faced high support costs during flash sales, scaling costs exponentially. Support reps had to manually lookup logistics state across three outdated storage systems, leading to bad sentiment reviews.",
    solution: "Developed an AI system that translates natural user messages into database actions. Using strict sandbox schemas, the agent safely interacts with logistics APIs to schedule returns and trigger instant refunds.",
    results: [
      "Automated tier-1 resolution rate hit 74% with zero human overhead",
      "Average support response times dropped from 4 hours to 5 seconds",
      "Customer overall CSAT rating soared to an all-time high of 4.93/5.0"
    ],
    metrics: [
      { label: "Auto-Resolutions", value: "74%" },
      { label: "Response Latency", value: "5 sec" },
      { label: "Support Cost Cut", value: "62%" }
    ],
    tags: ["Express", "Gemini Pro", "Vector DB", "TypeScript", "Tailwind CSS"],
    mockupType: "ai-chat",
    colorTheme: "emerald"
  },
  {
    id: "velo-delivery",
    title: "Velo Premium Delivery Mobile App",
    client: "Velo Logistics",
    category: "Mobile App Development",
    description: "A gorgeous, dark-themed iOS/Android app designed for elite courier networks. Features real-time state routing, cellular optimization, and beautiful predictive dispatch timers.",
    challenge: "Couriers on the road experienced frequent data drops in urban high-rises. This resulted in missed delivery status tags and incorrect GPS dispatch estimates that delayed critical routes.",
    solution: "Designed and built custom local caching databases that queue courier events and sync seamlessly. Implemented background GPS processing that safely handles signal dropouts gracefully.",
    results: [
      "Dispatch delivery delay decreased by 85% on urban routes",
      "Full app function retained in subways and basement load zones",
      "Consistently rated 4.9 stars on Apple App Store with over 150k reviews"
    ],
    metrics: [
      { label: "Courier Delay", value: "-85%" },
      { label: "Weekly Deliveries", value: "480k+" },
      { label: "System Up-time", value: "99.99%" }
    ],
    tags: ["React Native", "Swift", "Node.js", "Redis", "Google Maps API"],
    mockupType: "mobile",
    colorTheme: "cyan"
  },
  {
    id: "synthetix-design",
    title: "Synthetix Design Core & UI Launch",
    client: "Synthetix SaaS",
    category: "UI/UX & Brand Design",
    description: "An elegant, comprehensive components framework library and design system overhaul built to convert visitors into hyper-engaged product advocates.",
    challenge: "Synthetix possessed five distinct web platforms built by separate squads over four years. Users experienced visual friction when navigation behaviors varied drastically between sub-pages.",
    solution: "Initiated deep user journey studies and unified the branding inside a responsive grid component library, styled with custom physics animations and eye-safe typography patterns.",
    results: [
      "User navigation bounce rates declined by 41% across channels",
      "Developer layout launch time reduced from 2 weeks to 2 hours",
      "Total checkout conversion rate improved by 32.4% within 30 days"
    ],
    metrics: [
      { label: "Conversion Lift", value: "32.4%" },
      { label: "Bounce Reduction", value: "41%" },
      { label: "Component Count", value: "120+" }
    ],
    tags: ["Figma Design", "React", "Tailwind CSS", "Motion", "Tailwind"],
    mockupType: "dashboard",
    colorTheme: "violet"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Years of Experience",
    description: "Our veteran engineers came from top tech companies. We apply decades of combined expertise to your platform architecture.",
    value: "10+",
    suffix: "Years of excellence"
  },
  {
    title: "Rapid Execution & Delivery",
    description: "We work in streamlined cycles. Expect functional milestones every week, and prompt full production launches that move fast.",
    value: "2x",
    suffix: "Faster launch velocity"
  },
  {
    title: "Dedicated Product Squads",
    description: "You get a dedicated elite team of full-stack engineers, UI/UX designers, and product owners working closely with you daily.",
    value: "100%",
    suffix: "Committed focus"
  },
  {
    title: "Scalable Architecture",
    description: "We build on modern edge infrastructure with optimized request pipelines, designed to handle millions of active sessions easily.",
    value: "10M+",
    suffix: "Concurrent user capable"
  },
  {
    title: "Ongoing High-Tier Support",
    description: "We stay in your corner after launch. Monitoring, updates, security hardening, and ongoing feature expansion are fully covered.",
    value: "24/7",
    suffix: "SLA Response guarantee"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery & Blueprinting",
    description: "We deep-dive into your system goals, user profiles, and operational metrics. We map out full architecture graphs, technical scopes, and delivery timelines.",
    duration: "Week 1",
    outcomes: ["Product Roadmaps", "API Specifications", "Interactive wireframes"]
  },
  {
    number: 2,
    title: "High-Fidelity Design",
    description: "We build outstanding, modern layouts inspired by world-class SaaS systems. Visual components are designed down to pixel-perfect margins and active states.",
    duration: "Weeks 2 - 3",
    outcomes: ["Clickable Figma Mockups", "Comprehensive Branding Assets", "Prototype walkthroughs"]
  },
  {
    number: 3,
    title: "Agile Development Cycles",
    description: "Our engineers build clean, type-safe code in rapid pipelines. We integrate continuous builds so you can test active progress in safe environments.",
    duration: "Weeks 4 - 8",
    outcomes: ["Clean TypeScript Codebases", "Integrated databases/APIs", "Unit & E2E tests"]
  },
  {
    number: 4,
    title: "Security, Launch, & Handshake",
    description: "We conduct high-grade stress audits, scale configurations, and security optimization before routing to Cloud platforms safely.",
    duration: "Week 9",
    outcomes: ["Production release", "DNS & SSL mappings", "Full structural source handoff"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "VP of Product Engineering",
    company: "Apex Capital",
    content: "They delivered the financial dashboard two weeks ahead of schedule. The quality of the code is immaculate—highly structured, type-safe, and incredibly fast. Our fund managers are absolutely thrilled with the new system.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "t2",
    name: "Marcus Aurelius",
    role: "Chief Technology Officer",
    company: "Nova Retail Group",
    content: "The AI agent has completely changed our operations. It resolved the seasonal spike issues effortlessly. Working with them was an absolute pleasure; they are true technical craftsmen who understand business context.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "t3",
    name: "Aisha Vance",
    role: "Founder & CEO",
    company: "Velo Logistics",
    content: "Their mobile expertise saved our regional rollout. The fluid gestures, offline capabilities, and instant sync pipelines made our courier app the best tool on the market. Highest recommendation for any serious startup.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "t4",
    name: "David Chen",
    role: "Head of Marketing",
    company: "Synthetix SaaS",
    content: "Overhauling our design system seemed like a daunting year-long operation. This elite squad achieved a beautiful unification in under two months, giving our marketing and development processes immediate velocity.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

export const STATS = [
  { value: "100+", label: "Projects Delivered", detail: "Launch-ready products across web, mobile, and AI categories." },
  { value: "50+", label: "Happy Enterprise Clients", detail: "High-tier SaaS businesses, venture-backed startups, and financial firms." },
  { value: "10+", label: "Countries Served Globally", detail: "Engineered solutions for client bases stretching across 5 continents." }
];
