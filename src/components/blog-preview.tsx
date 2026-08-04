import { PenLine } from "lucide-react";
import { SectionHeader } from "./section-header";
import { FadeIn } from "./motion";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

export function BlogPreview() {
  return (
    <section className="section-padding bg-background" id="blog">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Blog técnico"
          title="Ideas, apuntes y aprendizajes"
          description="Espacio para compartir notas técnicas, descubrimientos y reflexiones sobre ingeniería de software e IA."
        />

        <FadeIn>
          <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/50 text-primary">
              <PenLine className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
              Próximamente artículos técnicos
            </h3>
            <p className="mx-auto mt-2 max-w-md text-base text-muted-foreground">
              Estoy preparando publicaciones sobre IA aplicada, desarrollo de productos y buenas prácticas de ingeniería.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full">
              <Link to="/blog">Ir al blog</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
