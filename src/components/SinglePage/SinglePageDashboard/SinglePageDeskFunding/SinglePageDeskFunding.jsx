import styles from "./SinglePageDeskFunding.module.scss"
import ProgressBarFunding from "../../../layout/ProgressBarFunding/ProgressBarFunding"
import CurrencyPrice from "../../../layout/CurrencyPrice/CurrencyPrice"

const SinglePageDeskFunding = () => {
  const progress = {
    bakers: 100,   
    percent: 75,  
    daysToGo: 10, 
  };


  return (
    <>
      <div className={styles.singlePageDeskFunding}>      
        <div className={`${styles.singlePageDeskFunding} desk`}>
          <h3 className="deskTitle">
          Funding
          </h3>
          <ProgressBarFunding 
            {...progress}            
          />
          <CurrencyPrice /> 
        </div>
<br />      

        <div className="btnPanel lightGreenPanel">
          <span className="sumPadding">0 USDT</span>
          <button className="btnlightGreen">CREATE</button>
        </div>


      </div>      
    </>
  );
};

export default SinglePageDeskFunding