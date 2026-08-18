import { useState, type FormEvent } from "react";
import { CalendarClock, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { profile } from "@/lib/portfolio-data";

// EDIT: create a free form at formspree.io and paste your endpoint here.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

export function Contact() {
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (FORMSPREE_ENDPOINT.includes("your-form-id")) {
      const subject = encodeURIComponent(String(data.get("subject") ?? "Portfolio enquiry"));
      const body = encodeURIComponent(
        `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      toast.info("Opening your email client", {
        description: "Add your Formspree endpoint in contact.tsx to send directly from the site.",
      });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Message sent", { description: "I'll get back to you shortly." });
      form.reset();
    } catch {
      toast.error("Couldn't send that", { description: `Email me directly at ${profile.email}.` });
    } finally {
      setSending(false);
    }
  }

  const details = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: profile.location, href: undefined },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Have something to <span className="text-gradient">build</span>?
        </>
      }
      description="Tell me about the app or API you have in mind. I reply within a day."
      className="bg-surface/30"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <Reveal>
          <form onSubmit={onSubmit} className="surface-card space-y-5 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Ada Lovelace" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="Flutter app for..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="A few lines about scope, timeline and budget."
              />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={sending}>
              <Send className="size-4" /> {sending ? "Sending…" : "Send message"}
            </Button>
          </form>
        </Reveal>

        <Reveal delay={120} className="space-y-4">
          <div className="surface-card rounded-2xl p-6">
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">
              Direct contact
            </h3>
            <ul className="mt-5 space-y-4">
              {details.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="grid size-9 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
                    <Icon className="size-4" />
                  </span>
                  {href ? (
                    <a href={href} className="transition-colors hover:text-primary">
                      {label}
                    </a>
                  ) : (
                    label
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {[
                { href: profile.socials.github, icon: Github, label: "GitHub" },
                { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.socials.twitter, icon: Twitter, label: "Twitter / X" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid size-10 place-items-center rounded-xl border border-border bg-surface/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="surface-card rounded-2xl p-6">
            <h3 className="font-display text-sm uppercase tracking-widest text-primary">
              Prefer to talk?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Grab a 30-minute slot and we'll scope it together.
            </p>
            <Button asChild variant="outlineAccent" size="lg" className="mt-5">
              {/* EDIT: your Calendly link */}
              <a href={profile.calendlyUrl} target="_blank" rel="noreferrer noopener">
                <CalendarClock className="size-4" /> Book a call
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
