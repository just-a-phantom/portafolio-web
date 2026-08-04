import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "../components/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "../components/motion";
import { galleryItems } from "../data/gallery";
import { trajectoryItems } from "../data/trajectory";
import { site } from "../data/site";
import { Badge } from "../components/ui/badge";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Nathaly Torres Romero" },
      {
        name: "description",
        content:
          "Conoce a Nathaly Torres Romero: Ingeniera Civil Informática (EC) y desarrolladora de soluciones con IA, mobile y software.",
      },
      { property: "og:title", content: "Sobre mí — Nathaly Torres Romero" },
      {
        property: "og:description",
        content:
          "Ingeniera Civil Informática (EC), desarrolladora de soluciones con IA, mobile y software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container-tight max-w-4xl">
        <FadeIn>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Sobre mí
          </span>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Nathaly Torres Romero
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{site.role}</p>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Ingeniera Civil Informática (EC). Me interesa desarrollar tecnología que tenga un impacto real en la vida de
                las personas, combinando ingeniería de software, inteligencia artificial y diseño de
                experiencias digitales.
              </p>
              <p>
                Disfruto participar en proyectos donde cada decisión técnica tiene un propósito claro:
                crear soluciones robustas, intuitivas y escalables. Durante mi formación he trabajado en
                aplicaciones móviles, plataformas web e iniciativas de investigación, además de participar
                en ferias tecnológicas y actividades de divulgación.
              </p>
              <p>
                Actualmente estoy enfocada en profundizar mis conocimientos en inteligencia artificial y
                desarrollo de productos, con el objetivo de contribuir a proyectos de investigación e
                innovación que generen un impacto positivo.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">Áreas de interés</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Inteligencia Artificial",
                  "Desarrollo de software",
                  "UX/UI",
                  "Investigación aplicada",
                  "Robótica",
                  "Industria 4.0",
                ].map((area) => (
                  <Badge key={area} variant="secondary" className="rounded-full text-xs font-normal">
                    {area}
                  </Badge>
                ))}
              </div>

              <h3 className="mt-8 font-heading text-lg font-semibold text-foreground">Metas profesionales</h3>
              <ul className="mt-4 space-y-3 text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  Realizar una práctica profesional en 2027 que me permita crecer como ingeniera.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  Contribuir a proyectos de investigación e innovación tecnológica.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  Desarrollar productos que combinen IA, diseño y escalabilidad.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <section className="mt-20">
          <SectionHeader
            eyebrow="Galería"
            title="Momentos de mi trayectoria"
            description="Fotografías de ferias, talleres, exposiciones y actividades académicas."
          />
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <StaggerItem key={item.src}>
                <figure className="group overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-4">
                    <p className="font-heading text-sm font-semibold text-foreground">{item.event}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                    <p className="mt-2 text-xs text-subtle-foreground">{item.caption}</p>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </StaggerContainer>
          {galleryItems.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
              Próximamente fotografías de eventos y actividades.
            </div>
          )}
        </section>

        <section className="mt-20">
          <SectionHeader
            eyebrow="Trayectoria completa"
            title="Línea de tiempo"
            description="Un recorrido por los hitos que han marcado mi formación profesional."
          />
          <StaggerContainer className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-border" />
            {trajectoryItems.map((item) => (
              <StaggerItem key={item.id}>
                <div className="relative mb-8 ml-14">
                  <div className="absolute -left-[calc(1.5rem+2px)] top-2 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-background bg-primary" />
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="rounded-full text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {new Date(item.date).toLocaleDateString("es-CL", { year: "numeric", month: "long" })} ·{" "}
                      {item.location}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </div>
  );
}
