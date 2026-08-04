import { Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { certifications } from "../data/certifications";
import { Badge } from "./ui/badge";

export function Certifications() {
  return (
    <section className="section-padding bg-surface" id="certificaciones">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Certificaciones"
          title="Formación complementaria"
          description="Certificaciones y cursos que estoy completando para profundizar mis competencias."
        />

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                <div className="flex items-start justify-between gap-3">
                  <Award className="h-6 w-6 shrink-0 text-primary" />
                  <Badge variant={cert.status === "Completada" ? "default" : "secondary"} className="rounded-full text-xs">
                    {cert.status}
                  </Badge>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">{cert.name}</h3>
                <p className="mt-1 text-base text-muted-foreground">{cert.issuer}</p>
                {cert.date && <p className="mt-3 text-sm text-subtle-foreground">{cert.date}</p>}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
