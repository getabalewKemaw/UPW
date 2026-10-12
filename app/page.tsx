"use client";

import { useState, useEffect } from "react";

// Interactive mention with selection corner handles ("border holes"), connector line, and square copy button
function InteractiveMention({
  label,
  href,
  urlText,
  icon,
  showInlineIcon = false,
}: {
  label: string;
  href: string;
  urlText: string;
  icon?: React.ReactNode;
  showInlineIcon?: boolean;
}) {
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
        className="mention-link inline-flex items-center gap-1.5 text-[#363635] text-inherit font-normal underline decoration-[#c3c3c2] underline-offset-4 hover:decoration-[#363635] px-1 py-0.5 rounded-[2px] relative z-10 transition-all"
      >
        {showInlineIcon && icon && <span className="shrink-0 text-[#363635]">{icon}</span>}
        <span>{label}</span>
      </a>

      {/* 4 Corner hollow square handles ("border holes") */}
      <span className="mention-handle absolute -top-[3px] -left-[3px] w-[6px] h-[6px] border border-[#363635] bg-white z-30" />
      <span className="mention-handle absolute -top-[3px] -right-[3px] w-[6px] h-[6px] border border-[#363635] bg-white z-30" />
      <span className="mention-handle absolute -bottom-[3px] -left-[3px] w-[6px] h-[6px] border border-[#363635] bg-white z-30" />
      <span className="mention-handle absolute -bottom-[3px] -right-[3px] w-[6px] h-[6px] border border-[#363635] bg-white z-30" />

      {/* Wire anchor circular node on bottom border */}
      <span className="mention-handle absolute -bottom-[4px] left-3 w-[7px] h-[7px] rounded-full border border-[#363635] bg-white z-30 flex items-center justify-center">
        <span className="w-1 h-1 rounded-full bg-[#363635] block" />
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
              stroke="#363635"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="15.5" cy="14" r="2.5" fill="#ffffff" stroke="#363635" strokeWidth="1" />
          </svg>
        </span>

        {/* Clean white Popover Card (Not black background) */}
        <span className="ml-4 inline-flex items-center gap-2 bg-white text-[#363635] px-2.5 py-1 rounded-[3px] border border-[#c3c3c2] shadow-[0_2px_10px_rgba(0,0,0,0.08)] text-[12px] font-mono whitespace-nowrap">
          {icon && <span className="shrink-0 text-[#363635]">{icon}</span>}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline inline-flex items-center gap-1 text-[#363635] font-mono"
          >
            <span>{urlText}</span>
            <span className="text-[10px] text-[#5e5e5d]">↗</span>
          </a>

          {/* Square copy button */}
          <button
            type="button"
            onClick={handleCopy}
            title="Copy link"
            className="p-1 rounded-[3px] border border-[#c3c3c2] bg-[#f9fbf6] hover:bg-[#efefef] text-[#363635] transition-colors cursor-pointer inline-flex items-center justify-center w-5 h-5 ml-1"
          >
            {copied ? (
              <span className="text-[10px] text-emerald-600 font-bold leading-none">✓</span>
            ) : (
              <svg className="w-3 h-3 text-[#5e5e5d]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            )}
          </button>
        </span>
      </span>
    </span>
  );
}

export default function Home() {
  const [timeString, setTimeString] = useState<string>("");
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [activeChip, setActiveChip] = useState<string | null>(null);

  // Live Addis Ababa (EAT / UTC+3) time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Addis_Ababa",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("getabalewkemaw@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Multi-color diagonal hatch pattern
  const colorPattern = `repeating-linear-gradient(
    -45deg,
    #363635 0px,
    #363635 2.5px,
    transparent 2.5px,
    transparent 5px,
    #f97316 5px,
    #f97316 7.5px,
    transparent 7.5px,
    transparent 10px,
    #06b6d4 10px,
    #06b6d4 12.5px,
    transparent 12.5px,
    transparent 15px,
    #6366f1 15px,
    #6366f1 17.5px,
    transparent 17.5px,
    transparent 20px,
    #10b981 20px,
    #10b981 22.5px,
    transparent 22.5px,
    transparent 25px
  )`;

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-white text-[#363635] selection:bg-[#efefef] selection:text-[#363635]">
      {/* Subtle background grain (controlled opacity, clean white) */}
      <div className="bg-grain-layer" />

      {/* 1. Sleek Top Multi-Color Hatch Band */}
      <div 
        className="w-full h-3.5 sm:h-4 border-b border-[#c3c3c2] bg-white shrink-0 relative z-10 animate-hatch-top"
        style={{ backgroundImage: colorPattern }}
      />

      {/* 2. Middle Section: Left Hatch Band + Full-Width Body + Right Hatch Band */}
      <div className="w-full flex-1 flex flex-row relative z-10">
        
        {/* Sleek Left Vertical Multi-Color Hatch Band */}
        <div 
          className="w-3.5 sm:w-4 border-r border-[#c3c3c2] bg-white shrink-0 animate-hatch-left"
          style={{ backgroundImage: colorPattern }}
        />

        {/* Full-Width Centered Body Content with Generous Proportions */}
        <main className="flex-1 w-full bg-white flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 py-10 sm:py-14 md:py-16">
          <div className="w-full max-w-6xl xl:max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
            
            {/* Header Row: Avatar + Name + Live Status Badge (exact layout as screenshot) */}
            <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8 lg:gap-10 border-b border-[#c3c3c2] pb-8 sm:pb-10">
              
              {/* Proportional Avatar (generous width & height showing shoulders & face) */}
              <div className="relative w-40 h-44 sm:w-48 sm:h-52 md:w-56 md:h-60 border border-[#363635] rounded-[3px] overflow-hidden shrink-0 group/avatar cursor-pointer bg-[#f3f4f1]">
                {/* Default Photo (profilephoto2.png) */}
                <img
                  src="/bg/profilephoto2.png"
                  alt="Getabalew Kemaw"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-300 ease-out group-hover/avatar:opacity-0 group-hover/avatar:scale-105"
                />

                {/* Hover Photo (profilephoto.png) */}
                <img
                  src="/bg/profilephoto.png"
                  alt="Getabalew Kemaw with sunglasses"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-300 ease-out opacity-0 scale-95 group-hover/avatar:opacity-100 group-hover/avatar:scale-100"
                />
              </div>

              {/* Info Column containing Name/Title row and Social/Availability row */}
              <div className="flex-1 w-full flex flex-col justify-between self-stretch gap-6 sm:gap-8">
                {/* Name on line 1, and Title styled with perimeter hatch band diagonal stripes across the text */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#363635] leading-tight">
                    Getabalew Kemaw
                  </h1>

                  {/* Multi-color diagonal hatch band pattern textured across the entire title text */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl md:text-3xl font-light text-[#5e5e5d]">/</span>
                    <span className="hatch-text-band text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.08em] [font-variant-caps:all-small-caps] select-none">
                      fullstack software engineer
                    </span>
                  </div>
                </div>

                {/* Bottom: Social Links on Left + Live Availability on Right */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-base sm:text-lg md:text-xl font-light text-[#5e5e5d]">
                    <InteractiveMention
                      label="GitHub"
                      href="https://github.com/GetabalewKemaw"
                      urlText="github.com/GetabalewKemaw"
                      showInlineIcon={true}
                      icon={
                        <svg className="w-5 h-5 text-[#363635]" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      }
                    />

                    <InteractiveMention
                      label="LinkedIn"
                      href="https://linkedin.com/in/getabalew-kemaw"
                      urlText="linkedin.com/in/getabalew-kemaw"
                      showInlineIcon={true}
                      icon={
                        <svg className="w-5 h-5 text-[#363635]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      }
                    />

                    <InteractiveMention
                      label="Telegram"
                      href="https://t.me/GetabalewKemaw"
                      urlText="t.me/GetabalewKemaw"
                      showInlineIcon={true}
                      icon={
                        <svg className="w-5 h-5 text-[#363635]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                        </svg>
                      }
                    />

                    <InteractiveMention
                      label="Email"
                      href="mailto:getabalewkemaw@gmail.com"
                      urlText="getabalewkemaw@gmail.com"
                      showInlineIcon={true}
                      icon={
                        <svg className="w-5 h-5 text-[#363635]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                        </svg>
                      }
                    />
                  </div>

                  {/* Modern Live Availability & Addis Ababa Timezone Pill */}
                  <div className="flex items-center gap-2 border border-[#c3c3c2] bg-white px-3.5 py-1.5 rounded-[3px] text-xs sm:text-sm font-mono text-[#5e5e5d] shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[#363635] font-medium">Open to roles</span>
                    <span className="text-[#c3c3c2]">·</span>
                    <span>{timeString ? `${timeString} EAT (Addis Ababa)` : "Addis Ababa, ET"}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Core Headline & Prominent Narrative Description matching screenshot typography */}
            <div className="flex flex-col gap-6 pt-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight text-[#363635]">
                Full-Stack Engineer specializing in AI-integrated platforms, RAG architectures, and production systems.
              </h2>

              {/* Large, Generous Lexend Narrative matching the exact style of the screenshot */}
              <div className="flex flex-col gap-5 text-lg sm:text-xl md:text-[22px] font-light text-[#4a4a49] leading-relaxed">
                <div className="leading-relaxed">
                  Currently teaching and engineering scalable applications as a{" "}
                  <InteractiveMention
                    label="Full-Stack Instructor & Developer at AllCan Tech"
                    href="https://allcan.tech"
                    urlText="allcan.tech"
                    icon={
                      <svg className="w-4 h-4 text-[#363635]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    }
                  />
                  , mentoring developers through real-world software delivery and full lifecycle architecture.
                </div>

                {/* Inline Chips flowing naturally with the sentence, exactly as formatted in the screenshot */}
                <div className="leading-loose flex flex-wrap items-center gap-x-2 gap-y-2.5">
                  <span className="shrink-0">I’ve dipped my toes in</span>

                  {[
                    { id: "fullstack", label: "Fullstack SaaS & Next.js" },
                    { id: "rag", label: "pgvector & Hybrid RAG" },
                    { id: "realtime", label: "Real-Time Media Streaming" },
                    { id: "python", label: "Python & NLP Sentiment Pipelines" },
                    { id: "backend", label: "PostgreSQL & Prisma" },
                  ].map((chip) => (
                    <button
                      key={chip.id}
                      onClick={() => setActiveChip(activeChip === chip.id ? null : chip.id)}
                      className={`inline-block px-3 py-1 rounded-[3px] text-base sm:text-lg font-light transition-all cursor-pointer ${
                        activeChip === chip.id
                          ? "bg-[#363635] text-white"
                          : "bg-[#f0f0ef] hover:bg-[#e6e6e5] text-[#363635]"
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}

                  {/* High-impact black chip as highlighted in user screenshot */}
                  <span className="inline-block bg-[#363635] text-white px-3.5 py-1 rounded-[3px] text-base sm:text-lg font-normal">
                    and your next big idea.
                  </span>
                </div>

                <div className="leading-relaxed">
                  Specialized in Hybrid Search RAG architectures combining semantic vector similarity with PostgreSQL full-text search across projects like{" "}
                  <InteractiveMention
                    label="VELO CRM"
                    href="https://github.com/GetabalewKemaw"
                    urlText="github.com/velo-crm"
                    icon={
                      <svg className="w-4 h-4 text-[#363635]" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    }
                  />{" "}
                  and{" "}
                  <InteractiveMention
                    label="TelePlay"
                    href="https://github.com/GetabalewKemaw"
                    urlText="github.com/teleplay"
                    icon={
                      <svg className="w-4 h-4 text-[#363635]" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    }
                  />
                  . Based in <span className="text-[#363635] font-normal">Addis Ababa, Ethiopia</span> · Open to remote roles (US/UK/EU/Dubai).
                </div>
              </div>
            </div>

            {/* Action Buttons (Strictly 3px - 5px radius, proportional font size) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#resume"
                className="inline-flex items-center gap-2 bg-[#363635] text-white px-5 py-2.5 rounded-[5px] text-[15px] sm:text-base font-normal hover:opacity-90 active:opacity-100 transition-opacity"
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                </svg>
                <span>Download resume</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 border border-[#c3c3c2] bg-white text-[#363635] px-5 py-2.5 rounded-[3px] text-[15px] sm:text-base font-normal hover:bg-[#36363514] transition-colors cursor-pointer"
              >
                <span>{copiedEmail ? "✓ Email copied!" : "Get in touch"}</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-[#c3c3c2] bg-white text-[#5e5e5d] hover:text-[#363635] px-5 py-2.5 rounded-[3px] text-[15px] sm:text-base font-normal hover:bg-[#36363514] transition-colors"
              >
                <span>View selected projects</span>
              </a>
            </div>

          </div>
        </main>

        {/* Sleek Right Vertical Multi-Color Hatch Band */}
        <div 
          className="w-3.5 sm:w-4 border-l border-[#c3c3c2] bg-white shrink-0 animate-hatch-right"
          style={{ backgroundImage: colorPattern }}
        />
      </div>

      {/* 3. Sleek Bottom Multi-Color Hatch Band */}
      <div 
        className="w-full h-3.5 sm:h-4 border-t border-[#c3c3c2] bg-white shrink-0 relative z-10 animate-hatch-bottom"
        style={{ backgroundImage: colorPattern }}
      />
    </div>
  );
}
