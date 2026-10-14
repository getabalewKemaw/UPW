import { EngineeringPillar } from "@/types/portfolio";

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: "backend-architecture",
    number: "",
    category: "Backend & Data Optimization",
    title: "Pragmatic Architecture & Database Optimization",
    subtitle: "Clean Data Modeling, Strategic Caching & Query Optimization",
    summary:
      "I optimize database queries and caching before reaching for distributed complexity. A well-indexed relational database with smart in-memory caching stays fast and reliable without unnecessary hosting overhead.",
    technologies: [
      "PostgreSQL",
      "Redis",
      "Node.js",
      "Prisma",
      "Docker",
    ],
    metrics: [
      "Fast Query Execution",
      "Reduced Server Load",
      "Zero Deadlocks",
    ],
    impact: {
      problem:
        "High user traffic and unoptimized relational queries were causing database bottlenecks and slow page loads during peak hours.",
      decision:
        "Instead of immediately adding expensive servers or complex distributed databases, I restructured the relational indexes and implemented in-memory caching for repeated read requests.",
      implementation:
        "We applied this in production systems, tuning database indexes to match actual query patterns and isolating high-traffic read pathways behind Redis with automatic cache updates.",
      validation:
        "Analyzed database query execution plans before and after optimization and stress-tested the application under simulated heavy user concurrency.",
      outcome:
        "Significantly reduced database strain, eliminated slow query bottlenecks, and kept application response times smooth under heavy production traffic.",
    },
    deepDivePoints: [
      "Targeted database indexing so queries scan only what they need",
      "Strategic in-memory caching for repeated high-traffic requests",
      "Clean relational transactions preventing corrupted or orphaned data",
      "Connection pool bounds preventing sudden traffic spikes from exhausting database limits",
    ],
  },
  {
    id: "qa-testing",
    number: "",
    category: "Reliability & Automated Testing",
    title: "Real User Journeys & Automated Testing",
    subtitle: "Automated E2E Testing, Integration Tests & Regression Blockers",
    summary:
      "I test critical user journeys to protect the business, not to chase vanity metrics. If checkout, authentication, or payment flows break, automated gates stop the code before it reaches production.",
    technologies: [
      "Playwright",
      "Jest",
      "GitHub Actions",
      "PostgreSQL",
      "TypeScript",
    ],
    metrics: [
      "Zero Production Escapes",
      "Automated Merge Gates",
      "Full Flow Protection",
    ],
    impact: {
      problem:
        "Frequent software updates risked introducing unexpected bugs in account logins, form submissions, and third-party payment callbacks across desktop and mobile devices.",
      decision:
        "Built automated end-to-end browser test suites testing real user journeys on desktop and mobile viewports, running automatically on every pull request.",
      implementation:
        "We applied automated Playwright test suites covering full checkout flows, authentication session handling, payment callbacks, and critical user forms as mandatory merge gates.",
      validation:
        "Continuous automated test execution across multiple browsers on every pull request, blocking any update that produces a regression.",
      outcome:
        "Protected essential revenue pathways, stopped breaking bugs before deployment, and enabled reliable releases without last-minute panic.",
    },
    deepDivePoints: [
      "Automated browser tests verifying real user actions across desktop and mobile viewports",
      "Isolated test databases that reset cleanly for reliable test results",
      "Simulating third-party API and payment webhook failure scenarios",
      "Automated pull request checks blocking regressions from ever reaching users",
    ],
  },
  {
    id: "infrastructure-devops",
    number: "",
    category: "Deployments & Cloud Operations",
    title: "Lightweight Containers & Automated Deployments",
    subtitle: "Minimal Docker Images, Zero-Downtime Delivery & Health Monitoring",
    summary:
      "A feature is not finished until it is automated, containerized, and deployed reliably. I keep cloud setups clean, reproducible, and automated from git push to production.",
    technologies: [
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Linux",
      "Prometheus",
    ],
    metrics: [
      "Automated Delivery",
      "Consistent Uptime",
      "Zero-Downtime Rollouts",
    ],
    impact: {
      problem:
        "Differences between local machines and cloud servers created deployment headaches, fragile manual release steps, and slow recovery if a server ran into an issue.",
      decision:
        "Standardized on minimal, secure Docker containers, automated GitHub Actions pipelines, an Nginx reverse proxy, and automatic container health monitoring.",
      implementation:
        "We applied automated CI/CD workflows that test, build, and deploy container images with zero downtime and automatic rollback safeguards if a health probe fails.",
      validation:
        "Simulated container restarts and network interruptions to verify that reverse proxy failover and health probes recover services automatically without downtime.",
      outcome:
        "Replaced slow, error-prone manual deployments with a fast automated pipeline, maintaining consistent uptime and zero deployment downtime.",
    },
    deepDivePoints: [
      "Lightweight Docker builds including only the essential production assets",
      "Reverse proxy configuration for fast delivery, SSL termination, and rate limiting",
      "Automated deployment pipelines that test and build on every push",
      "Automatic health monitoring that rolls back failed updates immediately",
    ],
  },
  {
    id: "ai-engineering",
    number: "",
    category: "AI Engineering & Grounded Search",
    title: "Grounded AI Systems & Hybrid Search",
    subtitle: "Source-Grounded Retrieval, Vector Similarity & Factual Responses",
    summary:
      "I ground AI outputs in verified source data so systems provide factual, cited answers instead of guesses or hallucinations.",
    technologies: [
      "pgvector",
      "Python",
      "OpenAI",
      "PostgreSQL",
      "TypeScript",
    ],
    metrics: [
      "Source Grounded",
      "Zero Hallucinations",
      "Accurate Answers",
    ],
    impact: {
      problem:
        "Generic vector search often missed exact technical keywords and model numbers, while AI models hallucinated when given broad, unorganized text documents.",
      decision:
        "Designed a hybrid search pipeline combining vector similarity with database keyword search, feeding the model only verified, relevant excerpts.",
      implementation:
        "We applied clean document chunking, combined keyword-plus-vector retrieval, and strict relevance guardrails to ground generative answers in verified company data.",
      validation:
        "Tested retrieval accuracy across hundreds of real query benchmarks, verifying that every answer cited factual source material.",
      outcome:
        "Eliminated hallucinations, kept all responses strictly grounded in verified source data, and delivered accurate information users can trust.",
    },
    deepDivePoints: [
      "Grounded context so the AI only answers from verified source material",
      "Hybrid search combining conceptual similarity with exact keyword matching",
      "Clean document chunking that preserves context and meaning",
      "Guardrails preventing out-of-domain answers and hallucinations",
    ],
  },
];
