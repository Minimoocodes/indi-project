import { useState } from "react";
import RecipeGrid from "../components/RecipeGrid";
import RecipeCategories from "../components/RecipeCategories";
import TwistedRecipes from "../components/TwistedRecipes";
import Profile from "../components/Profile";
import ButtonCategories from "../components/ButtonCategories";
import SearchedRecipes from "../components/SearchedRecipes";

type SearchWord = string | undefined;
export interface Search {
  searchWord: SearchWord;
  setSearchWord: (value: string) => void;
}

const MyRecipes = () => {
  const [active, setActive] = useState("My recipes");

  const handleClick = (menu: string) => {
    setActive(menu);
  };

  const menu = ["My recipes", "Categories", "Twisted Recipes", "Search"];

  return (
    <>
      <Profile />
      <ButtonCategories active={active} handleClick={handleClick} menu={menu} />
      {active == "My recipes" && <RecipeGrid />}
      {active === "Categories" && <RecipeCategories />}
      {active == "Twisted Recipes" && <TwistedRecipes />}
      {active === "Search" && <SearchedRecipes />}
    </>
  );
};

export default MyRecipes;
