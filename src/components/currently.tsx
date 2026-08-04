import { BookOpen, Rocket, Search } from "lucide-react";
import { SectionHeader } from "./section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { currentStatus } from "../data/currently";

const iconMap = {
  book: BookOpen,
  rocket: Rocket,
  search: Search,
};

export function Currently() {
  return (
    <section className="py-6 md:py-8" id="actualmente">
      <div className="container-tight">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-card p-5 md:p-7">
            <SectionHeader
              eyebrow="Actualmente"
              title="Mi estado actual"
              description="Un resumen rápido de dónde estoy enfocada ahora."
            />
            <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {currentStatus.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <StaggerItem key={item.label}>
                    <div className="flex items-start gap-4 rounded-2xl bg-surface p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-base font-medium leading-snug text-foreground">{item.label}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
