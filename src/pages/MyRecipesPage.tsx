import { useState } from "react";
import RecipeGrid from "../components/RecipeGrid";
import RecipeCategories from "../components/RecipeCategories";
import TwistedRecipes from "../components/TwistedRecipes";
import Profile from "../components/Profile";
import ButtonCategories from "../components/ButtonCategories";
import { SearchWordContext } from "../context/SearchWordContext";

type SearchWord = string | undefined;

export interface Search {
  searchWord: SearchWord;
  setSearchWord: (value: string) => void;
}

const MyRecipes = () => {
  const [active, setActive] = useState("My recipes");
  const [searchWord, setSearchWord] = useState<Search>(undefined);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleClick = (menu: string) => {
    setActive(menu);
  };
  console.log("active menu is", active);
  const menu = ["My recipes", "Categories", "Twisted Recipes"];

  return (
    <>
      <SearchWordContext.Provider
        value={{
          searchWord,
          setSearchWord,
          filteredRecipes,
          setFilteredRecipes,
        }}
      >
        <Profile />
        <ButtonCategories
          active={active}
          handleClick={handleClick}
          menu={menu}
        />
        {active == "My recipes" && <RecipeGrid />}
        {active === "Categories" && <RecipeCategories />}
        {active == "Twisted Recipes" && <TwistedRecipes />}
      </SearchWordContext.Provider>
    </>
  );
};

export default MyRecipes;
