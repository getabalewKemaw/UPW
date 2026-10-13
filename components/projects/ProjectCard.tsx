"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ProjectCaseStudy } from "@/types/portfolio";
import { TechIcon } from "@/components/icons/TechIcons";
import { GithubIcon } from "@/components/icons";
import { sound } from "@/utils/sound";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  index: number;
  onOpenDetails: (project: ProjectCaseStudy) => void;
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

export function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const handleCardClick = () => {
    sound.playClick();
    onOpenDetails(project);
  };

  const handleTechClick = (e: React.MouseEvent, tech: string) => {
    e.stopPropagation();
    sound.playSelect();
    setActiveTech((prev) => (prev === tech ? null : tech));
  };

  return (
    <article
      id={`project-${project.id}`}
      className="group relative flex flex-col lg:grid lg:grid-cols-12 rounded-[5px] border border-theme bg-theme-main overflow-hidden transition-colors"
    >
      {/* ---------------- IMAGE SAMPLE HALF (UNCROPPED with object-contain & Alternating on Desktop) ---------------- */}
      <div
        className={`lg:col-span-5 relative w-full h-[300px] sm:h-[380px] lg:h-auto lg:min-h-[480px] bg-zinc-950 overflow-hidden border-b lg:border-b-0 ${
          isEven
            ? "lg:order-1 lg:border-r border-theme"
            : "lg:order-2 lg:border-l border-theme"
        }`}
      >
        <button
          type="button"
          onClick={handleCardClick}
          className="w-full h-full relative flex items-center justify-center p-3 sm:p-5 text-left cursor-pointer"
          aria-label={`View architecture details for ${project.title}`}
        >
          {/* Full Uncropped Screenshot via object-contain with gentle padding */}
          <Image
            src={project.image}
            alt={`Full screenshot and UI posture of ${project.title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={index === 0}
            className="object-contain p-2 sm:p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />

          {/* Floating Status & Stage Badge (matching LiveStatusBadge) */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-auto">
            <span className="px-3.5 py-1.5 rounded-[3px] text-xs sm:text-sm font-mono uppercase tracking-wider bg-black/90 text-white border border-white/20">
              {project.badge}
            </span>

            {project.evidence.statusLabel && (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[3px] text-xs sm:text-sm font-mono bg-black/90 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{project.evidence.statusLabel}</span>
              </span>
            )}
          </div>
        </button>
      </div>

      {/* ---------------- DOCS & TECH STACK HALF (Alternating on Desktop) ---------------- */}
      <div
        className={`lg:col-span-7 flex flex-col justify-between p-6 sm:p-9 md:p-11 gap-7 sm:gap-8 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Header & Typography with upgraded readable scale and bold recruiter callouts */}
        <div className="flex flex-col gap-4 text-left items-start">
          <div className="w-full flex items-center justify-between gap-3 text-sm sm:text-base font-mono uppercase tracking-widest text-theme-muted">
            <span>{project.category}</span>
            <span>0{index + 1} / 05</span>
          </div>

          <button
            type="button"
            onClick={handleCardClick}
            className="text-left cursor-pointer group/title"
          >
            <h3 className="text-3xl sm:text-4xl md:text-[40px] font-light text-theme-primary tracking-tight leading-snug group-hover/title:underline decoration-theme/40 underline-offset-4 transition-all">
              {project.title}
            </h3>
          </button>

          <p className="text-lg sm:text-xl font-light text-theme-muted leading-relaxed">
            {project.subtitle}
          </p>

          {/* Docs Synopsis: Upgraded scale with bold recruiter highlights */}
          <p className="text-xl sm:text-2xl font-light text-theme-narrative leading-relaxed pt-1">
            {renderHighlightedText(project.overview)}
          </p>

          {/* Quick Metrics (Generous scale with bold numbers) */}
          {project.evidence.metrics && (
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {project.evidence.metrics.slice(0, 2).map((metric, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-[3px] text-sm sm:text-base font-mono font-medium text-theme-primary bg-theme-chip"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack Chips: Interactive ACTIVE STATE with upgraded readable size */}
        <div className="flex flex-col gap-3 text-left items-start">
          <div className="flex items-center gap-2 text-base sm:text-lg font-light text-theme-muted">
            <span>Technologies & infrastructure:</span>
            {activeTech && (
              <span className="text-sm font-mono font-semibold text-emerald-500">
                (active: {activeTech})
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.technologies.map((tech) => {
              const isActive = activeTech === tech;
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={(e) => handleTechClick(e, tech)}
                  aria-pressed={isActive}
                  title={`Toggle active state for ${tech}`}
                  className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-[4px] text-base sm:text-lg transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                    isActive
                      ? "bg-theme-chip-active text-theme-chip-active font-normal"
                      : "bg-theme-chip text-theme-chip hover:bg-theme-chip-hover font-light"
                  }`}
                >
                  <TechIcon name={tech} className="w-4.5 h-4.5 shrink-0" />
                  <span>{tech}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons: Matching ActionButtons.tsx with generous sizing */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          {/* Primary Action Button */}
          <button
            type="button"
            onClick={handleCardClick}
            className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-6 sm:px-7 py-3 rounded-[5px] text-base sm:text-lg font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            <span>View technical breakdown</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>

          {/* Secondary Buttons */}
          {project.evidence.liveUrl && (
            <a
              href={project.evidence.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-5 sm:px-6 py-3 rounded-[3px] text-base sm:text-lg font-normal transition-colors cursor-pointer"
            >
              <span>Live demo</span>
              <ExternalLink className="w-4.5 h-4.5 opacity-70" />
            </a>
          )}

          {project.evidence.githubUrl && (
            <a
              href={project.evidence.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-5 sm:px-6 py-3 rounded-[3px] text-base sm:text-lg font-normal transition-colors cursor-pointer"
            >
              <GithubIcon className="w-4.5 h-4.5" />
              <span>Source code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
