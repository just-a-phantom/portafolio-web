import { SectionHeader } from "./section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const focusCards = [
  {
    title: "Ingeniería con propósito",
    body: "Me interesa desarrollar tecnología que tenga un impacto real en la vida de las personas. Cada decisión técnica debe responder a una necesidad clara y medible.",
  },
  {
    title: "Inteligencia aplicada",
    body: "Combino inteligencia artificial, desarrollo de software y diseño de experiencias digitales para construir soluciones robustas, intuitivas y escalables.",
  },
  {
    title: "Aprendizaje continuo",
    body: "Disfruto los proyectos donde investigar, probar y mejorar es parte del proceso. La curiosidad y la disciplina son mi base para afrontar problemas complejos.",
  },
];

export function Approach() {
  return (
    <section className="section-padding bg-background" id="enfoque">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Mi enfoque"
          title="Construyo tecnología con impacto real"
          description="Ingeniería de software, inteligencia artificial y experiencia de usuario al servicio de soluciones que importan."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Ingeniera Civil Informática (EC). Me motiva crear productos donde la calidad técnica y la experiencia
                humana vayan de la mano.
              </p>
              <p>
                Durante mi formación he trabajado en aplicaciones móviles, plataformas web e
                iniciativas de investigación. He participado en ferias tecnológicas, exposiciones y
                talleres de divulgación, porque creo que compartir el conocimiento es parte de
                construirlo.
              </p>
              <p>
                Actualmente estoy enfocada en profundizar mis conocimientos en inteligencia artificial
                y desarrollo de productos, con el objetivo de contribuir a proyectos de investigación e
                innovación que generen un impacto positivo.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {focusCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-accent/40">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">{card.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
