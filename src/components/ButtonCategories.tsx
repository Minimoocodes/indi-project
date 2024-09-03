import { Button, HStack } from "@chakra-ui/react";

interface Props {
  active: "string";
  handleClick: (menu: string) => void;
  menu: string[];
}

const ButtonCategories = ({ active, handleClick, menu }: Props) => {
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
    </HStack>
  );
};

export default ButtonCategories;
