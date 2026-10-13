import { InteractiveMention } from "@/components/mentions/InteractiveMention";
import { GithubIcon, LinkedinIcon, TelegramIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { SOCIAL_LINKS } from "@/data/portfolio-data";

export function SocialMentions() {
  return (
    <div className="flex flex-wrap items-center gap-5 sm:gap-6 lg:gap-7 text-lg sm:text-xl md:text-2xl font-light text-theme-muted">
      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="GitHub"
          href={SOCIAL_LINKS.github}
          urlText="github.com/getabalewKemaw"
          showInlineIcon={true}
          icon={<GithubIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>

      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="LinkedIn"
          href={SOCIAL_LINKS.linkedin}
          urlText="linkedin.com/in/getabalewkemaw"
          showInlineIcon={true}
          icon={<LinkedinIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>

      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="Telegram"
          href={SOCIAL_LINKS.telegram}
          urlText="t.me/GetabalewKemaw"
          showInlineIcon={true}
          icon={<TelegramIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>

      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="Phone"
          href={`tel:${SOCIAL_LINKS.phone}`}
          urlText={SOCIAL_LINKS.phoneFormatted}
          showInlineIcon={true}
          icon={<PhoneIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>

      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="Email"
          href={`mailto:${SOCIAL_LINKS.email}`}
          urlText={SOCIAL_LINKS.email}
          showInlineIcon={true}
          icon={<MailIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>
    </div>
  );
}
