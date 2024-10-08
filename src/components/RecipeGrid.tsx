import { SimpleGrid, Text } from "@chakra-ui/react";
import { recipes } from "../data";
import RecipeCard, { Recipe } from "./common/RecipeCard";

interface Props {
  filteredRecipes?: Recipe[];
}

const RecipeGrid = ({ filteredRecipes }: Props) => {
  return (
    <>
      {recipes.length === 0 && (
        <Text className="r-semibold">There's no saved recipe yet!</Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4 }}
        spacing={5}
        marginTop={10}
        paddingX={20}
      >
        {filteredRecipes
          ? filteredRecipes.map((recipe, index) => (
              <RecipeCard key={index} variant="simple" recipe={recipe} />
            ))
          : recipes.map((recipe, index) => (
              <RecipeCard key={index} variant="simple" recipe={recipe} />
            ))}
      </SimpleGrid>
    </>
  );
};

export default RecipeGrid;
