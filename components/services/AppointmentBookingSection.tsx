"use client";

import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Send,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { TelegramIcon } from "@/components/icons";
import { BOOKING_TIERS } from "@/data/services-data";
import { CONTACT_EMAIL } from "@/data/portfolio-data";
import { sound } from "@/utils/sound";

interface AppointmentBookingSectionProps {
  selectedTierId: string;
  onSelectTier: (tierId: string) => void;
}

export function AppointmentBookingSection({
  selectedTierId,
  onSelectTier,
}: AppointmentBookingSectionProps) {
  const currentTier =
    BOOKING_TIERS.find((t) => t.id === selectedTierId) || BOOKING_TIERS[0];

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    sound.playCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `[Inquiry] ${currentTier.title} - Getabalew Kemaw`
  )}&body=${encodeURIComponent(
    `Hi Getabalew,\n\nI would like to schedule a ${currentTier.title} (${currentTier.duration}).\n\nProject / Meeting Scope:\n- \n\nPreferred Timezone / Day:\n- \n\nLooking forward to speaking with you!`
  )}`;

  return (
    <section
      id="appointment-booking"
      aria-label="Direct Scheduling and Appointment Booking"
      className="w-full flex flex-col gap-8 sm:gap-10 pt-8 sm:pt-12 scroll-mt-28"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-3 text-left items-start">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
          <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
            direct scheduling & appointments
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
          <div className="flex flex-col gap-2 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-light tracking-tight text-theme-primary leading-tight">
              Technical Talk & Appointment Booking
            </h2>
            <p className="text-xl sm:text-2xl md:text-[24px] font-light text-theme-narrative leading-relaxed">
              Schedule a focused architecture consultation, beginner or mid-level mentorship session, or technical talk directly with Getabalew.
            </p>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[4px] text-sm sm:text-base font-mono bg-theme-chip text-theme-primary shrink-0 pb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-semibold text-emerald-500">&lt; 15 Min Response Max</span>
          </div>
        </div>
      </div>

      {/* ---------------- ANIMATED RAINBOW HATCH BORDER CONSOLE ---------------- */}
      <div className="hatch-animated-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col gap-8">
        {/* Tier Selector */}
        <div className="flex flex-col gap-3.5 text-left items-start w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-theme-muted">
              Select inquiry tier:
            </span>
            <span className="text-xs sm:text-sm font-mono text-emerald-500 font-semibold">
              Selected: {currentTier.title} ({currentTier.duration})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {BOOKING_TIERS.map((tier) => {
              const isSelected = tier.id === currentTier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => {
                    sound.playSelect();
                    onSelectTier(tier.id);
                  }}
                  className={`p-4 sm:p-5 rounded-[4px] text-left flex flex-col justify-between gap-3 transition-all cursor-pointer ${
                    isSelected
                      ? "bg-theme-chip text-theme-primary font-normal"
                      : "bg-theme-chip/40 text-theme-muted hover:bg-theme-chip/70 hover:text-theme-primary"
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-500 font-semibold">
                      {tier.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-light text-theme-primary leading-snug">
                      {tier.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-theme/15">
                    <span className="text-theme-muted">{tier.duration}</span>
                    <span className={isSelected ? "text-emerald-500 font-bold" : "text-theme-muted/60"}>
                      {isSelected ? "Active ✓" : "Select"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ---------------- ULTRA-FAST DIRECT MESSAGING TERMINAL (Clean, Border-Free) ---------------- */}
        <div className="p-6 sm:p-8 rounded-[4px] bg-theme-page/60 flex flex-col gap-6 text-left items-start w-full">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-500 font-bold">
                Instant Direct Communication
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-theme-primary tracking-tight">
              You can message me directly at{" "}
              <span className="text-theme-primary font-normal underline decoration-emerald-500/50 underline-offset-4">
                {CONTACT_EMAIL}
              </span>
            </h3>

            <p className="text-lg sm:text-xl md:text-2xl font-light text-theme-narrative leading-relaxed">
              I almost always answer within <strong className="font-semibold text-theme-primary">15 minutes max</strong>. Drop a note regarding your project scope, consultation topic, or beginner/mid-level mentorship goal, and I will immediately lock in a meeting with you.
            </p>
          </div>

          {/* Action Buttons: Clean, Uncluttered, Flat */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full">
            {/* Primary: Direct Email Client Launch */}
            <a
              href={mailtoUrl}
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2.5 bg-theme-btn-primary text-theme-btn-primary px-7 py-3.5 rounded-[5px] text-base sm:text-lg font-normal hover:opacity-90 active:scale-95 transition-all cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>Email me for {currentTier.title}</span>
              <Send className="w-4 h-4 opacity-80" />
            </a>

            {/* Secondary: Copy Email Address */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 bg-theme-chip text-theme-chip hover:bg-theme-chip-hover px-6 py-3.5 rounded-[4px] text-base sm:text-lg font-normal transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-emerald-500 font-medium">Copied {CONTACT_EMAIL}!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy email ({CONTACT_EMAIL})</span>
                </>
              )}
            </button>

            {/* Telegram Direct Link */}
            <a
              href="https://t.me/GetabalewKemaw"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 bg-theme-chip text-theme-chip hover:bg-theme-chip-hover px-6 py-3.5 rounded-[4px] text-base sm:text-lg font-normal transition-colors cursor-pointer"
            >
              <TelegramIcon className="w-5 h-5 text-[#229ed9]" />
              <span>Chat on Telegram</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-theme-muted/70 pt-1">
            <span>⚡ Available for remote engagements worldwide (US/UK/EU/Dubai) and Addis Ababa onsite.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
