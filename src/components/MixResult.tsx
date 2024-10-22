import { useTwistRecipe } from "../hooks/useTwistRecipe";
import { useAddTwist } from "../hooks/useAddTwist";
import { Center, HStack, Spinner, Stack, Text } from "@chakra-ui/react";
import { TrimmedData } from "../contexts/MixProvider";
import Buttons from "./common/Button";
import { useEffect, useRef } from "react";

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
  const { twistedRecipes, setTwistedRecipes } = useAddTwist<Props>();
  const { trimmedData, isLoading } = useTwistRecipe();
  const resultRef = useRef<HTMLDivElement>();

  const handleAdd = (data: TrimmedData) => {
    setTwistedRecipes([...twistedRecipes, data]);

    localStorage.setItem("savedRecipes", twistedRecipes);
  };

  useEffect(() => {
    if (!isLoading && trimmedData && resultRef) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading, trimmedData]);
  // console.log("twisted recipes are", twistedRecipes);

  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner size="lg" color="orange.500" />
        </Center>
      ) : (
        <div ref={resultRef} className="p-3 flex justify-center">
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
                {trimmedData?.ingredients?.map((i, index) => (
                  <Text key={index}>{i}</Text>
                ))}
              </Stack>
              <Stack className="text-md md:text-lg">
                <Text className="r-semibold">How to make</Text>
                {trimmedData?.process?.map((p, index) => (
                  <Text key={index}>{p}</Text>
                ))}
              </Stack>
              <div className="max-w-[250px] self-end">
                <Buttons
                  className="self-end"
                  variant="large"
                  onClick={() => handleAdd(trimmedData)}
                >
                  Add this to my recipe
                </Buttons>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MixResult;
