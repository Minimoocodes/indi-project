import { Outlet } from "react-router-dom";
import Heading from "./Heading";
import { useState } from "react";
import { RecipeTwistContext } from "../contexts/contexts";
import { TrimmedData } from "../hooks/useTwistRecipe";

const Layout = () => {
  const [twistedRecipes, setTwistedRecipes] = useState<TrimmedData[]>([]);

  return (
    <>
      <Heading />
      <div className={"mt-[1vh] lg:mt-[8vh]"}>
        <RecipeTwistContext.Provider
          value={{ twistedRecipes, setTwistedRecipes }}
        >
          <Outlet />
        </RecipeTwistContext.Provider>
      </div>
    </>
  );
};

export default Layout;
