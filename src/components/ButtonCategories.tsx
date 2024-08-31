import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { SearchWordContext } from "../context/context";
import { recipes } from "../data";

interface Props {
  active: "string";
  handleClick: (menu: string) => void;
  menu: string[];
}

const ButtonCategories = ({ active, handleClick, menu }: Props) => {
  const { searchWord, setSearchWord, filteredRecipes, setFilteredRecipes } =
    useContext(SearchWordContext);
  const searchRef = useRef("");

  const handleSearch = () => {
    const searchInput = searchRef.current.value;
    setSearchWord(searchInput);
    const filteredArray = recipes.filter((recipe) =>
      recipe.categories.includes(searchInput)
    );
    setFilteredRecipes(filteredArray);
  };

  console.log("search word is", searchWord);
  console.log("filtered recipes are", filteredRecipes);

  return (
    <HStack className="mt-5 flex justify-center">
      {menu.map((m, index) => (
        <Button
          key={index}
          onClick={() => handleClick(m)}
          variant={active === m ? "solid" : "outline"}
        >
          {m}
        </Button>
      ))}
      <Box className="flex gap-1 items-center">
        <Input placeholder="Budget" ref={searchRef} />
        <LuSearch size={30} onClick={handleSearch} />
      </Box>
    </HStack>
  );
};

export default ButtonCategories;
