// Helper para importar imágenes dinámicamente
export const getVolunteerImage = (imageName: string) => {
  return new URL(`../assets/images/volunteers/${imageName}`, import.meta.url).href;
}; 