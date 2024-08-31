import axios from "axios";
import { useState } from "react";
import { dataExample } from "../consts/dataExample";
import { Recipe } from "../components/common/RecipeCard";

export interface TrimmedData {
  id: number,
  name: string, 
  description: string,
  addedIngredients: string[],
  ingredients: string[],
  process: string[],
  time: string,
  categories: string[]
}

export const useTwistRecipe = () => {
  const [chosenRecipe, setChosenRecipe] = useState<Recipe | null>(null);
  const [chosenTwist, setChosenTwist] = useState<string>("");
  const [trimmedData, setTrimmedData] = useState<TrimmedData | null>(null);
  const [query, setQuery] = useState<string>("");
  const [twistedRecipe, setTwistedRecipe] = useState<string | null>(null);

  const getData = async (): Promise<void> => {
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
    } catch (error) {
      console.error(error);
    }
  };



const handleRecipePick = (recipe: Recipe) => {
  setChosenRecipe(recipe);
};

const handleTwist = (twist: string) => {
  if (!chosenRecipe) {
    console.error("No recipe chosen yet!");
  }
  setChosenTwist(twist);
  console.log(`adding ${twist} on ${chosenRecipe?.name}`);
  const query = `add ${twist} flavour on ${
    chosenRecipe?.ingredients
  } and process ${
    chosenRecipe?.process
  } and return the data in this structure: ${JSON.stringify(dataExample)}`;
  setQuery(query);
};

const trimString = (string: string) => {
  const trimmed = string.replace(/```json/, "").replace(/```/, "");
  console.log("ttt", trimmed);
  setTrimmedData(JSON.parse(trimmed))
};


return { chosenRecipe,
  chosenTwist,
  trimmedData,
  handleRecipePick,
  handleTwist,
  getData}
}


