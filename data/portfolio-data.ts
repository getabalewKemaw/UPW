import { TopicChipItem, ProjectCaseStudy, ExperienceItem } from "@/types/portfolio";

export const COLOR_PATTERN = `repeating-linear-gradient(
  -45deg,
  #363635 0px,
  #363635 2.5px,
  transparent 2.5px,
  transparent 5px,
  #f97316 5px,
  #f97316 7.5px,
  transparent 7.5px,
  transparent 10px,
  #06b6d4 10px,
  #06b6d4 12.5px,
  transparent 12.5px,
  transparent 15px,
  #6366f1 15px,
  #6366f1 17.5px,
  transparent 17.5px,
  transparent 20px,
  #10b981 20px,
  #10b981 22.5px,
  transparent 22.5px,
  transparent 25px
)`;

export const CONTACT_EMAIL = "getabalewkemaw@gmail.com";

export const RESUME_URL = "https://drive.google.com/file/d/1PxyLQlpbbmK0rnVL7Tz46qsdtZqKOtUR/view?usp=sharing";

export const TIMEZONE = "Africa/Addis_Ababa";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/getabalewkemaw/",
  github: "https://github.com/getabalewKemaw",
  telegram: "https://t.me/GetabalewKemaw",
  telegramHandle: "@GetabalewKemaw",
  phone: "+251905952906",
  phoneFormatted: "+251 905952906",
  email: "getabalewkemaw@gmail.com",
};

export const TOPIC_CHIPS: TopicChipItem[] = [
  { id: "fullstack", label: "Full-Stack Development" },
  { id: "backend", label: "Backend Engineering" },
  { id: "qa", label: "QA & Test Automation" },
  { id: "devops", label: "DevOps & Deployment" },
  { id: "ai", label: "AI & ML Engineering" },
  { id: "rag", label: "RAG Systems" },
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "velo-crm",
    title: "VELO — Tactical Enterprise AI CRM",
    subtitle: "Autonomous Signal Ingestion, Dual-Channel Lead Triaging & Real-Time Deal Pipeline",
    category: "AI & ML",
    badge: "Production SaaS",
    image: "/projects/velocore.png",
    overview:
      "A production-grade CRM platform that unifies **Gmail and Telegram leads** into one high-velocity inbox, triages them with **Gemini 2.5 Flash**, and delivers **real-time pipeline analytics, SLA tracking**, and instant alerts. Built **headless** so businesses can embed it into any web property without migrations.",
    problemStatement:
      "Small businesses bleed revenue when customer inquiries scatter across Telegram, Instagram, WhatsApp, and Email. Switching tabs and guessing priority forfeits the critical 'golden minute', and post-hoc CRM metrics fail to assist real-time deal conversions.",
    solution:
      "Engineered an automated ingestion pipeline capturing signals via Gmail OAuth + Google Cloud Pub/Sub push topics and Telegram Bot webhooks into a unified PostgreSQL ledger. Gemini 2.5 Flash triages inbound leads by priority tier, cleans email noise, and triggers instant alerts for high-value leads.",
    engineeringContributions: [
      "Architected real-time ingestion pipelines for Gmail (OAuth 2.0 + GCP Pub/Sub push topics) and Telegram Bot webhooks, unifying disparate message protocols into a single normalized PostgreSQL schema.",
      "Integrated Gemini 2.5 Flash pipeline to auto-classify inbound leads into priority tiers (Low / Medium / High) in < 800ms while sanitizing email footers, signatures, and legal noise.",
      "Engineered real-time browser notification system and pipeline analytics dashboard tracking win rates, SLA response velocity, and lead attribution ROI.",
      "Built a headless architecture with Next.js 16 (App Router) on the frontend and Express 5 + Prisma ORM on the backend, enabling embeddable lead capture widgets across third-party websites.",
    ],
    qualityAndReliability: [
      "Implemented idempotent webhook processing with cryptographic signature verification and replay-attack protection.",
      "Enforced strict JSON schema validation on LLM triage outputs with fallback rule-based heuristics during provider rate limits.",
      "Optimized PostgreSQL indexes across message headers and contact threads, achieving sub-120ms response times on pipeline lookups.",
      "Conducted automated integration tests simulating concurrent multi-source lead spikes without message drops or duplication.",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Express.js 5",
      "Prisma",
      "PostgreSQL",
      "Gemini 2.5 Flash",
      "Gmail OAuth / PubSub",
      "Telegram Webhooks",
    ],
    evidence: {
      liveUrl: "https://velocorecrm.vercel.app/",
      githubUrl: "https://github.com/getabalewKemaw/Velo-Core",
      metrics: [
        "< 800ms AI triage latency",
        "Zero-loss webhook idempotency",
        "99.8% capture uptime",
        "Sub-120ms database queries",
      ],
      statusLabel: "Production Live",
    },
    featured: true,
  },
  {
    id: "teleplay",
    title: "I-Player — Telecom Media Processing & Streaming Platform",
    subtitle: "Dual-Engine Chunked Streaming & Browser-Native Transcoding for Telecom Codecs",
    category: "Media & Streaming",
    badge: "Media Systems",
    image: "/projects/teleplay.png",
    overview:
      "An engineering-grade telecom media processing suite that enables **instant browser playback** of non-standard telephony codecs (**G.711, G.726, G.728**). Features live chunked streaming via **Media Source Extensions (MSE)**, seekable streaming with **HTTP Range requests**, and **real-time audio waveform visualization**.",
    problemStatement:
      "Standard HTML5 media players and browser audio stacks fail to decode specialized telephony codecs (G.711, G.726, G.728). Telephony analysts and signal engineers were forced into cumbersome offline desktop tools before listening to call recordings or live stream feeds.",
    solution:
      "Engineered a full-stack media streaming pipeline with an Express + FFmpeg backend that decodes telephony audio on the fly without intermediate disk I/O bottlenecks. The React + TypeScript frontend provides dual playback engines: instant live chunked streaming using Media Source Extensions (MSE) and stable seekable streaming with byte-range headers.",
    engineeringContributions: [
      "Engineered on-the-fly audio transcoding pipeline utilizing Express and FFmpeg subprocess streams, converting non-standard telephony codecs into standard audio buffers directly in-memory.",
      "Built dual-mode frontend streaming: live low-latency chunked streaming via Media Source Extensions (MSE) and HTTP Range-based seeking for gigabyte-scale archival audio files.",
      "Architected dual-layer audio visualization: high-fps HTML5 Canvas rendering peak data for live streams and WaveSurfer.js rendering interactive scrubbable waveforms for archival files.",
      "Designed unified REST API and PostgreSQL schema via Prisma for indexing audio metadata, duration stamps, caller IDs, and channel allocations.",
    ],
    qualityAndReliability: [
      "Implemented stream buffer backpressure handling to eliminate memory creep during multi-hour audio monitoring sessions.",
      "Stress-tested transcoding under synthetic corrupted bitstreams and dropped packets, guaranteeing graceful recovery without process crashes.",
      "Benchmarked stream start times: reduced time-to-first-sound from > 4.5s (file download approach) to < 280ms (MSE chunked pipeline).",
      "Profiled server concurrency under 50+ simultaneous transcoding threads, optimizing buffer chunk sizes to prevent CPU spikes.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "FFmpeg Core",
      "Media Source Extensions (MSE)",
      "WaveSurfer.js",
      "PostgreSQL",
      "Prisma",
    ],
    evidence: {
      liveUrl: "https://teleplayer.vercel.app/",
      githubUrl: "https://github.com/getabalewKemaw/TelePlay",
      metrics: [
        "< 280ms stream initiation",
        "G.711 / G.726 / G.728 native support",
        "Zero client-side desktop plugins",
        "60 FPS canvas waveform",
      ],
      statusLabel: "Production Live",
    },
    featured: true,
  },
  {
    id: "customer-intelligence",
    title: "Flipkart Customer Intelligence & Sentiment Analytics",
    subtitle: "End-to-End NLP Pipeline, Multi-Class Complaint Root-Cause Model & Live BI Dashboard",
    category: "AI & ML",
    badge: "Machine Learning",
    image: "/projects/flipkartanalaysis.png",
    overview:
      "An AI-powered customer intelligence platform that transforms raw unstructured reviews into actionable business intelligence. Leverages NLP preprocessing, a tuned **Random Forest classifier achieving ~91% validation accuracy**, automated **root-cause category tagging**, and an interactive Gradio analytics dashboard deployed on **Hugging Face Spaces**.",
    problemStatement:
      "E-commerce giants generate millions of unstructured reviews weekly. Traditional sentiment analysis classifies text into superficial Positive/Negative labels without diagnosing specific root causes (e.g. shipping delays, counterfeit items, misleading photos, or customer service failures).",
    solution:
      "Engineered an end-to-end Python ML pipeline using Scikit-Learn and NLTK. Text undergoes custom cleaning, lemmatization, and n-gram TF-IDF vectorization, followed by multi-class classification and complaint root-cause extraction. Insights are served live via an interactive Gradio web application hosted on Hugging Face Spaces.",
    engineeringContributions: [
      "Engineered complete NLP text preprocessing pipeline with NLTK: lowercase normalization, punctuation removal, regex stopword filtering, and n-gram TF-IDF vector generation.",
      "Trained and tuned Random Forest classifier with stratified k-fold cross-validation, achieving ~91% validation accuracy on real-world e-commerce datasets.",
      "Built multi-label root-cause taxonomy classifier categorizing complaints into Product Quality, Pricing Transparency, Delivery Speed, and Support Responsiveness.",
      "Designed and deployed an interactive analytical web dashboard using Gradio on Hugging Face Spaces, allowing stakeholders to test raw customer reviews and view live probability breakdowns.",
    ],
    qualityAndReliability: [
      "Evaluated model performance using stratified precision, recall, and ROC-AUC curves; applied balanced class weights to eliminate skew from heavily imbalanced positive reviews.",
      "Constructed test harness verifying classification stability against colloquial slang, adversarial sarcasm, customer spelling errors, and emoji sets.",
      "Benchmarked inference latency: achieved sub-40ms single-review prediction and optimized batch processing for tens of thousands of records.",
      "Documented reproducibility guidelines, hyperparameter configurations, and model artifact versioning on Hugging Face.",
    ],
    technologies: [
      "Python",
      "Scikit-Learn",
      "Random Forest",
      "TF-IDF Vectorizer",
      "NLTK",
      "Pandas & NumPy",
      "Gradio",
      "Hugging Face Spaces",
    ],
    evidence: {
      liveUrl: "https://huggingface.co/spaces/Gechdev/techskillup-flikpart_sentiment_analaysis",
      githubUrl: "https://github.com/getabalewKemaw/flipkart-customer-review-intelligence-dashboard",
      metrics: [
        "~91% validation accuracy",
        "4 distinct root-cause categories",
        "< 40ms inference latency",
        "Stratified k-fold cross-validated",
      ],
      statusLabel: "Deployed on Hugging Face",
    },
    featured: true,
  },
  {
    id: "meshebesha-design",
    title: "Meshebesha Design – Enterprise E-Commerce Platform",
    subtitle: "High-Reliability Commerce Engine, Chapa Payment Gateway & Inventory Lifecycle",
    category: "Commerce & FinTech",
    badge: "Enterprise Commerce",
    image: "/projects/meshebesha.png",
    overview:
      "An enterprise commerce platform engineered to digitize business operations across product catalogs, cart persistence, inventory, and payment gateways. Integrates **Chapa payment services** with cryptographic webhook verification, **granular role-based access control (RBAC)**, and **ACID database transactions** preventing double-allocation race conditions.",
    problemStatement:
      "Growing retail and design businesses struggle with manual inventory tracking, lost orders, and disconnected payment systems. Without transactional guarantees, concurrent buyers cause stock over-selling and unresolved checkout failures.",
    solution:
      "Architected a full-stack digital commerce platform from the ground up using Next.js and PostgreSQL. Automates the full order lifecycle with strict state machine transitions, provides protected administrative portals for inventory management, and integrates Chapa payment gateways with signature verification for frictionless checkouts.",
    engineeringContributions: [
      "Designed RESTful API endpoints and normalized PostgreSQL relational schema for SKU product variations, customer orders, authenticated carts, and audit trails.",
      "Integrated Chapa Payment Gateway with HMAC webhook verification, securing the checkout flow and ensuring reliable payment reconciliation.",
      "Structured resilient order state machine (Created -> Awaiting Payment -> Confirmed -> Dispatched -> Completed) to preserve data integrity when requests fail or are retried.",
      "Built role-based administrative control (RBAC) enabling store managers to update stock thresholds, process customer reviews, and monitor order fulfillment metrics.",
    ],
    qualityAndReliability: [
      "Engineered ACID database transactions with row-level locks on stock quantities, completely preventing double-allocation race conditions during flash sales.",
      "Inspected query execution plans (EXPLAIN ANALYZE) on product filters and order queries, tuning B-tree indexes to maintain sub-15ms response times.",
      "Conducted comprehensive boundary testing across purchasing workflows, negative cart quantities, expired payment sessions, and network interruptions.",
      "Implemented server-side input validation and JWT authorization on all administrative endpoints.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Chapa Payment Gateway",
      "Tailwind CSS",
      "Prisma",
      "JWT & RBAC",
    ],
    evidence: {
      liveUrl: "https://meshebesha-design.vercel.app",
      githubUrl: "https://github.com/getabalewKemaw/MeshebeshaDesignFrontend",
      metrics: [
        "ACID stock concurrency guarantees",
        "Cryptographic Chapa webhook verification",
        "< 15ms DB query response",
        "100% RBAC endpoint coverage",
      ],
      statusLabel: "Production Live",
    },
    featured: true,
  },
  {
    id: "hirenest",
    title: "HireNest – Skill-Based Job Matching Platform",
    subtitle: "Algorithmic Compatibility Scoring, Enterprise Spring Boot Architecture & Strict RBAC",
    category: "Fullstack SaaS",
    badge: "Enterprise Backend",
    image: "/projects/hirenest.png",
    overview:
      "A full-stack employment matching platform designed to replace flawed keyword searches with **algorithmic skill-based compatibility scoring**. Built on an enterprise **Java Spring Boot backend**, supporting dual-persona workflows with **Spring Security stateless JWT** and **relational PostgreSQL indexing**.",
    problemStatement:
      "Traditional hiring boards rely on simplistic keyword matching, which penalizes qualified candidates who use differing terminology and floods employers with hundreds of unqualified applicants.",
    solution:
      "Engineered an algorithmic compatibility scoring engine in Spring Boot that calculates normalized match percentages between applicant skill sets, experience seniority, and job postings. Backed by a clean tiered architecture (Controller-Service-Repository) and secure Spring Security JWT authentication.",
    engineeringContributions: [
      "Engineered multi-dimensional candidate-to-job matching algorithm in Java Spring Boot, computing weighted compatibility scores based on core competencies and required proficiencies.",
      "Architected enterprise layered architecture (Controller, Service, Repository, DTO) ensuring clean separation of concerns and maintainability.",
      "Implemented Spring Security with stateless JWT authentication and strict Role-Based Access Control (RBAC) segregating Candidate and Recruiter operations.",
      "Designed relational PostgreSQL data models managing complex many-to-many relationships across skills, applicants, jobs, and application tracking stages.",
    ],
    qualityAndReliability: [
      "Formulated unit test suites with JUnit and Mockito verifying scoring algorithm edge cases, empty profiles, and conflicting skill taxonomies.",
      "Optimized PostgreSQL queries and applied composite indexes to prevent table scans during heavy candidate filtering and sorting.",
      "Enforced strict request validation with Jakarta Validation (Hibernate Validator) to eliminate malformed payloads.",
      "Standardized unified API exception handling and structured error responses across all REST endpoints.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Spring Security & JWT",
      "Hibernate / JPA",
      "RESTful APIs",
      "Tailwind CSS",
    ],
    evidence: {
      githubUrl: "https://github.com/getabalewKemaw/HireNest",
      metrics: [
        "Multi-factor match scoring algorithm",
        "Tiered Spring Boot architecture",
        "Stateless JWT RBAC protection",
        "Zero table scan indexing",
      ],
      statusLabel: "Open Source Architecture",
    },
    featured: true,
  },
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    id: "allcan-tech",
    role: "Full-Stack Developer & Instructor",
    company: "AllCan Technologies",
    companyUrl: "https://allcan.tech",
    location: "Addis Ababa, Ethiopia",
    period: "May 2026 – Present",
    isCurrent: true,
    description:
      "Leading technical curriculum design, full-stack platform engineering, and intensive engineering mentorship, training learners to build scalable production applications.",
    highlights: [
      "Design and lead engineering programs covering **full-stack modern engineering practices, scalable system architecture, and industry-standard workflows**.",
      "Mentor aspiring developers through **real-world software delivery, architecture reviews, practical debugging**, and production deployments.",
      "Collaborate directly with internal engineering teams to architect, test, and ship scalable web and mobile software solutions.",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Full-Stack Architecture", "Engineering Mentorship"],
  },
  {
    id: "solanova-qa",
    role: "Software Quality Assurance Engineer",
    company: "Solanova",
    companyUrl: "https://solanovatech.com/",
    location: "Addis Ababa, Ethiopia",
    period: "Oct 2026 – Present",
    isCurrent: true,
    description:
      "Directing quality assurance strategies, automated testing suites, and reliability verification across web platforms to guarantee zero-regression production releases.",
    highlights: [
      "Formulate and execute **end-to-end testing strategies** covering critical user workflows, API contracts, and edge-case failure modes.",
      "Investigate and benchmark **database query execution plans (PostgreSQL EXPLAIN)** to isolate and resolve performance bottlenecks prior to production deployment.",
      "Partner with developers to enforce server-side validation, error boundaries, and **zero-regression release standards** across sprint cycles.",
    ],
    skills: ["QA Automation", "Regression Testing", "API Contract Validation", "PostgreSQL EXPLAIN Plans", "Reliability Engineering"],
  },
  {
    id: "freelance-fullstack",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Ethiopia (Remote)",
    period: "2025 – Present",
    isCurrent: true,
    description:
      "Operating as an autonomous solo engineer delivering complete software lifecycles — from system architecture, database design, and frontend interfaces to automated QA, DevOps containerization, and zero-downtime deployment.",
    highlights: [
      "Handled complete **end-to-end architectures alone**, maintaining and scaling codebases spanning **over 2,000+ files** without external technical oversight.",
      "Architected, implemented, and deployed **3+ major production applications**, including high-velocity business platforms and custom client portals.",
      "Orchestrated the entire **DevOps & QA lifecycle**: automated unit and integration tests, Docker containerization, CI/CD pipelines, and cloud hosting.",
    ],
    skills: ["Solo End-to-End Delivery", "2,000+ File Codebases", "Docker & DevOps", "PostgreSQL", "Next.js", "React", "CI/CD Pipelines"],
  },
  {
    id: "miracle-intern",
    role: "Full-Stack Engineer Intern",
    company: "Miracle Technologies",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2025 – Feb 2026",
    isCurrent: false,
    description:
      "Contributed to enterprise full-stack development, delivering the Meshebesha Design commerce platform on time within an international Agile engineering team.",
    highlights: [
      "Engineered and delivered the **Meshebesha Design enterprise platform on schedule**, managing product catalogs, cart state machines, and payment flows.",
      "Designed and integrated secure **RESTful API endpoints, role-based authentication**, and relational database schemas.",
      "Collaborated in fast-paced **Agile sprint cycles**, resolving performance bottlenecks, conducting code reviews, and optimizing API response latencies.",
    ],
    skills: ["React", "Next.js", "Express.js", "PostgreSQL", "REST APIs", "Agile / Scrum", "On-Time Delivery"],
  },
];


