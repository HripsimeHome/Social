import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import Svg from "../../layout/Svg/Svg";

import {
  homePagePath,
  singlePagePath,
  newProjectPagePath  
} from "../../../router/path";

import { arrowPrevIcon } from "../../../assets/svg";
import { gameCards } from "../../../constants/gameCards";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  let logoText = "CROWNDING";

  const isHomePage = location.pathname === homePagePath;
  const isNewProjectPage = location.pathname === newProjectPagePath;
  const isSinglePage = location.pathname.includes(singlePagePath);

  if (isSinglePage) {
    const id = location.pathname.replace(`${singlePagePath}/`, "");

    const curName = gameCards.find((item) => item.id === +id)?.gameName;
    if (curName) logoText = curName;
  }
  if (isNewProjectPage) {
    logoText = "NEW PROJECT";
  }

  useEffect(() => {
    // Detect scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Change background to black when scrolled
      } else {
        setIsScrolled(false); // Keep header transparent when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className="container">
          <div className={styles.header__container}>
            <div className={styles.header__logoWrapper}>
              {location.pathname !== homePagePath && (
                <Link to={-1} className={styles.header__backBtn}>
                  <Svg id={arrowPrevIcon} 
                    className={styles.header__btnIcon}/>
                </Link>
              )}
              <div className={styles.header__logoContainer}>
              
              {/*  <Link
                  to={homePagePath}
                  className={`${isHomePage ? styles.header__logo_lg : ""} ${
                    styles.header__logo
                  }`}
                >
                  <span>{logoText}</span>
                </Link>
                */}
                <span className={`${isHomePage ? styles.header__logo_lg : ""} ${
                    styles.header__logo
                  }`}>{logoText}</span>  

                {isSinglePage && (
                  <span className={styles.header__category}>video game</span>
                )}
              </div>
            </div>

            <Navbar />

         {}   <Link to={newProjectPagePath} className={styles.header__menuBtn}>
              +
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;