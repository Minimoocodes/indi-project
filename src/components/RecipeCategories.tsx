import { Text } from "@chakra-ui/react";
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

  const container = "r-semibold px-10 mb-10 text-lg";
  const innerContainer = "mt-10 flex items-center gap-2 overflow-x-scroll";
  const imgContainer = "w-[200px]";
  return (
    <div className={container}>
      <div className={innerContainer}>
        {koreanRecipes.map((recipe) => (
          <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
            <div className={imgContainer}>
              <RecipeCard key={recipe.id} recipe={recipe} variant="simple" />
            </div>
          </Link>
        ))}
      </div>
      <Text>Korean</Text>
      <div className={container}>
        <div className={innerContainer}>
          {italianRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
              <div className={imgContainer}>
                <RecipeCard recipe={recipe} variant="simple" />
              </div>
            </Link>
          ))}
        </div>
        <Text>Italian</Text>
      </div>
      <div className={container}>
        <div className={innerContainer}>
          {snackRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/my-recipes/${recipe.id}`}>
              <div className={imgContainer}>
                <RecipeCard recipe={recipe} variant="simple" />
              </div>
            </Link>
          ))}
        </div>
        <Text>Snack</Text>
      </div>
    </div>
  );
};

export default RecipeCategories;
