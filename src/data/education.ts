export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export const education: EducationItem[] = [
  {
    institution: "Universidad Autónoma de Chile",
    degree: "Ingeniería Civil Informática",
    period: "2021 — Presente",
    details: [
      "Formación en ingeniería de software, inteligencia artificial y sistemas computacionales.",
      "Asistente de investigación en Robótica e Industria 4.0.",
      "Participación en ferias tecnológicas, exposiciones y talleres de divulgación.",
    ],
  },
];

export const courses = [
  "Estructuras de Datos y Algoritmos",
  "Bases de Datos",
  "Ingeniería de Software",
  "Inteligencia Artificial",
  "Sistemas Operativos",
  "Redes de Computadores",
];
