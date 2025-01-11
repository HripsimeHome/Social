import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { homePagePath, allPagePath } from "../../../router/path";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
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
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.header__fixed}>
          <Link to={homePagePath} className={styles.header__logo}>
            <span>CROWNDING</span>
          </Link>
        {/*  <Navbar className={styles.header__navbar} />*/}
          <Navbar />
          
          <button
            className={styles.header__menuBtn}
            onClick={() => navigate(allPagePath)}
          >
            +
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
