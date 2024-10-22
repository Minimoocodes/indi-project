import {
  Box,
  Center,
  GridItem,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import RecipeCard from "./common/RecipeCard";
import { recipes } from "../data";
import { useTwistRecipe } from "../hooks/useTwistRecipe";
import Buttons from "./common/Button";
import { useAddTwist } from "../hooks/useAddTwist";
import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

const twist = [
  "Italian",
  "Swedish",
  "French",
  "Vietnamese",
  "Korean",
  "Mexican",
  "Chinese",
  "Vegetarian",
  "Spicy",
  "Mild",
  "Cheese",
];

const MixGrid = () => {
  const { handleRecipePick, handleTwist, setChosenTwist } = useTwistRecipe();
  const { pickedRecipe } = useAddTwist();
  const inputRef = useRef();

  const handleClick = () => {
    const query = inputRef.current.value;
    setChosenTwist(query);
  };

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }}>
      <GridItem>
        {pickedRecipe ? (
          <Text className="r-semibold text-center text-md md:text-xl mb-3">
            Your Choice
          </Text>
        ) : (
          <Text className="r-semibold text-center text-md md:text-xl mb-3">
            Choose your recipe
          </Text>
        )}
        {pickedRecipe ? (
          <Center>
            <Image src={pickedRecipe.photo} height="67vh" />
          </Center>
        ) : (
          <SimpleGrid
            columns={{ sm: 3, lg: 4 }}
            paddingX={5}
            className="border-r-2 overflow-y-scroll"
            height={"67vh"}
          >
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                variant="simple"
                recipe={recipe}
                onClick={() => handleRecipePick(recipe)}
              />
            ))}
          </SimpleGrid>
        )}
      </GridItem>
      <GridItem className="r-regular">
        <Text className="r-semibold text-center text-md md:text-xl mb-3">
          Add your twist
        </Text>
        <Box paddingX={5} className="flex gap-4 flex-wrap">
          {twist.map((t, index) => (
            <Buttons key={index} variant="large" onClick={() => handleTwist(t)}>
              {t}
            </Buttons>
          ))}
          <HStack marginLeft={3}>
            <Input
              variant="flushed"
              placeholder="onion, coriander"
              ref={inputRef}
            />
            <LuSearch
              size={20}
              onClick={() => setChosenTwist(inputRef.current.value)}
            />
          </HStack>
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default MixGrid;
