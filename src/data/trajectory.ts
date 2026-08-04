export type TrajectoryType =
  | "Proyecto"
  | "Feria Tecnológica"
  | "Exposición"
  | "Taller"
  | "Hackathon"
  | "Práctica";

export interface TrajectoryItem {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  type: TrajectoryType;
  description: string;
  technologies?: string[];
  images?: string[];
  link?: string;
}

export const trajectoryTypes: Record<
  TrajectoryType,
  { label: TrajectoryType; color: string }
> = {
  Proyecto: { label: "Proyecto", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  "Feria Tecnológica": {
    label: "Feria Tecnológica",
    color: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
  Exposición: { label: "Exposición", color: "bg-violet-500/15 text-violet-600 dark:text-violet-400" },
  Taller: { label: "Taller", color: "bg-sky-500/15 text-sky-600 dark:text-sky-400" },
  Hackathon: { label: "Hackathon", color: "bg-rose-500/15 text-rose-600 dark:text-rose-400" },
  Práctica: { label: "Práctica", color: "bg-primary/15 text-primary" },
};

export const trajectoryItems: TrajectoryItem[] = [
  {
    id: "neurofest-2024",
    title: "Neurofest 2024 — Feria del Cerebro",
    date: "2024-09-27",
    endDate: "2024-09-28",
    location: "Plataforma Cultural del Campus Juan Gómez Millas, Universidad de Chile",
    type: "Exposición",
    description:
      "Participación en la primera Feria del Cerebro organizada por la Universidad de Chile y la Universidad de Santiago (Usach), que congregó a 5 mil personas en torno a la neurociencia. La actividad reunió a estudiantes de enseñanza básica y media, profesores, familias, niños, jóvenes, adultos y adultos mayores.",
    technologies: ["Divulgación científica", "Neurociencia", "Tecnología educativa"],
    images: ["/__l5e/assets-v1/cafbf6d3-e360-40d1-8761-6a89eb855158/neurofest-nath.jpeg"],
  },
  {
    id: "aigc-titulo",
    title: "AIGC — Proyecto de Título",
    date: "2025-01-01",
    location: "Universidad Autónoma de Chile",
    type: "Proyecto",
    description:
      "Investigación aplicada en modelos generativos de inteligencia artificial. El proyecto abarca la curación de datos, entrenamiento, evaluación y despliegue de una solución generativa en un dominio técnico específico.",
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "Docker"],
  },
  {
    id: "sentinel",
    title: "Sentinel — Plataforma de Monitoreo",
    date: "2024-06-01",
    location: "Universidad Autónoma de Chile",
    type: "Proyecto",
    description:
      "Desarrollo full stack de una plataforma de monitoreo con alertas en tiempo real, dashboard reactivo y trazabilidad de incidentes.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets"],
  },
  {
    id: "robotica-industria-4",
    title: "Asistente de Investigación — Robótica e Industria 4.0",
    date: "2024-03-01",
    location: "Universidad Autónoma de Chile",
    type: "Proyecto",
    description:
      "Apoyo en investigación y desarrollo de prototipos dentro del área de Robótica e Industria 4.0, participando en actividades de divulgación, talleres y ferias tecnológicas.",
    technologies: ["Robótica", "Industria 4.0", "Investigación aplicada"],
  },
  {
    id: "taller-robotica",
    title: "Talleres de Robótica",
    date: "2024-05-01",
    location: "Universidad Autónoma de Chile",
    type: "Taller",
    description:
      "Participación en talleres de robótica orientados a estudiantes y comunidad, promoviendo el aprendizaje práctico de tecnología y programación.",
    technologies: ["Robótica educativa", "Programación", "Divulgación"],
  },
  {
    id: "feria-requinoa",
    title: "Feria Tecnológica de Requínoa",
    date: "2024-11-01",
    location: "Requínoa, Chile",
    type: "Feria Tecnológica",
    description:
      "Exposición de proyectos tecnológicos en la Feria Tecnológica de Requínoa, compartiendo avances de investigación y desarrollo con la comunidad local.",
    technologies: ["Divulgación tecnológica", "Prototipos", "Comunidad"],
  },
  {
    id: "practica-futuro",
    title: "Práctica Profesional 2027",
    date: "2027-01-01",
    location: "Por definir",
    type: "Práctica",
    description:
      "Buscando una práctica profesional para 2027 donde pueda contribuir a proyectos de ingeniería de software, inteligencia artificial o investigación e innovación.",
    technologies: ["Ingeniería de software", "IA", "Investigación"],
  },
];
