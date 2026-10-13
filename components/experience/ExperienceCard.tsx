"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { ExperienceItem } from "@/types/portfolio";
import { InteractiveMention } from "@/components/mentions/InteractiveMention";
import { sound } from "@/utils/sound";

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
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

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    sound.playSelect();
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  return (
    <article className="group py-12 sm:py-16 md:py-20 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 transition-colors">
      {/* ---------------- LEFT RAIL: Period, Company, Location (Fixed Column) ---------------- */}
      <div className="md:w-[280px] lg:w-[320px] shrink-0 flex flex-col gap-3.5 text-left items-start">
        {/* Clean Period with Live Pulsing Beacon for Active Roles */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[4px] text-sm sm:text-base font-mono bg-theme-chip text-theme-primary">
          {item.isCurrent ? (
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          ) : (
            <span className="w-2 h-2 rounded-full bg-theme-muted/50" />
          )}
          <span className="font-medium">{item.period}</span>
        </div>

        {/* Company Name with Interactive Link if available */}
        <div className="flex flex-col gap-1 pt-1 text-left items-start w-full">
          {item.companyUrl ? (
            <div className="text-2xl sm:text-3xl md:text-[34px] font-light text-theme-primary tracking-tight">
              <InteractiveMention
                label={item.company}
                href={item.companyUrl}
                urlText={item.companyUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                icon={<ExternalLink className="w-4 h-4 text-theme-primary" />}
              />
            </div>
          ) : (
            <span className="text-2xl sm:text-3xl md:text-[34px] font-light text-theme-primary tracking-tight">
              {item.company}
            </span>
          )}

          {item.location && (
            <span className="text-base sm:text-lg md:text-xl font-light text-theme-muted">
              {item.location}
            </span>
          )}
        </div>

        {/* Editorial Index Counter */}
        <span className="text-xs sm:text-sm font-mono tracking-widest text-theme-muted/40 hidden md:inline pt-1 uppercase">
          0{index + 1} / 04
        </span>
      </div>

      {/* ---------------- RIGHT RAIL: Role Title, Summary & Key Contributions ---------------- */}
      <div className="flex-1 flex flex-col gap-5 sm:gap-6 text-left items-start">
        {/* Role Title */}
        <h3 className="text-3xl sm:text-4xl md:text-[40px] font-light text-theme-primary tracking-tight leading-snug">
          {item.role}
        </h3>

        {/* Summary Description with Generous Lexend Scale */}
        <p className="text-xl sm:text-2xl md:text-[24px] font-light text-theme-narrative leading-relaxed">
          {item.description}
        </p>

        {/* High-Impact Highlights with Recruiter Bolds & Generous Font Scale */}
        <ul className="flex flex-col gap-4 pt-1 w-full">
          {item.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3.5 text-xl sm:text-2xl font-light text-theme-narrative leading-relaxed"
            >
              <span className="w-2 h-2 rounded-full bg-theme-primary/40 mt-3 shrink-0" />
              <span>{renderHighlightedText(highlight)}</span>
            </li>
          ))}
        </ul>

        {/* Competencies Chips (TopicChips style, generous readable sizing, interactive active state) */}
        {item.skills && item.skills.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5 pt-3">
            {item.skills.map((skill) => {
              const isActive = activeSkill === skill;
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillClick(skill)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center px-4 py-2 rounded-[4px] text-base sm:text-lg md:text-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                    isActive
                      ? "bg-theme-chip-active text-theme-chip-active font-normal"
                      : "bg-theme-chip text-theme-chip hover:bg-theme-chip-hover font-light"
                  }`}
                >
                  {skill}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
