import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import RecipeCard from "./common/RecipeCard";
import { recipes } from "../data";
import { useTwistRecipe } from "../hooks/useTwistRecipe";
import Buttons from "./common/Button";

const twist = [
  "Italian",
  "Swedish",
  "French",
  "Vietnamese",
  "Korean",
  "Mexican",
  "Chinese",
  "Vegetarian",
  "Spicy",
  "Mild",
  "Cheese",
  "Search",
];

const MixGrid = () => {
  const { handleRecipePick, handleTwist } = useTwistRecipe();
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }}>
      <GridItem>
        <Text className="r-semibold text-center text-md md:text-xl mb-3">
          Choose your recipe
        </Text>
        <SimpleGrid
          columns={{ sm: 3, lg: 4 }}
          paddingX={5}
          className="border-r-2 overflow-y-scroll"
          height={"67vh"}
        >
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              variant="simple"
              recipe={recipe}
              onClick={() => handleRecipePick(recipe)}
            />
          ))}
        </SimpleGrid>
      </GridItem>
      <GridItem className="r-regular">
        <Text className="r-semibold text-center text-md md:text-xl mb-3">
          Add your twist
        </Text>
        <Box paddingX={5} className="flex gap-4 flex-wrap">
          {twist.map((t, index) => (
            <Buttons key={index} variant="large" onClick={() => handleTwist(t)}>
              {t}
            </Buttons>
          ))}
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default MixGrid;
