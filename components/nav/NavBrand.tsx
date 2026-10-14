"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBrand() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleScrollTop = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const className =
    "flex items-center gap-3 pl-2 sm:pl-2.5 pr-3 sm:pr-4 py-1.5 sm:py-2 rounded-full hover:bg-theme-btn-secondary-hover transition-all duration-200 group cursor-pointer shrink-0";

  const content = (
    <>
      {/* Photo Avatar Thumbnail with Animated Status Radar */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-theme-avatar shrink-0 bg-theme-avatar shadow-xs">
        <Image
          src="/bg/profilephoto2.png"
          alt="Getabalew Kemaw"
          fill
          sizes="44px"
          className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
        />
        {/* Animated Live Availability Indicator */}
        <span className="absolute bottom-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-theme-page" />
        </span>
      </div>

      {/* GK Monogram Brand Name - Enriched Font Sizes */}
      <span className="flex items-baseline gap-1.5 font-mono select-none">
        <span className="font-bold text-xl sm:text-2xl tracking-tight text-theme-primary group-hover:text-theme-primary transition-colors">
          GK
        </span>
        <span className="text-sm sm:text-[15px] text-theme-muted hidden sm:inline font-sans font-medium tracking-normal">
          · getabalew kemaw
        </span>
      </span>
    </>
  );

  if (!isHome) {
    return (
      <Link href="/" title="Getabalew Kemaw (GK)" className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href="#overview"
      onClick={handleScrollTop}
      title="Getabalew Kemaw (GK)"
      className={className}
    >
      {content}
    </a>
  );
}
