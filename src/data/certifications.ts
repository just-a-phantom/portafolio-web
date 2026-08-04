export interface Certification {
  name: string;
  issuer: string;
  status: "Completada" | "En progreso";
  date?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    name: "Machine Learning Specialization",
    issuer: "Stanford Online / DeepLearning.AI",
    status: "En progreso",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "En progreso",
  },
];
