import { HStack, SimpleGrid } from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import Buttons from "./common/Button";

const RecipeForm = () => {
  return (
    <>
      <form className="r-semibold p-5 px-8">
        <SimpleGrid columns={{ sm: 1, md: 2 }} paddingX={20}>
          <section className="flex flex-col gap-4">
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="" className="form-label">
                Name of the dish
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="carbonara"
              />
            </div>
            <div className="mb-3 flex flex-col gap-4">
              <label htmlFor="" className="form-label">
                Ingredients
              </label>
              <div className="flex gap-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="rice"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="1 bowl"
                />
                <Buttons variant="medium">Add</Buttons>
              </div>
              <div className="flex gap-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="onion"
                />
                <input type="text" className="form-control" placeholder="1 " />
                <Buttons variant="medium">Add</Buttons>
              </div>
              <Buttons variant="medium">Add more</Buttons>
            </div>
          </section>
          <section className="mb-3 flex flex-col gap-2">
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="" className="form-label">
                Steps
              </label>
              <HStack justifyContent="space-between">
                <input
                  type="text"
                  className="form-control"
                  placeholder="1. cook the pasta"
                />
                <Buttons variant="medium">Add</Buttons>
              </HStack>
              <HStack justifyContent="space-between">
                <input
                  type="text"
                  className="form-control"
                  placeholder="2. cut the bacon."
                />
                <Buttons variant="medium">Add</Buttons>
              </HStack>
              <HStack justifyContent="space-between">
                <input
                  type="text"
                  className="form-control"
                  placeholder="3. separate egg yolks"
                />
                <Buttons variant="medium">Add</Buttons>
              </HStack>
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="" className="form-label">
                Add a photo{" "}
              </label>
              <FileUploader />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="" className="form-label">
                How long it takes
              </label>
              <input
                type="textarea"
                className="form-control"
                placeholder="15 min"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="" className="form-label">
                Categories
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Korean, Fusion, Snack"
              />
            </div>
            <div className="self-end">
              <Buttons variant="large">Add it to my recipes</Buttons>
            </div>
          </section>
        </SimpleGrid>
      </form>
    </>
  );
};

export default RecipeForm;
