import styles from "./SinglePageMain.module.scss";
import ProgressBarFunding from "../../layout/ProgressBarFunding/ProgressBarFunding";
import CurrencyPrice from "../../layout/CurrencyPrice/CurrencyPrice";
import CurrencyDataPanel from "../../layout/CurrencyDataPanel/CurrencyDataPanel"

import {
  profilePhoto1Image,
  profilePhoto2Image,
  profilePhoto3Image,
  profilePhoto4Image,
  profilePhoto5Image,
} from "../../../assets/images";

const SinglePageMain = () => {
  const progress = {
    bakers: 100,
    percent: 15,
    daysToGo: 34,
  };

  const profileImages = [
    profilePhoto1Image,
    profilePhoto2Image,
    profilePhoto3Image,
    profilePhoto4Image,
    profilePhoto5Image,
  ]; 

  return (
    <>
      <section className={`${styles.singlePageMain} desk`}>
        <div className={styles.singlePageMain__deskHeader}>
          <h3 className="deskTitle">Funding</h3>
          <div>
            {profileImages.map((image, index) => (
              <img
                src={image}
                key={index}
                alt="Profile"
                className={styles.singlePageMain__profileImg}
              />
            ))}
          </div>
        </div>

        <ProgressBarFunding {...progress} />

        <CurrencyPrice currency="22,500" target="150,000" />

        <div className={styles.singlePageMain__deskPanel}>
          <CurrencyDataPanel />         
        </div>        
      </section>
    </>
  );
};

export default SinglePageMain;
/*
 <div className="greenPanel">
    <span>1111 USDT</span>
    <span className="btnGreen">2.55%</span>
  </div>
*/