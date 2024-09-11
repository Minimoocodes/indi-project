import { HStack } from "@chakra-ui/react";
import Buttons from "./common/Button";

interface Props {
  active: string;
  handleClick: (menu: string) => void;
  menu: string[];
}

const ButtonCategories = ({ active, handleClick, menu }: Props) => {
  return (
    <HStack className="mt-5 flex justify-center">
      {menu.map((m, index) => (
        <Buttons
          key={index}
          onClick={() => handleClick(m)}
          variant={active === m ? "large" : "outline"}
        >
          {m}
        </Buttons>
      ))}
    </HStack>
  );
};

export default ButtonCategories;
