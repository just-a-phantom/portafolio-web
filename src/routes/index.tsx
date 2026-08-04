import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/hero";
import { Approach } from "../components/approach";
import { Projects } from "../components/projects";
import { Technologies } from "../components/technologies";
import { Currently } from "../components/currently";
import { Trajectory } from "../components/trajectory";
import { Education } from "../components/education";
import { Certifications } from "../components/certifications";
import { BlogPreview } from "../components/blog-preview";
import { Contact } from "../components/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathaly Torres Romero — Ingeniera Civil Informática" },
      {
        name: "description",
        content:
          "Portafolio de Nathaly Torres Romero, Ingeniera Civil Informática (EC). Desarrollo soluciones inteligentes combinando IA, aplicaciones móviles e ingeniería de software.",
      },
      { property: "og:title", content: "Nathaly Torres Romero — Ingeniera Civil Informática" },
      {
        property: "og:description",
        content:
          "Desarrollo soluciones inteligentes combinando IA, aplicaciones móviles e ingeniería de software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Approach />
      <Projects />
      <Technologies />
      <Currently />
      <Trajectory />
      <Education />
      <Certifications />
      <BlogPreview />
      <Contact />
    </>
  );
}
