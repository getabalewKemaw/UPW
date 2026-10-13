"use client";

import { useEffect, useState } from "react";
import { NavBrand } from "./NavBrand";
import { NavLinks } from "./NavLinks";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { SoundToggle } from "@/components/theme/SoundToggle";
import { sound } from "@/utils/sound";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // Section tracker for synchronized active highlighting
      const sections = ["overview", "projects", "experience"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
            setActiveId(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 right-4 sm:top-6 sm:right-8 z-50 flex flex-col items-end pointer-events-auto max-w-[calc(100vw-2rem)] animate-nav-entrance">
      {/* Animated Multi-Color Hatch Border (Border ONLY - 100% Solid Clean Theme Background) */}
      <nav
        className={`hatch-animated-border flex items-center gap-2 sm:gap-3.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "shadow-[0_16px_48px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_52px_rgba(0,0,0,0.7)]"
            : "shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        }`}
        aria-label="Main Navigation"
      >
        {/* Left Wing: Photo Avatar & GK Monogram */}
        <NavBrand />

        {/* Divider before desktop links */}
        <span className="w-px h-5 bg-theme-muted/20 shrink-0 hidden md:inline" />

        {/* Center: Gliding Spotlight Nav Links (Desktop) */}
        <div className="hidden md:flex items-center">
          <NavLinks activeId={activeId} onSelect={(id) => setActiveId(id)} />
        </div>

        {/* Divider before controls */}
        <span className="w-px h-5 bg-theme-muted/20 shrink-0" />

        {/* Theme Switcher (Lucide Sun/Moon with Circular Ripple) */}
        <div className="shrink-0 pl-0.5">
          <ThemeToggle inline={true} />
        </div>

        {/* Audio Mute / Unmute Toggle */}
        <div className="shrink-0 pl-0.5">
          <SoundToggle />
        </div>

        {/* Mobile Hamburger Button with Smooth Morphing Animation (Mobile Only) */}
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            setMobileOpen((prev) => !prev);
          }}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="md:hidden relative w-9 h-9 sm:w-10 sm:h-10 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-theme-btn-secondary-hover transition-colors cursor-pointer select-none"
        >
          <span
            className={`w-4 sm:w-5 h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
              mobileOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
            style={{ backgroundColor: "var(--text-primary)" }}
          />
          <span
            className={`w-4 sm:w-5 h-[2px] rounded-full transition-all duration-200 ease-out ${
              mobileOpen ? "opacity-0 scale-75" : "opacity-100"
            }`}
            style={{ backgroundColor: "var(--text-primary)" }}
          />
          <span
            className={`w-4 sm:w-5 h-[2px] rounded-full transition-all duration-300 ease-out origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
            style={{ backgroundColor: "var(--text-primary)" }}
          />
        </button>
      </nav>

      {/* Floating Animated Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={mobileOpen}
        activeId={activeId}
        onSelect={(id) => setActiveId(id)}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
