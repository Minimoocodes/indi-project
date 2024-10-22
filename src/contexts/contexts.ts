import { createContext } from "react";

export const RecipeTwistContext = createContext(undefined);

export const WhatToEatContext = createContext<{
  IngreRecipeRef: React.RefObject<HTMLDivElement>;
  RandomRecipeRef: React.RefObject<HTMLDivElement>;
} | undefined>(undefined);


export const MixContext = createContext(undefined)

