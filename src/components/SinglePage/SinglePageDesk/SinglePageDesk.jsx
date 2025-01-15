import styles from "./SinglePageDashboard.module.scss"
 
const SinglePageDashboard = () => {
  return (
    <>
      <section className={styles.singlePageDesk}>
        <div className={styles.singlePageDesk__desk}>
          <h3 className={styles.singlePageDesk__deskTitle}>
          About Project
          </h3>
          <p className={styles.singlePageDesk__deskText}>
          The exciting new VR card game Loftia. 
          </p>
          <p>
          Loftia, all of the  cards can be played as either a champion to fight for you on the desti
          <span className={styles.singlePageDesk__readMore}>read all</span>           
          </p>
        </div>
      </section>
    </>
  );
};

export default SinglePageDashboard