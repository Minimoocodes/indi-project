import { useParams } from "react-router-dom";
import { recipes } from "../data";
import {
  Button,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Buttons from "../components/common/Button";
import { useState } from "react";

const RecipeDetailPage = () => {
  const [ingredients, setIngredients] = useState<boolean>(true);
  const params = useParams();
  const data = recipes[params.id - 1];

  return (
    // <SimpleGrid
    //   columns={{ sm: 1, md: 2 }}
    //   className="r-regular w-full md:max-w-[80rem]"
    //   spacing={4}
    // >
    <div className="r-regular h-full grid grid-cols-1 justify-center gap-5 md:grid-cols-2">
      {/* <Image src={data.photo} objectFit="cover" height="60vh" /> */}
      <div
        className="max-w-[85rem] h-[60vh] md:h-[92vh]"
        style={{
          backgroundImage: `url(${data.photo})`,
          backgroundSize: "cover",
          // height: "92vh",
        }}
      ></div>
      <Stack spacing={4} paddingX={4}>
        <Text className="r-bold text-xl md:text-2xl">{data.name}</Text>
        <HStack>
          {data.categories.map((c, index) => (
            <Text key={index} className="border-r-2 border-stone-500/80 px-2">
              {c}
            </Text>
          ))}
          <Text>{data.time}</Text>
        </HStack>
        <div className="hidden md:block">
          <Text className="r-semibold mt-5 md:text-lg">Ingredients</Text>
          {data.ingredients.map((i, index) => (
            <Text key={index} className="mb-1">
              {i}
            </Text>
          ))}
          <Text className="r-semibold mt-5 md:text-lg">How to Cook</Text>
          {data.process.map((p, index) => (
            <Text key={index} className="mb-1">
              {p}
            </Text>
          ))}
        </div>
        <div className="md:hidden">
          <div className="flex gap-2 r-semibold text-[#57534e]">
            <Text
              className={ingredients ? "underline" : "none"}
              onClick={() => setIngredients(true)}
            >
              Ingredients
            </Text>
            <Text>/</Text>
            <Text
              className={ingredients ? "none" : "underline"}
              onClick={() => setIngredients(false)}
            >
              Process
            </Text>
          </div>
          <div className={ingredients ? "block" : "hidden"}>
            {data.ingredients.map((i, index) => (
              <Text key={index} className="mb-1">
                {i}
              </Text>
            ))}
          </div>
          <div className={ingredients ? "hidden" : "block"}>
            {data.process.map((p, index) => (
              <Text key={index} className="mb-1">
                {p}
              </Text>
            ))}
          </div>
        </div>
        <div className="self-end mb-5">
          <Buttons variant="large">Add a Fun Twist</Buttons>
        </div>
      </Stack>
    </div>
    // </SimpleGrid>
  );
};

export default RecipeDetailPage;
