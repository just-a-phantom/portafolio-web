import { SectionHeader } from "./section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { education, courses } from "../data/education";

export function Education() {
  return (
    <section className="section-padding bg-background" id="educacion">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Educación"
          title="Formación académica"
          description="Mi base académica y los cursos que han moldeado mi perfil técnico."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <StaggerContainer className="space-y-4">
            {education.map((item) => (
              <StaggerItem key={item.degree}>
                <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{item.degree}</h3>
                    <span className="text-base text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
                  <ul className="mt-4 space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-base text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">Cursos destacados</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
