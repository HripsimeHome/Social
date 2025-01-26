import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import Svg from "../../layout/Svg/Svg";

import {
  homePagePath,
  singlePagePath,
  newProjectPagePath,
  // allPagePath
} from "../../../router/path";

import { arrowPrevIcon } from "../../../assets/svg";
import { gameCards } from "../../../constants/gameCards";

const categoriesList = [
  "Metaverse",
  "Privacy",
  "Stablecoins",
  "DAOs",
  "Oracles",
  "Interoperability",
  "Cybersecurity",
  "Meme",
  "AI",
  "IoT",
  "Social",
  "Identity",
  "Green",
  "Cross",
  "Tokenization",
  "Payments",
  "Security",
  "Infrastructure",
  "Gaming",
  "Advertising",
  "Data",
  "Launchpads",
];

const Header = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  let logoText = "CROWNDING";

  if (location.pathname.includes(singlePagePath)) {
    const id = location.pathname.replace(`${singlePagePath}/`, "");

    const curName = gameCards.find((item) => item.id === +id)?.gameName;
    if (curName) logoText = curName;
    
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
                <Link to={-1} className={styles.header__backBtm}>
                  <Svg id={arrowPrevIcon} />
                </Link>
              )}
              <div className={styles.header__logoContainer}>
                <Link to={homePagePath} className={styles.header__logo}>
                  <span>{logoText}</span>
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
                    {categoriesList.map((item, index) => (
                      <li key={index}>
                        <input type="checkbox" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`${styles.header__categoryBtnSave} btnlightGreen`}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <Navbar />

            <Link to={newProjectPagePath} className={styles.header__menuBtn}>
              +
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
