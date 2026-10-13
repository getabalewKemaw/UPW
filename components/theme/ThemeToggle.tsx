"use client";

import { useState, useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { sound } from "@/utils/sound";

const emptySubscribe = () => () => {};

interface ThemeToggleProps {
  inline?: boolean;
}

export function ThemeToggle({ inline = false }: ThemeToggleProps) {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    }
    return "light";
  });

  const handleSetTheme = (newTheme: "light" | "dark", e?: React.MouseEvent) => {
    if (newTheme === theme && isClient) return;
    sound.playTheme(newTheme === "dark");
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      // storage unavailable
    }


    const applyTheme = () => {
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
    };

    // Staggered cascade animation trigger
    document.documentElement.classList.add("theme-transitioning");
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 700);

    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => {
        ready: Promise<void>;
      };
    };

    // If View Transition API is supported, create an expanding circular ripple from the button
    if (typeof doc.startViewTransition === "function") {
      const x = e?.clientX ?? window.innerWidth - 48;
      const y = e?.clientY ?? 40;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = doc.startViewTransition(() => {
        applyTheme();
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    } else {
      applyTheme();
    }
  };

  const containerClasses = inline
    ? "relative flex items-center p-0.5 rounded-full border border-theme bg-theme-popover"
    : "fixed top-5 right-5 sm:top-6 sm:right-8 z-50 flex items-center p-1 rounded-full border border-theme bg-theme-popover/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300";

  const buttonSize = inline ? "w-[32px] sm:w-[36px] h-[30px] sm:h-[32px]" : "w-[40px] h-[38px]";
  const indicatorWidth = inline ? "w-[32px] sm:w-[36px]" : "w-[40px]";
  const indicatorTranslate = inline
    ? "translate-x-[34px] sm:translate-x-[38px]"
    : "translate-x-[44px]";
  const iconSize = inline ? "w-4 h-4 sm:w-[17px] sm:h-[17px]" : "w-5 h-5";

  return (
    <aside className={containerClasses} role="group" aria-label="Theme switcher">
      {/* Animated sliding highlight background pill */}
      <div
        className={`absolute top-0.5 bottom-0.5 ${indicatorWidth} rounded-full bg-theme-btn-primary shadow-sm transition-transform duration-300 ease-out pointer-events-none ${
          isClient && theme === "dark" ? indicatorTranslate : "translate-x-0"
        }`}
      />

      {/* Light Mode Button with Lucide Sun */}
      <button
        type="button"
        onClick={(e) => handleSetTheme("light", e)}
        aria-pressed={isClient && theme === "light"}
        title="Switch to light mode"
        className={`relative z-10 ${buttonSize} rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 ${
          isClient && theme === "light"
            ? "text-theme-btn-primary"
            : "text-theme-muted hover:text-theme-primary"
        }`}
      >
        <Sun
          className={`${iconSize} transition-transform duration-300 ${
            isClient && theme === "light" ? "rotate-0 scale-105" : "-rotate-45 scale-90 opacity-70"
          }`}
        />
      </button>

      {/* Dark Mode Button with Lucide Moon */}
      <button
        type="button"
        onClick={(e) => handleSetTheme("dark", e)}
        aria-pressed={isClient && theme === "dark"}
        title="Switch to dark mode"
        className={`relative z-10 ${buttonSize} rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 ${
          isClient && theme === "dark"
            ? "text-theme-btn-primary"
            : "text-theme-muted hover:text-theme-primary"
        }`}
      >
        <Moon
          className={`${iconSize} transition-transform duration-300 ${
            isClient && theme === "dark" ? "rotate-0 scale-105" : "rotate-45 scale-90 opacity-70"
          }`}
        />
      </button>
    </aside>
  );
}
