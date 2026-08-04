import { useState } from "react";
import { Calendar, ChevronDown, MapPin } from "lucide-react";
import { SectionHeader } from "./section-header";
import { StaggerContainer, StaggerItem } from "./motion";
import { trajectoryItems, trajectoryTypes, type TrajectoryItem } from "../data/trajectory";
import { Badge } from "./ui/badge";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-CL", { year: "numeric", month: "long" });
}

export function Trajectory() {
  return (
    <section className="section-padding bg-surface" id="trayectoria">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Trayectoria"
          title="Hitos de mi formación"
          description="Proyectos, ferias, exposiciones, talleres y experiencias que han marcado mi camino como futura ingeniera."
        />

        <StaggerContainer className="relative mx-auto max-w-3xl">
          <div className="absolute top-2 bottom-2 left-2 w-px bg-border" />
          {trajectoryItems.map((item) => (
            <StaggerItem key={item.id}>
              <TimelineRow item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function TimelineRow({ item }: { item: TrajectoryItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative pl-8">
      <span className="absolute left-2 top-5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-surface bg-primary" />
      <div className="mb-2 rounded-2xl border border-border bg-card transition-colors hover:border-primary/40">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 text-left"
        >
          <span className="min-w-0">
            <span className="flex flex-wrap items-center gap-2">
              <Badge className={`rounded-full text-xs ${trajectoryTypes[item.type].color}`}>
                {trajectoryTypes[item.type].label}
              </Badge>
              <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                {formatDate(item.date)}
                {item.endDate && formatDate(item.endDate) !== formatDate(item.date) && ` — ${formatDate(item.endDate)}`}
              </span>
            </span>
            <span className="mt-1.5 block font-heading text-lg font-semibold text-foreground">
              {item.title}
            </span>
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="border-t border-border/70 px-4 pb-4 pt-3">
            <p className="flex items-start gap-1.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              {item.location}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {item.technologies && item.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {item.images && item.images.length > 0 && (
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {item.images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={item.title}
                    loading="lazy"
                    className="h-40 w-full rounded-xl border border-border object-cover"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
