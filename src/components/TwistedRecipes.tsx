import { useContext, useEffect, useState } from "react";
import { RecipeTwistContext } from "../contexts/contexts";
import { TrimmedData } from "../hooks/useTwistRecipe";
import { Text } from "@chakra-ui/react";

const TwistedRecipes = () => {
  // const { twistedRecipes } = useContext<TrimmedData | undefined>(
  //   RecipeTwistContext
  // );
  const [savedRecipes, setSavedRecipes] = useState<TrimmedData | undefined>([]);

  useEffect(() => {
    const allSavedRecipes = localStorage.getItem("savedRecipes");
    if (allSavedRecipes) {
      setSavedRecipes(JSON.parse(allSavedRecipes));
    }
  }, []);

  console.log("it better work", savedRecipes);

  return (
    <div>
      {!savedRecipes ? (
        <Text>'There's no twisted Recipes yet!</Text>
      ) : (
        <>
          <ul>
            {savedRecipes.map((r) => (
              <li>{r.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TwistedRecipes;
