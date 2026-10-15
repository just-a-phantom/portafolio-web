export interface Project {
  slug: string;
  title: string;
  category: "IA" | "Móvil" | "Web" | "Full Stack" | "IoT" | "Data Science";
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
    slug: "hydrotrack-c",
    title: "HydroTrack-C",
    category: "IoT",
    role: "Arquitecta de Software e IoT (En Desarrollo)",
    summary:
      "Proyecto de Título en desarrollo: Sistema de telemetría y monitoreo hídrico basado en redes LoRaWAN y plataforma web para la captura y visualización de datos ambientales",
    description:
      "HydroTrack-C es mi Proyecto de Título que estoy desarrollando actualmente: un sistema de monitoreo hídrico que abarca desde la recolección de datos en terreno mediante sensores y redes de bajo consumo LoraWAN, hasta la conceptualización de una plataforma web para la visualización interactiva de métricas ambientales. El proyecto busca optimizar la gestión de recursos hídricos en zonas remotas mediante la integración de hardware, software y conectividad eficiente.",
    problem:
      "La falta de monitoreo hídrico automatizado y en tiempo real en zonas remotas dificulta la gestión eficiente y preventiva de los recursos hídricos.",
    objectives: [
      "Diseñar la arquitectura de software y la topología de red LoRaWAN del sistema.",
      "Especificar e integrar componentes de hardware (microcontroladores Arduino y sensores).",
      "Definir los requerimientos de la plataforma web para la visualización en tiempo real y gestión de datos hídricos.",
    ],
    architecture: [
      "Nodos Sensóricos (Arduino + Sensores hídricos)",
      "Red de transporte LoRaWAN",
      "Servidor de ingesta y procesamiento de datos",
      "Plataforma Web / Dashboard de visualización",
    ],
    technologies: ["IoT", "LoRaWAN", "Arduino", "C/C++", "Sensórica", "Web Dashboard", "API REST"],
    challenges:
      "Asegurar la trazabilidad completa del dato  en zonas con infraestructura limitada: desde la captura en hardware de bajo consumo hasta su representación gráfica en la interfaz web.",
    solution:
      "Diseño de una red LoRaWAN acoplada a una arquitectura de software modular para la recolección, transmisión y gestión eficiente de métricas hídricas.",
    results: [
      "Fase actual: Diseño de arquitectura end-to-end y topología de red en proceso.",
      "Especificaciones de hardware y requerimientos del portal web definidos.",
      "Base técnica en preparación para la integración del prototipo físico y la interfaz web.",
    ],
    lessons: [
      "En sistemas IoT, la eficiencia energética y la topología de red son tan críticas como el software.",
      "La modularidad en la arquitectura facilita la integración de múltiples tipos de sensores.",
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
    technologies: ["React", "Node.js", "PostgreSQL", "WebSockets"],
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
    technologies: ["Flutter", "Dart", "Firebase"],
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
