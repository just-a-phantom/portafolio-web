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
    role: "Desarrolladora de Datos y Backend (Proyecto Grupal)",
    summary:
      "Plataforma híbrida de seguridad laboral para prevención y reporte confidencial de incidencias (Ley Karin), con ingesta masiva y dashboards en tiempo real.",
    description:
      "Sentinel es una plataforma híbrida (móvil y web) orientada al monitoreo de seguridad y prevención de acoso laboral bajo el marco de la Ley Karin. Incluye un módulo backend serverless para la gestión masiva de datos y un portal de administración para el análisis de evidencias y generación de informes.",
    problem:
      "Las organizaciones requieren canales seguros y confidenciales para la carga e identificación de incidencias laborales, con trazabilidad visual para la toma de decisiones.",
    objectives: [
      "Desarrollar el módulo backend para la carga masiva y segura de datos de usuarios e incidencias.",
      "Diseñar dashboards interactivos y el sistema de informes visuales para la gestión de la plataforma.",
      "Conectar la ingesta de la app móvil con la plataforma administrativa web.",
    ],
    architecture: [
      "Aplicación Móvil de usuarios (captura de evidencias)",
      "Google Cloud Functions (backend serverless para carga masiva)",
      "Base de Datos en Firebase",
      "Dashboard Web Administrativo en React",
    ],
    technologies: ["React", "Google Cloud Functions", "Firebase", "Tailwind CSS", "TypeScript"],
    solution:
      "Desarrollo íntegro del módulo backend de carga masiva en Google Cloud Functions y diseño de tableros gráficos interactivos en React para visualización de métricas e informes.",
    results: [
      "Módulo de procesamiento e ingesta masiva de usuarios e incidencias implementado.",
      "Dashboards interactivos operativos para el monitoreo visual del estado de la plataforma.",
    ],
    lessons: [
      "El manejo de información confidencial requiere arquitecturas desacopladas y serverless.",
      "Los dashboards ejecutivos deben estructurar datos complejos en vistas simples e intuitivas.",
    ],
  },
  {
    slug: "lilium-app",
    title: "LiliumApp",
    category: "Móvil",
    role: "Desarrolladora Móvil (Proyecto Grupal)",
    summary:
      "Aplicación móvil camuflada de prevención de acoso escolar con interfaz dual de seguimiento de hábitos y monitoreo de hardware nativo.",
    description:
      "LiliumApp es una aplicación móvil diseñada para prevenir y alertar situaciones de acoso escolar. Se enmascara bajo una interfaz inocua de seguimiento de hábitos y ejecuta procesos en segundo plano para analizar sensores físicos (micrófono y acelerómetro), enviando notificaciones de emergencia automatizadas.",
    problem:
      "Las víctimas de acoso escolar temen utilizar aplicaciones visibles de emergencia por el riesgo de ser descubiertas por sus agresores.",
    objectives: [
      "Diseñar una interfaz dual camuflada (tracker de hábitos) para resguardar la privacidad del estudiante.",
      "Programar la lógica en segundo plano para el monitoreo de hardware nativo (micrófono y acelerómetro).",
      "Automatizar la transmisión de alertas en tiempo real ante aumentos anómalos de decibeles o movimiento.",
    ],
    architecture: [
      "Interfaz Móvil Dual (Flutter / Dart)",
      "Servicios nativos en segundo plano (análisis de micrófono y acelerómetro)",
      "Base de Datos / Autenticación en Firebase",
      "Integración de alertas con API de mensajería (WhatsApp)",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Sensores Nativos", "API WhatsApp"],
    solution:
      "Programación de listeners en segundo plano para procesar señales del micrófono (decibeles) y movimientos acelerados, conectados a una interfaz discreta de hábitos.",
    results: [
      "Aplicación móvil funcional con lógica de monitoreo nativo en segundo plano.",
      "Flujo de alertas automatizado para notificar a contactos de confianza.",
    ],
    lessons: [
      "El consumo de hardware en segundo plano exige una gestión estricta del uso de batería.",
      "El diseño enfocado en la seguridad del usuario debe primar sobre la estética convencional.",
    ],
  },
  {
    slug: "urban-sensor",
    title: "Urban Sensor",
    category: "Web",
    role: "Desarrolladora web",
    summary:
      "Plataforma web para la recepción, gestión y seguimiento de incidencias urbanas y requerimientos municipales.",
    description:
      "Urban Sensor es un sistema enfocado en la gestión de incidencias municipales. Permite registrar, categorizar y realizar el seguimiento de reportes urbanos, facilitando la administración centralizada de solicitudes y la organización de la información.",
    problem:
      "La dispersión de reportes y la falta de canales digitalizados dificultan la trazabilidad y la respuesta eficiente ante requerimientos en el entorno municipal.",
    objectives: [
      "Centralizar el registro y categorización de incidencias urbanas.",
      "Proporcionar una interfaz intuitiva para el seguimiento de solicitudes.",
      "Facilitar la gestión de datos e informes de estado para los administradores.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API REST"],
    solution:
      "Diseño e implementación de una plataforma web interactiva con formularios de reporte, filtros dinámicos por estado y paneles de visualización para la gestión municipal.",
    results: [
      "Estructura modular para la gestión centralizada de requerimientos.",
      "Interfaz responsive para la visualización y filtrado de reportes.",
    ],
    lessons: [
      "La categorización lógica de datos es indispensable para agilizar la gestión de incidencias.",
      "Diseñar con foco en la usabilidad facilita la adopción de herramientas digitales en el ámbito público.",
    ],
  },
];
