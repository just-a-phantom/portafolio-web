export interface TechGroup {
  name: string;
  items: string[];
}

export const technologyGroups: TechGroup[] = [
  {
    name: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Python"],
  },
  {
    name: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    name: "IA / Datos",
    items: ["PyTorch", "Transformers", "Pandas", "NumPy"],
  },
  {
    name: "Bases de datos",
    items: ["PostgreSQL", "Firebase", "Supabase"],
  },
  {
    name: "Cloud / DevOps",
    items: ["Docker", "GitHub Actions", "Vercel"],
  },
  {
    name: "Herramientas",
    items: ["Git", "GitHub", "Figma", "VS Code", "Jira"],
  },
];
