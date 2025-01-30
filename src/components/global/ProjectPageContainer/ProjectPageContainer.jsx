import styles from "./ProjectPageContainer.module.scss";
import { useLocation } from "react-router-dom";
import ProjectPageDashboard from "../ProjectPageDashboard/ProjectPageDashboard";
import SinglePageMain from "../../SinglePage/SinglePageMain/SinglePageMain";
import NewProjectPageMain from "../../NewProjectPage/NewProjectMain/NewProjectMain";

import {
  singlePagePath, 
  newProjectPagePath 
} 
 from "../../../router/path";

const ProjectPageContainer = () => {
  const location = useLocation();

  return (
    <section className={styles.projectPageContainer}>
      <div className={styles.projectPageContainer__dashboardContainer}>
        <ProjectPageDashboard />
      </div>
      <div className={styles.projectPageContainer__mainContainer}>
        {location.pathname.startsWith(singlePagePath) ? (
          <SinglePageMain />
        ) : location.pathname === newProjectPagePath ? (
          <NewProjectPageMain />
        ) : null}
      </div>
    </section>
  );
};

export default ProjectPageContainer;