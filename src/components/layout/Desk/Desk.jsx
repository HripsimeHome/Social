import styles from "./Desk.module.scss";

import ProgressBarFunding from "../../layout/ProgressBarFunding/ProgressBarFunding"
import CurrencyPrice from "../../layout/CurrencyPrice/CurrencyPrice"
 

const Desk = () => {
  return (
    <>
      <div className={styles.desk}>
        <div className={styles.desk__deskContainer}>
          <h3 className={styles.desk__deskTitle}>
          About Project
          </h3>
          <p className={styles.desk__deskText}>
          The exciting new VR card game Loftia. 
          </p>
          <p>
          Loftia, all of the  cards can be played as either a champion to fight for you on the desti
          <span className={styles.desk__readMore}>read all</span>           
          </p>
        </div>
      </div>
<br /> 

      <div className={styles.desk}>
        <div className={styles.desk__deskContainer}>
          <h3 className={styles.desk__deskTitle}>
          Funding
          </h3>
          <ProgressBarFunding />
          <CurrencyPrice />          
        </div>
      </div>
    </>
  );
};

export default Desk;