import styles from "./ProjectPageContainer.module.scss";
import { useLocation } from "react-router-dom";
import ProjectPageDashboard from "../ProjectPageDashboard/ProjectPageDashboard";
import SinglePageMain from "../../SinglePage/SinglePageMain/SinglePageMain";
import NewProjectPageMain from "../../NewProjectPage/NewProjectMain/NewProjectMain";

import { singlePagePath, newProjectPagePath } from "../../../router/path";
import DeskAboutProject from "../ProjectPageDashboard/DeskAboutProject/DeskAboutProject";
import DeskFunding from "../ProjectPageDashboard/DeskFunding/DeskFunding";

const ProjectPageContainer = ({ formData, setFormData }) => {
  const location = useLocation();

  return (
    <section className={styles.projectPageContainer}>
      <div className={styles.projectPageContainer__dashboardContainer}>
        <DeskAboutProject nameValue={formData?.name} />
        <DeskFunding />
      </div>
      <div className={styles.projectPageContainer__mainContainer}>
        {location.pathname.startsWith(singlePagePath) ? (
          <SinglePageMain />
        ) : location.pathname === newProjectPagePath ? (
          <NewProjectPageMain formData={formData} setFormData={setFormData} />
        ) : null}
      </div>
    </section>
  );
};

export default ProjectPageContainer;
