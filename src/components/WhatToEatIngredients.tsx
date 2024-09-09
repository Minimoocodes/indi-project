import { Text, Box, Input, Button, HStack } from "@chakra-ui/react";
import Frige from "../assets/Frige.jpg";
import Empty from "../assets/Empty.jpg";
import { useMashisso } from "../hooks/useMashisso";
import { useContext } from "react";
import { WhatToEatContext } from "../consts/contexts";

const WhatToEatIngredients = () => {
  const { trimmedData, handleInput, ingredients, getData } = useMashisso();
  const { IngreRecipeRef } = useContext(WhatToEatContext);

  const columns1 =
    "r-semibold p-3 flex flex-col justify-center items-center h-[100vh]";
  const columns2 =
    "grid grid-cols-2 justify-center items-center r-semibold gap-8 p-6 h-[100vh]";

  return (
    <div
      ref={IngreRecipeRef}
      className={trimmedData ? columns2 : columns1}
      style={{ backgroundImage: `url(${Empty})`, backgroundSize: "cover" }}
    >
      <Box className="backdrop-blur-sm bg-white/10 p-8 border-none rounded-md">
        <Text className="mb-3 text-lg md:text-xl">
          I have only these in my fridge.. what can I cook?
        </Text>
        <HStack>
          <Input onChange={handleInput} value={ingredients} />
          <Button size="md" onClick={getData}>
            Ask MASHISSO
          </Button>
        </HStack>
      </Box>
      {trimmedData && (
        <Box className="flex flex-col gap-2 backdrop-blur-sm bg-white/10 p-6 border-none rounded-md">
          <Text className="r-bold md:text-xl">{trimmedData.name}</Text>
          <Text className="md:text-lg">{trimmedData.description}</Text>
          <Text className="md:text-lg">Ingredients</Text>
          {trimmedData.ingredients.map((i, index) => (
            <Text key={index} className="r-regular">
              {i}
            </Text>
          ))}
          <Text className="md:text-lg">How to cook</Text>
          {trimmedData.process.map((p, index) => (
            <Text key={index} className="r-regular">
              {p}
            </Text>
          ))}
        </Box>
      )}
    </div>
  );
};

export default WhatToEatIngredients;
