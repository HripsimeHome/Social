import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import Svg from "../../layout/Svg/Svg";

import {
  homePagePath,
  singlePagePath,
  // allPagePath
} from "../../../router/path";

import { arrowPrevIcon } from "../../../assets/svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleBackPage = () => {
    //navigate(homePagePath);
    navigate(-1); 
  };

  const toggleCategory = () => setIsExpanded((prev) => !prev);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className="container">
          <div className={styles.header__container}>
            <div className={styles.header__logoWrapper}>
              {location.pathname !== homePagePath && (
              <Link
                className={styles.header__backBtm}
                onClick={handleBackPage}
              >
                <Svg id={arrowPrevIcon} />
              </Link>
            )}
              <div className={styles.header__logoContainer}>
                <Link to={homePagePath} className={styles.header__logo}>
                  <span>CROWNDING</span>
                </Link>
                  
                <span
                  onClick={toggleCategory}
                  className={styles.header__category}
                >
                  category
                </span>

                <div
                  className={`${styles.header__expendedCategory} ${
                  isExpanded ? styles.active : ""
                  }`}
                >
                  <ul className={styles.header__categoryList}>
                    <li>Metaverse</li>
                    <li>Privacy</li>
                    <li>Stablecoins</li>
                    <li>DAOs</li>
                    <li>Oracles</li>
                    <li>Interoperability</li>
                    <li>Cybersecurity</li>
                    <li>Meme</li>
                    <li>AI</li>
                    <li>IoT</li>
                    <li>Social</li>
                    <li>Identity</li>
                    <li>Green</li>
                    <li>Cross-chain</li>
                    <li>Tokenization</li>
                    <li>Payments</li>
                    <li>Security Tokens</li>
                    <li>Infrastructure</li>
                    <li>Gaming</li>
                    <li>Advertising</li>
                    <li>Data Storage</li>
                    <li>Launchpads</li>                    
                  </ul>
                  <button className={`${styles.header__categoryBtnSave} btnlightGreen`}>
                    Save
                  </button>
                </div>
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