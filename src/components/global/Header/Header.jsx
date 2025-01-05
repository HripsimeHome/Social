import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__logoPosition}>
          <span className={styles.header__logo}>CROWNDING</span>
          <button className={styles.header__menuBtn}>+</button>
        </div>

       
      <Navbar />
      </header>
    </>
  );
};

export default Header;