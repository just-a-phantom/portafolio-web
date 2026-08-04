import { SectionHeader } from "./section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { technologyGroups } from "../data/technologies";

export function Technologies() {
  return (
    <section className="section-padding bg-background" id="tecnologias">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Tecnologías"
          title="Stack de herramientas"
          description="Tecnologías que uso para diseñar, construir y desplegar productos digitales."
        />

        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group) => (
            <StaggerItem key={group.name}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-accent/30">
                <h3 className="font-heading text-lg font-semibold text-foreground">{group.name}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
