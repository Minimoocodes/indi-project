import RecipeCard from "../components/common/RecipeCard";
import RecipeDetail from "../components/RecipeDetail";
import WhatToEatBanner from "../components/WhatToEatBanner";
import { SimpleGrid } from "@chakra-ui/react";
import { useRandom } from "../hooks/useRandom";
import WhatToEatIngredients from "../components/WhatToEatIngredients";

const WhatToEat = () => {
  const { randomRecipe, showRandomRecipe } = useRandom();

  return (
    <>
      <WhatToEatBanner />
      <WhatToEatIngredients />
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
