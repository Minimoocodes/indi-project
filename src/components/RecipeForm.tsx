import { Button, SimpleGrid } from "@chakra-ui/react";

const RecipeForm = () => {
  return (
    <>
      <form className="r-semibold p-5 px-8">
        <SimpleGrid columns={{ sm: 1, md: 2 }}>
          <section>
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
            <div className="mb-3 flex flex-col gap-2">
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
                <button>Add</button>
              </div>
              <div className="flex gap-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="onion"
                />
                <input type="text" className="form-control" placeholder="1 " />
                <button>Add</button>
              </div>
              <Button maxW="80%" size="xs">
                Add more
              </Button>
            </div>
          </section>
          <section>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="" className="form-label">
                Steps
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="1. rinse the rice."
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="" className="form-label">
                Add a photo{" "}
              </label>
              <input type="text" className="form-control" />
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
            <Button maxW="80%">Done</Button>
          </section>
        </SimpleGrid>
      </form>
    </>
  );
};

export default RecipeForm;
