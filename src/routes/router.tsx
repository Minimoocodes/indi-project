import { createBrowserRouter } from "react-router-dom";
import WhatToEat from "../pages/WhatToEat";
import MyRecipes from "../pages/MyRecipesPage";
import FunTwist from "../pages/FunTwist";
import LogRecipes from "../pages/LogRecipesPage";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import ErrorPage from "../pages/ErrorPage";
import SearchRecipePage from "../pages/SearchRecipePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/what-to-eat", element: <WhatToEat /> },
      { path: "/i-have-only", element: <SearchRecipePage /> },
      { path: "/my-recipes", element: <MyRecipes /> },
      { path: "/my-recipes/:id", element: <RecipeDetailPage /> },
      { path: "/fun-twist", element: <FunTwist /> },
      { path: "/log-recipes", element: <LogRecipes /> },
    ],
  },
]);

export default router;
