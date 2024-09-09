import { useRef, useState } from "react";
import RecipeCard from "./common/RecipeCard";
import { recipes } from "../data";
import { Button } from "@chakra-ui/react";

const Roulette = () => {
  const container = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 5;
  const middleCardIndex = Math.floor(cardsToShow / 2);

  return (
    <div
      ref={container}
      className="flex flex-col justify-center items-center h-[92vh]"
    >
      <div className="flex gap-8 items-center">
        {recipes
          .slice(currentIndex, currentIndex + cardsToShow)
          .map((r, index) => (
            <div
              key={r.id}
              className={`slider transition-transform duration-500 ${
                index === middleCardIndex ? "scale-110" : "scale-90"
              }`}
            >
              <RecipeCard variant="default" key={index} recipe={r} />
            </div>
          ))}
      </div>
      <Button colorScheme="orange" size="lg" padding={6} marginTop={"4rem"}>
        SPIN AGAIN
      </Button>
    </div>
  );
};

export default Roulette;
