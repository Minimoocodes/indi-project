import { Text, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

const SearchRecipePage = () => {
  const [Ingredients, setIngredients] = useState("");
  const inputRef = useRef("");

  const handleSearch = () => {
    console.log("i only have", inputRef.current.value);
  };

  return (
    <div className="r-regular">
      <Text>I have only</Text>
      <input placeholder="onion, bacon" ref={inputRef} />
      <Button onClick={handleSearch}>Send request</Button>
    </div>
  );
};

export default SearchRecipePage;
