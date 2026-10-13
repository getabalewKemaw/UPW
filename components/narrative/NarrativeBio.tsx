import { InteractiveMention } from "@/components/mentions/InteractiveMention";
import { TopicChips } from "./TopicChips";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "lucide-react";

export function NarrativeBio() {
  return (
    <section className="flex flex-col gap-7 pt-2">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-light leading-snug tracking-tight text-theme-primary theme-level-3">
        Full-Stack Engineer specializing in AI-integrated platforms, RAG architectures, and production systems.
      </h2>

      {/* Large, Generous Lexend Narrative matching the exact style of the screenshot */}
      <div className="flex flex-col gap-6 text-xl sm:text-2xl md:text-[24px] lg:text-[27px] font-light text-theme-narrative leading-relaxed">
        <div className="leading-relaxed theme-level-3">
          Currently teaching and engineering scalable applications as a{" "}
          <InteractiveMention
            label="Full-Stack Instructor & Developer at AllCan Tech"
            href="https://allcan.tech"
            urlText="allcan.tech"
            icon={<ExternalLink className="w-5 h-5 text-theme-primary" />}
          />
          , mentoring developers through real-world software delivery and full lifecycle architecture.
        </div>

        {/* Inline Chips flowing naturally with the sentence, exactly as formatted in the screenshot */}
        <div id="domains" className="theme-level-4 scroll-mt-28">
          <TopicChips />
        </div>

        <div className="leading-relaxed theme-level-5">
          Specialized in Hybrid Search RAG architectures combining semantic vector similarity with PostgreSQL full-text search across projects like{" "}
          <InteractiveMention
            label="VELO CRM"
            href="https://github.com/GetabalewKemaw"
            urlText="github.com/velo-crm"
            icon={<GithubIcon className="w-5 h-5 text-theme-primary" />}
          />{" "}
          and{" "}
          <InteractiveMention
            label="TelePlay"
            href="https://github.com/GetabalewKemaw"
            urlText="github.com/teleplay"
            icon={<GithubIcon className="w-5 h-5 text-theme-primary" />}
          />
          . Based in <span className="text-theme-primary font-normal">Addis Ababa, Ethiopia</span> · Open to remote roles (US/UK/EU/Dubai).
        </div>
      </div>
    </section>
  );
}
