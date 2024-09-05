import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { Recipe } from "../pages/WhatToEatPage";
import { useState } from "react";

const RecipeDetail = ({ recipe }: Recipe) => {
  const [instruction, setInstruction] = useState(false);

  const showInstruction = () => {
    setInstruction(true);
  };
  const showIngredients = () => {
    setInstruction(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 gap-5 r-regular md:hidden">
        <ButtonGroup className="r-bold" size="lg" spacing={6}>
          <Button variant="link" className="px-6" onClick={showIngredients}>
            Ingredients
          </Button>
          <Button variant="link" className="px-6" onClick={showInstruction}>
            Instruction
          </Button>
        </ButtonGroup>
        <div className="text-lg md:text-xl">
          <ul className={instruction ? "hidden" : "block"}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-5">
                {ingredient}
              </li>
            ))}
          </ul>
          <ul className={instruction ? "block" : "hidden"}>
            {recipe.process.map((p, index) => (
              <li key={index} className="mb-5">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-8 r-regular hidden md:block">
        <Box mb={8}>
          <Text mb={5} className="r-bold">
            Ingredients
          </Text>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-5">
                {ingredient}
              </li>
            ))}
          </ul>
        </Box>
        <Box mb={8}>
          <Text mb={5} className="r-bold">
            Instruction
          </Text>
          <ul>
            {recipe.process.map((p, index) => (
              <li key={index} className="mb-5">
                {p}
              </li>
            ))}
          </ul>
        </Box>
      </div>
    </>
  );
};

export default RecipeDetail;
