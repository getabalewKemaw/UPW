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
      className="w-full flex flex-col pt-12 sm:pt-16 pb-0 border-t border-theme/20 text-left items-start gap-8 sm:gap-10 font-sans select-none"
    >
      {/* 1. TOP NAVIGATION & SOCIAL BAR (Increased comfortable font sizes) */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-theme/15">
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-lg sm:text-xl font-light text-theme-narrative">
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
            className="inline-flex items-center gap-1.5 text-theme-primary hover:text-theme-primary/80 font-medium transition-colors"
          >
            <Sparkles className="w-4.5 h-4.5" />
            <span>Services</span>
          </Link>
        </nav>

        {/* Social Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-base sm:text-lg">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2.5 text-theme-muted hover:text-theme-primary transition-colors"
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
            className="inline-flex items-center gap-2.5 text-theme-muted hover:text-theme-primary transition-colors"
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
            className="inline-flex items-center gap-2.5 text-theme-muted hover:text-theme-primary transition-colors"
            title="Telegram"
          >
            <TelegramIcon className="w-5 h-5 text-[#229ed9]" />
            <span className="hidden sm:inline">Telegram</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[4px] border border-theme/30 bg-theme-chip text-theme-chip hover:bg-theme-chip-hover text-base sm:text-lg font-mono transition-colors cursor-pointer ml-auto md:ml-2"
          >
            <span>Top</span>
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* 2. METADATA ROW: COPYRIGHT & ADDIS ABABA TIMEZONE (Increased readable size) */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-base sm:text-lg font-mono text-theme-muted">
        <div>
          © {currentYear} GETABALEW KEMAW. ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center gap-3 text-base sm:text-lg">
          <span>Addis Ababa, ET</span>
          {currentTime && (
            <>
              <span className="opacity-40">·</span>
              <span className="tabular-nums text-theme-primary font-medium">{currentTime} (UTC+3)</span>
            </>
          )}
        </div>
      </div>

      {/* 3. THE MONUMENTAL CENTERPIECE SPANNING TO THE BOTTOM */}
      <div className="w-full flex flex-col items-center justify-center pt-6 sm:pt-8 md:pt-10 pb-0 text-center select-none overflow-visible">
        <div
          onClick={() => {
            sound.playAffirm();
          }}
          title="Getabalew Kemaw · Fullstack Software Engineer"
          className="inline-block cursor-pointer select-none transition-transform duration-500 ease-out hover:-translate-y-2 sm:hover:-translate-y-3.5 active:scale-[0.99] group px-4 sm:px-6"
        >
          {/* Mobile Display: Two bold stacked lines */}
          <div className="flex md:hidden flex-col items-center justify-center leading-none">
            <span className="text-[14.5vw] sm:text-[13vw] font-black tracking-tight leading-[0.86] select-none uppercase opacity-20 group-hover:opacity-100 hatch-text-band transition-all duration-500 ease-out font-sans px-2">
              GETABALEW
            </span>
            <span className="text-[14.5vw] sm:text-[13vw] font-black tracking-tight leading-[0.86] select-none uppercase opacity-20 group-hover:opacity-100 hatch-text-band transition-all duration-500 ease-out font-sans px-2">
              KEMAW
            </span>
          </div>

          {/* Desktop Display: Single-Line Full Name (Monumental & impactful, G & W cleanly visible) */}
          <h1 className="hidden md:block text-[6.8vw] md:text-[7.6vw] lg:text-[8.2vw] xl:text-[8.8vw] 2xl:text-[9.2vw] font-black tracking-tight leading-[0.86] select-none uppercase whitespace-nowrap opacity-20 group-hover:opacity-100 hatch-text-band transition-all duration-500 ease-out font-sans drop-shadow-sm px-4">
            GETABALEW KEMAW
          </h1>
        </div>
      </div>
    </footer>
  );
}
