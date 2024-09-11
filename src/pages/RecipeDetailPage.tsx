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

const RecipeDetailPage = () => {
  const params = useParams();
  const data = recipes[params.id - 1];

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      className="r-regular w-[92vh]"
      spacing={4}
    >
      <Image src={data.photo} objectFit="cover" />
      <Stack spacing={4}>
        <Text className="r-bold">{data.name}</Text>
        <HStack>
          {data.categories.map((c, index) => (
            <Text key={index} className="border-r-2 px-2">
              {c}
            </Text>
          ))}
          <Text>{data.time}</Text>
        </HStack>
        <div>
          {data.ingredients.map((i, index) => (
            <Text key={index} className="mb-1">
              {i}
            </Text>
          ))}
        </div>
        <div>
          {data.process.map((p, index) => (
            <Text key={index} className="mb-1">
              {p}
            </Text>
          ))}
        </div>
        <Buttons variant="medium">Add a fun twist</Buttons>
      </Stack>
    </SimpleGrid>
  );
};

export default RecipeDetailPage;
