"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import { ServiceItem } from "@/types/portfolio";
import { TechIcon } from "@/components/icons/TechIcons";
import { sound } from "@/utils/sound";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelectBookingTier: (tierId: string) => void;
}

function renderHighlightedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-theme-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function ServiceCard({
  service,
  index,
  onSelectBookingTier,
}: ServiceCardProps) {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const handleTechClick = (tech: string) => {
    sound.playSelect();
    setActiveTech((prev) => (prev === tech ? null : tech));
  };

  const handleBookClick = () => {
    sound.playClick();
    onSelectBookingTier(service.bookingTierId);
    const el = document.getElementById("appointment-booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <article
      id={`service-${service.id}`}
      className="group py-12 sm:py-16 md:py-20 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 border-b border-theme/20 last:border-b-0 transition-colors"
    >
      {/* ---------------- LEFT COL: Clean Index, Badge & Quick Direct Action ---------------- */}
      <div className="md:w-[260px] lg:w-[290px] shrink-0 flex flex-col gap-4 text-left items-start">
        <div className="flex flex-col gap-2">
          {/* Editorial Index & Clean Badge (Zero Border-Soup) */}
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-mono font-light text-theme-muted/50 group-hover:text-theme-primary transition-colors">
              0{index + 1}
            </span>
            <span className="px-3 py-1 rounded-[3px] text-xs font-mono uppercase tracking-wider bg-theme-chip text-theme-primary">
              {service.badge}
            </span>
          </div>

          <span className="text-xs font-mono text-theme-muted font-medium tracking-wide pt-0.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-primary/70 inline-block" />
            <span>&lt; 15 Min Direct Response</span>
          </span>
        </div>

        {/* Action Button: Flat, Clean Direct Booking Trigger */}
        <div className="w-full pt-1">
          <button
            type="button"
            onClick={handleBookClick}
            className="w-full inline-flex items-center justify-between gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-5 py-3 rounded-[5px] text-base sm:text-lg font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            <span>Inquire / Book</span>
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* ---------------- RIGHT COL: Title, Punchy Narrative, Quality/Training, Deliverables, Chips ---------------- */}
      <div className="flex-1 flex flex-col gap-5 text-left items-start">
        {/* Service Header */}
        <div className="flex flex-col gap-1.5 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-light text-theme-primary tracking-tight leading-snug">
            {service.title}
          </h2>
          <p className="text-lg sm:text-xl font-light text-theme-muted leading-relaxed">
            {service.subtitle}
          </p>
        </div>

        {/* Narrative Overview */}
        <p className="text-xl sm:text-2xl md:text-[24px] font-light text-theme-narrative leading-relaxed">
          {renderHighlightedText(service.overview)}
        </p>

        {/* Client Quality & Training Callout (Clean Tint, No Harsh Borders) */}
        {service.trainingAndQuality && (
          <div className="p-4 sm:p-5 rounded-[4px] bg-theme-chip/50 flex items-start gap-3.5 w-full">
            <div className="flex items-center gap-1.5 shrink-0 mt-0.5 text-theme-primary">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <GraduationCap className="w-5 h-5 shrink-0" />
            </div>
            <div className="flex flex-col gap-0.5 text-left items-start">
              <span className="text-xs font-mono uppercase tracking-wider text-theme-primary font-semibold">
                Quality & Software Training Guarantee:
              </span>
              <p className="text-base sm:text-lg font-light text-theme-primary leading-relaxed">
                {service.trainingAndQuality}
              </p>
            </div>
          </div>
        )}

        {/* Core Deliverables List */}
        <div className="flex flex-col gap-3 pt-1 w-full">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-theme-muted">
            What I deliver:
          </span>
          <ul className="flex flex-col gap-3">
            {service.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3.5 text-xl sm:text-2xl font-light text-theme-narrative leading-relaxed"
              >
                <CheckCircle2 className="w-5 h-5 text-theme-primary mt-1.5 shrink-0 opacity-80" />
                <span>{renderHighlightedText(item)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clean Tech Stack Chips (Zero Inner Borders) */}
        {service.technologies && service.technologies.length > 0 && (
          <div className="flex flex-col gap-2 pt-2 w-full">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-theme-muted">
              <span>Engineered with:</span>
              {activeTech && (
                <span className="text-theme-primary font-semibold font-mono">
                  ({activeTech})
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {service.technologies.map((tech) => {
                const isActive = activeTech === tech;
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => handleTechClick(tech)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] text-sm sm:text-base transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                      isActive
                        ? "bg-theme-chip-active text-theme-chip-active font-normal"
                        : "bg-theme-chip text-theme-chip hover:bg-theme-chip-hover font-light"
                    }`}
                  >
                    <TechIcon name={tech} className="w-4 h-4 shrink-0" />
                    <span>{tech}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
