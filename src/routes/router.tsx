import { createBrowserRouter } from "react-router-dom";
import WhatToEat from "../pages/WhatToEatPage";
import MyRecipes from "../pages/MyRecipesPage";
import LogRecipes from "../pages/LogRecipesPage";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import ErrorPage from "../pages/ErrorPage";
import FunTwistPage from "../pages/FunTwistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/what-to-eat", element: <WhatToEat /> },
      { path: "/my-recipes", element: <MyRecipes /> },
      { path: "/my-recipes/:id", element: <RecipeDetailPage /> },
      { path: "/fun-twist", element: <FunTwistPage /> },
      { path: "/log-recipes", element: <LogRecipes /> },
    ],
  },
]);

export default router;
