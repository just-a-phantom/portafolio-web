import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Github, ExternalLink, Layers, Target, Lightbulb, Wrench, CheckCircle2, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { FadeIn } from "../components/motion";

export const Route = createFileRoute("/proyectos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
      throw notFound();
    }
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "Proyecto";
    const summary = loaderData?.summary ?? "Caso de estudio de Nathaly Torres Romero.";
    return {
      meta: [
        { title: `${title} — Nathaly Torres Romero` },
        { name: "description", content: summary },
        { property: "og:title", content: `${title} — Nathaly Torres Romero` },
        { property: "og:description", content: summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();

  return (
    <article className="min-h-screen bg-background pt-28 pb-20">
      <div className="container-tight max-w-4xl">
        <FadeIn>
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3 rounded-full">
            <Link to="/#proyectos">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver a proyectos
            </Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">
              {project.category}
            </Badge>
            <span className="text-sm text-muted-foreground">{project.role}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {project.summary}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <Button asChild variant="outline" className="rounded-full">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Ver en GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button asChild className="rounded-full">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver demo
                </a>
              </Button>
            )}
          </div>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-subtle/50 to-surface"
        >
          <div className="flex h-full items-center justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-border bg-card text-6xl font-bold text-primary shadow-sm">
              {project.title.charAt(0).toUpperCase()}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 space-y-12">
          <DetailBlock icon={BookOpen} title="Descripción">
            <p className="leading-relaxed text-muted-foreground">{project.description}</p>
          </DetailBlock>

          {project.problem && (
            <DetailBlock icon={Target} title="Problema">
              <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
            </DetailBlock>
          )}

          {project.objectives && project.objectives.length > 0 && (
            <DetailBlock icon={CheckCircle2} title="Objetivos">
              <ul className="space-y-2">
                {project.objectives.map((obj: string) => (
                  <li key={obj} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {obj}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <DetailBlock icon={Layers} title="Arquitectura">
              <ul className="space-y-2">
                {project.architecture.map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          <DetailBlock icon={Wrench} title="Tecnologías">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </DetailBlock>

          {project.challenges && (
            <DetailBlock icon={Lightbulb} title="Desafíos">
              <p className="leading-relaxed text-muted-foreground">{project.challenges}</p>
            </DetailBlock>
          )}

          {project.solution && (
            <DetailBlock icon={CheckCircle2} title="Solución">
              <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
            </DetailBlock>
          )}

          {project.results && project.results.length > 0 && (
            <DetailBlock icon={CheckCircle2} title="Resultados">
              <ul className="space-y-2">
                {project.results.map((res: string) => (
                  <li key={res} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {res}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.lessons && project.lessons.length > 0 && (
            <DetailBlock icon={BookOpen} title="Lecciones aprendidas">
              <ul className="space-y-2">
                {project.lessons.map((lesson: string) => (
                  <li key={lesson} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </DetailBlock>
          )}
        </div>
      </div>
    </article>
  );
}

function DetailBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <h2 className="font-heading text-xl font-semibold text-foreground">{title}</h2>
        </div>
        <div className="text-sm leading-relaxed md:text-base">{children}</div>
      </div>
    </FadeIn>
  );
}
