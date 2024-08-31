import { SimpleGrid, Text } from "@chakra-ui/react";
import { recipes } from "../data";
import RecipeCard from "./common/RecipeCard";
import { Link } from "react-router-dom";
import { SearchWordContext } from "../context/SearchWordContext";
import { useContext } from "react";

const RecipeGrid = () => {
  const { searchWord, filteredRecipes } = useContext(SearchWordContext);

  return (
    <>
      {recipes.length === 0 && (
        <Text className="r-semibold">There's no saved recipe yet!</Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4 }}
        spacing={5}
        marginTop={10}
        paddingX={15}
      >
        {searchWord
          ? filteredRecipes.map((recipe, index) => (
              <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
                <RecipeCard key={index} variant="default" recipe={recipe} />
              </Link>
            ))
          : recipes.map((recipe, index) => (
              <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
                <RecipeCard key={index} variant="default" recipe={recipe} />
              </Link>
            ))}
      </SimpleGrid>
    </>
  );
};

export default RecipeGrid;
