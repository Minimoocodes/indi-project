import { useContext, useEffect, useRef, useState } from "react";
import { LandingPageContext } from "../consts/contexts";
import RecipeCard from "./common/RecipeCard";
import { recipes } from "../data";
import Buttons from "./common/Button";

const Slider = () => {
  const { secondSection } = useContext<HTMLDivElement>(LandingPageContext);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState<number | null>(null);

  const cardWidth = 260;
  const cardsToShow = 5;
  const middleCardIndex = Math.floor(cardsToShow / 2);

  useEffect(() => {
    const updateCenterIndex = () => {
      if (sliderRef.current) {
        const centerOffset =
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth / 2;
        const cardElements = Array.from(
          sliderRef.current.children
        ) as HTMLElement[];

        let closestIndex = null;
        let minDistance = Infinity;

        cardElements.forEach((card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(cardCenter - centerOffset);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });

        setCenterIndex(closestIndex);
      }
    };

    // Update center index on scroll
    sliderRef.current?.addEventListener("scroll", updateCenterIndex);
    updateCenterIndex(); // Initial calculation

    return () => {
      sliderRef.current?.removeEventListener("scroll", updateCenterIndex);
    };
  }, [sliderRef.current]);

  const goToRandom = () => {
    const randomNum = Math.floor(Math.random() * recipes.length);
    const randomCardId = `card${recipes[randomNum].id}`;
    const element = document.getElementById(randomCardId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div
      ref={secondSection}
      className="h-[92vh] flex flex-col justify-center items-center gap-5"
    >
      <div
        ref={sliderRef}
        className="slider flex gap-5 overflow-hidden max-w-[78rem] scroll-smooth p-6"
      >
        {recipes.map((r, index) => (
          <div
            key={index}
            id={`card${r.id}`}
            className="flex-shrink-0"
            style={{
              width: `${cardWidth}px`,
              transform: `scale(${centerIndex === index ? 1.2 : 0.9})`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <RecipeCard recipe={r} variant="simple" />
          </div>
        ))}
      </div>
      <Buttons variant="large" onClick={goToRandom}>
        SPIN AGAIN
      </Buttons>
    </div>
  );
};

export default Slider;
