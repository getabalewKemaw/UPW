"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { sound } from "@/utils/sound";

interface SoundToggleProps {
  className?: string;
}

export function SoundToggle({ className = "" }: SoundToggleProps) {
  const [enabled, setEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setEnabled(sound.isEnabled());
  }, []);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = sound.toggle();
    setEnabled(newState);
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={enabled ? "Mute audio sound effects" : "Enable audio sound effects"}
      aria-pressed={enabled}
      title={enabled ? "Mute UI sound effects" : "Enable UI sound effects"}
      className={`relative w-[32px] sm:w-[36px] h-[30px] sm:h-[32px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-theme-btn-secondary-hover ${
        enabled ? "text-theme-primary" : "text-theme-muted hover:text-theme-primary"
      } ${className}`}
    >
      {enabled ? (
        <Volume2 className="w-4 h-4 sm:w-[17px] sm:h-[17px] transition-transform duration-200 hover:scale-110 text-emerald-500 dark:text-emerald-400" />
      ) : (
        <VolumeX className="w-4 h-4 sm:w-[17px] sm:h-[17px] transition-transform duration-200 opacity-60 hover:opacity-100" />
      )}
    </button>
  );
}
