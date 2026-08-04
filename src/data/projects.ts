export interface Project {
  slug: string;
  title: string;
  category: "IA" | "Móvil" | "Web" | "Full Stack";
  role: string;
  summary: string;
  description: string;
  problem?: string;
  objectives?: string[];
  research?: string;
  architecture?: string[];
  technologies: string[];
  challenges?: string;
  solution?: string;
  results?: string[];
  lessons?: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: "aigc",
    title: "AIGC — Proyecto de Título",
    category: "IA",
    role: "Investigadora y desarrolladora",
    summary:
      "Sistema de generación asistida por inteligencia artificial orientado a resolver un problema específico de dominio mediante modelos generativos.",
    description:
      "AIGC es mi Proyecto de Título: una investigación aplicada que explora cómo los modelos generativos pueden resolver necesidades concretas dentro de un dominio técnico definido. El trabajo abarca desde la recolección y curación de datos hasta el entrenamiento, evaluación y despliegue de un modelo funcional.",
    problem:
      "Generar contenido o respuestas de calidad en un dominio especializado requiere modelos adaptados y datos representativos, algo difícil de lograr con soluciones genéricas.",
    objectives: [
      "Diseñar una arquitectura generativa adecuada al dominio del problema.",
      "Construir un pipeline de datos reproducible y escalable.",
      "Evaluar el modelo con métricas técnicas y validación humana.",
    ],
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "Docker"],
    challenges:
      "Entrenar modelos generativos con recursos limitados y asegurar que las salidas sean coherentes, útiles y alineadas con el dominio.",
    solution:
      "Pipeline modular de datos, fine-tuning selectivo y evaluación continua con métricas automáticas y revisión humana.",
    results: [
      "Modelo ajustado al dominio del proyecto.",
      "Pipeline reproducible documentado.",
      "Base para futura publicación o producto.",
    ],
    lessons: [
      "La calidad del dataset importa más que el tamaño del modelo.",
      "La evaluación humana es indispensable en sistemas generativos.",
    ],
  },
  {
    slug: "sentinel",
    title: "Sentinel",
    category: "Full Stack",
    role: "Desarrolladora full stack",
    summary:
      "Plataforma de monitoreo y alertas para seguridad o continuidad operativa, con backend robusto y frontend reactivo.",
    description:
      "Sentinel es una plataforma web de monitoreo que centraliza datos, detecta anomalías y notifica a los responsables en tiempo real. Fue diseñada para ser escalable, segura y fácil de operar.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets"],
    problem:
      "La falta de visibilidad centralizada dificulta reaccionar ante incidentes de seguridad o fallas operativas.",
    objectives: [
      "Centralizar eventos críticos en un dashboard en tiempo real.",
      "Automatizar alertas por umbrales configurables.",
      "Mantener trazabilidad de incidentes.",
    ],
    architecture: ["Frontend React", "API REST en Node.js", "Base de datos PostgreSQL", "WebSockets para alertas"],
    solution:
      "Arquitectura en capas con autenticación, roles, notificaciones en tiempo real y persistencia de eventos.",
    results: ["Dashboard operativo en tiempo real.", "Sistema de alertas configurables.", "Historial completo de incidentes."],
    lessons: [
      "Diseñar para observabilidad desde el día uno.",
      "Las alertas útiles necesitan contexto, no solo datos.",
    ],
  },
  {
    slug: "lilium-app",
    title: "Lilium App",
    category: "Móvil",
    role: "Desarrolladora mobile",
    summary:
      "Aplicación móvil centrada en la experiencia de usuario, con flujos claros, diseño accesible y sincronización de datos.",
    description:
      "Lilium App es una aplicación móvil pensada para resolver una necesidad cotidiana con una interfaz limpia y un flujo intuitivo. El proyecto prioriza la usabilidad, el rendimiento y la sincronización confiable de datos.",
    technologies: ["React Native", "TypeScript", "Firebase", "Expo"],
    problem:
      "Las apps existentes en el espacio no ofrecían una experiencia fluida y accesible para el público objetivo.",
    objectives: [
      "Diseñar una interfaz móvil clara y accesible.",
      "Garantizar sincronización offline/online.",
      "Iterar rápido con feedback de usuarios reales.",
    ],
    solution:
      "Aplicación React Native con navegación declarativa, estado local optimizado y sincronización en segundo plano.",
    results: ["Flujos de usuario validados.", "Sincronización estable.", "Base lista para escalar funcionalidades."],
    lessons: [
      "Prototipar primero ahorra desarrollo después.",
      "El rendimiento percibido es tan importante como el real.",
    ],
  },
  {
    slug: "urban-sensor",
    title: "Urban Sensor",
    category: "Web",
    role: "Desarrolladora web",
    summary:
      "Dashboard web para visualización de datos ambientales urbanos, con mapas, gráficos y filtros dinámicos.",
    description:
      "Urban Sensor es una plataforma web que recopila y visualiza datos ambientales de sensores distribuidos en la ciudad. Permite explorar tendencias, comparar zonas y exportar informes.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Mapbox"],
    problem:
      "Los datos ambientales dispersos dificultan tomar decisiones urbanas informadas.",
    objectives: [
      "Visualizar datos de sensores en tiempo real.",
      "Permitir comparar zonas y períodos.",
      "Generar informes exportables.",
    ],
    architecture: ["Frontend Next.js", "API de sensores", "Visualización con Chart.js y Mapbox"],
    solution:
      "Dashboard interactivo con filtros, gráficos y mapas, consumiendo una API de sensores normalizada.",
    results: [
      "Visualización clara de múltiples variables ambientales.",
      "Exportación de informes en PDF/CSV.",
      "Interfaz responsive y accesible.",
    ],
    lessons: [
      "Los datos sin contexto no generan insights.",
      "La accesibilidad mejora la usabilidad para todos.",
    ],
  },
];
