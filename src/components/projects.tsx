import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Github, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { projects, type Project } from "../data/projects";

const categories = ["Todos", "IA", "Móvil", "Web", "Full Stack"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = filter === "Todos" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [filter, query]);

  return (
    <section className="section-padding bg-surface" id="proyectos">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Proyectos"
          title="Casos de estudio seleccionados"
          description="Proyectos que combinan ingeniería, investigación y diseño. Cada uno incluye arquitectura, desafíos y aprendizajes."
        />

        <FadeIn>
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar proyectos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-10 rounded-full pl-9"
              />
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </StaggerContainer>

        {filtered.length === 0 && (
          <FadeIn>
            <div className="py-10 text-center">
              <p className="text-muted-foreground">No se encontraron proyectos con esos criterios.</p>
              <Button
                variant="ghost"
                className="mt-2"
                onClick={() => {
                  setFilter("Todos");
                  setQuery("");
                }}
              >
                Limpiar filtros
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <StaggerItem>
      <motion.article
        layout
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35 }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
      >
        <div className="relative aspect-[16/10] bg-gradient-to-br from-accent-subtle/50 to-surface p-6">
          <div className="flex h-full items-center justify-center">
            <ProjectIcon title={project.title} />
          </div>
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="rounded-full">
              {project.category}
            </Badge>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-xl font-semibold text-foreground">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-base leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="rounded-full text-sm font-normal">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between pt-5">
            <Button asChild variant="ghost" size="sm" className="group/btn p-0 hover:bg-transparent">
              <Link to="/proyectos/$slug" params={{ slug: project.slug }}>
                Ver caso de estudio
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
            <div className="flex items-center gap-1">
              {project.github && (
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </StaggerItem>
  );
}

function ProjectIcon({ title }: { title: string }) {
  const initial = title.charAt(0).toUpperCase();
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card text-4xl font-bold text-primary shadow-sm">
      {initial}
    </div>
  );
}
