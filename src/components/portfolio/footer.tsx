import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { navSections, profile } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-accent)] font-mono text-primary-foreground">
              {profile.name.charAt(0)}
            </span>
            {profile.name}
          </a>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            {[
              { href: profile.socials.github, icon: Github, label: "GitHub" },
              { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: profile.socials.twitter, icon: Twitter, label: "Twitter / X" },
              { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with ❤️ using Flutter &amp; Django</p>
        </div>
      </div>
    </footer>
  );
}
