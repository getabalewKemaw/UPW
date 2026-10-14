import type { Metadata } from "next";
import { AboutPageView } from "@/components/about/AboutPageView";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "About · Getabalew Kemaw · Fullstack Software Engineer & AI Researcher",
  description:
    "Learn about Getabalew Kemaw — fullstack software engineer, AI researcher, and builder known for fast execution velocity, exceptional UI/UX craftsmanship, clear communication, and client trust.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 w-full min-w-0 max-w-full bg-theme-main flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-24">
      <div className="w-full flex flex-col gap-14">
        <AboutPageView />
        <FooterSection />
      </div>
    </main>
  );
}
