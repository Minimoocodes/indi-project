import { Box, Image } from "@chakra-ui/react";
import { recipes } from "../data";
import Buttons from "./common/Button";

const handleClick = () => {};

const Roulette = () => {
  return (
    <div className="relative w-[90vw] h-[60vh] p-10 mx-auto mb-10 flex flex-col items-center gap-5">
      <div className="flex gap-5 items-center  h-[50vh] overflow-hidden ">
        <div className="backdrop-blur-sm absolute top-0 left-0 w-[270px] h-[100%]"></div>
        {recipes.map((r, index) => (
          <Image width="250px" height="300px" src={r.photo} key={index} />
        ))}{" "}
      </div>
      <div className="w-[270px] h-[100%] absolute top-0 left-500 border-2 border-green-950"></div>
      <Buttons variant="medium">spin again</Buttons>
    </div>
  );
};
export default Roulette;
