import { Button, Text } from "@chakra-ui/react";
import pancakes from "../assets/pancakes.jpg";
import { useContext } from "react";
import { LandingPageContext } from "../consts/contexts";

const FirstSection = () => {
  const { secondSection } = useContext<HTMLDivElement>(LandingPageContext);
  return (
    <div
      className="bg-cover bg-no-repeat flex flex-col items-center justify-center gap-4"
      style={{
        backgroundImage: `url(${pancakes})`,
        height: "92vh",
      }}
    >
      <Text fontSize="3xl" color="white" className="r-semibold">
        What delicious thing to cook now
      </Text>
      <Button
        onClick={() =>
          secondSection.current.scrollIntoView({ behavior: "smooth" })
        }
        colorScheme="whiteAlpha"
        className="r-semibold"
      >
        Roll the dice now
      </Button>
    </div>
  );
};

export default FirstSection;
