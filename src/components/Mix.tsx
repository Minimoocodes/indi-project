import { useTwistRecipe } from "../hooks/useTwistRecipe";
import { useAddTwist } from "../hooks/useAddTwist";
import { HStack } from "@chakra-ui/react";
import { PiEqualsBold, PiPlusBold } from "react-icons/pi";
import Buttons from "./common/Button";

const Mix = () => {
  const { getData, chosenRecipe, chosenTwist } = useTwistRecipe();
  const { pickedRecipe } = useAddTwist();

  return (
    <>
      <HStack className="h-[10rem] flex justify-center r-semibold text-lg md:text-xl">
        <div className="border-b-2 rounded-md shadow-md h-[4rem] w-[20rem] text-center p-4">
          {pickedRecipe ? pickedRecipe.name : chosenRecipe?.name}
        </div>
        <PiPlusBold />
        <div className="border-b-2 rounded-md shadow-md h-[4rem] w-[20rem] text-center p-4">
          {chosenTwist}
        </div>
        <PiEqualsBold />
        <Buttons variant="large" onClick={getData}>
          Mix
        </Buttons>
      </HStack>
    </>
  );
};

export default Mix;
