import Pasta from "../assets/Pasta.jpg";
import Ingredients from "../assets/Ingredients.jpg";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { WhatToEatContext } from "../contexts/contexts";

const WhatToEatBanner = () => {
  const { IngreRecipeRef, RandomRecipeRef } = useContext(WhatToEatContext) as {
    IngreRecipeRef: React.RefObject<HTMLDivElement>;
    RandomRecipeRef: React.RefObject<HTMLDivElement>;
  };
  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2 }} height="92vh">
        <Box
          style={{
            backgroundImage: `url(${Ingredients})`,
            backgroundSize: "cover",
          }}
          className="flex justify-center items-center"
        >
          <Button
            size="lg"
            colorScheme="blackAlpha"
            onClick={() =>
              IngreRecipeRef.current &&
              IngreRecipeRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            What can I cook with only these..
          </Button>
        </Box>
        <Box
          style={{ backgroundImage: `url(${Pasta})`, backgroundSize: "cover" }}
          className="flex justify-center items-center"
        >
          <Button
            onClick={() =>
              RandomRecipeRef.current &&
              RandomRecipeRef.current.scrollIntoView({ behavior: "smooth" })
            }
            size="lg"
            colorScheme="blackAlpha"
          >
            A random one from my recipes{" "}
          </Button>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default WhatToEatBanner;
