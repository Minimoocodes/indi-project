import { useState } from "react";
import { recipes } from "../data";

const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * recipes.length);
  return number;
};

export const useRandom = () => {
  const [randomRecipe, setRandomRecipe] = useState(
    recipes[generateRandomNumber()]
  );


  const showRandomRecipe = () => {
    setRandomRecipe(recipes[generateRandomNumber()]);
  };


return {randomRecipe, showRandomRecipe}
}