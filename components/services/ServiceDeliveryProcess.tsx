"use client";

import { useState } from "react";
import {
  PhoneCall,
  Handshake,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { sound } from "@/utils/sound";

interface DeliveryStepItem {
  step: string;
  stageName: string;
  title: string;
  subtitle: string;
  tag: string;
  statusLabel: string;
  durationLabel: string;
  description: string;
  deliverables: string[];
  actionLabel: string;
  tierId: string;
}

const PROCESS_STEPS: DeliveryStepItem[] = [
  {
    step: "01",
    stageName: "Phase 1: Discovery & Scoping",
    title: "Call to Understand What You Want",
    subtitle: "Direct 1-on-1 Scoping Consultation",
    tag: "Discovery Session",
    statusLabel: "Direct Developer Contact",
    durationLabel: "30-min scoping call",
    description:
      "We begin with a focused, zero-pressure discovery call. I deeply listen to your vision, target users, business objectives, and technical constraints. We map out core features and clarify requirements in plain language without technical jargon.",
    deliverables: [
      "Deep-dive requirement mapping & goal clarification",
      "Feature prioritization & MVP scope definition",
      "Tailored tech stack & architecture blueprint recommendation",
    ],
    actionLabel: "Schedule Discovery Call",
    tierId: "tier-consult",
  },
  {
    step: "02",
    stageName: "Phase 2: Transparent Terms & Budget",
    title: "Affordable Pricing Agreement",
    subtitle: "Fixed Scope & Milestone Schedule",
    tag: "Pricing Agreement",
    statusLabel: "Milestone-Backed Budget",
    durationLabel: "Fixed scope guarantee",
    description:
      "Once requirements are mapped, I provide an affordable, budget-conscious proposal tailored to your scale. We agree on clear milestone deliverables, transparent timelines, and fixed pricing with zero hidden fees, so you retain total financial confidence.",
    deliverables: [
      "Fair, predictable pricing structured for your exact budget",
      "Milestone-based payment schedule tied to working software",
      "Written scope agreement with zero surprise charges",
    ],
    actionLabel: "Agree on Milestones & Budget",
    tierId: "tier-advisory",
  },
  {
    step: "03",
    stageName: "Phase 3: Sprints & Delivery",
    title: "Agile Delivery & Rapid Shipping",
    subtitle: "Iterative Sprints & Hands-On Training",
    tag: "Agile Methodology",
    statusLabel: "Continuous Live Demos",
    durationLabel: "1-2 week sprint cadence",
    description:
      "We build and deliver using Agile methodology across focused 1-to-2 week sprints. You receive interactive live demo deployments, frequent progress check-ins, and fast feedback loops. Upon delivery, I conduct complete hands-on team software training.",
    deliverables: [
      "1- to 2-week Agile sprints with testable live demo links",
      "Real-time communication & rapid iteration loops (Telegram/Slack)",
      "Complete hands-on software training & documentation for your team",
    ],
    actionLabel: "Start Agile Delivery",
    tierId: "tier-consult",
  },
];

export function ServiceDeliveryProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const handleStepSelect = (index: number) => {
    sound.playSelect();
    setActiveStepIndex(index);
  };

  const handleScrollToBooking = (tierId: string) => {
    sound.playClick();
    const el = document.getElementById("appointment-booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="delivery-process"
      aria-label="Universal Service Delivery Process"
      className="w-full flex flex-col gap-10 sm:gap-14 pt-8 sm:pt-12 scroll-mt-28"
    >
      {/* ---------------- Section Header (Generous Editorial Typography) ---------------- */}
      <div className="flex flex-col gap-4 text-left items-start w-full">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
          <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
            universal delivery process · applies across all services
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
          <div className="flex flex-col gap-3 max-w-4xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-light tracking-tight text-theme-primary leading-[1.08]">
              How Every Project Is Delivered
            </h2>
            <p className="text-xl sm:text-2xl md:text-[24px] lg:text-[26px] font-light text-theme-narrative leading-relaxed">
              Whether you need custom software, business automation, mobile apps, or engineering mentorship — the delivery process is the exact same reliable 3-step workflow: from initial scoping call to an affordable milestone agreement and rapid Agile shipping.
            </p>
          </div>

          <div className="text-xl sm:text-2xl font-light text-theme-muted shrink-0 pb-1 font-mono">
            <span>
              <span className="text-theme-primary font-normal">3</span> connected phases
            </span>
          </div>
        </div>
      </div>

      {/* ---------------- Flow Sequence Stepper on Desktop ---------------- */}
      <div className="flex flex-col gap-3.5 w-full">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm sm:text-base font-mono uppercase tracking-wider text-theme-muted">
            Delivery Workflow Sequence:
          </span>
          <span className="text-sm sm:text-base font-mono text-theme-muted font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-theme-primary/80" />
            <span>Active: {PROCESS_STEPS[activeStepIndex].stageName}</span>
          </span>
        </div>

        {/* Stepper Tabs linking in the flow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => handleStepSelect(idx)}
                className={`p-4 sm:p-5 rounded-xl text-left flex items-center justify-between gap-3.5 transition-all cursor-pointer ${
                  isSelected
                    ? "hatch-animated-border text-theme-primary font-medium shadow-sm"
                    : "bg-theme-chip/35 text-theme-muted hover:bg-theme-chip/70 hover:text-theme-primary border-2 border-theme/30 hover:border-theme/60"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-sm font-semibold shrink-0 transition-colors ${
                      isSelected
                        ? "bg-theme-primary text-theme-btn-primary"
                        : "bg-theme-chip text-theme-muted border border-theme/40"
                    }`}
                  >
                    {step.step}
                  </span>
                  <span className="text-base sm:text-lg font-medium tracking-tight">
                    {step.title}
                  </span>
                </div>

                {idx < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-theme-muted/50 hidden sm:inline shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------------- 3 CARDS WITH CRISP & ANIMATED HATCH BORDERS (MATCHING NAVBAR & CONTACT) ---------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {PROCESS_STEPS.map((stepItem, index) => {
          const isSelected = activeStepIndex === index;
          const isCall = index === 0;
          const isPricing = index === 1;
          const isAgile = index === 2;

          return (
            <article
              key={stepItem.step}
              onClick={() => handleStepSelect(index)}
              className={`rounded-2xl sm:rounded-3xl p-7 sm:p-8 md:p-9 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "process-card-animated-border shadow-[0_16px_44px_rgba(0,0,0,0.14)] dark:shadow-[0_16px_52px_rgba(0,0,0,0.7)] scale-[1.01]"
                  : "process-card-idle hover:scale-[1.005]"
              }`}
            >
              {/* Card Top: Number, Tag, Step Index */}
              <div className="flex flex-col gap-6 text-left items-start w-full">
                <div className="w-full flex items-center justify-between border-b border-theme/30 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl font-mono font-light text-theme-primary">
                      {stepItem.step}
                    </span>
                    <span className="px-3 py-1 rounded-[4px] text-xs sm:text-sm font-mono uppercase tracking-wider bg-theme-chip text-theme-primary border border-theme/40">
                      {stepItem.tag}
                    </span>
                  </div>

                  <span className="text-xs sm:text-sm font-mono text-theme-muted font-medium">
                    Step {stepItem.step} / 03
                  </span>
                </div>

                {/* Icon & Title Block */}
                <div className="flex flex-col gap-3 w-full">
                  <div className="w-12 h-12 rounded-xl bg-theme-chip border border-theme/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {isCall && <PhoneCall className="w-6 h-6 text-theme-primary" strokeWidth={1.5} />}
                    {isPricing && <Handshake className="w-6 h-6 text-theme-primary" strokeWidth={1.5} />}
                    {isAgile && <Zap className="w-6 h-6 text-theme-primary" strokeWidth={1.5} />}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-light text-theme-primary tracking-tight leading-snug">
                    {stepItem.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    <span className="text-sm sm:text-base font-mono text-theme-primary font-medium">
                      {stepItem.statusLabel}
                    </span>
                    <span className="text-sm sm:text-base font-mono text-theme-muted">
                      · {stepItem.durationLabel}
                    </span>
                  </div>
                </div>

                {/* Narrative Description (Large Readable Lexend) */}
                <p className="text-lg sm:text-xl lg:text-[22px] font-light text-theme-narrative leading-relaxed">
                  {stepItem.description}
                </p>

                {/* Deliverables / Key Actions in this phase */}
                <div className="flex flex-col gap-3.5 pt-4 border-t border-theme/30 w-full">
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-theme-muted font-medium">
                    What happens in this step:
                  </span>
                  <ul className="flex flex-col gap-3">
                    {stepItem.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-3.5 text-base sm:text-lg lg:text-[19px] font-light text-theme-primary leading-relaxed"
                      >
                        <CheckCircle2 className="w-5 h-5 text-theme-primary mt-1 shrink-0 opacity-80" strokeWidth={1.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom In-Flow Direct Action Link */}
              <div className="w-full pt-8 mt-6 border-t border-theme/30">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScrollToBooking(stepItem.tierId);
                  }}
                  className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-[5px] text-base sm:text-lg md:text-xl font-normal transition-all cursor-pointer bg-theme-btn-primary text-theme-btn-primary hover:opacity-90 active:scale-95 shadow-none"
                >
                  <span>{stepItem.actionLabel}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* ---------------- Clean Bottom Guarantee Bar ---------------- */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl border-2 border-theme/30 bg-theme-main hover:border-theme/60 transition-colors">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-theme-primary shrink-0" strokeWidth={1.5} />
          <span className="text-sm sm:text-base md:text-lg font-mono text-theme-primary font-medium">
            Universal Client Standard · 100% Milestone-Backed Agreement · Zero Hidden Fees
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleScrollToBooking("tier-consult")}
          className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-mono text-theme-primary hover:text-theme-primary/80 transition-colors cursor-pointer group"
        >
          <span>Jump to Direct Scheduling</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
