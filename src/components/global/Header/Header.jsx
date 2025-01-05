import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.header__logo}>CROWNDING</span>
      <Navbar />
      </header>
    </>
  );
};

export default Header;