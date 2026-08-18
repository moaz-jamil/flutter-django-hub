import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";
import { projectFilters, projects, type Project, type ProjectCategory } from "@/lib/portfolio-data";

function TechPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
      {label}
    </span>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects I've shipped"
      description="Placeholder projects — swap the screenshots, copy and links in src/lib/portfolio-data.ts."
    >
      <Reveal className="flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all",
              filter === f.id
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 90}>
            <article className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="relative block aspect-[16/10] w-full overflow-hidden text-left"
                aria-label={`Open details for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[image:linear-gradient(to_top,var(--surface),transparent_55%)] opacity-80" />
              </button>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 pt-1">
                  <Button asChild size="sm" variant="hero">
                    <a href={project.demoUrl} target="_blank" rel="noreferrer noopener">
                      Live Demo <ArrowUpRight className="size-3.5" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outlineAccent">
                    <a href={project.codeUrl} target="_blank" rel="noreferrer noopener">
                      <Github className="size-3.5" /> View Code
                    </a>
                  </Button>
                  <button
                    onClick={() => setSelected(project)}
                    className="ml-auto text-xs font-medium text-primary hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border-border bg-card">
          {selected ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{selected.title}</DialogTitle>
                <DialogDescription>{selected.summary}</DialogDescription>
              </DialogHeader>

              <div className="flex flex-wrap gap-1.5">
                {selected.tech.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>

              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <h4 className="font-display text-xs uppercase tracking-widest text-primary">
                    Problem solved
                  </h4>
                  <p className="mt-2">{selected.problem}</p>
                </div>
                <div>
                  <h4 className="font-display text-xs uppercase tracking-widest text-primary">
                    My role
                  </h4>
                  <p className="mt-2">{selected.role}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {selected.gallery.map((src, i) => (
                  <img
                    key={`${selected.slug}-${i}`}
                    src={src}
                    alt={`${selected.title} screenshot ${i + 1}`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full rounded-xl border border-border object-cover"
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <Button asChild variant="hero">
                  <a href={selected.demoUrl} target="_blank" rel="noreferrer noopener">
                    Live Demo <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outlineAccent">
                  <a href={selected.codeUrl} target="_blank" rel="noreferrer noopener">
                    <Github className="size-4" /> View Code
                  </a>
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
