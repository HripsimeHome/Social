import styles from "./FooterMenu.module.scss"
import Svg from "../../layout/Svg/Svg";
import { NavLink } from "react-router-dom";

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

const footerMenuIcons = [
  {
    link: homePagePath,
    icon: moneyIcon
  },
  {
    link: "https://crypto-tg-bot.vercel.app",
    icon: futuresIcon
  },
  {
    link: "https://crypto-tg-bot.vercel.app/orders",
    icon: positionIcon
  },
  {
    link: "https://crypto-tg-bot.vercel.app/currencies",
    icon: crypto500Icon
  },
  {
    link: "https://crypto-tg-bot.vercel.app/profile",
    icon: usdtIcon
  },
  {
    link: "https://celadon-meerkat-6d4c5a.netlify.app",
    icon: stackbitIcon
  },
]
 
const Footer = () => {
  return (
    <footer className={styles.footerMenu}>  

      {footerMenuIcons.map(({ link, icon } , index) => (
        <NavLink
          to={link}
          key={index}
          className="footerMenu">
          <Svg 
            id={icon}
            className={styles.footerMenu__btnImg}
          />
        </NavLink>
      ))}
    </footer>
  );
};

export default Footer;
