// Helper para importar imágenes dinámicamente
export const getVolunteerImage = (imageName: string) => {
  return new URL(`../assets/images/volunteers/${imageName}`, import.meta.url).href;
};

// Helper para imágenes de details-programs
export const getDetailProgramImage = (imageName: string) => {
  return new URL(`../assets/images/details-programs/${imageName}`, import.meta.url).href;
}; 