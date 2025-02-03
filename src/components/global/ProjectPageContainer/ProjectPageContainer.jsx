import styles from "./ProjectPageContainer.module.scss";
import { useLocation } from "react-router-dom";
import DeskAboutProject from "./DeskAboutProject/DeskAboutProject";
import DeskFunding from "./DeskFunding/DeskFunding";
import SinglePageMain from "../../SinglePage/SinglePageMain/SinglePageMain";
import NewProjectPageMain from "../../NewProjectPage/NewProjectMain/NewProjectMain";

import {
   singlePagePath,
   newProjectPagePath
} from "../../../router/path";

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