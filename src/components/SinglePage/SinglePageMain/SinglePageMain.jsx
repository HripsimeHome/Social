import styles from "./SinglePageMain.module.scss"
import ProgressBarFunding from "../../layout/ProgressBarFunding/ProgressBarFunding";
import CurrencyPrice from "../../layout/CurrencyPrice/CurrencyPrice"

import {
  profilePhoto1Image,
  profilePhoto2Image,
  profilePhoto3Image,
  profilePhoto4Image,
  profilePhoto5Image
} from "../../../assets/images";

const SinglePageMain = () => {

  const progress = {
    bakers: 100,
    percent: 15,
    daysToGo: 34
  };
 
  return (
    <>
      <section className={`${styles.singlePageMain} desk`}>  
        <div className={styles.singlePageMain__deskHeader}>
          <h3 className="deskTitle">
            Funding
          </h3>
          <div>
            <img
            src={profilePhoto1Image}
            alt="Profile image"
            className={styles.singlePageMain__profileImg}
            />     
            <img
            src={profilePhoto2Image}
            alt="Profile image"
            className={styles.singlePageMain__profileImg}
              />
              <img
            src={profilePhoto3Image}
            alt="Profile image"
            className={styles.singlePageMain__profileImg}
              />
              <img
            src={profilePhoto4Image}
            alt="Profile image"
            className={styles.singlePageMain__profileImg}
              />
              <img
            src={profilePhoto5Image}
            alt="Profile image"
            className={styles.singlePageMain__profileImg}
              />   
          </div>
        </div>{/* deskHeader*/}
        
        <div className={styles.singlePageMain__deskPanel}>
        <ProgressBarFunding
         {...progress}
        />        
        <CurrencyPrice />
        </div>  

         <div className="whitePanel"></div>
         <div className="whitePanel"></div>
         <div className="whitePanel"></div>    

         <br />

          
      </section>
    </>
  );
};

export default SinglePageMain