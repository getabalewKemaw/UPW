import type { Metadata } from "next";
import { HatchPerimeter } from "@/components/frame/HatchPerimeter";
import { AboutPageView } from "@/components/about/AboutPageView";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "About · Getabalew Kemaw · Fullstack Software Engineer & AI Researcher",
  description:
    "Learn about Getabalew Kemaw — fullstack software engineer, AI researcher, and builder known for fast execution velocity, exceptional UI/UX craftsmanship, clear communication, and client trust.",
};

export default function AboutPage() {
  return (
    <HatchPerimeter showPreloader={false}>
      <main className="flex-1 w-full bg-theme-main flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="w-full flex flex-col gap-14">
          <AboutPageView />
          <FooterSection />
        </div>
      </main>
    </HatchPerimeter>
  );
}
