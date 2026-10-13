"use client";

import { ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectEvidence as ProjectEvidenceType } from "@/types/portfolio";
import { sound } from "@/utils/sound";

interface ProjectEvidenceProps {
  evidence: ProjectEvidenceType;
  title: string;
}

export function ProjectEvidence({ evidence, title }: ProjectEvidenceProps) {
  return (
    <div className="w-full flex flex-col gap-3.5 pt-4 mt-2 border-t border-theme/40">
      {/* Evidence & Action Buttons Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-theme-muted">
            Evidence & Verification
          </span>
        </div>

        {/* Action Link Pills */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {evidence.liveUrl && (
            <a
              href={evidence.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              aria-label={`Open live demo for ${title}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] sm:text-[14px] font-medium bg-theme-btn-primary text-theme-btn-primary hover:opacity-90 active:scale-95 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          )}

          {evidence.githubUrl && (
            <a
              href={evidence.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              aria-label={`Open source code repository for ${title}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] sm:text-[14px] font-medium border border-theme bg-theme-btn-secondary text-theme-btn-secondary hover:bg-theme-btn-secondary-hover active:scale-95 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>

      {/* Verified Metrics Chips */}
      {evidence.metrics && evidence.metrics.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {evidence.metrics.map((metric, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11.5px] sm:text-[12.5px] font-medium bg-theme-chip text-theme-chip border border-theme/30 tracking-tight"
            >
              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
              <span>{metric}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
