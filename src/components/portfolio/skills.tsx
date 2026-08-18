import { useState } from "react";
import { Check } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";
import { skillGroups, type SkillCategory } from "@/lib/portfolio-data";

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("mobile");
  const group = skillGroups.find((g) => g.id === active)!;

  return (
    <Section
      id="skills"
      eyebrow="Tech Stack"
      title="Tools I reach for"
      description="Grouped by where they live in the stack. Everything listed here has shipped in something real."
      className="bg-surface/30"
    >
      <Reveal className="inline-flex flex-wrap gap-1 rounded-xl border border-border bg-surface/60 p-1 backdrop-blur">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            onClick={() => setActive(g.id)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-all",
              active === g.id
                ? "bg-[image:var(--gradient-accent)] text-primary-foreground shadow-[var(--glow-accent)]"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {g.label}
          </button>
        ))}
      </Reveal>

      <p className="mt-5 font-mono text-xs text-muted-foreground">{group.blurb}</p>

      <div key={group.id} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {group.cards.map((card, i) => (
          <Reveal key={`${group.id}-${card.title}`} delay={i * 60}>
            <div className="surface-card group h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
