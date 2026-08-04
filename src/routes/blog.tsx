import { createFileRoute } from "@tanstack/react-router";
import { PenLine } from "lucide-react";
import { SectionHeader } from "../components/section-header";
import { FadeIn } from "../components/motion";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Nathaly Torres Romero" },
      {
        name: "description",
        content:
          "Blog técnico de Nathaly Torres Romero. Artículos sobre inteligencia artificial, desarrollo de software y experiencia de usuario.",
      },
      { property: "og:title", content: "Blog — Nathaly Torres Romero" },
      {
        property: "og:description",
        content:
          "Artículos sobre inteligencia artificial, desarrollo de software y experiencia de usuario.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="container-tight max-w-4xl">
        <SectionHeader
          eyebrow="Blog"
          title="Ideas, apuntes y aprendizajes"
          description="Publicaciones técnicas sobre IA, desarrollo de productos y buenas prácticas de ingeniería."
        />

        <FadeIn>
          <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/50 text-primary">
              <PenLine className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-semibold text-foreground">
              Próximamente artículos
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Estoy preparando el primer contenido técnico. Mientras tanto, puedes revisar mis proyectos
              o contactarme directamente.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
