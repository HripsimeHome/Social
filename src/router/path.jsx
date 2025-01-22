import { ReactElement } from "react";

import HomePage from "../pages/HomePage";
import SinglePage from "../pages/SinglePage";
import AllPage from "../pages/AllPage";
import MusicPage from "../pages/MusicPage";
import EducationPage from "../pages/EducationPage";
import TechnologyPage from "../pages/TechnologyPage";
import AIPage from "../pages/AIPage";
import ErrorPage from "../pages/ErrorPage";

export const homePagePath = "/";
export const singlePagePath = "/single";
export const allPagePath = "/all";
export const musicPagePath = "/music";
export const educationPagePath = "/education";
export const technologyPagePath = "/technology";
export const aiPagePath = "/ai";

export const routes = [
  {
    path: homePagePath,
    component: <HomePage />,
  },

  {
    path: allPagePath,
    component: <AllPage />,
  },

  {
    path: singlePagePath,
    component: <SinglePage />,
  },

  {
    path: musicPagePath,
    component: <MusicPage />,
  },

  {
    path: educationPagePath,
    component: <EducationPage />,
  },

  {
    path: technologyPagePath,
    component: <TechnologyPage />,
  },

  {
    path: aiPagePath,
    component: <AIPage />,
  },

  {
    path: "*",
    component: <ErrorPage />,
  },
];
