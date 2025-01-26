import { ReactElement } from "react";
import HomePage from "../pages/HomePage";
import SinglePage from "../pages/SinglePage";
import NewProjectPage from "../pages/NewProjectPage";
import MusicPage from "../pages/MusicPage";
import EducationPage from "../pages/EducationPage";
import TechnologyPage from "../pages/TechnologyPage";
import AIPage from "../pages/AIPage";
import ErrorPage from "../pages/ErrorPage";
import { Navigate } from "react-router-dom";

// Paths

export const homePagePath = "/";
export const singlePagePath = "/single";
export const newProjectPagePath = "/newProject";
export const musicPagePath = "/music";
export const educationPagePath = "/education";
export const technologyPagePath = "/technology";
export const aiPagePath = "/ai";

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