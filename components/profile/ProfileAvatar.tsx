import Image from "next/image";

export function ProfileAvatar() {
  return (
    <div className="relative w-44 h-48 sm:w-52 sm:h-56 md:w-60 md:h-64 lg:w-64 lg:h-68 border border-theme-avatar rounded-[3px] overflow-hidden shrink-0 group/avatar cursor-pointer bg-theme-avatar">
      {/* Default Photo (profilephoto2.png) */}
      <Image
        src="/bg/profilephoto2.png"
        alt="Getabalew Kemaw"
        fill
        sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 256px"
        priority
        className="object-cover object-top transition-all duration-300 ease-out group-hover/avatar:opacity-0 group-hover/avatar:scale-105"
      />

      {/* Hover Photo (profilephoto.png) */}
      <Image
        src="/bg/profilephoto.png"
        alt="Getabalew Kemaw with sunglasses"
        fill
        sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 256px"
        className="object-cover object-top transition-all duration-300 ease-out opacity-0 scale-95 group-hover/avatar:opacity-100 group-hover/avatar:scale-100"
      />
    </div>
  );
}
