"use client";

import { useState } from "react";
import { Download, Check } from "lucide-react";
import { CONTACT_EMAIL } from "@/data/portfolio-data";

export function ActionButtons() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 pt-4 theme-level-6">
      <a
        href="#resume"
        style={{ transitionDelay: "0ms" }}
        className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-6 py-3 rounded-[5px] text-base sm:text-lg md:text-xl font-normal hover:opacity-90 active:opacity-100 transition-all cursor-pointer theme-level-6"
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

      <a
        href="#projects"
        style={{ transitionDelay: "90ms" }}
        className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-tertiary hover:text-theme-primary bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg md:text-xl font-normal transition-colors cursor-pointer theme-level-6"
      >
        <span>View selected projects</span>
      </a>
    </div>
  );
}
