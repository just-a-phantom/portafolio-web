export interface CurrentStatusItem {
  icon: "book" | "rocket" | "search";
  label: string;
}

export const currentStatus: CurrentStatusItem[] = [
  { icon: "book", label: "Estudiante de Ingeniería Civil Informática" },
  { icon: "rocket", label: "Desarrollando AIGC (Proyecto de Título)" },
  { icon: "search", label: "Buscando práctica profesional para 2027" },
];
