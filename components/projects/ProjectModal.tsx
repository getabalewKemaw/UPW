"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { ProjectCaseStudy } from "@/types/portfolio";
import { TechIcon } from "@/components/icons/TechIcons";
import { GithubIcon } from "@/components/icons";
import { sound } from "@/utils/sound";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
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

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = useCallback(() => {
    sound.playClick();
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, handleClose]);

  if (!project || !mounted) return null;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fade-in"
    >
      {/* Dark Frosted Backdrop - Strictly Above Navbar */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/75 dark:bg-black/90 backdrop-blur-xs transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      {/* Flat Left-Aligned Modal Shell (Single Border, Zero Shadow, High Z-Index) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] bg-theme-main border border-theme rounded-[5px] flex flex-col overflow-hidden z-10 my-auto"
      >
        {/* Top Header Bar with Prominent Close Button */}
        <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-4.5 border-b border-theme bg-theme-main shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-theme-muted">
              {project.category}
            </span>
            {project.evidence.statusLabel && (
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[3px] text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{project.evidence.statusLabel}</span>
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close project modal"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[3px] border border-theme text-sm text-theme-muted hover:text-theme-primary hover:bg-theme-chip transition-colors cursor-pointer"
          >
            <span className="font-mono text-xs">ESC</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Modal Body: Clean Left-Aligned Flow */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 flex flex-col gap-8 text-left items-start no-scrollbar">
          {/* Title & Subtitle */}
          <div className="flex flex-col gap-2 text-left items-start w-full">
            <h2
              id="modal-project-title"
              className="text-3xl sm:text-4xl md:text-5xl font-light text-theme-primary tracking-tight leading-tight"
            >
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl font-light text-theme-muted leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Large Uncropped UI Screenshot Showcase (Explicit Height so it never collapses) */}
          <div className="w-full h-[260px] sm:h-[360px] md:h-[440px] relative rounded-[4px] overflow-hidden bg-zinc-950 shrink-0 border border-theme/30 flex items-center justify-center p-2 sm:p-4">
            <Image
              src={project.image}
              alt={`UI screenshot and system architecture preview of ${project.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-contain p-2"
              priority
            />
          </div>

          {/* Action Buttons: Matching ActionButtons.tsx Strategy */}
          <div className="flex flex-wrap items-center gap-3">
            {project.evidence.liveUrl && (
              <a
                href={project.evidence.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-6 py-3 rounded-[5px] text-base sm:text-lg font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer"
              >
                <span>Launch live platform</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            )}

            {project.evidence.githubUrl && (
              <a
                href={project.evidence.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2.5 border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover px-6 py-3 rounded-[3px] text-base sm:text-lg font-normal transition-colors cursor-pointer"
              >
                <GithubIcon className="w-4.5 h-4.5" />
                <span>View source repository</span>
              </a>
            )}
          </div>

          {/* Verified Metrics Chips */}
          {project.evidence.metrics && (
            <div className="flex flex-wrap items-center gap-2">
              {project.evidence.metrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-[3px] text-sm font-mono text-theme-status bg-theme-chip text-theme-chip"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col gap-2.5 p-6 rounded-[4px] bg-theme-chip/40 text-left items-start">
              <span className="text-sm font-mono uppercase tracking-wider text-rose-500 dark:text-rose-400">
                The Engineering Problem
              </span>
              <p className="text-base sm:text-lg font-light text-theme-narrative leading-relaxed">
                {renderHighlightedText(project.problemStatement)}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 p-6 rounded-[4px] bg-theme-chip/40 text-left items-start">
              <span className="text-sm font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                The Architectural Solution
              </span>
              <p className="text-base sm:text-lg font-light text-theme-narrative leading-relaxed">
                {renderHighlightedText(project.solution)}
              </p>
            </div>
          </div>

          {/* Core Engineering Contributions */}
          <div className="flex flex-col gap-3 text-left items-start w-full">
            <h3 className="text-xl sm:text-2xl font-light text-theme-primary">
              Core Engineering Contributions
            </h3>
            <ul className="flex flex-col gap-3">
              {project.engineeringContributions.map((contrib, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base sm:text-lg font-light text-theme-narrative leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-muted mt-2.5 shrink-0 opacity-70" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality & Reliability Benchmarks */}
          <div className="flex flex-col gap-3 text-left items-start w-full">
            <h3 className="text-xl sm:text-2xl font-light text-theme-primary">
              Quality, Execution Plans & Benchmarks
            </h3>
            <ul className="flex flex-col gap-3">
              {project.qualityAndReliability.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base sm:text-lg font-light text-theme-narrative leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0 opacity-80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Complete Tech Stack with Interactive Active State */}
          <div className="flex flex-col gap-3 text-left items-start w-full pt-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-light text-theme-primary">
                Technologies & Infrastructure
              </h3>
              {activeTech && (
                <span className="text-xs font-mono text-emerald-500">
                  (selected: {activeTech})
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map((tech) => {
                const isActive = activeTech === tech;
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => {
                      sound.playSelect();
                      setActiveTech((prev) => (prev === tech ? null : tech));
                    }}
                    className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-[4px] text-base transition-all duration-200 cursor-pointer select-none active:scale-95 ${
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
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
