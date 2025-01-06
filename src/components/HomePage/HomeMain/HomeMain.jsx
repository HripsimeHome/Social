import styles from "./HomeMain.module.scss";

const HomeMain = () => {
  return (
    <>
      <section className={styles.homeMain}>
         <div className={styles.homeMain__cardContainer}>
         <div className={styles.homeMain__cardContainer__card}>
         <div className={styles.homeMain__cardContainer__card_item}>1</div>
         <div className={styles.homeMain__cardContainer__card_item}>2</div>
 



         </div>

         <div className={styles.homeMain__cardContainer__card}>
         2
         </div>

         <div className={styles.homeMain__cardContainer__card}>
         3
         </div>

         </div>
      </section>
    </>
  );
};

export default HomeMain