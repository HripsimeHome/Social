import styles from "./HomeMain.module.scss";
import { useState, useEffect } from "react";
import ProgressBarFunding from "../../layout/ProgressBarFunding/ProgressBarFunding";
import { Link } from "react-router-dom"
import { singlePagePath } from "../../../router/path"

import { videogame1Image, videogame2Image } from "../../../assets/images.js";

const HomeMain = () => {

  const [percentClass, setPercentClass] = useState(styles.percentBgColor);

  useEffect(() => {
    // Check if a value is stored in localStorage and update the class
    const storedClass = localStorage.getItem('percentClass');
    if (storedClass) {
      setPercentClass(storedClass);
    }
  }, []);

  const gameCard = [
    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "top",
     // isInTop: true,
      progress: {
        bakers: 15,
        percent: 45,
        daysToGo: 15,
      },
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "new",
      //isInTop: true,
      progress: {
        bakers: 20,
        percent: 15,
        daysToGo: 5,
      },
    },

    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "popular",
      //isInTop: true,
      progress: {
        bakers: 55,
        percent: 55,
        daysToGo: 65,
      },
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "new",
      progress: {
        bakers: 35,
        percent: 80,
        daysToGo: 5,
      },
    },

    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "popular",
      progress: {
        bakers: 64,
        percent: 85,
        daysToGo: 35,
      },
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "top",
      progress: {
        bakers: 9,
        percent: 20,
        daysToGo: 24,
      },
    },
  ];

  return (
    <>
      <section className={styles.homeMain}>
        {gameCard.map(
          (
            {
              gameName,
              gameType,
              gamePosition,
              backgroundImage,
              progress,
              //isInTop,
            },
            index
          ) => (
            
            <Link to={singlePagePath}
              className={styles.homeMain__card}
              key={index}
              style={{ backgroundImage }}
            >
              <div className={styles.homeMain__cardHeader}>
                <div className={styles.homeMain__cardGameNameBlock}>
                  <h2 className={styles.homeMain__cardGameName}>{gameName}</h2>
                  <span className={styles.homeMain__cardVideogame}>
                    {gameType}
                  </span>
                </div>
                {/* {isInTop && (
                    <div className={styles.homeMain__cardGamePosition}>
                      {gamePosition}
                    </div>
                  )}{" "}
                  */}

                <span className="labelPin">                  
                  {gamePosition}
                </span>               
              </div>
              <ProgressBarFunding
                {...progress}
                //  percent={progress.percent}
                //  bakers={progress.bakers}
                //  daysToGo={progress.daysToGo}
                 
                percentClass={styles.percentBgColor}
              />
            </Link>
          )
        )}
      </section>
    </>
  );
};

export default HomeMain;