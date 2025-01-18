import styles from "./SinglePageDeskAboutProject.module.scss"
import  LabelPin  from "../../../layout/LabelPin/LabelPin"

const SinglePageDeskAboutProject = () => {
  return (
    <>
      <section className={styles.singlePageDeskAboutProject}>
      <div className={styles.singlePageDeskAboutProject__newPinContainer}>

      {/*<div className={styles.singlePageDeskAboutProject__newPin}>new</div>*/}
      <LabelPin />

        </div>
        <div className={`${styles.singlePageDeskAboutProject} desk`}>
          <h3 className="deskTitle">
          About Project
          </h3>
          <p className={styles.singlePageDeskAboutProject__deskText}>
          The exciting new VR card game Loftia. 
          </p>
          <p className={styles.singlePageDeskAboutProject__truncate}>
          Loftia, all of the  cards can be played as either a champion to fight for you on the destination
                  
          </p>
          <span className={styles.singlePageDeskAboutProject__readMore}>read all
          </span>
          
        </div>
      </section>
    </>
  );
};

export default SinglePageDeskAboutProject