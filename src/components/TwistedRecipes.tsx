import { useContext } from "react";
import { RecipeTwistContext } from "../consts/contexts";
import { TrimmedData } from "../hooks/useTwistRecipe";
import { Text } from "@chakra-ui/react";

const TwistedRecipes = () => {
  const { twistedRecipes } = useContext<TrimmedData | undefined>(
    RecipeTwistContext
  );
  console.log("it better work", twistedRecipes);

  return (
    <div>
      {twistedRecipes.length === 0 ? (
        <Text>'There's no twisted Recipes yet!</Text>
      ) : (
        <>
          <Text>Twisted Recipes will come here</Text>
          {twistedRecipes.map((r) => (
            <h1>{r.name}</h1>
          ))}
        </>
      )}
    </div>
  );
};

export default TwistedRecipes;
