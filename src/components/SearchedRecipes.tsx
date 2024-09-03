import { Box, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import RecipeGrid from "./RecipeGrid";
import { recipes } from "../data";

const SearchedRecipes = () => {
  const [searchWord, setSearchWord] = useState<Search>(undefined);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const searchRef = useRef("");

  const handleSearch = () => {
    const searchInput = searchRef.current.value;
    setSearchWord(searchInput);
    const filteredArray = recipes.filter((recipe) =>
      recipe.categories.includes(searchInput)
    );
    setFilteredRecipes(filteredArray);
  };

  return (
    <div className="p-5">
      <Box className={"flex gap-1 items-center"}>
        <Input placeholder="Budget" ref={searchRef} />
        <LuSearch size={30} onClick={handleSearch} />
      </Box>
      <RecipeGrid filteredRecipes={filteredRecipes} />
    </div>
  );
};

export default SearchedRecipes;
