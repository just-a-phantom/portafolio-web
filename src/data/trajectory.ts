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
    images: ["/neurofest-2024.jpeg"],
  },
  {
    id: "feria-requinoa",
    title: "Feria Comunal del Arte, Ciencia y Tecnología",
    date: "2024-11-09",
    location: "Requínoa, Chile",
    type: "Feria Tecnológica",
    description:
      "Exposición de proyectos tecnológicos en la Feria Tecnológica de Requínoa, compartiendo avances de investigación y desarrollo con la comunidad local.",
    technologies: ["Divulgación tecnológica", "Prototipos", "Comunidad"],
  },
  {
    id: "robotica-industria-4",
    title: "Asistente de Investigación — Robótica e Industria 4.0",
    date: "2025-03-01",
    location: "Universidad Autónoma de Chile",
    type: "Proyecto",
    description:
      "Apoyo en investigación y desarrollo de prototipos dentro del área de Robótica e Industria 4.0, participando en actividades de divulgación, talleres y ferias tecnológicas.",
    technologies: ["Robótica", "Industria 4.0", "Investigación aplicada"],
  },
  {
    id: "liliumapp",
    title: "LiliumApp — Aplicación Móvil",
    date: "2025-04-01",
    location: "Universidad Autónoma de Chile",
    type: "Proyecto",
    description:
      "Participación en la creación de una aplicación móvil camuflada (Flutter/Dart) con interfaz dual de seguimiento de hábitos para la prevención del acoso escolar. Colaboración en la lógica en segundo plano para el monitoreo de hardware nativo (micrófono y acelerómetro).",
    technologies: ["Flutter", "Dart", "Firebase", "Sensores Nativos"],
  },
  {
    id: "taller-robotica",
    title: "Talleres de Robótica",
    date: "2025-05-01",
    location: "Universidad Autónoma de Chile",
    type: "Taller",
    description:
      "Participación en talleres de robótica orientados a estudiantes y comunidad, promoviendo el aprendizaje práctico de tecnología y programación.",
    technologies: ["Robótica educativa", "Programación", "Divulgación"],
  },
  {
    id: "sentinel",
    title: "Sentinel — Plataforma de Monitoreo",
    date: "2025-08-01",
    location: "Universidad Autónoma de Chile",
    type: "Proyecto",
    description:
      "Desarrollo grupal de una plataforma híbrida de seguridad laboral (Ley Karin). Desarrollo íntegro del módulo backend de carga masiva en Google Cloud Functions y diseño de dashboards interactivos en React.",
    technologies: ["React", "Google Cloud Functions", "Firebase", "Tailwind CSS"],
  },
  {
    id: "hydrotrack-c",
    title: "HydroTrack-C — Proyecto de Título",
    date: "2026-08-01",
    location: "Universidad Autónoma de Chile",
    type: "Proyecto",
    description:
      "Proyecto de título en desarrollo: diseño de arquitectura de software y topología de red LoRaWAN para un sistema de telemetría y monitoreo hídrico con plataforma web de visualización.",
    technologies: ["IoT", "LoRaWAN", "Arduino", "Sensórica", "Web Dashboard"],
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
