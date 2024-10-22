import { useRef } from "react";
import { useRandom } from "../hooks/useRandom";
import { WhatToEatContext } from "../contexts/contexts";
import WhatToEatBanner from "../components/WhatToEatBanner";
import WhatToEatIngredients from "../components/WhatToEatIngredients";
import RecipeCard from "../components/common/RecipeCard";
import { Stack, Text } from "@chakra-ui/react";

const WhatToEat = () => {
  const { randomRecipe, showRandomRecipe } = useRandom();
  const IngreRecipeRef = useRef<HTMLDivElement>(null);
  const RandomRecipeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <WhatToEatContext.Provider value={{ IngreRecipeRef, RandomRecipeRef }}>
        <WhatToEatBanner />
        <WhatToEatIngredients />
        <div
          ref={RandomRecipeRef}
          className="h-[92vh] flex justify-center items-center gap-10"
        >
          <Stack className="r-semibold text-5xl md:text-7xl text-[#7d6e60]">
            <Text>HOW</Text>
            <Text>ABOUT</Text>
            <Text>THIS?</Text>
          </Stack>
          <RecipeCard
            recipe={randomRecipe}
            variant="random"
            showRandomRecipe={showRandomRecipe}
          />
        </div>
      </WhatToEatContext.Provider>
    </>
  );
};

export default WhatToEat;
