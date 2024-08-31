import {
  Box,
  Button,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  Stack,
} from "@chakra-ui/react";
import { recipes } from "../data";
import RecipeCard from "../components/common/RecipeCard";
import { useTwistRecipe } from "../hooks/useTwistRecipe";

const FunTwist = () => {
  const {
    chosenRecipe,
    chosenTwist,
    trimmedData,
    handleRecipePick,
    handleTwist,
    getData,
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
    <SimpleGrid
      templateAreas={`"grid twist"
                      "mix mix"
                      "result result"`}
      gridTemplateColumns={"1fr 1fr"}
      padding={2}
      gap="2"
    >
      <GridItem area={"grid"}>
        <Text className="r-semibold text-center text-md md:text-2xl mb-3">
          Choose your recipe
        </Text>
        <SimpleGrid
          columns={{ sm: 3, md: 4 }}
          padding={5}
          className="border-r-2"
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
      <GridItem className="r-regular" area="twist">
        <Text className="r-semibold text-center text-md md:text-2xl mb-3">
          Add your twist
        </Text>
        <Box padding={5}>
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
      <GridItem area="mix" padding={5}>
        <HStack className="flex justify-center r-regular text-xl md:text-2xl">
          <Text>Adding</Text>
          <span className="r-semibold underline">{chosenTwist}</span>
          <Text>Twist to your </Text>
          <span className="r-semibold underline">{chosenRecipe?.name}</span>
          <Text>recipe </Text>
          <Button onClick={getData}>Mix</Button>
        </HStack>
      </GridItem>
      <GridItem area="result" padding="3">
        {trimmedData && (
          <div className="r-regular flex flex-col gap-2">
            <Text className="r-semibold text-lg text-center md:text-xl">
              {trimmedData?.name}
            </Text>
            <Text>{trimmedData?.description}</Text>
            <HStack>
              <Text>Only</Text>
              {trimmedData?.addedIngredients.map((i, index) => (
                <HStack spacing={1} key={index}>
                  <Text className="underline">{i},</Text>
                </HStack>
              ))}
              <Text>is/are added to your original recipe.</Text>
            </HStack>
            <Stack>
              <Text className="r-semibold">Ingredients</Text>
              {trimmedData?.ingredients?.map((i) => (
                <Text>{i}</Text>
              ))}
            </Stack>
            <Stack>
              <Text className="r-semibold">How to make</Text>
              {trimmedData?.process?.map((p) => (
                <Text>{p}</Text>
              ))}
            </Stack>
          </div>
        )}
      </GridItem>
    </SimpleGrid>
  );
};

export default FunTwist;
