import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../../constants/menuItems";
import { avatarImage } from "../../../assets/images";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <img
          src={avatarImage}
          alt="Avatar"
          className={styles.navbar__avatarImg}
        />

        <nav className={styles.navbar__menu}>
          {menuItems.map(({ link, text }, index) => (
            <NavLink
              to={link}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navbar__menuLink} ${styles.navbar__menuLink_active}`
                  : styles.navbar__menuLink
              }
            >
              {text}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;