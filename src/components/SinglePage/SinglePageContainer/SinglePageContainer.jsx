import styles from "./SinglePageContainer.module.scss";
import SinglePageDashboard from "../SinglePageDashboard/SinglePageDashboard";
import SinglePageMain from "../SinglePageMain/SinglePageMain"

const SinglePageContainer = () => {
  return (   
    <section className={styles.singlePageContainer}>
      <div className={styles.singlePageContainer__dashboardContainer}>        
        <SinglePageDashboard />
      </div>
      <div className={styles.singlePageContainer__mainContainer}>       
        <SinglePageMain />
      </div>
    </section>     
  );
}

export default SinglePageContainer  