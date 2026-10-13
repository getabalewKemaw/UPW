import { InteractiveMention } from "@/components/mentions/InteractiveMention";
import { GithubIcon, LinkedinIcon, TelegramIcon, MailIcon } from "@/components/icons";

export function SocialMentions() {
  return (
    <div className="flex flex-wrap items-center gap-6 sm:gap-7 text-lg sm:text-xl md:text-2xl font-light text-theme-muted">
      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="GitHub"
          href="https://github.com/GetabalewKemaw"
          urlText="github.com/GetabalewKemaw"
          showInlineIcon={true}
          icon={<GithubIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>

      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="LinkedIn"
          href="https://linkedin.com/in/getabalew-kemaw"
          urlText="linkedin.com/in/getabalew-kemaw"
          showInlineIcon={true}
          icon={<LinkedinIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>

      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="Telegram"
          href="https://t.me/GetabalewKemaw"
          urlText="t.me/GetabalewKemaw"
          showInlineIcon={true}
          icon={<TelegramIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>

      <span className="theme-level-2 inline-block">
        <InteractiveMention
          label="Email"
          href="mailto:getabalewkemaw@gmail.com"
          urlText="getabalewkemaw@gmail.com"
          showInlineIcon={true}
          icon={<MailIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-theme-primary" />}
        />
      </span>
    </div>
  );
}
