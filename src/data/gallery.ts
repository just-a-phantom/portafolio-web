export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  event: string;
  date: string;
}

export const galleryItems: GalleryItem[] = [
  {
    src: "src/assets/neurofest-2024.jpeg",
    alt: "Nathaly Torres en Neurofest 2024 ajustando un casco de EEG",
    caption: "Ajustando el casco de EEG durante Neurofest 2024.",
    event: "Neurofest 2024",
    date: "Septiembre 2024",
  },
];
