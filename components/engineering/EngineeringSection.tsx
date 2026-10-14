"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Database,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Server,
  Layers,
  ArrowRight,
} from "lucide-react";
import { sound } from "@/utils/sound";

interface HumanDomain {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  approachTitle: string;
  approachText: string;
  avoidTitle: string;
  avoidText: string;
  resultTitle: string;
  resultText: string;
  takeaways: string[];
}

const BUSINESS_DOMAINS: HumanDomain[] = [
  {
    id: "core-systems",
    category: "Backends & Databases",
    title: "Fast Backends & Databases",
    subtitle: "Making your system fast and reliable before throwing money at bigger servers.",
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
    subtitle: "Automating tests on critical paths so checkouts and logins never break.",
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
    subtitle: "Pushing code to production in minutes without downtime or late-night fire drills.",
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
    subtitle: "Connecting AI to your real company documents so answers are accurate and helpful.",
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

export function EngineeringSection() {
  const [activeDomainId, setActiveDomainId] = useState<string>("core-systems");

  const activeDomain =
    BUSINESS_DOMAINS.find((d) => d.id === activeDomainId) || BUSINESS_DOMAINS[0];

  const handleSelectDomain = (id: string) => {
    sound.playSelect();
    setActiveDomainId(id);
  };

  const getDomainIcon = (id: string) => {
    switch (id) {
      case "core-systems":
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
    <section
      id="engineering"
      aria-label="Engineering Discipline and Architecture Approach"
      className="w-full flex flex-col gap-10 sm:gap-14 pt-8 sm:pt-12 scroll-mt-28"
    >
      {/* ---------------- Section Header ---------------- */}
      <div className="flex flex-col gap-4 text-left items-start w-full">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
          <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
            how I build & architect software
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
          <div className="flex flex-col gap-3 max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-light tracking-tight text-theme-primary leading-[1.08]">
              I Architect for What Your Business Actually Needs.
            </h2>
            <p className="text-xl sm:text-2xl md:text-[24px] lg:text-[26px] font-light text-theme-narrative leading-relaxed">
              I optimize using what works. I choose the right decision for your project. I do not use tools just because I can.
            </p>
          </div>

          <div className="text-sm sm:text-base font-mono text-theme-muted shrink-0 pb-1">
            <span>Built for Real Business</span>
          </div>
        </div>
      </div>

      {/* ---------------- Clean Minimal Tab Bar with generous text sizing ---------------- */}
      <div className="w-full flex flex-col gap-4 border-b border-theme/20 pb-5">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {BUSINESS_DOMAINS.map((domain) => {
            const isSelected = activeDomain.id === domain.id;

            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => handleSelectDomain(domain.id)}
                className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl text-base sm:text-lg md:text-xl font-normal transition-all cursor-pointer ${
                  isSelected
                    ? "bg-theme-chip text-theme-primary font-medium"
                    : "text-theme-muted hover:text-theme-primary hover:bg-theme-chip/40"
                }`}
              >
                <span className={isSelected ? "text-theme-primary" : "text-theme-muted"}>
                  {getDomainIcon(domain.id)}
                </span>
                <span>{domain.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------------- Active Domain Content with Large, Readable Card Text ---------------- */}
      <div className="w-full flex flex-col gap-10 sm:gap-12 text-left">
        {/* Domain Title Row */}
        <div className="flex flex-col gap-2.5 w-full">
          <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-theme-muted font-medium">
            {activeDomain.category}
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-theme-primary tracking-tight">
            {activeDomain.title}
          </h3>
          <p className="text-xl sm:text-2xl md:text-[26px] font-light text-theme-narrative leading-relaxed">
            {activeDomain.subtitle}
          </p>
        </div>

        {/* 3 Human Columns with Large, Readable Card Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 w-full pt-2">
          {/* 1. Approach */}
          <div className="flex flex-col gap-3 text-left">
            <span className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-wider text-theme-muted font-semibold">
              {activeDomain.approachTitle}
            </span>
            <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-light text-theme-narrative leading-relaxed">
              {activeDomain.approachText}
            </p>
          </div>

          {/* 2. Avoid */}
          <div className="flex flex-col gap-3 text-left">
            <span className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-wider text-theme-muted font-semibold">
              {activeDomain.avoidTitle}
            </span>
            <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-light text-theme-narrative leading-relaxed">
              {activeDomain.avoidText}
            </p>
          </div>

          {/* 3. Result */}
          <div className="flex flex-col gap-3 text-left">
            <span className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-wider text-theme-primary font-semibold">
              {activeDomain.resultTitle}
            </span>
            <p className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-normal text-theme-primary leading-relaxed">
              {activeDomain.resultText}
            </p>
          </div>
        </div>

        {/* 3 Concise Key Takeaways with Larger Text */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-12 pt-6">
          {activeDomain.takeaways.map((takeaway, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-light text-theme-primary"
            >
              <CheckCircle2 className="w-5 h-5 text-theme-primary shrink-0 opacity-80" strokeWidth={1.5} />
              <span>{takeaway}</span>
            </div>
          ))}
        </div>

        {/* Bottom Link to Full /engineering Page */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-theme/20 w-full text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-theme-primary/60" />
            <span className="text-sm sm:text-base font-mono text-theme-muted">
              Sensible Architecture · Built for What Your Company Does
            </span>
          </div>

          <Link
            href="/engineering"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-theme-primary hover:text-theme-primary/80 font-semibold group cursor-pointer"
          >
            <span>Explore Architecture Approach on /engineering</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
