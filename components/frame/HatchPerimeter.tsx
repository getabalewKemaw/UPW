import React from "react";
import { Navbar } from "@/components/nav/Navbar";
import { Preloader } from "@/components/preloader/Preloader";

interface HatchPerimeterProps {
  children: React.ReactNode;
}

export function HatchPerimeter({ children }: HatchPerimeterProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-theme-page text-theme-primary selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
      {/* High-Performance Marketing Preloader */}
      <Preloader />

      {/* Subtle background grain (controlled opacity, clean white or matte dark) */}
      <div className="bg-grain-layer" />

      {/* Floating Dynamic Island Navbar */}
      <Navbar />

      {/* 1. Sleek Top Multi-Color Hatch Band */}
      <div
        className="w-full h-3.5 sm:h-4 border-b border-theme bg-theme-band shrink-0 relative z-10 animate-hatch-top theme-level-0"
        style={{ backgroundImage: "var(--hatch-gradient)" }}
      />

      {/* 2. Middle Section: Left Hatch Band + Full-Width Body + Right Hatch Band */}
      <div className="w-full flex-1 flex flex-row relative z-10">
        {/* Sleek Left Vertical Multi-Color Hatch Band */}
        <div
          className="w-3.5 sm:w-4 border-r border-theme bg-theme-band shrink-0 animate-hatch-left theme-level-0"
          style={{ backgroundImage: "var(--hatch-gradient)" }}
        />

        {/* Full-Width Centered Body Content */}
        {children}

        {/* Sleek Right Vertical Multi-Color Hatch Band */}
        <div
          className="w-3.5 sm:w-4 border-l border-theme bg-theme-band shrink-0 animate-hatch-right theme-level-0"
          style={{ backgroundImage: "var(--hatch-gradient)" }}
        />
      </div>

      {/* 3. Sleek Bottom Multi-Color Hatch Band */}
      <div
        className="w-full h-3.5 sm:h-4 border-t border-theme bg-theme-band shrink-0 relative z-10 animate-hatch-bottom theme-level-0"
        style={{ backgroundImage: "var(--hatch-gradient)" }}
      />
    </div>
  );
}
