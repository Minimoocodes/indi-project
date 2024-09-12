import { useContext } from "react";
import { MixedContext } from "../contexts/MixProvider";

export const useTwistRecipe = () => {
  return useContext(MixedContext)
}