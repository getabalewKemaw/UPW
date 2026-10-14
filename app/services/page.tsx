import type { Metadata } from "next";
import { ServicesPageView } from "@/components/services/ServicesPageView";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Engineering Services & Advisory · Getabalew Kemaw",
  description:
    "Custom software development, business automation, mobile application development, development mentorship, and technical talk appointment booking with Getabalew Kemaw.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 w-full min-w-0 max-w-full bg-theme-main flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-24">
      <div className="w-full flex flex-col gap-14">
        <ServicesPageView />
        <FooterSection />
      </div>
    </main>
  );
}
