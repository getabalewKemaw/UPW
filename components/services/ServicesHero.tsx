"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { sound } from "@/utils/sound";

export function ServicesHero() {
  const scrollToBooking = () => {
    sound.playClick();
    const el = document.getElementById("appointment-booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col gap-8 sm:gap-10 pt-4 sm:pt-6">
      {/* Side-by-Side Main Split (Services Hero Text on Left · World Connectivity Image on Right) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Editorial Info & Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-4 text-left items-start">
          <div className="flex items-baseline gap-2.5 sm:gap-3">
            <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
            <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
              engineering offerings & client services
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-light tracking-tight text-theme-primary leading-[1.08]">
            Custom Solutions, Business Automation & Software Training
          </h1>

          <p className="text-xl sm:text-2xl md:text-[24px] font-light text-theme-narrative leading-relaxed">
            I develop custom software solutions that are <strong className="font-semibold text-theme-primary">easy to use</strong> and <strong className="font-semibold text-theme-primary">automate your business operations with exceptional quality</strong>. Because I care deeply about quality and reliability, I also provide <strong className="font-semibold text-theme-primary">complete hands-on software training</strong> so you and your team can operate your new systems with complete confidence.
          </p>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              type="button"
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-6 py-3 rounded-[5px] text-base sm:text-lg font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5" />
              <span>Message & Book (&lt; 15 min response)</span>
            </button>

            <Link
              href="/"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-5 py-3 rounded-[3px] text-base sm:text-lg font-normal transition-colors cursor-pointer"
            >
              <span>View portfolio</span>
            </Link>
          </div>
        </div>

        {/* Right Column: World Connectivity Visual Hero */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden border border-theme/25 bg-theme-chip/30 shadow-md group">
            <Image
              src="/world.jpg"
              alt="Global connectivity map connecting Addis Ababa to tech hubs worldwide"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            {/* Gradient Vignette for Seamless Aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-t from-theme-page/80 via-transparent to-transparent pointer-events-none" />

            {/* Floating Top Status Badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-black/70 backdrop-blur-md text-white text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Addis Ababa (UTC+3) · Remote Worldwide</span>
            </div>

            {/* Bottom Floating Info Pill */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg">
              <span>Timezones: US · UK · EU · Dubai</span>
              <span className="text-emerald-400 font-semibold">&lt; 15m reply</span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Bar with Live Availability Status */}
      <div className="flex flex-wrap items-center justify-between gap-5 pt-2 border-b border-theme pb-6 sm:pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[4px] text-sm sm:text-base font-mono bg-theme-chip text-theme-primary">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Available for new projects, workshops & talks</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] text-sm sm:text-base font-mono text-theme-muted bg-theme-chip/50">
            <span>Direct architectural consulting & team empowerment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
