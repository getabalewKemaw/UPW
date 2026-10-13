"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/nav-data";
import { sound } from "@/utils/sound";

interface NavLinksProps {
  activeId?: string;
  onSelect?: (id: string) => void;
}

export function NavLinks({ activeId: propActiveId, onSelect }: NavLinksProps) {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isServicesPage = pathname === "/services" || pathname === "/service";
  const isSubPage = isAboutPage || isServicesPage;

  const [internalActiveId, setInternalActiveId] = useState<string>(
    isAboutPage ? "about" : isServicesPage ? "services" : "overview"
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pillRect, setPillRect] = useState<{ left: number; width: number } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const activeId = isAboutPage
    ? "about"
    : isServicesPage
    ? "services"
    : (propActiveId ?? internalActiveId);

  const updatePill = useCallback(() => {
    const targetId = hoveredId || activeId;
    const linkEl = linkRefs.current[targetId];
    const containerEl = containerRef.current;

    if (linkEl && containerEl) {
      const linkRect = linkEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      setPillRect({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    }
  }, [hoveredId, activeId]);

  useEffect(() => {
    updatePill();
    const timer = setTimeout(updatePill, 60);
    return () => clearTimeout(timer);
  }, [updatePill]);

  // Window resize observer to keep pill aligned
  useEffect(() => {
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  // Scroll-spy to automatically track active section on scroll (home page only)
  useEffect(() => {
    if (isSubPage) return;
    if (propActiveId) return; // parent controlled
    const sections = ["overview", "projects", "experience", "contact"];
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setInternalActiveId(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [propActiveId, isServicesPage]);

  const handleLinkClick = (id: string) => {
    try {
      sessionStorage.setItem("gk_preloader_seen", "true");
    } catch {}
    sound.playClick();
    setInternalActiveId(id);
    onSelect?.(id);
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={() => setHoveredId(null)}
      className="relative flex items-center p-1 rounded-full select-none"
    >
      {/* Gliding Spotlight Magnetic Pill with Visible Theme Styling */}
      {pillRect && (
        <span
          className="absolute top-1 bottom-1 rounded-full nav-gliding-pill pointer-events-none transition-all duration-300 ease-out z-0"
          style={{
            left: `${pillRect.left}px`,
            width: `${pillRect.width}px`,
          }}
        />
      )}

      {/* Nav Link Items with Prominent Typography and Hover Micro-Animation */}
      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        const isHovered = hoveredId === item.id;
        const className = `relative z-10 px-3 md:px-3.5 lg:px-4 py-1.5 text-sm sm:text-[15px] font-medium transition-all duration-200 rounded-full whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:scale-95 ${
          isActive
            ? "text-theme-primary font-semibold"
            : isHovered
            ? "text-theme-primary"
            : "text-theme-muted hover:text-theme-primary"
        }`;

        const innerContent = (
          <>
            <span className="transition-transform duration-200 hover:scale-105">
              {item.label}
            </span>
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
            )}
          </>
        );

        // Internal route links (e.g. /about, /services)
        if (item.href.startsWith("/")) {
          return (
            <Link
              key={item.id}
              ref={(el) => {
                linkRefs.current[item.id] = el;
              }}
              href={item.href}
              onClick={() => handleLinkClick(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              className={className}
            >
              {innerContent}
            </Link>
          );
        }

        const effectiveHref =
          isSubPage && item.href.startsWith("#") ? `/${item.href}` : item.href;

        if (isSubPage && item.href.startsWith("#")) {
          return (
            <Link
              key={item.id}
              ref={(el) => {
                linkRefs.current[item.id] = el;
              }}
              href={effectiveHref}
              onClick={() => handleLinkClick(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              className={className}
            >
              {innerContent}
            </Link>
          );
        }

        return (
          <a
            key={item.id}
            ref={(el) => {
              linkRefs.current[item.id] = el;
            }}
            href={effectiveHref}
            onClick={() => handleLinkClick(item.id)}
            onMouseEnter={() => setHoveredId(item.id)}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={className}
          >
            {innerContent}
          </a>
        );
      })}
    </div>
  );
}
