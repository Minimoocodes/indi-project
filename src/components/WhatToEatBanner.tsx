import Pasta from "../assets/Pasta.jpg";
import Ingredients from "../assets/Ingredients.jpg";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";

const WhatToEatBanner = () => {
  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2 }} height="90vh">
        <Box
          style={{
            backgroundImage: `url(${Ingredients})`,
            backgroundSize: "cover",
          }}
          className="flex justify-center items-center"
        >
          <Button size="lg" colorScheme="blackAlpha">
            What can I cook with only these..
          </Button>
        </Box>
        <Box
          style={{ backgroundImage: `url(${Pasta})`, backgroundSize: "cover" }}
          className="flex justify-center items-center"
        >
          <Button size="lg" colorScheme="blackAlpha">
            A random one from my recipes{" "}
          </Button>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default WhatToEatBanner;