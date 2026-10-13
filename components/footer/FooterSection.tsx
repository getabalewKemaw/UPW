"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/icons";
import { SOCIAL_LINKS, TIMEZONE } from "@/data/portfolio-data";
import { sound } from "@/utils/sound";

export function FooterSection() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat("en-US", {
          timeZone: TIMEZONE,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeString);
      } catch {
        setCurrentTime("12:00 PM");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="w-full flex flex-col pt-12 sm:pt-16 pb-8 border-t border-theme/20 text-left items-start gap-10 sm:gap-14 font-sans select-none"
    >
      {/* 1. CLEAN TOP NAVIGATION & SOCIAL BAR (Larger, comfortable font sizes) */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-theme/15">
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-base sm:text-lg font-medium text-theme-narrative">
          <a
            href="#overview"
            onClick={() => sound.playClick()}
            className="hover:text-theme-primary transition-colors"
          >
            Overview
          </a>
          <Link
            href="/about"
            onClick={() => sound.playClick()}
            className="hover:text-theme-primary transition-colors"
          >
            About
          </Link>
          <a
            href="#projects"
            onClick={() => sound.playClick()}
            className="hover:text-theme-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => sound.playClick()}
            className="hover:text-theme-primary transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            className="hover:text-theme-primary transition-colors"
          >
            Contact
          </a>
          <Link
            href="/services"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-1.5 text-emerald-500 hover:text-emerald-400 font-semibold transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Services</span>
          </Link>
        </nav>

        {/* Social Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-base sm:text-lg">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 text-theme-muted hover:text-theme-primary transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 text-theme-muted hover:text-theme-primary transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 text-theme-muted hover:text-theme-primary transition-colors"
            title="Telegram"
          >
            <TelegramIcon className="w-5 h-5 text-[#229ed9]" />
            <span className="hidden sm:inline">Telegram</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] border border-theme/30 bg-theme-chip text-theme-chip hover:bg-theme-chip-hover text-sm sm:text-base font-mono transition-colors cursor-pointer ml-auto md:ml-2"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. THE MONUMENTAL CENTERPIECE: GETABALEW KEMAW ON DESKTOP, GK ON MOBILE */}
      <div className="w-full flex flex-col items-center justify-center py-6 sm:py-10 text-center select-none overflow-hidden group">
        <div
          onClick={() => {
            sound.playAffirm();
          }}
          title="Getabalew Kemaw · Fullstack Software Engineer"
          className="cursor-pointer transition-transform duration-700 ease-out hover:scale-[1.01] active:scale-[0.99] w-full flex items-center justify-center"
        >
          {/* Mobile Display: GK */}
          <h1 className="block md:hidden text-8xl sm:text-9xl font-black tracking-tighter hatch-text-band leading-none select-none drop-shadow-sm font-sans">
            GK
          </h1>

          {/* Desktop Display: Full Name GETABALEW KEMAW */}
          <h1 className="hidden md:block text-5xl lg:text-7xl xl:text-8xl 2xl:text-[9.5rem] font-black tracking-tight hatch-text-band leading-none select-none drop-shadow-sm font-sans uppercase whitespace-nowrap">
            GETABALEW KEMAW
          </h1>
        </div>
      </div>

      {/* 3. CLEAN BOTTOM METADATA BAR */}
      <div className="w-full pt-6 border-t border-theme/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base font-mono text-theme-muted">
        <div>
          © {currentYear} GETABALEW KEMAW. ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center gap-3 text-sm sm:text-base">
          <span>Addis Ababa, ET</span>
          {currentTime && (
            <>
              <span className="opacity-40">·</span>
              <span className="tabular-nums">{currentTime} (UTC+3)</span>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
