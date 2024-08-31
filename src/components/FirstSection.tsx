import { Button, Text } from "@chakra-ui/react";
import pancakes from "../assets/pancakes.jpg";
import { Link } from "react-router-dom";

const FirstSection = () => {
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
      <Link to="/what-to-eat">
        <Button colorScheme="whiteAlpha" className="r-semibold">
          Roll the dice now
        </Button>
      </Link>
    </div>
  );
};

export default FirstSection;
