import { useContext } from "react";
import { RecipeTwistContext } from "../contexts/contexts";
import { useTwistRecipe } from "../hooks/useTwistRecipe";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { TrimmedData } from "../contexts/MixProvider";
import Buttons from "./common/Button";

interface DataExample {
  id: number;
  name: string;
  description: string;
  addedIngredients: string[];
  process: string[];
  time: string;
  categories: string[];
}
interface Props {
  twistedRecipes: DataExample | undefined;
  setTwistedRecipes: ([...DataExample]) => void;
}

const MixResult = () => {
  const { twistedRecipes, setTwistedRecipes } =
    useContext<Props>(RecipeTwistContext);
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
          <div className="px-10 mb-12 r-regular flex flex-col gap-4 max-w-[75rem]">
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
            <Buttons
              className="self-end"
              variant="large"
              onClick={() => handleAdd(trimmedData)}
            >
              Add this to my recipe
            </Buttons>
          </div>
        )}
      </Box>
    </>
  );
};

export default MixResult;
