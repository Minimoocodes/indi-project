import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Buttons from "./Button";

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
  recipe: Recipe | undefined;
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
      <Box key={recipe?.id}>
        <Image src={recipe?.photo} />
        <Stack justify="center" align="center">
          <HStack justify="center">
            <Text className="r-semibold text-lg text-center mt-3 md:text-xl">
              {recipe?.name}
            </Text>
          </HStack>
          <Link key={recipe?.id} to={`/my-recipes/${recipe?.id}`}>
            <Button className="self-center">View Recipe</Button>
          </Link>
        </Stack>
      </Box>
    );
  };

  const renderSimpleVariant = () => {
    return (
      <Box
        className="p-2 relative inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"
        onClick={onClick}
      >
        <Image className="block" src={recipe?.photo} objectFit={"contain"} />
        <Center className="flex flex-col r-semibold w-full h-full absolute top-0 left-0 text-white bg-stone-600/50 opacity-0 hover:opacity-100 duration-500 md:text-xl">
          <Text className="text-center">{recipe?.name}</Text>
          <Link to={`/my-recipes/${recipe?.id}`}>
            <Button marginTop={2} size="sm" variant="outline">
              View Details
            </Button>
          </Link>
        </Center>
      </Box>
    );
  };

  const renderRandomVariant = () => {
    return (
      <Box
        maxW="lg"
        objectFit="cover"
        className="r-regular shadow-xl rounded-md p-5 max-h-[30rem] shadow-stone-300 "
      >
        <Stack className="flex flex-col justify-center items-center gap-5 ">
          <Image src={recipe?.photo} boxSize="20rem" objectFit="contain" />
          <Text className="text-center r-bold text-lg">{recipe?.name}</Text>
          <HStack>
            <Text className="border-r-2 px-2"> {recipe?.time}</Text>
            <Text className="border-r-2 px-2">
              {recipe?.ingredients?.length} ingredients
            </Text>
            <Text>{recipe?.categories[0]}</Text>
          </HStack>
          <HStack className="flex justify-center gap-3 r-semibold">
            <Link to={`/my-recipes/${recipe?.id}`}>
              <Buttons variant="medium">View Recipe</Buttons>
            </Link>
            <Buttons variant="medium" onClick={showRandomRecipe}>
              Show Another One
            </Buttons>
          </HStack>
        </Stack>
      </Box>
    );
  };

  return renderVariants();
};

export default RecipeCard;
