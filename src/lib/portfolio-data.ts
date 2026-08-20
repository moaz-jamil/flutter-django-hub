/**
 * EDIT ME — all portfolio content lives here.
 * Swap the placeholder name, links, bio, projects and resume path with your own.
 */

import projectMobile1 from "@/assets/project-mobile-1.jpg";
import projectMobile2 from "@/assets/project-mobile-2.jpg";
import projectWeb1 from "@/assets/project-web-1.jpg";
import projectFullstack1 from "@/assets/project-fullstack-1.jpg";
import PocketPot from "@/assets/Pocket-pot.jpg";
import logo from "@/assets/logo.jpg";
import setting from "@/assets/setting.jpg";
import legalLink from "@/assets/legal-link.jpg";
import lawyer from "@/assets/lawyer.jpg";
import document from "@/assets/document.jpg";
import vendora from "@/assets/vendora-home.jpg";
import register from "@/assets/vendora-register.jpg";
import product from "@/assets/vendora-product.jpg";
import Bootique from "@/assets/bootique-cart.jpg";
import BootiqueDashboard from "@/assets/bootique-dashboard.jpg";
import HeartSnap1 from "@/assets/HeartSnap1.jpg";
import Quote from "@/assets/Quote.jpg"
import PhotaDashboard from "@/assets/phota-dash.jpg"
import Phota from "@/assets/phota.jpg";
import phota3 from "@/assets/phota-activity.jpg";
import servicehub from "@/assets/service-hero.jpg";
import servicehub2 from "@/assets/service-detail.jpg";
import servicehub3 from "@/assets/service-blog.jpg";
import servicehub4 from "@/assets/service-faqs.jpg";

export const profile = {
  name: "Moaz Jamil", // EDIT: your name
  role: "Flutter & Django Developer",
  taglines: [
    "Django Backend Engineer",
    "Flutter Developer",
    "Full-Stack Mobile & Web Developer",
  ],
  intro:
    "I build production-ready Flutter apps, Django websites, and scalable APIs — fast, reliable, and built to ship from the first screen to the final query.",
  email: "[moazjamil046@gmail.com]", // EDIT
  phone: "+92 305 4246898", // EDIT (optional)
  location: "Lahore, Pakistan", // EDIT
  resumeUrl: "/Moaz Jamil Resume.pdf", // EDIT: drop your PDF in /public as resume.pdf
  calendlyUrl: "https://calendly.com/moazjamil-dev/30min", // EDIT
  socials: {
    github: "https://github.com/moaz-jamil", // EDIT
    linkedin: "https://www.linkedin.com/in/moaz-jamil-3630a7324/", // EDIT
    twitter: "https://x.com/MoazJamil", // EDIT
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
    slug: "pocketpot",
    title: "PocketPot — Kids Rewards App",
    category: "flutter",
    summary:
      "Family rewards app that helps parents assign chores, manage pocket money, and teach children smart saving habits.",
    image: PocketPot,
    tech: ["Flutter", "Firebase", "Cloud Firestore", "FCM"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Parents needed a simple way to manage children's chores and pocket money while encouraging them to build healthy saving habits.",
    role:
      "Built the Flutter app with Firebase integration, including parent and child accounts, chore management, reward tracking, balance management, notifications, and a visual savings system.",
    gallery: [logo, PocketPot],
  },
  {
    slug: "legal-link",
    title: "Legal Link — Legal Services App",
    category: "flutter",
    summary:
      "A mobile legal services platform connecting users with legal professionals through a simple and accessible digital experience.",
    image: legalLink,
    tech: ["Flutter"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Finding and connecting with the right legal professional can be difficult through traditional channels. Legal Link provides a centralized mobile experience for accessing legal services.",
    role:
      "Designed and developed the Flutter mobile application and integrated the backend APIs to handle users, legal professionals, services, and application data.",
    gallery: [legalLink, lawyer, document, setting],
  },
  {
    slug: "love-memories",
    title: "LoveMemories — Digital Memory Album",
    category: "fullstack",
    summary:
      "A beautiful interactive digital memory album designed to help couples capture, organize, and relive their favorite moments together.",
    image: HeartSnap1,
    tech: ["React", "Dart", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://heart-snap-album.lovable.app",
    codeUrl: "https://github.com/moaz-jamil/heart-snap-album.git",
    problem:
      "Special memories are often scattered across phone galleries and social platforms. LoveMemories provides a dedicated and personal digital space for collecting meaningful moments and presenting a shared love story.",
    role:
      "Designed and developed the interactive web experience with a focus on emotional storytelling, elegant visuals, responsive layouts, and an engaging memory-album experience.",
    gallery: [HeartSnap1, Quote],
  },

  {
    slug: "phota-life-link",
    title: "PHOTA Life Link — Patient Portal",
    category: "fullstack",
    summary:
      "A modern patient portal for managing medical cases, hospital assignments, appointments, medical records, and real-time case progress.",
    image: PhotaDashboard,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://preview--phota-life-link.lovable.app/",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Patients involved in complex medical cases need a simple way to track their case progress, hospital assignment, appointments, medical records, and recent medical activity without relying on scattered information.",
    role:
      "Designed and developed the patient portal interface with React, creating dashboards for active cases, patient information, hospital assignments, appointments, medical records, case progress, and recent activity.",
    gallery: [PhotaDashboard, Phota, phota3],
  },
  {
    slug: "vendora",
    title: "Vendora — Multi-Vendor E-Commerce Platform",
    category: "django",
    summary:
      "Full-stack multi-vendor e-commerce platform that connects customers, sellers, retailers, and companies through a centralized online marketplace.",
    image: vendora,
    tech: ["Django", "Python", "PostgreSQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/moaz-jamil/luxury-3d-boutique.git",
    problem:
      "Traditional online stores often focus on a single seller, making it difficult to manage multiple vendors and different business roles within one platform. Vendora provides a centralized marketplace where companies, sellers, retailers, and customers can interact and manage their e-commerce activities.",
    role:
      "Designed and developed the full-stack platform using Django, including authentication, role-based functionality, company and seller management, product management, marketplace workflows, and database integration with PostgreSQL.",
    gallery: [vendora, register, product],
  },
  {
    slug: "servicehub-pro",
    title: "ServiceHub Pro — Home Services Marketplace",
    category: "django",
    summary:
      "A multi-vendor home services marketplace connecting customers with verified professionals for electrical, plumbing, AC, cleaning, painting, and other home services.",
    image: servicehub,
    tech: ["Django", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://moazjamil.pythonanywhere.com/",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Finding reliable home-service professionals can be difficult, while service providers need an efficient way to manage bookings, customers, payments, and their availability. ServiceHub Pro brings customers and verified professionals together through a centralized marketplace.",
    role:
      "Designed and developed the full-stack marketplace with Django, implementing customer and provider workflows, service discovery, booking management, provider profiles, verification, wallet and payment flows, reviews, invoices, real-time service tracking, and admin functionality.",
    gallery: [servicehub, servicehub2, servicehub3, servicehub4],
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
    slug: "luxury-3d-boutique",
    title: "Luxury 3D Boutique — Interactive E-Commerce Experience",
    category: "fullstack",
    summary:
      "An immersive luxury fashion boutique website featuring a modern 3D-inspired shopping experience and premium visual presentation.",
    image: BootiqueDashboard,
    tech: ["Django", "Python", "PostgreSQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "https://luxury-3d-boutique.lovable.app/",
    codeUrl: "https://github.com/your-handle",
    problem:
      "Traditional e-commerce experiences can feel static and fail to communicate the premium character of luxury products. This project creates a more immersive and visually engaging digital boutique experience.",
    role:
      "Designed and developed the complete interactive web experience, focusing on the premium visual design, responsive interface, product presentation, and immersive shopping experience.",
    gallery: [BootiqueDashboard, Bootique],
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
