import { ServiceItem, BookingTier } from "@/types/portfolio";

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    subtitle: "Tailored, Easy-to-Use Web Applications Engineered with Uncompromising Quality",
    badge: "Custom Architecture",
    overview:
      "I develop **custom software solutions tailored to your exact business needs** — designed from the ground up to be **effortless to use** and engineered with uncompromising quality. I handle everything from intuitive user interfaces to rock-solid backend architectures, ensuring your software is reliable, secure, and scales smoothly.",
    deliverables: [
      "**Custom, intuitive full-stack web applications** built with clean interfaces anyone on your team can operate with ease.",
      "Rock-solid database architectures with **ACID transactional guarantees** and sub-15ms response times.",
      "**Comprehensive software training & documentation included** so your staff can use your platform with total confidence.",
      "Zero-downtime automated deployments with continuous quality testing and zero regressions.",
    ],
    trainingAndQuality:
      "I deeply prioritize software quality and include complete software training and onboarding sessions for your team so you can operate your platform with ease.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Node.js",
      "Spring Boot",
      "Python FastAPI",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Docker",
      "Redis",
    ],
    bookingTierId: "tier-consult",
  },
  {
    id: "business-automation",
    title: "Business Automation & Workflow Engines",
    subtitle: "Automating Your Operations with Exceptional Quality & Effortless Workflows",
    badge: "Process Automation",
    overview:
      "I create **custom business automation systems** that eliminate repetitive manual tasks and run your operations smoothly with exceptional quality. From **one-click payment integrations (Chapa, Stripe, Telebirr)** to automated customer orders, invoices, and accounting, I make running your business simple and error-free.",
    deliverables: [
      "**Effortless business automation** that handles your orders, invoices, and accounting automatically without manual headaches.",
      "Secure payment gateway integrations (**Chapa, Stripe, Telebirr**) with automatic cryptographic ledger reconciliation.",
      "**Complete team training included**: I walk your staff through the system step-by-step until they are 100% comfortable.",
      "Self-healing error detection with instant alert notifications sent straight to your Telegram or Slack.",
    ],
    trainingAndQuality:
      "I care deeply about quality and provide hands-on staff training and video walkthroughs, ensuring your employees master the automated workflows immediately.",
    technologies: [
      "Chapa Payment Gateway",
      "Stripe API",
      "Apache Kafka",
      "Redis",
      "AWS",
      "Webhooks & HMAC",
      "PostgreSQL",
      "Express.js",
      "Docker",
    ],
    bookingTierId: "tier-advisory",
  },
  {
    id: "mobile-development",
    title: "Mobile Application Development",
    subtitle: "Intuitive iOS & Android Apps with 60fps Native Fluidity & Offline Resilience",
    badge: "Mobile Engineering",
    overview:
      "I design and develop **custom mobile applications** that are intuitive, beautiful, and remarkably easy to use for your customers on both iOS and Android. Built with high reliability, offline-first support, and smooth 60fps performance so your users enjoy uninterrupted service anywhere.",
    deliverables: [
      "**Custom iOS & Android mobile applications** engineered for high speed, intuitive usability, and beautiful design.",
      "Offline-first reliability ensuring your app never crashes or freezes even with poor internet connectivity.",
      "**Full administrative software training** so you can update products, manage users, and view analytics easily.",
      "Biometric login (FaceID / Fingerprint) and push notification messaging to engage your users.",
    ],
    trainingAndQuality:
      "Includes full administrative dashboard training and app store management guidance so you can manage your mobile app effortlessly.",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "SQLite / Async Storage",
      "REST APIs",
      "Tailwind CSS",
      "Push Notifications",
    ],
    bookingTierId: "tier-consult",
  },
  {
    id: "engineering-mentorship",
    title: "Software Training & Engineering Mentorship",
    subtitle: "Beginner-Friendly to Mid-Level Coaching with Real-World Production Architecture",
    badge: "Software Training",
    overview:
      "High-quality, personalized **software training and engineering mentorship** for individuals and teams. Whether you are a **complete beginner learning from scratch** or a developer aiming for mid-level engineering roles, I provide patient, structured guidance focused on real-world engineering excellence.",
    deliverables: [
      "**Beginner-friendly to advanced coaching**: structured roadmaps from programming basics up to production deployment.",
      "Deep architecture and code reviews teaching you how to write clean, maintainable, and bug-free code.",
      "Database performance masterclasses: understanding PostgreSQL query execution and indexing.",
      "Career acceleration, interview preparation, and portfolio building with real deployed projects.",
    ],
    trainingAndQuality:
      "As an active instructor at AllCan Technologies, I provide structured hands-on code reviews, real production projects, and lifetime engineering discipline.",
    technologies: [
      "System Architecture",
      "PostgreSQL EXPLAIN Plans",
      "Kubernetes",
      "Docker",
      "Redis",
      "Git & CI/CD Pipelines",
      "Full-Stack Mentorship",
    ],
    bookingTierId: "tier-mentorship",
  },
  {
    id: "technical-talks",
    title: "Technical Talk, Keynotes & Advisory",
    subtitle: "Practical Team Workshops, Architecture Audits & Strategic Technology Guidance",
    badge: "Advisory & Talks",
    overview:
      "Pragmatic **technical talks, team training workshops, and strategic software advisory**. I demystify AI architectures, scalable system engineering, and production quality standards, leaving your team with actionable skills they can immediately apply to elevate your products.",
    deliverables: [
      "Engaging keynotes and interactive workshops on **AI & RAG systems, software quality, and scalable architectures**.",
      "Strategic technology advisory to help you pick the right tools and avoid costly architectural mistakes.",
      "Complete presentation slide decks and demo code repositories shared with your team.",
    ],
    trainingAndQuality:
      "Includes interactive Q&A sessions, hands-on workshop code repositories, and post-session advisory summaries.",
    technologies: [
      "Keynote Speaking",
      "AI & Vector Search (RAG)",
      "Apache Kafka",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Engineering Workshops",
    ],
    bookingTierId: "tier-talk",
  },
];

export const BOOKING_TIERS: BookingTier[] = [
  {
    id: "tier-consult",
    title: "30-Min Architecture Consultation",
    duration: "30 Minutes",
    badge: "Introductory Review",
    description:
      "A fast-paced, focused session to validate your system design, discuss custom solution requirements, and plan how to automate your business with high quality.",
    deliverables: [
      "High-level system design audit",
      "Tech stack validation & risk assessment",
      "Actionable recommendations checklist",
    ],
  },
  {
    id: "tier-advisory",
    title: "60-Min Deep-Dive Advisory",
    duration: "60 Minutes",
    badge: "Comprehensive Audit",
    description:
      "An exhaustive deep-dive session analyzing business automation, payment gateways, query performance bottlenecks, or custom software architecture blueprints.",
    deliverables: [
      "PostgreSQL query plan & schema inspection",
      "Payment gateway & automation workflow design",
      "Written architectural summary & action plan",
    ],
  },
  {
    id: "tier-mentorship",
    title: "1-on-1 Software Training Session",
    duration: "60 Minutes",
    badge: "Beginner & Mid-Level Coaching",
    description:
      "Personalized software training for beginners learning from scratch or junior developers looking to master production engineering and reach mid-level standards.",
    deliverables: [
      "Line-by-line pull request & code review",
      "Targeted debugging & architecture guidance",
      "Custom learning roadmap & resource toolkit",
    ],
  },
  {
    id: "tier-talk",
    title: "Technical Talk & Team Workshop",
    duration: "90 Minutes",
    badge: "Speaking & Workshops",
    description:
      "Engaging, pragmatic keynote talk or interactive workshop for engineering teams, university groups, or conferences on AI platforms, RAG systems, or software quality.",
    deliverables: [
      "Live interactive keynote with slides & demos",
      "Q&A session with attendees & developers",
      "Shared workshop code repository & slides",
    ],
  },
];
