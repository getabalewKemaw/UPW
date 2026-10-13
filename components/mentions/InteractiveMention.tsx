"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { InteractiveMentionProps } from "@/types/portfolio";

// Interactive mention with selection corner handles ("border holes"), connector line, and square copy button
export function InteractiveMention({
  label,
  href,
  urlText,
  icon,
  showInlineIcon = false,
}: InteractiveMentionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="mention-root mx-0.5">
      {/* Clickable inline link */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mention-link inline-flex items-center gap-1.5 text-theme-primary text-inherit font-normal underline decoration-[var(--mention-underline)] underline-offset-4 hover:decoration-[var(--mention-underline-hover)] px-1 py-0.5 rounded-[2px] relative z-10 transition-all"
      >
        {showInlineIcon && icon && <span className="shrink-0 text-theme-primary">{icon}</span>}
        <span>{label}</span>
      </a>

      {/* 4 Corner hollow square handles ("border holes") */}
      <span className="mention-handle absolute -top-[3px] -left-[3px] w-[6px] h-[6px] border border-[var(--mention-handle-border)] bg-[var(--mention-handle-bg)] z-30" />
      <span className="mention-handle absolute -top-[3px] -right-[3px] w-[6px] h-[6px] border border-[var(--mention-handle-border)] bg-[var(--mention-handle-bg)] z-30" />
      <span className="mention-handle absolute -bottom-[3px] -left-[3px] w-[6px] h-[6px] border border-[var(--mention-handle-border)] bg-[var(--mention-handle-bg)] z-30" />
      <span className="mention-handle absolute -bottom-[3px] -right-[3px] w-[6px] h-[6px] border border-[var(--mention-handle-border)] bg-[var(--mention-handle-bg)] z-30" />

      {/* Wire anchor circular node on bottom border */}
      <span className="mention-handle absolute -bottom-[4px] left-3 w-[7px] h-[7px] rounded-full border border-[var(--mention-handle-border)] bg-[var(--mention-handle-bg)] z-30 flex items-center justify-center">
        <span className="w-1 h-1 rounded-full bg-[var(--mention-wire)] block" />
      </span>

      {/* Invisible hover bridge to prevent mouse-leave when moving cursor down to popover */}
      <span className="mention-wire absolute left-0 top-full w-full h-3 block z-30 pointer-events-auto" />

      {/* Floating preview popover with 90° elbow connector wire */}
      <span className="mention-popover absolute left-3 top-full pt-2 z-50 block transform transition-all duration-150">
        {/* SVG 90° elbow connector line with joint dot */}
        <span className="absolute top-0 left-0 w-4 h-3.5 block pointer-events-none">
          <svg className="w-full h-full overflow-visible" fill="none">
            <path
              d="M 3.5 0 L 3.5 10 Q 3.5 14 7.5 14 L 16 14"
              stroke="var(--mention-wire)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle
              cx="15.5"
              cy="14"
              r="2.5"
              fill="var(--mention-handle-bg)"
              stroke="var(--mention-wire)"
              strokeWidth="1"
            />
          </svg>
        </span>

        {/* Clean Popover Card (adaptive white / dark card) */}
        <span className="ml-4 inline-flex items-center gap-2 bg-theme-popover text-theme-popover px-2.5 py-1 rounded-[3px] border border-theme-popover shadow-[0_2px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.6)] text-[12px] font-mono whitespace-nowrap">
          {icon && <span className="shrink-0 text-theme-popover">{icon}</span>}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center gap-1 text-theme-popover font-mono"
          >
            <span>{urlText}</span>
            <span className="text-[10px] text-theme-popover-subtext">↗</span>
          </a>

          {/* Square copy button */}
          <button
            type="button"
            onClick={handleCopy}
            title="Copy link"
            className="p-1 rounded-[3px] border border-theme-popover bg-theme-popover-copy bg-theme-popover-copy-hover text-theme-popover transition-colors cursor-pointer inline-flex items-center justify-center w-5 h-5 ml-1"
          >
            {copied ? (
              <Check className="w-3 h-3 text-emerald-500" />
            ) : (
              <Copy className="w-3 h-3 text-theme-popover-subtext" />
            )}
          </button>
        </span>
      </span>
    </span>
  );
}
