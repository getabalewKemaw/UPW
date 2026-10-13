import { HatchPerimeter } from "@/components/frame/HatchPerimeter";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { NarrativeBio } from "@/components/narrative/NarrativeBio";
import { ActionButtons } from "@/components/actions/ActionButtons";

export default function Home() {
  return (
    <HatchPerimeter>
      {/* Full-Width Body Content with Generous Proportions & Navbar Clearance */}
      <main
        id="overview"
        className="flex-1 w-full bg-theme-main flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-10 sm:pb-14 md:pb-16"
      >
        <div className="w-full flex flex-col gap-9 sm:gap-11 lg:gap-14">
          <ProfileHeader />
          <NarrativeBio />
          <ActionButtons />
        </div>
      </main>
    </HatchPerimeter>
  );
}
