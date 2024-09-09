import { useRef, useState } from "react";
import { recipes } from "../data";
import RecipeGrid from "./RecipeGrid";
import { Box, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

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
      <Box className="flex gap-1 items-center justify-center">
        <div className="w-[40rem] flex gap-4">
          <Input variant="flushed" placeholder="Budget" ref={searchRef} />
          <LuSearch size={30} onClick={handleSearch} />
        </div>
      </Box>
      <RecipeGrid filteredRecipes={filteredRecipes} />
    </div>
  );
};

export default SearchedRecipes;
