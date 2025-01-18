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
      <section className={`${styles.singlePageDeskFunding} desk`}>        
        <h3 className="deskTitle">
        Funding
        </h3>
         <ProgressBarFunding 
          {...progress}
          
        />
        <CurrencyPrice />        
      </section>
    </>
  );
};

export default SinglePageDeskFunding