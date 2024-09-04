import axios from "axios";
import { useState } from "react";
import { dataExample } from "../consts/dataExample";

export const useMashisso = () => {
  const [ingredients, setIngredients] = useState("");
  const [trimmedData, setTrimmedData] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredients(e.target.value);
  };

  const getData = async () => {
    if (!ingredients) return console.error("No ingredients are typed yet!");

    const query = `Give me a recipe with bare minimum ingredients of following: ${ingredients} and return the data only in this structure: ${JSON.stringify(
      dataExample
    )}`;
    console.log("qqq", query);

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
      const result = data.choices[0].message.content;
      console.log("rrr", result);
      setTrimmedData(JSON.parse(result));
    } catch (error) {
      console.error("error using useMashisso", error);
    }
  };


  return {trimmedData, handleInput, ingredients, getData}
}