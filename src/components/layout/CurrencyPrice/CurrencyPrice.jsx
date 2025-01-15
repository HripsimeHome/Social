import styles from "./CurrencyPrice.module.scss";

const CurrencyPrice = () => {
  return (
    <>
      <div className={styles.currencyPrice}>      
        <span className={styles.currencyPrice__currency}>22,500 USDT</span>
        <label className={styles.currencyPrice__target}>Target of 150,000 USDT</label>
        </div>     
    </>
  );
};

export default CurrencyPrice;