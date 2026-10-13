"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Check, Sparkles } from "lucide-react";
import { CONTACT_EMAIL, RESUME_URL } from "@/data/portfolio-data";
import { sound } from "@/utils/sound";

export function ActionButtons() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL);
    sound.playCopy();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleServicesClick = () => {
    try {
      sessionStorage.setItem("gk_preloader_seen", "true");
    } catch {}
    sound.playClick();
  };

  return (
    <div className="flex flex-wrap items-center gap-4 pt-4 theme-level-6">
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sound.playClick()}
        style={{ transitionDelay: "0ms" }}
        className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-6 py-3 rounded-[5px] text-base sm:text-lg md:text-xl font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer theme-level-6"
      >
        <Download className="w-5 h-5" />
        <span>Download resume</span>
      </a>

      <button
        type="button"
        onClick={handleCopyEmail}
        style={{ transitionDelay: "45ms" }}
        className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-secondary bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer theme-level-6"
      >
        {copiedEmail ? (
          <>
            <Check className="w-5 h-5 text-emerald-500" />
            <span>Email copied!</span>
          </>
        ) : (
          <span>Get in touch</span>
        )}
      </button>

      <Link
        href="/services"
        onClick={handleServicesClick}
        style={{ transitionDelay: "90ms" }}
        className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer theme-level-6"
      >
        <span>Services & booking</span>
      </Link>

      <Link
        href="/about"
        onClick={() => sound.playClick()}
        style={{ transitionDelay: "110ms" }}
        className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer theme-level-6"
      >
        <span>About me</span>
      </Link>

      <a
        href="#projects"
        style={{ transitionDelay: "135ms" }}
        className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-tertiary hover:text-theme-primary bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer theme-level-6"
      >
        <span>View projects</span>
      </a>
    </div>
  );
}
