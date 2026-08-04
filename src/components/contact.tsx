import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "./section-header";
import { FadeIn } from "./motion";
import { site } from "../data/site";

const channels = [
  {
    icon: Mail,
    label: "Correo electrónico",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nathaly-torres-1383123b8",
    href: site.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nathalytorres",
    href: site.github,
    external: true,
  },
];

export function Contact() {
  return (
    <section className="section-padding bg-surface" id="contacto">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Contacto"
          title="Hablemos"
          description="¿Tienes una oportunidad o proyecto? Escríbeme directamente a través de estas redes."
        />

        <FadeIn>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent/40"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">{label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
