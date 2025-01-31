import { ReactElement } from "react";
import HomePage from "../pages/HomePage";
import SinglePage from "../pages/SinglePage";
import NewProjectPage from "../pages/NewProjectPage";
import FuturesPage from "../pages/FuturesPage";
import PositionPage from "../pages/PositionPage";
import Crypto500Page from "../pages/Crypto500Page";
import UsdtPage from "../pages/UsdtPage";
import ErrorPage from "../pages/ErrorPage";
import { Navigate } from "react-router-dom";

// Paths

export const homePagePath = "/";
export const singlePagePath = "/single";
export const newProjectPagePath = "/newProject";
export const futuresPagePath = "/futures";
export const positionPagePath = "/position";
export const crypto500PagePath = "/crypto500";
export const usdtPagePath = "/usdt";

// Routes

export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },
 
  {
    path: singlePagePath, 
    component: <Navigate to={homePagePath} />,
    children: [{ path: ":id", component: <SinglePage /> }],
  },

  {
    path: newProjectPagePath,
    component: <NewProjectPage />,
  },

  {
    path: futuresPagePath,
    component: <FuturesPage />,
  },

  {
    path: positionPagePath,
    component: <PositionPage />,
  },

  {
    path: crypto500PagePath,
    component: <Crypto500Page />,
  },

  {
    path: usdtPagePath,
    component: <UsdtPage />,
  },

  {
    path: "*",
    component: <ErrorPage />,
  },
];