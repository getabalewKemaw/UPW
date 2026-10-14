"use client";

import { useState } from "react";
import { TOPIC_CHIPS } from "@/data/portfolio-data";
import { sound } from "@/utils/sound";

export function TopicChips() {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const handleChipClick = (id: string) => {
    sound.playSelect();
    setActiveChip(activeChip === id ? null : id);
  };

  return (
    <div className="leading-loose flex flex-wrap items-center gap-x-2.5 gap-y-3">
      <span className="shrink-0 theme-level-4 font-medium text-theme-primary">
        What I bring:
      </span>

      {TOPIC_CHIPS.map((chip, index) => (
        <button
          key={chip.id}
          type="button"
          onClick={() => handleChipClick(chip.id)}
          style={{ transitionDelay: `${index * 35}ms` }}
          className={`inline-block px-4 py-1.5 rounded-[4px] text-lg sm:text-xl md:text-2xl font-light transition-all duration-300 cursor-pointer theme-level-4 ${
            activeChip === chip.id
              ? "bg-theme-chip-active text-theme-chip-active"
              : "bg-theme-chip bg-theme-chip-hover text-theme-chip"
          }`}
        >
          {chip.label}
        </button>
      ))}
    </div>
  );
}
