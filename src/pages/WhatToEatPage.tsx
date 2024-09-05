import RecipeCard from "../components/common/RecipeCard";
import RecipeDetail from "../components/RecipeDetail";
import WhatToEatBanner from "../components/WhatToEatBanner";
import { SimpleGrid } from "@chakra-ui/react";
import { useRandom } from "../hooks/useRandom";
import WhatToEatIngredients from "../components/WhatToEatIngredients";
import { WhatToEatContext } from "../consts/contexts";
import { useRef } from "react";

const WhatToEat = () => {
  const { randomRecipe, showRandomRecipe } = useRandom();
  const IngreRecipeRef = useRef();
  const RandomRecipeRef = useRef();

  return (
    <>
      <WhatToEatContext.Provider value={{ IngreRecipeRef, RandomRecipeRef }}>
        <WhatToEatBanner />
        <WhatToEatIngredients ref={IngreRecipeRef} />
        <SimpleGrid columns={{ sm: 1, md: 2 }}>
          <div
            ref={RandomRecipeRef}
            className="h-full flex flex-col justify-center items-center gap-10 p-8"
          >
            <RecipeCard
              variant="random"
              recipe={randomRecipe}
              showRandomRecipe={showRandomRecipe}
            />
          </div>
          <RecipeDetail recipe={randomRecipe} />
        </SimpleGrid>
      </WhatToEatContext.Provider>
    </>
  );
};

export default WhatToEat;
