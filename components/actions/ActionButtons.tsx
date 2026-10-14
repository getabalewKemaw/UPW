"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { RESUME_URL } from "@/data/portfolio-data";
import { sound } from "@/utils/sound";

export function ActionButtons() {
  const handleServicesClick = () => {
    try {
      sessionStorage.setItem("gk_preloader_seen", "true");
    } catch {}
    sound.playClick();
  };

  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    sound.playSelect();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#projects");
    } else {
      window.location.href = "/#projects";
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4 pt-4 theme-level-6">
      {/* 1. Services & Booking */}
      <Link
        href="/services"
        onClick={handleServicesClick}
        style={{ transitionDelay: "0ms" }}
        className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-6 py-3 rounded-[5px] text-base sm:text-lg md:text-xl font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer theme-level-6"
      >
        <span>Services & booking</span>
      </Link>

      {/* 2. Download Resume */}
      <a
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sound.playClick()}
        style={{ transitionDelay: "45ms" }}
        className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[5px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer theme-level-6"
      >
        <Download className="w-5 h-5" />
        <span>Download resume</span>
      </a>

      {/* 3. View Projects */}
      <a
        href="#projects"
        onClick={handleViewProjects}
        style={{ transitionDelay: "90ms" }}
        className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[5px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer theme-level-6"
      >
        <span>View projects</span>
      </a>
    </div>
  );
}
