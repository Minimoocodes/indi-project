import { Button, Text } from "@chakra-ui/react";
import pancakes from "../assets/pancakes.jpg";
import { MutableRefObject } from "react";

interface Props {
  secondSection: MutableRefObject<HTMLDivElement | null>;
}

const FirstSection = ({ secondSection }: Props) => {
  const handleClick = () => {
    secondSection.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        onClick={handleClick}
        colorScheme="whiteAlpha"
        className="r-semibold"
      >
        Roll the dice now
      </Button>
    </div>
  );
};

export default FirstSection;
