import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  variant: string;
  children: ReactNode;
  onClick?: () => void;
}

const Buttons = ({ variant, children, onClick }: Props) => {
  const renderVariants = () => {
    switch (variant) {
      case "large":
        return largeVariant();
      case "medium":
        return mediumVariant();
      case "outline":
        return outlineVariant();
    }
  };

  const largeVariant = () => {
    return (
      <Box
        as="button"
        bg="#78716C"
        paddingX={5}
        paddingY={1}
        color="white"
        rounded="lg"
        _hover={{ bg: "rgb(168 162 158)", color: "black" }}
        className="r-semibold text-lg"
        onClick={onClick}
      >
        {children}
      </Box>
    );
  };
  const mediumVariant = () => {
    return (
      <Box
        as="button"
        bg="#78716C"
        paddingX={5}
        paddingY={1}
        color="white"
        rounded="lg"
        _hover={{ bg: "rgb(168 162 158)", color: "black" }}
        _active={{ bg: "rgb(168 162 158)", color: "black" }}
        className="r-regular text-md"
        onClick={onClick}
      >
        {children}
      </Box>
    );
  };

  const outlineVariant = () => {
    return (
      <Box
        as="button"
        borderColor="#78716C"
        paddingX={5}
        paddingY={1}
        color="#78716C"
        rounded="lg"
        _hover={{ bg: "rgb(168 162 158)", color: "black" }}
        className="r-semibold text-lg"
        onClick={onClick}
      >
        {children}
      </Box>
    );
  };

  return renderVariants();
};

export default Buttons;
