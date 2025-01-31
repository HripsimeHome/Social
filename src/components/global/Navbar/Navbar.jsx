import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { menuItems } from "../../../constants/menuItems";
import { avatarImage } from "../../../assets/images";

const Navbar = () => {
  return (
    <div className={styles.navbar}>     
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
                `${styles.navbar__menuLink} 
                 ${isActive ? styles.navbar__menuLink_active : ""} 
                 ${text === "CROW" ? styles.navbar__crow : ""}`
              }
            >
              {text}
            </NavLink>
          ))}
        </nav>      
    </div>
  );
};

export default Navbar;