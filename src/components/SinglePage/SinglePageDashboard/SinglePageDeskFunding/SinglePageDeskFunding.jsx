import styles from "./SinglePageDeskFunding.module.scss"
import ProgressBarFunding from "../../../layout/ProgressBarFunding/ProgressBarFunding"
import CurrencyPrice from "../../../layout/CurrencyPrice/CurrencyPrice"

const SinglePageDeskFunding = () => {
  return (
    <>
      <section className={`${styles.singlePageDeskFunding} desk`}>
        
        <h3 className="deskTitle">
        Funding
        </h3>
        <ProgressBarFunding />
        <CurrencyPrice />        
      </section>
    </>
  );
};

export default SinglePageDeskFunding