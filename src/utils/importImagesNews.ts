export const getVolunteerImage = (imageName: string) => {
  return new URL(`../assets/images/news/${imageName}`, import.meta.url).href;
}; 