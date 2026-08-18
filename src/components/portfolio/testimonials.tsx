import { Quote } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { testimonials } from "@/lib/portfolio-data";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Kind Words"
      title="What people say"
      description="Placeholder quotes — swap in real client or teammate feedback."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <figure className="surface-card flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <Quote className="size-5 text-primary" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {/* EDIT: replace initials with a real photo */}
                <span className="grid size-10 place-items-center rounded-full bg-[image:var(--gradient-accent)] font-display text-sm font-semibold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
