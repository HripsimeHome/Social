import styles from "./CurrencyPrice.module.scss";

const CurrencyPrice = ({ currency, target }) => {
 
  return (
    <>
      <div className={styles.currencyPrice}>      
        <span className={styles.currencyPrice__currency}>
          {currency} USDT          
        </span>
        <label className={styles.currencyPrice__target}>
          Target of {target} USDT
        </label>
      </div>     
    </>
  );
};

export default CurrencyPrice;