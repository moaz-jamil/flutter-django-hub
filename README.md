# Dev Brilliance

Build me a modern, professional, visually polished portfolio website for a software developer. Use a clean tech-forward aesthetic — dark mode with a vibrant accent color (electric blue, teal, or purple gradient), lots of whitespace, subtle scroll animations/micro-interactions, and smooth section transitions. Fully responsive (mobile, tablet, desktop). Fast-loading, SEO-friendly, with proper meta tags.

Who this is for

A software developer specializing in Flutter (mobile app development) and Django (backend/web development), with 1+ years of hands-on experience building and shipping multiple apps and websites.

Pages / Sections needed

1. Hero Section

Full-width hero with my photo (circular or rounded, professional headshot placeholder)

Animated typing text or rotating tagline: e.g. "Flutter Developer", "Django Backend Engineer", "Full-Stack Mobile & Web Developer"

Short punchy intro (1-2 sentences)

CTA buttons: "View My Work" and "Download Resume" / "Contact Me"

Social icons (GitHub, LinkedIn, Twitter/X, Email) linked in header/hero

2. About Me

Bio paragraph (editable placeholder text about background, passion for building apps/products, journey into Flutter & Django)

Stats/counters: Years of Experience, Projects Completed, Technologies Mastered, Happy Clients (placeholder numbers, editable)

Downloadable resume/CV button (PDF)

3. Skills / Tech Stack

Organize into categories with icons/logos for each:

Mobile Development (Flutter)

Dart, Flutter SDK

State management: Provider, Riverpod, Bloc/Cubit, GetX

Firebase (Auth, Firestore, Cloud Storage, Cloud Functions, FCM Push Notifications, Crashlytics, Analytics)

Supabase (Auth, Realtime DB, Storage, Edge Functions)

REST API & GraphQL integration

SQLite / Hive / local storage

Google Maps / Location services

In-app purchases, Payment gateway integration (Stripe/Razorpay)

Platform-specific: Android (Play Store deployment), iOS (App Store deployment)

CI/CD for Flutter (Codemagic/GitHub Actions)

Backend Development (Django)

Python, Django, Django REST Framework (DRF)

Authentication: JWT, OAuth2, Django Allauth, Session-based auth

Databases: PostgreSQL, MySQL, SQLite

Supabase (as backend/Postgres + Auth alternative)

Firebase Admin SDK integration with Django

Celery + Redis (background tasks, async jobs)

REST API design & documentation (Swagger/drf-yasg)

Django Channels (WebSockets, real-time features)

Docker & deployment (Gunicorn, Nginx)

Cloud hosting: AWS / Heroku / Railway / DigitalOcean / Render

Tools & Other

Git & GitHub, Postman, Figma (basic UI/UX), VS Code, Android Studio

Agile/Scrum workflow basics

Display this as a grid of skill cards or animated tech-logo icons, grouped by category with tabs/filters (Mobile / Backend / Tools).

4. Projects / Portfolio Showcase

Grid or carousel of project cards (6-8 placeholder project slots), each with:

Project thumbnail/screenshot image (placeholder image upload area)

Project title

Short description (1-2 lines)

Tech stack tags (e.g. "Flutter · Firebase · Django REST" as small pill badges)

Two buttons: "Live Demo" (external link) and "View Code" (GitHub link)

Filter/tab system: All / Flutter Apps / Django Web Apps / Full-Stack Projects

Clicking a project card opens a detailed project modal/page with: full description, problem solved, my role, tech stack used, screenshots gallery, and links

5. Experience / Timeline

Vertical timeline component showing work experience, freelance projects, or internships (editable placeholder entries)

Each entry: role/title, company or project name, duration, bullet points of responsibilities/achievements

6. Testimonials (optional section)

Simple carousel/grid for client or team feedback quotes with name, role, and photo placeholder

7. Contact Section

Contact form (Name, Email, Subject, Message) that sends via email (use a form service like Formspree/EmailJS or a working backend endpoint)

Direct contact info: email, phone (optional), location

Social links repeated here

Optional: embedded Calendly-style "Book a call" button

8. Footer

Quick nav links, social icons, copyright, "Built with ❤️ using Flutter & Django" tagline

Technical requirements

Single-page scrolling layout with smooth anchor navigation OR multi-page (Home / Projects / About / Contact) — prefer single-page with sticky nav header

Sticky/fixed navbar with active-section highlighting on scroll

Dark/light mode toggle

Scroll-reveal animations for sections (fade-up, stagger)

Optimized images with lazy loading

All content areas should be easily editable placeholders (clearly marked where I'll swap in my real photo, project screenshots, resume PDF, and links)

Include a favicon and page title "My Name — Flutter & Django Developer"

Tone / Style reference

Think: clean SaaS landing page meets developer portfolio — similar polish to sites like Linear, Vercel, or a top Dribbble developer portfolio shot. Professional but not boring — some personality in the copy and hover effects.

Note: Replace all placeholder text (name, bio, project details, resume link, social URLs) with your real information once the site is generated.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://flutter-django-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b74bb5b4-b16d-4c29-a7b0-aa9bb648b242).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
