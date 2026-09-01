export interface Certification {
  name: string;
  issuer: string;
  status: "Completada" | "En progreso";
  date?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "En progreso",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford Online / DeepLearning.AI",
    status: "En progreso",
  },
];
