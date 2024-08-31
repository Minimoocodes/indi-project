import { SimpleGrid, Text } from "@chakra-ui/react";
import { recipes } from "../data";
import RecipeCard from "./common/RecipeCard";
import { Link } from "react-router-dom";

const RecipeCategories = () => {
  const koreanRecipes = recipes.filter((recipe) =>
    recipe.categories.includes("Korean")
  );

  const italianRecipes = recipes.filter((recipe) =>
    recipe.categories.includes("Italian")
  );

  const snackRecipes = recipes.filter((recipe) =>
    recipe.categories.includes("Snack")
  );

  return (
    <div className="r-semibold px-20 mb-10">
      <div className="mt-10">
        <SimpleGrid columns={{ sm: 3, md: 4, lg: 5 }} marginTop={10}>
          {koreanRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
              <RecipeCard key={recipe.id} recipe={recipe} variant="simple" />
            </Link>
          ))}
        </SimpleGrid>
        <Text>Korean</Text>
      </div>
      <div>
        <SimpleGrid columns={{ sm: 3, md: 4, lg: 5 }} marginTop={10}>
          {italianRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
              <RecipeCard recipe={recipe} variant="simple" />
            </Link>
          ))}
        </SimpleGrid>
        <Text>Italian</Text>
      </div>
      <div>
        <SimpleGrid columns={{ sm: 3, md: 4, lg: 5 }} marginTop={10}>
          {snackRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
              <RecipeCard recipe={recipe} variant="simple" />
            </Link>
          ))}
        </SimpleGrid>
        <Text>Snack</Text>
      </div>
    </div>
  );
};

export default RecipeCategories;
