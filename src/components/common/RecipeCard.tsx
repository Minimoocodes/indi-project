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
        <Center>View Recipe</Center>
      </Box>
    );
  };

  const renderSimpleVariant = () => {
    return (
      <Box className="border-l-2 px-2 last:border-x-2 py-2" onClick={onClick}>
        <Image src={recipe.photo} />
      </Box>
    );
  };

  const renderRandomVariant = () => {
    return (
      <Box maxW="lg" className="r-regular">
        <Stack className="flex flex-col justify-center items-center gap-5">
          <Image src={recipe.photo} />
          <Text className="text-center r-bold text-lg">{recipe.name}</Text>
          <HStack>
            <Text className="border-r-2 px-2"> {recipe.time}</Text>
            <Text className="border-r-2 px-2">
              {recipe.ingredients?.length} ingredients
            </Text>
            <Text>{recipe.categories[0]}</Text>
          </HStack>
          <HStack className="flex justify-center gap-3">
            <Button>View Recipe</Button>
            <Button onClick={showRandomRecipe}>Show Another One</Button>
          </HStack>
        </Stack>
      </Box>
    );
  };

  return renderVariants();
};

export default RecipeCard;
