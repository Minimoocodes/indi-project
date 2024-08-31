import { recipes } from "../data";
import RecipeCard from "../components/common/RecipeCard";
import { SimpleGrid } from "@chakra-ui/react";
import RecipeDetail from "../components/RecipeDetail";
import { useState } from "react";

const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * recipes.length);
  return number;
};

const WhatToEat = () => {
  const [randomRecipe, setRandomRecipe] = useState(
    recipes[generateRandomNumber()]
  );

  const showRandomRecipe = () => {
    setRandomRecipe(recipes[generateRandomNumber()]);
  };

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2 }}>
        <div className="h-full flex flex-col justify-center items-center gap-10 p-8">
          <RecipeCard
            variant="random"
            recipe={randomRecipe}
            showRandomRecipe={showRandomRecipe}
          />
        </div>
        <RecipeDetail recipe={randomRecipe} />
      </SimpleGrid>
    </>
  );
};

export default WhatToEat;
