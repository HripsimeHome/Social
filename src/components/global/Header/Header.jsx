import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import Svg from "../../layout/Svg/Svg";

import { homePagePath, 
  singlePagePath,
 // allPagePath 
} from "../../../router/path";

import {
  arrowPrevIcon,
} from "../../../assets/svg";


const Header = () => {

  const navigateBackPage = useNavigate();
  const handleBackPage = () => {
    navigateBackPage(-1);
    //("/page-a")
  }

  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
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
              <Link 
                className={styles.header__backBtm}
                onClick={handleBackPage}>
                  <Svg
                  id={arrowPrevIcon}
                    />
                </Link>

                <div className={styles.header__logoContainer}>
                <Link 
                  to={homePagePath} 
                  className={styles.header__logo}>
                  <span>CROWNDING</span>
                </Link>
                <span className={styles.header__category}>category</span>
                </div>
            </div>
            
            <Navbar />

            <Link to={singlePagePath} className={styles.header__menuBtn}>
              +
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
