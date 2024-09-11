import { useContext } from "react";
import { MixedContext } from "../consts/MixProvider";

export const useTwistRecipe = () => {
  return useContext(MixedContext)
}