import styles from "./Desk.module.scss";

import ProgressBarFunding from "../../layout/ProgressBarFunding/ProgressBarFunding"
import CurrencyPrice from "../../layout/CurrencyPrice/CurrencyPrice"
//import {progress} from "../../HomePage/HomeMain/HomeMain"
 

const Desk = () => {
  return (
    <>
      <div className={styles.desk}>
        <div className={styles.desk__newPin}>new</div>
        <div className="desk">
          <h3 className="deskTitle">
          About Project
          </h3>
          <p className={styles.desk__deskText}>
          The exciting new VR card game Loftia. 
          </p>
          
          <span className={styles.desk__truncate}>
          Loftia, all of the cards can be played as either a champion to fight for you on the destination  
        </span> 
        <span className={styles.desk__readMore}>read all</span>

        </div>
      </div>


      
      <div className="desk">
        <h3 className="deskTitle">
          Funding
          </h3>
          <ProgressBarFunding />  

          {/*    {...progress}*/}
          <CurrencyPrice />          
        </div>      
    </>
  );
};

export default Desk;