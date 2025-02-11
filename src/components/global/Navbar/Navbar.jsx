import styles from "./Navbar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../../../constants/menuItems";
import { avatarImage } from "../../../assets/images";


import {    
  homePagePath
} from "../../../router/path";

const Navbar = () => {
 
const location = useLocation();
 const isHomePage = location.pathname === homePagePath;

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
                 ${text === "CROW" ? styles.navbar__crow : ""}
                ${isActive && location === homePagePath ? styles.navbar__menuLink_active : ""}`
              }
            >
              
              {text}
            </NavLink>
          ))}

{/*
<NavLink
            to={link}
            key={index}  
            end={link === homePagePath} // Ensures "/" is only active when exactly on home
            className={({ isActive }) =>
              `${styles.navbar__menuLink} 
               ${isActive ? styles.navbar__menuLink_active : ""} 
               ${text === "CROW" ? styles.navbar__crow : ""}`
            }
          >
            {text}
          </NavLink>
          */}


        </nav>      
    </div>
  );
};

export default Navbar;