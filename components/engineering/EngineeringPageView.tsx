"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Database,
  ShieldCheck,
  Server,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";
import { sound } from "@/utils/sound";

interface HumanArchitecturePillar {
  id: string;
  category: string;
  title: string;
  tagline: string;
  approachTitle: string;
  approachText: string;
  avoidTitle: string;
  avoidText: string;
  resultTitle: string;
  resultText: string;
  takeaways: string[];
}

const PILLARS: HumanArchitecturePillar[] = [
  {
    id: "high-performance-core",
    category: "Backends & Databases",
    title: "Fast Backends & Databases",
    tagline: "Making your system fast and reliable before throwing money at bigger servers.",
    approachTitle: "Fix the real bottlenecks",
    approachText:
      "When an app slows down, the fix is usually inside the database. I tune slow queries and cache frequent requests so your pages load instantly.",
    avoidTitle: "Skip the hype",
    avoidText:
      "I don't split your app into ten microservices or add complicated tools you don't need. A clean, solid backend is easier to run and rarely breaks.",
    resultTitle: "What it means for you",
    resultText:
      "Your users get instant page loads, your servers don't crash when traffic spikes, and you keep your hosting bill low and predictable.",
    takeaways: [
      "Snappy performance for everyday users",
      "No bloated cloud or hosting bills",
      "Clean code that any developer can maintain",
    ],
  },
  {
    id: "automated-reliability",
    category: "Testing & Quality",
    title: "Testing What Actually Matters",
    tagline: "Automating tests on critical paths so checkouts and logins never break.",
    approachTitle: "Test real user flows",
    approachText:
      "I write automated tests that click through your actual app—logging in, adding to cart, and paying—just like a real customer would.",
    avoidTitle: "No vanity numbers",
    avoidText:
      "I don't waste hours testing trivial code just to show a green chart. I focus on the flows where a bug would actually cost you money or users.",
    resultTitle: "What it means for you",
    resultText:
      "You can deploy updates and new features anytime without holding your breath or worrying about breaking checkout for paying customers.",
    takeaways: [
      "Zero surprise checkout or login bugs",
      "Updates tested automatically before launch",
      "Total peace of mind when releasing new features",
    ],
  },
  {
    id: "automated-delivery",
    category: "Cloud & Deployments",
    title: "Simple, Painless Deployments",
    tagline: "Pushing code to production in minutes without downtime or late-night fire drills.",
    approachTitle: "Automated from push to live",
    approachText:
      "When code is ready, it gets tested, built, and deployed automatically. No manual server patching or risky copy-pasting over SSH.",
    avoidTitle: "Automatic safety net",
    avoidText:
      "If a new deployment runs into an unexpected error, the system automatically rolls back to the previous working version within seconds.",
    resultTitle: "What it means for you",
    resultText:
      "Releases become routine 5-minute events instead of stressful after-hours fire drills. Your users stay online the entire time.",
    takeaways: [
      "Zero downtime for active users during updates",
      "Instant automatic rollback if something fails",
      "Minimal, low-cost cloud configuration",
    ],
  },
  {
    id: "practical-ai",
    category: "AI & Search",
    title: "Smart Search & Factual AI",
    tagline: "Connecting AI to your real company documents so answers are accurate and helpful.",
    approachTitle: "Grounded in your data",
    approachText:
      "Instead of letting a chatbot guess or make up answers, I connect it to your actual product manuals, PDFs, and internal databases.",
    avoidTitle: "No hallucinations",
    avoidText:
      "If the answer isn't in your company documents, the system simply says so. It cites the exact source so you can verify it.",
    resultTitle: "What it means for you",
    resultText:
      "Customers and team members get instant, reliable answers they can actually trust, without embarrassing mistakes.",
    takeaways: [
      "Answers based 100% on your real documents",
      "Direct citations so you can double-check facts",
      "No made-up guesses or wrong information",
    ],
  },
];

export function EngineeringPageView() {
  const [activePillarId, setActivePillarId] = useState<string>("high-performance-core");

  const currentPillar =
    PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "high-performance-core":
        return <Database className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />;
      case "automated-reliability":
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />;
      case "automated-delivery":
        return <Server className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />;
      case "practical-ai":
        return <Cpu className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />;
      default:
        return <Layers className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-14 sm:gap-20 font-sans select-none text-left">
      {/* ---------------- 1. EDITORIAL HERO (FULL WIDTH & GENEROUS TOP CLEARANCE) ---------------- */}
      <header
        aria-label="Engineering Philosophy"
        className="w-full flex flex-col gap-6 sm:gap-8 border-b border-theme/20 pb-12 sm:pb-16 pt-4 sm:pt-8 text-left items-start"
      >
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
          <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
            how I build & architect software
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-light tracking-tight text-theme-primary leading-[1.08] w-full">
          I Architect for What Your Business Actually Needs. Not for Hype.
        </h1>

        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-2xl sm:text-3xl font-light text-theme-muted">/</span>
          <span className="hatch-text-band text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.08em] [font-variant-caps:all-small-caps] select-none">
            real-world optimization · sensible architecture · built to last
          </span>
        </div>

        <p className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-light text-theme-narrative leading-relaxed w-full">
          I optimize using what actually works and choose the right decision for your project. I don't use tools just because I can, and I don't force unnecessary complexity onto your company. Every decision starts with how your business works and what will make it fast, reliable, and affordable to maintain.
        </p>

        {/* 3 Core Human Principles (Generous, highly readable font sizes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 w-full pt-6">
          <div className="flex flex-col gap-2.5 text-left">
            <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-theme-muted font-medium">
              Built for your real business
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-theme-primary tracking-tight">
              No generic theory
            </h3>
            <p className="text-lg sm:text-xl md:text-[22px] font-light text-theme-narrative leading-relaxed">
              I don't design software for hypothetical scenarios. I look at how your business actually operates and build clean systems that solve your real problems.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 text-left">
            <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-theme-muted font-medium">
              Speed before extra cost
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-theme-primary tracking-tight">
              Optimize what exists
            </h3>
            <p className="text-lg sm:text-xl md:text-[22px] font-light text-theme-narrative leading-relaxed">
              Most slow apps don't need expensive new servers—they just need proper database indexes and caching. I optimize what's already there to save you money.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 text-left">
            <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-theme-muted font-medium">
              No unneeded complexity
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-theme-primary tracking-tight">
              No tools just because I can
            </h3>
            <p className="text-lg sm:text-xl md:text-[22px] font-light text-theme-narrative leading-relaxed">
              I avoid bloated frameworks and trendy buzzwords. Every piece of technology in your stack should have a clear job and earn its keep.
            </p>
          </div>
        </div>
      </header>

      {/* ---------------- 2. BORDERLESS DISCIPLINE SECTION ---------------- */}
      <section aria-label="Engineering Disciplines" className="w-full flex flex-col gap-10 sm:gap-12 text-left items-start">
        {/* Minimal Tab Bar with generous text sizing */}
        <div className="w-full flex flex-col gap-4 border-b border-theme/20 pb-5">
          <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-theme-muted font-medium">
            Choose an area:
          </span>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {PILLARS.map((pillar) => {
              const isSelected = activePillarId === pillar.id;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => {
                    sound.playSelect();
                    setActivePillarId(pillar.id);
                  }}
                  className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl text-base sm:text-lg md:text-xl font-normal transition-all cursor-pointer ${
                    isSelected
                      ? "bg-theme-chip text-theme-primary font-medium"
                      : "text-theme-muted hover:text-theme-primary hover:bg-theme-chip/40"
                  }`}
                >
                  <span className={isSelected ? "text-theme-primary" : "text-theme-muted"}>
                    {getPillarIcon(pillar.id)}
                  </span>
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Discipline Content (Large, readable, human fonts) */}
        <div className="w-full flex flex-col gap-10 sm:gap-12 text-left">
          {/* Header */}
          <div className="flex flex-col gap-2.5 w-full">
            <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-theme-muted font-medium">
              {currentPillar.category}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-theme-primary tracking-tight">
              {currentPillar.title}
            </h2>
            <p className="text-xl sm:text-2xl md:text-[26px] font-light text-theme-narrative leading-relaxed">
              {currentPillar.tagline}
            </p>
          </div>

          {/* 3 Human Columns with Large, Readable Card Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 w-full pt-2">
            <div className="flex flex-col gap-3">
              <span className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-wider text-theme-muted font-semibold">
                {currentPillar.approachTitle}
              </span>
              <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-light text-theme-narrative leading-relaxed">
                {currentPillar.approachText}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-wider text-theme-muted font-semibold">
                {currentPillar.avoidTitle}
              </span>
              <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-light text-theme-narrative leading-relaxed">
                {currentPillar.avoidText}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-wider text-theme-primary font-semibold">
                {currentPillar.resultTitle}
              </span>
              <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-normal text-theme-primary leading-relaxed">
                {currentPillar.resultText}
              </p>
            </div>
          </div>

          {/* Key Takeaways Row with Larger Text */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-12 pt-6">
            {currentPillar.takeaways.map((takeaway, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-light text-theme-primary"
              >
                <CheckCircle2 className="w-5 h-5 text-theme-primary shrink-0 opacity-80" strokeWidth={1.5} />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 3. FOOTER COLLABORATION ACTION BAR ---------------- */}
      <div className="w-full flex flex-wrap items-center justify-between gap-6 pt-12 sm:pt-16 border-t border-theme/20">
        <div className="flex flex-col gap-2 max-w-2xl text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-theme-primary tracking-tight">
            Want to build software that's fast, simple, and reliable?
          </h3>
          <p className="text-lg sm:text-xl md:text-[22px] font-light text-theme-narrative leading-relaxed">
            I help startups and founders build dependable backends, automated test suites, and clean deployments without bloated complexity.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-3 bg-theme-btn-primary text-theme-btn-primary px-7 py-4 rounded-[5px] text-lg sm:text-xl font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore Engineering Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/about"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-6 py-4 rounded-[3px] text-lg sm:text-xl font-normal transition-colors cursor-pointer"
          >
            <span>About me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
