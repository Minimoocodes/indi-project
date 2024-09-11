import { useContext } from "react";
import { RecipeTwistContext } from "../consts/contexts";
import { TrimmedData, useTwistRecipe } from "../hooks/useTwistRecipe";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";

const MixResult = () => {
  const { twistedRecipes, setTwistedRecipes } = useContext(RecipeTwistContext);
  const { trimmedData } = useTwistRecipe();

  const handleAdd = (data: TrimmedData) => {
    setTwistedRecipes([...twistedRecipes, data]);

    localStorage.setItem("savedRecipes", twistedRecipes);
  };

  console.log("twisted recipes are", twistedRecipes);

  return (
    <>
      <Box padding="3" className="flex justify-center">
        {trimmedData && (
          <div className="pb-12 r-regular flex flex-col gap-4 max-w-[75rem]">
            <Text className="r-semibold text-lg text-center md:text-2xl">
              {trimmedData?.name}
            </Text>
            <Text className="text-lg md:text-xl">
              {trimmedData?.description}
            </Text>
            <HStack className="text-lg md:text-xl">
              <Text>Only</Text>
              {trimmedData?.addedIngredients.map((i, index) => (
                <HStack spacing={1} key={index}>
                  <Text className="underline">{i},</Text>
                </HStack>
              ))}
              <Text>is/are added to your original recipe.</Text>
            </HStack>
            <Stack className="text-md md:text-lg">
              <Text className="r-semibold">Ingredients</Text>
              {trimmedData?.ingredients?.map((i) => (
                <Text>{i}</Text>
              ))}
            </Stack>
            <Stack className="text-md md:text-lg">
              <Text className="r-semibold">How to make</Text>
              {trimmedData?.process?.map((p) => (
                <Text>{p}</Text>
              ))}
            </Stack>
            <Button
              className="w-[12rem] self-end"
              onClick={() => handleAdd(trimmedData)}
            >
              Add this to my recipe
            </Button>
          </div>
        )}
      </Box>
    </>
  );
};

export default MixResult;
