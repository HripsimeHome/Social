import styles from "./DeskFunding.module.scss"
import ProgressBarFunding from "../../../layout/ProgressBarFunding/ProgressBarFunding"
import CurrencyPrice from "../../../layout/CurrencyPrice/CurrencyPrice"

const DeskFunding = () => {
  const progress = {
    bakers: 100,   
    percent: 75,  
    daysToGo: 10, 
  };

  return (
    <>
      <div className={styles.deskFunding}>      
        <div className={`${styles.deskFunding} desk`}>
          <h3 className="deskTitle">
          Funding
          </h3>
          <ProgressBarFunding 
            {...progress}            
          />
          <CurrencyPrice 
            currency="0"
            target="1"
          /> 
        </div>          

        <div className="btnPanel lightGreenPanel">
          <span className="sumPadding">0 USDT</span>
          <button className="btnlightGreen">CREATE</button>
        </div>
      </div>      
    </>
  );
};

export default DeskFunding