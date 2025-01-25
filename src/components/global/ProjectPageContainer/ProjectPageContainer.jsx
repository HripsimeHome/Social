import styles from "./ProjectPageContainer.module.scss";
import ProjectPageDashboard from "../ProjectPageDashboard/ProjectPageDashboard";
import ProjectPageMain from "../ProjectPageMain/ProjectPageMain"

const ProjectPageContainer = () => {
  return (   
    <section className={styles.projectPageContainer}>
      <div className={styles.projectPageContainer__dashboardContainer}>        
        <ProjectPageDashboard />
      </div>
      <div className={styles.projectPageContainer__mainContainer}>       
        <ProjectPageMain />
      </div>
    </section>     
  );
}

export default ProjectPageContainer  