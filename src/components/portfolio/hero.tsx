import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";
// EDIT: swap this file with your own professional headshot.
import headshot from "@/assets/headshot.jpg";

function useTypedTagline(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      done ? 1600 : deleting ? 35 : 70,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypedTagline(profile.taglines);

  return (
    <section id="home" className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40">
      <div className="aurora left-[-10%] top-[-10%] h-[28rem] w-[28rem] bg-primary/30" aria-hidden />
      <div
        className="aurora right-[-15%] top-[10%] h-[26rem] w-[26rem] bg-primary-glow/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            Available for freelance & full-time
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-6xl">
            Hi, I'm {profile.name}.
            <br />
            <span className="text-gradient">{typed}</span>
            <span className="animate-caret ml-0.5 font-light text-primary">|</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                View My Work <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outlineAccent" size="xl">
              {/* EDIT: put your resume PDF at public/resume.pdf */}
              <a href={profile.resumeUrl} download>
                <Download className="size-4" /> Download Resume
              </a>
            </Button>
            <Button asChild variant="ghost" size="xl" className="text-muted-foreground">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
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
                className="grid size-10 place-items-center rounded-xl border border-border bg-surface/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float relative">
            <div
              className="absolute inset-6 rounded-full bg-[image:var(--gradient-accent)] opacity-40 blur-3xl"
              aria-hidden
            />
            <img
              src={headshot}
              alt={`${profile.name}, ${profile.role}`}
              width={816}
              height={816}
              fetchPriority="high"
              className="relative aspect-square w-full rounded-[2rem] border border-border object-cover glow-ring"
            />
          </div>
          <div className="surface-card absolute -bottom-5 -left-4 rounded-xl px-4 py-3 font-mono text-xs text-muted-foreground backdrop-blur sm:-left-8">
            <span className="text-primary">$</span> flutter build --release
          </div>
        </div>
      </div>
    </section>
  );
}
