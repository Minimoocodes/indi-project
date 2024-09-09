import { useTwistRecipe } from "../hooks/useTwistRecipe";
import { recipes } from "../data";
import RecipeCard from "../components/common/RecipeCard";
import Mix from "../components/Mix";
import MixResult from "../components/MixResult";
import { Box, Button, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { MixContext } from "../consts/contexts";

const FunTwistPage = () => {
  const {
    handleRecipePick,
    handleTwist,
    chosenRecipe,
    chosenTwist,
    trimmedData,
  } = useTwistRecipe();

  const twist = [
    "Italian",
    "Swedish",
    "French",
    "Vietnamese",
    "Korean",
    "Mexican",
    "Spicy",
    "Mild",
    "Cheese",
    "Search",
  ];

  return (
    <>
      <MixContext.Provider value={{}}>
        <SimpleGrid columns={{ sm: 1, md: 2 }}>
          <GridItem>
            <Text className="r-semibold text-center text-md md:text-2xl mb-3">
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
            <Text className="r-semibold text-center text-md md:text-2xl mb-3">
              Add your twist
            </Text>
            <Box paddingX={5}>
              {twist.map((t, index) => (
                <Button
                  key={index}
                  size="lg"
                  className="m-2"
                  onClick={() => handleTwist(t)}
                >
                  {t}
                </Button>
              ))}
            </Box>
          </GridItem>
        </SimpleGrid>
        <Mix chosenRecipe={chosenRecipe} chosenTwist={chosenTwist} />
        <MixResult trimmedData={trimmedData} />
      </MixContext.Provider>
    </>
  );
};

export default FunTwistPage;
