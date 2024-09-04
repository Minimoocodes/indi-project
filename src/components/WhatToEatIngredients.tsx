import { Text, Box, Input, Button, HStack } from "@chakra-ui/react";
import Frige from "../assets/Frige.jpg";
import Empty from "../assets/Empty.jpg";
import { useMashisso } from "../hooks/useMashisso";

const WhatToEatIngredients = () => {
  const { trimmedData, handleInput, ingredients, getData } = useMashisso();

  return (
    <div
      className="r-semibold p-3 flex flex-col justify-center items-center h-[100vh] "
      style={{ backgroundImage: `url(${Empty})`, backgroundSize: "cover" }}
    >
      <Box className="backdrop-blur-sm bg-white/30 p-10 border-none rounded-md">
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
        <Box>
          <Text>{trimmedData.name}</Text>
          <Text>{trimmedData.description}</Text>
          <Text>Ingredients</Text>
          {trimmedData.ingredients.map((i, index) => (
            <Text key={index} className="r-regular">
              {i}
            </Text>
          ))}
          <Text>How to cook</Text>
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
