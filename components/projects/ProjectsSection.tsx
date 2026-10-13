"use client";

import { useState, useMemo } from "react";
import { FEATURED_PROJECTS } from "@/data/portfolio-data";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { ProjectCaseStudy } from "@/types/portfolio";
import { sound } from "@/utils/sound";

type ProjectCategory =
  | "All"
  | "AI & ML"
  | "Media & Streaming"
  | "Commerce & FinTech"
  | "Fullstack SaaS";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const categories: { label: string; value: ProjectCategory; count: number }[] = [
    { label: "All Systems", value: "All", count: FEATURED_PROJECTS.length },
    {
      label: "AI & ML",
      value: "AI & ML",
      count: FEATURED_PROJECTS.filter((p) => p.category === "AI & ML").length,
    },
    {
      label: "Media & Streaming",
      value: "Media & Streaming",
      count: FEATURED_PROJECTS.filter((p) => p.category === "Media & Streaming").length,
    },
    {
      label: "Commerce & FinTech",
      value: "Commerce & FinTech",
      count: FEATURED_PROJECTS.filter((p) => p.category === "Commerce & FinTech").length,
    },
    {
      label: "Fullstack SaaS",
      value: "Fullstack SaaS",
      count: FEATURED_PROJECTS.filter((p) => p.category === "Fullstack SaaS").length,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return FEATURED_PROJECTS;
    return FEATURED_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategorySelect = (cat: ProjectCategory) => {
    sound.playSelect();
    setActiveCategory(cat);
  };

  return (
    <section
      id="projects"
      aria-label="Engineered Systems and Featured Projects"
      className="w-full flex flex-col gap-8 sm:gap-10 pt-6 sm:pt-8 scroll-mt-28"
    >
      {/* Editorial Section Header: Consistent font sizes & font-light with NarrativeBio */}
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
          <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
            selected production architecture
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-light tracking-tight text-theme-primary leading-tight">
              Engineered Systems & Production Platforms
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-theme-narrative leading-relaxed">
              Real-world systems spanning automated CRM signal ingestion, telecom stream transcoding, sentiment pipelines, and high-reliability commerce.
            </p>
          </div>

          <div className="text-base sm:text-lg font-light text-theme-muted shrink-0 pb-1">
            <span>
              <span className="text-theme-primary font-normal">{filteredProjects.length}</span> of{" "}
              {FEATURED_PROJECTS.length} platforms
            </span>
          </div>
        </div>
      </div>

      {/* Category Filter: Consistent button strategy matching ActionButtons & TopicChips */}
      <nav
        aria-label="Project category filters"
        className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => handleCategorySelect(cat.value)}
              aria-pressed={isActive}
              className={`shrink-0 flex items-center gap-2 px-4.5 py-2 rounded-[4px] text-base sm:text-lg transition-all cursor-pointer ${
                isActive
                  ? "bg-theme-btn-primary text-theme-btn-primary font-normal"
                  : "bg-theme-chip text-theme-chip bg-theme-chip-hover font-light"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-[3px] font-mono ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-black/10 dark:bg-white/10 text-theme-muted"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Projects List with Alternating Direction */}
      <div className="flex flex-col gap-10 sm:gap-14 w-full">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenDetails={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Instant Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
