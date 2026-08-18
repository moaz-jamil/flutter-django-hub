import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun, Twitter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navSections, profile } from "@/lib/portfolio-data";

function useTheme() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
    document.documentElement.classList.toggle("dark", !isLight);
  }, []);

  const toggle = () => {
    setLight((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("light", next);
      document.documentElement.classList.toggle("dark", !next);
      localStorage.setItem("theme", next ? "light" : "dark");
      return next;
    });
  };

  return { light, toggle };
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const els = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export function NavBar() {
  const { light, toggle } = useTheme();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2 font-display text-sm font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-accent)] font-mono text-primary-foreground">
            {profile.name.charAt(0)}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  active === s.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-[image:var(--gradient-accent)] transition-transform duration-300",
                    active === s.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            <Github className="size-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter / X"
            className="hidden rounded-md p-2 text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            <Twitter className="size-4" />
          </a>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle color theme"
            onClick={toggle}
            className="text-muted-foreground"
          >
            {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-2 py-3 text-sm",
                    active === s.id ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
