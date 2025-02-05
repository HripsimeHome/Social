import styles from "./FooterMenu.module.scss"
import Svg from "../../layout/Svg/Svg";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react"

import {    
  homePagePath
} from "../../../router/path";

import {
  moneyIcon,
  futuresIcon,
  positionIcon,
  crypto500Icon,
  usdtIcon,
  stackbitIcon
} from "../../../assets/svg";

import {
  plusAnim  
} from "../../../assets/lotties"


const footerMenuIcons = [
  {
    link: homePagePath,
    icon: moneyIcon
  },  
  {
    link: "https://coino-rust.vercel.app",
    //icon: stackbitIcon,
    animation: plusAnim,
    text: "STAKE"
  },
  {
    link: "https://crypto-tg-bot.vercel.app",
    icon: futuresIcon,   
  },
]
 
const Footer = () => {
  return (
    <footer className={styles.footerMenu}>  
      {footerMenuIcons.map(({ link, icon, animation, text } , index) => (
        <NavLink to={link} key={index} className="footerMenu">
        {animation ? (
          <>
            <Lottie
              animationData={animation}
              loop={true}
              className={styles.footerMenu__plusAnim}
            />
            <span className={styles.footerMenu__switchText}>
              {text}
            </span>
          </>
        ) : (
          <Svg id={icon} className={styles.footerMenu__btnImg} />
        )}
      </NavLink>
      ))}          
    </footer>
  );
};

export default Footer;