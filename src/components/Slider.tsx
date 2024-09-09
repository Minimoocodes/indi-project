import { useContext, useRef, useState } from "react";
import { WhatToEatContext } from "../consts/contexts";
import { recipes } from "../data";
import RecipeCard from "./common/RecipeCard";
import { Text } from "@chakra-ui/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;
  const middleCardIndex = Math.floor(cardsToShow / 2);

  const swipeLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsToShow, 0));
  };

  const swipeRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + cardsToShow, recipes.length - cardsToShow)
    );
  };
  // const { center } = useContext(WhatToEatContext);

  const center = useRef();

  return (
    <div
      ref={center}
      className="p-8 h-[92vh] flex flex-col justify-center items-center"
    >
      <Text className="r-semibold text-lg mb-2 md:text-2xl">
        How about this one?
      </Text>
      <div className="flex items-center justify-center">
        <MdChevronLeft
          size={60}
          className="opacity-50 hover:opacity-90"
          onClick={() => swipeLeft(center)}
        />
        <div
          className="flex gap-10 w-[74rem] overflow-hidden p-10 transition-transform duration-300 ease-in-out"
          ref={center}
        >
          {recipes
            .slice(currentIndex, currentIndex + cardsToShow)
            .map((r, index) => (
              <div
                key={r.id}
                className={`transition-transform duration-500 ${
                  index === middleCardIndex ? "scale-110" : "scale-100"
                }`}
              >
                <RecipeCard variant="random" recipe={r} />
              </div>
            ))}
        </div>
        <MdChevronRight
          size={60}
          className="opacity-50 hover:opacity-90"
          onClick={() => swipeRight(center)}
        />
      </div>
    </div>
  );
};

export default Slider;
