import styles from "./CurrencyPrice.module.scss";

const CurrencyPrice = () => {

  const currPrice = {
    currency: "22,500",
    target: "150,000"
  };

  return (
    <>
      <div className={styles.currencyPrice}>      
        <span className={styles.currencyPrice__currency}>
          {`${currPrice.currency}`} USDT          
        </span>
        <label className={styles.currencyPrice__target}>
          Target of {`${currPrice.target}`} USDT
        </label>
      </div>     
    </>
  );
};

export default CurrencyPrice;