import { ProfileAvatar } from "./ProfileAvatar";
import { SocialMentions } from "./SocialMentions";
import { LiveStatusBadge } from "./LiveStatusBadge";

export function ProfileHeader() {
  return (
    <header className="flex flex-col md:flex-row items-start gap-7 sm:gap-9 lg:gap-11 border-b border-theme pb-8 sm:pb-10 theme-level-1">
      {/* Proportional Avatar (generous width & height showing shoulders & face) */}
      <ProfileAvatar />

      {/* Info Column containing Name/Title row and Social/Availability row */}
      <div className="flex-1 w-full flex flex-col justify-between self-stretch gap-6 sm:gap-8">
        {/* Name on line 1, and Title styled with perimeter hatch band diagonal stripes across the text */}
        <div className="flex flex-col gap-2.5 sm:gap-3 theme-level-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-theme-primary leading-tight">
            Getabalew Kemaw
          </h1>

          {/* Multi-color diagonal hatch band pattern textured across the entire title text */}
          <div className="flex items-baseline gap-2.5 sm:gap-3">
            <span className="text-2xl sm:text-3xl md:text-4xl font-light text-theme-muted">/</span>
            <span className="hatch-text-band text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.08em] [font-variant-caps:all-small-caps] select-none">
              fullstack software engineer
            </span>
          </div>
        </div>

        {/* Bottom: Social Links on Left + Live Availability on Right */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1 theme-level-2">
          <SocialMentions />
          <LiveStatusBadge />
        </div>
      </div>
    </header>
  );
}
