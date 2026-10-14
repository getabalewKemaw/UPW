import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { NarrativeBio } from "@/components/narrative/NarrativeBio";
import { ActionButtons } from "@/components/actions/ActionButtons";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { FooterSection } from "@/components/footer/FooterSection";

export default function Home() {
  return (
    <main
      id="overview"
      className="flex-1 w-full min-w-0 max-w-full bg-theme-main flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-24"
    >
      <div className="w-full flex flex-col gap-10 sm:gap-14 lg:gap-16">
        <ProfileHeader />
        <NarrativeBio />
        <ActionButtons />

        {/* Section Break Accent Line */}
        <div className="w-full h-px bg-theme-muted/15 my-2" />

        {/* Next-Gen Case Studies: The 5 Targeted Production Projects */}
        <ProjectsSection />

        {/* Section Break Accent Line */}
        <div className="w-full h-px bg-theme-muted/15 my-2" />

        {/* Engineering Experience History */}
        <ExperienceSection />

        {/* Section Break Accent Line */}
        <div className="w-full h-px bg-theme-muted/15 my-2" />

        {/* Direct Contact & Collaboration Section (Side-by-Side with World Connectivity Visual) */}
        <ContactSection />

        {/* Monumental Footer Section */}
        <FooterSection />
      </div>
    </main>
  );
}

