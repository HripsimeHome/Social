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

        <ProgressBarFunding
         {...progress}
        />        
        <CurrencyPrice />
        
        <div className={styles.singlePageMain__deskPanel}>
        
         



        <div className="btnPanel whitePanel">
          <span className="sumPadding">1 USDT</span>
          <button className="btnlightGreen">Thanks!</button>
        </div>

        
        <div className="btnPanel whitePanel">
          <span className="sumPadding">11 USDT</span>
          <button className="btnlightGreen">0.015%</button>
        </div>

        <div className="btnPanel whitePanel">
          <span className="sumPadding">111 USDT</span>
          <span className="btnlightGreen">0.25%</span>
        </div>

        <div className="btnPanel lightGreenPanel">
          <span className="sumPadding">1111 USDT</span>
          <span className="btnlightGreen">2.55%</span>
        </div>

 
        </div> 


          
      </section>
    </>
  );
};

export default SinglePageMain