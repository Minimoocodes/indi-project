import { useTwistRecipe } from "../hooks/useTwistRecipe";
import { Button, HStack } from "@chakra-ui/react";
import { PiEqualsBold, PiPlusBold } from "react-icons/pi";
import { Recipe } from "./common/RecipeCard";

const Mix = () => {
  const { getData, chosenRecipe, chosenTwist } = useTwistRecipe();

  return (
    <>
      <HStack className="h-[10rem] mt-2 flex justify-center gap-8 r-regular text-xl md:text-2xl">
        <div className="border rounded-md shadow-md h-[4rem] w-[20rem] text-center p-4">
          {chosenRecipe?.name}
        </div>
        <PiPlusBold />
        <div className="border rounded-md shadow-md h-[4rem] w-[20rem] text-center p-4">
          {chosenTwist}
        </div>
        <PiEqualsBold />
        <Button size="lg" onClick={getData}>
          Mix
        </Button>
      </HStack>
    </>
  );
};

export default Mix;
