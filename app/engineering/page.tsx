import type { Metadata } from "next";
import { HatchPerimeter } from "@/components/frame/HatchPerimeter";
import { EngineeringPageView } from "@/components/engineering/EngineeringPageView";
import { FooterSection } from "@/components/footer/FooterSection";



export const metadata: Metadata = {
  title: "Engineering & Technical Deep Dives · Getabalew Kemaw",
  description:
    "Explore architectural decisions, database query optimizations, automated Playwright QA suites, multi-stage Docker DevOps pipelines, and Hybrid Search RAG architectures built by Getabalew Kemaw.",
};



export default function EngineeringPage() {
  return (
    <HatchPerimeter showPreloader={false}>
      <main className="flex-1 w-full bg-theme-main flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-24">
        <div className="w-full flex flex-col gap-14">
          <EngineeringPageView />
          <FooterSection />
        </div>
      </main>
    </HatchPerimeter>
  );
}
