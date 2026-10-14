import { InteractiveMention } from "@/components/mentions/InteractiveMention";
import { ExternalLink } from "lucide-react";
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
          Currently working as a{" "}
          <InteractiveMention
            label="Full-Stack Instructor & Developer at AllCan Tech"
            href="https://allcan.tech"
            urlText="allcan.tech"
            icon={<ExternalLink className="w-5 h-5 text-theme-primary" />}
          />
          , combining hands-on software engineering with mentoring developers in practical development and software delivery.
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
