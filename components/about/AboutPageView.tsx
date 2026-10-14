"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Check,
  Send,
  Sparkles,
} from "lucide-react";
import { SocialMentions } from "@/components/profile/SocialMentions";
import { LiveStatusBadge } from "@/components/profile/LiveStatusBadge";
import { CONTACT_EMAIL, RESUME_URL } from "@/data/portfolio-data";
import { sound } from "@/utils/sound";

export function AboutPageView() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL);
    sound.playCopy();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 font-sans select-none text-left">
      {/* ---------------- 1. EDITORIAL HEADER & TITLE WITH PHOTO ON THE RIGHT ---------------- */}
      <header aria-label="About Header" className="w-full flex flex-col gap-8 border-b border-theme/20 pb-8 sm:pb-12 pt-2">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Full Editorial Text */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left items-start">
            <div className="flex items-baseline gap-2.5 sm:gap-3">
              <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
              <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
                about getabalew kemaw
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-light tracking-tight text-theme-primary leading-[1.08]">
              Speed, UI Craftsmanship & Algorithmic Rigor.
            </h1>

            <div className="flex items-baseline gap-2.5 sm:gap-3">
              <span className="text-2xl sm:text-3xl font-light text-theme-muted">/</span>
              <span className="hatch-text-band text-2xl sm:text-3xl font-semibold tracking-[0.08em] [font-variant-caps:all-small-caps] select-none">
                fullstack software engineer & ai researcher
              </span>
            </div>

            <p className="text-xl sm:text-2xl md:text-[23px] font-light text-theme-narrative leading-relaxed pt-1">
              I am a software engineer based in <span className="text-theme-primary font-normal">Addis Ababa, Ethiopia</span>, working with founders and technical teams worldwide. Clients value me for two things: <strong className="font-semibold text-theme-primary">unusually fast execution speed</strong> and <strong className="font-semibold text-theme-primary">interfaces that feel exceptionally crafted and effortless to use</strong>.
            </p>

            {/* Social Mentions & Live Availability Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-3 w-full border-t border-theme/15">
              <SocialMentions />
              <LiveStatusBadge />
            </div>
          </div>

          {/* Right Column: Photo on the Right */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[4px] border border-theme-avatar overflow-hidden bg-theme-avatar shadow-sm group/hero-photo cursor-pointer">
              {/* Default Photo: profilephoto2.png */}
              <Image
                src="/bg/profilephoto2.png"
                alt="Getabalew Kemaw"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                priority
                className="object-cover object-top transition-all duration-500 ease-out group-hover/hero-photo:opacity-0 group-hover/hero-photo:scale-105"
              />

              {/* Hover Photo: profilephoto.png */}
              <Image
                src="/bg/profilephoto.png"
                alt="Getabalew Kemaw"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-top transition-all duration-500 ease-out opacity-0 scale-95 group-hover/hero-photo:opacity-100 group-hover/hero-photo:scale-100"
              />

              {/* Bottom Tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/95 bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-[3px] border border-white/10">
                <span className="font-medium">Getabalew Kemaw</span>
                <span className="text-emerald-400">Addis Ababa (UTC+3)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- 2. THE DUAL PORTRAITS (BOTH PHOTOS) ---------------- */}
      <section aria-label="Portraits" className="w-full flex flex-col gap-4 border-t border-b border-theme/20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Photo 1: profilephoto2.png (Systems Architect & Algorithmic Rigor) */}
          <div className="flex flex-col sm:flex-row items-start gap-6 group">
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-[3px] border border-theme-avatar overflow-hidden shrink-0 bg-theme-avatar">
              <Image
                src="/bg/profilephoto2.png"
                alt="Getabalew Kemaw · Systems Architecture & Research"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                priority
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-theme-muted">
                Profile 01 · Architect
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-theme-primary">
                Systems Architecture & Scale
              </h3>
              <p className="text-base sm:text-lg font-light text-theme-narrative leading-relaxed">
                Focused on distributed system design, clean backend concurrency, database modeling, and algorithmic problem solving. I solve LeetCode problems for fun to keep my core algorithmic intuition razor sharp.
              </p>
            </div>
          </div>

          {/* Photo 2: profilephoto.png (Creative Builder & AI Engineer) */}
          <div className="flex flex-col sm:flex-row items-start gap-6 group">
            <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-[3px] border border-theme-avatar overflow-hidden shrink-0 bg-theme-avatar">
              <Image
                src="/bg/profilephoto.png"
                alt="Getabalew Kemaw · Creative Technologist & AI-Native Builder"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-theme-muted">
                Profile 02 · Builder
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-theme-primary">
                AI-Native Velocity & UI Craft
              </h3>
              <p className="text-base sm:text-lg font-light text-theme-narrative leading-relaxed">
                Mastering the latest AI engineering tools like Claude Code and agentic pipelines to build at 10x speed, while obsessing over micro-interactions, responsive harmony, and interfaces people genuinely love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. WHY CLIENTS LOVE WORKING WITH ME ---------------- */}
      <section aria-label="Why Clients Work With Me" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-2.5 sm:gap-3">
            <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
            <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
              client experience & strengths
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-theme-primary leading-tight">
            Why Clients & Teams Trust Me
          </h2>
        </div>

        <div className="flex flex-col gap-8 text-xl sm:text-2xl md:text-[23px] font-light text-theme-narrative leading-relaxed pt-2">
          {/* Point 1: Speed */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span className="text-theme-muted font-mono text-base sm:text-lg">01.</span>
              <h3 className="text-2xl sm:text-3xl font-light text-theme-primary">
                Relentless Execution Velocity
              </h3>
            </div>
            <p className="pl-7 sm:pl-9 leading-relaxed">
              Speed is one of my greatest advantages. While traditional teams spend weeks in meetings, I turn vague product requirements into deployed, functioning software in days. I prototype rapidly, iterate with live feedback, and ship without letting technical debt pile up.
            </p>
          </div>

          {/* Point 2: UI/UX Craftsmanship */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span className="text-theme-muted font-mono text-base sm:text-lg">02.</span>
              <h3 className="text-2xl sm:text-3xl font-light text-theme-primary">
                Obsession with Clean User Interfaces
              </h3>
            </div>
            <p className="pl-7 sm:pl-9 leading-relaxed">
              I don&apos;t build generic, cookie-cutter interfaces. I care deeply about typography, responsive balance, micro-animations, audio feedback, and visual hierarchy. When users interact with software I&apos;ve built, it feels effortless, responsive, and alive.
            </p>
          </div>

          {/* Point 3: Communication & Trust */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span className="text-theme-muted font-mono text-base sm:text-lg">03.</span>
              <h3 className="text-2xl sm:text-3xl font-light text-theme-primary">
                Proactive Communication & Earned Trust
              </h3>
            </div>
            <p className="pl-7 sm:pl-9 leading-relaxed">
              Founders and engineering leaders trust me because I take complete ownership. You get daily transparency, clear explanations of technical tradeoffs, and zero surprises. If something isn&apos;t working, I say so immediately with a concrete solution.
            </p>
          </div>

          {/* Point 4: Modern AI Tools (Claude Code) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span className="text-theme-muted font-mono text-base sm:text-lg">04.</span>
              <h3 className="text-2xl sm:text-3xl font-light text-theme-primary">
                Leveraging Modern AI Tooling (Claude Code)
              </h3>
            </div>
            <p className="pl-7 sm:pl-9 leading-relaxed">
              I am an early adopter and power-user of current AI engineering tools like Claude Code, agentic workflows, and LLM integrations. I use AI not to replace engineering judgment, but to 10x development throughput, automate repetitive boilerplate, and build intelligent AI capabilities directly into client apps.
            </p>
          </div>

          {/* Point 5: Researcher & LeetCode */}
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-3">
              <span className="text-theme-muted font-mono text-base sm:text-lg">05.</span>
              <h3 className="text-2xl sm:text-3xl font-light text-theme-primary">
                Continuous Technical Research & LeetCode for Fun
              </h3>
            </div>
            <p className="pl-7 sm:pl-9 leading-relaxed">
              I am perpetually curious. Outside of active client projects, I spend hours researching modern distributed system architecture, caching and event streams, backend scalability, and new UI interaction patterns. I regularly solve LeetCode algorithmic problems for fun, which keeps my code optimal, elegant, and computationally sound.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- 4. HOW I WORK WITH CLIENTS (THE PLAYBOOK) ---------------- */}
      <section aria-label="How I Work" className="flex flex-col gap-6 border-t border-theme/20 pt-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-2.5 sm:gap-3">
            <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
            <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
              execution process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-theme-primary leading-tight">
            How I Bring Your Project to Life
          </h2>
          <p className="text-xl sm:text-2xl font-light text-theme-narrative leading-relaxed">
            When you bring me an idea or challenge, here is exactly how we deliver:
          </p>
        </div>

        <div className="flex flex-col divide-y divide-theme/20 border-t border-b border-theme/20 w-full">
          <div className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
            <span className="font-mono text-sm text-theme-muted uppercase tracking-wider shrink-0 sm:w-48">
              Step 01 · Alignment
            </span>
            <p className="text-lg sm:text-xl font-light text-theme-narrative leading-relaxed flex-1">
              We align on your real goals, user needs, and architectural boundaries. I ask the hard questions early so we build the right thing on the first try.
            </p>
          </div>

          <div className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
            <span className="font-mono text-sm text-theme-muted uppercase tracking-wider shrink-0 sm:w-48">
              Step 02 · System Design
            </span>
            <p className="text-lg sm:text-xl font-light text-theme-narrative leading-relaxed flex-1">
              I design the database schema, API contracts, and component architecture with scale, security, and simplicity in mind.
            </p>
          </div>

          <div className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
            <span className="font-mono text-sm text-theme-muted uppercase tracking-wider shrink-0 sm:w-48">
              Step 03 · AI-Powered Sprint
            </span>
            <p className="text-lg sm:text-xl font-light text-theme-narrative leading-relaxed flex-1">
              Using modern AI tooling like Claude Code, I build the fullstack features with lightning speed. You get continuous commits and early staging previews.
            </p>
          </div>

          <div className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
            <span className="font-mono text-sm text-theme-muted uppercase tracking-wider shrink-0 sm:w-48">
              Step 04 · Polish & Handover
            </span>
            <p className="text-lg sm:text-xl font-light text-theme-narrative leading-relaxed flex-1">
              I refine UI micro-interactions, test edge cases, deploy to production, and walk your team through full documentation and hands-on training.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- 5. ACTIONS ROW (MATCHING ActionButtons.tsx) ---------------- */}
      <section aria-label="Actions" className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          onClick={() => sound.playClick()}
          className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-6 py-3 rounded-[5px] text-base sm:text-lg md:text-xl font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          <Send className="w-5 h-5 opacity-90" />
          <span>Start a project</span>
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer"
        >
          {copiedEmail ? (
            <>
              <Check className="w-5 h-5 text-emerald-500" />
              <span>Email copied!</span>
            </>
          ) : (
            <span>Copy email</span>
          )}
        </button>

        <Link
          href="/services"
          onClick={() => sound.playClick()}
          className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <span>Services & booking</span>
        </Link>

        <Link
          href="/#projects"
          onClick={() => sound.playClick()}
          className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-tertiary hover:text-theme-primary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer"
        >
          <span>View projects</span>
        </Link>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playClick()}
          className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-tertiary hover:text-theme-primary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Resume</span>
        </a>
      </section>
    </div>
  );
}
