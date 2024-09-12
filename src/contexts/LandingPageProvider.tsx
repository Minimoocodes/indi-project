import { createContext, ReactNode, useState } from "react";
import { Recipe } from "../components/common/RecipeCard";

interface Props {
  children: ReactNode;
}

export const TwistContext = createContext({
  pickedRecipe: {},
  setPickedRecipe: (recipe: Recipe) => {},
  twistedRecipes: {},
  setTwistedRecipes: (r: Recipe) => {},
});

export const TwistContextProvider = ({ children }: Props) => {
  const [pickedRecipe, setPickedRecipe] = useState<Recipe | undefined>(
    undefined
  );
  const [twistedRecipes, setTwistedRecipes] = useState<TrimmedData[]>([]);

  const value = {
    pickedRecipe,
    setPickedRecipe,
    twistedRecipes,
    setTwistedRecipes,
  };

  return (
    <TwistContext.Provider value={value}>{children}</TwistContext.Provider>
  );
};
