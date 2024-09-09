import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import Like from "../Like";
import { Link } from "react-router-dom";

export interface Recipe {
  photo: string;
  id?: number;
  name?: string;
  time?: string;
  ingredients?: string[];
  categories?: string[];
}

interface Props {
  variant: string;
  recipe: Recipe;
  showRandomRecipe?: () => void;
  onClick: () => void;
}

const RecipeCard = ({ variant, recipe, showRandomRecipe, onClick }: Props) => {
  const renderVariants = () => {
    switch (variant) {
      case "default":
        return renderDefaultVariant();
      case "simple":
        return renderSimpleVariant();
      case "random":
        return renderRandomVariant();
    }
  };

  const renderDefaultVariant = () => {
    return (
      <Box key={recipe.id}>
        <Image src={recipe.photo} />
        <HStack className="justify-between items-center px-2">
          <Text className="r-semibold text-lg text-center mt-3 md:text-xl">
            {recipe.name}
          </Text>
          <Like onClick={() => console.log("clicked")} />
        </HStack>
        <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
          <Center>View Recipe</Center>
        </Link>
      </Box>
    );
  };

  const renderSimpleVariant = () => {
    return (
      <Box
        className="p-2 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"
        onClick={onClick}
      >
        <Image src={recipe.photo} objectFit={"contain"} />
      </Box>
    );
  };

  const renderRandomVariant = () => {
    return (
      <Box
        maxW="lg"
        objectFit="cover"
        className="r-regular shadow-xl rounded-md p-5 max-h-[30rem] shadow-stone-300 bg-orange-50/50"
      >
        <Stack className="flex flex-col justify-center items-center gap-5 ">
          <Image src={recipe.photo} boxSize="20rem" objectFit="contain" />
          <Text className="text-center r-bold text-lg">{recipe.name}</Text>
          <HStack>
            <Text className="border-r-2 px-2"> {recipe.time}</Text>
            <Text className="border-r-2 px-2">
              {recipe.ingredients?.length} ingredients
            </Text>
            <Text>{recipe.categories[0]}</Text>
          </HStack>
          <HStack className="flex justify-center gap-3">
            <Link to={`/my-recipes/${recipe.id}`}>
              <Button colorScheme="orange">View Recipe</Button>
            </Link>
            <Button colorScheme="orange" onClick={showRandomRecipe}>
              Show Another One
            </Button>
          </HStack>
        </Stack>
      </Box>
    );
  };

  return renderVariants();
};

export default RecipeCard;
