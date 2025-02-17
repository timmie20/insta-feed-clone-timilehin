import { postImages } from "../data";

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * postImages.length);
  return postImages[randomIndex]?.url;
};
