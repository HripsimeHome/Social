import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header className={styles.header}>        
        <span className={styles.header__logo}>CROWNDING</span>
        <Navbar />
        <button className={styles.header__menuBtn}>+</button> 
      </header>
    </>
  );
};

export default Header;