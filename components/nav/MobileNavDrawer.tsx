"use client";

import { useEffect, useRef } from "react";
import { NAV_ITEMS } from "@/data/nav-data";
import { ArrowUpRight } from "lucide-react";

interface MobileNavDrawerProps {
  isOpen: boolean;
  activeId: string;
  onSelect: (id: string) => void;
  onClose: () => void;
}

export function MobileNavDrawer({
  isOpen,
  activeId,
  onSelect,
  onClose,
}: MobileNavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={drawerRef}
      className="hatch-animated-border md:hidden mt-2.5 w-72 sm:w-80 rounded-2xl p-3 flex flex-col gap-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.7)] transition-all duration-300 animate-in fade-in slide-in-from-top-3"
      role="menu"
      aria-label="Mobile Navigation"
    >
      <div className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-theme-muted opacity-70 border-b border-theme/40 mb-1">
        Navigation
      </div>

      {NAV_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            onClick={() => {
              onSelect(item.id);
              onClose();
            }}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base sm:text-[17px] font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-theme-btn-secondary-hover text-theme-primary font-semibold"
                : "text-theme-muted hover:text-theme-primary hover:bg-theme-btn-secondary-hover/70"
            }`}
            role="menuitem"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-500 scale-100 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                    : "bg-transparent scale-50 opacity-0 group-hover:opacity-40 group-hover:bg-theme-muted"
                }`}
              />
              <span>{item.label}</span>
            </div>

            {item.isExternal ? (
              <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            ) : isActive ? (
              <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded-md bg-theme-page text-theme-primary border border-theme">
                Active
              </span>
            ) : null}
          </a>
        );
      })}
    </div>
  );
}
