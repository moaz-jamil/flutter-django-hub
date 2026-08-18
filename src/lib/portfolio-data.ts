/**
 * EDIT ME — all portfolio content lives here.
 * Swap the placeholder name, links, bio, projects and resume path with your own.
 */

import projectMobile1 from "@/assets/project-mobile-1.jpg";
import projectMobile2 from "@/assets/project-mobile-2.jpg";
import projectWeb1 from "@/assets/project-web-1.jpg";
import projectFullstack1 from "@/assets/project-fullstack-1.jpg";

export const profile = {
  name: "Jamil Ahmed", // EDIT: your name
  role: "Flutter & Django Developer",
  taglines: [
    "Flutter Developer",
    "Django Backend Engineer",
    "Full-Stack Mobile & Web Developer",
  ],
  intro:
    "I build production-ready mobile apps with Flutter and the APIs that power them with Django. Shipped, tested, and fast — from first screen to last query.",
  email: "hello@example.com", // EDIT
  phone: "+92 300 0000000", // EDIT (optional)
  location: "Karachi, Pakistan", // EDIT
  resumeUrl: "/resume.pdf", // EDIT: drop your PDF in /public as resume.pdf
  calendlyUrl: "https://calendly.com/your-handle/30min", // EDIT
  socials: {
    github: "https://github.com/your-handle", // EDIT
    linkedin: "https://linkedin.com/in/your-handle", // EDIT
    twitter: "https://x.com/your-handle", // EDIT
  },
};

export const about = {
  // EDIT: your story
  paragraphs: [
    "I'm a software developer with 1+ years of hands-on experience turning ideas into shipped products. My path started with Dart and a stubborn side project, and grew into building complete mobile experiences in Flutter backed by clean, well-documented Django REST APIs.",
    "I care about the unglamorous parts: predictable state management, sane database schemas, background jobs that don't fall over, and release pipelines that make shipping boring. I've delivered apps to the Play Store and App Store, and deployed Dockerised Django services that keep them fed.",
  ],
  stats: [
    { label: "Years of Experience", value: 1, suffix: "+" },
    { label: "Projects Completed", value: 14, suffix: "" },
    { label: "Technologies Mastered", value: 28, suffix: "+" },
    { label: "Happy Clients", value: 9, suffix: "" },
  ],
};

export type SkillCategory = "mobile" | "backend" | "tools";

export const skillGroups: {
  id: SkillCategory;
  label: string;
  blurb: string;
  cards: { title: string; items: string[] }[];
}[] = [
  {
    id: "mobile",
    label: "Mobile",
    blurb: "Flutter apps built for the store, not the demo.",
    cards: [
      { title: "Core", items: ["Dart", "Flutter SDK", "Responsive UI", "Animations"] },
      { title: "State Management", items: ["Provider", "Riverpod", "Bloc / Cubit", "GetX"] },
      {
        title: "Firebase",
        items: [
          "Auth",
          "Firestore",
          "Cloud Storage",
          "Cloud Functions",
          "FCM Push",
          "Crashlytics",
          "Analytics",
        ],
      },
      { title: "Supabase", items: ["Auth", "Realtime DB", "Storage", "Edge Functions"] },
      { title: "Data & APIs", items: ["REST", "GraphQL", "SQLite", "Hive", "Local storage"] },
      {
        title: "Platform & Native",
        items: [
          "Google Maps / Location",
          "In-app purchases",
          "Stripe / Razorpay",
          "Play Store release",
          "App Store release",
        ],
      },
      { title: "CI/CD", items: ["Codemagic", "GitHub Actions", "Fastlane basics"] },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    blurb: "Django services that stay boring under load.",
    cards: [
      { title: "Core", items: ["Python", "Django", "Django REST Framework"] },
      { title: "Auth", items: ["JWT", "OAuth2", "Django Allauth", "Session auth"] },
      { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Supabase Postgres"] },
      { title: "Integrations", items: ["Firebase Admin SDK", "Supabase", "Webhooks"] },
      { title: "Async & Realtime", items: ["Celery", "Redis", "Django Channels", "WebSockets"] },
      { title: "API Craft", items: ["REST design", "Swagger / drf-yasg", "Versioning", "Pagination"] },
      { title: "Ship It", items: ["Docker", "Gunicorn", "Nginx", "AWS", "Railway", "Render", "DigitalOcean"] },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    blurb: "The rest of the toolbox.",
    cards: [
      { title: "Workflow", items: ["Git & GitHub", "Agile / Scrum", "Code review"] },
      { title: "Build & Debug", items: ["VS Code", "Android Studio", "Postman", "DevTools"] },
      { title: "Design", items: ["Figma (basic UI/UX)", "Design systems", "Prototyping"] },
    ],
  },
];

export type ProjectCategory = "flutter" | "django" | "fullstack";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  image: string;
  tech: string[];
  demoUrl: string;
  codeUrl: string;
  problem: string;
  role: string;
  gallery: string[];
};

// EDIT: replace with your real projects, screenshots and links.
export const projects: Project[] = [
  {
    slug: "pulse-fitness",
    title: "Pulse — Fitness Tracker",
    category: "flutter",
    summary: "Offline-first workout tracker with adaptive plans and live session timers.",
    image: projectMobile1,
    tech: ["Flutter", "Riverpod", "Hive", "Firebase"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Gym users lose connectivity mid-session, so the app had to record full workouts offline and reconcile them without duplicates once back online.",
    role: "Sole mobile developer: architecture, offline sync layer, UI system and Play Store release.",
    gallery: [projectMobile1, projectMobile2],
  },
  {
    slug: "cartly-commerce",
    title: "Cartly — Commerce App",
    category: "flutter",
    summary: "Storefront app with Stripe checkout, wishlists and push-driven re-engagement.",
    image: projectMobile2,
    tech: ["Flutter", "Bloc", "Stripe", "FCM"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Checkout drop-off was high on mobile web; the client needed a native flow with saved cards and one-tap reorder.",
    role: "Built the full app, integrated Stripe payment sheet and segmented push campaigns.",
    gallery: [projectMobile2, projectMobile1],
  },
  {
    slug: "orbit-admin",
    title: "Orbit — Ops Dashboard",
    category: "django",
    summary: "Internal analytics dashboard with role-based access and scheduled reporting.",
    image: projectWeb1,
    tech: ["Django", "DRF", "PostgreSQL", "Celery"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Ops staff exported CSVs by hand every morning. The dashboard replaced that with live aggregates and nightly email digests.",
    role: "Backend lead: data model, DRF endpoints, Celery beat schedules and deployment.",
    gallery: [projectWeb1],
  },
  {
    slug: "signal-chat",
    title: "Signal Desk — Realtime Support",
    category: "fullstack",
    summary: "Live chat support with WebSocket rooms, typing indicators and agent routing.",
    image: projectFullstack1,
    tech: ["Django Channels", "Redis", "Flutter", "WebSockets"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Support tickets took hours to answer. Realtime routing cut first response to under two minutes.",
    role: "End-to-end: Channels backend, Redis layer, and the Flutter agent client.",
    gallery: [projectFullstack1, projectWeb1],
  },
  {
    slug: "mapmate",
    title: "MapMate — Field Logistics",
    category: "fullstack",
    summary: "Route planning for field teams with live location, geofences and proof-of-visit.",
    image: projectMobile1,
    tech: ["Flutter", "Google Maps", "Django", "PostGIS"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Field reps logged visits on paper. GPS-verified check-ins made reporting trustworthy and instant.",
    role: "Designed the geofencing logic and the sync protocol between app and API.",
    gallery: [projectMobile1, projectFullstack1],
  },
  {
    slug: "quilltrack",
    title: "QuillTrack — Content API",
    category: "django",
    summary: "Headless publishing API with versioned drafts and Swagger-documented endpoints.",
    image: projectWeb1,
    tech: ["Django", "DRF", "drf-yasg", "Docker"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Editors and developers shared one WordPress install. Splitting into a headless API unblocked both teams.",
    role: "API architecture, auth model, OpenAPI docs and Dockerised deploy on Render.",
    gallery: [projectWeb1],
  },
  {
    slug: "nimbus-notes",
    title: "Nimbus Notes",
    category: "flutter",
    summary: "Markdown notes app with Supabase realtime sync across devices.",
    image: projectMobile2,
    tech: ["Flutter", "Supabase", "GetX", "SQLite"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Conflict-free sync across phone and tablet without a custom backend.",
    role: "Built the local-first store and the Supabase realtime reconciliation layer.",
    gallery: [projectMobile2],
  },
  {
    slug: "ledgerly",
    title: "Ledgerly — Invoicing Suite",
    category: "fullstack",
    summary: "Invoicing platform with PDF generation, reminders and payment webhooks.",
    image: projectFullstack1,
    tech: ["Django", "Celery", "Flutter", "Razorpay"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Freelancers chased payments manually; automated reminders lifted on-time payment noticeably.",
    role: "Full delivery: billing engine, webhook handling and the companion mobile app.",
    gallery: [projectFullstack1, projectWeb1],
  },
];

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "flutter", label: "Flutter Apps" },
  { id: "django", label: "Django Web Apps" },
  { id: "fullstack", label: "Full-Stack" },
];

// EDIT: your real roles
export const experience = [
  {
    role: "Flutter Developer",
    company: "Freelance / Contract",
    period: "2025 — Present",
    points: [
      "Shipped 6+ Flutter apps to the Play Store and App Store for clients across fintech, retail and logistics.",
      "Introduced Riverpod + repository architecture, cutting UI regression bugs on handover projects.",
      "Set up Codemagic pipelines so clients get signed builds on every merge.",
    ],
  },
  {
    role: "Junior Backend Developer (Django)",
    company: "Placeholder Studio",
    period: "2025 — 2026",
    points: [
      "Built and documented DRF APIs consumed by mobile and web clients.",
      "Moved report generation to Celery + Redis, removing multi-second request blocking.",
      "Containerised services with Docker, Gunicorn and Nginx for staging and production.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Placeholder Tech",
    period: "2024 — 2025",
    points: [
      "Contributed features to an internal Django admin tool used daily by the ops team.",
      "Wrote integration tests and helped migrate a legacy MySQL schema to PostgreSQL.",
    ],
  },
];

// EDIT: real quotes, or delete this section
export const testimonials = [
  {
    quote:
      "Delivered our Flutter app two weeks early and the code was clean enough that our own team picked it up without hand-holding.",
    name: "A. Placeholder",
    role: "Founder, Retail Startup",
  },
  {
    quote:
      "The Django API he built has been running untouched for months. Documentation was genuinely useful — rare.",
    name: "B. Placeholder",
    role: "CTO, SaaS Company",
  },
  {
    quote:
      "Communicates clearly, asks the right questions, and pushes back when a feature doesn't make sense. Would hire again.",
    name: "C. Placeholder",
    role: "Product Manager",
  },
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
