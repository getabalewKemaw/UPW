"use client";

import { EXPERIENCE_HISTORY } from "@/data/portfolio-data";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience and Work History"
      className="w-full flex flex-col gap-8 sm:gap-10 pt-6 sm:pt-8 scroll-mt-28"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
          <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
            work history & experience
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-light tracking-tight text-theme-primary leading-tight">
              Engineering Experience
            </h2>
            <p className="text-xl sm:text-2xl md:text-[24px] font-light text-theme-narrative leading-relaxed">
              Track record across full-stack development, software quality assurance, engineering mentorship, and autonomous end-to-end delivery of complex architectures.
            </p>
          </div>

          <div className="text-lg sm:text-xl font-light text-theme-muted shrink-0 pb-1">
            <span>
              <span className="text-theme-primary font-normal">{EXPERIENCE_HISTORY.length}</span> positions
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Timeline Roster (divide-y, airy, zero chunky box borders) */}
      <div className="flex flex-col divide-y divide-theme/20 border-t border-b border-theme/20 w-full">
        {EXPERIENCE_HISTORY.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
