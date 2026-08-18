import { Section } from "./section";
import { Reveal } from "./reveal";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Experience & milestones"
      description="Roles, contracts and internships — replace these placeholder entries with your own."
      className="bg-surface/30"
    >
      <ol className="relative ml-3 space-y-10 border-l border-border pl-8 sm:ml-4 sm:pl-10">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.role + item.company} delay={i * 100} className="relative">
            <span
              className="absolute -left-[41px] top-1.5 grid size-4 place-items-center rounded-full bg-background sm:-left-[49px]"
              aria-hidden
            >
              <span className="size-2.5 rounded-full bg-[image:var(--gradient-accent)]" />
            </span>
            <div className="surface-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                <span className="font-mono text-xs text-primary">{item.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
