import { TopicChips } from "./TopicChips";

export function NarrativeBio() {
  return (
    <section aria-label="Professional Overview" className="flex flex-col gap-7 pt-2">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-light leading-snug tracking-tight text-theme-primary theme-level-3">
        I design, build, test, and deploy reliable software products — from user-facing applications to backend systems and AI-powered solutions.
      </h2>

      {/* Large, Generous Lexend Narrative matching the exact recruiter-friendly brief */}
      <div className="flex flex-col gap-6 text-xl sm:text-2xl md:text-[24px] lg:text-[27px] font-light text-theme-narrative leading-relaxed">
        <div className="leading-relaxed theme-level-3">
          Full-Stack &amp; AI Software Engineer specialized in scalable production systems and modern web architecture, actively available for full-time engineering roles.
        </div>

        {/* What I bring: 5 Core Disciplines */}
        <div id="domains" className="theme-level-4 scroll-mt-28">
          <TopicChips />
        </div>

        <div className="leading-relaxed theme-level-4">
          My experience spans production-oriented web applications, real-time platforms, and AI-integrated systems, including hybrid search and Retrieval-Augmented Generation (RAG).
        </div>

        <div className="leading-relaxed theme-level-5">
          Based in <span className="text-theme-primary font-normal">Ethiopia</span> · Open to remote opportunities worldwide, including the US, UK, EU, and Dubai · Open to relocation.
        </div>
      </div>
    </section>
  );
}
