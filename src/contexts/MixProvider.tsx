import { createContext, ReactNode, useState } from "react";
import { dataExample } from "../consts/dataExample";
import { Recipe } from "../components/common/RecipeCard";
import axios from "axios";

interface Props {
  children: ReactNode;
}
export interface TrimmedData {
  id: number;
  name: string;
  description: string;
  addedIngredients: string[];
  ingredients: string[];
  process: string[];
  time: string;
  categories: string[];
}

export const MixedContext = createContext({
  handleRecipePick: (recipe: Recipe) => {},
  handleTwist: (twist: string) => {},
  getData: () => {},
  chosenRecipe: {},
  chosenTwist: "",
  trimmedData: {},
  setTwistedRecipe: (recipe) => {},
  twistedRecipe: {},
});

export const MixProvider = ({ children }: Props) => {
  const [chosenRecipe, setChosenRecipe] = useState<Recipe | null>(null);
  const [chosenTwist, setChosenTwist] = useState<string | null>(null);
  const [trimmedData, setTrimmedData] = useState<TrimmedData | null>(null);
  const [query, setQuery] = useState<string>("");
  const [twistedRecipe, setTwistedRecipe] = useState<string | null>(null);

  const handleTwist = (twist: string) => {
    if (!chosenRecipe) {
      console.error("No recipe chosen yet!");
    }
    console.log(`adding ${twist} on ${chosenRecipe?.name}`);
    const query = `add ${twist} flavour on ${
      chosenRecipe?.ingredients
    } and process: ${
      chosenRecipe?.process
    } and return the data in this structure: ${JSON.stringify(dataExample)}`;

    console.log("show up!!", query);
    setChosenTwist(twist);
    setQuery(query);
  };

  const getData = async (): Promise<void> => {
    console.log("[GetData] the Query is", query);
    try {
      const apiKey = import.meta.env.VITE_GPT_API_KEY;
      const model = import.meta.env.VITE_GPT_MODEL;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const requestBody = {
        model: model,
        messages: [
          {
            role: "user",
            content: query,
          },
        ],
      };

      const { data } = await axios.post(`/chat/completions`, requestBody, {
        headers,
      });

      const twistedRecipe = data.choices[0].message.content;
      setTwistedRecipe(twistedRecipe);
      trimString(twistedRecipe);
      console.log(
        "[GetData] we are mixing up",
        chosenRecipe,
        "with",
        twistedRecipe
      );
      console.log("[GetData] query is", query);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRecipePick = (recipe: Recipe) => {
    setChosenRecipe(recipe);
  };

  const trimString = (string: string) => {
    const trimmed = string.replace(/```json/, "").replace(/```/, "");
    console.log("ttt", trimmed);
    setTrimmedData(JSON.parse(trimmed));
  };

  const value = {
    chosenRecipe,
    chosenTwist,
    trimmedData,
    query,
    handleRecipePick,
    handleTwist,
    getData,
    setTwistedRecipe,
    twistedRecipe,
  };
  return (
    <MixedContext.Provider value={value}>{children}</MixedContext.Provider>
  );
};
