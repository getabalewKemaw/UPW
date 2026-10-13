"use client";

import { useEffect, useState, useCallback } from "react";
import { sound } from "@/utils/sound";

interface PreloaderProps {
  onComplete?: () => void;
}

const PHASES = [
  {
    step: "01",
    tagline: "COMMAND CENTER // INTRODUCING",
    headline: "MEET THE ENGINEER",
    telemetry: "KERNEL: READY · STACK: NEXT.JS / PYTHON / FASTAPI",
  },
  {
    step: "02",
    tagline: "SPECIALIZATION // ARCHITECTURE",
    headline: "AI & PRODUCTION SYSTEMS",
    telemetry: "PGVECTOR: ACTIVE · HYBRID SEARCH RAG: ONLINE",
  },
  {
    step: "03",
    tagline: "PORTFOLIO // INITIALIZED",
    headline: "GK",
    subtext: "GETABALEW KEMAW",
    telemetry: "SYSTEMS NOMINAL · LATENCY: 9ms · REVEALING COMMAND CENTER",
  },
];

export function Preloader({ onComplete }: PreloaderProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(0);

  const dismiss = useCallback(() => {
    sound.playClick();
    setIsExiting(true);
    setTimeout(() => {
      setIsFinished(true);
      try {
        sessionStorage.setItem("gk_preloader_seen", "true");
      } catch (_) {}
      onComplete?.();
    }, 650);
  }, [onComplete]);

  useEffect(() => {
    // Smooth Progress Interpolation (0 -> 100% over 14.8 seconds)
    const startTime = performance.now();
    const duration = 14800;

    const progressInterval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(progressInterval);
      }
    }, 40);

    // 5.0 Seconds per phase (15.0 seconds total showcase duration)
    const t1 = setTimeout(() => setPhaseIndex(1), 5000);
    const t2 = setTimeout(() => setPhaseIndex(2), 10000);
    const tExit = setTimeout(() => dismiss(), 15000);

    // Keyboard dismissal on Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(tExit);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismiss]);

  if (isFinished) return null;

  const current = PHASES[phaseIndex];

  return (
    <aside
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio Introduction and Preloader"
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 bg-theme-page text-theme-primary font-sans cursor-pointer select-none overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isExiting ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Subtle Grain Overlay for Tactile Agency Feel */}
      <div className="bg-grain-layer" />

      {/* Top Multi-Color Hatch Accent Perimeter Band */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 sm:h-2 animate-hatch-top z-10"
        style={{ backgroundImage: "var(--hatch-gradient)" }}
      />

      {/* Bottom Multi-Color Hatch Accent Perimeter Band */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 animate-hatch-bottom z-10"
        style={{ backgroundImage: "var(--hatch-gradient)" }}
      />

      {/* Header Bar: Status Telemetry & Clean Text Skip Button (No Rounded Badges) */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs sm:text-sm font-sans text-theme-muted tracking-wider uppercase">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-medium text-theme-primary">
            GK // BOOT [{current.step}/03]
          </span>
        </div>

        {/* Clean Text Skip Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
          className="text-theme-muted hover:text-theme-primary transition-colors text-xs sm:text-sm font-sans font-medium uppercase tracking-widest cursor-pointer hover:underline underline-offset-4"
        >
          Skip ✕
        </button>
      </div>

      {/* Center Stage: Kinetic Masked Typography in Pure Lexend */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8 text-center font-sans">
        {/* Pure Editorial Tagline (No Badges, No Borders) */}
        <div className="overflow-hidden mb-3 sm:mb-4">
          <p
            key={current.tagline}
            className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-xs sm:text-sm md:text-base font-sans font-medium tracking-[0.25em] text-theme-muted uppercase"
          >
            {current.tagline}
          </p>
        </div>

        {/* Tall Dramatic Kinetic Headline in Lexend */}
        <div className="relative min-h-[120px] sm:min-h-[180px] md:min-h-[240px] flex items-center justify-center overflow-hidden w-full max-w-6xl font-sans">
          {phaseIndex === 2 ? (
            /* Phase 3: Giant Multi-Color Monogram with Pure Lexend Subtitle */
            <div className="flex flex-col items-center animate-in zoom-in-90 fade-in duration-500 ease-out font-sans">
              <h1 className="text-8xl sm:text-[12rem] md:text-[15rem] lg:text-[18rem] font-black tracking-tighter hatch-text-band leading-none select-none drop-shadow-sm scale-100 hover:scale-[1.02] transition-transform font-sans">
                GK
              </h1>
              <div className="mt-3 sm:mt-5 flex items-center gap-3 font-sans text-base sm:text-xl md:text-2xl font-bold tracking-[0.25em] text-theme-primary uppercase">
                <span className="w-4 sm:w-8 h-px bg-theme-primary/40" />
                <span>{current.subtext}</span>
                <span className="w-4 sm:w-8 h-px bg-theme-primary/40" />
              </div>
            </div>
          ) : (
            /* Phases 1 & 2: Tall Display Typography in Pure Lexend */
            <div className="overflow-hidden w-full font-sans">
              <h1
                key={current.headline}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.95] text-theme-primary animate-in slide-in-from-bottom-12 fade-in duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none font-sans"
              >
                {current.headline}
              </h1>
            </div>
          )}
        </div>

        {/* Clean Editorial Telemetry Readout in Pure Lexend */}
        <div className="overflow-hidden mt-4 sm:mt-6 h-6">
          <p
            key={current.telemetry}
            className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-xs sm:text-sm font-sans font-normal text-theme-muted/80 tracking-wide"
          >
            {current.telemetry}
          </p>
        </div>
      </div>

      {/* Bottom Dock: Multi-Color Flowing Progress Engine */}
      <div className="relative z-10 w-full flex flex-col gap-3 max-w-5xl mx-auto font-sans">
        <div className="w-full flex items-center justify-between text-xs sm:text-sm font-sans text-theme-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-widest uppercase font-medium">
              REVEALING PORTFOLIO
            </span>
          </div>
          <span className="font-bold text-theme-primary tabular-nums text-sm sm:text-base font-sans">
            {progress < 10 ? `0${progress}` : progress}%
          </span>
        </div>

        {/* High-Precision Progress Bar with Animated Hatch Stripes */}
        <div className="w-full h-1.5 sm:h-2 rounded-full bg-theme-btn-secondary-hover overflow-hidden relative border border-theme/40 shadow-inner">
          <div
            className="h-full rounded-full transition-all duration-75 ease-out animate-hatch-top relative"
            style={{
              width: `${progress}%`,
              backgroundImage: "var(--hatch-text-gradient)",
              backgroundSize: "50px 50px",
            }}
          >
            {/* Glowing leading-edge spark */}
            <span className="absolute right-0 top-0 bottom-0 w-3 bg-white/70 blur-[2px] rounded-full" />
          </div>
        </div>
      </div>
    </aside>
  );
}
