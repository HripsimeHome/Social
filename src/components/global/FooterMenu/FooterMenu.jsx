import styles from "./FooterMenu.module.scss"
import Svg from "../../layout/Svg/Svg";
import { Link, NavLink } from "react-router-dom";
import Lottie from "lottie-react"

import {    
  homePagePath,
  newProjectPagePath
} from "../../../router/path";

import {
  moneyIcon,  
} from "../../../assets/svg";

import {
  plusAnim  
} from "../../../assets/lotties"
 
 
const Footer = () => {
  return (
    <footer className={styles.footerMenu}>  
      <div className={` ${styles.footerMenu__container} container `}>
        <div> 
          <Link to={homePagePath}>
            <Svg 
              id={moneyIcon} 
              className={styles.footerMenu__iconMenu}
            />
          </Link>
        </div> 

        <div>
          <a href="https://iquant.store">
            <Lottie
              animationData={plusAnim}
              loop={true}
              className={styles.footerMenu__plusAnim}
          />              
            <span className={styles.footerMenu__switchText}>
             FUND 
            </span>
          </a>   
        </div>
         
        <div>
          <Link 
            to={newProjectPagePath}
            className={styles.footerMenu__plusBtn}
          >
          +
          </Link> 
        </div>    
     </div>
    </footer>
  );
};

export default Footer;