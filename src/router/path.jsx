import { ReactElement } from "react";

import HomePage from "../pages/HomePage";
import AllPage from "../pages/AllPage";
import MusicPage from "../pages/MusicPage";
import EducationPage from "../pages/EducationPage";
import TechnologyPage from "../pages/TechnologyPage";
import AIPage from "../pages/AIPage";
import ErrorPage from "../pages/ErrorPage";

export const homePagePath = "/";
export const allPagePath = "/all";
export const musicPagePath = "/music";
export const educationPagePath = "/education";
export const technologyPagePath = "/technology";
export const aiPagePath = "/ai";

interface IRoute {
  path: string;
  component: ReactElement<any, any>;
  children?: Omit<IRoute, "children">[];
}

export const routes: IRoute[] = [
  /* {
    path: homePagePath,
    component: <HomePage />,
  },
  */

  {
    path: allPagePath,
    component: <AllPage />,
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
